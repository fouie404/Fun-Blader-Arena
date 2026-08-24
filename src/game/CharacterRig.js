import * as THREE from 'three';
import { clamp } from '../utils/MathUtils.js';
import { SKINS } from './Skins.js';

const GEO = {
  head: new THREE.BoxGeometry(0.5, 0.5, 0.48),
  torso: new THREE.BoxGeometry(0.72, 0.85, 0.42),
  belt: new THREE.BoxGeometry(0.76, 0.12, 0.46),
  helm: new THREE.BoxGeometry(0.54, 0.2, 0.52),
  plume: new THREE.BoxGeometry(0.08, 0.16, 0.44),
  pauldron: new THREE.BoxGeometry(0.34, 0.18, 0.36),
  arm: new THREE.BoxGeometry(0.22, 0.66, 0.22),
  leg: new THREE.BoxGeometry(0.26, 0.82, 0.26),
  blade: new THREE.BoxGeometry(0.075, 1.05, 0.17),
  guard: new THREE.BoxGeometry(0.36, 0.07, 0.24),
  grip: new THREE.CylinderGeometry(0.05, 0.05, 0.3, 6),
  pommel: new THREE.SphereGeometry(0.06, 6, 6),
  greathelm: new THREE.BoxGeometry(0.56, 0.52, 0.54),
  slit: new THREE.BoxGeometry(0.46, 0.08, 0.56),
  tabard: new THREE.BoxGeometry(0.64, 0.82, 0.06),
  crossV: new THREE.BoxGeometry(0.09, 0.52, 0.02),
  crossH: new THREE.BoxGeometry(0.32, 0.09, 0.02),
  hood: new THREE.ConeGeometry(0.42, 0.62, 6),
  cloak: new THREE.BoxGeometry(0.8, 0.98, 0.05),
  hem: new THREE.BoxGeometry(0.82, 0.09, 0.055),
  crown: new THREE.CylinderGeometry(0.3, 0.3, 0.13, 8),
  spike: new THREE.ConeGeometry(0.06, 0.16, 4),
  mask: new THREE.BoxGeometry(0.44, 0.26, 0.06),
  eye: new THREE.BoxGeometry(0.08, 0.05, 0.02)
};

