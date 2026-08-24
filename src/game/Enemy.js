import * as THREE from 'three';
import { Fighter } from './Fighter.js';
import { dampAngle, randRange } from '../utils/MathUtils.js';

const PERSONALITIES = {
  aggressive: {
    detect: 30, engage: 2.8, keep: 1.7, strafeAmt: 0.35,
    blockChance: 0.18, cd: [0.9, 1.6], speedMul: 1.06
  },
  balanced: {
    detect: 26, engage: 2.9, keep: 2.5, strafeAmt: 0.6,
    blockChance: 0.45, cd: [1.4, 2.2], speedMul: 1.0
  },
  defensive: {
    detect: 24, engage: 3.2, keep: 3.2, strafeAmt: 0.85,
    blockChance: 0.72, cd: [1.9, 3.0], speedMul: 0.94
  }
};

const TYPES = ['aggressive', 'balanced', 'defensive'];

const _intent = new THREE.Vector3();

export class Enemy extends Fighter {
  constructor(game, index, spawnPos, colors, skinId = 'knight') {
    super(game, {
      name: `Knight_${String(index + 1).padStart(2, '0')}`,
      isEnemy: true,
      colors,
      pos: spawnPos,
      skin: skinId
    });
    const type = TYPES[index % TYPES.length];
    this.pKey = type;
    this.p = PERSONALITIES[type];
    this.speedMul = this.p.speedMul;

    this.state = 'wander';
    this.wanderTarget = new THREE.Vector3().copy(this.pos);
    this.thinkT = randRange(0.5, 3);
    this.reactT = 0;
    this.strafeDir = Math.random() < 0.5 ? -1 : 1;
    this.strafeT = randRange(1, 2.5);
    this.attackTimer = randRange(0.8, 2.2);
    this.blockT = 0;
    this.blockCd = 0;
    this.dashTimer = randRange(2, 5);
    this.slotHeld = false;

    this.target = null;
    this.retargetT = 0;
    this.retaliateTarget = null;
    this.retaliateT = 0;
  }

  acquireTarget() {
    const cands = [];
    for (const f of this.game.combat.fighters) {
      if (f !== this && !f.dead) {
        const dx = f.pos.x - this.pos.x;
        const dz = f.pos.z - this.pos.z;
        const d2 = dx * dx + dz * dz;
        if (d2 < 900) cands.push({ f, d2 });
      }
    }
    if (cands.length === 0) {
      this.target = null;
      return;
    }
    cands.sort((a, b) => a.d2 - b.d2);
    if (Math.random() < 0.75 || cands.length === 1) {
      this.target = cands[0].f;
    } else {
      this.target = cands[Math.floor(Math.random() * Math.min(cands.length, 3))].f;
    }
  }

  takeDamage(amount, attacker, hitPoint) {
    const res = super.takeDamage(amount, attacker, hitPoint);
    if (res && attacker && attacker !== this && !attacker.dead) {
      this.retaliateTarget = attacker;
      this.retaliateT = 6;
      if (this.state === 'wander') {
        this.state = 'chase';
        this.reactT = randRange(0.1, 0.5);
      }
    }
    return res;
  }

  releaseSlot() {
    if (this.slotHeld) {
      this.game.releaseSlot(this);
      this.slotHeld = false;
    }
  }

  onReleaseSlot() {
    this.releaseSlot();
  }

  onThreat(attacker) {
    if (this.dead) return;
    if (this.blockCd <= 0 && Math.random() < this.p.blockChance) {
      this.blockT = randRange(0.5, 0.95);
      this.blockCd = 1.8;
    } else if (Math.random() < 0.35 && attacker) {
      const ax = this.pos.x - attacker.pos.x;
      const az = this.pos.z - attacker.pos.z;
      this.tryDash(ax, az);
    } else {
      this.strafeDir *= -1;
    }
  }

