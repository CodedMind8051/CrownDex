import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,                             // listen on all interfaces
    port: Number(process.env.PORT) || 5173, // use Render's port or default
    allowedHosts: 'all',                    // allow all hosts (for dev only)
    strictPort: true,                       // fail if port is taken
    watch: {
      usePolling: true,                     // for file watching reliability
    },
    hmr: {
      host: 'crowndex-2.onrender.com',     // your Render domain for hot reload
    },
    fs: {
      strict: false,                        // allow serving files outside root (optional)
    },
  },
})
