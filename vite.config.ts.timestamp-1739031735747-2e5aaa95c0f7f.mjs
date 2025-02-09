// vite.config.ts
import { defineConfig } from "file:///D:/projects/TJUUS/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/projects/TJUUS/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import autoprefixer from "file:///D:/projects/TJUUS/node_modules/autoprefixer/lib/autoprefixer.js";
import cssnano from "file:///D:/projects/TJUUS/node_modules/cssnano/src/index.js";
import UnoCSS from "file:///D:/projects/TJUUS/node_modules/unocss/dist/vite.mjs";
var __vite_injected_original_dirname = "D:\\projects\\TJUUS";
var vite_config_default = defineConfig({
  plugins: [vue(), UnoCSS()],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        cssnano()
      ]
    }
  },
  resolve: {
    // 设置文件./src路径为 @
    alias: [
      {
        find: "@",
        replacement: resolve(__vite_injected_original_dirname, "./src")
      }
    ]
  },
  base: "https://kly777.github.io/TJUUS/",
  server: {
    host: "0.0.0.0"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxUSlVVU1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdHNcXFxcVEpVVVNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3RzL1RKVVVTL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiXHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSBcImF1dG9wcmVmaXhlclwiXHJcbmltcG9ydCBjc3NuYW5vIGZyb20gXCJjc3NuYW5vXCI7XHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFt2dWUoKSwgVW5vQ1NTKCldLFxyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgYXV0b3ByZWZpeGVyKCksXHJcbiAgICAgICAgY3NzbmFubygpXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgLy8gXHU4QkJFXHU3RjZFXHU2NTg3XHU0RUY2Li9zcmNcdThERUZcdTVGODRcdTRFM0EgQFxyXG4gICAgYWxpYXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGZpbmQ6ICdAJyxcclxuICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIGJhc2U6IFwiaHR0cHM6Ly9rbHk3NzcuZ2l0aHViLmlvL1RKVVVTL1wiLFxyXG4gIHNlcnZlcjp7XHJcbiAgICBob3N0OlwiMC4wLjAuMFwiXHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJPLFNBQVMsb0JBQW9CO0FBQ3hRLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sWUFBWTtBQUxuQixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUFBLEVBQ3pCLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLGFBQWE7QUFBQSxRQUNiLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQTtBQUFBLElBRVAsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDekM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sUUFBTztBQUFBLElBQ0wsTUFBSztBQUFBLEVBQ1A7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
