<template>
    <div
        class="card border border-solid border-zinc-200 rounded-lg shadow-lg border-opacity-20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white bg-white transition-all duration-500 ease-in-out hover:scale-105 lg:w-4/5 max-w-[780px] box-border">
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
// 截取字符串并添加省略号
function lessResult(result: string) {
    return result.slice(0, 30) + (result.length > 30 ? '......' : '');
}

// 定义 props
const props = defineProps({
    imageSrc: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageOnRight: {
        type: Boolean,
        default: false, // 默认图片在左
    },
});
</script>
