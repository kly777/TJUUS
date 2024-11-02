<script setup lang="ts">
import about from './about.md?raw'
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
.container {
    padding:20px;
    width: 100%;
    height: 100%;
}

</style>