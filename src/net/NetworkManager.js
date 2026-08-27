import { clamp } from '../utils/MathUtils.js';

// NetworkManager — peer-to-peer room relay over the backend WebSocket.
// Each client broadcasts its own player state; every client renders a RemotePlayer
// for the other peers in the room. Bots fill empty slots locally and are replaced
// by a RemotePlayer when a real peer joins. Works entirely offline if disconnected.
export class NetworkManager {
  constructor(game, backend) {
    this.game = game;
    this.backend = backend;
    this.socket = null;
    this.connected = false;
    this.myId = null;
    this.roomId = null;
    this.name = '';
    this.skin = 'knight';
    this.map = 'citadel';
    this.sendTimer = 0;
  }

  connect(roomId, opts = {}) {
    this.roomId = roomId;
    this.name = opts.name || this.game.state.settings.playerName || 'player';
    this.skin = opts.skin || this.game.state.settings.skin || 'knight';
    this.map = opts.map || 'citadel';
    if (this.socket) { try { this.socket.close(); } catch { /* ignore */ } }
    if (!this.backend || !this.backend.token) { this.connected = false; return; }
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
      this.socket.onclose = () => {
        this.connected = false;
        this.myId = null;
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
        break;
      case 'roster': {
        if (Array.isArray(m.peers)) {
          for (const p of m.peers) {
            if (p.id && p.id !== this.myId) this.game.addRemotePlayer(p);
          }
        }
        break;
      }
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
      case 'hit': {
        if (m.targetId === this.myId && this.game.player && !this.game.player.dead) {
          const atk = {
            pos: this.game.player.pos.clone().add(this.game.player.fwd().multiplyScalar(-2)),
            stats: null,
            isPlayer: false
          };
          this.game.player.takeDamage(m.dmg, atk, null);
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
  }
}
