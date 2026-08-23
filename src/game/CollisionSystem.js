import * as THREE from 'three';

const STEP_UP = 0.55;

export class CollisionSystem {
  constructor(boundHalf) {
    this.bound = boundHalf;
    this.boxes = [];
    this.occluders = [];
  }

  addBox(minX, maxX, minZ, maxZ, baseY, topY) {
    this.boxes.push({ minX, maxX, minZ, maxZ, baseY, topY });
  }

  addOccluder(mesh) {
    this.occluders.push(mesh);
  }

  groundHeightAt(x, z, feetY, r = 0.35) {
    let g = 0;
    for (const b of this.boxes) {
      if (x < b.minX - r || x > b.maxX + r || z < b.minZ - r || z > b.maxZ + r) continue;
      if (b.topY <= feetY + STEP_UP && b.topY > g) g = b.topY;
    }
    return g;
  }

  resolveEntity(f) {
    const p = f.pos;
    const r = f.radius;
    const headY = p.y + f.height;

    for (const b of this.boxes) {
      if (p.y >= b.topY - STEP_UP) continue;
      if (headY <= b.baseY) continue;

      const cx = Math.max(b.minX, Math.min(p.x, b.maxX));
      const cz = Math.max(b.minZ, Math.min(p.z, b.maxZ));
      const dx = p.x - cx;
      const dz = p.z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 > r * r) continue;

      if (d2 > 1e-9) {
        const d = Math.sqrt(d2);
        const push = (r - d) / d;
        p.x += dx * push;
        p.z += dz * push;
      } else {
        const pl = p.x - (b.minX - r);
        const pr = (b.maxX + r) - p.x;
        const pb = p.z - (b.minZ - r);
        const pt = (b.maxZ + r) - p.z;
        const m = Math.min(pl, pr, pb, pt);
        if (m === pl) p.x = b.minX - r;
        else if (m === pr) p.x = b.maxX + r;
        else if (m === pb) p.z = b.minZ - r;
        else p.z = b.maxZ + r;
      }
    }

    const lim = this.bound - r;
    if (p.x < -lim) { p.x = -lim; if (f.vel.x < 0) f.vel.x *= -0.1; }
    else if (p.x > lim) { p.x = lim; if (f.vel.x > 0) f.vel.x *= -0.1; }
    if (p.z < -lim) { p.z = -lim; if (f.vel.z < 0) f.vel.z *= -0.1; }
    else if (p.z > lim) { p.z = lim; if (f.vel.z > 0) f.vel.z *= -0.1; }
  }
}
