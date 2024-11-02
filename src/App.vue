<script setup lang="ts">
import "animate.css"
import Switcher from "./components/Home/Switcher.vue";
import { useDarkStore } from "./state";
import { computed, ref, watch } from "vue";
import { useTheme } from 'vuetify'
import { NBackTop } from 'naive-ui';
import { useRouter } from "vue-router";
const router = useRouter()
const theme = useTheme()

const store = useDarkStore()
const dark = computed(() => store.dark)

watch(() => dark.value, () => {
  theme.global.name.value = dark.value ? 'dark' : 'light'
})
const hide = computed(() => router.currentRoute.value.path === '/')
import Footer from "./App/Footer.vue";




</script>

<template>
  <v-layout :class="store.dark ? 'dark' : ''" class="min-h-screen">
    <v-app-bar scroll-behavior="elevate " density="compact"
      class="animate__animated duration-500 transition-all sm-px-4 lg:px-50">
      <v-app-bar-title class="hover:cursor-point">TJUUS</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn to="/">
        首页
      </v-btn>
      <v-btn to="/news">
        新闻
      </v-btn>
      <v-btn to="/servers">
        服务器列表
      </v-btn>
      <v-btn to="/about">
        关于
      </v-btn>
      <Switcher class="ml-4 sm:mr-4 lg:mr-50" />
    </v-app-bar>
    <v-main class="light:bg-blue50 duration-1000 dark:bg-dark ">
      <RouterView></RouterView>
    </v-main>

    <n-back-top :right="100" />
  </v-layout>
  <Footer />
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
</style>
