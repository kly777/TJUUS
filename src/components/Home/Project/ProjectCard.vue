<template>
    <div @click="goToDetail"
        class="card border border-solid border-zinc-200 rounded-lg shadow-lg border-opacity-20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white bg-white transition-all duration-500 ease-in-out hover:scale-105 lg:w-4/5 max-w-[780px] box-border hover:cursor-pointer">
        <div class="flex flex-col md:flex-row md:h-55 p-0">
            <!-- 图片 -->
            <div class="w-full md:w-1/2" :class="{ 'md:order-2': imageOnRight, 'order-1': !imageOnRight }">
                <img :src="props.imageSrc" class="w-full h-full object-cover" :class="{
                    'rounded-t-lg md:rounded-l-lg md:rounded-tr-none': !imageOnRight,
                    'rounded-t-lg md:rounded-r-lg md:rounded-tl-none': imageOnRight,
                }" />
            </div>

            <!-- 文字 -->
            <div class="w-full md:w-1/2 px-6 py-4 min-h-40 text-black dark:text-white"
                :class="{ 'order-1': imageOnRight, 'order-2': !imageOnRight }">
                <h2 class="text-xl font-bold mb-2">{{ props.title }}</h2>
                <p>{{ lessResult(props.description) }}</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps<{
    imageSrc: string
    title: string
    description: string
    imageOnRight?: boolean
}>()

function lessResult(description: string) {
    return description.length > 100 ? description.slice(0, 100) + '...' : description
}

function goToDetail() {
    // 根据标题映射到对应的路由名称
    const routeMap: Record<string, string> = {
        "社团简介": "ClubIntro",
        "卫津路校区复刻项目": "WeijinluProject",
        "北洋园校区复刻项目": "BeiyangyuanProject",
        "运营周报": "WeeklyReport",
        "新闻报道": "NewsReport"
    }
    router.push({ name: routeMap[props.title] })
}
</script>