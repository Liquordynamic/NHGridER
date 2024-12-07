import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@renderer': path.resolve(__dirname, './src/renderer/src'),
      '@': path.resolve(__dirname, './src')
    }
  }
})
