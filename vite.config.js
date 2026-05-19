import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', 
    allowedHosts: true, 
    port: 5173,
    hmr: {
      clientPort: 443 // <--- ADD THIS: Forces Vite's reloader to use the secure tunnel
    }
  }
})