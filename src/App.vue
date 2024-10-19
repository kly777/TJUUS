<script setup lang="ts">
import "animate.css"

</script>

<template>
  <v-layout>
    <v-app-bar density="compact" class="animate__animated animate__fadeInDown">


      <v-app-bar-title>TJUUS的图标</v-app-bar-title>
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
    </v-app-bar>
    <v-main>
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

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