  pickWanderTarget() {
    for (let i = 0; i < 8; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = randRange(12, 40);
      const x = this.pos.x + Math.sin(a) * r;
      const z = this.pos.z + Math.cos(a) * r;
      if (Math.abs(x) < 42 && Math.abs(z) < 42) {
        this.wanderTarget.set(x, 0, z);
        break;
      }
    }
    this.thinkT = randRange(4, 9);
  }

  update(dt) {
    const alive = this.updateCommon(dt);
    if (!alive) return;

    const g = this.game;
    const playing = g.state.phase === 'playing';

    if (this.retaliateT > 0) {
      this.retaliateT -= dt;
      if (this.retaliateT <= 0) this.retaliateTarget = null;
    }
    this.retargetT -= dt;
    const targetInvalid = !this.target || this.target.dead;
    if ((playing && targetInvalid && this.retargetT <= 0) || (playing && targetInvalid && this.state !== 'wander')) {
      if (this.retaliateTarget && !this.retaliateTarget.dead) this.target = this.retaliateTarget;
      else this.acquireTarget();
      this.retargetT = randRange(2.5, 4.5);
    }
    if (!playing) {
      this.target = null;
      this.releaseSlot();
      if (this.state !== 'wander') this.state = 'wander';
    }

    const t = this.target;
    const hasTarget = !!t && !t.dead && playing;
    const dx = hasTarget ? t.pos.x - this.pos.x : 0;
    const dz = hasTarget ? t.pos.z - this.pos.z : 0;
    const distP = hasTarget ? Math.hypot(dx, dz) : Infinity;

    _intent.set(0, 0, 0);
    let sprint = false;
    let faceYaw = null;
    this.dashTimer -= dt;

    switch (this.state) {
      case 'wander': {
        this.thinkT -= dt;
        const wdx = this.wanderTarget.x - this.pos.x;
        const wdz = this.wanderTarget.z - this.pos.z;
        const wd = Math.hypot(wdx, wdz);
        if (wd < 2 || this.thinkT <= 0) this.pickWanderTarget();
        else {
          _intent.set(wdx / wd, 0, wdz / wd).multiplyScalar(0.72);
          faceYaw = Math.atan2(_intent.x, _intent.z);
        }
        if (hasTarget && distP < this.p.detect) {
          this.state = 'chase';
          this.reactT = randRange(0.2, 0.8);
          g.audio.tone({ f0: 180, f1: 140, dur: 0.12, type: 'square', gain: 0.05 });
        }
        break;
      }

      case 'chase': {
        if (!hasTarget || distP > 42) {
          this.releaseSlot();
          this.state = 'wander';
          break;
        }
        faceYaw = Math.atan2(dx, dz);
        sprint = distP > 6;
        _intent.set(dx / distP, 0, dz / distP);
        if (this.reactT > 0) {
          this.reactT -= dt;
          _intent.multiplyScalar(0.4);
        }
        if (distP < this.p.engage + 0.5) {
          if (g.requestSlot(this)) {
            this.slotHeld = true;
            this.state = 'combat';
            this.attackTimer = randRange(0.15, 0.5);
          } else {
            this.state = 'circle';
          }
        }
        break;
      }

      case 'circle': {
        if (!hasTarget || distP > 40) {
          this.state = 'wander';
          break;
        }
        faceYaw = Math.atan2(dx, dz);
        this.strafeT -= dt;
        if (this.strafeT <= 0) {
          this.strafeDir *= -1;
          this.strafeT = randRange(1.2, 2.6);
        }
        const desired = this.p.engage + 2.2;
        let radial = 0;
        if (distP > desired + 0.6) radial = 0.55;
        else if (distP < desired - 0.6) radial = -0.45;
        _intent.set(
          (-dz / distP) * this.strafeDir * 0.85 + (dx / distP) * radial,
          0,
          (dx / distP) * this.strafeDir * 0.85 + (dz / distP) * radial
        );
        if (this.dashTimer <= 0 && distP > desired + 1.5) {
          if (Math.random() < 0.5) this.tryDash(dx / distP, dz / distP);
          this.dashTimer = randRange(3.0, 5.0);
        }
        if (distP < this.p.engage + 0.3 && this.attackTimer <= 0 && !this.attack) {
          if (this.startAttack()) {
            this.attackTimer = randRange(this.p.cd[0], this.p.cd[1]) * 1.8;
          }
        }
        if (hasTarget && distP < this.p.engage + 1.6 && g.requestSlot(this)) {
          this.slotHeld = true;
          this.state = 'combat';
          this.attackTimer = randRange(0.1, 0.45);
        }
        break;
      }

      case 'combat': {
        if (!hasTarget) {
          this.releaseSlot();
          this.state = 'wander';
          break;
        }
        faceYaw = Math.atan2(dx, dz);
        this.attackTimer -= dt;
        this.strafeT -= dt;
        if (this.strafeT <= 0) {
          if (Math.random() < 0.7) this.strafeDir *= -1;
          this.strafeT = randRange(0.8, 2.0);
        }
        let radial = 0;
        if (distP > this.p.keep + 0.5) radial = 1;
        else if (distP < this.p.keep - 0.5) radial = -0.8;
        _intent.set(
          (dx / distP) * radial + (-dz / distP) * this.strafeDir * this.p.strafeAmt,
          0,
          (dz / distP) * radial + (dx / distP) * this.strafeDir * this.p.strafeAmt
        );
        sprint = distP > this.p.keep + 3;

        if (this.dashTimer <= 0 && distP > this.p.engage + 1.5) {
          if (Math.random() < 0.5) this.tryDash(dx / distP, dz / distP);
          this.dashTimer = randRange(2.8, 4.5);
        }

        if (!this.attack && this.attackTimer <= 0 && distP < this.p.engage + 0.5) {
          if (this.startAttack()) {
            this.attackTimer = randRange(this.p.cd[0], this.p.cd[1]);
          }
        }

        if (distP > this.p.engage + 7) {
          this.releaseSlot();
          this.state = 'chase';
        }
        break;
      }
    }

    for (const o of g.combat.fighters) {
      if (o === this || o.dead) continue;
      const sx = this.pos.x - o.pos.x;
      const sz = this.pos.z - o.pos.z;
      const d2 = sx * sx + sz * sz;
      const minD = 1.7;
      if (d2 < minD * minD && d2 > 0.0001) {
        const d = Math.sqrt(d2);
        const push = ((minD - d) / minD) * 1.4;
        _intent.x += (sx / d) * push;
        _intent.z += (sz / d) * push;
      }
    }

    const ilen = _intent.length();
    if (ilen > 1) _intent.divideScalar(ilen);

    this.blockT -= dt;
    this.blockCd -= dt;
    this.setBlocking(this.blockT > 0);

    this.applyMovement(dt, { moveDir: _intent, sprint, jump: false });

    if (faceYaw !== null) {
      this.yaw = dampAngle(this.yaw, faceYaw, 10, dt);
    } else if (ilen > 0.05) {
      this.yaw = dampAngle(this.yaw, Math.atan2(_intent.x, _intent.z), 7, dt);
    }
    this.rig.setYaw(this.yaw);

    this.syncRigAnim(dt, {});
  }

  onRespawnReady() {
    const avoid = [];
    if (this.game.player) avoid.push({ pos: this.game.player.pos, radius: 14 });
    for (const e of this.game.enemies) {
      if (e !== this && !e.dead) avoid.push({ pos: e.pos, radius: 6 });
    }
    this.respawn(this.game.spawn.getSpawn(avoid));
  }

  respawn(pos) {
    super.respawn(pos);
    this.target = null;
    this.retaliateTarget = null;
    this.state = 'wander';
    this.thinkT = randRange(0.5, 2);
  }
}
