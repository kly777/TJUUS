import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import autoprefixer from "autoprefixer"
import cssnano from "cssnano";
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        cssnano()
      ],
    },
  },
  resolve: {
    // 设置文件./src路径为 @
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ]
  },
  base: "https://kly777.github.io/TJUUS/"
})
