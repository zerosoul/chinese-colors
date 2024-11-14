import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pkg from './package.json';
// https://vitejs.dev/config/
export default defineConfig({
  base: new URL(pkg.homepage).pathname,
  preview: {
    port: 3000,
    host: true,
  },
  server: {
    port: 3006,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  plugins: [react()],
});
