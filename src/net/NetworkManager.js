export class NetworkManager {
  constructor(game) {
    this.game = game;
    this.socket = null;
    this.connected = false;
    this.myId = null;
    this.sendTimer = 0;
  }

  connect() {
    if (this.socket) return;
    try {
      const proto = location.protocol === 'https:' ? 'wss' : 'ws';
      this.socket = new WebSocket(`${proto}://${location.host}/game-ws`);
      this.socket.onopen = () => {
        this.connected = true;
        console.log('%c[LAN] Connected to arena server', 'color:#7fd4ff');
      };
      this.socket.onmessage = (e) => {
        try {
          this.handle(JSON.parse(e.data));
        } catch (err) { /* ignore bad packet */ }
      };
      this.socket.onclose = () => {
        this.connected = false;
        this.myId = null;
        for (const id of [...this.game.remotes.keys()]) {
          this.game.removeRemotePlayer(id);
        }
      };
      this.socket.onerror = () => { /* offline play continues */ };
    } catch (e) {
      this.connected = false;
    }
  }

  send(msg) {
    if (this.socket && this.socket.readyState === 1) {
      try {
        this.socket.send(JSON.stringify(msg));
      } catch (e) { /* ignore */ }
    }
  }

  handle(m) {
    if (!m || !m.t) return;
    switch (m.t) {
      case 'welcome': {
        this.myId = m.id;
        if (Array.isArray(m.others)) {
          for (const id of m.others) this.game.addRemotePlayer(id);
        }
        break;
      }
      case 'player-joined':
        if (m.id && m.id !== this.myId) this.game.addRemotePlayer(m.id);
        break;
      case 'player-left':
        if (m.id) this.game.removeRemotePlayer(m.id);
        break;
      case 'state': {
        const r = this.game.remotes.get(m.id);
        if (r) r.applyState(m);
        break;
      }
      case 'attack': {
        const r = this.game.remotes.get(m.id);
        if (r) r.applyAttack(m.type);
        break;
      }
      case 'hit': {
        if (m.targetId === this.myId && this.game.player && !this.game.player.dead) {
          const atk = {
            pos: this.game.player.pos.clone().add(
              this.game.player.fwd().multiplyScalar(-2)
            ),
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
    if (!this.connected || !this.game.player || this.game.state.phase !== 'playing') return;
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
      hp: Math.round(p.hp)
    });
  }
}
