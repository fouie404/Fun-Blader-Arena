export class MobileControls {
  constructor(game) {
    this.game = game;
    this.joyId = null;
    this.visible = false;

    this.root = document.createElement('div');
    this.root.id = 'mobile-controls';
    this.root.innerHTML = `
      <div id="joy-base"><div id="joy-knob"></div></div>
      <div id="mc-actions">
        <button class="mc-btn" id="mc-atk">ATK</button>
        <button class="mc-btn" id="mc-blk">BLK</button>
        <button class="mc-btn" id="mc-jmp">JMP</button>
        <button class="mc-btn" id="mc-dsh">DSH</button>
      </div>
      <button class="mc-btn" id="mc-menu">MENU</button>
    `;
    document.body.appendChild(this.root);
    this.root.style.display = 'none';

    const base = this.root.querySelector('#joy-base');
    const knob = this.root.querySelector('#joy-knob');
    const input = game.input;

    const handle = (t) => {
      const r = base.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      let dx = (t.clientX - cx) / (r.width / 2);
      let dy = (t.clientY - cy) / (r.height / 2);
      const l = Math.hypot(dx, dy);
      if (l > 1) {
        dx /= l;
        dy /= l;
      }
      input.mobile.active = true;
      input.mobile.x = dx;
      input.mobile.y = -dy;
      knob.style.transform = `translate(${dx * 36}px, ${dy * 36}px)`;
    };
    const release = () => {
      this.joyId = null;
      input.mobile.active = false;
      input.mobile.x = 0;
      input.mobile.y = 0;
      knob.style.transform = 'translate(0,0)';
    };

    base.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.joyId = e.changedTouches[0].identifier;
      handle(e.changedTouches[0]);
    }, { passive: false });
    window.addEventListener('touchmove', (e) => {
      if (this.joyId === null) return;
      for (const t of e.changedTouches) {
        if (t.identifier === this.joyId) {
          e.preventDefault();
          handle(t);
        }
      }
    }, { passive: false });
    window.addEventListener('touchend', (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === this.joyId) release();
      }
    });
    window.addEventListener('touchcancel', () => release());

    const bind = (id, down, up) => {
      const el = this.root.querySelector(id);
      el.addEventListener('touchstart', (e) => {
        e.preventDefault();
        down();
      }, { passive: false });
      if (up) {
        el.addEventListener('touchend', (e) => {
          e.preventDefault();
          up();
        }, { passive: false });
      }
    };

    bind('#mc-atk', () => input.pressAction('attack'));
    bind('#mc-blk', () => { input.mobile.block = true; }, () => { input.mobile.block = false; });
    bind('#mc-jmp', () => input.pressAction('jump'));
    bind('#mc-dsh', () => input.pressAction('dash'));
    bind('#mc-menu', () => {
      if (game.state.phase === 'playing') game.showLeaveConfirm();
    });

    const canvas = game.renderer.domElement;
    let lookId = null;
    let lx = 0;
    let ly = 0;
    canvas.addEventListener('touchstart', (e) => {
      if (lookId !== null) return;
      const t = e.changedTouches[0];
      lookId = t.identifier;
      lx = t.clientX;
      ly = t.clientY;
    }, { passive: false });
    canvas.addEventListener('touchmove', (e) => {
      if (lookId === null) return;
      for (const t of e.changedTouches) {
        if (t.identifier === lookId) {
          e.preventDefault();
          input.addLook((t.clientX - lx) * 2.4, (t.clientY - ly) * 2.4);
          lx = t.clientX;
          ly = t.clientY;
        }
      }
    }, { passive: false });
    const endLook = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === lookId) lookId = null;
      }
    };
    canvas.addEventListener('touchend', endLook);
    canvas.addEventListener('touchcancel', endLook);
  }

  setVisible(v) {
    if (this.visible === v) return;
    this.visible = v;
    this.root.style.display = v ? 'block' : 'none';
  }
}
