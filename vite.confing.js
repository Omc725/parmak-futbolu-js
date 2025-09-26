import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  // GitHub Pages için projenin alt dizinini belirtir
  base: '/parmak-futbolu-js/', 
  
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // manifest.json dosyasını ve ikonları otomatik olarak dahil etmesi için 
      // bu bölümü temizleyebilir veya doğru asset'leri ekleyebiliriz.
      // Şimdilik temiz bırakmak en güvenlisi, VitePWA genellikle bunları otomatik bulur.
      // Gerekirse buraya ['favicon.ico', 'apple-touch-icon.png'] gibi dosyalar eklenir.
      includeAssets: ['icon-192.png', 'icon-512.png'], 
      manifest: {
        name: 'Parmak Futbolu',
        short_name: 'Parmak Futbolu',
        description: 'Hızlı tempolu bir langırt oyunu! Takımını seç ve şampiyon ol!',
        theme_color: '#2c3e50',
        background_color: '#2c3e50',
        display: 'standalone',
        start_url: '.',
        icons: [
          {
            "src": "icon-144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "icon-192.png",
            // HATA BURADAYDI, DÜZELTİLDİ
            "sizes": "192x192", 
            "type": "image/png"
          },
          {
            "src": "icon-512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ]
      }
    })
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
