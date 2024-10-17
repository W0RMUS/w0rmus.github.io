import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [react(), reactRefresh()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
        entryFileNames: 'index.js' // This will output the entry chunk as index.js
      }
    }
  }
});
