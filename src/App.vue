<script setup lang="ts">
import "animate.css"
import Switcher from "./components/Home/Switcher.vue";
import { useDarkStore } from "./state";
import { computed, watch } from "vue";
import { useTheme } from 'vuetify'

const theme = useTheme()

const store = useDarkStore()
const dark = computed(() => store.dark)

watch(() => dark.value, () => {
  theme.global.name.value = dark.value ? 'dark' : 'light'
})
</script>

<template>
  <v-layout :class="store.dark ? 'dark' : ''">
    <v-app-bar scroll-behavior="hide elevate inverted" density="compact" class="animate__animated">
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
      <Switcher class="ml-4 mr-4" />
    </v-app-bar>
    <v-main class="bg-blue50 dark:bg-gray900 duration-1000">
      <RouterView></RouterView>
    </v-main>
  </v-layout>
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
