import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: ['dedb-2409-40c2-113-66a3-3082-d59d-db6-e5f1.ngrok-free.app'], // must be an array, not string
  },
})