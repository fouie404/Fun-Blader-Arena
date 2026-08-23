import * as THREE from 'three';

export class Environment {
  constructor(scene) {
    this.scene = scene;

    scene.background = new THREE.Color(0x9fbcd9);
    scene.fog = new THREE.Fog(0xa9c2dd, 70, 235);

    const hemi = new THREE.HemisphereLight(0xbfd8f0, 0x54452e, 0.85);
    scene.add(hemi);

    scene.add(new THREE.AmbientLight(0x33384a, 0.28));

    const sun = new THREE.DirectionalLight(0xffe7bd, 1.5);
    sun.position.set(45, 70, 30);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -78;
    sun.shadow.camera.right = 78;
    sun.shadow.camera.top = 78;
    sun.shadow.camera.bottom = -78;
    sun.shadow.camera.near = 5;
    sun.shadow.camera.far = 220;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.03;
    scene.add(sun);
    this.sun = sun;

    const grassGeo = new THREE.CircleGeometry(300, 48);
    const grassMat = new THREE.MeshLambertMaterial({ color: 0x59713f });
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.rotation.x = -Math.PI / 2;
    grass.position.y = -0.08;
    scene.add(grass);

    const mtnMat = new THREE.MeshLambertMaterial({ color: 0x51627e, flatShading: true });
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2 + Math.sin(i * 7.3) * 0.2;
      const r = 175 + Math.sin(i * 13.1) * 35;
      const h = 38 + Math.abs(Math.sin(i * 5.7)) * 48;
      const w = 26 + Math.abs(Math.cos(i * 3.3)) * 22;
      const cone = new THREE.Mesh(new THREE.ConeGeometry(w, h, 5), mtnMat);
      cone.position.set(Math.sin(a) * r, h / 2 - 4, Math.cos(a) * r);
      cone.rotation.y = Math.random() * Math.PI;
      scene.add(cone);
    }

    this.cloudGroup = new THREE.Group();
    const cloudMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85, fog: false });
    for (let i = 0; i < 10; i++) {
      const cl = new THREE.Group();
      const n = 3 + Math.floor(Math.random() * 3);
      for (let j = 0; j < n; j++) {
        const s = 6 + Math.random() * 10;
        const sph = new THREE.Mesh(new THREE.SphereGeometry(s, 7, 5), cloudMat);
        sph.position.set(j * s * 0.8 - n * s * 0.4, Math.random() * s * 0.3, Math.random() * s * 0.5);
        cl.add(sph);
      }
      const a = Math.random() * Math.PI * 2;
      const r = 120 + Math.random() * 90;
      cl.position.set(Math.sin(a) * r, 60 + Math.random() * 35, Math.cos(a) * r);
      this.cloudGroup.add(cl);
    }
    scene.add(this.cloudGroup);
  }

  update(dt) {
    this.cloudGroup.rotation.y += dt * 0.004;
  }
}
