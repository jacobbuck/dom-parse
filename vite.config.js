import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/browser.js'),
        resolve(__dirname, 'src/node.js'),
      ],
    },
    rollupOptions: {
      external: ['jsdom'],
    },
    sourcemap: true,
  },
});
