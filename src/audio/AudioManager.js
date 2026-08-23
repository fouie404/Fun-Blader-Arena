export class AudioManager {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.volume = 0.7;
    this.noiseBuf = null;
    this.stepAlt = false;
  }

  ensure() {
    try {
      if (this.ctx) {
        if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
        return true;
      }
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.volume;
      this.master.connect(this.ctx.destination);
      const len = Math.floor(this.ctx.sampleRate * 0.8);
      this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const d = this.noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      return true;
    } catch (e) {
      return false;
    }
  }

  setVolume(v) {
    this.volume = v;
    if (this.master) this.master.gain.value = v;
  }

  tone({ f0 = 440, f1 = null, dur = 0.15, type = 'sine', gain = 0.25, delay = 0 }) {
    if (!this.ensure()) return;
    try {
      const t = this.ctx.currentTime + delay;
      const o = this.ctx.createOscillator();
      o.type = type;
      o.frequency.setValueAtTime(Math.max(1, f0), t);
      o.frequency.exponentialRampToValueAtTime(Math.max(1, f1 == null ? f0 : f1), t + dur);
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(gain, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g);
      g.connect(this.master);
      o.start(t);
      o.stop(t + dur + 0.05);
    } catch (e) { /* ignore */ }
  }

  noise({ dur = 0.2, type = 'bandpass', f0 = 1000, f1 = null, q = 1, gain = 0.3, delay = 0 }) {
    if (!this.ensure()) return;
    try {
      const t = this.ctx.currentTime + delay;
      const src = this.ctx.createBufferSource();
      src.buffer = this.noiseBuf;
      src.loop = true;
      const flt = this.ctx.createBiquadFilter();
      flt.type = type;
      flt.Q.value = q;
      flt.frequency.setValueAtTime(Math.max(10, f0), t);
      flt.frequency.exponentialRampToValueAtTime(Math.max(10, f1 == null ? f0 : f1), t + dur);
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(gain, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      src.connect(flt);
      flt.connect(g);
      g.connect(this.master);
      src.start(t, Math.random() * 0.5);
      src.stop(t + dur + 0.05);
    } catch (e) { /* ignore */ }
  }

  uiClick() {
    this.tone({ f0: 760, f1: 520, dur: 0.07, type: 'square', gain: 0.12 });
  }

  swing(kind = 0) {
    if (kind === 2) this.noise({ dur: 0.26, f0: 900, f1: 180, q: 2.5, gain: 0.42 });
    else if (kind === 1) this.noise({ dur: 0.18, f0: 1600, f1: 320, q: 2, gain: 0.3 });
    else this.noise({ dur: 0.16, f0: 2100, f1: 420, q: 2, gain: 0.28 });
  }

  hit() {
    this.tone({ f0: 150, f1: 55, dur: 0.13, type: 'sine', gain: 0.5 });
    this.noise({ dur: 0.09, type: 'lowpass', f0: 700, gain: 0.3 });
  }

  clash() {
    const d = 40;
    this.tone({ f0: 2450 + d, f1: 1900, dur: 0.14, type: 'square', gain: 0.14 });
    this.tone({ f0: 3150 - d, f1: 2500, dur: 0.11, type: 'triangle', gain: 0.16 });
    this.tone({ f0: 1250, f1: 900, dur: 0.22, type: 'triangle', gain: 0.08 });
    this.noise({ dur: 0.07, type: 'highpass', f0: 3200, gain: 0.28 });
  }

  footstep(run) {
    this.stepAlt = !this.stepAlt;
    this.noise({
      dur: 0.06,
      type: 'lowpass',
      f0: this.stepAlt ? 340 : 260,
      gain: run ? 0.17 : 0.1
    });
  }

  jump() {
    this.noise({ dur: 0.12, type: 'bandpass', f0: 300, f1: 800, gain: 0.09 });
  }

  dash() {
    this.noise({ dur: 0.16, type: 'bandpass', f0: 420, f1: 1700, q: 1.4, gain: 0.2 });
  }

  land() {
    this.tone({ f0: 110, f1: 50, dur: 0.1, type: 'sine', gain: 0.24 });
    this.noise({ dur: 0.08, type: 'lowpass', f0: 400, gain: 0.16 });
  }

  death() {
    this.tone({ f0: 220, f1: 50, dur: 0.65, type: 'sawtooth', gain: 0.3 });
    this.noise({ dur: 0.4, type: 'lowpass', f0: 600, f1: 120, gain: 0.22 });
  }

  respawn() {
    this.tone({ f0: 392, dur: 0.09, type: 'triangle', gain: 0.18 });
    this.tone({ f0: 523, dur: 0.09, type: 'triangle', gain: 0.18, delay: 0.09 });
    this.tone({ f0: 784, dur: 0.16, type: 'triangle', gain: 0.2, delay: 0.18 });
  }

  elimination() {
    this.tone({ f0: 523, f1: 523, dur: 0.12, type: 'square', gain: 0.16 });
    this.tone({ f0: 784, f1: 784, dur: 0.2, type: 'square', gain: 0.18, delay: 0.1 });
    this.tone({ f0: 1046, f1: 1046, dur: 0.26, type: 'triangle', gain: 0.16, delay: 0.2 });
  }
}
