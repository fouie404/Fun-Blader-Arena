import { defineConfig } from 'vite';
import { WebSocketServer } from 'ws';

function lanMultiplayer() {
  const clients = new Set();

  function broadcast(msg, except) {
    const data = JSON.stringify(msg);
    for (const c of clients) {
      if (c !== except && c.readyState === 1) {
        try { c.send(data); } catch (e) { /* ignore */ }
      }
    }
  }

  return {
    name: 'lan-multiplayer',
    configureServer(server) {
      const wss = new WebSocketServer({ noServer: true });

      wss.on('connection', (socket) => {
        socket.isAlive = true;
        socket.on('pong', () => { socket.isAlive = true; });

        const id = 'p' + Math.random().toString(36).slice(2, 8);
        socket.playerId = id;
        clients.add(socket);

        const others = [...clients]
          .filter((c) => c !== socket && c.playerId)
          .map((c) => c.playerId);
        try {
          socket.send(JSON.stringify({ t: 'welcome', id, others }));
        } catch (e) { /* ignore */ }
        broadcast({ t: 'player-joined', id }, socket);

        socket.on('message', (data) => {
          let msg;
          try { msg = JSON.parse(data); } catch (e) { return; }
          if (!msg || typeof msg !== 'object') return;
          broadcast(msg, socket);
        });

        socket.on('close', () => {
          clients.delete(socket);
          broadcast({ t: 'player-left', id });
        });
        socket.on('error', () => { /* handled by close */ });
      });

      const iv = setInterval(() => {
        for (const c of clients) {
          if (c.isAlive === false) {
            try { c.terminate(); } catch (e) { /* ignore */ }
            clients.delete(c);
            continue;
          }
          c.isAlive = false;
          try { c.ping(); } catch (e) { /* ignore */ }
        }
      }, 15000);

      if (server.httpServer) {
        server.httpServer.on('upgrade', (req, sock, head) => {
          if (req.url === '/game-ws') {
            wss.handleUpgrade(req, sock, head, (ws) => {
              wss.emit('connection', ws, req);
            });
          }
        });
        server.httpServer.on('close', () => clearInterval(iv));
      }

      console.log('[LAN] Multiplayer websocket ready at /game-ws');
    }
  };
}

export default defineConfig({
  base: './',
  server: { host: true, port: 5173 },
  plugins: [lanMultiplayer()],
  build: { chunkSizeWarningLimit: 1000 }
});
