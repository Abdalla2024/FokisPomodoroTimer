import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      writeBundle() {
        copyFileSync('404.html', 'dist/404.html')
      }
    }
  ],
  base: '/FokisPomodoroTimer/',
  server: {
    port: 3000
  }
})