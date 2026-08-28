import * as THREE from 'three';
import { Fighter } from './Fighter.js';
import { dampAngle, randRange, randPick } from '../utils/MathUtils.js';

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

const NAME_A = ['dark', 'shadow', 'wolf', 'iron', 'storm', 'blaze', 'ghost', 'night', 'razor', 'silent', 'toxic', 'frost', 'wild', 'cyber', 'lucky', 'angry', 'epic', 'sneaky', 'mad', 'pro', 'salty', 'hyper'];
const NAME_B = ['john', 'slayer', 'blade', 'x', 'king', 'lord', 'hunter', 'reaper', 'ninja', 'gamer', 'max', 'sam', 'alex', 'rex', 'kai', 'fox', 'bear', 'mann', 'dilina', 'wow'];

export function fakeName(used) {
  for (let i = 0; i < 25; i++) {
    let n;
    const r = Math.random();
    if (r < 0.35) n = randPick(NAME_A) + randPick(NAME_B);
    else if (r < 0.6) n = randPick(NAME_A) + randPick(NAME_B) + Math.floor(Math.random() * 100);
    else if (r < 0.8) n = randPick(NAME_B) + '_' + randPick(NAME_A);
    else n = randPick(NAME_B) + Math.floor(Math.random() * 1000);
    if (!used.has(n.toLowerCase())) {
      used.add(n.toLowerCase());
      return n;
    }
  }
  const fallback = 'player_' + Math.floor(Math.random() * 100000);
  used.add(fallback.toLowerCase());
  return fallback;
}

const _intent = new THREE.Vector3();

