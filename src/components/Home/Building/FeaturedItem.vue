<template>
  <div class="component">
    <div class="flex justify-center align-center">
      <div class="bg rounded-lg hover:scale-108 transition-all duration-300 border" :style="{ backgroundImage: `url(${imageSrc})` }" />
    </div>

    <h2 class="text-1.5rem font-semibold mb-2 text-center m-t5 dark:text-cyan50">{{ title }}</h2>
    <p class="text-center text-.8rem dark:text-cyan100">{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.bg {
  background-size: cover;
  width: 100%;
  height: 0;
  padding-bottom: 55%;
  /* 使高度等于宽度，形成正方形 */
  position: static;
}

.component {
  padding: 15px;
}
</style>