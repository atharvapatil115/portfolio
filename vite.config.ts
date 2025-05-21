import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// vite.config.ts



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base :'/portfolio/',
  
});
