<template>
    <div class="cursor-pointer content m-6 .dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors "
        @click="handleClick">
        <n-tag type="primary" class="ml-2">
            作者：{{ attributes.author }}
        </n-tag>
        <n-tag type="info" class="ml-2">
            发布于：{{ dayjs(attributes.date, 'Y-M-D').format('YYYY/MM/DD') }}
        </n-tag>

        <div v-html="result" class="content2">
        </div>
    </div>
</template>

<script setup lang="ts">
import { NTag } from 'naive-ui';
import MarkdownIt from 'markdown-it';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const router = useRouter();
const md = MarkdownIt()

const props = defineProps<{
    title: string
    content: string
    attributes: {
        date: string
        tags: string[]
        author: string
    }
}>()
const result = md.render(props.content);

function handleClick() {
    router.push({ name: 'NewsDetail', params: { id: props.title } });
}
</script>

<style scoped>
.content {
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #eaeaea;
    max-height: 16em;
    overflow: hidden;
    position: relative;
}

.content2 {
    padding: 15px;
    border-radius: 10px;
    max-height: 13em;
    position: relative;
    padding-top: 0;
}

.content::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1.5em;

}
</style>
