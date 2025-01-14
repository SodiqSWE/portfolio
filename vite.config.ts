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
  server: {
    proxy: {
      '/api': {
        target: 'https://api.steampowered.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Remove '/api' prefix
      }
    }
  },
  define: {
    'process.env': {
      // VITE_STEAM_API_KEY: process.env.VITE_STEAM_API_KEY,
      VITE_STEAM_ID: process.env.VITE_STEAM_ID
    },
  },
});
