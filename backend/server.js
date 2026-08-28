// server.js — Fun Blader Arena backend (auth, profiles, online servers)
import http from 'node:http';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { WebSocketServer } from 'ws';
import { openStore } from './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = Number(process.env.PORT) || 8080;
const JWT_SECRET = process.env.JWT_SECRET || 'fun-blader-dev-secret';
const FRONTEND_DIR = process.env.FRONTEND_DIR
  ? path.resolve(process.env.FRONTEND_DIR)
  : path.resolve(__dirname, '../dist');

const store = openStore();

/* ---------------------------------------------------------------- */
/* Auth helpers                                                        */
/* ---------------------------------------------------------------- */
function sha(payload) {
  return crypto.createHash('sha256').update(payload).digest('hex');
}
function hashPass(pw, salt) {
  return sha(`${salt}::${pw}`);
}
function makeToken(user) {
  const body = `${user.id}.${Date.now()}`;
  const sig = sha(`${JWT_SECRET}::${body}`);
  return `${body}.${sig}`;
}
function parseToken(token) {
  if (!token) return null;
  const parts = String(token).split('.');
  if (parts.length !== 3) return null;
  const body = `${parts[0]}.${parts[1]}`;
  const sig = sha(`${JWT_SECRET}::${body}`);
  if (sig !== parts[2]) return null;
  return parts[0].split('.')[0];
}
function requireAuth(req, res, next) {
  const h = req.headers.authorization || '';
  const token = h.startsWith('Bearer ') ? h.slice(7) : null;
  const id = parseToken(token);
  const user = id && store.getUserById(id);
  if (!user) return res.status(401).json({ ok: false, err: 'unauthorized' });
  req.user = user;
  next();
}
const publicUser = (u) => ({
  id: u.id, username: u.username, coins: u.coins, diamonds: u.diamonds, skins: u.skins,
  winsG: u.winsG || 0, winsS: u.winsS || 0, winsB: u.winsB || 0
});

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

/* ---------------- Health ---------------- */
app.get('/api/health', (req, res) => {
  res.json({ ok: true, db: store.ready() ? 'ok' : 'down', time: Date.now() });
});

/* ---------------- Auth ---------------- */
app.post('/api/auth/register', (req, res) => {
  const username = String(req.body?.username || '').trim();
  const password = String(req.body?.password || '');
  if (!/^[A-Za-z0-9_]{3,16}$/.test(username)) {
    return res.status(400).json({ ok: false, err: 'Username must be 3-16 letters/numbers/underscore.' });
  }
  if (password.length < 4) {
    return res.status(400).json({ ok: false, err: 'Password must be at least 4 characters.' });
  }
  const salt = crypto.randomBytes(8).toString('hex');
  const r = store.createUser({ username, passHash: hashPass(password, salt) + '.' + salt });
  if (!r.ok) return res.status(409).json({ ok: false, err: 'Username already taken.' });
  const token = makeToken(r.user);
  res.json({ ok: true, token, profile: publicUser(r.user) });
});

app.post('/api/auth/login', (req, res) => {
  const username = String(req.body?.username || '').trim();
  const password = String(req.body?.password || '');
  const u = store.findUser(username);
  if (!u) return res.status(401).json({ ok: false, err: 'Invalid username or password.' });
  const [hash, salt] = String(u.passHash).split('.');
  if (hashPass(password, salt || '') !== hash) {
    return res.status(401).json({ ok: false, err: 'Invalid username or password.' });
  }
  res.json({ ok: true, token: makeToken(u), profile: publicUser(u) });
});

app.get('/api/me', requireAuth, (req, res) => {
  res.json({ ok: true, profile: publicUser(req.user) });
});

/* ---------------- Profile sync ---------------- */
app.post('/api/me/push', requireAuth, (req, res) => {
  const patch = req.body || {};
  const num = (v) => (typeof v === 'number' ? Math.max(0, Math.round(v)) : undefined);
  const nxt = store.updateUser(req.user.id, {
    coins: num(patch.coins),
    diamonds: num(patch.diamonds),
    skins: Array.isArray(patch.skins) ? patch.skins : undefined,
    winsG: num(patch.winsG),
    winsS: num(patch.winsS),
    winsB: num(patch.winsB)
  });
  res.json({ ok: true, profile: publicUser(nxt) });
});

app.post('/api/me/skin', requireAuth, (req, res) => {
  const user = store.addSkin(req.user.id, String(req.body?.skin || ''));
  if (!user) return res.status(404).json({ ok: false, err: 'user missing' });
  res.json({ ok: true, profile: publicUser(user) });
});

/* ---------------- Online servers (lobby) ---------------- */
app.get('/api/servers', (req, res) => {
  res.json({ ok: true, servers: store.listServers() });
});

app.post('/api/servers', requireAuth, (req, res) => {
  const s = store.createServer(req.user.id, req.body?.name, {
    password: req.body?.password || null,
    map: req.body?.map || 'citadel',
    capacity: req.body?.capacity,
    bots: req.body?.bots
  });
  res.json({ ok: true, server: { id: s.id, name: s.name, hostId: s.hostId, hostName: req.user.username, map: s.map, capacity: s.capacity, bots: s.bots, hasPassword: !!s.password } });
});

app.post('/api/servers/:id/join', requireAuth, (req, res) => {
  const r = store.joinServer(req.params.id, req.user.id, String(req.body?.password || '').trim() || null);
  if (!r.ok) {
    const msg = r.err === 'pass' ? 'Wrong passcode.' : 'Server not found.';
    return res.status(400).json({ ok: false, err: msg });
  }
  const s = r.server;
  const host = store.getUserById && store.getUserById(s.hostId);
  res.json({ ok: true, server: { id: s.id, name: s.name, hostId: s.hostId, hostName: host ? host.username : s.hostId, map: s.map, capacity: s.capacity, bots: s.bots, playerCount: s.players.length, hasPassword: !!s.password } });
});

