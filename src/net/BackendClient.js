// BackendClient.js — resilient REST client for the optional Fun Blader backend.
// NO ACCOUNTS: progress (name, coins, diamonds, skins, wins) lives ONLY in this
// browser's localStorage. The backend is used purely for the online lobby — it
// hands out an anonymous session token that lets a browser create/join servers
// and open the websocket. Every call is fire-and-forget with a timeout; if the
// backend is down/absent the game keeps running fully offline.
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
    this._ensuring = null;
    try { this.displayName = localStorage.getItem('fba-player-name') || ''; } catch { this.displayName = ''; }
    this._readStore();
    // NOTE: online is NOT optimistically true from a stored token — it only becomes
    // true after a successful /api/health ping, so the UI never claims connectivity it lacks.
  }

  // Session getters — "authed" means we hold BOTH a token and a profile.
  get authed() { return !!(this.token && this.profile); }
  get username() { return (this.profile && this.profile.username) || null; }

  setDisplayName(name) {
    this.displayName = String(name || '').trim().slice(0, 16);
  }

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

  // ---- anonymous guest session (no accounts) ------------------------------
  // Validates the stored token (if any) or acquires a fresh guest session.
  // Never throws; concurrent calls share one in-flight request.
  async ensureSession(name) {
    if (name) this.setDisplayName(name);
    if (this.authed) {
      try {
        const v = await this._req('GET', '/api/session');
        if (v.ok) return true;
      } catch { /* fall through to re-acquire below */ }
      // Stale token (backend restarted / db wiped) — drop it and get a new one.
      this.token = null;
      this.profile = null;
      this._save();
    }
    if (this._ensuring) return this._ensuring;
    this._ensuring = this._createSession().finally(() => { this._ensuring = null; });
    return this._ensuring;
  }

  async _createSession() {
    try {
      const r = await this._req('POST', '/api/session', { name: this.displayName });
      if (r.ok && r.data && r.data.token) {
        this._applySession(r.data.token, r.data.profile);
        return true;
      }
    } catch { /* backend unreachable */ }
    return false;
  }

  _applySession(token, profile) {
    this.token = token;
    this.profile = profile || null;
    this._save();
    this.online = true;
    window.dispatchEvent(new CustomEvent('fba-session', { detail: { profile } }));
  }

  _dropSession() {
    this.token = null;
    this.profile = null;
    try { localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(PROFILE_KEY); } catch { /* ignore */ }
  }

  // Re-acquire the session once if the backend rejected our token (401).
  async _revalidate() {
    this._dropSession();
    return this.ensureSession();
  }

  async listServers() {
    try { const r = await this._req('GET', '/api/servers'); return r.ok ? r.data.servers : []; } catch { return []; }
  }

  async createServer(name, opts = {}) {
    if (!(await this.ensureSession())) return { ok: false, err: 'Backend unreachable — online play needs the backend server running.' };
    try {
      let r = await this._req('POST', '/api/servers', { name, ...opts });
      if (!r.ok && /401|unauthorized/i.test(r.err || '')) {
        if (!(await this._revalidate())) return { ok: false, err: 'Backend unreachable.' };
        r = await this._req('POST', '/api/servers', { name, ...opts });
      }
      return r.ok ? { ok: true, server: r.data.server } : { ok: false, err: r.err };
    } catch { return { ok: false, err: 'Backend unreachable.' }; }
  }

  async joinServer(id, password) {
    if (!(await this.ensureSession())) return { ok: false, err: 'Backend unreachable — online play needs the backend server running.' };
    try {
      let r = await this._req('POST', `/api/servers/${id}/join`, { password });
      if (!r.ok && /401|unauthorized/i.test(r.err || '')) {
        if (!(await this._revalidate())) return { ok: false, err: 'Backend unreachable.' };
        r = await this._req('POST', `/api/servers/${id}/join`, { password });
      }
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