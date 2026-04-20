
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Dimora Sorriso Guide',
        short_name: 'Dimora Sorriso',
        description: 'Digital Guide for Dimora Sorriso Guests',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'https://lh3.googleusercontent.com/d/1xYCniCsEfDcyYc5ySJekWiGjRuHE1hLN',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://lh3.googleusercontent.com/d/1xYCniCsEfDcyYc5ySJekWiGjRuHE1hLN',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    host: true
  }
});
