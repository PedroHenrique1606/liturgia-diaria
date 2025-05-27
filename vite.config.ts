import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "robots.txt",
        "apple-touch-icon.png",
        "pwa-icon-192.png",
        "pwa-icon-512.png"
      ],
      manifest: {
        name: "Sacrosanctum",
        short_name: "Sacrosanctum",
        description: "Um espaço sagrado para sua jornada interior.",
        theme_color: "#ffffff",
        background_color: "#0A0B0B",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/pwa-icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-icon-192.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-icon-192.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
