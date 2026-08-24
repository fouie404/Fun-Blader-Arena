import * as THREE from 'three';
import { randRange } from '../utils/MathUtils.js';
import { THEMES } from './Themes.js';

function stoneTexture(base, mortar, tiles, size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, size, size);
  const t = size / tiles;
  for (let y = 0; y < tiles; y++) {
    for (let x = 0; x < tiles; x++) {
      const v = randRange(-14, 14);
      const ch = v > 0 ? 255 : 0;
      ctx.fillStyle = `rgba(${ch},${ch},${ch},${Math.abs(v) / 100})`;
      ctx.fillRect(x * t + 1, y * t + 1, t - 2, t - 2);
      if (Math.random() < 0.25) {
        ctx.fillStyle = 'rgba(0,0,0,0.08)';
        for (let s = 0; s < 8; s++) {
          ctx.fillRect(x * t + Math.random() * t, y * t + Math.random() * t, 2, 2);
        }
      }
    }
  }
  ctx.strokeStyle = mortar;
  ctx.lineWidth = 3;
  for (let i = 0; i <= tiles; i++) {
    ctx.beginPath();
    ctx.moveTo(i * t, 0);
    ctx.lineTo(i * t, size);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * t);
    ctx.lineTo(size, i * t);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function flameTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
  g.addColorStop(0, 'rgba(255,240,180,1)');
  g.addColorStop(0.35, 'rgba(255,170,60,0.9)');
  g.addColorStop(0.7, 'rgba(255,90,20,0.35)');
  g.addColorStop(1, 'rgba(255,60,10,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class Arena {
  constructor(scene, collision, theme = THEMES.citadel) {
    this.scene = scene;
    this.collision = collision;
    this.theme = theme;
    this.t = theme.t;
    this.torches = [];
    this.group = new THREE.Group();
    scene.add(this.group);

    this.buildFloor();
    this.buildWalls();
    this.buildTowers();

    const L = theme.layout || 'citadel';
    if (L === 'forest') this.buildForest();
    else if (L === 'ember') this.buildEmber();
    else if (L === 'frost') this.buildFrost();
    else if (L === 'oasis') this.buildOasis();
    else {
      this.buildPillars();
      this.buildPlatforms();
      this.buildRocks();
      this.buildTrees();
    }

    this.buildTorches();
    this.buildSpawnMarkers();
    this.buildMotes();
  }

  buildFloor() {
    const tex = stoneTexture('#8d8577', '#57503f', 4);
    tex.repeat.set(13, 13);
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95, color: this.t.floor });
    const floor = new THREE.Mesh(new THREE.BoxGeometry(104, 1.2, 104), mat);
    floor.position.y = -0.6;
    floor.receiveShadow = true;
    this.group.add(floor);

    const ringMat = new THREE.MeshBasicMaterial({ color: 0x4a4234, transparent: true, opacity: 0.55 });
    const ring = new THREE.Mesh(new THREE.RingGeometry(6.2, 7.5, 48), ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.02;
    this.group.add(ring);
    const ring2 = new THREE.Mesh(new THREE.RingGeometry(2.1, 2.9, 40), ringMat);
    ring2.rotation.x = -Math.PI / 2;
    ring2.position.y = 0.02;
    this.group.add(ring2);
  }

  buildWalls() {
    const tex = stoneTexture('#7b7466', '#4c463a', 3);
    tex.repeat.set(16, 1.4);
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95, color: this.t.wall });
    const H = 8;
    const walls = [
      { x: 0, z: -49.75, w: 104, d: 2.5 },
      { x: 0, z: 49.75, w: 104, d: 2.5 },
      { x: -49.75, z: 0, w: 2.5, d: 104 },
      { x: 49.75, z: 0, w: 2.5, d: 104 }
    ];
    for (const w of walls) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w.w, H, w.d), mat);
      m.position.set(w.x, H / 2 - 0.05, w.z);
      m.castShadow = true;
      m.receiveShadow = true;
      this.group.add(m);
      this.collision.addOccluder(m);
    }

    const merlonGeo = new THREE.BoxGeometry(1.7, 1.3, 1.1);
    const merlonMat = new THREE.MeshStandardMaterial({ color: this.t.merlon, roughness: 1 });
    const inst = new THREE.InstancedMesh(merlonGeo, merlonMat, 26 * 4);
    const mtx = new THREE.Matrix4();
    let idx = 0;
    for (let side = 0; side < 4; side++) {
      for (let i = 0; i < 26; i++) {
        const off = -49 + i * 4 + (side % 2) * 2;
        let x, z;
        if (side === 0) { x = off; z = -51; }
        else if (side === 1) { x = off; z = 51; }
        else if (side === 2) { x = -51; z = off; }
        else { x = 51; z = off; }
        mtx.makeTranslation(x, 8.6, z);
        inst.setMatrixAt(idx++, mtx);
      }
    }
    inst.castShadow = true;
    this.group.add(inst);
  }

  buildTowers() {
    const mat = new THREE.MeshStandardMaterial({ color: this.t.tower, roughness: 0.95 });
    const roofMat = new THREE.MeshStandardMaterial({ color: this.t.roof, roughness: 0.9 });
    const positions = [[-49, -49], [49, -49], [-49, 49], [49, 49]];
    const bannerColors = [0x3560c0, 0x9a3232, 0xc9a227, 0x33704e];
    positions.forEach(([x, z], i) => {
      const tower = new THREE.Mesh(new THREE.CylinderGeometry(4.4, 4.9, 13, 10), mat);
      tower.position.set(x, 6.45, z);
      tower.castShadow = true;
      this.group.add(tower);
      this.collision.addOccluder(tower);
      this.collision.addBox(x - 4.4, x + 4.4, z - 4.4, z + 4.4, 0, 13);

      const roof = new THREE.Mesh(new THREE.ConeGeometry(5.1, 3.6, 10), roofMat);
      roof.position.set(x, 14.8, z);
      roof.castShadow = true;
      this.group.add(roof);

      const banner = new THREE.Mesh(
        new THREE.PlaneGeometry(1.9, 4.4),
        new THREE.MeshStandardMaterial({ color: bannerColors[i], roughness: 0.85, side: THREE.DoubleSide })
      );
      banner.position.set(x * 0.906, 8.4, z * 0.906);
      banner.lookAt(0, 8.4, 0);
      this.group.add(banner);
    });
  }

  buildPillars(count = 8) {
    const mat = new THREE.MeshStandardMaterial({ color: this.t.pillar, roughness: 0.92 });
    const capMat = new THREE.MeshStandardMaterial({ color: this.t.cap, roughness: 0.95 });
    this.pillarPositions = [];
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + Math.PI / 8;
      const r = 26;
      const x = Math.sin(a) * r;
      const z = Math.cos(a) * r;
      this.pillarPositions.push([x, z]);

      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.05, 7, 9), mat);
      p.position.set(x, 3.5, z);
      p.castShadow = true;
      this.group.add(p);
      this.collision.addOccluder(p);
      this.collision.addBox(x - 1.0, x + 1.0, z - 1.0, z + 1.0, 0, 7);

      const cap = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.5, 2.3), capMat);
      cap.position.set(x, 7.25, z);
      cap.castShadow = true;
      this.group.add(cap);
    }
  }

  buildPlatforms() {
    const mat = new THREE.MeshStandardMaterial({ color: this.t.platform, roughness: 0.95 });
    const spots = [[24, -24], [-24, 24]];
    for (const [x, z] of spots) {
      const plat = new THREE.Mesh(new THREE.BoxGeometry(5.5, 1.0, 5.5), mat);
      plat.position.set(x, 0.5, z);
      plat.castShadow = true;
      plat.receiveShadow = true;
      this.group.add(plat);
      this.collision.addOccluder(plat);
      this.collision.addBox(x - 2.75, x + 2.75, z - 2.75, z + 2.75, 0, 1.0);

      const sx = x - Math.sign(x) * 4.0;
      const sz = z - Math.sign(z) * 4.0;
      const step = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.5, 2.6), mat);
      step.position.set(sx, 0.25, sz);
      step.receiveShadow = true;
      this.group.add(step);
      this.collision.addBox(sx - 1.3, sx + 1.3, sz - 1.3, sz + 1.3, 0, 0.5);
    }
  }

  buildRocks() {
    const geo = new THREE.DodecahedronGeometry(1, 0);
    const mat = new THREE.MeshStandardMaterial({ color: this.t.rock, roughness: 1, flatShading: true });
    const inst = new THREE.InstancedMesh(geo, mat, 22);
    const mtx = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    const pos = new THREE.Vector3();
    const scl = new THREE.Vector3();
    let placed = 0;
    let guard = 0;
    while (placed < 22 && guard++ < 500) {
      const a = Math.random() * Math.PI * 2;
      const r = randRange(13, 43);
      const x = Math.sin(a) * r;
      const z = Math.cos(a) * r;
      if (Math.abs(Math.abs(x) - Math.abs(z)) < 6 && Math.abs(x) > 20) continue;
      const s = randRange(0.55, 1.7);
      pos.set(x, s * 0.42, z);
      e.set(randRange(0, 3), randRange(0, 3), randRange(0, 3));
      q.setFromEuler(e);
      scl.set(s * randRange(0.8, 1.2), s * randRange(0.65, 1), s * randRange(0.8, 1.2));
      mtx.compose(pos, q, scl);
      inst.setMatrixAt(placed, mtx);
      if (s > 1.15) {
        const half = s * 0.85;
        this.collision.addBox(x - half, x + half, z - half, z + half, 0, s * 0.84);
      }
      placed++;
    }
    inst.castShadow = true;
    inst.receiveShadow = true;
    this.group.add(inst);
  }

  buildTrees() {
    const trunkMat = new THREE.MeshStandardMaterial({ color: this.t.trunk, roughness: 1 });
    const leafA = new THREE.MeshStandardMaterial({ color: this.t.leafA, roughness: 1, flatShading: true });
    const leafB = new THREE.MeshStandardMaterial({ color: this.t.leafB, roughness: 1, flatShading: true });

    const addTree = (x, z, s) => {
      const g = new THREE.Group();
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.32 * s, 0.42 * s, 3.4 * s, 7), trunkMat);
      trunk.position.y = 1.7 * s;
      trunk.castShadow = true;
      g.add(trunk);
      const c1 = new THREE.Mesh(new THREE.ConeGeometry(2.0 * s, 3.2 * s, 8), leafA);
      c1.position.y = 4.2 * s;
      c1.castShadow = true;
      const c2 = new THREE.Mesh(new THREE.ConeGeometry(1.45 * s, 2.5 * s, 8), leafB);
      c2.position.y = 6.0 * s;
      c2.castShadow = true;
      g.add(c1, c2);
      g.position.set(x, 0, z);
      g.rotation.y = Math.random() * Math.PI;
      this.group.add(g);
      if (Math.abs(x) < 46 && Math.abs(z) < 46) {
        this.collision.addOccluder(trunk);
        this.collision.addBox(x - 0.45 * s, x + 0.45 * s, z - 0.45 * s, z + 0.45 * s, 0, 3.4 * s);
      }
    };

    addTree(30, -30, 1.15);
    addTree(-30, 30, 1.05);
    addTree(31, 31, 1.25);
    addTree(-31, -31, 0.95);
    for (let i = 0; i < 20; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = randRange(58, 74);
      addTree(Math.sin(a) * r, Math.cos(a) * r, randRange(0.9, 1.6));
    }
  }

  addTreeAt(x, z, s, trunkMat, leafA, leafB, collide) {
    const g = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.32 * s, 0.42 * s, 3.4 * s, 7), trunkMat);
    trunk.position.y = 1.7 * s;
    trunk.castShadow = true;
    g.add(trunk);
    const c1 = new THREE.Mesh(new THREE.ConeGeometry(2.0 * s, 3.2 * s, 8), leafA);
    c1.position.y = 4.2 * s;
    c1.castShadow = true;
    const c2 = new THREE.Mesh(new THREE.ConeGeometry(1.45 * s, 2.5 * s, 8), leafB);
    c2.position.y = 6.0 * s;
    c2.castShadow = true;
    g.add(c1, c2);
    g.position.set(x, 0, z);
    g.rotation.y = Math.random() * Math.PI;
    this.group.add(g);
    if (collide) {
      this.collision.addOccluder(trunk);
      this.collision.addBox(x - 0.45 * s, x + 0.45 * s, z - 0.45 * s, z + 0.45 * s, 0, 3.4 * s);
    }
  }

  buildForest() {
    const trunkMat = new THREE.MeshStandardMaterial({ color: this.t.trunk, roughness: 1 });
    const leafA = new THREE.MeshStandardMaterial({ color: this.t.leafA, roughness: 1, flatShading: true });
    const leafB = new THREE.MeshStandardMaterial({ color: this.t.leafB, roughness: 1, flatShading: true });

    const spots = [
      [10, 4], [-12, 8], [16, -14], [-6, -16], [22, 10], [-20, -6],
      [4, 20], [-16, 18], [28, -4], [-26, 12], [12, 26], [-8, -26]
    ];
    for (const [sx, sz] of spots) {
      this.addTreeAt(sx + randRange(-2, 2), sz + randRange(-2, 2), randRange(0.95, 1.35), trunkMat, leafA, leafB, true);
    }

    const stumpGeo = new THREE.CylinderGeometry(0.5, 0.62, 0.55, 8);
    for (let i = 0; i < 6; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = randRange(10, 38);
      const x = Math.sin(a) * r;
      const z = Math.cos(a) * r;
      const m = new THREE.Mesh(stumpGeo, trunkMat);
      m.position.set(x, 0.27, z);
      m.castShadow = true;
      this.group.add(m);
      this.collision.addBox(x - 0.55, x + 0.55, z - 0.55, z + 0.55, 0, 0.55);
    }

    const ruinMat = new THREE.MeshStandardMaterial({ color: this.t.pillar, roughness: 0.95 });
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 + 0.5;
      const r = randRange(15, 33);
      const x = Math.sin(a) * r;
      const z = Math.cos(a) * r;
      const h = randRange(1.4, 2.8);
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.9, h, 9), ruinMat);
      p.position.set(x, h / 2, z);
      p.castShadow = true;
      this.group.add(p);
      this.collision.addOccluder(p);
      this.collision.addBox(x - 0.85, x + 0.85, z - 0.85, z + 0.85, 0, h);
      const fx = x + randRange(-3, 3);
      const fz = z + randRange(-3, 3);
      const fallen = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.7, 0.9), ruinMat);
      fallen.position.set(fx, 0.35, fz);
      fallen.rotation.y = Math.random() * Math.PI;
      fallen.castShadow = true;
      this.group.add(fallen);
      this.collision.addBox(fx - 1.3, fx + 1.3, fz - 1.3, fz + 1.3, 0, 0.75);
    }

    for (let i = 0; i < 20; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = randRange(58, 74);
      this.addTreeAt(Math.sin(a) * r, Math.cos(a) * r, randRange(0.9, 1.6), trunkMat, leafA, leafB, false);
    }
  }

  buildEmber() {
    const crackMat = new THREE.MeshBasicMaterial({
      color: 0xff5518, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false
    });
    for (let i = 0; i < 7; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = randRange(8, 40);
      const strip = new THREE.Mesh(new THREE.PlaneGeometry(randRange(5, 10), randRange(0.7, 1.4)), crackMat);
      strip.rotation.x = -Math.PI / 2;
      strip.rotation.z = Math.random() * Math.PI;
      strip.position.set(Math.sin(a) * r, 0.03, Math.cos(a) * r);
      this.group.add(strip);
    }

    const obsGeo = new THREE.DodecahedronGeometry(1, 0);
    const obsMat = new THREE.MeshStandardMaterial({ color: 0x1f1a22, roughness: 0.4, metalness: 0.3, flatShading: true });
    for (let i = 0; i < 9; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = randRange(12, 42);
      const x = Math.sin(a) * r;
      const z = Math.cos(a) * r;
      const s = randRange(1.2, 2.2);
      const m = new THREE.Mesh(obsGeo, obsMat);
      m.position.set(x, s * 0.45, z);
      m.scale.set(s, s * randRange(0.8, 1.3), s * randRange(0.8, 1.2));
      m.rotation.y = Math.random() * Math.PI;
      m.castShadow = true;
      this.group.add(m);
      this.collision.addOccluder(m);
      const half = s * 0.85;
      this.collision.addBox(x - half, x + half, z - half, z + half, 0, s);
    }

    const deadMat = new THREE.MeshStandardMaterial({ color: this.t.trunk, roughness: 1 });
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2 + 0.4;
      const r = randRange(16, 40);
      const x = Math.sin(a) * r;
      const z = Math.cos(a) * r;
      const g = new THREE.Group();
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.4, 3.8, 6), deadMat);
      trunk.position.y = 1.9;
      trunk.castShadow = true;
      g.add(trunk);
      const b1 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.14, 0.14), deadMat);
      b1.position.set(0.6, 2.9, 0);
      b1.rotation.z = 0.5;
      g.add(b1);
      const b2 = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.13, 0.13), deadMat);
      b2.position.set(-0.5, 2.4, 0.1);
      b2.rotation.z = -0.6;
      g.add(b2);
      g.position.set(x, 0, z);
      g.rotation.y = Math.random() * Math.PI;
      this.group.add(g);
      this.collision.addBox(x - 0.4, x + 0.4, z - 0.4, z + 0.4, 0, 3.8);
    }

    const ventMat = new THREE.MeshStandardMaterial({ color: 0x2a1410, roughness: 1, emissive: 0xff3300, emissiveIntensity: 0.7 });
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + 1.1;
      const r = randRange(20, 38);
      const v = new THREE.Mesh(new THREE.ConeGeometry(0.7, 0.9, 7), ventMat);
      v.position.set(Math.sin(a) * r, 0.45, Math.cos(a) * r);
      v.castShadow = true;
      this.group.add(v);
      this.collision.addBox(v.position.x - 0.6, v.position.x + 0.6, v.position.z - 0.6, v.position.z + 0.6, 0, 0.9);
    }
  }

  buildFrost() {
    this.buildPillars(4);

    const iceMat = new THREE.MeshStandardMaterial({
      color: 0xbfe4f2, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.92, flatShading: true
    });
    for (let i = 0; i < 8; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = randRange(12, 40);
      const x = Math.sin(a) * r;
      const z = Math.cos(a) * r;
      const s = randRange(1.2, 2.1);
      const m = new THREE.Mesh(new THREE.BoxGeometry(s, s * 1.4, s), iceMat);
      m.position.set(x, s * 0.7, z);
      m.rotation.y = Math.random() * Math.PI;
      m.castShadow = true;
      this.group.add(m);
      this.collision.addOccluder(m);
      const half = s * 0.6;
      this.collision.addBox(x - half, x + half, z - half, z + half, 0, s * 1.4);
    }

    const snowMat = new THREE.MeshStandardMaterial({ color: 0xf0f6fc, roughness: 1 });
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.3;
      const r = randRange(14, 36);
      const x = Math.sin(a) * r;
      const z = Math.cos(a) * r;
      const m = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8), snowMat);
      m.position.set(x, 0.1, z);
      m.scale.set(randRange(2.2, 3.4), 0.75, randRange(2.2, 3.4));
      m.receiveShadow = true;
      this.group.add(m);
      this.collision.addBox(x - 1.6, x + 1.6, z - 1.6, z + 1.6, 0, 0.75);
    }

    const trunkMat = new THREE.MeshStandardMaterial({ color: this.t.trunk, roughness: 1 });
    const leafA = new THREE.MeshStandardMaterial({ color: this.t.leafA, roughness: 1, flatShading: true });
    const leafB = new THREE.MeshStandardMaterial({ color: this.t.leafB, roughness: 1, flatShading: true });
    const spots = [[26, 18], [-26, -18], [-18, 26], [18, -26], [34, 2], [-34, -2], [2, -34], [-2, 34]];
    for (const [x, z] of spots) {
      this.addTreeAt(x, z, randRange(1.0, 1.3), trunkMat, leafA, leafB, true);
    }
    for (let i = 0; i < 20; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = randRange(58, 74);
      this.addTreeAt(Math.sin(a) * r, Math.cos(a) * r, randRange(0.9, 1.6), trunkMat, leafA, leafB, false);
    }
  }

  buildOasis() {
    const stallColors = [0xa03030, 0x2a7a8a, 0xc9a227, 0x6b3fa0];
    const postMat = new THREE.MeshStandardMaterial({ color: this.t.trunk, roughness: 1 });
    const counterMat = new THREE.MeshStandardMaterial({ color: 0x8a6a44, roughness: 0.9 });
    const stallSpots = [[14, 8, 0.4], [-14, -8, 2.2], [8, -16, 1.2], [-8, 16, 3.1]];
    stallSpots.forEach(([x, z, rot], i) => {
      const g = new THREE.Group();
      for (const [px, pz] of [[-0.9, -0.6], [0.9, -0.6], [-0.9, 0.6], [0.9, 0.6]]) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 2.3, 6), postMat);
        post.position.set(px, 1.15, pz);
        g.add(post);
      }
      const counter = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.85, 1.0), counterMat);
      counter.position.y = 0.43;
      counter.castShadow = true;
      g.add(counter);
      const canopy = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 0.08, 1.5),
        new THREE.MeshStandardMaterial({ color: stallColors[i], roughness: 0.85 })
      );
      canopy.position.y = 2.3;
      canopy.rotation.z = 0.06;
      canopy.castShadow = true;
      g.add(canopy);
      g.position.set(x, 0, z);
      g.rotation.y = rot;
      this.group.add(g);
      this.collision.addBox(x - 1.1, x + 1.1, z - 0.8, z + 0.8, 0, 0.9);
    });

    const urnMat = new THREE.MeshStandardMaterial({ color: 0xb0703c, roughness: 0.8 });
    for (let i = 0; i < 6; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = randRange(10, 38);
      const x = Math.sin(a) * r;
      const z = Math.cos(a) * r;
      const u = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.38, 0.8, 8), urnMat);
      u.position.set(x, 0.4, z);
      u.castShadow = true;
      this.group.add(u);
      this.collision.addBox(x - 0.35, x + 0.35, z - 0.35, z + 0.35, 0, 0.8);
    }

    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8a6a3c, roughness: 1 });
    const palmLeaf = new THREE.MeshStandardMaterial({ color: this.t.leafA, roughness: 1, flatShading: true });
    const palmSpots = [[22, 22], [-22, 22], [22, -22], [-22, -22], [30, 0], [-30, 0], [0, 30], [0, -30]];
    for (const [x, z] of palmSpots) {
      const g = new THREE.Group();
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.34, 4.2, 7), trunkMat);
      trunk.position.y = 2.1;
      trunk.rotation.z = randRange(-0.08, 0.08);
      trunk.castShadow = true;
      g.add(trunk);
      for (let k = 0; k < 5; k++) {
        const leaf = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.07, 0.45), palmLeaf);
        const la = (k / 5) * Math.PI * 2;
        leaf.position.set(Math.sin(la) * 0.95, 4.15, Math.cos(la) * 0.95);
        leaf.rotation.y = la;
        leaf.rotation.x = -0.35;
        leaf.castShadow = true;
        g.add(leaf);
      }
      g.position.set(x, 0, z);
      this.group.add(g);
      this.collision.addBox(x - 0.35, x + 0.35, z - 0.35, z + 0.35, 0, 4.2);
    }

    const duneMat = new THREE.MeshStandardMaterial({ color: this.t.floor, roughness: 1 });
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + 0.8;
      const r = randRange(28, 40);
      const x = Math.sin(a) * r;
      const z = Math.cos(a) * r;
      const m = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8), duneMat);
      m.position.set(x, 0.05, z);
      m.scale.set(randRange(4.5, 6.5), 1.0, randRange(4.5, 6.5));
      m.receiveShadow = true;
      this.group.add(m);
      this.collision.addBox(x - 3.4, x + 3.4, z - 3.4, z + 3.4, 0, 0.95);
    }
  }

  buildTorches() {
    this.flameTex = flameTexture();
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x3a3230, roughness: 0.8, metalness: 0.4 });
    const bowlMat = new THREE.MeshStandardMaterial({ color: 0x2a2624, roughness: 0.7, metalness: 0.5 });
    let seed = 0;

    const addTorch = (x, y, z) => {
      const g = new THREE.Group();
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 2.4, 6), poleMat);
      pole.position.y = 1.2;
      g.add(pole);
      const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.1, 0.26, 8), bowlMat);
      bowl.position.y = 2.5;
      g.add(bowl);

      const light = new THREE.PointLight(this.theme.torchColor, this.theme.torchI, 13, 2);
      light.position.y = 2.85;
      g.add(light);

      const spr = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.flameTex,
        color: this.theme.torchColor,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      }));
      spr.scale.setScalar(1.1);
      spr.position.y = 2.95;
      g.add(spr);

      g.position.set(x, y, z);
      this.group.add(g);
      this.torches.push({ light, sprite: spr, seed: seed++ * 1.7 });
    };

    const hasPillars = this.pillarPositions && this.pillarPositions.length > 0;
    const pp = hasPillars ? this.pillarPositions.slice(0, 4) : [[-20, -20], [20, -20], [20, 20], [-20, 20]];
    const py = hasPillars ? 7.5 : 0;
    for (const [x, z] of pp) {
      addTorch(x, py, z);
    }
    addTorch(-47.6, 2.2, 0);
    addTorch(47.6, 2.2, 0);
    addTorch(0, 2.2, -47.6);
    addTorch(0, 2.2, 47.6);
    addTorch(-47.6, 2.2, -24);
    addTorch(47.6, 2.2, 24);
  }

  buildSpawnMarkers() {
    const geo = new THREE.RingGeometry(0.85, 1.05, 28);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x6fd8ff,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const pts = [
      [-36, -36], [36, -36], [-36, 36], [36, 36],
      [36, 0], [-36, 0], [0, 36], [0, -36],
      [18, 18], [-18, -18]
    ];
    for (const [x, z] of pts) {
      const m = new THREE.Mesh(geo, mat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(x, 0.03, z);
      this.group.add(m);
    }
  }

  buildMotes() {
    const p = this.theme.particles;
    if (!p) return;
    const N = 240;
    this.motePos = new Float32Array(N * 3);
    this.moteVel = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      this.motePos[i * 3] = randRange(-48, 48);
      this.motePos[i * 3 + 1] = randRange(0.5, 12);
      this.motePos[i * 3 + 2] = randRange(-48, 48);
      this.moteVel[i * 3] = randRange(-1, 1) * p.drift;
      this.moteVel[i * 3 + 1] = p.vy * randRange(0.5, 1.3);
      this.moteVel[i * 3 + 2] = randRange(-1, 1) * p.drift;
    }
    this.moteGeo = new THREE.BufferGeometry();
    this.moteGeo.setAttribute('position', new THREE.BufferAttribute(this.motePos, 3).setUsage(THREE.DynamicDrawUsage));
    const mat = new THREE.PointsMaterial({
      color: p.color,
      size: p.size,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.motes = new THREE.Points(this.moteGeo, mat);
    this.motes.frustumCulled = false;
    this.group.add(this.motes);
  }

  dispose() {
    this.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of mats) {
          if (m.map) m.map.dispose();
          m.dispose();
        }
      }
    });
    if (this.moteGeo) this.moteGeo.dispose();
    this.scene.remove(this.group);
  }

  update(dt, time) {
    void dt;
    for (const t of this.torches) {
      const f = 0.82 + 0.14 * Math.sin(time * 11 + t.seed) + 0.07 * Math.sin(time * 23 + t.seed * 2.3);
      t.light.intensity = this.theme.torchI * f;
      t.sprite.scale.setScalar(1.0 + f * 0.22);
    }
    if (this.motes) {
      const p = this.theme.particles;
      for (let i = 0; i < 240; i++) {
        const i3 = i * 3;
        this.motePos[i3] += this.moteVel[i3] * dt;
        this.motePos[i3 + 1] += this.moteVel[i3 + 1] * dt;
        this.motePos[i3 + 2] += this.moteVel[i3 + 2] * dt;
        if (p.vy >= 0) {
          if (this.motePos[i3 + 1] > 12) this.motePos[i3 + 1] = 0.4;
        } else {
          if (this.motePos[i3 + 1] < 0.2) this.motePos[i3 + 1] = 12;
        }
        if (this.motePos[i3] > 50) this.motePos[i3] = -50;
        if (this.motePos[i3] < -50) this.motePos[i3] = 50;
        if (this.motePos[i3 + 2] > 50) this.motePos[i3 + 2] = -50;
        if (this.motePos[i3 + 2] < -50) this.motePos[i3 + 2] = 50;
      }
      this.moteGeo.attributes.position.needsUpdate = true;
    }
  }
}
