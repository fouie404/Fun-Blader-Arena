import * as THREE from 'three';
import { CharacterRig } from './CharacterRig.js';
import { dampAngle } from '../utils/MathUtils.js';

export const WALK_SPEED = 6.2;
export const RUN_SPEED = 9.8;

export const ATTACKS = {
  slash: {
    key: 'slash', label: 'Horizontal Slash', dmg: 20, range: 3.15,
    arcCos: Math.cos(1.31),
    dur: 0.55, activeStart: 0.30, activeEnd: 0.52, cool: 0.14, lunge: 2.2, fx: 'h'
  },
  slashR: {
    key: 'slashR', label: 'Reverse Slash', dmg: 20, range: 3.15,
    arcCos: Math.cos(1.31),
    dur: 0.55, activeStart: 0.30, activeEnd: 0.52, cool: 0.14, lunge: 2.2, fx: 'h', mirror: true
  },
  strong: {
    key: 'strong', label: 'Heavy Thrust', dmg: 35, range: 3.8,
    arcCos: Math.cos(0.66),
    dur: 0.92, activeStart: 0.44, activeEnd: 0.64, cool: 0.34, lunge: 3.6, fx: 'v'
  }
};

export const COMBO = ['slash', 'slashR', 'strong'];
export const BLOCK_DMG = 5;

const _dir = new THREE.Vector3();

export class Fighter {
  constructor(game, { name, colors, pos, isPlayer = false, isEnemy = false, skin = 'knight', stats = null }) {
    this.game = game;
    this.name = name;
    this.isPlayer = isPlayer;
    this.isEnemy = isEnemy;
    this.speedMul = 1;

    this.stats = stats || { name, kills: 0, deaths: 0 };
    if (!stats) game.state.register(this.stats);

    this.pos = new THREE.Vector3().copy(pos);
    this.vel = new THREE.Vector3();
    this.yaw = Math.atan2(-this.pos.x, -this.pos.z);
    this.radius = 0.45;
    this.height = 1.8;
    this.grounded = true;
    this.wasGrounded = true;

    this.maxHp = 100;
    this.hp = 100;
    this.dead = false;
    this.deadT = 0;
    this.respawnT = 0;
    this.invulnT = 0;

    this.blocking = false;
    this.blockStaggerT = 0;
    this.attack = null;
    this.cooldownT = 0;
    this.comboIdx = 0;
    this.comboResetT = 0;
    this.bufferedAttackT = 0;

    this.dashT = 0;
    this.dashCdT = 0;
    this.landT = 0;

    this.footAcc = 0;

    this.rig = new CharacterRig({
      name,
      primary: colors.primary,
      secondary: colors.secondary,
      accent: colors.accent,
      isPlayer,
      skin
    });
    this.rig.root.position.copy(this.pos);
    this.rig.root.rotation.y = this.yaw;
    game.scene.add(this.rig.root);

    game.combat.register(this);
  }

