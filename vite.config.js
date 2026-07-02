import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "mobiletop",
        short_name: "mt",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pws.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa.png",
            sizes: "512x512"
          }
        ]
      }
    })
  ],
})

