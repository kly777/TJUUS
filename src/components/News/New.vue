<template>
    <div class="cursor-pointer" @click="handleClick">
        <div v-html="result" class="content m-6 .dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"></div>
    </div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it';
import { useRouter } from 'vue-router';

const router = useRouter();
const md = MarkdownIt()

const props = defineProps<{
    title: string
    content: string
}>()
const result = md.render(props.content);

function handleClick() {
    router.push({ name: 'NewsDetail', params: { id: props.title } });
}
</script>

<style scoped lang="less">
.content {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #eaeaea;
    max-height: 15em; /* 6行 * 1.5em 行高 */
    overflow: hidden;
    position: relative;
}

.content::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1.5em;
    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1) 75%);
}

.dark .content::after {
    background: linear-gradient(to bottom, rgba(17,17,17,0), rgba(17,17,17,1) 75%);
}
</style>
