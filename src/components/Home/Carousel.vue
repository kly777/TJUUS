<template>
    <n-carousel autoplay :slides-per-view="slidesPerView" :space-between="20">
        <img class="carousel-img" src="/eg/1.png" />
        <img class="carousel-img" src="/eg/2.png" />

        <img class="carousel-img" src="/eg/0.png" />

        <img class="carousel-img" src="/eg/5.png" />

        <img class="carousel-img" src="/eg/7.png" />
        <img class="carousel-img" src="/eg/8.png" />
    </n-carousel>
</template>

<script setup>
import { NCarousel } from "naive-ui";
import { ref, onMounted, onBeforeUnmount } from 'vue';

const slidesPerView = ref(1);

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
