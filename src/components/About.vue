<script setup lang="ts">
import markdownit from 'markdown-it'
const md = markdownit()
const result = md.render('# This is a heading.\nTesting markdown-it!'

);

</script>

<template>
    <div class="container">
        <div v-html="result">
        </div>
    </div>
</template>

<style scoped>
.container {
    padding:20px;
    width: 100%;
    border: 1px solid #a13b3b;
}

</style>