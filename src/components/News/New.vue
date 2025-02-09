<template>
    <div class="cursor-pointer content m-6 .dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors "
        @click="handleClick">
        <div class="tags"> <n-tag type="primary" class="ml-2 w-fit">
                作者：{{ attributes.author }}
            </n-tag>
            <n-tag type="info" class="ml-2 w-fit">
                发布于：{{ dayjs(attributes.date, 'Y-M-D').format('YYYY/MM/DD') }}
            </n-tag>
        </div>


        <!-- 图片 -->
        <div v-if="imageSrc" class="w-full md:w-1/2 order-1">
            <img :src="imageSrc" class="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none" />
        </div>

        <div v-html="result" class="content2" :class="{ 'order-2': imageSrc, 'order-1': !imageSrc }">
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
    imageSrc?: string
}>()
const result = lessResult(md.render(props.content));

function lessResult(result: string) {
    return result.slice(0, 200) + (result.length > 200 ? '......' : '');
}

function handleClick() {
    router.push({ name: 'NewsDetail', params: { id: props.title } });
}
</script>

<style scoped>
.content {
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #eaeaea;

    overflow: hidden;
    position: relative;
    display: flex;
    /* 修改为 flex 布局 */
    flex-direction: column;
    /* 默认为列布局 */
}

.content2 {
    padding: 15px;
    border-radius: 10px;

    position: relative;
    padding-top: 0;
    padding-bottom: 0;
}

.content::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1.5em;
}

/* 新增图片样式 */
img {
    max-width: 100%;
    height: auto;
}
</style>