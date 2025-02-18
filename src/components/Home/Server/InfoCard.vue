<template>
    <div
        class="n-card border-solid border-op-20 border-dark-50 rounded-lg shadow-lg border-1 hover:scale-103 transition-all duration-500 ease-in-out lg:w-80% box-border max-w-780px dark:bg-dark-600 dark:border-dark-700 bg-white dark:text-white">
        <div class="flex flex-col md:flex-row md:h-55 p-0">
            <!-- 图片 -->
            <div class="w-full md:w-1/2" :class="{ 'md:order-2': imageOnRight, 'order-1': !imageOnRight }">
                <img :src="props.imageSrc" class="w-full h-full object-cover" :class="{
                    'rounded-t-lg md:rounded-l-lg md:rounded-tr-none': !imageOnRight,
                    'rounded-t-lg md:rounded-r-lg md:rounded-tl-none': imageOnRight,
                }" />
            </div>

            <!-- 文字 -->
            <div class="w-full md:w-1/2 px-6 py-4 min-h-40" :class="{ 'order-1': imageOnRight, 'order-2': !imageOnRight }">
                <h2 class="text-xl font-bold mb-2">{{ props.title }}</h2>
                <p class="">
                    {{ lessResult(props.description) }}
                </p>
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

<style scoped>
.n-card {
    max-width: 780px;
    height: auto;
}
</style>