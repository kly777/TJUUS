import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import UnoCSS from "unocss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import sitemapPlugin from "vite-plugin-sitemap";
import compression from "vite-plugin-compression";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    ViteImageOptimizer(),
    sitemapPlugin(),
    compression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  css: {},
  resolve: {
    // 设置文件./src路径为 @
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
  },
  base: "/TJUUS/",
  server: {
    host: "0.0.0.0",
  },
});
