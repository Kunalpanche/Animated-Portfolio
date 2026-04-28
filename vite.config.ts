import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['e9f4-2409-40c2-113-66a3-bdab-bf7c-f4a7-345.ngrok-free.app'], // must be an array, not string
  },
})