  fwd(out = _dir) {
    return out.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));
  }

  canAct() {
    return !this.dead;
  }

  canAttack() {
    return !this.dead && !this.attack && this.cooldownT <= 0 && !this.blocking;
  }

  requestAttack() {
    this.bufferedAttackT = 0.22;
  }

  tryDash(dx, dz) {
    if (this.dead || this.dashCdT > 0 || !this.grounded || this.blocking) return false;
    const l = Math.hypot(dx, dz) || 1;
    this.vel.x = (dx / l) * 17;
    this.vel.z = (dz / l) * 17;
    this.vel.y = Math.max(this.vel.y, 1.6);
    this.dashT = 0.22;
    this.dashCdT = 1.05;
    this.game.audio.dash();
    return true;
  }

  setBlocking(v) {
    this.blocking = !!v && !this.dead && !this.attack;
  }

  startAttack() {
    if (!this.canAttack()) return false;
    const key = COMBO[this.comboIdx];
    const def = ATTACKS[key];
    this.attack = { def, t: 0, hit: new Set(), swung: false };
    this.comboIdx = (this.comboIdx + 1) % COMBO.length;
    this.comboResetT = 1.0;
    this.bufferedAttackT = 0;
    const f = this.fwd(_dir);
    this.vel.x += f.x * def.lunge;
    this.vel.z += f.z * def.lunge;
    return true;
  }

  beginAttackIfReady() {
    if (this.bufferedAttackT > 0 && this.canAttack()) {
      this.startAttack();
    }
  }

  updateCommon(dt) {
    if (this.cooldownT > 0) this.cooldownT -= dt;
    if (this.invulnT > 0) this.invulnT -= dt;
    if (this.blockStaggerT > 0) this.blockStaggerT -= dt;
    if (this.bufferedAttackT > 0) this.bufferedAttackT -= dt;
    if (this.dashCdT > 0) this.dashCdT -= dt;
    if (this.landT > 0) this.landT = Math.max(0, this.landT - dt);
    if (this.comboResetT > 0) {
      this.comboResetT -= dt;
      if (this.comboResetT <= 0) this.comboIdx = 0;
    }

    if (this.dead) {
      this.deadT += dt;
      if (!this.isPlayer && this.respawnT > 0) {
        this.respawnT -= dt;
        if (this.respawnT <= 0) this.onRespawnReady();
      }
      this.rig.update(dt, { dead: true, deadT: this.deadT, speedRatio: 0 });
      return false;
    }

    if (this.attack) {
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
        this.cooldownT = def.cool;
      }
    }

    this.beginAttackIfReady();
    return true;
  }

  applyMovement(dt, intent) {
    const move = intent.moveDir;

    if (this.dashT > 0) {
      this.dashT -= dt;
    } else {
      let speed = (intent.sprint ? RUN_SPEED : WALK_SPEED) * this.speedMul;
      if (this.blocking) speed *= 0.48;
      else if (this.blockStaggerT > 0) speed *= 0.4;
      else if (this.attack) speed *= 0.35;

      const tx = move.x * speed;
      const tz = move.z * speed;
      const k = Math.min(1, (this.grounded ? 11 : 3.2) * dt);
      this.vel.x += (tx - this.vel.x) * k;
      this.vel.z += (tz - this.vel.z) * k;
    }

    if (intent.jump && this.grounded) {
      this.vel.y = 8.6;
      this.grounded = false;
      this.game.audio.jump();
    }

    this.vel.y -= 22 * dt;
    this.pos.addScaledVector(this.vel, dt);

    const gh = this.game.collision.groundHeightAt(this.pos.x, this.pos.z, this.pos.y);
    if (this.pos.y <= gh + 0.001 && this.vel.y <= 0) {
      if (!this.wasGrounded && this.vel.y < -8) {
        this.game.audio.land();
        this.landT = 0.28;
      }
      this.pos.y = gh;
      this.vel.y = 0;
      this.grounded = true;
    } else {
      this.grounded = false;
    }

    this.game.collision.resolveEntity(this);

    const hs = Math.hypot(this.vel.x, this.vel.z);
    if (this.grounded && hs > 1.4) {
      this.footAcc += hs * dt;
      const stride = intent.sprint ? 2.7 : 2.15;
      if (this.footAcc > stride) {
        this.footAcc = 0;
        this.game.audio.footstep(intent.sprint);
      }
    }
    this.wasGrounded = this.grounded;

    this.rig.root.position.copy(this.pos);
    this.rig.setHealthBar(this.hp / this.maxHp);
  }

  takeDamage(amount, attacker, hitPoint, opts = {}) {
    void hitPoint;
    if (this.dead || this.invulnT > 0) return null;

    const dx = this.pos.x - attacker.pos.x;
    const dz = this.pos.z - attacker.pos.z;
    const len = Math.hypot(dx, dz) || 1;
    const nx = dx / len, nz = dz / len;
    const f = this.fwd(_dir);
    const facingDot = f.x * -nx + f.z * -nz;
    // opts.final = damage already resolved (blocking applied) by the authoritative
    // simulator — used for network-relayed hits so blocking is not reduced twice.
    const blocked = opts.final ? false : (this.blocking && facingDot > -0.15 && !this.attack);

    const dmg = blocked ? BLOCK_DMG : amount;
    this.hp = Math.max(0, this.hp - dmg);
    this.rig.hitFlash();
    if (!blocked) this.rig.setHealthBar(this.hp / this.maxHp);

    const kb = blocked ? 2.4 : 4.2;
    this.vel.x += nx * kb;
    this.vel.z += nz * kb;
    if (!blocked && this.grounded) this.vel.y = Math.min(this.vel.y + 2.2, 4);
    if (blocked) this.blockStaggerT = 0.28;

    if (this.hp <= 0) {
      this.die(attacker);
    }

    return { dmg, blocked };
  }

  die(attacker) {
    this.dead = true;
    this.stats.deaths++;
    this.attack = null;
    this.blocking = false;
    this.bufferedAttackT = 0;
    this.deadT = 0;
    this.respawnT = this.isPlayer ? 3.2 : 4.5;

    if (this.onReleaseSlot) this.onReleaseSlot();

    this.game.audio.death();
    this.game.combat.deathFX(this);

    if (attacker && attacker !== this && attacker.stats) {
      attacker.stats.kills++;
      if (attacker.isPlayer) {
        this.game.hud.showElimination();
        this.game.audio.elimination();
        this.game.addCoins(20);
      }
      if (attacker.startTaunt && Math.random() < 0.2) {
        attacker.startTaunt();
      }
    }

    if (this.isPlayer) {
      this.game.hud.setHP(0, this.maxHp);
      this.game.onPlayerDied();
    }
  }

  onRespawnReady() {
    void 0;
  }

  respawn(pos) {
    this.pos.copy(pos);
    this.vel.set(0, 0, 0);
    this.hp = this.maxHp;
    this.dead = false;
    this.deadT = 0;
    this.respawnT = 0;
    this.invulnT = 1.4;
    this.cooldownT = 0.3;
    this.attack = null;
    this.blocking = false;
    this.blockStaggerT = 0;
    this.comboIdx = 0;
    this.comboResetT = 0;
    this.bufferedAttackT = 0;
    this.grounded = true;
    this.rig.reset();
    this.rig.root.position.copy(this.pos);
  }

  syncRigAnim(dt, extra = {}) {
    const hs = Math.hypot(this.vel.x, this.vel.z);
    this.rig.update(dt, {
      speedRatio: Math.min(1, hs / RUN_SPEED),
      grounded: this.grounded,
      blocking: this.blocking,
      attack: this.attack ? { type: this.attack.def.key, p: this.attack.t / this.attack.def.dur } : null,
      invulnBlink: this.invulnT > 0,
      dash: this.dashT > 0 ? this.dashT / 0.22 : 0,
      land: this.landT > 0 ? this.landT / 0.28 : 0,
      ...extra
    });
  }

  dispose() {
    this.game.scene.remove(this.rig.root);
    this.rig.dispose();
  }
}
