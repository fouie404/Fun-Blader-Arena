export const SKINS = {
  knight: {
    name: 'Knight', desc: 'Stalwart guard of the arena',
    primary: 0x3560c0, secondary: 0x8a93a6, accent: 0xd8a02a,
    decor: 'knight', bladeGlow: 0
  },
  crusader: {
    name: 'Crusader', desc: 'Holy warrior in heavy plate',
    primary: 0xa03030, secondary: 0xd8d3c8, accent: 0xc9a227,
    decor: 'crusader', bladeGlow: 0
  },
  ranger: {
    name: 'Ranger', desc: 'Swift hunter of the wilds',
    primary: 0x3f7a44, secondary: 0x6b5334, accent: 0xb0c48a,
    decor: 'ranger', bladeGlow: 0
  },
  royal: {
    name: 'Royal', desc: 'Crowned champion of the realm',
    primary: 0x6b3fa0, secondary: 0xc9a227, accent: 0xe8d8a8,
    decor: 'royal', bladeGlow: 0xd8a02a
  },
  shadow: {
    name: 'Shadow', desc: 'Silent blade from the void',
    primary: 0x23232e, secondary: 0x3d3d52, accent: 0x8a2be2,
    decor: 'shadow', bladeGlow: 0x8a2be2
  },
  dragonlord: {
    name: 'Dragonlord', desc: 'Bonded to an ancient dragon',
    primary: 0x8a1a1a, secondary: 0x3a3a44, accent: 0xffb020,
    decor: 'dragon', bladeGlow: 0xff5522, premium: true
  },
  voidreaper: {
    name: 'Void Reaper', desc: 'Harvested from the void itself',
    primary: 0x16121f, secondary: 0x2a2438, accent: 0x8a2be2,
    decor: 'reaper', bladeGlow: 0x8a2be2, premium: true
  },
  frostking: {
    name: 'Frost King', desc: 'Crowned in eternal winter',
    primary: 0x9fd4e8, secondary: 0xd8ecf4, accent: 0x4aa8d8,
    decor: 'frostking', bladeGlow: 0x66d9ff, premium: true
  },
  warlord: {
    name: 'Warlord', desc: 'Conqueror of a hundred arenas',
    primary: 0x5a1f1f, secondary: 0x2a2a30, accent: 0xc9a227,
    decor: 'warlord', bladeGlow: 0xffaa33, price: 1000,
    aura: { colors: [0xffcc66, 0xff8833], every: 0.5, count: 2, up: 0.8, grav: -1 }
  },
  stormcaller: {
    name: 'Storm Caller', desc: 'Wielder of the living thunder',
    primary: 0x1f3a6e, secondary: 0x8a93a6, accent: 0x66ccff,
    decor: 'storm', bladeGlow: 0x66ccff, price: 2000,
    aura: { colors: [0x9fdcff, 0x66ccff, 0xffffff], every: 0.25, count: 3, up: 1.2, grav: -1 }
  },
  inferno: {
    name: 'Inferno Knight', desc: 'Armored in everburning flame',
    primary: 0x3a1408, secondary: 0x7a2a10, accent: 0xff6a1a,
    decor: 'inferno', bladeGlow: 0xff4400, price: 5000,
    aura: { colors: [0xff6a1a, 0xffaa22, 0xff3300], every: 0.1, count: 3, up: 1.6, grav: -3 }
  },
  celestial: {
    name: 'Celestial Guardian', desc: 'Sentinel of the heavens',
    primary: 0xe8e4d4, secondary: 0xc9a227, accent: 0xfff2c0,
    decor: 'celestial', bladeGlow: 0xffe9a8, price: 50000,
    aura: { colors: [0xfff2c0, 0xffe9a8, 0xffffff], every: 0.12, count: 3, up: 1.8, grav: -0.5 }
  },
  cosmic: {
    name: 'Cosmic Devourer', desc: 'MYTHICAL - eater of worlds',
    primary: 0x14082a, secondary: 0x3a1a5e, accent: 0xb266ff,
    decor: 'cosmic', bladeGlow: 0x9933ff, price: 1000000,
    aura: { colors: [0xb266ff, 0x66ccff, 0xff66b8, 0xffffff], every: 0.07, count: 4, up: 1.4, grav: -0.8 }
  }
};
