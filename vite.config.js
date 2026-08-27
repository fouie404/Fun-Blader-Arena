import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    host: true,
    port: 5173,
    proxy: {
      // Backend (Express + WS) runs separately; proxy in dev only.
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:8080',
        changeOrigin: true
      },
      '/ws': {
        target: process.env.VITE_API_URL || 'ws://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  },
  build: { chunkSizeWarningLimit: 1000 }
});
