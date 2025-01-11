<template>
    <div class="sm:mx-10 lg:mx-30 mt-8 mx">
        <header class="text-3xl font-bold dark:text-white">{{ title }}</header>
        <n-divider />
        <div class="markdown-body" v-html="renderedContent"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { NDivider } from 'naive-ui';
import MarkdownIt from 'markdown-it';
import { useRoute } from 'vue-router';

const route = useRoute();
const title = ref('');
const renderedContent = ref('');

const md = new MarkdownIt();

onMounted(async () => {
    const fileName = route.params.id as string;
    title.value = fileName;

    try {
        // 确保 content.default 是一个字符串
        const content = await import(`@/assets/News/${fileName}.md?raw`);
        const rawContent = content.default; // 解析 Promise
        renderedContent.value = md.render(rawContent);
    } catch (error) {
        console.error('Error loading markdown:', error);
        renderedContent.value = 'Error loading content';
    }
});
</script>

<style scoped>
.markdown-body {
}
</style>