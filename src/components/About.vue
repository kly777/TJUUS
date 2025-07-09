<script setup lang="ts">
import about from './About/about.md?raw'
import markdownit from 'markdown-it'
const md = markdownit()
const result = md.render(about);
</script>



<template>
  <div class="container sm:mx-10 lg:mx-30 mt-8">
    <div v-html="result" class="content .dark:text-white">
    </div>
  </div>
</template>



<style scoped>
.content {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
  height: 100%;
}
</style>