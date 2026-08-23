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
import { HUD } from '../ui/HUD.js';
import { Menu } from '../ui/Menu.js';
import { Scoreboard } from '../ui/Scoreboard.js';
import { AudioManager } from '../audio/AudioManager.js';
import { NetworkManager } from '../net/NetworkManager.js';
import { Input } from '../utils/Input.js';

const BOT_COUNT = 7;

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
    this.network = new NetworkManager(this);

    this.input = new Input(this.renderer.domElement);

    this.collision = new CollisionSystem(46.4);
    this.spawn = new SpawnSystem();
    this.env = new Environment(this.scene);
    this.arena = new Arena(this.scene, this.collision);
    this.combat = new CombatSystem(this);
    this.cameraRig = new ThirdPersonCamera(this.camera, this.input, this.collision);

    this.hud = new HUD();
    this.scoreboard = new Scoreboard();
    this.menu = new Menu({
      onPlay: () => this.start(),
      onResume: () => this.resumeFromPause(),
      onQuitToMenu: () => this.quitToMenu(),
      onSettings: (partial) => this.updateSettings(partial)
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
    this.slots = { used: 0, max: 3 };
    this.time = 0;
    this.paused = false;
    this._lastCd = -1;
    this._sbTimer = 0;
    this._errShown = false;

    this.player = new Player(this, new THREE.Vector3(0, 0, 0));
    for (let i = 0; i < BOT_COUNT; i++) this.createEnemy(i);

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

    this.clock = new THREE.Clock();
    this.renderer.setAnimationLoop(() => this.frame());
  }

  createEnemy(i) {
    const keys = Object.keys(SKINS);
    const skinId = keys[(i + 1) % keys.length];
    const colors = SKINS[skinId];
    const avoid = this.enemies.map((e) => ({ pos: e.pos, radius: 9 }));
    const pos = this.spawn.getSpawn(avoid);
    this.enemies.push(new Enemy(this, i, pos, colors, skinId));
  }

  start() {
    this.audio.ensure();
    this.audio.uiClick();

    if (!this.player) {
      const avoid = this.enemies.filter((e) => !e.dead).map((e) => ({ pos: e.pos, radius: 10 }));
      this.player = new Player(this, this.spawn.getSpawn(avoid));
    } else {
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

  updateSettings(partial) {
    Object.assign(this.state.settings, partial);
    const s = this.state.settings;
    this.cameraRig.sensitivity = s.sensitivity;
    this.audio.setVolume(s.volume);
    this.applyShadows(s.shadows);
    if (partial.skin !== undefined && this.player) {
      this.player.applySkin(s.skin);
    }
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
    } catch (err) {
      this.showFatalError(err);
    }

    this.renderer.render(this.scene, this.camera);
    this.input.postUpdate();
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
        ? (this.menu.currentPanel === 'skins' ? 'preview' : 'menu')
        : this.player.dead ? 'dead' : 'play';
    }

    for (const e of this.enemies) e.update(dt);

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
