<script setup lang="ts">
import "animate.css";
import Switcher from "./App/Switcher.vue";
import { useDarkStore } from "./state";

import { NBackTop, NLayout, NLayoutHeader, NLayoutContent, NButton, NSpace, NConfigProvider } from 'naive-ui';
import { useRouter } from "vue-router";
import Footer from "./App/Footer.vue";

import { darkTheme } from 'naive-ui'

import type { DropdownOption } from 'naive-ui'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { NDropdown, NIcon } from 'naive-ui';
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
        class="duration-500 transition-all sm-px-4 md-px-20 lg-px-30 px h-12 header fixed z-2 bg-op-60 bg-white dark:bg-dark-600 backdrop-blur-md"
        :bordered="true" position="static">
        <n-space align="center" justify="space-between" class="h-full">
          <router-link to="/" class="text-icon ">
            <span class="text-lg font-bold text-center flex items-center">
              <img class="h-9 p-r logo" src="/logo.png" />
              TJUUS
            </span>
          </router-link>
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
      <n-layout-content class="light:bg-blue50 duration-1000 dark:bg-dark min-h-screen" :class="store.dark ? '' : 'bg-gradient'">
        <RouterView></RouterView>
      </n-layout-content>
      
    </n-layout>
    <Footer />
    <n-back-top :show-on-offset="300" class="z-2"/>
  </n-config-provider>
</template>

<style scoped>
.logo {

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

.text-button,
.text-icon {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  cursor: pointer;
}

.text-button:hover {
  text-decoration: underline;
}

.bg-gradient {
  background-attachment: fixed;
  background-size:
      130vmax 130vmax,
      80vmax 80vmax,
      90vmax 90vmax,
      110vmax 110vmax,
      90vmax 90vmax;
    background-position:
      -80vmax -80vmax,
      60vmax -30vmax,
      10vmax 10vmax,
      -30vmax -10vmax,
      50vmax 50vmax;
    background-repeat: no-repeat;
    animation: 10s movement linear infinite;
  background-image:
      radial-gradient(closest-side, rgba(235, 104, 78, 0.25), rgba(235, 105, 78, 0)),
      radial-gradient(closest-side, rgba(11, 57, 243, 0.25), rgba(11, 154, 243, 0)),
      radial-gradient(closest-side, rgba(247, 224, 110, 0.25), rgba(254, 234, 131, 0)),
      radial-gradient(closest-side, rgba(170, 142, 245, 0.25), rgba(170, 142, 245, 0)),
      radial-gradient(closest-side, rgba(199, 251, 255, 0.25), rgba(147, 171, 248, 0));

}



@keyframes movement {

  0%,
  100% {
    background-size:
      130vmax 130vmax,
      80vmax 80vmax,
      90vmax 90vmax,
      110vmax 110vmax,
      90vmax 90vmax;
    background-position:
      -80vmax -80vmax,
      60vmax -30vmax,
      10vmax 10vmax,
      -30vmax -10vmax,
      50vmax 50vmax;
  }

  25% {
    background-size:
      100vmax 100vmax,
      90vmax 90vmax,
      100vmax 100vmax,
      90vmax 90vmax,
      60vmax 60vmax;
    background-position:
      -60vmax -90vmax,
      50vmax -40vmax,
      0vmax -20vmax,
      -40vmax -20vmax,
      40vmax 60vmax;
  }

  50% {
    background-size:
      80vmax 80vmax,
      110vmax 110vmax,
      80vmax 80vmax,
      60vmax 60vmax,
      80vmax 80vmax;
    background-position:
      -50vmax -70vmax,
      40vmax -30vmax,
      10vmax 0vmax,
      20vmax 10vmax,
      30vmax 70vmax;
  }

  75% {
    background-size:
      90vmax 90vmax,
      90vmax 90vmax,
      100vmax 100vmax,
      90vmax 90vmax,
      70vmax 70vmax;
    background-position:
      -50vmax -40vmax,
      50vmax -30vmax,
      20vmax 0vmax,
      -10vmax 10vmax,
      40vmax 60vmax;
  }
}
</style>