import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { VitePWA } from 'vite-plugin-pwa'; // <-- BU SATIRI YORUM YAPTIK

export default defineConfig({
  // Bu satırın doğruluğundan eminiz, bu kalacak.
  base: '/parmak-futbolu-js/', 
  
  plugins: [
    react(),
    // VitePWA({...}) // <-- TÜM PWA BLOĞUNU YORUM YAPTIK
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
