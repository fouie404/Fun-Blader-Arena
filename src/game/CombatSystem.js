import * as THREE from 'three';
import { ParticleSystem } from '../utils/ParticleSystem.js';

const SLASH_COUNT = 14;

export class CombatSystem {
  constructor(game) {
    this.game = game;
    this.fighters = [];
    this.particles = new ParticleSystem(game.scene, 500);
    this.slashes = [];

    const geo = new THREE.RingGeometry(0.55, 2.1, 26, 1, -1.25, 2.5);
    for (let i = 0; i < SLASH_COUNT; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.order = 'YXZ';
      mesh.visible = false;
      mesh.frustumCulled = false;
      game.scene.add(mesh);
      this.slashes.push({ mesh, mat, life: 0, maxLife: 0.16 });
    }
  }

  register(f) {
    if (!this.fighters.includes(f)) this.fighters.push(f);
  }

  unregister(f) {
    const i = this.fighters.indexOf(f);
    if (i >= 0) this.fighters.splice(i, 1);
  }

  sweep(attacker, attack) {
    const def = attack.def;
    const fx = Math.sin(attacker.yaw);
    const fz = Math.cos(attacker.yaw);

    for (const v of this.fighters) {
      if (v === attacker || v.dead) continue;
      if (attack.hit.has(v)) continue;

      const dx = v.pos.x - attacker.pos.x;
      const dz = v.pos.z - attacker.pos.z;
      if (Math.abs(v.pos.y - attacker.pos.y) > 2.2) continue;
      const len = Math.hypot(dx, dz);
      if (len - v.radius > def.range) continue;

      const nx = len > 0.0001 ? dx / len : fx;
      const nz = len > 0.0001 ? dz / len : fz;
      if (fx * nx + fz * nz < def.arcCos) continue;

      attack.hit.add(v);
      const point = new THREE.Vector3(v.pos.x - nx * 0.3, v.pos.y + 1.3, v.pos.z - nz * 0.3);
      this.applyHit(attacker, v, def.dmg * (attacker.dmgMul || 1), point);
    }
  }

  applyHit(attacker, victim, dmg, point) {
    const res = victim.takeDamage(dmg, attacker, point);
    if (!res) return;

    if (res.blocked) {
      this.particles.spawnBurst(point, { count: 16, color: 0xfff0b0, speed: 5.5, upBias: 1.0, life: 0.32 });
      this.game.audio.clash();
    } else {
      this.particles.spawnBurst(point, { count: 13, color: 0xff5a34, speed: 4.5, upBias: 1.4, life: 0.42 });
      this.game.audio.hit();
    }

    if (attacker.isPlayer) this.game.hud.hitMarker(res.blocked);
    if (victim.isPlayer) {
      this.game.hud.damageFlash();
      this.game.cameraRig.addShake(res.blocked ? 0.12 : 0.34);
    }
  }

  deathFX(fighter) {
    const p = fighter.pos.clone();
    p.y += 1.1;
    this.particles.spawnBurst(p, { count: 20, color: 0xcc3333, speed: 3.5, upBias: 2.2, life: 0.7, gravity: -6 });
  }

  spawnSlashFX(attacker, def) {
    const item = this.slashes.find((s) => s.life <= 0);
    if (!item) return;
    const m = item.mesh;
    m.visible = true;
    item.life = item.maxLife = def.key === 'strong' ? 0.2 : 0.16;

    const fx = Math.sin(attacker.yaw);
    const fz = Math.cos(attacker.yaw);

    m.position.set(
      attacker.pos.x + fx * (def.fx === 'v' ? 1.15 : 0.85),
      attacker.pos.y + (def.fx === 'v' ? 1.35 : 1.25),
      attacker.pos.z + fz * (def.fx === 'v' ? 1.15 : 0.85)
    );

    if (def.fx === 'h') {
      m.rotation.set(-Math.PI / 2, 0, def.mirror ? Math.PI : 0);
      m.rotation.y = attacker.yaw;
      m.scale.setScalar(1.15);
      item.mat.color.setHex(0xffe9b0);
    } else {
      m.rotation.set(0, attacker.yaw, 0);
      m.scale.set(1.05, 0.8, 1);
      item.mat.color.setHex(0xbfe0ff);
    }
  }

  notifyAttack(attacker) {
    for (const f of this.fighters) {
      if (f === attacker || f.dead || !f.isEnemy) continue;
      const d = Math.hypot(f.pos.x - attacker.pos.x, f.pos.z - attacker.pos.z);
      if (d < 4.6) f.onThreat(attacker);
    }
  }

  update(dt) {
    this.particles.update(dt);
    for (const s of this.slashes) {
      if (s.life <= 0) continue;
      s.life -= dt;
      if (s.life <= 0) {
        s.mesh.visible = false;
        s.mat.opacity = 0;
      } else {
        s.mat.opacity = (s.life / s.maxLife) * 0.9;
      }
    }
  }
}
