import * as THREE from 'three';
import { randRange } from './MathUtils.js';

export class ParticleSystem {
  constructor(scene, capacity = 500) {
    this.capacity = capacity;
    this.alive = 0;

    this.pos = new Float32Array(capacity * 3);
    this.vel = new Float32Array(capacity * 3);
    this.col = new Float32Array(capacity * 3);
    this.baseR = new Float32Array(capacity);
    this.baseG = new Float32Array(capacity);
    this.baseB = new Float32Array(capacity);
    this.life = new Float32Array(capacity);
    this.maxLife = new Float32Array(capacity);
    this.grav = new Float32Array(capacity);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setDrawRange(0, 0);

    const mat = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
    this.geo = geo;
    this._c = new THREE.Color();
  }

  spawnBurst(p, { count = 12, color = 0xffcc66, speed = 5, upBias = 1.5, life = 0.45, gravity = -10 } = {}) {
    this._c.set(color);
    for (let i = 0; i < count; i++) {
      if (this.alive >= this.capacity) return;
      const j = this.alive++;
      const j3 = j * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(randRange(-1, 1));
      const s = speed * randRange(0.35, 1);
      this.pos[j3] = p.x;
      this.pos[j3 + 1] = p.y;
      this.pos[j3 + 2] = p.z;
      this.vel[j3] = Math.sin(phi) * Math.cos(theta) * s;
      this.vel[j3 + 1] = Math.cos(phi) * s * 0.7 + upBias;
      this.vel[j3 + 2] = Math.sin(phi) * Math.sin(theta) * s;
      const m = randRange(0.55, 1.15);
      this.baseR[j] = this._c.r * m;
      this.baseG[j] = this._c.g * m;
      this.baseB[j] = this._c.b * m;
      this.maxLife[j] = life * randRange(0.6, 1.4);
      this.life[j] = this.maxLife[j];
      this.grav[j] = gravity;
    }
  }

  update(dt) {
    let i = 0;
    while (i < this.alive) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        const last = --this.alive;
        if (i !== last) {
          const i3 = i * 3, l3 = last * 3;
          for (let k = 0; k < 3; k++) {
            this.pos[i3 + k] = this.pos[l3 + k];
            this.vel[i3 + k] = this.vel[l3 + k];
            this.col[i3 + k] = this.col[l3 + k];
          }
          this.baseR[i] = this.baseR[last];
          this.baseG[i] = this.baseG[last];
          this.baseB[i] = this.baseB[last];
          this.life[i] = this.life[last];
          this.maxLife[i] = this.maxLife[last];
          this.grav[i] = this.grav[last];
        }
        continue;
      }
      const i3 = i * 3;
      this.vel[i3 + 1] += this.grav[i] * dt;
      this.pos[i3] += this.vel[i3] * dt;
      this.pos[i3 + 1] += this.vel[i3 + 1] * dt;
      this.pos[i3 + 2] += this.vel[i3 + 2] * dt;
      const f = Math.max(this.life[i] / this.maxLife[i], 0);
      this.col[i3] = this.baseR[i] * f;
      this.col[i3 + 1] = this.baseG[i] * f;
      this.col[i3 + 2] = this.baseB[i] * f;
      i++;
    }
    this.geo.setDrawRange(0, this.alive);
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
  }
}
