import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: './postcss.config.cjs',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // '@' points to the 'src' directory
    },
  },
});
