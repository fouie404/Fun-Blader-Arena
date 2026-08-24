import * as THREE from 'three';

export class Environment {
  constructor(scene, theme) {
    this.scene = scene;
    this.theme = theme;
    this.group = new THREE.Group();
    scene.add(this.group);

    scene.background = new THREE.Color(theme.sky);
    scene.fog = new THREE.Fog(theme.fogColor, theme.fogNear, theme.fogFar);

    const hemi = new THREE.HemisphereLight(theme.hemiSky, theme.hemiGround, theme.hemiI);
    this.group.add(hemi);
    this.group.add(new THREE.AmbientLight(theme.ambColor, theme.ambI));

    const sun = new THREE.DirectionalLight(theme.sunColor, theme.sunI);
    sun.position.set(...theme.sunPos);
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
    this.group.add(sun);
    this.sun = sun;

    const grassGeo = new THREE.CircleGeometry(300, 48);
    const grass = new THREE.Mesh(grassGeo, new THREE.MeshLambertMaterial({ color: theme.grass }));
    grass.rotation.x = -Math.PI / 2;
    grass.position.y = -0.08;
    this.group.add(grass);

    const mtnMat = new THREE.MeshLambertMaterial({ color: theme.mountain, flatShading: true });
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2 + Math.sin(i * 7.3) * 0.2;
      const r = 175 + Math.sin(i * 13.1) * 35;
      const h = 38 + Math.abs(Math.sin(i * 5.7)) * 48;
      const w = 26 + Math.abs(Math.cos(i * 3.3)) * 22;
      const cone = new THREE.Mesh(new THREE.ConeGeometry(w, h, 5), mtnMat);
      cone.position.set(Math.sin(a) * r, h / 2 - 4, Math.cos(a) * r);
      cone.rotation.y = Math.random() * Math.PI;
      this.group.add(cone);
    }

    const cloudMat = new THREE.MeshBasicMaterial({
      color: 0xffffff, transparent: true, opacity: theme.cloud, fog: false
    });
    this.cloudGroup = new THREE.Group();
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
    this.group.add(this.cloudGroup);

    if (theme.stars) {
      const n = 550;
      const pos = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        const th = Math.random() * Math.PI * 2;
        const ph = Math.acos(Math.random() * 0.85);
        const r = 240;
        pos[i * 3] = Math.sin(ph) * Math.cos(th) * r;
        pos[i * 3 + 1] = Math.cos(ph) * r + 10;
        pos[i * 3 + 2] = Math.sin(ph) * Math.sin(th) * r;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const stars = new THREE.Points(geo, new THREE.PointsMaterial({
        color: 0xcfe0ff, size: 1.6, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.9
      }));
      stars.frustumCulled = false;
      this.group.add(stars);
    }

    if (theme.moon) {
      const moon = new THREE.Mesh(
        new THREE.CircleGeometry(14, 32),
        new THREE.MeshBasicMaterial({ color: 0xe4ecff, fog: false })
      );
      moon.position.set(-120, 85, -160);
      moon.lookAt(0, 0, 0);
      this.group.add(moon);

      const c = document.createElement('canvas');
      c.width = c.height = 64;
      const ctx = c.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 4, 32, 32, 30);
      grad.addColorStop(0, 'rgba(190,210,255,0.55)');
      grad.addColorStop(1, 'rgba(190,210,255,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      const glowTex = new THREE.CanvasTexture(c);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false
      }));
      glow.scale.setScalar(70);
      glow.position.copy(moon.position);
      this.group.add(glow);
    }
  }

  update(dt) {
    this.cloudGroup.rotation.y += dt * 0.004;
  }

  dispose() {
    this.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of mats) {
          if (m.map) m.map.dispose();
          m.dispose();
        }
      }
    });
    this.scene.remove(this.group);
    this.scene.fog = null;
  }
}
