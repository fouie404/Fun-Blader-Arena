// store-sqlite.js — better-sqlite3 backed store with the SAME interface as db.js memory fallback.
// The native module is required lazily INSIDE createStore() so that db.js can catch the
// failure and fall back to the in-memory store instead of crashing at import time.
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export function createStore(dbFile) {
  let Database = null;
  try {
    Database = require('better-sqlite3');
  } catch (e) {
    throw new Error('better-sqlite3 unavailable: ' + (e && e.message ? e.message : e));
  }
  const db = new Database(dbFile);
  db.pragma('journal_mode = WAL');
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      passHash TEXT NOT NULL,
      coins INTEGER NOT NULL DEFAULT 500,
      diamonds INTEGER NOT NULL DEFAULT 0,
      skins TEXT NOT NULL DEFAULT '[]',
      winsG INTEGER NOT NULL DEFAULT 0,
      winsS INTEGER NOT NULL DEFAULT 0,
      winsB INTEGER NOT NULL DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS servers (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      hostId TEXT NOT NULL,
      password TEXT,
      map TEXT NOT NULL DEFAULT 'citadel',
      capacity INTEGER NOT NULL DEFAULT 8,
      bots INTEGER NOT NULL DEFAULT 10,
      players TEXT NOT NULL DEFAULT '[]',
      created INTEGER NOT NULL
    );
  `);
  // Migrations for databases created before wins existed.
  for (const stmt of [
    'ALTER TABLE users ADD COLUMN winsG INTEGER NOT NULL DEFAULT 0',
    'ALTER TABLE users ADD COLUMN winsS INTEGER NOT NULL DEFAULT 0',
    'ALTER TABLE users ADD COLUMN winsB INTEGER NOT NULL DEFAULT 0'
  ]) { try { db.exec(stmt); } catch { /* column already exists */ } }
  // One-time cleanup: remove the old auto-seeded "free servers" (and their fake
  // host accounts) from databases created while that feature existed.
  try { db.exec("DELETE FROM servers WHERE isFree = 1"); } catch { /* column not present */ }
  try { db.exec("DELETE FROM users WHERE id LIKE 'sys-host-%'"); } catch { /* ignore */ }

  const IU = db.prepare('INSERT INTO users (id, username, passHash, coins, diamonds, skins, winsG, winsS, winsB) VALUES (@id, @username, @passHash, @coins, @diamonds, @skins, @winsG, @winsS, @winsB)');
  const UU = db.prepare('UPDATE users SET coins=@coins, diamonds=@diamonds, skins=@skins, winsG=@winsG, winsS=@winsS, winsB=@winsB WHERE id=@id');
  const GU = db.prepare('SELECT * FROM users WHERE username=?');
  const GUB = db.prepare('SELECT * FROM users WHERE id=?');
  const RU = db.prepare('SELECT * FROM users');

  const IS = db.prepare('INSERT INTO servers (id, name, hostId, password, map, capacity, bots, players, created) VALUES (@id, @name, @hostId, @password, @map, @capacity, @bots, @players, @created)');
  const US = db.prepare('UPDATE servers SET players=@players WHERE id=@id');
  const GS = db.prepare('SELECT * FROM servers WHERE id=?');
  const RS = db.prepare('SELECT * FROM servers');
  const RSJ = db.prepare('SELECT s.id, s.name, s.hostId, s.password, s.map, s.capacity, s.bots, s.players, s.created, u.username AS hostName FROM servers s LEFT JOIN users u ON u.id = s.hostId');
  const DS = db.prepare('DELETE FROM servers WHERE id=?');

  const toUser = (r) => (r ? { id: r.id, username: r.username, passHash: r.passHash, coins: r.coins, diamonds: r.diamonds, skins: JSON.parse(r.skins), winsG: r.winsG || 0, winsS: r.winsS || 0, winsB: r.winsB || 0 } : null);
  const toServer = (r) => (r ? { id: r.id, name: r.name, hostId: r.hostId, hostName: r.hostName || null, password: r.password, map: r.map, capacity: r.capacity, bots: r.bots, players: JSON.parse(r.players), created: r.created } : null);

  let seq = 1;
  // Seed the sequence from persisted rows so a backend restart never regenerates
  // an id that already exists in the db (users 'uN', servers 'srv-N').
  try {
    const mu = db.prepare("SELECT COALESCE(MAX(CAST(SUBSTR(id, 2) AS INTEGER)), 0) AS m FROM users WHERE id GLOB 'u[0-9]*'").get();
    const ms = db.prepare("SELECT COALESCE(MAX(CAST(SUBSTR(id, 5) AS INTEGER)), 0) AS m FROM servers WHERE id GLOB 'srv-[0-9]*'").get();
    seq = Math.max((mu && mu.m) || 0, (ms && ms.m) || 0) + 1;
  } catch { /* fresh db — keep seq=1 */ }

  const store = {
    init() { return store; },
    ready() { return true; },

    createUser({ username, passHash }) {
      if (GU.get(username)) return { ok: false, err: 'taken' };
      const id = 'u' + seq++;
      IU.run({ id, username, passHash, coins: 500, diamonds: 0, skins: '[]', winsG: 0, winsS: 0, winsB: 0 });
      return { ok: true, user: toUser(GU.get(username)) };
    },

    findUser(username) {
      return toUser(GU.get(username));
    },

    getUserById(id) {
      return toUser(GUB.get(id));
    },
    getUser(id) {
      return toUser(GUB.get(id));
    },

    updateUser(id, patch) {
      const u = toUser(GUB.get(id));
      if (!u) return null;
      if (typeof patch.coins === 'number') u.coins = Math.max(0, Math.round(patch.coins));
      if (typeof patch.diamonds === 'number') u.diamonds = Math.max(0, Math.round(patch.diamonds));
      if (typeof patch.winsG === 'number') u.winsG = Math.max(0, Math.round(patch.winsG));
      if (typeof patch.winsS === 'number') u.winsS = Math.max(0, Math.round(patch.winsS));
      if (typeof patch.winsB === 'number') u.winsB = Math.max(0, Math.round(patch.winsB));
      if (Array.isArray(patch.skins)) u.skins = [...new Set(patch.skins.map(String))];
      UU.run({ id, coins: u.coins, diamonds: u.diamonds, skins: JSON.stringify(u.skins), winsG: u.winsG || 0, winsS: u.winsS || 0, winsB: u.winsB || 0 });
      return u;
    },

    addSkin(id, skinId) {
      const u = toUser(GUB.get(id));
      if (!u) return null;
      if (!u.skins.includes(String(skinId))) u.skins.push(String(skinId));
      UU.run({ id, coins: u.coins, diamonds: u.diamonds, skins: JSON.stringify(u.skins) });
      return u;
    },

    roster() {
      return RU.all().map((r) => toUser(r)).map((u) => ({
        id: u.id, username: u.username, coins: u.coins, diamonds: u.diamonds, skins: u.skins,
        winsG: u.winsG || 0, winsS: u.winsS || 0, winsB: u.winsB || 0
      }));
    },

    createServer(hostId, name, opts = {}) {
      const id = 'srv-' + seq++;
      const capacity = Math.min(15, Math.max(2, opts.capacity == null ? 8 : (Number(opts.capacity) || 2)));
      const rec = {
        id, name: String(name || 'Arena').slice(0, 24), hostId,
        password: opts.password || null, map: opts.map || 'citadel',
        capacity,
        // Bots fill player slots, so they can occupy up to the whole limit.
        bots: Math.max(0, Math.min(capacity, opts.bots == null ? 2 : Math.round(Number(opts.bots) || 0))),
        players: [hostId], created: Date.now()
      };
      IS.run({ ...rec, players: JSON.stringify(rec.players) });
      return rec;
    },

    getServer(id) {
      return toServer(GS.get(id));
    },

    listServers() {
      return RSJ.all().map(toServer)
        // Every server stays listed — a joining player always gets in (a bot
        // inside gives up its slot), so "full" servers are never hidden.
        .filter((s) => s)
        .map((s) => ({
          id: s.id, name: s.name, hostId: s.hostId,
          hostName: s.hostName || s.hostId,
          map: s.map, capacity: s.capacity, playerCount: s.players.length,
          bots: s.bots, hasPassword: !!s.password, created: s.created
        }))
        .sort((a, b) => b.created - a.created);
    },

    joinServer(id, userId, password) {
      const s = toServer(GS.get(id));
      if (!s) return { ok: false, err: 'notfound' };
      if (s.players.includes(userId)) return { ok: true, server: s };
      if (s.password && s.password !== password) return { ok: false, err: 'pass' };
      // No "full" rejection: bots cover the player slots, so a joining player
      // simply replaces one of the bots (the room host's client handles that).
      s.players.push(userId);
      US.run({ id, players: JSON.stringify(s.players) });
      return { ok: true, server: s };
    },

    leaveServer(id, userId) {
      const s = toServer(GS.get(id));
      if (!s) return;
      s.players = s.players.filter((p) => p !== userId);
      if (s.players.length === 0 && (Date.now() - s.created) > 30000) {
        DS.run(id);
      } else {
        US.run({ id, players: JSON.stringify(s.players) });
      }
    }
  };

  return store.init();
}