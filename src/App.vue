<script setup lang="ts">
import "animate.css";
import Switcher from "./App/Switcher.vue";
import { useDarkStore } from "./state";
import { computed } from "vue";
import { NBackTop, NLayout, NLayoutHeader, NLayoutContent, NButton, NSpace,NConfigProvider,NLayoutFooter } from 'naive-ui';
import { useRouter } from "vue-router";
import Footer from "./App/Footer.vue";

const router = useRouter();
const store = useDarkStore();
const dark = computed(() => store.dark ? darkTheme : null);
const hide = computed(() => router.currentRoute.value.path === '/');
import type { GlobalTheme } from 'naive-ui'
import { darkTheme } from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="dark" class="">
    <n-layout :class="store.dark ? 'dark' : ''" class="min-h-screen">
      <n-layout-header class="animate__animated animate__fadeInDown duration-500 transition-all sm-px-4 md-px-20 lg-px-30 px h-12 header fixed z-1"
        :bordered="true" position="static">
        <n-space align="center" justify="space-between" class="h-full">
          <span class="text-lg font-bold">TJUUS</span>
          <n-space align="center">
            <router-link to="/" class="mx-1 text-button">
              首页
            </router-link>
            <router-link to="/news" class="mx-1 text-button">
              文章
            </router-link>
            <router-link to="/servers" class="mx-1 text-button">
              服务器列表
            </router-link>
            <router-link to="/about" class="mx-1 text-button">
              关于
            </router-link>
            <Switcher class="ml-4 sm:mr-4 lg:mr-4" />
          </n-space>
        </n-space>
      </n-layout-header>
      <n-layout-content class="light:bg-blue50 duration-1000 dark:bg-dark">
        <RouterView></RouterView>
      </n-layout-content>
      <n-back-top :right="100" />
    </n-layout>
    <Footer />
  </n-config-provider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.main {
  background-color: #f3fafe;
  min-height: 100vh;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.text-button {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  cursor: pointer;
}

.text-button:hover {
  text-decoration: underline;
}
</style>