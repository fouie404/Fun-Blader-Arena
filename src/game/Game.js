import * as THREE from 'three';
import { GameState } from './GameState.js';
import { CollisionSystem } from './CollisionSystem.js';
import { SpawnSystem } from './SpawnSystem.js';
import { CombatSystem } from './CombatSystem.js';
import { Player } from './Player.js';
import { Enemy } from './Enemy.js';
import { SKINS } from './Skins.js';
import { ThirdPersonCamera } from '../camera/ThirdPersonCamera.js';
import { Environment } from '../world/Environment.js';
import { Arena } from '../world/Arena.js';
import { THEMES } from '../world/Themes.js';
import { HUD } from '../ui/HUD.js';
import { Menu } from '../ui/Menu.js';
import { Scoreboard } from '../ui/Scoreboard.js';
import { AudioManager } from '../audio/AudioManager.js';
import { Input } from '../utils/Input.js';
import { randRange } from '../utils/MathUtils.js';

const FREE_SKINS = Object.keys(SKINS).filter((k) => !SKINS[k].premium && !SKINS[k].price);

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

    this.input = new Input(this.renderer.domElement);

    this.collision = new CollisionSystem(46.4);
    this.spawn = new SpawnSystem();
    this.env = new Environment(this.scene, THEMES[this.state.settings.map] || THEMES.citadel);
    this.arena = new Arena(this.scene, this.collision, THEMES[this.state.settings.map] || THEMES.citadel);
    this.combat = new CombatSystem(this);
    this.cameraRig = new ThirdPersonCamera(this.camera, this.input, this.collision);

    this.hud = new HUD();
    this.scoreboard = new Scoreboard();
    this.menu = new Menu({
      onPlay: () => this.start(),
      onResume: () => this.resumeFromPause(),
      onQuitToMenu: () => this.quitToMenu(),
      onSettings: (partial) => this.updateSettings(partial),
      onGetCoins: () => this.state.coins,
      onSpendCoins: (n) => this.spendCoins(n)
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
    this._botCounter = 0;
    this.slots = { used: 0, max: 3 };
    this.time = 0;
    this.paused = false;
    this._lastCd = -1;
    this._sbTimer = 0;
    this._errShown = false;
    this._auraT = 0;

    this.clock = new THREE.Clock();
    this.renderer.setAnimationLoop(() => this.frame());

    this.player = new Player(this, new THREE.Vector3(0, 0, 0));
    this.usedNames = new Set(['you']);
    const botCount = Math.max(1, Math.min(15, this.state.settings.bots || 10));
    for (let i = 0; i < botCount; i++) this.createEnemy(i);
    this.createEliteBots();

    this.hud.setCoins(this.state.coins);

    this.input.onLockChange = (locked) => {
      if (!locked && this.state.phase === 'playing' && this.player && !this.player.dead) {
        this.paused = true;
        this.menu.showPause();
      }
    };

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
    const skinId = FREE_SKINS[Math.floor(Math.random() * FREE_SKINS.length)];
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
  }

  spendCoins(n) {
    if ((this.state.coins || 0) < n) return false;
    this.state.coins -= n;
    try { localStorage.setItem('fba-coins', String(this.state.coins)); } catch (e) { /* ignore */ }
    this.hud.setCoins(this.state.coins);
    return true;
  }

  start() {
    this.audio.ensure();
    this.audio.uiClick();

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
    this.menu.hideAll();
    this.hud.setPlaying(true);
    this.hud.setHP(this.player.hp, this.player.maxHp);
    this.hud.setScore(this.player.stats.kills, this.player.stats.deaths);
    this.cameraRig.snap(this.player.pos);
    this.lockPointer();
  }

  quitToMenu() {
    this.audio.uiClick();
    this.paused = false;
    this.menu.hidePause();
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

  resumeFromPause() {
    this.lockPointer();
    setTimeout(() => {
      if (this.input.locked) {
        this.paused = false;
        this.menu.hidePause();
      } else if (this.state.phase === 'playing' && !this.paused) {
        this.paused = true;
        this.menu.showPause();
      }
    }, 180);
  }

  emitAura(dt) {
    const all = [this.player, ...this.enemies];
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
    if (partial.skin !== undefined && this.player) {
      this.player.applySkin(s.skin);
    }
    if (partial.map !== undefined) {
      this.applyMap(s.map);
    }
    if (partial.bots !== undefined) {
      this.setBotCount(Math.max(1, Math.min(15, Math.round(partial.bots))));
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

  applyHostBots(n) {
    const c = Math.max(1, Math.min(15, Math.round(n)));
    this.state.settings.bots = c;
    this.setBotCount(c);
    this.menu.applySettings(this.state.settings);
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
      if (!this.paused) this.tick(dt);
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

    this.emitAura(dt);
    this.combat.update(dt);
    this.cameraRig.update(dt, this.player ? this.player.pos : null, camMode);

    const wantBoard = !!this.input.keys.Tab && this.state.phase === 'playing' && !this.paused;
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
      this.quitToMenu();
    }
  }
}
