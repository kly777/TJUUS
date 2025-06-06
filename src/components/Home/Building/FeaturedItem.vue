<template>
  <div class="component p-4">
    <!-- 背景图容器 -->
    <div class="flex justify-center items-center">
      <div class="bg-cover w-full aspect-[1/0.55] rounded-lg hover:scale-105 transition-all duration-300 border-white dark:border-zinc-900"
        :style="{ backgroundImage: `url(${imageSrc})` }" />
    </div>

    <!-- 标题 -->
    <h2 class="text-2xl font-semibold mb-2 text-center mt-5 text-zinc-800 dark:text-blue-400">
      {{ title }}
    </h2>

    <!-- 描述 -->
    <p class="text-center text-sm dark:text-blue-300">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageSrc: { type: String, required: true }
});
</script>