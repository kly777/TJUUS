<template>
    <div class="flex flex-col items-center">
        <div class="sm:mx-10 lg:mx-30 mt-8 mx-auto max-w-5xl">
            <!-- 标签区域 -->
            <div class="tags mt-20 ml-10 flex flex-wrap gap-4">
                <n-tag type="primary" class="bg-blue-500 text-white">
                    作者：{{ attributes.author }}
                </n-tag>
                <n-tag type="info" class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    发布时间：{{ dayjs(attributes.date).format('YYYY-MM-DD') }}
                </n-tag>
            </div>

            <!-- 分隔线 -->
            <n-divider class="my-8" />

            <!-- 内容区域 -->
            <div class="markdown-body prose max-w-none dark:prose-invert" :class="{
                'min-w-[200px] max-w-[980px] mx-auto p-11 pt-0': !isMobile,
                'p-4': isMobile
            }" id="content"></div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { NDivider, NTag } from 'naive-ui'
import MarkdownIt from 'markdown-it'
import { useRoute } from 'vue-router'
import { useDarkStore } from '@/state'
import frontMatter from 'front-matter'
import dayjs from 'dayjs'

interface Attributes {
    date: string
    author: string
    tags: string[]
}

const route = useRoute()
const title = ref('')
const renderedContent = ref('')
const darkStore = useDarkStore()
const md = new MarkdownIt()
const attributes = ref<Attributes>({
    date: '',
    author: '',
    tags: []
})

// 响应式检测
const isMobile = ref(window.innerWidth < 768)
window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
})

onMounted(async () => {
    const fileName = route.params.id as string
    title.value = fileName

    try {
        const content = await import(`@/assets/News/${fileName}.md?raw`)
        const rawContent = content.default
        const result = frontMatter(rawContent)
        renderedContent.value = md.render(result.body)
        attributes.value = result.attributes as Attributes
    } catch (error) {
        console.error('加载md文件时出错：', error)
        renderedContent.value = '加载内容时出错'
    }


    const container = document.createElement('div');
    const sR = container.attachShadow({ mode: 'open' });
    sR.innerHTML = `
  <style>
    :host {
      font-family: inherit;
      color: inherit;
      line-height: 1.6;
    }
    h1, h2, h3 { font-weight: bold; }
    p { margin-bottom: 1em; }
  </style>
  ${renderedContent.value}
`;
    const content = document.getElementById("content")
    if (content) {
        content.appendChild(container);
    }
})
</script>