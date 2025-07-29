<template>
    <n-carousel autoplay :slides-per-view="slidesPerView" :space-between="20" class="animate__animated animate__fadeInUp animate__delay-1s">
        <img v-for="(src, index) in imageSources" :key="index" class="carousel-img" :src="src" />
    </n-carousel>
</template>

<script setup lang="ts">
import { NCarousel } from "naive-ui";
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Config from "@/../TJUUS.config.json"
const slidesPerView = ref(1);
const imageSources = Config.carousel;

function updateSlidesPerView() {
    slidesPerView.value = window.innerWidth > 768 ? 3 : 1;
}

onMounted(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSlidesPerView);
});
</script>

<style scoped>
.carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}
</style>