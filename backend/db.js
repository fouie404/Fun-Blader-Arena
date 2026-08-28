// db.js — SQLite-backed persistent store with an automatic in-memory fallback.
// If better-sqlite3 (native) cannot be loaded, the backend still runs against an
// in-memory store so that the arena online service degrades gracefully instead of dying.

import { createStore } from './store-sqlite.js';

const DB_FILE = process.env.DB_FILE || './data.sqlite';

export function openStore() {
  let sqlite = null;
  try {
    sqlite = createStore(DB_FILE);
  } catch (err) {
    console.warn('[db] SQLite unavailable, using IN-MEMORY fallback: %s', err.message);
  }
  return sqlite || createMemoryStore();
}

/* ------------------------------------------------------------------ */
/* In-memory fallback (keeps the exact same interface as store-sqlite) */
/* ------------------------------------------------------------------ */

class MemoryStore {
  constructor() {
    this.users = new Map();     // username -> { id, username, passHash, coins, diamonds, skins }
    this.servers = new Map();   // id -> server record
    this._seq = 1;
  }

  init() { return this; }
  ready() { return true; }

  createUser({ username, passHash }) {
    if (this.users.has(username)) return { ok: false, err: 'taken' };
    const id = 'u' + this._seq++;
    const u = { id, username, passHash, coins: 500, diamonds: 0, skins: [] };
    this.users.set(username, u);
    return { ok: true, user: u };
  }

  findUser(username) {
    return this.users.get(username) || null;
  }

  getUserById(id) {
    for (const u of this.users.values()) if (u.id === id) return u;
    return null;
  }

  getUser(id) {
    return this.getUserById(id);
  }

  updateUser(id, patch) {
    const u = this.getUser(id);
    if (!u) return null;
    if (typeof patch.coins === 'number') u.coins = Math.max(0, Math.round(patch.coins));
    if (typeof patch.diamonds === 'number') u.diamonds = Math.max(0, Math.round(patch.diamonds));
    if (Array.isArray(patch.skins)) {
      u.skins = [...new Set(patch.skins.map(String))];
    }
    return u;
  }

  addSkin(id, skinId) {
    const u = this.getUser(id);
    if (!u) return null;
    if (!u.skins.includes(String(skinId))) u.skins.push(String(skinId));
    return u;
  }

  roster() {
    return [...this.users.values()].map((u) => ({
      id: u.id, username: u.username, coins: u.coins, diamonds: u.diamonds, skins: u.skins
    }));
  }

  createServer(hostId, name, opts = {}) {
    const id = 'srv-' + this._seq++;
    const rec = {
      id,
      name: String(name || 'Arena').slice(0, 24),
      hostId,
      password: opts.password || null,
      map: opts.map || 'citadel',
      capacity: Math.min(15, Math.max(2, opts.capacity == null ? 8 : (Number(opts.capacity) || 2))),
      bots: Math.max(0, Math.min(4, opts.bots == null ? 2 : Math.round(Number(opts.bots) || 0))),
      created: Date.now(),
      players: [hostId]
    };
    this.servers.set(id, rec);
    return rec;
  }

  getServer(id) {
    return this.servers.get(id) || null;
  }

  listServers() {
    const out = [];
    for (const s of this.servers.values()) {
      if (s.players.length >= s.capacity) continue;
      const host = this.getUserById(s.hostId);
      out.push({
        id: s.id, name: s.name, hostId: s.hostId,
        hostName: host ? host.username : s.hostId,
        map: s.map, capacity: s.capacity, playerCount: s.players.length,
        bots: s.bots, hasPassword: !!s.password, created: s.created
      });
    }
    return out.sort((a, b) => b.created - a.created);
  }

  joinServer(id, userId, password) {
    const s = this.servers.get(id);
    if (!s) return { ok: false, err: 'notfound' };
    if (s.players.includes(userId)) return { ok: true, server: s };
    if (s.players.length >= s.capacity) return { ok: false, err: 'full' };
    if (s.password && s.password !== password) return { ok: false, err: 'pass' };
    s.players.push(userId);
    return { ok: true, server: s };
  }

  leaveServer(id, userId) {
    const s = this.servers.get(id);
    if (!s) return;
    s.players = s.players.filter((p) => p !== userId);
    if (s.players.length === 0 && Date.now() - s.created > 30000) {
      this.servers.delete(id);
    }
  }
}

export function createMemoryStore() {
  return new MemoryStore();
}