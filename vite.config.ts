import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' is set to './' to support deployment to any path (e.g., user.github.io/repo-name/)
  base: './',
})