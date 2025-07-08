<template>
    <div class="sm:mx-10 lg:mx-30 mt-8 mx news_container">
        <header class="text-3xl font-bold dark:text-white mt-8">文章</header>
        <n-divider />
        <New v-for="newsItem in newsItems" :title="newsItem.fileName" :content="newsItem.content"
            :attributes="newsItem.attributes"></New>
    </div>
</template>

<script setup lang="ts">
import { NDivider } from 'naive-ui';
import { ref, onMounted } from 'vue';
import New from './News/New.vue';
import frontMatter from 'front-matter';
import dayjs from 'dayjs';
interface Attributes {
    date: string;
    author: string;
    tags: string[];
    imageSrc?: string;
}
interface NewsItem {
    fileName: string;
    content: string;
    attributes: Attributes;

}
const newsItems = ref<NewsItem[]>([]);

async function getNews() {
    const fileNames = import.meta.glob(
        '@/assets/News/*.md',
        { query: '?raw', import: 'default', eager: true }
    );
    const promises = Object.keys(fileNames).map(async (filePath) => {
        const mdContent = fileNames[filePath];
        const result = frontMatter(mdContent);

        let fileName = filePath.split('/').pop() || '';
        fileName = fileName.split('.')[0];

        return {
            fileName,
            content: result.body,
            attributes: result.attributes as Attributes
        };
    });

    newsItems.value = await Promise.all(promises);

    // 统一排序逻辑
    newsItems.value.sort((a, b) => {
        const dateA = a.attributes.date ? dayjs(a.attributes.date) : dayjs(0);
        const dateB = b.attributes.date ? dayjs(b.attributes.date) : dayjs(0);
        return dateB.diff(dateA);
    });
}

onMounted(async () => {
    getNews();
});
</script>

<style scoped>
.news_container {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}
</style>
