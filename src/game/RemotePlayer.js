import * as THREE from 'three';
import { Fighter, ATTACKS, RUN_SPEED } from './Fighter.js';
import { SKINS } from './Skins.js';
import { dampAngle, clamp } from '../utils/MathUtils.js';

const _stubPos = new THREE.Vector3();

export class RemotePlayer extends Fighter {
  constructor(game, netId, stats, pos, skinId) {
    super(game, {
      name: stats.name,
      isPlayer: false,
      isEnemy: false,
      colors: SKINS[skinId] || SKINS.knight,
      pos,
      skin: skinId,
      stats
    });
    this.netId = netId;
    this.netPos = pos.clone();
    this.netYaw = this.yaw;
    this.netSpeed = 0;
    this.netBlocking = false;
    this.netHp = 100;
    this.netDead = false;
  }

  applyState(s) {
    this.netPos.set(s.x, s.y, s.z);
    this.netYaw = s.yaw || 0;
    this.netSpeed = s.spd || 0;
    this.netBlocking = !!s.blk;
    this.netHp = clamp(typeof s.hp === 'number' ? s.hp : 100, 0, 100);
    this.netDead = !!s.dead;

    if (this.netDead && !this.dead) {
      this.die(null);
      this.respawnT = 1e9;
    } else if (!this.netDead && this.dead) {
      this.respawn(this.netPos.clone());
    } else if (!this.dead) {
      this.hp = this.netHp;
    }
  }

  applyAttack(type) {
    if (this.dead || this.attack) return;
    const def = ATTACKS[type];
    if (!def) return;
    this.attack = { def, t: 0, hit: new Set(), swung: false };
  }

  takeDamage(amount, attacker, hitPoint) {
    const res = super.takeDamage(amount, attacker, hitPoint);
    if (res) {
      this.game.network.send({
        t: 'hit',
        targetId: this.netId,
        dmg: res.dmg,
        blocked: res.blocked
      });
    }
    return res;
  }

  onRespawnReady() {
    void 0;
  }

  stubAttackerFor() {
    void _stubPos;
  }

  update(dt) {
    const alive = this.updateCommon(dt);
    if (!alive) {
      this.rig.setYaw(this.yaw);
      return;
    }

    const k = Math.min(1, dt * 12);
    this.pos.x += (this.netPos.x - this.pos.x) * k;
    this.pos.y += (this.netPos.y - this.pos.y) * k;
    this.pos.z += (this.netPos.z - this.pos.z) * k;
    this.yaw = dampAngle(this.yaw, this.netYaw, 14, dt);
    this.grounded = true;

    this.setBlocking(this.netBlocking);
    this.updateAttackOnly(dt);

    this.rig.root.position.copy(this.pos);
    this.rig.setHealthBar(this.hp / this.maxHp);
    this.rig.setYaw(this.yaw);
    this.syncRigAnim(dt, {
      speedRatio: Math.min(1, this.netSpeed / RUN_SPEED),
      grounded: true
    });
  }

  updateAttackOnly(dt) {
    if (!this.attack) return;
    const a = this.attack;
    const def = a.def;
    a.t += dt;
    if (!a.swung && a.t >= def.activeStart) {
      a.swung = true;
      const kind = def.key === 'strong' ? 2 : def.key === 'slashR' ? 1 : 0;
      this.game.audio.swing(kind);
      this.game.combat.notifyAttack(this);
      this.game.combat.spawnSlashFX(this, def);
    }
    if (a.t >= def.activeStart && a.t <= def.activeEnd) {
      this.game.combat.sweep(this, a);
    }
    if (a.t >= def.dur) {
      this.attack = null;
    }
  }
}
