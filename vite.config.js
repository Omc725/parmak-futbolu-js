import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// PWA'yı daha sonra tekrar açacağız, şimdilik kapalı kalsın.

export default defineConfig({
  base: '/parmak-futbolu-js/', 
  
  plugins: [
    react(),
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