app.post('/api/servers/:id/leave', requireAuth, (req, res) => {
  store.leaveServer(req.params.id, req.user.id);
  res.json({ ok: true });
});

/* ---------------- Static frontend (optional) ---------------- */
if (process.env.SERVE_FRONTEND !== '0') {
  const fs = await import('node:fs');
  if (fs.existsSync(path.join(FRONTEND_DIR, 'index.html'))) {
    app.use(express.static(FRONTEND_DIR));
    app.get('*', (req, res) => res.sendFile(path.join(FRONTEND_DIR, 'index.html')));
    console.log('[frontend] serving built frontend from', FRONTEND_DIR);
  } else {
    console.log('[frontend] no built frontend found (dist/ missing) — API only');
  }
}

/* ---------------- HTTP + WebSocket ---------------- */
const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });

const rooms = new Map(); // serverId -> Set(ws)
const roomsMeta = new Map(); // serverId -> Map(ws -> {id,name,skin,map})
const wsUser = new WeakMap();
const wsRoom = new WeakMap();

function roomPush(roomId, msg) {
  const room = rooms.get(roomId);
  if (!room) return;
  const data = JSON.stringify(msg);
  for (const ws of room) if (ws.readyState === 1) ws.send(data);
}

function roomRoster(roomId) {
  const meta = roomsMeta.get(roomId);
  if (!meta) return [];
  return [...meta.values()].map((u) => ({ id: u.id, name: u.name, skin: u.skin || 'knight', map: u.map }));
}

// The oldest member of the room (Map preserves insertion order) is the host.
// The host's client is the single authority that simulates and broadcasts bots,
// so every client sees the exact same bots (no duplicates, no invisible damage).
function hostOf(roomId) {
  const meta = roomsMeta.get(roomId);
  if (!meta || meta.size === 0) return null;
  return meta.values().next().value || null;
}

wss.on('connection', (ws, req) => {
  const url = new URL(req.url, 'http://x');
  const uid = parseToken(url.searchParams.get('token') || '');
  const roomId = url.searchParams.get('server') || '';
  const user = uid && store.getUserById(uid);
  if (!user) { ws.close(4001, 'unauthorized'); return; }
  if (!roomId) { ws.close(4002, 'no-server'); return; }

  const myId = user.id;
  wsUser.set(ws, user);
  wsRoom.set(ws, roomId);

  let room = rooms.get(roomId);
  if (!room) { room = new Set(); rooms.set(roomId, room); }
  let meta = roomsMeta.get(roomId);
  if (!meta) { meta = new Map(); roomsMeta.set(roomId, meta); }
  const myMeta = { id: myId, name: user.username, skin: 'knight', map: 'citadel' };
  meta.set(ws, myMeta);
  room.add(ws);

  ws.send(JSON.stringify({ t: 'welcome', id: myId, roomId, hostId: (hostOf(roomId) || myMeta).id }));
  ws.send(JSON.stringify({ t: 'hello-req' }));

  ws.on('message', (raw) => {
    let m; try { m = JSON.parse(raw); } catch { return; }
    if (!m || !m.t) return;
    if (m.t === 'ping') { ws.send(JSON.stringify({ t: 'pong' })); return; }
    if (m.t === 'hello') {
      const sender = wsUser.get(ws);
      myMeta.name = sender?.username || myMeta.name;
      if (typeof m.name === 'string' && m.name) myMeta.name = m.name.slice(0, 16);
      if (typeof m.skin === 'string') myMeta.skin = m.skin;
      if (typeof m.map === 'string') myMeta.map = m.map;
      // tell joiner the current roster (and who hosts the bots)
      ws.send(JSON.stringify({ t: 'roster', peers: roomRoster(roomId), hostId: (hostOf(roomId) || myMeta).id }));
      // tell existing members a player joined (exclude self)
      roomPush(roomId, { t: 'player-joined', peer: { id: myId, name: myMeta.name, skin: myMeta.skin, map: myMeta.map }, fromId: myId });
      return;
    }
    const sender = wsUser.get(ws);
    // Only the current host may kick — used by the play-again vote to remove
    // players who didn't agree. Kicked sockets get code 4003.
    if (m.t === 'kick' && Array.isArray(m.ids)) {
      const host = hostOf(roomId);
      if (host && sender && host.id === sender.id) {
        const meta2 = roomsMeta.get(roomId);
        if (meta2) {
          for (const [sock, mm] of [...meta2]) {
            if (mm && m.ids.includes(mm.id)) { try { sock.close(4003, 'kicked'); } catch { /* ignore */ } }
          }
        }
      }
      return;
    }
    roomPush(roomId, { ...m, from: sender?.username, fromId: sender?.id });
  });

  ws.on('close', () => {
    const peer = meta.get(ws);
    const wasHost = !!(peer && hostOf(roomId) && hostOf(roomId).id === peer.id);
    meta.delete(ws);
    room.delete(ws);
    if (room.size === 0) { rooms.delete(roomId); roomsMeta.delete(roomId); }
    else if (wasHost) {
      // Re-elect the next-oldest member and tell everyone so bot authority moves over.
      const nh = hostOf(roomId);
      if (nh) roomPush(roomId, { t: 'host', id: nh.id });
    }
    if (peer) roomPush(roomId, { t: 'player-left', id: peer.id });
    store.leaveServer(roomId, user.id);
  });
});

server.listen(PORT, () => {
  console.log(`[fun-blader] backend listening on :${PORT}  (ws /ws)`);
  console.log(`[db] store ready:`, store.ready() ? 'yes' : 'no');
});