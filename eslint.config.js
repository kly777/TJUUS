import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

export default defineConfig([
  // 全局配置
  {
    ignores: ["dist/**/*"],
    languageOptions: {
      globals: {
        browser: "readonly",
        document: "readonly",
        window: "readonly",
        console: "readonly",
        storage: "readonly",
        defineBackground: "readonly",
        defineContentScript: "readonly",
        fetch: "readonly",
        atob: "readonly",
        onUnmounted: "readonly",
        createApp: "readonly",
        getComputedStyle: "readonly"
      }
    },
    plugins: {
      js,
      "@typescript-eslint": ts,
      vue
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      ...ts.configs["recommended"].rules,
      ...ts.configs["eslint-recommended"].rules,
      ...vue.configs['flat/recommended'].rules
    }
  },
  // TypeScript特定配置
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    }
  },
  // Vue特定配置
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        project: './tsconfig.json'
      }
    }
  }
]);
