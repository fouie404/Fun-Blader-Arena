// BackendClient.js — resilient REST client for the optional Fun Blader backend.
// NEVER blocks the game: every call is fire-and-forget with a timeout and caches to
// localStorage. If the backend is down/absent the game keeps running fully offline.
const TOKEN_KEY = 'fba.token';
const PROFILE_KEY = 'fba.profile';
const URL_KEY = 'fba.api-url';

function defaultBase() {
  const envBase = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) || '';
  const stored = (() => { try { return localStorage.getItem(URL_KEY); } catch { return null; } })();
  return envBase || stored || (typeof location !== 'undefined' ? location.origin : '');
}

export class BackendClient {
  constructor() {
    this.base = defaultBase().replace(/\/+$/, '');
    this.token = null;
    this.profile = null;
    this.online = false;
    this._failCount = 0;
    this._lastHealth = 0;
    this._readStore();
    // NOTE: online is NOT optimistically true from a stored token — it only becomes
    // true after a successful /api/health ping, so the UI never claims connectivity it lacks.
  }

  // Session getters — "authed" means we hold BOTH a token and a profile.
  get authed() { return !!(this.token && this.profile); }
  get username() { return (this.profile && this.profile.username) || null; }

  _readStore() {
    try {
      this.token = localStorage.getItem(TOKEN_KEY) || null;
      const p = localStorage.getItem(PROFILE_KEY);
      this.profile = p ? JSON.parse(p) : null;
    } catch { /* ignore */ }
  }

  _save() {
    try {
      if (this.token) localStorage.setItem(TOKEN_KEY, this.token); else localStorage.removeItem(TOKEN_KEY);
      if (this.profile) localStorage.setItem(PROFILE_KEY, JSON.stringify(this.profile)); else localStorage.removeItem(PROFILE_KEY);
    } catch { /* ignore */ }
  }

  wsBase() {
    const b = this.base;
    if (b.startsWith('https:')) return b.replace(/^https:/, 'wss:');
    if (b.startsWith('http:')) return b.replace(/^http:/, 'ws:');
    return (typeof location !== 'undefined' && location.protocol === 'https:' ? 'wss:' : 'ws:') + '//' + b;
  }

  _aliasUrl(path) { return this.base + path; }

  async _req(method, path, body) {
    const ab = new AbortController();
    const t = setTimeout(() => ab.abort(), 4500);
    try {
      const headers = { 'Content-Type': 'application/json' };
      if (this.token) headers.Authorization = `Bearer ${this.token}`;
      const res = await fetch(this._aliasUrl(path), {
        method, headers, body: body ? JSON.stringify(body) : undefined, signal: ab.signal
      });
      clearTimeout(t);
      let data = null;
      try { data = await res.json(); } catch { /* body may be empty */ }
      if (!res.ok || !data || data.ok === false) return { ok: false, err: (data && data.err) || ('HTTP ' + res.status) };
      return { ok: true, data };
    } catch (e) {
      clearTimeout(t);
      throw e;
    }
  }

  async health() {
    try {
      const r = await this._req('GET', '/api/health');
      const ok = !!(r.ok && r.data && r.data.ok);
      this._failCount = ok ? 0 : this._failCount + 1;
      return { ok, fail: this._failCount };
    } catch {
      this._failCount += 1;
      this._onlineChanged(false);
      return { ok: false, fail: this._failCount };
    }
  }

  _onlineChanged(ok) {
    const was = this.online;
    this.online = ok;
    if (was !== ok) window.dispatchEvent(new CustomEvent('fba-backend', { detail: { online: ok } }));
  }

  async warm() {
    if (Date.now() - this._lastHealth < 8000) return this.online;
    this._lastHealth = Date.now();
    const h = await this.health();
    this._onlineChanged(h.ok && h.fail < 3);
    return this.online;
  }

  async register(username, password) {
    let r;
    try { r = await this._req('POST', '/api/auth/register', { username, password }); }
    catch { return { ok: false, err: 'Backend unreachable. Check that the backend server is running.' }; }
    if (!r.ok) return { ok: false, err: r.err };
    this._applySession(r.data.token, r.data.profile);
    return { ok: true, profile: r.data.profile };
  }

  async login(username, password) {
    let r;
    try { r = await this._req('POST', '/api/auth/login', { username, password }); }
    catch { return { ok: false, err: 'Backend unreachable. Check that the backend server is running.' }; }
    if (!r.ok) return { ok: false, err: r.err };
    this._applySession(r.data.token, r.data.profile);
    return { ok: true, profile: r.data.profile };
  }

  _applySession(token, profile) {
    this.token = token;
    this.profile = profile;
    this._save();
    this.online = true;
    window.dispatchEvent(new CustomEvent('fba-login', { detail: { profile } }));
  }

  logout() {
    this.token = null;
    this.profile = null;
    try { localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(PROFILE_KEY); } catch { /* ignore */ }
    this.online = false;
    window.dispatchEvent(new CustomEvent('fba-logout'));
  }

  async refreshProfile() {
    if (!this.authed) return false;
    const r = await this._req('GET', '/api/me');
    if (r.ok) { this.profile = r.data.profile; this._save(); }
    return r.ok;
  }

  async pushProfile(coins, diamonds, skins) {
    if (!this.authed) return;
    try { await this._req('POST', '/api/me/push', { coins, diamonds, skins }); } catch { /* ignore */ }
  }

  async addOwnedSkin(skinId) {
    if (!this.authed) return;
    try { await this._req('POST', '/api/me/skin', { skin: skinId }); } catch { /* ignore */ }
  }

  async listServers() {
    try { const r = await this._req('GET', '/api/servers'); return r.ok ? r.data.servers : []; } catch { return []; }
  }

  async createServer(name, opts = {}) {
    if (!this.authed) return { ok: false, err: 'Not logged in.' };
    try {
      const r = await this._req('POST', '/api/servers', { name, ...opts });
      return r.ok ? { ok: true, server: r.data.server } : { ok: false, err: r.err };
    } catch { return { ok: false, err: 'Backend unreachable.' }; }
  }

  async joinServer(id, password) {
    if (!this.authed) return { ok: false, err: 'Not logged in.' };
    try {
      const r = await this._req('POST', `/api/servers/${id}/join`, { password });
      return r.ok ? { ok: true, server: r.data.server } : { ok: false, err: r.err };
    } catch { return { ok: false, err: 'Backend unreachable.' }; }
  }

  async leaveServer(id) {
    try { await this._req('POST', `/api/servers/${id}/leave`); } catch { /* ignore */ }
  }

  setApiUrl(url) {
    const u = String(url || '').trim().replace(/\/$/, '');
    if (u) { try { localStorage.setItem(URL_KEY, u); } catch { /* ignore */ } }
    else { try { localStorage.removeItem(URL_KEY); } catch { /* ignore */ } }
    this.base = u || defaultBase().replace(/\/+$/, '');
  }
}