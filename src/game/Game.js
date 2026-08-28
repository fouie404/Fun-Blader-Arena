import * as THREE from 'three';
import { GameState } from './GameState.js';
import { CollisionSystem } from './CollisionSystem.js';
import { SpawnSystem } from './SpawnSystem.js';
import { CombatSystem } from './CombatSystem.js';
import { Player } from './Player.js';
import { Enemy, fakeName } from './Enemy.js';
import { RemotePlayer } from './RemotePlayer.js';
import { BackendClient } from '../net/BackendClient.js';
import { NetworkManager } from '../net/NetworkManager.js';
import { SKINS } from './Skins.js';
import { ThirdPersonCamera } from '../camera/ThirdPersonCamera.js';
import { Environment } from '../world/Environment.js';
import { Arena } from '../world/Arena.js';
import { THEMES } from '../world/Themes.js';
import { HUD } from '../ui/HUD.js';
import { Menu } from '../ui/Menu.js';
import { Scoreboard } from '../ui/Scoreboard.js';
import { MobileControls } from '../ui/MobileControls.js';
import { AudioManager } from '../audio/AudioManager.js';
import { Input } from '../utils/Input.js';
import { randRange, clamp } from '../utils/MathUtils.js';

const FREE_SKINS = Object.keys(SKINS).filter((k) => SKINS[k].rarity === 'free');
const NORMAL_SKINS = Object.keys(SKINS).filter((k) => SKINS[k].rarity === 'free' || SKINS[k].rarity === 'common');
const PRO_SKINS = Object.keys(SKINS).filter((k) => SKINS[k].rarity === 'ad' || SKINS[k].rarity === 'rare');
// Secret "pro" bots: per server, at most 5 of these player-like fighters join
// individually over time. They are NOT chosen by the server creator.
const MAX_PRO_BOTS = 5;

