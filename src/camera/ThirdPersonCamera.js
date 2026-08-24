import * as THREE from 'three';

export class ThirdPersonCamera {
  constructor(camera, input, collision) {
    this.cam = camera;
    this.input = input;
    this.collision = collision;
    this.yaw = 0;
    this.pitch = 0.34;
    this.dist = 5.6;
    this.curDist = 5.6;
    this.sensitivity = 1;
    this.pivot = new THREE.Vector3();
    this.hasPivot = false;
    this.shake = 0;
    this.ray = new THREE.Raycaster();
    this.ray.far = 60;
    this.menuAngle = 0.6;
    this._back = new THREE.Vector3();
    this._desired = new THREE.Vector3();
  }

  snap(pos) {
    this.pivot.copy(pos);
    this.pivot.y += 1.65;
    this.hasPivot = true;
  }

  addShake(a) {
    this.shake = Math.min(this.shake + a, 0.9);
  }

  update(dt, targetPos, mode) {
    if (mode === 'menu') {
      this.menuAngle += dt * 0.06;
      const r = 54;
      this.cam.position.set(Math.sin(this.menuAngle) * r, 26, Math.cos(this.menuAngle) * r);
      this.cam.lookAt(0, 2, 0);
      return;
    }

    if (mode === 'preview') {
      const fx = targetPos ? targetPos.x : 0;
      const fz = targetPos ? targetPos.z : 0;
      const a = 0.7;
      const r = 4.6;
      this.cam.position.set(fx + Math.sin(a) * r, 2.0, fz + Math.cos(a) * r);
      this.cam.lookAt(fx, 1.25, fz);
      return;
    }

    if (mode === 'mapPreview') {
      this.cam.position.set(36, 22, 36);
      this.cam.lookAt(0, 1, 0);
      return;
    }

    if (this.input.locked) {
      const d = this.input.consumeDelta();
      this.yaw -= d.dx * 0.0023 * this.sensitivity;
      this.pitch = Math.max(-0.55, Math.min(1.35, this.pitch + d.dy * 0.0023 * this.sensitivity));
    } else {
      this.input.consumeDelta();
    }

    if (!this.hasPivot && targetPos) this.snap(targetPos);
    if (targetPos) {
      const k = 1 - Math.exp(-17 * dt);
      this.pivot.x += (targetPos.x - this.pivot.x) * k;
      this.pivot.y += (targetPos.y + 1.65 - this.pivot.y) * k;
      this.pivot.z += (targetPos.z - this.pivot.z) * k;
    }

    let distTarget = 5.6;
    if (mode === 'dead') {
      this.yaw += dt * 0.55;
      this.pitch += (0.42 - this.pitch) * Math.min(1, dt * 2);
      distTarget = 8;
    }

    const cp = Math.cos(this.pitch);
    this._back.set(-Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp).normalize();

    let d = distTarget;
    if (this.collision.occluders.length > 0) {
      this.ray.set(this.pivot, this._back);
      this.ray.far = distTarget + 0.4;
      const hits = this.ray.intersectObjects(this.collision.occluders, false);
      if (hits.length > 0) d = Math.max(1.15, hits[0].distance - 0.35);
    }
    if (d < this.curDist) this.curDist = d;
    else this.curDist += (d - this.curDist) * (1 - Math.exp(-5 * dt));

    this.shake *= Math.exp(-6.5 * dt);
    const sh = this.shake;
    const jx = (Math.random() - 0.5) * sh;
    const jy = (Math.random() - 0.5) * sh;

    this._desired.copy(this.pivot).addScaledVector(this._back, this.curDist);
    this.cam.position.set(this._desired.x + jx, Math.max(0.35, this._desired.y + jy), this._desired.z + jx);
    this.cam.lookAt(this.pivot.x, this.pivot.y + 0.15 + jy, this.pivot.z);
  }
}
