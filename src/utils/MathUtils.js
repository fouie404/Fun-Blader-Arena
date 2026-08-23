export const TAU = Math.PI * 2;

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export const randRange = (a, b) => a + Math.random() * (b - a);
export const randInt = (a, b) => Math.floor(randRange(a, b + 1));
export const randPick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const easeOutCubic = (t) => 1 - Math.pow(1 - clamp(t, 0, 1), 3);
export const easeOutQuad = (t) => 1 - (1 - clamp(t, 0, 1)) * (1 - clamp(t, 0, 1));

export function dampAngle(a, b, lambda, dt) {
  let d = ((b - a + Math.PI) % TAU + TAU) % TAU - Math.PI;
  return a + d * (1 - Math.exp(-lambda * dt));
}

export function angleDiff(a, b) {
  return Math.abs(((b - a + Math.PI) % TAU + TAU) % TAU - Math.PI);
}
