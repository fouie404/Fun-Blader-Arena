import { clamp } from '../utils/MathUtils.js';

// NetworkManager — peer-to-peer room relay over the backend WebSocket.
// Each client broadcasts its own player state; every client renders a RemotePlayer
// for the other peers in the room. ONLINE BOTS ARE HOST-AUTHORITATIVE: only the
// room host simulates bots and broadcasts their state ('bots'/'bstates'/'botattack'),
// so every client sees the exact same bots. Works entirely offline if disconnected.
export class NetworkManager {
  constructor(game, backend) {
    this.game = game;
    this.backend = backend;
    this.socket = null;
    this.connected = false;
    this.myId = null;
    this.hostId = null;
    this.roomId = null;
    this.name = '';
    this.skin = 'knight';
    this.map = 'citadel';
    this.sendTimer = 0;
  }

  get amHost() {
    return !!(this.myId && this.hostId && this.myId === this.hostId);
  }

  _setHost(id) {
    if (!id || id === this.hostId) return;
    const wasMe = this.amHost;
    this.hostId = id;
    const isMe = this.amHost;
    if (isMe) this.game.onBecomeBotHost();
    else if (wasMe) this.game.onBotHostLost();
  }

  async connect(roomId, opts = {}) {
    this.roomId = roomId;
    this.name = opts.name || this.game.state.settings.playerName || 'player';
    this.skin = opts.skin || this.game.state.settings.skin || 'knight';
    this.map = opts.map || 'citadel';
    this.hostId = null;
    if (this.socket) { try { this.socket.close(); } catch { /* ignore */ } }
    if (this.backend) {
      // Anonymous guest session (no account) — required to open the websocket.
      const ok = await this.backend.ensureSession(this.name);
      if (!ok || !this.backend.token) { this.connected = false; return; }
    }
    try {
      const base = this.backend.wsBase();
      const url = `${base}/ws?token=${encodeURIComponent(this.backend.token)}&server=${encodeURIComponent(roomId)}`;
      this.socket = new WebSocket(url);
      this.socket.onopen = () => {
        this.connected = true;
        this.send({ t: 'hello', name: this.name, skin: this.skin, map: this.map });
      };
      this.socket.onmessage = (e) => {
        try { this.handle(JSON.parse(e.data)); } catch (err) { /* ignore bad packet */ }
      };
      this.socket.onclose = (e) => {
        this.connected = false;
        this.myId = null;
        this.hostId = null;
        if (e && e.code === 4003) this.game.onKickedFromServer();
        for (const id of [...this.game.remotes.keys()]) this.game.removeRemotePlayer(id);
      };
      this.socket.onerror = () => { this.connected = false; };
    } catch (e) { this.connected = false; }
  }

  send(msg) {
    if (this.socket && this.socket.readyState === 1) {
      try { this.socket.send(JSON.stringify(msg)); } catch { /* ignore */ }
    }
  }

  sendAttack(type) {
    this.send({ t: 'attack', id: this.myId, type });
  }

  get connectedNow() { return this.connected && this.socket && this.socket.readyState === 1; }

  handle(m) {
    if (!m || !m.t) return;
    switch (m.t) {
      case 'welcome':
        this.myId = m.id;
        this._setHost(m.hostId || null);
        break;
      case 'roster': {
        if (m.hostId) this._setHost(m.hostId);
        if (Array.isArray(m.peers)) {
          for (const p of m.peers) {
            if (p.id && p.id !== this.myId) this.game.addRemotePlayer(p);
          }
        }
        break;
      }
      case 'host':
        this._setHost(m.id || null);
        break;
      case 'player-joined':
        if (m.peer && m.peer.id && m.peer.id !== this.myId) this.game.addRemotePlayer(m.peer);
        break;
      case 'player-left':
        if (m.id && m.id !== this.myId) this.game.removeRemotePlayer(m.id);
        break;
      case 'state': {
        if (!m.id || m.id === this.myId) break;
        const r = this.game.remotes.get(m.id);
        if (r) r.applyState(m);
        break;
      }
      case 'attack': {
        if (!m.id || m.id === this.myId) break;
        const r = this.game.remotes.get(m.id);
        if (r) r.applyAttack(m.type);
        break;
      }
      // ---- host-authoritative bots ----
      case 'bots': // full bot snapshot from the host
        this.game.setNetBots(m.list || []);
        break;
      case 'bstates': // 10 Hz bot state batch: [id, x, y, z, yaw, spd, blk, dead, hp]
        if (Array.isArray(m.b)) this.game.applyNetBotStates(m.b);
        break;
      case 'botattack':
        if (m.id) this.game.netBotAttack(m.id, m.type);
        break;
      // ---- play-again vote + match-end sync (host = authority) ----
      case 'round-end':
        this.game.onHostRoundEnd();
        break;
      case 'vote-open':
        this.game.onVoteOpen(m.total || 0);
        break;
      case 'vote':
        this.game.onVoteTally(m.yes || 0, m.total || 0, m.left || 0);
        break;
      case 'voteclose':
        this.game.onVoteClose(!!m.replay);
        break;
      case 'myvote':
        if (m.fromId) this.game.onNetVote(m.fromId, !!m.v);
        break;
      case 'hit': {
        if (typeof m.targetId === 'string' && m.targetId.startsWith('bot:')) {
          this.game.applyBotHit(m); // a net-bot (owned by the host) was hit — host applies it
          break;
        }
        if (m.targetId === this.myId && this.game.player && !this.game.player.dead) {
          const atk = {
            pos: this.game.player.pos.clone().add(this.game.player.fwd().multiplyScalar(-2)),
            stats: m.by ? { name: m.by, kills: 0, deaths: 0 } : null,
            isPlayer: !!m.isP
          };
          this.game.player.takeDamage(m.dmg, atk, null, { final: true });
        }
        break;
      }
      default:
        break;
    }
  }

  update(dt) {
    if (!this.connectedNow || !this.game.player || this.game.state.phase !== 'playing') return;
    this.sendTimer -= dt;
    if (this.sendTimer > 0) return;
    this.sendTimer = 0.08;
    const p = this.game.player;
    this.send({
      t: 'state',
      id: this.myId,
      x: +p.pos.x.toFixed(2),
      y: +p.pos.y.toFixed(2),
      z: +p.pos.z.toFixed(2),
      yaw: +p.yaw.toFixed(2),
      spd: +Math.hypot(p.vel.x, p.vel.z).toFixed(1),
      blk: p.blocking ? 1 : 0,
      dead: p.dead ? 1 : 0,
      hp: Math.round(clamp(p.hp, 0, 100))
    });
  }

  dispose() {
    if (this.socket) { try { this.socket.close(); } catch { /* ignore */ } }
    this.socket = null;
    this.connected = false;
    this.myId = null;
    this.hostId = null;
  }
}
