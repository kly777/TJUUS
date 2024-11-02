<template>
    <div class="sm:mx-10 lg:mx-30 mt-8 mx">
        <header class="text-3xl font-bold dark:text-white">News</header>
        <n-divider/>
        <New v-for="newsItem in newsItems" :title="newsItem.fileName" :content="newsItem.content"></New>
    </div>
</template>

<script setup lang="ts">
import { NDivider } from 'naive-ui';
import { ref, onMounted } from 'vue';
import New from './New.vue';



const newsItems = ref<{ fileName: string; content: string }[]>([]);

async function getNews() {
    const fileNames = import.meta.glob('@/assets/News/*.md', { as: 'raw', eager: true });
    for (const filePath of Object.keys(fileNames)) {
        console.log(filePath);
        const mdContent = fileNames[filePath];
        let fileName = filePath.split('/').pop() || ''; // 提取文件名
        fileName=fileName.split('.')[0];
        console.log(fileName);


        newsItems.value.push({ fileName, content: mdContent });
    }
}

onMounted(async () => {
    await getNews();
});
</script>