export class Game {
  constructor(container) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.1, 500);
    this.scene.add(this.camera);

    this.state = new GameState();
    this.audio = new AudioManager();

    this.backend = new BackendClient();
    this.network = new NetworkManager(this, this.backend);
    this.remotes = new Map();
    // Bots rendered from the host's broadcasts (non-host clients only).
    this.netBots = new Map();
    this.isBotHost = false;
    this.serverBots = 2;      // regular bots configured by the server creator (0-4)
    this._botPrefix = '';
    this._botNetId = 0;
    this._proJoinT = 0;
    this._botStateT = 0;
    this._botSnapT = 0;

    // If a saved account token exists, refresh its profile (silently, offline-safe).
    if (this.backend.authed) {
      this.backend.refreshProfile().finally(() => this.applyAccountProfile(true));
    }

    try {
      const un = JSON.parse(localStorage.getItem('fba-unlocked-skins') || '[]');
      const sk = SKINS[this.state.settings.skin];
      if (!sk || ((sk.premium || sk.price) && !un.includes(this.state.settings.skin))) {
        this.state.settings.skin = 'knight';
      }
    } catch (e) {
      this.state.settings.skin = 'knight';
    }
    if (!this.state.settings.playerName) {
      this.state.settings.playerName = fakeName(new Set());
    }

    this.input = new Input(this.renderer.domElement);

    this.collision = new CollisionSystem(46.4);
    this.spawn = new SpawnSystem();
    this.env = new Environment(this.scene, THEMES[this.state.settings.map] || THEMES.citadel);
    this.arena = new Arena(this.scene, this.collision, THEMES[this.state.settings.map] || THEMES.citadel);
    this.combat = new CombatSystem(this);
    this.cameraRig = new ThirdPersonCamera(this.camera, this.input, this.collision);

    this.hud = new HUD();
    this.scoreboard = new Scoreboard();
    this.isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (this.isTouch) document.body.classList.add('touch');
    this.mobile = new MobileControls(this);
    this.mobile.setVisible(false);
    this.menu = new Menu({
      onPlay: () => this.startMatch('play'),
      onStartRandom: () => this.startMatch('random'),
      onSettings: (partial) => this.updateSettings(partial),
      onGetCoins: () => this.state.coins,
      onSpendCoins: (n) => this.spendCoins(n),
      onGetDiamonds: () => this.state.diamonds,
      onSpendDiamonds: (n) => this.spendDiamonds(n),
      onSetName: (n) => this.setPlayerName(n),
      onRandomName: () => fakeName(new Set()),
      onRedeem: (code) => this.redeemCode(code),
      onUnlockSkin: (id) => { this.backend.addOwnedSkin(id); this.syncProfileToBackend(); },
      onLoginState: () => ({ authed: this.backend.authed, username: this.backend.username, online: this.backend.online }),
      onAuth: async (mode, username, password) => {
        const res = mode === 'register' ? await this.backend.register(username, password) : await this.backend.login(username, password);
        if (res.ok) this.applyAccountProfile(true);
        return res;
      },
      onLogout: () => { this.leaveOnlineServer(); this.backend.logout(); },
      onListServers: () => this.backend.listServers(),
      onCreateServer: async (name, opts) => {
        const r = await this.backend.createServer(name, opts);
        if (r.ok) this.startOnline(r.server.id, r.server.map, r.server.bots);
        return r;
      },
      onJoinServer: async (id, password) => {
        const r = await this.backend.joinServer(id, password);
        if (r.ok) this.startOnline(id, r.server.map, r.server.bots);
        return r;
      }
    });
    this.menu.applySettings(this.state.settings);
    this.cameraRig.sensitivity = this.state.settings.sensitivity;

    const wm = document.createElement('div');
    wm.id = 'watermark';
    wm.textContent = '\u2694 FOUIE404 \u2694';
    document.body.appendChild(wm);
    console.log('%cBLADE ARENA \u2014 created by Fouie404', 'color:#d8a02a;font-size:16px;font-weight:bold');

    this.player = null;
    this.enemies = [];
    this.usedNames = new Set(['you']);
    this._botCounter = 0;
    this.slots = { used: 0, max: 3 };
    this.time = 0;
    this._lastCd = -1;
    this._sbTimer = 0;
    this._errShown = false;
    this._auraT = 0;
    this._hudT = 0;
    this._topT = 0;
    this.ceremonyT = 0;
    this.ceremonyFighters = [];
    this.top3 = [];
    this._iconCache = new Map();
    this.state.targetBots = 14;
    this.state.joinTimer = 0;
    this.state.leaveTimer = 0;
    this.state.pendingJoinT = 0;
    this.diamonds = [];
    this.diamondSpawnT = randRange(8, 10);
    this._diaGeo = new THREE.OctahedronGeometry(0.32, 0);
    this._diaMat = new THREE.MeshStandardMaterial({
      color: 0x66e0ff, emissive: 0x22aaff, emissiveIntensity: 1.4, metalness: 0.3, roughness: 0.2
    });

    this.clock = new THREE.Clock();
    this.renderer.setAnimationLoop(() => this.frame());

    this.player = new Player(this, new THREE.Vector3(0, 0, 0));
    this.usedNames.add((this.state.settings.playerName || 'you').toLowerCase());
    for (let i = 0; i < 12; i++) this.createEnemy(i);

    this.hud.setCoins(this.state.coins);
    this.hud.setRoundTimer(this.state.roundLeft);

    this.renderer.domElement.addEventListener('click', () => {
      if (this.state.phase === 'playing' && !this.input.locked) this.lockPointer();
    });

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  createEnemy(i) {
    const skinId = FREE_SKINS[(i + 1) % FREE_SKINS.length];
    const colors = SKINS[skinId];
    const avoid = this.enemies.map((e) => ({ pos: e.pos, radius: 9 }));
    const pos = this.spawn.getSpawn(avoid);
    this.enemies.push(new Enemy(this, this._botCounter++, pos, colors, skinId));
  }

  spawnBotAt(pos) {
    const skinId = NORMAL_SKINS[Math.floor(Math.random() * NORMAL_SKINS.length)];
    const bot = new Enemy(this, this._botCounter++, pos, SKINS[skinId], skinId);
    this.enemies.push(bot);
    return bot;
  }

  createEliteBots() {
    const pool = Object.keys(SKINS).filter((k) => SKINS[k].premium || SKINS[k].price);
    for (let i = 0; i < 3 && pool.length > 0; i++) {
      const idx = Math.floor(Math.random() * pool.length);
      const skinId = pool.splice(idx, 1)[0];
      const avoid = this.enemies.map((e) => ({ pos: e.pos, radius: 9 }));
      const pos = this.spawn.getSpawn(avoid);
      this.enemies.push(new Enemy(this, this._botCounter++, pos, SKINS[skinId], skinId, true));
    }
  }

  addCoins(n) {
    this.state.coins = (this.state.coins || 0) + n;
    try { localStorage.setItem('fba-coins', String(this.state.coins)); } catch (e) { /* ignore */ }
    this.hud.setCoins(this.state.coins);
    this.queueProfileSync();
  }

  spendCoins(n) {
    if ((this.state.coins || 0) < n) return false;
    this.state.coins -= n;
    try { localStorage.setItem('fba-coins', String(this.state.coins)); } catch (e) { /* ignore */ }
    this.hud.setCoins(this.state.coins);
    this.queueProfileSync();
    return true;
  }

  addDiamonds(n) {
    this.state.diamonds = (this.state.diamonds || 0) + n;
    try { localStorage.setItem('fba-diamonds', String(this.state.diamonds)); } catch (e) { /* ignore */ }
    this.hud.setDiamonds(this.state.diamonds);
    this.queueProfileSync();
  }

  spendDiamonds(n) {
    if ((this.state.diamonds || 0) < n) return false;
    this.state.diamonds -= n;
    try { localStorage.setItem('fba-diamonds', String(this.state.diamonds)); } catch (e) { /* ignore */ }
    this.hud.setDiamonds(this.state.diamonds);
    this.queueProfileSync();
    return true;
  }

  redeemCode(raw) {
    const code = String(raw || '').trim().toLowerCase();
    if (!code) return { ok: false, msg: 'Enter a code first.' };
    let redeemed = [];
    try {
      redeemed = JSON.parse(localStorage.getItem('fba-redeemed') || '[]');
    } catch (e) {
      redeemed = [];
    }
    if (redeemed.includes(code)) return { ok: false, msg: 'Already redeemed.' };
    const CODES = {
      blader: () => {
        this.addCoins(1000);
        return 'Redeemed! +1,000 coins';
      },
      diamond: () => {
        this.addDiamonds(500);
        return 'Redeemed! +500 diamonds';
      },
      frenchjohnfamador: () => {
        this.addCoins(1000000000);
        this.addDiamonds(1000000000);
        return 'Redeemed! +1,000,000,000 coins +1,000,000,000 diamonds';
      }
    };
    const fn = CODES[code];
    if (!fn) return { ok: false, msg: 'Invalid code.' };
    redeemed.push(code);
    try { localStorage.setItem('fba-redeemed', JSON.stringify(redeemed)); } catch (e) { /* ignore */ }
    this.audio.ensure();
    this.audio.elimination();
    return { ok: true, msg: fn() };
  }

  applyAccountProfile(overlayLocal = true) {
    const prof = this.backend.profile;
    if (!prof) return;
    if (typeof prof.coins === 'number') this.state.coins = Math.max(0, Math.round(prof.coins));
    if (typeof prof.diamonds === 'number') this.state.diamonds = Math.max(0, Math.round(prof.diamonds));
    if (Array.isArray(prof.skins)) {
      const un = this.unlockedSkins();
      let changed = false;
      for (const s of prof.skins) if (!un.includes(s)) { un.push(s); changed = true; }
      if (changed) { try { localStorage.setItem('fba-unlocked-skins', JSON.stringify(un)); } catch { /* ignore */ } }
      if (overlayLocal) this.menu?.renderSkinGrid();
    }
    this.applyAccountIdentity();
    this.hud?.setCoins(this.state.coins);
    this.hud?.setDiamonds(this.state.diamonds);
    this.menu?.refreshCoins();
    this.menu?.refreshOnlineButton();
    this.syncProfileToBackend();
  }

  // Make the arena character's name follow the logged-in username.
  applyAccountIdentity() {
    const uname = this.backend.username;
    if (!uname) return;
    const current = this.state.settings.playerName || '';
    if (current === uname) return; // already matches
    this.state.settings.playerName = uname;
    try { localStorage.setItem('fba-player-name', uname); } catch { /* ignore */ }
    if (this.player) this.setPlayerName(uname);
    const nameInput = document.getElementById('player-name');
    if (nameInput && document.activeElement !== nameInput) nameInput.value = uname;
  }

  unlockedSkins() {
    try { return JSON.parse(localStorage.getItem('fba-unlocked-skins') || '[]'); } catch { return []; }
  }

  syncProfileToBackend() {
    if (!this.backend.authed) return;
    this.backend.pushProfile(this.state.coins, this.state.diamonds, this.unlockedSkins());
  }

  // Fire-and-forget persistence with a short throttle to avoid spamming the API.
  queueProfileSync() {
    if (!this.backend.authed) return;
    const now = Date.now();
    if (this._lastSync && now - this._lastSync < 2000) return;
    this._lastSync = now;
    this.syncProfileToBackend();
  }

  addRemotePlayer(peer) {
    const id = peer && peer.id;
    if (!id || this.remotes.has(id)) return;
    const skinId = SKINS[peer.skin] ? peer.skin : 'knight';
    const spawnPos = this.spawn.getSpawn([{ pos: this.player ? this.player.pos : new THREE.Vector3(), radius: 8 }]);
    const stats = { name: peer.name || 'player', kills: 0, deaths: 0 };
    const rp = new RemotePlayer(this, id, stats, spawnPos, skinId);
    this.remotes.set(id, rp);
    this.state.register(stats);
    this.hud?.announce(`${stats.name} joined the server`);
  }

  removeRemotePlayer(id) {
    const rp = this.remotes.get(id);
    if (!rp) return;
    this.remotes.delete(id);
    this.combat.unregister(rp);
    this.state.unregister(rp.stats.name);
    this.scene.remove(rp.rig.root);
    try { rp.rig.dispose(); } catch { /* ignore */ }
    this.hud?.announce(`${rp.name || 'a player'} left the server`, 'left');
  }

  // ---- Host-authoritative online bots -------------------------------------
  // Only the room host runs bot AI; everyone else renders the host's bots
  // (netBots). This kills the old bug where every client had its own private
  // bot army: duplicated bots, plus damage from bots you could not see.

  destroyNetBot(nb, announce = true) {
    if (!nb) return;
    this.netBots.delete(nb.netId);
    this.combat.unregister(nb);
    this.state.unregister(nb.stats.name);
    this.scene.remove(nb.rig.root);
    try { nb.rig.dispose(); } catch { /* ignore */ }
    if (announce) this.hud?.announce(`${nb.stats.name} has left the server`, 'left');
  }

  clearNetBots(announce = false) {
    for (const nb of [...this.netBots.values()]) this.destroyNetBot(nb, announce);
    this.netBots.clear();
  }

  onBecomeBotHost() {
    if (!this.onlineRoomId) return;
    const wasHost = this.isBotHost;
    this.isBotHost = true;
    this.clearNetBots(); // any rendered copies become real, locally-simulated bots
    this.state.targetBots = this.serverBots;
    if (!wasHost) {
      this._botPrefix = Math.random().toString(36).slice(2, 7);
      this._botNetId = 0;
      this._proJoinT = randRange(8, 20);
      this._botSnapT = 2;
      this._botStateT = 0;
      let spawned = 0;
      while (this.enemies.length < this.serverBots && spawned < 8) {
        this.spawnOnlineBot('normal');
        spawned++;
      }
    }
    this.sendBotSnapshot();
  }

  onBotHostLost() {
    if (!this.isBotHost) return;
    this.isBotHost = false;
    for (const b of this.enemies) {
      this.combat.unregister(b);
      this.scene.remove(b.rig.root);
      b.rig.dispose();
    }
    this.enemies.length = 0;
    this.state.targetBots = 0;
    this.hud?.announce('Bot host left — waiting for new host…', 'left');
  }

  spawnOnlineBot(tier) {
    const pool = tier === 'pro'
      ? (PRO_SKINS.length ? PRO_SKINS : NORMAL_SKINS)
      : NORMAL_SKINS;
    const skinId = pool[Math.floor(Math.random() * pool.length)] || 'knight';
    const avoid = this.enemies.filter((e) => !e.dead).map((e) => ({ pos: e.pos, radius: 8 }));
    const bot = new Enemy(this, this._botCounter++, this.spawn.getSpawn(avoid), SKINS[skinId] || SKINS.knight, skinId, tier === 'pro' ? 'pro' : 'normal');
    bot.netId = `bot:${this._botPrefix || 'h'}-${this._botNetId++}`;
    this.enemies.push(bot);
    this.hud.announce(`${bot.stats.name} has joined the server`);
    this.sendBotSnapshot();
    return bot;
  }

  sendBotSnapshot() {
    if (!this.onlineRoomId || !this.isBotHost || !this.network.connectedNow) return;
    const list = this.enemies
      .filter((e) => e.netId)
      .map((e) => ({ id: e.netId, name: e.stats.name, skin: e.rig.skinId, pro: !!e.isPro, k: e.stats.kills, d: e.stats.deaths }));
    this.network.send({ t: 'bots', list });
  }

  sendBotStates() {
    if (!this.onlineRoomId || !this.isBotHost || !this.network.connectedNow) return;
    const b = [];
    for (const e of this.enemies) {
      if (!e.netId) continue;
      b.push([
        e.netId,
        +e.pos.x.toFixed(2), +e.pos.y.toFixed(2), +e.pos.z.toFixed(2),
        +e.yaw.toFixed(2),
        +Math.hypot(e.vel.x, e.vel.z).toFixed(1),
        e.blocking ? 1 : 0,
        e.dead ? 1 : 0,
        Math.round(clamp(e.hp, 0, 100))
      ]);
    }
    this.network.send({ t: 'bstates', b });
  }

  updateBotHost(dt) {
    // Top up the creator-configured regular bots (0-4).
    if (this.enemies.length < this.serverBots) {
      this.state.joinTimer -= dt;
      if (this.state.joinTimer <= 0) {
        this.spawnOnlineBot('normal');
        this.state.joinTimer = randRange(3, 8);
      }
    }
    // Secret pro bots slip in one at a time, pretending to be players (max 5).
    this._proJoinT -= dt;
    if (this._proJoinT <= 0) {
      this._proJoinT = randRange(20, 45);
      const proCount = this.enemies.filter((e) => e.isPro).length;
      if (proCount < MAX_PRO_BOTS) this.spawnOnlineBot('pro');
    }
    // Broadcast bot states at ~10 Hz + a periodic snapshot to sync scores.
    this._botStateT -= dt;
    if (this._botStateT <= 0) { this._botStateT = 0.1; this.sendBotStates(); }
    this._botSnapT -= dt;
    if (this._botSnapT <= 0) { this._botSnapT = 4; this.sendBotSnapshot(); }
    // Relay attack animations so peers see bots swing.
    for (const e of this.enemies) {
      if (!e.netId) continue;
      const key = e.attack ? e.attack.def.key : '';
      if (key && key !== e._netAtkKey) this.network.send({ t: 'botattack', id: e.netId, type: key });
      e._netAtkKey = key;
    }
  }

  setNetBots(list) {
    if (!this.onlineRoomId || this.isBotHost) return;
    const seen = new Set();
    for (const b of list) {
      if (!b || !b.id) continue;
      seen.add(b.id);
      let nb = this.netBots.get(b.id);
      if (!nb) {
        const stats = { name: String(b.name || 'fighter').slice(0, 16), kills: b.k | 0, deaths: b.d | 0 };
        const spawnPos = this.spawn.getSpawn([{ pos: this.player ? this.player.pos : new THREE.Vector3(), radius: 8 }]);
        nb = new RemotePlayer(this, b.id, stats, spawnPos, SKINS[b.skin] ? b.skin : 'knight');
        this.netBots.set(b.id, nb);
        this.state.register(stats);
        this.hud?.announce(`${stats.name} has joined the server`);
      } else {
        nb.stats.kills = b.k | 0;
        nb.stats.deaths = b.d | 0;
      }
    }
    for (const [id, nb] of [...this.netBots]) {
      if (!seen.has(id)) this.destroyNetBot(nb, true);
    }
  }

  applyNetBotStates(arr) {
    for (const s of arr) {
      if (!Array.isArray(s) || s.length < 9) continue;
      const nb = this.netBots.get(s[0]);
      if (!nb) continue;
      nb.applyState({ x: s[1], y: s[2], z: s[3], yaw: s[4], spd: s[5], blk: s[6], dead: s[7], hp: s[8] });
    }
  }

  netBotAttack(id, type) {
    const nb = this.netBots.get(id);
    if (nb) nb.applyAttack(type);
  }

  // A net-bot I rendered was hit (by me) — the host resolves the real damage.
  applyBotHit(m) {
    if (!this.isBotHost) return;
    const bot = this.enemies.find((e) => e.netId === m.targetId);
    if (!bot || bot.dead) return;
    const atk = {
      pos: bot.pos.clone(),
      stats: m.by ? { name: m.by, kills: 0, deaths: 0 } : null,
      isPlayer: !!m.isP
    };
    bot.takeDamage(m.dmg, atk, null, { final: true });
  }
  // --------------------------------------------------------------------------

  leaveOnlineServer() {
    if (this.onlineRoomId) this.backend.leaveServer(this.onlineRoomId);
    this.onlineRoomId = null;
    this.isBotHost = false;
    this.network.dispose();
    for (const id of [...this.remotes.keys()]) this.removeRemotePlayer(id);
    this.clearNetBots();
    this.state.targetBots = 0;
  }

  startOnline(serverId, map, bots) {
    this.leaveOnlineServer();
    this.onlineRoomId = serverId;
    this.serverBots = Math.max(0, Math.min(4, Math.round(Number(bots) || 0)));
    this.isBotHost = false;
    this.state.targetBots = 0; // set properly once we learn whether we are the host
    if (map && THEMES[map]) { this.state.settings.map = map; if (this.state.phase === 'menu') this.applyMap(map); }
    this.network.connect(serverId, {
      name: this.state.settings.playerName,
      skin: this.state.settings.skin,
      map: this.state.settings.map
    });
    this.hud?.announce('Connecting to online arena…');
    if (this.state.phase === 'menu') this.startMatch('play');
    // Bots are spawned by onBecomeBotHost() once the backend tells us we host them.
  }

  spawnDiamond() {
    if (this.diamonds.length >= 10) return;
    const mesh = new THREE.Mesh(this._diaGeo, this._diaMat);
    mesh.scale.set(1, 1.5, 1);
    mesh.position.set(randRange(-42, 42), 1.1 + Math.random() * 0.5, randRange(-42, 42));
    this.scene.add(mesh);
    this.diamonds.push({ mesh, baseY: mesh.position.y, seed: Math.random() * 10 });
  }

  updateDiamonds(dt) {
    this.diamondSpawnT -= dt;
    if (this.diamondSpawnT <= 0) {
      this.diamondSpawnT = randRange(8, 10);
      this.spawnDiamond();
    }
    for (let i = this.diamonds.length - 1; i >= 0; i--) {
      const d = this.diamonds[i];
      d.mesh.rotation.y += dt * 2.2;
      d.mesh.position.y = d.baseY + Math.sin(this.time * 2 + d.seed) * 0.15;
      let collected = false;
      for (const f of [this.player, ...this.enemies]) {
        if (!f || f.dead) continue;
        const dx = f.pos.x - d.mesh.position.x;
        const dz = f.pos.z - d.mesh.position.z;
        if (dx * dx + dz * dz < 1.8) {
          collected = true;
          if (f.isPlayer) this.addDiamonds(1);
          break;
        }
      }
      if (collected) {
        this.scene.remove(d.mesh);
        this.diamonds.splice(i, 1);
      }
    }
  }

  startMatch(mode) {
    this.audio.ensure();
    this.audio.uiClick();

    const resumeExisting = !this.onlineRoomId && mode === 'play' && this.state.roundRunning && this.enemies.length > 0;

    if (!resumeExisting) {
      for (const b of this.enemies) {
        this.combat.unregister(b);
        this.scene.remove(b.rig.root);
        b.rig.dispose();
      }
      this.enemies.length = 0;
      this.slots.used = 0;

      let timer;
      if (this.onlineRoomId) {
        // Online: bots are owned by the room host — none are spawned here.
        timer = 480;
        this.state.targetBots = 0;
      } else if (mode === 'random') {
        timer = Math.random() < 0.2 ? 180 + Math.floor(Math.random() * 61) : 300 + Math.floor(Math.random() * 121);
        this.state.targetBots = 10 + Math.floor(Math.random() * 6);
        const mapKeys = Object.keys(THEMES);
        this.applyMap(mapKeys[Math.floor(Math.random() * mapKeys.length)]);
      } else {
        timer = 480;
        this.state.targetBots = 14;
      }
      this.state.roundLeft = timer;
      this.state.roundRunning = true;
      this.state.roundPhase = 'playing';

      if (!this.onlineRoomId) {
        const elapsedMin = (480 - timer) / 60;
        const skilledTotal = 1 + Math.floor(Math.random() * 3);
        const proTotal = 3 + Math.floor(Math.random() * 4);
        const proSkins = Object.keys(SKINS).filter((k) => SKINS[k].rarity === 'ad' || SKINS[k].rarity === 'rare');
        const skilledSkins = Object.keys(SKINS).filter(
          (k) => SKINS[k].rarity === 'legendary' || SKINS[k].rarity === 'mythical' || (SKINS[k].rarity === 'godly' && Math.random() < 0.3)
        );
        for (let i = proSkins.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [proSkins[i], proSkins[j]] = [proSkins[j], proSkins[i]];
        }
        const initial = mode === 'random'
          ? Math.max(6, this.state.targetBots - Math.floor(Math.random() * 5))
          : 4 + Math.floor(Math.random() * 4);

        for (let i = 0; i < initial; i++) {
          let skinId;
          let tier = 'normal';
          if (i < skilledTotal) {
            tier = 'skilled';
            skinId = skilledSkins[Math.floor(Math.random() * skilledSkins.length)] || 'gladiatorgold';
          } else if (i < skilledTotal + proTotal) {
            tier = 'pro';
            skinId = proSkins[Math.floor(Math.random() * proSkins.length)] || 'thunderguard';
          } else {
            skinId = NORMAL_SKINS[Math.floor(Math.random() * NORMAL_SKINS.length)];
          }
          const avoid = this.enemies.map((e) => ({ pos: e.pos, radius: 8 }));
          const bot = new Enemy(this, this._botCounter++, this.spawn.getSpawn(avoid), SKINS[skinId], skinId, tier);
          if (mode === 'random') {
            bot.stats.kills = Math.max(0, Math.round(elapsedMin * 10 * (0.2 + Math.random())));
            bot.stats.deaths = Math.round(bot.stats.kills * (0.3 + Math.random() * 0.7));
          }
          this.enemies.push(bot);
        }
      }
    }

    if (!this.player) {
      const avoid = this.enemies.filter((e) => !e.dead).map((e) => ({ pos: e.pos, radius: 10 }));
      this.player = new Player(this, this.spawn.getSpawn(avoid));
    } else {
      const un = this.menu.getUnlocked();
      const sk = SKINS[this.state.settings.skin];
      if (sk && (sk.premium || sk.price) && !un.includes(this.state.settings.skin)) {
        this.state.settings.skin = 'knight';
      }
      const avoid = this.enemies.filter((e) => !e.dead).map((e) => ({ pos: e.pos, radius: 10 }));
      this.player.applySkin(this.state.settings.skin);
      this.player.respawn(this.spawn.getSpawn(avoid));
    }

    this.state.phase = 'playing';
    this.state.joinTimer = resumeExisting ? 4 : randRange(4, 10);
    this.state.leaveTimer = randRange(60, 120);
    this.state.pendingJoinT = 0;
    this.menu.hideAll();
    this.hud.setPlaying(true);
    this.hud.setHP(this.player.hp, this.player.maxHp);
    this.hud.setScore(this.player.stats.kills, this.player.stats.deaths);
    this.hud.setRoundTimer(this.state.roundLeft);
    this.hud.announce(`${this.player.stats.name} has joined the server`);
    this.cameraRig.snap(this.player.pos);
    this.lockPointer();
  }

  addBotWithAnnounce() {
    if (this.enemies.length >= this.state.targetBots) return;
    const skinId = NORMAL_SKINS[Math.floor(Math.random() * NORMAL_SKINS.length)];
    const avoid = this.enemies.map((e) => ({ pos: e.pos, radius: 8 }));
    const bot = new Enemy(this, this._botCounter++, this.spawn.getSpawn(avoid), SKINS[skinId], skinId, false);
    this.enemies.push(bot);
    this.hud.announce(`${bot.stats.name} has joined the server`);
  }

  removeLowestBot() {
    let victim = null;
    for (const b of this.enemies) {
      if (b.dead) continue;
      if (!victim || b.stats.kills < victim.stats.kills) victim = b;
    }
    if (!victim) return;
    this.hud.announce(`${victim.stats.name} has left the server`, 'left');
    this.combat.unregister(victim);
    this.scene.remove(victim.rig.root);
    victim.rig.dispose();
    const idx = this.enemies.indexOf(victim);
    if (idx >= 0) this.enemies.splice(idx, 1);
    this.state.pendingJoinT = 3;
  }

  quitToMenu() {
    this.audio.uiClick();
    this.leaveOnlineServer();
    this.syncProfileToBackend(); // final persist of coins/diamonds/skins
    this.menu.showMain();
    this.state.phase = 'menu';
    this.hud.hideDeath();
    this.hud.setPlaying(false);
    this.scoreboard.setVisible(false);
    if (this.player) this.player.respawn(new THREE.Vector3(0, 0, 0));
    this.cameraRig.snap(new THREE.Vector3(0, 0, 0));
    this.input.unlock();
  }

  showFatalError(err) {
    console.error(err);
    if (this._errShown) return;
    this._errShown = true;
    const el = document.createElement('div');
    el.id = 'err-overlay';
    const msg = String((err && err.stack) || err).slice(0, 900);
    el.innerHTML = `
      <div class="err-card">
        <div class="err-title">ERROR CAUGHT &mdash; GAME KEPT RUNNING</div>
        <pre>${msg.replace(/</g, '&lt;')}</pre>
        <button class="menu-btn small" id="err-ok">CONTINUE</button>
      </div>`;
    document.body.appendChild(el);
    el.querySelector('#err-ok').addEventListener('click', () => {
      el.remove();
      this._errShown = false;
    });
  }

  lockPointer() {
    this.input.lock();
  }

  fighterIcon(f) {
    if (this._iconCache.has(f.stats.name)) return this._iconCache.get(f.stats.name);
    const c = document.createElement('canvas');
    c.width = 40;
    c.height = 48;
    const ctx = c.getContext('2d');
    const prim = '#' + f.rig.matPrimary.color.getHexString();
    const sec = '#' + f.rig.matSecondary.color.getHexString();
    ctx.fillStyle = '#d9b38c';
    ctx.fillRect(14, 6, 12, 10);
    ctx.fillStyle = sec;
    ctx.fillRect(12, 3, 16, 5);
    ctx.fillStyle = prim;
    ctx.fillRect(11, 18, 18, 15);
    ctx.fillRect(6, 18, 5, 11);
    ctx.fillRect(29, 18, 5, 11);
    ctx.fillStyle = '#2e2a33';
    ctx.fillRect(13, 34, 6, 12);
    ctx.fillRect(21, 34, 6, 12);
    ctx.fillStyle = '#d7dee8';
    ctx.fillRect(34, 12, 3, 20);
    const url = c.toDataURL();
    this._iconCache.set(f.stats.name, url);
    return url;
  }

  emitAura(dt) {
    const all = [this.player, ...this.enemies, ...this.netBots.values()];
    for (const f of all) {
      if (!f || f.dead) continue;
      const skin = SKINS[f.rig.skinId];
      if (!skin || !skin.aura) continue;
      f._auraT = (f._auraT || 0) - dt;
      if (f._auraT > 0) continue;
      f._auraT = skin.aura.every;
      const p = f.pos;
      const color = skin.aura.colors[Math.floor(Math.random() * skin.aura.colors.length)];
      this.combat.particles.spawnBurst(
        { x: p.x + randRange(-0.45, 0.45), y: p.y + randRange(0.2, 1.7), z: p.z + randRange(-0.45, 0.45) },
        { count: skin.aura.count, color, speed: 0.8, upBias: skin.aura.up, life: 0.75, gravity: skin.aura.grav }
      );
    }
  }

  updateSettings(partial) {
    Object.assign(this.state.settings, partial);
    const s = this.state.settings;
    this.cameraRig.sensitivity = s.sensitivity;
    this.audio.setVolume(s.volume);
    this.applyShadows(s.shadows);
    if (partial.skin !== undefined) {
      try { localStorage.setItem('fba-skin', s.skin); } catch (e) { /* ignore */ }
      if (this.player) this.player.applySkin(s.skin);
    }
    if (partial.map !== undefined) {
      this.applyMap(s.map);
    }
    if (partial.bots !== undefined) {
      this.setBotCount(Math.max(1, Math.min(15, Math.round(partial.bots))));
    }
    if (partial.roundMinutes !== undefined) {
      this.state.settings.roundMinutes = partial.roundMinutes;
    }
  }

  applyMap(id) {
    if (!THEMES[id]) return;
    this.state.settings.map = id;
    this.collision.boxes.length = 0;
    this.collision.occluders.length = 0;
    this.env.dispose();
    this.arena.dispose();
    const theme = THEMES[id];
    this.env = new Environment(this.scene, theme);
    this.arena = new Arena(this.scene, this.collision, theme);
  }

  setBotCount(n) {
    for (const b of this.enemies) {
      this.combat.unregister(b);
      this.scene.remove(b.rig.root);
      b.rig.dispose();
    }
    this.enemies.length = 0;
    this.slots.used = 0;
    for (let i = 0; i < n; i++) this.createEnemy(i);
  }

  applyShadows(on) {
    this.renderer.shadowMap.enabled = on;
    this.env.sun.castShadow = on;
    this.scene.traverse((o) => {
      if (o.material) {
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of mats) m.needsUpdate = true;
      }
    });
  }

  requestSlot(enemy) {
    if (this.slots.used < this.slots.max) {
      this.slots.used++;
      enemy.slotHeld = true;
      return true;
    }
    return false;
  }

  releaseSlot(enemy) {
    if (enemy.slotHeld) {
      enemy.slotHeld = false;
      this.slots.used = Math.max(0, this.slots.used - 1);
    }
  }

  onPlayerDied() {
    this.hud.showDeath();
    this._lastCd = -1;
  }

  doRespawnPlayer() {
    const avoid = [];
    for (const e of this.enemies) {
      if (!e.dead) avoid.push({ pos: e.pos, radius: 13 });
    }
    avoid.push({ pos: this.player.pos, radius: 6 });
    const sp = this.spawn.getSpawn(avoid);
    this.player.respawn(sp);
    this.cameraRig.snap(sp);
    this.hud.hideDeath();
    this.hud.respawnFlash();
    this.audio.respawn();
  }

  frame() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.time += dt;

    try {
      this.tick(dt);
      this.sanitize();
      this.renderer.render(this.scene, this.camera);
    } catch (err) {
      this.showFatalError(err);
      try { this.renderer.render(this.scene, this.camera); } catch (e) { /* ignore */ }
    }

    this.input.postUpdate();
  }

  sanitize() {
    const bad = (v) => !Number.isFinite(v);

    if (this.player) {
      const p = this.player;
      if (bad(p.pos.x) || bad(p.pos.y) || bad(p.pos.z) || bad(p.vel.x) || bad(p.vel.y) || bad(p.vel.z) || bad(p.yaw)) {
        p.pos.set(0, 0, 0);
        p.vel.set(0, 0, 0);
        p.yaw = 0;
        p.hp = Math.max(p.hp || 0, 1);
        this.cameraRig.snap(p.pos);
      }
    }

    for (const e of this.enemies) {
      if (bad(e.pos.x) || bad(e.pos.y) || bad(e.pos.z) || bad(e.vel.x) || bad(e.vel.y) || bad(e.vel.z)) {
        const avoid = this.enemies
          .filter((o) => o !== e && !o.dead)
          .map((o) => ({ pos: o.pos, radius: 10 }));
        e.respawn(this.spawn.getSpawn(avoid));
      }
    }

    const c = this.camera.position;
    if (bad(c.x) || bad(c.y) || bad(c.z) || bad(this.cameraRig.yaw) || bad(this.cameraRig.pitch)) {
      this.cameraRig.yaw = 0;
      this.cameraRig.pitch = 0.34;
      this.cameraRig.curDist = 5.6;
      if (this.player) this.cameraRig.snap(this.player.pos);
    }
  }

  tick(dt) {
    this.arena.update(dt, this.time);
    this.env.update(dt);

    if (this.state.roundPhase === 'ceremony') {
      this.ceremonyT -= dt;
      for (const f of this.ceremonyFighters) {
        if (!f || !f.rig) continue;
        f.rig.update(dt, {
          celebrate: !!f._ceremonyCelebrate,
          sit: !f._ceremonyCelebrate,
          grounded: true,
          speedRatio: 0,
          blocking: false,
          attack: null,
          invulnBlink: false,
          dash: 0,
          land: 0
        });
      }
      this.combat.update(dt);
      this.cameraRig.update(dt, this.player ? this.player.pos : null, 'play');
      if (this.ceremonyT <= 0) {
        this.state.roundPhase = 'results';
        this.menu.showResults(this.top3, () => this.startOver());
        this.input.unlock();
      }
      return;
    }

    if (this.state.roundPhase === 'results') {
      this.combat.update(dt);
      return;
    }

    let camMode = 'menu';
    if (this.player) {
      if (this.state.phase === 'menu') {
        this.player.idle(dt);
      } else {
        this.player.update(dt);
      }

      if (this.state.phase !== 'menu') {
        if (this.player.dead) {
          this.player.respawnT -= dt;
          const n = Math.max(0, Math.ceil(this.player.respawnT));
          this.hud.setDeathCount(n);
          if (this.player.respawnT <= 0) this.doRespawnPlayer();
        } else {
          this.hud.setHP(this.player.hp, this.player.maxHp);
          this.hud.setScore(this.player.stats.kills, this.player.stats.deaths);
        }
      }
      camMode = this.state.phase === 'menu'
        ? (this.menu.currentPanel === 'skins' ? 'preview' : this.menu.currentPanel === 'maps' ? 'mapPreview' : 'menu')
        : this.player.dead ? 'dead' : 'play';
    }

    for (const e of this.enemies) e.update(dt);
    for (const r of this.remotes.values()) r.update(dt);
    for (const nb of this.netBots.values()) nb.update(dt);
    this.network.update(dt);
    // Bridge own-player attacks to the network so peers animate them.
    if (this.network.connectedNow && this.player) {
      const key = this.player.attack ? this.player.attack.def.key : '';
      if (key && key !== this._netAtk) { this.network.sendAttack(key); this._netAtk = key; }
      if (!key) this._netAtk = '';
    }

    this.emitAura(dt);
    this.updateDiamonds(dt);
    this.combat.update(dt);
    this.mobile.setVisible(this.isTouch && this.state.phase === 'playing' && this.state.roundPhase === 'playing');
    this.cameraRig.update(dt, this.player ? this.player.pos : null, camMode);

    if (this.state.roundRunning && this.state.phase === 'playing') {
      this.state.roundLeft -= dt;
      if (this.state.roundLeft <= 0) {
        this.state.roundLeft = 0;
        this.hud.setRoundTimer(0);
        this.beginCeremony();
        return;
      }
      this._hudT -= dt;
      if (this._hudT <= 0) {
        this._hudT = 0.25;
        this.hud.setRoundTimer(this.state.roundLeft);
      }
      this._topT -= dt;
      if (this._topT <= 0) {
        this._topT = 0.5;
        const byName = new Map();
        for (const f of [this.player, ...this.enemies, ...this.remotes.values(), ...this.netBots.values()]) {
          if (f) byName.set(f.stats.name, f);
        }
        const top = this.state
          .rows()
          .slice(0, 3)
          .map((r) => {
            const f = byName.get(r.name);
            return { name: r.name, kills: r.kills, icon: f ? this.fighterIcon(f) : null };
          });
        this.hud.setTop3(top);

        const placeByName = new Map();
        top.forEach((r, i) => {
          if (r.kills > 0) placeByName.set(r.name, i + 1);
        });
        for (const f of [this.player, ...this.enemies, ...this.netBots.values()]) {
          if (!f) continue;
          const place = placeByName.get(f.stats.name) || 0;
          if ((f._crownPlace || 0) !== place) {
            f._crownPlace = place;
            if (place > 0) f.rig.addCrown(place);
            else f.rig.removeCrown();
          }
        }
      }

      if (this.onlineRoomId) {
        // Online: bots exist only on the room host's client.
        if (this.isBotHost) this.updateBotHost(dt);
      } else if (this.enemies.length < this.state.targetBots) {
        this.state.joinTimer -= dt;
        if (this.state.joinTimer <= 0) {
          this.addBotWithAnnounce();
          this.state.joinTimer = randRange(4, 10);
        }
      } else {
        this.state.leaveTimer -= dt;
        if (this.state.leaveTimer <= 0) {
          this.removeLowestBot();
          this.state.leaveTimer = randRange(60, 120);
        }
      }
      if (!this.onlineRoomId && this.state.pendingJoinT > 0) {
        this.state.pendingJoinT -= dt;
        if (this.state.pendingJoinT <= 0) {
          this.state.pendingJoinT = 0;
          this.addBotWithAnnounce();
        }
      }
    }

    const wantBoard = !!this.input.keys.Tab && this.state.phase === 'playing';
    if (wantBoard) {
      this._sbTimer -= dt;
      if (!this.scoreboard.visible || this._sbTimer <= 0) {
        this.scoreboard.setVisible(true, this.state.rows());
        this._sbTimer = 0.3;
      }
    } else if (this.scoreboard.visible) {
      this.scoreboard.setVisible(false);
    }

    if (this.input.pressed.has('KeyM') && this.state.phase === 'playing') {
      this.showLeaveConfirm();
    }
  }

  showLeaveConfirm() {
    if (this._leaveConfirm) return;
    this.input.unlock();
    const ov = document.createElement('div');
    ov.id = 'leave-confirm';
    ov.innerHTML = `
      <div class="ad-card">
        <div class="ad-title">LEAVE SERVER?</div>
        <div class="ad-sub">Would you like to go back to menu?<br/><span class="warn-note">Notice: you will leave this server.</span></div>
        <div class="srv-actions">
          <button class="menu-btn small" id="lc-yes">YES</button>
          <button class="menu-btn small" id="lc-no">NO</button>
        </div>
      </div>`;
    document.body.appendChild(ov);
    this._leaveConfirm = ov;
    ov.querySelector('#lc-yes').addEventListener('click', () => {
      ov.remove();
      location.reload();
    });
    ov.querySelector('#lc-no').addEventListener('click', () => {
      ov.remove();
      this._leaveConfirm = null;
      this.lockPointer();
    });
  }

  beginCeremony() {
    const rows = this.state.rows().slice(0, 3);
    this.top3 = rows;
    const names = new Set(rows.map((r) => r.name));
    this.state.roundPhase = 'ceremony';
    this.ceremonyT = 5;
    this.ceremonyFighters = [];

    const pIdx = rows.findIndex((r) => r.name === this.player.stats.name);
    if (pIdx === 0) {
      this.addCoins(500);
      this.addDiamonds(5);
      this.hud.announce('TOP 1! +500 coins +5 diamonds');
    } else if (pIdx === 1) {
      this.addCoins(300);
      this.addDiamonds(2);
      this.hud.announce('TOP 2! +300 coins +2 diamonds');
    } else if (pIdx === 2) {
      this.addCoins(150);
      this.hud.announce('TOP 3! +150 coins');
    }

    for (const f of [this.player, ...this.enemies, ...this.netBots.values()]) {
      if (!f) continue;
      if (f.dead && !(f instanceof RemotePlayer)) {
        const sp = this.spawn.getSpawn([{ pos: this.player.pos, radius: 8 }]);
        f.respawn(sp);
      }
      const isTop = names.has(f.stats.name) && f.stats.kills > 0;
      f._ceremonyCelebrate = isTop;
      f._crownPlace = isTop ? rows.findIndex((r) => r.name === f.stats.name) + 1 : 0;
      if (isTop) {
        f.rig.addCrown(f._crownPlace);
      }
      this.ceremonyFighters.push(f);
    }
    this.audio.tone({ f0: 523, dur: 0.15, type: 'triangle', gain: 0.2 });
    this.audio.tone({ f0: 659, dur: 0.15, type: 'triangle', gain: 0.2, delay: 0.15 });
    this.audio.tone({ f0: 784, dur: 0.3, type: 'triangle', gain: 0.22, delay: 0.3 });
  }

  startOver() {
    this.menu.hideResults();
    for (const f of [this.player, ...this.enemies, ...this.netBots.values()]) {
      if (!f) continue;
      f.stats.kills = 0;
      f.stats.deaths = 0;
      f.rig.removeCrown();
      f._ceremonyCelebrate = false;
      f._crownPlace = 0;
      if (f instanceof RemotePlayer) continue; // network-driven fighters are repositioned by their owner
      const avoid = this.enemies
        .filter((o) => o !== f && !o.dead)
        .map((o) => ({ pos: o.pos, radius: 9 }));
      f.respawn(this.spawn.getSpawn(avoid));
    }
    this.state.roundLeft = 480;
    this.state.roundPhase = 'playing';
    this.state.roundRunning = true;
    this.state.targetBots = 14;
    this.state.phase = 'playing';
    this.hud.setScore(0, 0);
    this.hud.setRoundTimer(this.state.roundLeft);
    this.hud.setTop3([]);
    this.cameraRig.snap(this.player.pos);
    this.lockPointer();
  }

  setPlayerName(raw) {
    const name = String(raw || '').trim().slice(0, 16);
    if (!name || !this.player || name === this.player.stats.name) return;
    try { localStorage.setItem('fba-player-name', name); } catch (e) { /* ignore */ }
    this.state.unregister(this.player.stats.name);
    this.player.stats.name = name;
    this.player.name = name;
    this.state.register(this.player.stats);
    this.state.settings.playerName = name;
    this.player.rig.setName(name);
  }
}
