import { resolve } from 'path';
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
      external: ['happy-dom'],
    },
    sourcemap: true,
  },
});
