import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/",
  preview: {
    port: process.env.APP_PORT || 8080,
    strictPort: true,
  },
  server: {
    port: process.env.APP_PORT || 8080,
    strictPort: true,
    host: true,
    // origin: "http://0.0.0.0:8080",
  }
  
})
