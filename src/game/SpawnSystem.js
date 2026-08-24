import * as THREE from 'three';
import { randRange } from '../utils/MathUtils.js';

const POINTS = [
  [-36, -36], [36, -36], [-36, 36], [36, 36],
  [36, 0], [-36, 0], [0, 36], [0, -36],
  [18, 18], [-18, -18],
  [24, -6], [-24, 6], [6, 24], [-6, -24], [32, -12]
];

export class SpawnSystem {
  constructor() {
    this.points = POINTS.map(([x, z]) => new THREE.Vector3(x, 0, z));
  }

  getSpawn(avoid = []) {
    let best = null;
    let bestScore = -Infinity;
    for (let i = 0; i < 16; i++) {
      const c = this.points[Math.floor(Math.random() * this.points.length)];
      let score = Infinity;
      for (const a of avoid) {
        const dx = c.x - a.pos.x;
        const dz = c.z - a.pos.z;
        const d = Math.sqrt(dx * dx + dz * dz) - a.radius;
        if (d < score) score = d;
      }
      if (score === Infinity) score = 999;
      score += randRange(-1, 1);
      if (score > bestScore) {
        bestScore = score;
        best = c;
      }
    }
    return best.clone();
  }
}
