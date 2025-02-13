<template>
    <div class="sm:mx-10 lg:mx-30 mt-8 mx">
        <div class="tags mt-20 ml-10">
            <n-tag type="primary">
                作者：{{ attributes.author }}
            </n-tag>
            <n-tag class="ml-2" type="info">
                发布时间：{{ dayjs(attributes.date).format('YYYY-MM-DD') }}
            </n-tag>
        </div>

        <n-divider />
        <div class="markdown-body" v-html="renderedContent"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { NDivider, NTag } from 'naive-ui';
import MarkdownIt from 'markdown-it';
import { useRoute } from 'vue-router';
import { useDarkStore } from '@/state';
import frontMatter from 'front-matter';
import dayjs from 'dayjs';
interface Attributes {
    date: string;
    author: string;
    tags: string[];
}


const route = useRoute();
const title = ref('');
const renderedContent = ref('');
const darkStore = useDarkStore();
const md = new MarkdownIt();
const attributes = ref<Attributes>({
    date: '',
    author: '',
    tags: [],
});

onMounted(async () => {
    const fileName = route.params.id as string;
    title.value = fileName;

    try {
        // 确保 content.default 是一个字符串
        const content = await import(`@/assets/News/${fileName}.md?raw`);
        const rawContent = content.default; // 解析 Promise
        const result = frontMatter(rawContent);
        renderedContent.value = md.render(result.body);
        attributes.value = result.attributes as Attributes;
    } catch (error) {
        console.error('加载md文件时出错：', error);
        renderedContent.value = '加载内容时出错';
    }
});
</script>

<style scoped>
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
    padding-top: 0;
}

@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}
</style>