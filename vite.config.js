import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  
  base: "/",

  resolve: {
    alias: {
      '@': '/src',
    },
  },

  server: {
    host: '0.0.0.0', // Allows external connections (important for Docker)
    port: 5173,
    watch: {
      usePolling: true, // Needed for hot reload in Docker
    }
  },
})
