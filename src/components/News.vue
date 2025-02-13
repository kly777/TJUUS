<template>
    <div class="sm:mx-10 lg:mx-30 mt-8 mx mainnews">
        <header class="text-3xl font-bold dark:text-white mt-8">文章</header>
        <n-divider />
        <New v-for="newsItem in newsItems" :title="newsItem.fileName" :content="newsItem.content"
            :attributes="newsItem.attributes" ></New>
    </div>
</template>

<script setup lang="ts">
import { NDivider } from 'naive-ui';
import { ref, onMounted } from 'vue';
import New from './News/New.vue';
import frontMatter from 'front-matter';
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
        console.log(filePath);
        const mdContent = fileNames[filePath];
        const result = frontMatter(mdContent);


        let fileName = filePath.split('/').pop() || '';
        fileName = fileName.split('.')[0];
        const attributes = result.attributes as Attributes;
        newsItems.value.push({ fileName, content: result.body, attributes: attributes });
        newsItems.value.sort((a, b) => {
            const dateA = new Date(a.attributes.date);
            const dateB = new Date(b.attributes.date);
            return dateB.getTime() - dateA.getTime();
        });
    }
}

onMounted(async () => {
    await getNews();
});
</script>

<style scoped>
.mainnews {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}
</style>
