import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    extensions: [".js", ".ts", ".json", ".vue", ".scss", ".css"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      img: path.resolve(__dirname, "./public/img"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math"; @import "@/assets/scss/variables.scss";`,
      },
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
