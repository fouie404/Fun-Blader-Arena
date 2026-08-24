import * as THREE from 'three';
import { Fighter } from './Fighter.js';
import { SKINS } from './Skins.js';

const _move = new THREE.Vector3();
const _dash = new THREE.Vector3();
const TAP_WINDOW = 0.28;

export class Player extends Fighter {
  constructor(game, pos) {
    super(game, {
      name: game.state.settings.playerName || 'You',
      isPlayer: true,
      colors: SKINS[game.state.settings.skin] || SKINS.knight,
      pos
    });
    this.tapTimes = {};
  }

  applySkin(skinId) {
    const id = SKINS[skinId] ? skinId : 'knight';
    this.game.state.settings.skin = id;
    this.rig.setSkin(id);
  }

  idle(dt) {
    this.yaw = 0.7;
    this.rig.setYaw(this.yaw);
    this.rig.update(dt, {
      speedRatio: 0,
      grounded: true,
      blocking: false,
      attack: null,
      invulnBlink: false,
      dash: 0,
      land: 0
    });
  }

  handleDashTaps(input) {
    const now = performance.now() / 1000;
    const checks = ['KeyW', 'KeyS', 'KeyA', 'KeyD'];
    for (const k of checks) {
      if (!input.pressed.has(k)) continue;
      const prev = this.tapTimes[k];
      this.tapTimes[k] = now;
      if (prev === undefined || now - prev >= TAP_WINDOW) continue;
      const s = Math.sin(this.yaw);
      const c = Math.cos(this.yaw);
      if (k === 'KeyW') _dash.set(s, 0, c);
      else if (k === 'KeyS') _dash.set(-s, 0, -c);
      else if (k === 'KeyA') _dash.set(c, 0, -s);
      else _dash.set(-c, 0, s);
      if (this.tryDash(_dash.x, _dash.z)) break;
    }
  }

  update(dt) {
    const input = this.game.input;
    const camYaw = this.game.cameraRig.yaw;

    const alive = this.updateCommon(dt);
    if (!alive) {
      this.rig.setYaw(this.yaw);
      return;
    }

    const k = input.keys;
    const mob = input.mobile;
    const joyActive = mob.active && Math.hypot(mob.x, mob.y) > 0.12;
    let mx = joyActive ? mob.x : (k.KeyD ? 1 : 0) - (k.KeyA ? 1 : 0);
    let mz = joyActive ? mob.y : (k.KeyW ? 1 : 0) - (k.KeyS ? 1 : 0);
    const len = Math.hypot(mx, mz);
    if (len > 1) {
      mx /= len;
      mz /= len;
    }

    const s = Math.sin(camYaw);
    const c = Math.cos(camYaw);
    _move.set(s * mz - c * mx, 0, c * mz + s * mx);

    const sprint = !!((k.ShiftLeft || k.ShiftRight || joyActive) && len > 0);
    const wantBlock = (input.buttons.right || mob.block) && !this.attack;
    this.setBlocking(wantBlock);

    if (input.pressed.has('attack')) this.requestAttack();
    this.handleDashTaps(input);
    if (input.pressed.has('dash')) {
      const dx = joyActive || len > 0 ? _move.x : Math.sin(this.yaw);
      const dz = joyActive || len > 0 ? _move.z : Math.cos(this.yaw);
      this.tryDash(dx, dz);
    }
    const jump = input.pressed.has('jump');

    this.applyMovement(dt, { moveDir: _move, sprint, jump });

    this.yaw = camYaw;
    this.rig.setYaw(this.yaw);
    this.syncRigAnim(dt);
  }
}
