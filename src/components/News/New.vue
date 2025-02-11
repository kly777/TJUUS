<template>
    <div class="cursor-pointer content m-6 .dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        @click="handleClick">
        <div class="tags"> <n-tag type="primary" class="ml-2 w-fit">
                作者：{{ attributes.author }}
            </n-tag>
            <n-tag type="info" class="ml-2 w-fit">
                发布于：{{ dayjs(attributes.date, 'Y-M-D').format('YYYY/MM/DD') }}
            </n-tag>
        </div>


        <div class="flex flex-col md:flex-row">
            <!-- 图片 -->
            <div v-if="attributes.imageSrc" class="w-95% mx-a md:w-4/9 order-2 mt mr">
                <img :src="attributes.imageSrc" class="w-100% object-cover rounded !h-100% m-a" />
            </div>

            <div v-html="result" class="content2 md:w-5/9 order-2 md:order-1">
            </div>
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
        imageSrc?: string
    }

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