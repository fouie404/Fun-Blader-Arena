# Fun Blader Arena — Backend

Express + SQLite (`better-sqlite3`) + `ws` backend for the online arena lobbies.
**There are no accounts.** A player's name, coins, diamonds, skins and wins live only in the
player's browser localStorage. The backend hands out an anonymous *guest session* token so the
browser can create/join servers and open the websocket — unauthenticated progress is never stored
server-side. It degrades gracefully: if the SQLite native module is missing it falls back to an
in-memory store, and the frontend keeps running fully offline if every backend request fails.

## Run (local)
```bash
cd backend
npm install
npm start          # http server on :8080, ws on /ws
```

Env vars:
- `PORT`               — server port (default 8080)
- `DB_FILE`            — sqlite file path (default `./data.sqlite`)
- `JWT_SECRET`         — change in production
- `CORS_ORIGIN`        — allow-list for the frontend origin (default `*`)
- `SERVE_FRONTEND`     — set `0` to disable serving `../dist`
- `FRONTEND_DIR`       — path to a built frontend to serve (default `../dist`)

## Endpoints
- `GET  /api/health`                            — health check
- `POST /api/session`  { name? }                → anonymous guest token + profile (no accounts)
- `GET  /api/session`                           (Bearer) validate/reuse the stored guest session
- `GET  /api/servers`                            — open server list
- `POST /api/servers`  { name, map?, capacity?, bots?, password? }   (Bearer, create)
  - `map` — any theme id (`citadel`, `moonlight`, `ember`, `frost`, `golden`, `temple`, `catacombs`, `cove`, `caverns`, `neon`)
  - `capacity` — player/bot limit, 2–15 (default 8)
  - `bots` — bots at start; they fill the player slots, so they clamp to `capacity`
  - `password` — set it to make the server **private** (passcode required to join)
- `POST /api/servers/:id/join`  { password? }    (Bearer)
  - private servers must match their passcode; servers are **never rejected as full** —
    a joining player takes a bot's slot (the room host's client swaps the bot out)
- `POST /api/servers/:id/leave`                  (Bearer)

### Slots, bots & secret pros
`capacity` is the total player/bot limit. The host's client spawns the configured bots the
moment the server is created, so the arena starts full. When a real player joins a full arena
the lowest-scoring bot gives up its slot ("…has left the server"); when a player leaves, bots
refill the freed slot. On **public** servers, up to 5 secret PRO fighters join individually
over time while a free slot remains. **Private** servers never get secret pros.

### No accounts — progress stays local
Name, coins, diamonds, unlocked skins (`winsG`/`winsS`/`winsB` placements) and redeemed codes are
kept purely in each browser's localStorage (`fba-*` keys). The backend never stores or syncs them;
guest session rows exist only so the websocket lobby can identify a connection.

### Play-again vote
At match end the room host runs a 15 s play-again vote over the WS (`vote-open`, `vote` tally,
`voteclose`). Humans and bots both vote; if everyone agrees the round restarts instantly.
When the timer runs out, everyone who agreed replays and the host `kick`s the rest — the
backend closes those sockets with code **4003** (only the current host may kick).

## Real-time
- `ws://host/ws?token=<jwt>&server=<serverId>` — join a server room
  - protocol messages: `welcome`, `roster`, `host`, `state`, `attack`, `hit`, `player-joined`, `player-left`, `bots`, `bstates`, `botattack`, `ping/pong`
  - the backend relays messages to everyone in that room
  - **Host-authoritative bots:** the oldest room member is the host (`welcome`/`roster` carry `hostId`; a `host` message announces re-election when the host leaves). Only the host's client simulates bots and broadcasts `bots` (snapshot), `bstates` (10 Hz state batch) and `botattack`; every other client renders those bots and simulates none — no duplicate bots, no invisible-bot damage.

## Deploy

Works on any Node host that allows **long-running processes + WebSockets** (Render, Koyeb,
Fly.io, a VPS). NOT compatible with serverless-only hosts (Vercel/Netlify functions) because
the `ws` relay needs a persistent socket. Frontend stays on Vercel; set `VITE_API_URL` to this
backend's https URL and redeploy, and the game will gracefully fall back to offline play if
this backend is down or sleeping.

### Render (free, easiest)
1. Push this repo to GitHub.
2. render.com → **New → Web Service** → connect the repo.
3. Settings:
   - **Root Directory:** `backend`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Instance Type:** Free
   - **Health Check Path:** `/api/health`
4. Environment:
   - `JWT_SECRET` = any long random string
   - `SERVE_FRONTEND` = `0`
   - `CORS_ORIGIN` = `https://your-app.vercel.app` (optional; default `*` also works)
5. Deploy → you get `https://<name>.onrender.com` (HTTPS + WebSockets included).
6. On Vercel: Project → Settings → Environment Variables → add
   `VITE_API_URL = https://<name>.onrender.com` → **redeploy** the frontend.

Free-tier caveats on Render:
- Sleeps after ~15 min with no inbound traffic; first player after a nap waits ~30-60s.
  Keep it awake with a free cron pinger (cron-job.org / UptimeRobot) hitting
  `https://<name>.onrender.com/api/health` every 10 min.
- **Disk is ephemeral:** `data.sqlite` is wiped on every deploy/restart, so accounts reset.
  Fine to start; for durable accounts swap `db.js` to a free Postgres (Neon/Supabase) —
  the store interface was designed for exactly that swap.

### Oracle Cloud "Always Free" VPS (truly free forever, no sleep, persistent disk)
Best long-term home for a persistent WebSocket game server (up to 4 ARM cores / 24 GB RAM).
Needs a credit card for verification, and **HTTPS** (your Vercel page is https, so the API
must be too — use a domain + free Caddy/Let's Encrypt, or Cloudflare proxy).
1. Create an Always Free VM (Ubuntu 22.04, Ampere A1).
2. Open TCP 443/80 in the VCN security list + `sudo iptables` allow rules.
3. `curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt install -y nodejs git caddy`
4. Clone repo, `cd backend && npm install && npm i -g pm2 && pm2 start server.js --name fba && pm2 save && pm2 startup`
5. Caddyfile: `api.yourdomain.com { reverse_proxy localhost:8080 }` → automatic Let's Encrypt TLS (proxies both REST and WS).
6. Vercel: `VITE_API_URL = https://api.yourdomain.com` → redeploy.

### Free-tier landscape (2026, honest version)
| Host | Free? | WebSockets | Sleeps | Persistent disk |
|---|---|---|---|---|
| Render | ✅ 1 service | ✅ | ✅ after 15 min | ❌ (SQLite wiped) |
| Koyeb | ✅ 1 service | ✅ | ✅ scale-to-zero | ❌ |
| Railway | ❌ (trial credit only) | ✅ | ✅ | ✅ paid |
| Fly.io | ❌ pay-as-you-go | ✅ | optional | ✅ paid volume |
| Oracle Always Free | ✅ forever | ✅ | ❌ never | ✅ |
| Vercel/Netlify | ✅ | ❌ no ws server | n/a | ❌ |

> To migrate to MySQL/Postgres later, implement the same `db.js` interface (the store
> methods) against that driver and swap it in `openStore()`.