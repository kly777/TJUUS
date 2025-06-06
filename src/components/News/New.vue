<template>
  <div class="cursor-pointer bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden transition-colors duration-300
           border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 m-6 p-4"
    @click="handleClick">
    <!-- 标签区域 -->
    <div class="tags flex flex-wrap gap-2 mb-4" v-if="attributes.author || attributes.tags">
      <n-tag v-if="attributes.author" type="primary" class="bg-blue-500 text-white">
        作者：{{ attributes.author }}
      </n-tag>
      <n-tag v-if="attributes.date" type="info" class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
        发布于：{{ dayjs(attributes.date, 'Y-M-D').format('YYYY/MM/DD') }}
      </n-tag>

    </div>

    <!-- 内容布局 -->
    <div class="flex flex-col md:flex-row gap-4 mt-0">
      <!-- 图片 -->
      <div v-if="attributes.imageSrc" class="md:w-4/9 w-full order-1 md:order-2">
        <img :src="attributes.imageSrc" class="w-full h-auto object-cover rounded-lg" />
      </div>

      <!-- 正文 -->
      <div class="custom-content max-w-none order-2 md:order-1"
        :class="{ 'md:w-5/9': attributes.imageSrc }" :id="props.title">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NTag } from 'naive-ui'
import MarkdownIt from 'markdown-it'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { onMounted } from 'vue'

dayjs.extend(customParseFormat)
const router = useRouter()
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

const result = lessResult(md.render(props.content))

function lessResult(result: string) {
  return result.slice(0, 200) + (result.length > 200 ? '......' : '')
}

function handleClick() {
  router.push({ name: 'NewsDetail', params: { id: props.title } })
}

onMounted(() => {
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
  ${result}
`;
  const content = document.getElementById(props.title)
  if (content) {
    content.appendChild(container);
  }
})

</script>