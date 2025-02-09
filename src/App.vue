<script setup lang="ts">
import "animate.css";
import Switcher from "./App/Switcher.vue";
import { useDarkStore } from "./state";

import { NBackTop, NLayout, NLayoutHeader, NLayoutContent, NButton, NSpace, NConfigProvider, NLayoutFooter } from 'naive-ui';
import { useRouter } from "vue-router";
import Footer from "./App/Footer.vue";

import type { GlobalTheme } from 'naive-ui'
import { darkTheme } from 'naive-ui'

import type { DropdownOption } from 'naive-ui'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { NDropdown,NIcon } from 'naive-ui';
import { MenuOutlined } from '@vicons/material'
const router = useRouter();
const store = useDarkStore();
const dark = computed(() => store.dark ? darkTheme : null);
const hide = computed(() => router.currentRoute.value.path === '/');
// 响应式窗口宽度检测
const isMobile = ref(false);
const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener('resize', updateIsMobile);
  updateIsMobile();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile);
});

// 下拉菜单选项
const menuOptions: DropdownOption[] = [
  {
    label: '首页',
    key: '/',
  },
  {
    label: '文章',
    key: '/news',
  },
  {
    label: '服务器列表',
    key: '/servers',
  },
  {
    label: '关于',
    key: '/about',
  }
];

const handleMenuSelect = (key: string) => {
  router.push(key);
};
</script>

<template>
  <n-config-provider :theme="dark" class="">
    <n-layout :class="store.dark ? 'dark' : ''" class="min-h-screen">
      <n-layout-header
        class="animate__animated animate__fadeInDown duration-500 transition-all sm-px-4 md-px-20 lg-px-30 px h-12 header fixed z-1"
        :bordered="true" position="static">
        <n-space align="center" justify="space-between" class="h-full">
          <span class="text-lg font-bold">TJUUS</span>
          <n-space align="center">
            <!-- 响应式导航 -->
            <template v-if="!isMobile">
              <router-link to="/" class="mx-1 text-button">
                首页
              </router-link>
              <router-link to="/news" class="mx-1 text-button">
                文章
              </router-link>
              <!-- <router-link to="/servers" class="mx-1 text-button">
                服务器列表
              </router-link> -->
              <router-link to="/about" class="mx-1 text-button">
                关于
              </router-link>
            </template>
            <n-dropdown v-else :options="menuOptions" @select="handleMenuSelect">
              <n-button text>
                <template #icon>
                  <n-icon>
                    <MenuOutlined class="text-2xl" />
                  </n-icon>

                </template>

              </n-button>
            </n-dropdown>
            <Switcher class="ml-4 sm:mr-4 lg:mr-4" />
          </n-space>
        </n-space>
      </n-layout-header>
      <n-layout-content class="light:bg-blue50 duration-1000 dark:bg-dark min-h-screen">
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