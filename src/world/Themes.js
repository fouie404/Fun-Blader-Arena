export const THEMES = {
  citadel: {
    id: 'citadel',
    name: 'Sunrise Citadel',
    desc: 'Classic stone arena at high noon',
    sky: 0x9fbcd9, fogColor: 0xa9c2dd, fogNear: 70, fogFar: 235,
    hemiSky: 0xbfd8f0, hemiGround: 0x54452e, hemiI: 0.85,
    sunColor: 0xffe7bd, sunI: 1.5, sunPos: [45, 70, 30],
    ambColor: 0x33384a, ambI: 0.28,
    grass: 0x59713f, mountain: 0x51627e, cloud: 0.85,
    stars: false, moon: false,
    torchColor: 0xff9a3c, torchI: 24,
    particles: null,
    t: {
      floor: 0xffffff, wall: 0xffffff, merlon: 0x6e675a, tower: 0x77705f,
      roof: 0x50412e, pillar: 0x8a8274, cap: 0x6e675a, platform: 0x928a7b,
      rock: 0x847d70, trunk: 0x5d4426, leafA: 0x3d6b34, leafB: 0x4d7f3a
    }
  },
  moonlight: {
    id: 'moonlight',
    name: 'Moonlight Hollow',
    desc: 'Haunted forest beneath a giant moon',
    layout: 'forest',
    sky: 0x0b1026, fogColor: 0x101830, fogNear: 55, fogFar: 200,
    hemiSky: 0x3a4a7a, hemiGround: 0x0c0f1e, hemiI: 0.55,
    sunColor: 0xbfd0ff, sunI: 0.85, sunPos: [-40, 60, -30],
    ambColor: 0x1a2340, ambI: 0.5,
    grass: 0x2a3a52, mountain: 0x1a2440, cloud: 0.22,
    stars: true, moon: true,
    torchColor: 0x8fb0ff, torchI: 30,
    particles: { color: 0x9fd8ff, size: 0.16, vy: 0.35, drift: 0.5 },
    t: {
      floor: 0x7688b8, wall: 0x6a7aa8, merlon: 0x5a6a98, tower: 0x7a8ab8,
      roof: 0x3a466e, pillar: 0x8a9ac0, cap: 0x6a7aa8, platform: 0x8a9ac8,
      rock: 0x7080b0, trunk: 0x3a4662, leafA: 0x3a5a6a, leafB: 0x4a6a7a
    }
  },
  ember: {
    id: 'ember',
    name: 'Ember Hollow',
    desc: 'Volcanic wasteland of lava and ash',
    layout: 'ember',
    sky: 0x1a0d0a, fogColor: 0x2a120c, fogNear: 50, fogFar: 185,
    hemiSky: 0x66301e, hemiGround: 0x1a0c08, hemiI: 0.62,
    sunColor: 0xff8a4a, sunI: 0.95, sunPos: [30, 50, -40],
    ambColor: 0x401a10, ambI: 0.5,
    grass: 0x3a2418, mountain: 0x2a1410, cloud: 0.18,
    stars: false, moon: false,
    torchColor: 0xff5522, torchI: 30,
    particles: { color: 0xff7733, size: 0.17, vy: 1.1, drift: 0.7 },
    t: {
      floor: 0xb08a78, wall: 0x9a7a6a, merlon: 0x7a5a4a, tower: 0x8a6a5a,
      roof: 0x4a2a1e, pillar: 0xa08070, cap: 0x7a5a4a, platform: 0xa8887a,
      rock: 0x8a6a5a, trunk: 0x4a3020, leafA: 0x6a4a30, leafB: 0x7a5638
    }
  },
  frost: {
    id: 'frost',
    name: 'Frostfang Keep',
    desc: 'Frozen village under a pale sun',
    layout: 'frost',
    sky: 0xcfe0f2, fogColor: 0xdceaf8, fogNear: 60, fogFar: 210,
    hemiSky: 0xdfeeff, hemiGround: 0x8a97a8, hemiI: 0.9,
    sunColor: 0xeaf2ff, sunI: 1.3, sunPos: [-30, 65, 40],
    ambColor: 0x4a5a70, ambI: 0.3,
    grass: 0xd8e4ee, mountain: 0x8a9ab2, cloud: 0.9,
    stars: false, moon: false,
    torchColor: 0xffb46a, torchI: 26,
    particles: { color: 0xffffff, size: 0.15, vy: -1.3, drift: 1.1 },
    t: {
      floor: 0xdce8f2, wall: 0xc8d8e8, merlon: 0xb0c2d4, tower: 0xc0d0e0,
      roof: 0x8aa2b8, pillar: 0xd0dce8, cap: 0xb0c2d4, platform: 0xd4e0ec,
      rock: 0xb8c8d8, trunk: 0x6a5a4a, leafA: 0x9ac0cc, leafB: 0xb8d8e0
    }
  },
  golden: {
    id: 'golden',
    name: 'Golden Oasis',
    desc: 'Desert market oasis at golden hour',
    layout: 'oasis',
    sky: 0xf2c890, fogColor: 0xe8b880, fogNear: 65, fogFar: 220,
    hemiSky: 0xffe0b0, hemiGround: 0x6a5030, hemiI: 0.8,
    sunColor: 0xffb060, sunI: 1.6, sunPos: [60, 45, -20],
    ambColor: 0x4a3828, ambI: 0.32,
    grass: 0xc8a86a, mountain: 0x8a6848, cloud: 0.5,
    stars: false, moon: false,
    torchColor: 0xffa030, torchI: 26,
    particles: { color: 0xffe0a0, size: 0.14, vy: 0.25, drift: 0.9 },
    t: {
      floor: 0xe8c8a0, wall: 0xd8b088, merlon: 0xc09868, tower: 0xd0a878,
      roof: 0x8a6038, pillar: 0xe0c098, cap: 0xc09868, platform: 0xe4c4a0,
      rock: 0xc8a878, trunk: 0x7a5a34, leafA: 0x5a7a3a, leafB: 0x6a8a42
    }
  },
  temple: {
    id: 'temple',
    name: 'Sky Temple',
    desc: 'Marble steps of the sky monks',
    layout: 'temple',
    sky: 0xbfd8e8, fogColor: 0xc8d8e0, fogNear: 70, fogFar: 220,
    hemiSky: 0xd8e8f4, hemiGround: 0x8a8a72, hemiI: 0.9,
    sunColor: 0xfff4d8, sunI: 1.45, sunPos: [30, 75, 40],
    ambColor: 0x3a4050, ambI: 0.3,
    grass: 0x8aa06a, mountain: 0x7a8a9a, cloud: 0.6,
    stars: false, moon: false,
    torchColor: 0xffc060, torchI: 26,
    particles: { color: 0xffe9c0, size: 0.13, vy: 0.3, drift: 0.6 },
    t: {
      floor: 0xf0ead8, wall: 0xe0d8c0, merlon: 0xcabfa4, tower: 0xe4dcc4,
      roof: 0x9a8a5a, pillar: 0xf2ecda, cap: 0xcabfa4, platform: 0xece4cc,
      rock: 0xcabfa0, trunk: 0x7a6a4a, leafA: 0x7a9a5a, leafB: 0x8aaa66
    }
  },
  catacombs: {
    id: 'catacombs',
    name: 'Cursed Catacombs',
    desc: 'Buried crypts that never sleep',
    layout: 'catacombs',
    sky: 0x0a0a12, fogColor: 0x14101e, fogNear: 40, fogFar: 160,
    hemiSky: 0x4a3a6a, hemiGround: 0x0a0810, hemiI: 0.45,
    sunColor: 0x8a7aff, sunI: 0.55, sunPos: [-30, 60, -35],
    ambColor: 0x2a1a3a, ambI: 0.6,
    grass: 0x1a1622, mountain: 0x141020, cloud: 0.15,
    stars: false, moon: false,
    torchColor: 0xaa66ff, torchI: 30,
    particles: { color: 0xaa88ff, size: 0.13, vy: 0.35, drift: 0.5 },
    t: {
      floor: 0x4a4456, wall: 0x3a3448, merlon: 0x2e2a3c, tower: 0x403a52,
      roof: 0x241f30, pillar: 0x524a66, cap: 0x2e2a3c, platform: 0x4e4860,
      rock: 0x3c3648, trunk: 0x2a2434, leafA: 0x3a2e4e, leafB: 0x463a5c
    }
  },
  cove: {
    id: 'cove',
    name: 'Wrecked Cove',
    desc: 'A pirate graveyard on the sands',
    layout: 'cove',
    sky: 0x9ad0e0, fogColor: 0xaad8e0, fogNear: 60, fogFar: 200,
    hemiSky: 0xc8e8f0, hemiGround: 0x5a6a4a, hemiI: 0.85,
    sunColor: 0xfff0c0, sunI: 1.4, sunPos: [-45, 55, 25],
    ambColor: 0x3a4a50, ambI: 0.3,
    grass: 0x8a9a5a, mountain: 0x5a7a8a, cloud: 0.7,
    stars: false, moon: false,
    torchColor: 0xffa040, torchI: 26,
    particles: null,
    t: {
      floor: 0xd8c090, wall: 0x8a7a5a, merlon: 0x6e6248, tower: 0x9a8a64,
      roof: 0x5a4a34, pillar: 0xc8b088, cap: 0x6e6248, platform: 0xc8ac7c,
      rock: 0xa89a78, trunk: 0x6a4a2a, leafA: 0x4a7a3a, leafB: 0x5a8a44
    }
  }
};
