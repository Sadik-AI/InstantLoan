import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const frontendRoot = path.resolve(__dirname, 'frontend');
const frontendSrc = path.resolve(frontendRoot, 'src');

export default defineConfig({
  root: frontendRoot,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': frontendSrc,
    },
  },
  server: {
    // Proxy API calls locally so the booking form can talk to Express without CORS issues.
    proxy: {
      '/api': 'http://localhost:5000',
    },
    hmr: process.env.DISABLE_HMR !== 'true',
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
});