function makeNameTexture(name, color) {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 64;
  const ctx = c.getContext('2d');
  ctx.font = 'bold 36px "Segoe UI", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 7;
  ctx.strokeStyle = 'rgba(0,0,0,0.85)';
  ctx.strokeText(name, 128, 34);
  ctx.fillStyle = color;
  ctx.fillText(name, 128, 34);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class CharacterRig {
  constructor({ name, primary, secondary, accent, isPlayer, skin }) {
    this.name = name;
    this.isPlayer = !!isPlayer;
    this.skinId = skin || 'knight';
    this.decor = null;
    this.time = Math.random() * 10;
    this.walkPhase = Math.random() * 6;
    this.flashT = 0;
    this.deadFaded = false;

    this.matPrimary = new THREE.MeshStandardMaterial({ color: primary, roughness: 0.75, metalness: 0.15, transparent: true });
    this.matSecondary = new THREE.MeshStandardMaterial({ color: secondary, roughness: 0.55, metalness: 0.35, transparent: true });
    this.matAccent = new THREE.MeshStandardMaterial({ color: accent, roughness: 0.4, metalness: 0.6, transparent: true });
    this.matSkin = new THREE.MeshStandardMaterial({ color: 0xd9b38c, roughness: 0.9, transparent: true });
    this.matDark = new THREE.MeshStandardMaterial({ color: 0x2e2a33, roughness: 0.9, transparent: true });
    this.matBlade = new THREE.MeshStandardMaterial({ color: 0xd7dee8, roughness: 0.25, metalness: 0.85, transparent: true });
    this.matGlow = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0x8a2be2, emissiveIntensity: 2.2 });
    this.mats = [this.matPrimary, this.matSecondary, this.matAccent, this.matSkin, this.matDark, this.matBlade];

    this.root = new THREE.Group();
    const bodyPivot = new THREE.Group();
    this.root.add(bodyPivot);

    this.torsoPivot = new THREE.Group();
    bodyPivot.add(this.torsoPivot);

    const torso = new THREE.Mesh(GEO.torso, this.matPrimary);
    torso.position.y = 1.22;
    torso.castShadow = true;
    this.torsoPivot.add(torso);

    const belt = new THREE.Mesh(GEO.belt, this.matAccent);
    belt.position.y = 0.84;
    belt.castShadow = true;
    this.torsoPivot.add(belt);

    const head = new THREE.Mesh(GEO.head, this.matSkin);
    head.position.y = 1.88;
    head.castShadow = true;
    this.torsoPivot.add(head);

    const helm = new THREE.Mesh(GEO.helm, this.matSecondary);
    helm.position.y = 2.08;
    helm.castShadow = true;
    this.torsoPivot.add(helm);

    const plume = new THREE.Mesh(GEO.plume, this.matAccent);
    plume.position.y = 2.24;
    this.torsoPivot.add(plume);

    this.armL = this.makeArm(1);
    this.armR = this.makeArm(-1);
    this.torsoPivot.add(this.armL.pivot, this.armR.pivot);

    this.legL = this.makeLeg(-1);
    this.legR = this.makeLeg(1);
    bodyPivot.add(this.legL, this.legR);

    this.buildSword();

    this.healthGroup = new THREE.Group();
    this.healthGroup.position.y = 2.62;
    this.barBgMat = new THREE.SpriteMaterial({ color: 0x14090b, opacity: 0.85, transparent: true, depthTest: false });
    this.barBg = new THREE.Sprite(this.barBgMat);
    this.barBg.scale.set(0.95, 0.115, 1);
    this.barBg.renderOrder = 20;
    this.barFgMat = new THREE.SpriteMaterial({ color: 0x58e05a, depthTest: false });
    this.barFg = new THREE.Sprite(this.barFgMat);
    this.barFg.scale.set(0.87, 0.065, 1);
    this.barFg.position.x = -0.435;
    this.barFg.renderOrder = 21;
    this.healthGroup.add(this.barBg, this.barFg);
    this.root.add(this.healthGroup);

    const nameTex = makeNameTexture(name, isPlayer ? '#8fd8ff' : '#ffb3a3');
    this.nameSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: nameTex, transparent: true, depthTest: false }));
    this.nameSprite.scale.set(1.7, 0.42, 1);
    this.nameSprite.position.y = 2.95;
    this.nameSprite.renderOrder = 22;
    this.root.add(this.nameSprite);

    this.setSkin(this.skinId);
  }

  setSkin(id) {
    const s = SKINS[id] || SKINS.knight;
    this.skinId = SKINS[id] ? id : 'knight';
    this.matPrimary.color.setHex(s.primary);
    this.matSecondary.color.setHex(s.secondary);
    this.matAccent.color.setHex(s.accent);
    this.matBlade.emissive.setHex(s.bladeGlow || 0x000000);
    this.matBlade.emissiveIntensity = s.bladeGlow ? 0.85 : 0;
    this.matGlow.emissive.setHex(s.bladeGlow || 0x8a2be2);
    this.rebuildDecor(s.decor || 'knight');
  }

  rebuildDecor(key) {
    if (this.decor) {
      this.torsoPivot.remove(this.decor);
      this.decor = null;
    }
    const g = new THREE.Group();
    const add = (geo, mat, x, y, z) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      m.castShadow = true;
      g.add(m);
      return m;
    };

    if (key === 'crusader') {
      add(GEO.greathelm, this.matSecondary, 0, 1.86, 0);
      add(GEO.slit, this.matDark, 0, 1.9, 0);
      add(GEO.tabard, this.matPrimary, 0, 1.12, 0.235);
      add(GEO.crossV, this.matAccent, 0, 1.16, 0.27);
      add(GEO.crossH, this.matAccent, 0, 1.24, 0.27);
    } else if (key === 'ranger') {
      const hood = add(GEO.hood, this.matPrimary, 0, 2.32, -0.02);
      hood.rotation.y = Math.PI / 6;
      add(GEO.cloak, this.matSecondary, 0, 1.22, -0.26);
      add(GEO.hem, this.matAccent, 0, 0.76, -0.265);
    } else if (key === 'royal') {
      add(GEO.crown, this.matAccent, 0, 2.22, 0);
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        add(GEO.spike, this.matAccent, Math.sin(a) * 0.22, 2.34, Math.cos(a) * 0.22);
      }
      const cape = add(GEO.cloak, this.matPrimary, 0, 1.18, -0.27);
      cape.scale.set(1.1, 1.15, 1);
      const hem = add(GEO.hem, this.matAccent, 0, 0.66, -0.275);
      hem.scale.set(1.1, 1, 1);
    } else if (key === 'shadow') {
      const hood = add(GEO.hood, this.matPrimary, 0, 2.34, -0.02);
      hood.rotation.y = Math.PI / 6;
      add(GEO.mask, this.matDark, 0, 1.84, 0.25);
      add(GEO.eye, this.matGlow, -0.1, 1.87, 0.285);
      add(GEO.eye, this.matGlow, 0.1, 1.87, 0.285);
    }

    if (g.children.length) {
      this.torsoPivot.add(g);
      this.decor = g;
    }
  }

  makeArm(side) {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.47, 1.56, 0);
    const mesh = new THREE.Mesh(GEO.arm, this.matPrimary);
    mesh.position.y = -0.33;
    mesh.castShadow = true;
    pivot.add(mesh);
    const pad = new THREE.Mesh(GEO.pauldron, this.matSecondary);
    pad.position.y = -0.04;
    pad.castShadow = true;
    pivot.add(pad);
    const hand = new THREE.Group();
    hand.position.y = -0.66;
    pivot.add(hand);
    return { pivot, hand };
  }

  makeLeg(side) {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.19, 0.84, 0);
    const mesh = new THREE.Mesh(GEO.leg, this.matDark);
    mesh.position.y = -0.41;
    mesh.castShadow = true;
    pivot.add(mesh);
    return pivot;
  }

  buildSword() {
    const s = new THREE.Group();
    const blade = new THREE.Mesh(GEO.blade, this.matBlade);
    blade.position.y = 0.68;
    blade.castShadow = true;
    const guard = new THREE.Mesh(GEO.guard, this.matAccent);
    guard.position.y = 0.13;
    const grip = new THREE.Mesh(GEO.grip, this.matDark);
    grip.position.y = -0.03;
    const pommel = new THREE.Mesh(GEO.pommel, this.matAccent);
    pommel.position.y = -0.2;
    s.add(blade, guard, grip, pommel);
    s.rotation.x = 1.15;
    this.armR.hand.add(s);
    this.sword = s;
  }

  setYaw(yaw) {
    this.root.rotation.y = yaw;
  }

  setHealthBar(frac) {
    frac = clamp(frac, 0, 1);
    const w = Math.max(0.001, 0.87 * frac);
    this.barFg.scale.x = w;
    this.barFg.position.x = -0.435 + w / 2;
    if (frac > 0.5) this.barFgMat.color.setHex(0x58e05a);
    else if (frac > 0.25) this.barFgMat.color.setHex(0xffb347);
    else this.barFgMat.color.setHex(0xff4747);
  }

  setVisible(v) {
    this.root.visible = v;
  }

  hitFlash() {
    this.flashT = 0.18;
  }

  reset() {
    this.root.rotation.x = 0;
    this.setVisible(true);
    for (const m of this.mats) m.opacity = 1;
    this.flashT = 0;
    this.deadFaded = false;
    this.armL.pivot.rotation.set(0, 0, 0);
    this.armR.pivot.rotation.set(0, 0, 0);
    this.legL.rotation.set(0, 0, 0);
    this.legR.rotation.set(0, 0, 0);
    this.torsoPivot.rotation.set(0, 0, 0);
    this.torsoPivot.position.y = 0;
    this.setHealthBar(1);
  }

  dispose() {
    this.nameSprite.material.map.dispose();
    this.nameSprite.material.dispose();
    for (const m of this.mats) m.dispose();
    this.barBgMat.dispose();
    this.barFgMat.dispose();
  }

  update(dt, st) {
    this.time += dt;

    if (this.flashT > 0) {
      this.flashT -= dt;
      const k = Math.max(this.flashT / 0.18, 0);
      this.matPrimary.emissive.setHex(0xaa1111);
      this.matSecondary.emissive.setHex(0x661111);
      this.matPrimary.emissiveIntensity = k * 0.9;
      this.matSecondary.emissiveIntensity = k * 0.9;
      if (this.flashT <= 0) {
        this.matPrimary.emissiveIntensity = 0;
        this.matSecondary.emissiveIntensity = 0;
      }
    }

    if (st.invulnBlink) {
      this.setVisible(Math.sin(this.time * 24) > -0.4);
    } else if (!st.dead || st.deadT < 3.1) {
      if (!st.invulnBlink && !st.dead) this.setVisible(true);
    }

    if (st.dead) {
      const t = Math.min(st.deadT / 0.45, 1);
      const e = 1 - Math.pow(1 - t, 3);
      this.root.rotation.x = -e * 1.5;
      const relax = Math.min(1, dt * 8);
      this.armL.pivot.rotation.x += (-0.7 - this.armL.pivot.rotation.x) * relax;
      this.armR.pivot.rotation.x += (-0.7 - this.armR.pivot.rotation.x) * relax;
      this.armL.pivot.rotation.z += (0.9 - this.armL.pivot.rotation.z) * relax;
      this.armR.pivot.rotation.z += (-0.9 - this.armR.pivot.rotation.z) * relax;
      this.legL.rotation.x += (-0.25 - this.legL.rotation.x) * relax;
      this.legR.rotation.x += (0.15 - this.legR.rotation.x) * relax;
      this.torsoPivot.rotation.x += (0 - this.torsoPivot.rotation.x) * relax;
      if (st.deadT > 2.2 && !this.deadFaded) {
        const o = Math.max(0, 1 - (st.deadT - 2.2) / 0.9);
        for (const m of this.mats) m.opacity = o;
        if (o <= 0.01) {
          this.deadFaded = true;
          this.setVisible(false);
        }
      }
      return;
    }

    this.root.rotation.x += (0 - this.root.rotation.x) * Math.min(1, dt * 14);
    for (const m of this.mats) if (m.opacity < 1) m.opacity = Math.min(1, m.opacity + dt * 4);

    const speedRatio = st.speedRatio || 0;
    const moving = speedRatio > 0.02 && st.grounded !== false;
    if (moving) this.walkPhase += dt * (5 + 9 * speedRatio);

    const swingAmp = moving ? Math.sin(this.walkPhase) * (0.45 + 0.35 * speedRatio) : 0;
    let bob = moving ? Math.abs(Math.cos(this.walkPhase)) * 0.05 * speedRatio : 0;
    const breathe = Math.sin(this.time * 1.9) * 0.02;

    let aLx = -swingAmp * 0.6;
    let aLz = 0.09 + breathe;
    let aRx = swingAmp * 0.6;
    let aRy = 0;
    let aRz = -(0.09 + breathe);
    let legLx = swingAmp;
    let legRx = -swingAmp;
    let leanX = speedRatio * 0.16;
    let twistY = 0;

    if (!st.grounded) {
      legLx = 0.5;
      legRx = -0.35;
      aLx = -0.4;
      aRx = -0.3;
      leanX = 0.08;
    }

    if (st.blocking) {
      aRx = -1.35;
      aRy = 0.5;
      aRz = -0.35;
      aLx = -0.55;
      aLz = 0.75;
      leanX = 0.1;
    }

    if (st.attack) {
      const p = st.attack.p;
      const wu = clamp(p / 0.32, 0, 1);
      const strike = clamp((p - 0.32) / 0.28, 0, 1);
      const rec = clamp((p - 0.6) / 0.4, 0, 1);
      const easeW = 1 - (1 - wu) * (1 - wu);
      const easeS = strike * strike * (3 - 2 * strike);

      let wx, wy, wz, tx, ty, tz, wTwist, tTwist, wLean, tLean;

      if (st.attack.type === 'slash') {
        wx = -1.1; wy = -1.15; wz = -1.2; wTwist = -0.55; wLean = 0.06;
        tx = -1.05; ty = 0.75; tz = -0.25; tTwist = 0.45; tLean = 0.12;
      } else if (st.attack.type === 'slashR') {
        wx = -1.1; wy = 0.95; wz = -0.3; wTwist = 0.55; wLean = 0.06;
        tx = -1.05; ty = -0.75; tz = -1.1; tTwist = -0.45; tLean = 0.12;
      } else {
        wx = -2.75; wy = 0; wz = -0.15; wTwist = 0; wLean = -0.08;
        tx = 0.55; ty = 0; tz = -0.15; tTwist = 0; tLean = 0.38;
      }

      const cur = { x: easeW * wx + easeS * (tx - wx), y: easeW * wy + easeS * (ty - wy), z: easeW * wz + easeS * (tz - wz) };
      aRx = rec < 1 ? cur.x + rec * (aRxIdle() - cur.x) : aRxIdle();
      aRy = rec < 1 ? cur.y + rec * ((aRy || 0) - cur.y) : aRy;
      void aRy;
      aRz = rec < 1 ? cur.z + rec * (-(0.09 + breathe) - cur.z) : -(0.09 + breathe);
      twistY = rec < 1 ? (easeW * wTwist + easeS * (tTwist - wTwist)) * (1 - rec) : 0;
      leanX = rec < 1 ? easeW * wLean + easeS * (tLean - wLean) : leanX;

      function aRxIdle() {
        return st.grounded ? swingAmp * 0.6 : -0.3;
      }

      aLx = -0.35 + easeS * 0.25;
      aLz = 0.5;
      legLx *= 0.4;
      legRx *= 0.4;
    }

    const dash = st.dash || 0;
    if (dash > 0) {
      leanX += dash * 0.5;
      aLx += dash * 0.85;
      aRx += dash * 0.85;
      aLz += dash * 0.25;
      legLx -= dash * 0.35;
      legRx += dash * 0.45;
    }

    const land = st.land || 0;
    if (land > 0) {
      bob -= land * 0.14;
      legLx += land * 0.55;
      legRx += land * 0.55;
      leanX += land * 0.18;
    }

    const k = Math.min(1, dt * (st.attack ? 28 : 14));
    this.armL.pivot.rotation.x += (aLx - this.armL.pivot.rotation.x) * k;
    this.armL.pivot.rotation.z += (aLz - this.armL.pivot.rotation.z) * k;
    this.armL.pivot.rotation.y += (0 - this.armL.pivot.rotation.y) * k;
    this.armR.pivot.rotation.x += (aRx - this.armR.pivot.rotation.x) * k;
    this.armR.pivot.rotation.y += (aRy - this.armR.pivot.rotation.y) * k;
    this.armR.pivot.rotation.z += (aRz - this.armR.pivot.rotation.z) * k;
    this.legL.rotation.x += (legLx - this.legL.rotation.x) * k;
    this.legR.rotation.x += (legRx - this.legR.rotation.x) * k;
    this.torsoPivot.rotation.y += (twistY - this.torsoPivot.rotation.y) * Math.min(1, dt * 20);
    this.torsoPivot.rotation.x += (leanX - this.torsoPivot.rotation.x) * Math.min(1, dt * 12);
    this.torsoPivot.position.y = bob;
  }
}
