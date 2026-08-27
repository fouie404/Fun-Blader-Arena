import * as THREE from 'three';
import { clamp } from '../utils/MathUtils.js';
import { SKINS } from './Skins.js';

const randRange = (a, b) => a + Math.random() * (b - a);

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
  eye: new THREE.BoxGeometry(0.08, 0.05, 0.02),
  coil: new THREE.CylinderGeometry(0.05, 0.08, 0.34, 6),
  orb: new THREE.SphereGeometry(0.09, 8, 6),
  halo: new THREE.TorusGeometry(0.26, 0.035, 8, 24),
  crystal: new THREE.OctahedronGeometry(0.11, 0),
  quiver: new THREE.CylinderGeometry(0.09, 0.09, 0.5, 6),
  brim: new THREE.CylinderGeometry(0.34, 0.34, 0.04, 10),
  feather: new THREE.BoxGeometry(0.08, 0.3, 0.03),
  strap: new THREE.BoxGeometry(0.14, 0.9, 0.03),
  longblade: new THREE.BoxGeometry(0.045, 1.35, 0.11),
  katanaGuard: new THREE.CylinderGeometry(0.09, 0.09, 0.03, 8),
  scythePole: new THREE.CylinderGeometry(0.035, 0.035, 1.5, 6),
  scytheBlade: new THREE.BoxGeometry(0.5, 0.09, 0.07),
  hammerHead: new THREE.BoxGeometry(0.44, 0.32, 0.56),
  prong: new THREE.ConeGeometry(0.05, 0.42, 5),
  beamBlade: new THREE.BoxGeometry(0.1, 1.15, 0.1),
  wingBig: new THREE.BoxGeometry(1.0, 1.3, 0.04),
  collar: new THREE.BoxGeometry(0.12, 0.3, 0.3),
  jagged: new THREE.BoxGeometry(0.12, 0.4, 0.05),
  chestF: new THREE.BoxGeometry(0.5, 0.24, 0.4),
  hipsF: new THREE.BoxGeometry(0.68, 0.26, 0.44),
  hairBack: new THREE.BoxGeometry(0.42, 0.55, 0.16),
  hairSide: new THREE.BoxGeometry(0.1, 0.4, 0.12),
  spearPole: new THREE.CylinderGeometry(0.03, 0.03, 1.7, 6),
  spearTip: new THREE.ConeGeometry(0.07, 0.3, 5),
  skirt: new THREE.ConeGeometry(0.42, 0.5, 8),
  iceCrown: new THREE.BoxGeometry(0.56, 0.12, 0.54),
  iceShard: new THREE.ConeGeometry(0.07, 0.42, 5),
  flame: new THREE.ConeGeometry(0.1, 0.55, 5),
  bigFeather: new THREE.BoxGeometry(0.14, 0.95, 0.03),
  rock: new THREE.BoxGeometry(0.5, 0.3, 0.3),
  petal: new THREE.BoxGeometry(0.14, 0.26, 0.03)
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
    this.matBeam = new THREE.MeshBasicMaterial({
      color: 0x88aaff, transparent: true, opacity: 0.92, blending: THREE.AdditiveBlending, depthWrite: false
    });
    this.matHair = new THREE.MeshStandardMaterial({ color: 0x2a1a10, roughness: 0.9, transparent: true });
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
    this.head = head;

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

    this.chestF = new THREE.Mesh(GEO.chestF, this.matPrimary);
    this.chestF.position.y = 1.38;
    this.chestF.castShadow = true;
    this.torsoPivot.add(this.chestF);
    this.chestF.visible = false;

    this.hipsF = new THREE.Mesh(GEO.hipsF, this.matSecondary);
    this.hipsF.position.y = 0.78;
    this.hipsF.castShadow = true;
    bodyPivot.add(this.hipsF);
    this.hipsF.visible = false;

    this.hairBack = new THREE.Mesh(GEO.hairBack, this.matHair);
    this.hairBack.position.set(0, 1.74, -0.28);
    this.hairBack.castShadow = true;
    this.torsoPivot.add(this.hairBack);
    this.hairBack.visible = false;

    this.hairL = new THREE.Mesh(GEO.hairSide, this.matHair);
    this.hairL.position.set(-0.28, 1.72, 0);
    this.torsoPivot.add(this.hairL);
    this.hairL.visible = false;
    this.hairR = new THREE.Mesh(GEO.hairSide, this.matHair);
    this.hairR.position.set(0.28, 1.72, 0);
    this.torsoPivot.add(this.hairR);
    this.hairR.visible = false;

    this.skirt = new THREE.Mesh(GEO.skirt, this.matPrimary);
    this.skirt.position.y = 0.72;
    this.skirt.castShadow = true;
    bodyPivot.add(this.skirt);
    this.skirt.visible = false;

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

  buildSword(type = 'sword') {
    if (this.sword) {
      this.armR.hand.remove(this.sword);
      this.sword = null;
    }
    const s = new THREE.Group();
    const mk = (geo, mat, x = 0, y = 0, z = 0) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      m.castShadow = true;
      s.add(m);
      return m;
    };

    if (type === 'katana') {
      mk(GEO.longblade, this.matBlade, 0, 0.78, 0);
      mk(GEO.katanaGuard, this.matAccent, 0, 0.12, 0);
      mk(GEO.grip, this.matDark, 0, -0.02, 0);
      mk(GEO.pommel, this.matGlow, 0, -0.19, 0);
      s.rotation.x = 1.02;
    } else if (type === 'scythe') {
      mk(GEO.scythePole, this.matDark, 0, 0.45, 0);
      const b1 = mk(GEO.scytheBlade, this.matBlade, 0.24, 1.16, 0);
      b1.rotation.z = 0.55;
      const b2 = mk(GEO.scytheBlade, this.matBlade, 0.46, 1.0, 0);
      b2.rotation.z = 0.95;
      b2.scale.set(0.85, 1, 1);
      const edge = mk(GEO.scytheBlade, this.matGlow, 0.27, 1.24, 0);
      edge.rotation.z = 0.55;
      edge.scale.set(0.4, 1.15, 0.6);
      s.rotation.x = 0.85;
    } else if (type === 'hammer') {
      mk(GEO.scythePole, this.matDark, 0, 0.35, 0);
      mk(GEO.hammerHead, this.matBlade, 0, 0.98, 0);
      mk(GEO.orb, this.matGlow, 0, 0.98, 0.29);
      mk(GEO.orb, this.matGlow, 0, 0.98, -0.29);
      s.rotation.x = 0.95;
    } else if (type === 'trident') {
      mk(GEO.scythePole, this.matBlade, 0, 0.5, 0);
      mk(GEO.prong, this.matBlade, 0, 1.28, 0);
      const l = mk(GEO.prong, this.matBlade, -0.17, 1.1, 0);
      l.rotation.z = 0.3;
      const r = mk(GEO.prong, this.matBlade, 0.17, 1.1, 0);
      r.rotation.z = -0.3;
      s.rotation.x = 1.0;
    } else if (type === 'beam') {
      const beam = new THREE.Mesh(GEO.beamBlade, this.matBeam);
      beam.position.y = 0.74;
      s.add(beam);
      mk(GEO.guard, this.matAccent, 0, 0.12, 0);
      mk(GEO.grip, this.matDark, 0, -0.03, 0);
      s.rotation.x = 1.05;
    } else if (type === 'spear') {
      mk(GEO.spearPole, this.matDark, 0, 0.4, 0);
      mk(GEO.spearTip, this.matBlade, 0, 1.35, 0);
      const c1 = mk(GEO.prong, this.matBlade, 0, 1.18, 0);
      c1.scale.set(0.7, 0.6, 0.7);
      s.rotation.x = 0.9;
    } else {
      const blade = mk(GEO.blade, this.matBlade, 0, 0.68, 0);
      void blade;
      mk(GEO.guard, this.matAccent, 0, 0.13, 0);
      mk(GEO.grip, this.matDark, 0, -0.03, 0);
      mk(GEO.pommel, this.matAccent, 0, -0.2, 0);
      s.rotation.x = 1.15;
    }

    this.armR.hand.add(s);
    this.sword = s;
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
    this.matBeam.color.setHex(s.bladeGlow || 0x88aaff);
    const female = !!s.female;
    this.chestF.visible = female;
    this.hipsF.visible = female;
    this.hairBack.visible = female;
    this.hairL.visible = female;
    this.hairR.visible = female;
    this.skirt.visible = female;
    this.torsoPivot.children[0].scale.x = female ? 0.84 : 1;
    this.armL.pivot.position.x = female ? 0.4 : 0.47;
    this.armR.pivot.position.x = female ? -0.4 : -0.47;
    this.armL.pivot.children[0].scale.x = female ? 0.82 : 1;
    this.armR.pivot.children[0].scale.x = female ? 0.82 : 1;
    if (female) this.matHair.color.setHex(s.primary);
    this.buildSword(s.blade || 'sword');
    this.rebuildDecor(s.decor || 'knight');
  }

  rebuildDecor(key) {
    if (this.decor) {
      this.torsoPivot.remove(this.decor);
      this.decor = null;
      this.orbitGroup = null;
    }
    if (this.decorExtra) {
      this.torsoPivot.remove(this.decorExtra);
      this.decorExtra = null;
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
    } else if (key === 'dragon') {
      const hornL = add(GEO.spike, this.matAccent, -0.15, 2.2, 0.02);
      hornL.rotation.z = 0.5;
      hornL.scale.set(1.3, 1.8, 1.3);
      const hornR = add(GEO.spike, this.matAccent, 0.15, 2.2, 0.02);
      hornR.rotation.z = -0.5;
      hornR.scale.set(1.3, 1.8, 1.3);
      const wingL = add(GEO.cloak, this.matPrimary, -0.42, 1.45, -0.3);
      wingL.rotation.y = 0.55;
      wingL.rotation.z = 0.5;
      wingL.scale.set(0.62, 0.85, 1);
      const wingR = add(GEO.cloak, this.matPrimary, 0.42, 1.45, -0.3);
      wingR.rotation.y = -0.55;
      wingR.rotation.z = -0.5;
      wingR.scale.set(0.62, 0.85, 1);
      const tail = add(GEO.crossV, this.matAccent, 0, 0.62, -0.26);
      tail.scale.set(1.2, 1.4, 1);
    } else if (key === 'reaper') {
      const hood = add(GEO.hood, this.matPrimary, 0, 2.42, -0.02);
      hood.rotation.y = Math.PI / 6;
      hood.scale.set(1.2, 1.2, 1.2);
      add(GEO.mask, this.matDark, 0, 1.82, 0.26);
      add(GEO.eye, this.matGlow, -0.09, 1.86, 0.3);
      add(GEO.eye, this.matGlow, 0.09, 1.86, 0.3);
      const spikeL = add(GEO.spike, this.matDark, -0.56, 1.66, 0);
      spikeL.rotation.z = 2.6;
      spikeL.scale.set(1.4, 2.0, 1.4);
      const spikeR = add(GEO.spike, this.matDark, 0.56, 1.66, 0);
      spikeR.rotation.z = -2.6;
      spikeR.scale.set(1.4, 2.0, 1.4);
    } else if (key === 'frostking') {
      add(GEO.crown, this.matAccent, 0, 2.22, 0);
      for (let i = 0; 4 > i; i++) {
        const a = (i / 4) * Math.PI * 2;
        add(GEO.spike, this.matAccent, Math.sin(a) * 0.22, 2.36, Math.cos(a) * 0.22);
      }
      const cape = add(GEO.cloak, this.matSecondary, 0, 1.2, -0.28);
      cape.scale.set(1.15, 1.1, 1);
      const icL = add(GEO.spike, this.matAccent, -0.47, 1.38, 0.02);
      icL.rotation.x = Math.PI;
      icL.scale.set(0.8, 1.6, 0.8);
      const icR = add(GEO.spike, this.matAccent, 0.47, 1.38, 0.02);
      icR.rotation.x = Math.PI;
      icR.scale.set(0.8, 1.6, 0.8);
    } else if (key === 'warlord') {
      const hornL = add(GEO.spike, this.matAccent, -0.17, 2.18, 0.02);
      hornL.rotation.z = 0.65;
      hornL.scale.set(1.5, 2.1, 1.5);
      const hornR = add(GEO.spike, this.matAccent, 0.17, 2.18, 0.02);
      hornR.rotation.z = -0.65;
      hornR.scale.set(1.5, 2.1, 1.5);
      add(GEO.mask, this.matDark, 0, 1.84, 0.26);
      add(GEO.eye, this.matGlow, -0.09, 1.87, 0.3);
      add(GEO.eye, this.matGlow, 0.09, 1.87, 0.3);
      for (let i = -1; i <= 1; i++) {
        const trophy = add(GEO.spike, this.matAccent, i * 0.22, 0.92, 0.26);
        trophy.rotation.x = Math.PI;
        trophy.scale.set(0.7, 1.1, 0.7);
      }
      const spikeL = add(GEO.spike, this.matSecondary, -0.5, 1.72, 0);
      spikeL.rotation.z = 2.7;
      spikeL.scale.set(1.3, 1.8, 1.3);
      const spikeR = add(GEO.spike, this.matSecondary, 0.5, 1.72, 0);
      spikeR.rotation.z = -2.7;
      spikeR.scale.set(1.3, 1.8, 1.3);
    } else if (key === 'storm') {
      const coilL = add(GEO.coil, this.matSecondary, -0.47, 1.82, 0);
      void coilL;
      const coilR = add(GEO.coil, this.matSecondary, 0.47, 1.82, 0);
      void coilR;
      const orbL = add(GEO.orb, this.matGlow, -0.47, 2.06, 0);
      void orbL;
      const orbR = add(GEO.orb, this.matGlow, 0.47, 2.06, 0);
      void orbR;
      add(GEO.crossV, this.matGlow, 0, 1.22, 0.23);
      add(GEO.crossH, this.matGlow, 0, 1.3, 0.23);
      const fin = add(GEO.spike, this.matAccent, 0, 2.32, -0.05);
      fin.scale.set(0.9, 1.5, 0.9);
    } else if (key === 'inferno') {
      for (let i = -1; i <= 1; i++) {
        const flame = add(GEO.spike, this.matGlow, i * 0.12, 2.34 + Math.abs(i) * -0.06, 0);
        flame.scale.set(0.9, 1.6 - Math.abs(i) * 0.3, 0.9);
      }
      const flameL = add(GEO.spike, this.matGlow, -0.47, 1.78, 0);
      flameL.scale.set(1.1, 1.5, 1.1);
      const flameR = add(GEO.spike, this.matGlow, 0.47, 1.78, 0);
      flameR.scale.set(1.1, 1.5, 1.1);
      const cape = add(GEO.cloak, this.matSecondary, 0, 1.18, -0.28);
      cape.scale.set(1.05, 1.1, 1);
    } else if (key === 'celestial') {
      const halo = new THREE.Mesh(GEO.halo, this.matGlow);
      halo.position.y = 2.52;
      halo.rotation.x = Math.PI / 2;
      this.torsoPivot.add(halo);
      this.decorExtra = halo;
      const wingL = add(GEO.cloak, this.matAccent, -0.46, 1.5, -0.3);
      wingL.rotation.y = 0.6;
      wingL.rotation.z = 0.35;
      wingL.scale.set(0.6, 1.0, 1);
      const wingR = add(GEO.cloak, this.matAccent, 0.46, 1.5, -0.3);
      wingR.rotation.y = -0.6;
      wingR.rotation.z = -0.35;
      wingR.scale.set(0.6, 1.0, 1);
      add(GEO.crossV, this.matAccent, 0, 1.24, 0.235);
    } else if (key === 'cosmic') {
      const hood = add(GEO.hood, this.matPrimary, 0, 2.42, -0.02);
      hood.rotation.y = Math.PI / 6;
      hood.scale.set(1.25, 1.25, 1.25);
      add(GEO.mask, this.matDark, 0, 1.82, 0.26);
      add(GEO.eye, this.matGlow, -0.09, 1.86, 0.3);
      add(GEO.eye, this.matGlow, 0.09, 1.86, 0.3);
      const cape = add(GEO.cloak, this.matSecondary, 0, 1.16, -0.29);
      cape.scale.set(1.25, 1.25, 1);
      for (let i = 0; i < 5; i++) {
        const star = add(GEO.orb, this.matGlow, randRange(-0.3, 0.3), randRange(0.9, 1.6), -0.32);
        star.scale.setScalar(randRange(0.4, 0.9));
      }
      const spikeL = add(GEO.spike, this.matSecondary, -0.54, 1.7, 0);
      spikeL.rotation.z = 2.6;
      spikeL.scale.set(1.4, 1.9, 1.4);
      const spikeR = add(GEO.spike, this.matSecondary, 0.54, 1.7, 0);
      spikeR.rotation.z = -2.6;
      spikeR.scale.set(1.4, 1.9, 1.4);
      this.orbitGroup = new THREE.Group();
      this.orbitGroup.position.y = 1.5;
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        const crystal = new THREE.Mesh(GEO.crystal, this.matGlow);
        crystal.position.set(Math.sin(a) * 0.95, Math.sin(i * 2.1) * 0.22, Math.cos(a) * 0.95);
        crystal.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
        this.orbitGroup.add(crystal);
      }
      g.add(this.orbitGroup);
    } else if (key === 'squire') {
      add(GEO.hood, this.matSecondary, 0, 2.28, -0.02).scale.setScalar(0.8);
      const q = add(GEO.quiver, this.matDark, -0.28, 1.35, -0.28);
      q.rotation.z = 0.4;
      add(GEO.strap, this.matAccent, 0.12, 1.22, 0.23).rotation.z = -0.5;
    } else if (key === 'mercenary') {
      add(GEO.brim, this.matDark, 0, 2.02, 0).scale.setScalar(0.75);
      const strap = add(GEO.strap, this.matSecondary, -0.1, 1.22, 0.23);
      strap.rotation.z = 0.55;
      const pad = add(GEO.pauldron, this.matSecondary, 0.52, 1.62, 0);
      pad.scale.setScalar(1.2);
      add(GEO.eye, this.matGlow, -0.09, 1.87, 0.27);
    } else if (key === 'pikeman') {
      add(GEO.helm, this.matSecondary, 0, 2.06, 0);
      add(GEO.strap, this.matDark, 0, 1.9, 0.25).scale.set(0.5, 0.5, 0.4);
      add(GEO.tabard, this.matSecondary, 0, 1.12, 0.235);
    } else if (key === 'archerguard') {
      add(GEO.brim, this.matSecondary, 0, 2.08, 0);
      add(GEO.hood, this.matPrimary, 0, 2.26, -0.02).scale.setScalar(0.7);
      const q = add(GEO.quiver, this.matDark, 0.3, 1.4, -0.28);
      q.rotation.z = -0.45;
      add(GEO.strap, this.matSecondary, -0.1, 1.24, 0.22).rotation.z = 0.5;
    } else if (key === 'ironclad') {
      add(GEO.greathelm, this.matSecondary, 0, 1.88, 0);
      add(GEO.slit, this.matDark, 0, 1.92, 0);
      const pl = add(GEO.pauldron, this.matSecondary, -0.52, 1.6, 0);
      pl.scale.setScalar(1.35);
      const pr = add(GEO.pauldron, this.matSecondary, 0.52, 1.6, 0);
      pr.scale.setScalar(1.35);
      add(GEO.tabard, this.matDark, 0, 1.1, 0.24);
      for (let i = 0; i < 3; i++) {
        add(GEO.pommel, this.matAccent, -0.2 + i * 0.2, 1.5, 0.24).scale.setScalar(0.6);
      }
    } else if (key === 'duelist') {
      const brim = add(GEO.brim, this.matPrimary, 0, 2.14, 0);
      brim.scale.setScalar(0.85);
      const feather = add(GEO.feather, this.matAccent, 0.18, 2.32, -0.08);
      feather.rotation.z = -0.6;
      const sash = add(GEO.strap, this.matAccent, 0.1, 1.2, 0.24);
      sash.rotation.z = -0.6;
      add(GEO.cloak, this.matPrimary, 0, 1.24, -0.27).scale.set(0.7, 0.9, 1);
    } else if (key === 'venom') {
      const hood = add(GEO.hood, this.matPrimary, 0, 2.36, -0.02);
      hood.rotation.y = Math.PI / 6;
      add(GEO.mask, this.matDark, 0, 1.84, 0.25);
      add(GEO.eye, this.matGlow, -0.09, 1.87, 0.29);
      add(GEO.eye, this.matGlow, 0.09, 1.87, 0.29);
      const drip = add(GEO.orb, this.matGlow, 0, 2.5, 0.1);
      drip.scale.setScalar(0.5);
    } else if (key === 'sandreaper') {
      const hood = add(GEO.hood, this.matPrimary, 0, 2.34, 0);
      hood.scale.set(1.1, 1.1, 1.1);
      add(GEO.cloak, this.matSecondary, 0, 1.2, -0.27);
      add(GEO.mask, this.matDark, 0, 1.86, 0.24);
      add(GEO.eye, this.matAccent, -0.08, 1.9, 0.27);
      add(GEO.eye, this.matAccent, 0.08, 1.9, 0.27);
    } else if (key === 'thunderguard') {
      const coil = add(GEO.coil, this.matSecondary, 0, 2.24, -0.05);
      void coil;
      add(GEO.orb, this.matGlow, 0, 2.46, -0.05);
      add(GEO.crossV, this.matGlow, 0, 1.24, 0.23);
      add(GEO.eye, this.matGlow, -0.08, 1.88, 0.27);
      add(GEO.eye, this.matGlow, 0.08, 1.88, 0.27);
    } else if (key === 'bloodbaron') {
      const collarL = add(GEO.collar, this.matSecondary, -0.2, 1.72, -0.05);
      collarL.rotation.z = 0.3;
      const collarR = add(GEO.collar, this.matSecondary, 0.2, 1.72, -0.05);
      collarR.rotation.z = -0.3;
      add(GEO.cloak, this.matPrimary, 0, 1.22, -0.28);
      add(GEO.eye, this.matGlow, -0.09, 1.88, 0.26);
      add(GEO.eye, this.matGlow, 0.09, 1.88, 0.26);
      add(GEO.crossV, this.matAccent, 0, 1.24, 0.23);
    } else if (key === 'gladiatorgold') {
      const crest = add(GEO.plume, this.matAccent, 0, 2.3, 0);
      crest.scale.set(1.6, 2, 1.4);
      const pl = add(GEO.pauldron, this.matAccent, -0.52, 1.62, 0);
      pl.scale.setScalar(1.3);
      const pr = add(GEO.pauldron, this.matAccent, 0.52, 1.62, 0);
      pr.scale.setScalar(1.3);
      add(GEO.crossV, this.matSecondary, 0, 1.22, 0.235);
      add(GEO.pommel, this.matAccent, 0, 1.0, 0.24).scale.setScalar(1.4);
    } else if (key === 'shadowassassin') {
      const scarf = add(GEO.strap, this.matDark, 0, 1.62, 0.02);
      scarf.rotation.z = 1.5;
      scarf.scale.set(2.4, 0.4, 1);
      add(GEO.eye, this.matGlow, -0.09, 1.88, 0.26);
      add(GEO.eye, this.matGlow, 0.09, 1.88, 0.26);
      const hood = add(GEO.hood, this.matPrimary, 0, 2.32, 0);
      hood.scale.set(1.05, 1.05, 1.05);
    } else if (key === 'frostwarden') {
      add(GEO.greathelm, this.matSecondary, 0, 1.9, 0);
      add(GEO.slit, this.matDark, 0, 1.94, 0.02);
      const hl = add(GEO.iceShard, this.matAccent, -0.16, 2.2, 0.03);
      hl.rotation.z = 0.55;
      const hr = add(GEO.iceShard, this.matAccent, 0.16, 2.2, 0.03);
      hr.rotation.z = -0.55;
      const sL = add(GEO.iceShard, this.matAccent, -0.5, 1.6, -0.02);
      sL.rotation.z = 0.4;
      sL.scale.set(1.4, 1.6, 1.4);
      const sR = add(GEO.iceShard, this.matAccent, 0.5, 1.6, -0.02);
      sR.rotation.z = -0.4;
      sR.scale.set(1.4, 1.6, 1.4);
      const cape = add(GEO.cloak, this.matSecondary, 0, 1.16, -0.29);
      cape.scale.set(1.1, 1.05, 1);
    } else if (key === 'emberchampion') {
      for (let i = -1; i <= 1; i++) {
        add(GEO.spike, this.matGlow, i * 0.13, 2.32 - Math.abs(i) * 0.08, 0).scale.set(0.8, 1.4 - Math.abs(i) * 0.3, 0.8);
      }
      add(GEO.crossV, this.matGlow, 0, 1.2, 0.235);
      add(GEO.eye, this.matGlow, -0.09, 1.88, 0.27);
      add(GEO.eye, this.matGlow, 0.09, 1.88, 0.27);
    } else if (key === 'stormsovereign') {
      for (let i = 0; i < 3; i++) {
        const sp = add(GEO.spike, this.matAccent, -0.18 + i * 0.18, 2.3, 0);
        sp.rotation.z = (i - 1) * 0.4;
        sp.scale.set(0.8, 1.5, 0.8);
      }
      add(GEO.eye, this.matGlow, -0.09, 1.88, 0.27);
      add(GEO.eye, this.matGlow, 0.09, 1.88, 0.27);
    } else if (key === 'abyssal') {
      for (let i = 0; i < 3; i++) {
        const fin = add(GEO.jagged, this.matAccent, 0, 2.2 + i * 0.12, -0.1 - i * 0.06);
        fin.rotation.x = -0.4;
        fin.scale.set(0.6, 1 - i * 0.2, 0.6);
      }
      add(GEO.eye, this.matGlow, -0.1, 1.88, 0.26);
      add(GEO.eye, this.matGlow, 0.1, 1.88, 0.26);
      this.orbitGroup = new THREE.Group();
      this.orbitGroup.position.y = 1.4;
      const orb = new THREE.Mesh(GEO.orb, this.matGlow);
      orb.scale.setScalar(1.4);
      orb.position.x = 0.8;
      this.orbitGroup.add(orb);
      g.add(this.orbitGroup);
    } else if (key === 'phoenix') {
      const wingL = add(GEO.wingBig, this.matAccent, -0.55, 1.55, -0.25);
      wingL.rotation.y = 0.5;
      wingL.rotation.z = 0.45;
      const wingR = add(GEO.wingBig, this.matAccent, 0.55, 1.55, -0.25);
      wingR.rotation.y = -0.5;
      wingR.rotation.z = -0.45;
      for (let i = 0; i < 3; i++) {
        add(GEO.bigFeather, this.matAccent, (i - 1) * 0.1, 1.9, -0.28 - i * 0.06).rotation.x = -0.6;
      }
      const sun = new THREE.Mesh(GEO.halo, this.matGlow);
      sun.position.y = 2.52;
      sun.rotation.x = Math.PI / 2;
      sun.scale.setScalar(1.15);
      this.torsoPivot.add(sun);
      this.decorExtra = sun;
      add(GEO.eye, this.matGlow, -0.09, 1.88, 0.27);
      add(GEO.eye, this.matGlow, 0.09, 1.88, 0.27);
    } else if (key === 'voidemperor') {
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        add(GEO.spike, this.matSecondary, Math.sin(a) * 0.2, 2.34, Math.cos(a) * 0.2).scale.set(0.9, 1.7, 0.9);
      }
      add(GEO.cloak, this.matPrimary, 0, 1.18, -0.29).scale.set(1.2, 1.2, 1);
      add(GEO.eye, this.matGlow, -0.09, 1.87, 0.28);
      add(GEO.eye, this.matGlow, 0.09, 1.87, 0.28);
      this.orbitGroup = new THREE.Group();
      this.orbitGroup.position.y = 1.45;
      const orb = new THREE.Mesh(GEO.orb, this.matGlow);
      orb.scale.setScalar(1.8);
      orb.position.y = 0.3;
      this.orbitGroup.add(orb);
      g.add(this.orbitGroup);
    } else if (key === 'titanbreaker') {
      const rockL = add(GEO.rock, this.matSecondary, -0.55, 1.6, 0);
      rockL.scale.set(1.8, 1.3, 1.4);
      const rockR = add(GEO.rock, this.matSecondary, 0.55, 1.6, 0);
      rockR.scale.set(1.8, 1.3, 1.4);
      const hornL = add(GEO.spike, this.matAccent, -0.22, 2.2, 0.05);
      hornL.rotation.z = 0.6;
      hornL.scale.set(1.1, 1.8, 1.1);
      const hornR = add(GEO.spike, this.matAccent, 0.22, 2.2, 0.05);
      hornR.rotation.z = -0.6;
      hornR.scale.set(1.1, 1.8, 1.1);
      add(GEO.crossV, this.matGlow, 0, 1.2, 0.235);
      add(GEO.crossH, this.matGlow, 0, 1.3, 0.235);
      const gem = add(GEO.orb, this.matAccent, 0, 1.46, 0.26);
      gem.scale.setScalar(0.9);
    } else if (key === 'seraph') {
      const halo = new THREE.Mesh(GEO.halo, this.matGlow);
      halo.position.y = 2.56;
      halo.rotation.x = Math.PI / 2;
      this.torsoPivot.add(halo);
      this.decorExtra = halo;
      for (const side of [-1, 1]) {
        for (let i = 0; i < 3; i++) {
          const w = add(GEO.wingBig, this.matSecondary, side * (0.45 + i * 0.16), 1.7 - i * 0.18, -0.26 - i * 0.05);
          w.rotation.y = side * (0.4 + i * 0.12);
          w.rotation.z = side * (0.3 - i * 0.1);
          w.scale.set(0.75 - i * 0.12, 1.05 - i * 0.15, 1);
        }
      }
      add(GEO.crossV, this.matAccent, 0, 1.24, 0.235);
    } else if (key === 'chaosoverlord') {
      const hornL = add(GEO.spike, this.matSecondary, -0.18, 2.2, 0);
      hornL.rotation.z = 0.8;
      hornL.rotation.x = 0.3;
      hornL.scale.set(1.3, 1.9, 1.3);
      const hornR = add(GEO.spike, this.matSecondary, 0.18, 2.2, 0);
      hornR.rotation.z = -0.8;
      hornR.rotation.x = -0.3;
      hornR.scale.set(1.3, 1.9, 1.3);
      add(GEO.eye, this.matGlow, -0.09, 1.87, 0.27);
      add(GEO.eye, this.matGlow, 0.09, 1.87, 0.27);
      add(GEO.jagged, this.matGlow, -0.15, 1.2, 0.24).rotation.z = 0.4;
      add(GEO.jagged, this.matGlow, 0.15, 1.14, 0.24).rotation.z = -0.4;
      this.orbitGroup = new THREE.Group();
      this.orbitGroup.position.y = 1.45;
      const orb1 = new THREE.Mesh(GEO.orb, this.matGlow);
      orb1.position.set(0.85, 0.2, 0);
      const orb2 = new THREE.Mesh(GEO.orb, this.matGlow);
      orb2.position.set(-0.85, -0.15, 0.2);
      orb2.scale.setScalar(0.8);
      this.orbitGroup.add(orb1, orb2);
      g.add(this.orbitGroup);
    } else if (key === 'fouiefury') {
      const katanaBack = new THREE.Mesh(GEO.longblade, this.matBlade);
      katanaBack.position.set(-0.3, 1.35, -0.3);
      katanaBack.rotation.z = 2.4;
      katanaBack.castShadow = true;
      g.add(katanaBack);
      add(GEO.strap, this.matDark, 0, 1.3, 0.05).rotation.z = 1.5;
      const band = add(GEO.strap, this.matAccent, 0, 2.0, 0.02);
      band.scale.set(1.3, 0.35, 1.2);
      const tailL = add(GEO.strap, this.matAccent, -0.08, 1.9, -0.28);
      tailL.rotation.x = 0.4;
      tailL.scale.set(0.3, 1, 0.3);
      const tailR = add(GEO.strap, this.matAccent, 0.08, 1.88, -0.28);
      tailR.rotation.x = 0.5;
      tailR.scale.set(0.3, 0.9, 0.3);
      add(GEO.eye, this.matGlow, -0.09, 1.88, 0.26);
      add(GEO.eye, this.matGlow, 0.09, 1.88, 0.26);
    } else if (key === 'prenpren') {
      const hood = add(GEO.hood, this.matPrimary, 0, 2.5, -0.03);
      hood.scale.set(1.35, 1.4, 1.35);
      add(GEO.mask, this.matDark, 0, 1.8, 0.27);
      add(GEO.eye, this.matGlow, -0.09, 1.85, 0.31);
      add(GEO.eye, this.matGlow, 0.09, 1.85, 0.31);
      const cape1 = add(GEO.cloak, this.matSecondary, -0.14, 1.12, -0.3);
      cape1.rotation.z = 0.12;
      cape1.scale.set(0.75, 1.3, 1);
      const cape2 = add(GEO.cloak, this.matPrimary, 0.16, 1.08, -0.31);
      cape2.rotation.z = -0.1;
      cape2.scale.set(0.7, 1.22, 1);
      const collarL = add(GEO.collar, this.matSecondary, -0.22, 1.74, -0.04);
      collarL.rotation.z = 0.35;
      const collarR = add(GEO.collar, this.matSecondary, 0.22, 1.74, -0.04);
      collarR.rotation.z = -0.35;
      this.orbitGroup = new THREE.Group();
      this.orbitGroup.position.y = 1.5;
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2;
        const wisp = new THREE.Mesh(GEO.orb, this.matGlow);
        wisp.position.set(Math.sin(a) * 0.95, Math.sin(i * 2.4) * 0.3, Math.cos(a) * 0.95);
        wisp.scale.setScalar(0.8 + i * 0.15);
        this.orbitGroup.add(wisp);
      }
      g.add(this.orbitGroup);
    } else if (key === 'chronowarden') {
      const halo = new THREE.Mesh(GEO.halo, this.matGlow);
      halo.position.y = 2.54;
      halo.rotation.x = Math.PI / 2;
      this.torsoPivot.add(halo);
      this.decorExtra = halo;
      add(GEO.eye, this.matGlow, -0.09, 1.88, 0.27);
      add(GEO.eye, this.matGlow, 0.09, 1.88, 0.27);
      this.orbitGroup = new THREE.Group();
      this.orbitGroup.position.y = 1.5;
      for (let i = 0; i < 2; i++) {
        const orb = new THREE.Mesh(GEO.orb, this.matGlow);
        orb.position.set(i === 0 ? 0.9 : -0.9, 0.1, 0);
        this.orbitGroup.add(orb);
      }
      g.add(this.orbitGroup);
    } else if (key === 'bloodmooncountess') {
      const hood = add(GEO.hood, this.matPrimary, 0, 2.4, -0.02);
      hood.scale.set(1.2, 1.2, 1.2);
      add(GEO.eye, this.matGlow, -0.09, 1.87, 0.28);
      add(GEO.eye, this.matGlow, 0.09, 1.87, 0.28);
      const collarL = add(GEO.collar, this.matSecondary, -0.22, 1.72, -0.04);
      collarL.rotation.z = 0.35;
      const collarR = add(GEO.collar, this.matSecondary, 0.22, 1.72, -0.04);
      collarR.rotation.z = -0.35;
      add(GEO.cloak, this.matPrimary, 0, 1.14, -0.3).scale.set(1.15, 1.25, 1);
    } else if (key === 'worldbreaker') {
      const rockL = add(GEO.pauldron, this.matSecondary, -0.58, 1.64, 0);
      rockL.scale.set(2.0, 1.5, 1.5);
      const rockR = add(GEO.pauldron, this.matSecondary, 0.58, 1.64, 0);
      rockR.scale.set(2.0, 1.5, 1.5);
      const core = add(GEO.orb, this.matGlow, 0, 1.68, 0.2);
      core.scale.setScalar(1.2);
      add(GEO.crossV, this.matGlow, 0, 1.18, 0.235);
      add(GEO.crossH, this.matGlow, 0, 1.3, 0.235);
      add(GEO.jagged, this.matGlow, -0.18, 1.05, 0.24).rotation.z = 0.5;
      const hornL = add(GEO.spike, this.matAccent, -0.22, 2.22, 0);
      hornL.rotation.z = 0.7;
      const hornR = add(GEO.spike, this.matAccent, 0.22, 2.22, 0);
      hornR.rotation.z = -0.7;
    } else if (key === 'archangel') {
      const halo = new THREE.Mesh(GEO.halo, this.matGlow);
      halo.position.y = 2.6;
      halo.rotation.x = Math.PI / 2;
      this.torsoPivot.add(halo);
      this.decorExtra = halo;
      for (const side of [-1, 1]) {
        for (let i = 0; i < 2; i++) {
          const w = add(GEO.wingBig, this.matSecondary, side * (0.5 + i * 0.2), 1.75 - i * 0.22, -0.28 - i * 0.06);
          w.rotation.y = side * (0.45 + i * 0.15);
          w.rotation.z = side * (0.35 - i * 0.12);
          w.scale.set(0.9 - i * 0.15, 1.25 - i * 0.2, 1);
        }
      }
      add(GEO.crossV, this.matAccent, 0, 1.24, 0.235);
    } else if (key === 'paladin') {
      add(GEO.tabard, this.matSecondary, 0, 1.12, 0.235);
      add(GEO.crossV, this.matAccent, 0, 1.18, 0.27);
      add(GEO.helm, this.matSecondary, 0, 2.06, 0);
      const pl = add(GEO.pauldron, this.matAccent, -0.52, 1.62, 0);
      pl.scale.setScalar(1.25);
      const pr = add(GEO.pauldron, this.matAccent, 0.52, 1.62, 0);
      pr.scale.setScalar(1.25);
    } else if (key === 'ronin') {
      add(GEO.brim, this.matSecondary, 0, 2.1, 0);
      add(GEO.strap, this.matSecondary, -0.1, 1.24, 0.22).rotation.z = 0.5;
      const katanaBack = new THREE.Mesh(GEO.longblade, this.matBlade);
      katanaBack.position.set(-0.3, 1.32, -0.3);
      katanaBack.rotation.z = 2.4;
      katanaBack.castShadow = true;
      g.add(katanaBack);
    } else if (key === 'dreadpirate') {
      add(GEO.brim, this.matDark, 0, 2.14, 0);
      add(GEO.eye, this.matGlow, 0.1, 1.88, 0.27).scale.setScalar(0.8);
      add(GEO.cloak, this.matPrimary, 0, 1.2, -0.28);
      add(GEO.strap, this.matSecondary, -0.1, 1.24, 0.22).rotation.z = 0.5;
    } else if (key === 'plaguedoctor') {
      const hood = add(GEO.hood, this.matPrimary, 0, 2.34, -0.02);
      hood.scale.set(1.1, 1.1, 1.1);
      add(GEO.mask, this.matSecondary, 0, 1.82, 0.26).scale.set(0.8, 1.3, 0.8);
      add(GEO.eye, this.matGlow, -0.08, 1.9, 0.28);
      add(GEO.eye, this.matGlow, 0.08, 1.9, 0.28);
      add(GEO.crossV, this.matGlow, 0, 1.22, 0.235);
    } else if (key === 'oniwarrior') {
      const hornL = add(GEO.spike, this.matAccent, -0.16, 2.16, 0.05);
      hornL.rotation.z = 0.5;
      hornL.scale.set(1.2, 1.7, 1.2);
      const hornR = add(GEO.spike, this.matAccent, 0.16, 2.16, 0.05);
      hornR.rotation.z = -0.5;
      hornR.scale.set(1.2, 1.7, 1.2);
      add(GEO.mask, this.matDark, 0, 1.84, 0.26);
      add(GEO.eye, this.matGlow, -0.09, 1.88, 0.28);
      add(GEO.eye, this.matGlow, 0.09, 1.88, 0.28);
      add(GEO.strap, this.matSecondary, 0.1, 1.24, 0.22).rotation.z = -0.5;
    } else if (key === 'moonlitmaiden') {
      const veil = add(GEO.hood, this.matSecondary, 0, 2.3, -0.04);
      veil.scale.set(1.05, 0.9, 1.05);
      add(GEO.eye, this.matGlow, -0.09, 1.88, 0.27);
      add(GEO.eye, this.matGlow, 0.09, 1.88, 0.27);
      const halo = new THREE.Mesh(GEO.halo, this.matGlow);
      halo.position.y = 2.5;
      halo.rotation.x = Math.PI / 2;
      halo.scale.setScalar(0.8);
      this.torsoPivot.add(halo);
      this.decorExtra = halo;
    } else if (key === 'scarletvale') {
      const hood = add(GEO.hood, this.matPrimary, 0, 2.34, -0.02);
      hood.scale.set(1.05, 1.05, 1.05);
      add(GEO.eye, this.matGlow, -0.08, 1.88, 0.27);
      add(GEO.eye, this.matGlow, 0.08, 1.88, 0.27);
      const rose = add(GEO.orb, this.matGlow, 0.2, 1.42, 0.24);
      rose.scale.setScalar(0.7);
      add(GEO.strap, this.matSecondary, -0.1, 1.26, 0.22).rotation.z = 0.5;
    } else if (key === 'tempestrose') {
      add(GEO.brim, this.matSecondary, 0, 2.1, 0).scale.setScalar(0.8);
      add(GEO.eye, this.matGlow, -0.08, 1.88, 0.27);
      add(GEO.eye, this.matGlow, 0.08, 1.88, 0.27);
      const rose = add(GEO.orb, this.matGlow, -0.2, 1.42, 0.24);
      rose.scale.setScalar(0.7);
      add(GEO.cloak, this.matPrimary, 0, 1.22, -0.27).scale.set(0.75, 0.95, 1);
    } else if (key === 'emberlily') {
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        add(GEO.petal, this.matAccent, Math.sin(a) * 0.2, 2.22 + Math.sin(a) * 0.06, Math.cos(a) * 0.2).setRotationFromEuler(new THREE.Euler(Math.cos(a), a, Math.sin(a) * 0.3));
      }
      add(GEO.eye, this.matGlow, -0.08, 1.88, 0.27);
      add(GEO.eye, this.matGlow, 0.08, 1.88, 0.27);
      const rose = add(GEO.orb, this.matGlow, 0.18, 1.44, 0.24);
      rose.scale.setScalar(0.7);
    } else if (key === 'frostlily') {
      add(GEO.iceCrown, this.matSecondary, 0, 2.14, 0);
      add(GEO.iceShard, this.matAccent, -0.13, 2.32, 0.02).rotation.z = 0.4;
      add(GEO.iceShard, this.matAccent, 0, 2.38, 0.02);
      add(GEO.iceShard, this.matAccent, 0.13, 2.32, 0.02).rotation.z = -0.4;
      add(GEO.eye, this.matGlow, -0.08, 1.88, 0.27);
      add(GEO.eye, this.matGlow, 0.08, 1.88, 0.27);
      const rose = add(GEO.orb, this.matGlow, 0.18, 1.44, 0.24);
      rose.scale.setScalar(0.7);
      add(GEO.cloak, this.matSecondary, 0, 1.22, -0.27).scale.set(0.8, 0.95, 1);
    } else if (key === 'violetenchantress') {
      const hood = add(GEO.hood, this.matPrimary, 0, 2.36, -0.02);
      hood.scale.set(1.08, 1.08, 1.08);
      add(GEO.eye, this.matGlow, -0.08, 1.88, 0.28);
      add(GEO.eye, this.matGlow, 0.08, 1.88, 0.28);
      this.orbitGroup = new THREE.Group();
      this.orbitGroup.position.y = 1.45;
      const orb = new THREE.Mesh(GEO.orb, this.matGlow);
      orb.position.x = 0.85;
      orb.scale.setScalar(1.2);
      this.orbitGroup.add(orb);
      g.add(this.orbitGroup);
    } else if (key === 'goldenempress') {
      add(GEO.crown, this.matAccent, 0, 2.2, 0);
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        add(GEO.spike, this.matAccent, Math.sin(a) * 0.22, 2.34, Math.cos(a) * 0.22).scale.setScalar(0.8);
      }
      add(GEO.eye, this.matGlow, -0.08, 1.88, 0.27);
      add(GEO.eye, this.matGlow, 0.08, 1.88, 0.27);
      add(GEO.cloak, this.matSecondary, 0, 1.2, -0.28).scale.set(1.05, 1.1, 1);
    } else if (key === 'crimsonhuntress') {
      const hood = add(GEO.hood, this.matPrimary, 0, 2.34, -0.02);
      hood.scale.set(1.08, 1.08, 1.08);
      add(GEO.eye, this.matGlow, -0.08, 1.88, 0.28);
      add(GEO.eye, this.matGlow, 0.08, 1.88, 0.28);
      add(GEO.quiver, this.matDark, 0.28, 1.4, -0.28).rotation.z = -0.45;
      const rose = add(GEO.orb, this.matGlow, -0.18, 1.44, 0.24);
      rose.scale.setScalar(0.7);
    } else if (key === 'stormvalkyrie') {
      for (const side of [-1, 1]) {
        for (let i = 0; i < 2; i++) {
          const w = add(GEO.wingBig, this.matSecondary, side * (0.48 + i * 0.18), 1.72 - i * 0.2, -0.27 - i * 0.05);
          w.rotation.y = side * (0.42 + i * 0.14);
          w.rotation.z = side * (0.32 - i * 0.1);
          w.scale.set(0.7 - i * 0.1, 1.1 - i * 0.18, 1);
        }
      }
      add(GEO.eye, this.matGlow, -0.08, 1.88, 0.27);
      add(GEO.eye, this.matGlow, 0.08, 1.88, 0.27);
    } else if (key === 'starweaver') {
      const hood = add(GEO.hood, this.matPrimary, 0, 2.36, -0.02);
      hood.scale.set(1.1, 1.1, 1.1);
      add(GEO.eye, this.matGlow, -0.08, 1.88, 0.28);
      add(GEO.eye, this.matGlow, 0.08, 1.88, 0.28);
      this.orbitGroup = new THREE.Group();
      this.orbitGroup.position.y = 1.5;
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2;
        const star = new THREE.Mesh(GEO.crystal, this.matGlow);
        star.position.set(Math.sin(a) * 0.9, Math.sin(i * 2.2) * 0.25, Math.cos(a) * 0.9);
        star.scale.setScalar(0.7);
        this.orbitGroup.add(star);
      }
      g.add(this.orbitGroup);
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
    this._celBase = null;
    this.removeCrown();
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

    if (st.sit || st.celebrate) {
      const k2 = Math.min(1, dt * 8);
      if (this._celBase === null || this._celBase === undefined) this._celBase = this.root.position.y;
      if (st.celebrate) {
        this.root.position.y = this._celBase + Math.abs(Math.sin(this.time * 7)) * 0.38;
        this.armL.pivot.rotation.x += (-2.9 - this.armL.pivot.rotation.x) * k2;
        this.armR.pivot.rotation.x += (-2.9 - this.armR.pivot.rotation.x) * k2;
        this.armL.pivot.rotation.z += (0.35 - this.armL.pivot.rotation.z) * k2;
        this.armR.pivot.rotation.z += (-0.35 - this.armR.pivot.rotation.z) * k2;
        this.legL.rotation.x += (0.15 - this.legL.rotation.x) * k2;
        this.legR.rotation.x += (-0.15 - this.legR.rotation.x) * k2;
        this.torsoPivot.rotation.x += (-0.06 - this.torsoPivot.rotation.x) * k2;
        this.torsoPivot.position.y += (0 - this.torsoPivot.position.y) * k2;
      } else {
        this.root.position.y = this._celBase;
        this.legL.rotation.x += (-1.5 - this.legL.rotation.x) * k2;
        this.legR.rotation.x += (-1.5 - this.legR.rotation.x) * k2;
        this.armL.pivot.rotation.x += (-0.25 - this.armL.pivot.rotation.x) * k2;
        this.armR.pivot.rotation.x += (-0.25 - this.armR.pivot.rotation.x) * k2;
        this.armL.pivot.rotation.z += (0.45 - this.armL.pivot.rotation.z) * k2;
        this.armR.pivot.rotation.z += (-0.45 - this.armR.pivot.rotation.z) * k2;
        this.torsoPivot.rotation.x += (-0.14 - this.torsoPivot.rotation.x) * k2;
        this.torsoPivot.position.y += (-0.5 - this.torsoPivot.position.y) * k2;
      }
      this.torsoPivot.rotation.y += (0 - this.torsoPivot.rotation.y) * k2;
      if (this.head) this.head.rotation.y += (0 - this.head.rotation.y) * k2;
      return;
    }
    this._celBase = null;

    const speedRatio = st.speedRatio || 0;
    const moving = speedRatio > 0.02 && st.grounded !== false;
    if (moving) this.walkPhase += dt * (6 + 10 * speedRatio);
    const runC = Math.min(speedRatio / 0.55, 1);
    const swingAmp = moving ? Math.sin(this.walkPhase) * (0.55 + 0.45 * speedRatio) : 0;
    let bob = moving ? Math.abs(Math.cos(this.walkPhase)) * (0.05 + 0.05 * runC) : 0;
    const breathe = Math.sin(this.time * 1.9) * 0.02;

    let aLx = moving ? -0.45 - swingAmp * 0.85 : -0.12 + breathe * 2.2;
    let aLz = 0.12 + breathe;
    let aRx = moving ? -0.45 + swingAmp * 0.5 - runC * 0.35 : -0.38 + breathe * 1.6;
    let aRy = 0;
    let aRz = -(0.16 + breathe);
    let legLx = swingAmp;
    let legRx = -swingAmp;
    let leanX = speedRatio * (0.18 + 0.16 * runC);
    let twistY = moving ? Math.sin(this.walkPhase) * 0.09 * speedRatio : 0;

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

    if (this.orbitGroup) {
      this.orbitGroup.rotation.y += dt * 2.3;
      this.orbitGroup.position.y = 1.5 + Math.sin(this.time * 2.1) * 0.09;
    }

    if (this.crown) {
      this.crown.position.y = 3.32 + Math.sin(this.time * 2.5) * 0.07;
      this.crown.rotation.y += dt * 0.8;
    }

    if (this.head) {
      const look = st.lookAround ? Math.sin(this.time * 0.85) * 0.6 : 0;
      this.head.rotation.y += (look - this.head.rotation.y) * Math.min(1, dt * 6);
    }
  }

  addCrown(place) {
    this.removeCrown();
    const colors = [0xffd700, 0xc8ccd4, 0xcd8f4a];
    const col = colors[place - 1] || colors[0];
    const mat = new THREE.MeshStandardMaterial({
      color: col, emissive: col, emissiveIntensity: 0.35, metalness: 0.7, roughness: 0.3
    });
    const g = new THREE.Group();
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.34, 0.14, 8), mat);
    g.add(base);
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      const sp = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.2, 4), mat);
      sp.position.set(Math.sin(a) * 0.24, 0.16, Math.cos(a) * 0.24);
      g.add(sp);
    }
    g.position.y = 3.32;
    this.torsoPivot.add(g);
    this.crown = g;
    this.crownMat = mat;
  }

  removeCrown() {
    if (this.crown) {
      this.torsoPivot.remove(this.crown);
      this.crown = null;
    }
    if (this.crownMat) {
      this.crownMat.dispose();
      this.crownMat = null;
    }
  }

  setName(name) {
    this.name = name;
    const tex = makeNameTexture(name, this.isPlayer ? '#8fd8ff' : '#ffb3a3');
    const old = this.nameSprite.material.map;
    this.nameSprite.material.map = tex;
    this.nameSprite.material.needsUpdate = true;
    if (old) old.dispose();
  }
}
