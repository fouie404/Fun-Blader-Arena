import * as THREE from 'three';
import { randRange } from '../utils/MathUtils.js';

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
  constructor(scene, collision) {
    this.scene = scene;
    this.collision = collision;
    this.torches = [];
    this.group = new THREE.Group();
    scene.add(this.group);

    this.buildFloor();
    this.buildWalls();
    this.buildTowers();
    this.buildPillars();
    this.buildPlatforms();
    this.buildRocks();
    this.buildTrees();
    this.buildTorches();
    this.buildSpawnMarkers();
  }

  buildFloor() {
    const tex = stoneTexture('#8d8577', '#57503f', 4);
    tex.repeat.set(13, 13);
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95 });
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
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95 });
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
    const merlonMat = new THREE.MeshStandardMaterial({ color: 0x6e675a, roughness: 1 });
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
    const mat = new THREE.MeshStandardMaterial({ color: 0x77705f, roughness: 0.95 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x50412e, roughness: 0.9 });
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

  buildPillars() {
    const mat = new THREE.MeshStandardMaterial({ color: 0x8a8274, roughness: 0.92 });
    const capMat = new THREE.MeshStandardMaterial({ color: 0x6e675a, roughness: 0.95 });
    this.pillarPositions = [];
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
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
    const mat = new THREE.MeshStandardMaterial({ color: 0x928a7b, roughness: 0.95 });
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
    const mat = new THREE.MeshStandardMaterial({ color: 0x847d70, roughness: 1, flatShading: true });
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
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5d4426, roughness: 1 });
    const leafA = new THREE.MeshStandardMaterial({ color: 0x3d6b34, roughness: 1, flatShading: true });
    const leafB = new THREE.MeshStandardMaterial({ color: 0x4d7f3a, roughness: 1, flatShading: true });

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

      const light = new THREE.PointLight(0xff9a3c, 24, 13, 2);
      light.position.y = 2.85;
      g.add(light);

      const spr = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.flameTex,
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

    for (const [x, z] of this.pillarPositions.slice(0, 4)) {
      addTorch(x, 7.5, z);
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

  update(dt, time) {
    void dt;
    for (const t of this.torches) {
      const f = 0.82 + 0.14 * Math.sin(time * 11 + t.seed) + 0.07 * Math.sin(time * 23 + t.seed * 2.3);
      t.light.intensity = 24 * f;
      t.sprite.scale.setScalar(1.0 + f * 0.22);
    }
  }
}