export class Enemy extends Fighter {
  constructor(game, index, spawnPos, colors, skinId = 'knight', tier = 'normal') {
    super(game, {
      name: fakeName(game.usedNames || (game.usedNames = new Set())),
      isEnemy: true,
      colors,
      pos: spawnPos,
      skin: skinId
    });
    this.tier = tier;
    this.isPro = tier !== 'normal';
    const type = TYPES[index % TYPES.length];
    this.pKey = type;
    if (tier === 'skilled') {
      this.p = {
        detect: 45, engage: 3.0, keep: 2.0, strafeAmt: 0.55,
        blockChance: 0.85, cd: [0.6, 1.1], speedMul: 1.12
      };
    } else if (tier === 'pro') {
      this.p = {
        detect: 42, engage: 3.0, keep: 2.0, strafeAmt: 0.55,
        blockChance: 0.78, cd: [0.8, 1.4], speedMul: 1.1
      };
    } else {
      this.p = PERSONALITIES[type];
    }
    this.speedMul = this.p.speedMul;
    this.diamondTarget = null;
    this._diaT = Math.random() * 0.5;
    this.tauntT = 0;
    this.processT = 0;
    this._processBase = 0;
    this._processedDeath = false;

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
    this.dodgeJumpT = 0;
    this._stuckT = 0;
    this.fleeAt = Infinity;
    this.fleeT = 0;
    this.afkT = 0;
    this.lookAround = false;
    this.hopperT = 0;
    this.hopDirT = 0;
    this._hopCd = 0;
    this._hopStateCd = randRange(14, 22);
    this._afkCd = randRange(12, 20);
    this._afkBase = 0;
    this._t = Math.random() * 10;
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

  takeDamage(amount, attacker, hitPoint, opts = {}) {
    const res = super.takeDamage(amount, attacker, hitPoint, opts);
    if (this.tauntT > 0) {
      this.tauntT = 0;
      this.setBlocking(false);
      this.state = 'chase';
      this.reactT = 0.1;
    }
    if (res && attacker && attacker !== this && !attacker.dead) {
      if (this.state === 'afk') {
        this.state = 'chase';
      }
      if (this.state === 'hopper' && Math.random() < 0.5) {
        this.state = 'chase';
        this.reactT = 0.2;
      }
      const isCurrentTarget = this.target === attacker;
      if (!isCurrentTarget && Math.random() < 0.6) {
        this.retaliateTarget = attacker;
        this.target = attacker;
        this.retargetT = randRange(3, 5);
      } else if (!this.retaliateTarget || Math.random() < 0.3) {
        this.retaliateTarget = attacker;
      }
      this.retaliateT = 6;
      if (this.state === 'wander' || this.state === 'afk') {
        this.state = 'chase';
        this.reactT = randRange(0.1, 0.5);
      }
      if (this.state === 'flee' && Math.random() < 0.4) {
        this.state = 'combat';
        this.attackTimer = 0.2;
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
      this.blockCd = this.isPro ? 1.0 : 1.8;
    } else if (this.isPro && Math.random() < 0.35) {
      this.dodgeJumpT = 0.25;
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

  startTaunt() {
    this.tauntT = randRange(3, 5);
    this.attack = null;
    this.blockT = 0;
    this.releaseSlot();
    this.state = 'taunt';
  }

  update(dt) {
    this._t += dt;

    if (this.tauntT > 0) {
      this.tauntT -= dt;
      this.setBlocking(Math.sin(this.tauntT * 22) > 0);
      this.applyMovement(dt, { moveDir: _intent.set(0, 0, 0), sprint: false, jump: this.grounded });
      this.rig.root.position.copy(this.pos);
      this.rig.setYaw(this.yaw);
      this.syncRigAnim(dt, { lookAround: false });
      if (this.tauntT <= 0) {
        this.setBlocking(false);
        this.state = 'wander';
        this.pickWanderTarget();
      }
      return;
    }

    const alive = this.updateCommon(dt);
    if (!alive) return;

    const g = this.game;
    const playing = g.state.phase === 'playing';

    if (this.retaliateT > 0) {
      this.retaliateT -= dt;
      if (this.retaliateT <= 0) this.retaliateTarget = null;
    }
    this.retargetT -= dt;
    if (this.target && this.target.dead && !this._processedDeath) {
      this._processedDeath = true;
      let near = null;
      let nd = 25;
      for (const f of g.combat.fighters) {
        if (f === this || f.dead) continue;
        const ddx = f.pos.x - this.pos.x;
        const ddz = f.pos.z - this.pos.z;
        const d2 = ddx * ddx + ddz * ddz;
        if (d2 < nd) {
          nd = d2;
          near = f;
        }
      }
      if (near) {
        this.target = near;
        this.retaliateTarget = near;
        this.retaliateT = 6;
        this.state = nd < 9 ? 'combat' : 'chase';
        this.attackTimer = Math.min(this.attackTimer, 0.4);
      } else {
        this.target = null;
        this.state = 'wander';
        this.pickWanderTarget();
      }
    }
    if (this.target && !this.target.dead) {
      this._processedDeath = false;
    }
    const targetInvalid = !this.target || this.target.dead;

    if (playing && this.retargetT <= 0) {
      this.retargetT = randRange(1.5, 2.5);
      let nearest = null;
      let nearestD = Infinity;
      for (const f of g.combat.fighters) {
        if (f === this || f.dead) continue;
        const ddx = f.pos.x - this.pos.x;
        const ddz = f.pos.z - this.pos.z;
        const d2 = ddx * ddx + ddz * ddz;
        if (d2 < nearestD) {
          nearestD = d2;
          nearest = f;
        }
      }
      if (nearest) {
        const curD = targetInvalid ? Infinity : Math.hypot(this.target.pos.x - this.pos.x, this.target.pos.z - this.pos.z);
        if (targetInvalid || nearest !== this.target) {
          const nearD = Math.sqrt(nearestD);
          if (targetInvalid || nearD + 1.2 < curD || (this.state !== 'combat' && nearD < curD)) {
            this.target = nearest;
          }
        }
      }
    }

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
        if (wd < 2 || this.thinkT <= 0) {
          this.pickWanderTarget();
          const roll = Math.random();
          if (roll < 0.1 && this._afkCd <= 0) {
            this.state = 'afk';
            this.afkT = randRange(3, 6);
            this._afkBase = this.yaw;
            this._afkSpin = Math.random() < 0.15;
            this._afkSpinSpeed = randRange(1, 2.2) * (Math.random() < 0.5 ? -1 : 1);
            this._afkSwaySpeed = randRange(0.4, 1);
            this._afkSwayAmp = randRange(0.5, 0.9);
            this._afkCd = randRange(12, 20);
            break;
          }
          if (roll < 0.2 && this._hopStateCd <= 0) {
            this.state = 'hopper';
            this.hopperT = randRange(3, 6);
            this.hopDirT = 0;
            this._hopCd = 0;
            this._hopStateCd = randRange(14, 22);
            break;
          }
        } else {
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

      case 'afk': {
        this.afkT -= dt;
        if (this._afkSpin) {
          faceYaw = this._afkBase + this._t * this._afkSpinSpeed;
        } else {
          faceYaw = this._afkBase + Math.sin(this._t * this._afkSwaySpeed) * this._afkSwayAmp;
        }
        if (this.afkT <= 0) {
          this.state = 'wander';
          this.pickWanderTarget();
          break;
        }
        if (hasTarget && distP < 9) {
          this.state = 'chase';
          this.reactT = 0.1;
        }
        break;
      }

      case 'hopper': {
        this.hopperT -= dt;
        this._hopCd -= dt;
        if (this.hopperT <= 0) {
          this.state = 'wander';
          this.pickWanderTarget();
          break;
        }
        this.hopDirT -= dt;
        if (this.hopDirT <= 0) {
          const a = Math.random() * Math.PI * 2;
          this._hopDir = this._hopDir || new THREE.Vector3();
          this._hopDir.set(Math.sin(a), 0, Math.cos(a));
          this.hopDirT = randRange(0.6, 1.3);
        }
        _intent.copy(this._hopDir);
        sprint = true;
        faceYaw = Math.atan2(_intent.x, _intent.z);
        if (this.grounded && this._hopCd <= 0) {
          this.dodgeJumpT = 0.15;
          this._hopCd = 0.28;
        }
        break;
      }

      case 'flee': {
        this.fleeT -= dt;
        if (!hasTarget || this.fleeT <= 0 || distP > 25) {
          this.state = hasTarget ? 'combat' : 'wander';
          this.attackTimer = 0.3;
          break;
        }
        faceYaw = Math.atan2(dx, dz);
        sprint = true;
        _intent.set(-dx / distP, 0, -dz / distP);
        if (distP < 5) {
          _intent.x += (-dz / distP) * this.strafeDir * 0.7;
          _intent.z += (dx / distP) * this.strafeDir * 0.7;
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
        sprint = true;
        _intent.set(dx / distP, 0, dz / distP);
        if (this.reactT > 0) {
          this.reactT -= dt;
          _intent.multiplyScalar(0.4);
        }
        if (distP < this.p.engage + 0.5) {
          if (this.isPro) {
            this.state = 'combat';
            this.attackTimer = Math.min(this.attackTimer, 0.3);
            if (Math.random() < 0.3) this.fleeAt = randRange(2, 5);
          } else if (g.requestSlot(this)) {
            this.slotHeld = true;
            this.state = 'combat';
            this.attackTimer = randRange(0.15, 0.5);
            if (Math.random() < 0.3) this.fleeAt = randRange(2, 5);
            else this.fleeAt = Infinity;
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
          const fx = Math.sin(this.yaw);
          const fz = Math.cos(this.yaw);
          const aim = (dx / distP) * fx + (dz / distP) * fz;
          if (aim > 0.5 && this.startAttack()) {
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
        sprint = distP > 2.2;

        if (this.fleeAt !== undefined && this.fleeAt !== Infinity) {
          this.fleeAt -= dt;
          if (this.fleeAt <= 0 && distP < this.p.engage + 4) {
            this.state = 'flee';
            this.fleeT = 4;
            this.fleeAt = Infinity;
            break;
          }
        }

        if (this.dashTimer <= 0 && distP > this.p.engage + 1.5) {
          if (Math.random() < (this.isPro ? 0.7 : 0.5)) this.tryDash(dx / distP, dz / distP);
          this.dashTimer = randRange(2.8, 4.5);
        }

        if (!this.attack && this.attackTimer <= 0 && distP < this.p.engage + 0.5) {
          const fx = Math.sin(this.yaw);
          const fz = Math.cos(this.yaw);
          const aim = (dx / distP) * fx + (dz / distP) * fz;
          const aimGate = this.isPro ? 0.93 : 0.3;
          if (aim > aimGate && this.startAttack()) {
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

    let ilen = _intent.length();
    if (ilen > 1) _intent.divideScalar(ilen);
    sprint = true;

    this._diaT -= dt;
    this._afkCd -= dt;
    this._hopStateCd -= dt;
    if (this._afkCd < -99) this._afkCd = 0;
    if (this._hopStateCd < -99) this._hopStateCd = 0;
    if (this._diaT <= 0) {
      this._diaT = 0.5;
      this.diamondTarget = null;
      if ((this.state === 'wander' || this.state === 'chase' || this.state === 'circle') && this.game.diamonds.length > 0) {
        let best = null;
        let bd = 196;
        for (const d of this.game.diamonds) {
          const ddx = d.mesh.position.x - this.pos.x;
          const ddz = d.mesh.position.z - this.pos.z;
          const d2 = ddx * ddx + ddz * ddz;
          if (d2 < bd) {
            bd = d2;
            best = d;
          }
        }
        this.diamondTarget = best;
      }
    }
    if (this.diamondTarget && (this.state === 'wander' || (this.state === 'chase' && distP > 6) || this.state === 'circle')) {
      const dp = this.diamondTarget.mesh.position;
      const ddx = dp.x - this.pos.x;
      const ddz = dp.z - this.pos.z;
      const dd = Math.hypot(ddx, ddz) || 1;
      _intent.set(ddx / dd, 0, ddz / dd);
      faceYaw = Math.atan2(ddx, ddz);
      sprint = true;
      ilen = 1;
    }

    if (ilen > 0.3 && this.grounded) {
      const probeX = this.pos.x + _intent.x * 1.15;
      const probeZ = this.pos.z + _intent.z * 1.15;
      if (this.game.collision.blockedAt(probeX, probeZ, this.radius, this.pos.y)) {
        const lx = _intent.z;
        const lz = -_intent.x;
        if (!this.game.collision.blockedAt(this.pos.x + lx * 1.15, this.pos.z + lz * 1.15, this.radius, this.pos.y)) {
          _intent.set(lx, 0, lz);
        } else {
          _intent.set(-_intent.x, 0, -_intent.z);
          this.dodgeJumpT = 0.15;
        }
      }
    }

    this.blockT -= dt;
    this.blockCd -= dt;
    const wasBlocking = this.blockT > 0;
    this.setBlocking(this.blockT > 0);
    if (
      this.isPro && wasBlocking && this.blockT <= 0 &&
      hasTarget && distP < this.p.engage + 0.5 && !this.attack
    ) {
      this.attackTimer = Math.min(this.attackTimer, 0.1);
    }

    let jump = false;
    if (this.dodgeJumpT > 0) {
      this.dodgeJumpT -= dt;
      if (this.grounded) jump = true;
    }
    if (hasTarget && this.grounded && distP < 5 && t.pos.y > this.pos.y + 0.6) {
      jump = true;
    }
    if (this.state === 'combat' && this.grounded && Math.random() < dt * 0.2) {
      jump = true;
    }
    const hsNow = Math.hypot(this.vel.x, this.vel.z);
    if (this.grounded && ilen > 0.4 && hsNow < 0.6) {
      this._stuckT = (this._stuckT || 0) + dt;
      if (this._stuckT > 0.45) {
        jump = true;
        this._stuckT = 0;
      }
    } else {
      this._stuckT = 0;
    }

    this.applyMovement(dt, { moveDir: _intent, sprint, jump });

    if (faceYaw !== null) {
      this.yaw = dampAngle(this.yaw, faceYaw, 10, dt);
    } else if (ilen > 0.05) {
      this.yaw = dampAngle(this.yaw, Math.atan2(_intent.x, _intent.z), 7, dt);
    }
    this.rig.setYaw(this.yaw);

    this.syncRigAnim(dt, { lookAround: this.state === 'afk' });
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
