export class Input {
  constructor(dom) {
    this.dom = dom;
    this.keys = Object.create(null);
    this.buttons = { left: false, right: false };
    this.pressed = new Set();
    this.mouseDX = 0;
    this.mouseDY = 0;
    this.locked = false;
    this.onLockChange = null;
    this.mobile = { active: false, x: 0, y: 0, block: false };
    this.lookDX = 0;
    this.lookDY = 0;

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Tab') e.preventDefault();
      if (e.code === 'Space' && this.locked) e.preventDefault();
      if (!this.keys[e.code] && !e.repeat) {
        this.pressed.add(e.code);
        if (e.code === 'Space') this.pressed.add('jump');
      }
      this.keys[e.code] = true;
    });
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    dom.addEventListener('mousedown', (e) => {
      if (!this.locked) return;
      if (e.button === 1) e.preventDefault();
      if (e.button === 0) {
        if (!this.buttons.left) this.pressed.add('attack');
        this.buttons.left = true;
      } else if (e.button === 2) {
        this.buttons.right = true;
      }
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.buttons.left = false;
      if (e.button === 2) this.buttons.right = false;
    });
    dom.addEventListener('contextmenu', (e) => e.preventDefault());

    window.addEventListener('mousemove', (e) => {
      if (!this.locked) return;
      this.mouseDX += e.movementX || 0;
      this.mouseDY += e.movementY || 0;
    });

    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === dom;
      if (!this.locked) {
        this.keys = Object.create(null);
        this.buttons.left = false;
        this.buttons.right = false;
      }
      if (this.onLockChange) this.onLockChange(this.locked);
    });
  }

  lock() {
    try {
      const p = this.dom.requestPointerLock();
      if (p && p.catch) p.catch(() => {});
    } catch (e) { /* ignore */ }
  }

  unlock() {
    try { document.exitPointerLock(); } catch (e) { /* ignore */ }
  }

  isDown(code) { return !!this.keys[code]; }

  pressAction(name) {
    this.pressed.add(name);
  }

  addLook(dx, dy) {
    this.lookDX += dx;
    this.lookDY += dy;
  }

  consumeDelta() {
    const d = {
      dx: this.mouseDX + this.lookDX,
      dy: this.mouseDY + this.lookDY
    };
    this.mouseDX = 0;
    this.mouseDY = 0;
    this.lookDX = 0;
    this.lookDY = 0;
    return d;
  }

  postUpdate() {
    this.pressed.clear();
    this.mouseDX = 0;
    this.mouseDY = 0;
  }
}
