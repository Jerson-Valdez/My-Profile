import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: ['logo.svg', 'apple-touch-icon.png'], 
      manifest: {
        name: 'Jerson Valdez Portfolio',
        short_name: 'Jerson V.',
        description: 'Portfolio of Jerson Valdez - Web Developer',
        theme_color: '#000000',
        background_color: '#000000', // match theme_color
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
        icons: [
            {
                src: 'logo192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: 'logo512.png', 
                sizes: '512x512',
                type: 'image/png'
            },
            {
                src: 'logo512.png', 
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: 'logo512.png', 
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            }
        ],
      },
      workbox: {
        // Increase limit to 5MB (default is 2MB)
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      } 
    })
  ],
})