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
    const fileNames = import.meta.glob('@/assets/News/*.md', { query: '?raw', import: 'default', eager: true });
    for (const filePath of Object.keys(fileNames)) {
        const mdContent = fileNames[filePath];
        const result = frontMatter(mdContent);

        let fileName = filePath.split('/').pop() || '';
        fileName = fileName.split('.')[0];
        const attributes = result.attributes as Attributes;
        newsItems.value.push({ fileName, content: result.body, attributes: attributes });
        newsItems.value.sort((a, b) => {
            console.log(a.attributes.date);
            const hasDateA = a.attributes.date == undefined ? false : true;
            const hasDateB = b.attributes.date == undefined ? false : true;
            if (!hasDateA && !hasDateB) return 0; // 都没有日期，保持原顺序
            if (!hasDateA) return 1; // a 没有日期，排到最后
            if (!hasDateB) return -1; // b 没有日期，排到最后
            const dateA = dayjs(a.attributes.date);
            const dateB = dayjs(b.attributes.date);
            return dateB.diff(dateA);
        });
    }
}

onMounted(async () => {
    await getNews();
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
