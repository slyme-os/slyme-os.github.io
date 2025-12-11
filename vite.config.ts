import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: '/', 
    build: {
      outDir: 'dist',
    },
    define: {
      // Polyfill process.env for the browser to prevent crashes
      'process.env': {
        API_KEY: env.API_KEY || ''
      }
    }
  };
});