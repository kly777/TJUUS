<template>
    <div
        class="n-card border-solid border-gray-300 rounded-lg shadow-md border hover:scale-103 transition-transform duration-300 ease-in-out lg:w-80% box-border max-w-780px">
        <div class="flex flex-col md:flex-row p-0">
            <!-- 图片 -->
            <div class="w-full md:w-1/2" :class="{ 'order-2': imageOnRight, 'order-1': !imageOnRight }">
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
    max-width: 980px;
    height: auto;
}
</style>