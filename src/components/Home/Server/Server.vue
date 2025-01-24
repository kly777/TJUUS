<template>
    <div
        class="n-card border-solid border-gray-300 rounded-lg shadow-md border hover:scale-103 transition-transform duration-300 ease-in-out">
        <div class="flex flex-col md:flex-row p-0">
            <!-- 图片 -->
            <div class="w-full md:w-1/2" :class="{ 'order-2': imageOnRight, 'order-1': !imageOnRight }">
                <img :src="props.imageSrc" class="w-full h-full object-cover" :class="{
                    'rounded-t-lg md:rounded-l-lg md:rounded-tr-none': !imageOnRight,
                    'rounded-t-lg md:rounded-r-lg md:rounded-tl-none': imageOnRight,
                }" />
            </div>

            <!-- 文字 -->
            <div class="w-full md:w-1/2 p-4" :class="{ 'order-1': imageOnRight, 'order-2': !imageOnRight }">
                <h2 class="text-xl font-bold mb-2">{{ props.title }}</h2>
                <p class="text-gray-700">
                    {{ props.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>

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
    max-width: 100%;
    height: auto;
}
</style>