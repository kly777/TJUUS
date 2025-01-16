<script setup lang="ts">
import "animate.css"
import SPic from "./Home/SPic.vue"
import Developing from "./Home/Developing.vue"
import Divline from "./Home/Divline.vue"
import Servers from "./Home/Server/Servers.vue"
import Buildings from "./Home/Building/Buildings.vue"
import Carousel from "./Home/Carousel.vue"
</script>

<template>
    <SPic />
    <div class="intro sm:mx-10 lg:mx-30 my-8">
        <Developing class="developing" />
        <Servers class="row" />
        <Divline class="row" main="建设成果" sub="不知道写什么"></Divline>
        <Buildings class="row" />
        <Divline class="row" main="我们是" sub="不知道是什么"></Divline>
        <Carousel class="row" />
    </div>
</template>

<style scoped>
.row {
    grid-column: span 6;
    transition: all 0.3s ease;
}

.row:hover {
    transform: translateY(-5px);
}

.card-des {
    grid-column: span 2;
}

.developing {
    grid-column: 1 / 7;
    background: url('/wood.jpg') center/cover;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.intro {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-row-gap: 40px;
    grid-column-gap: 40px;

    padding: 2rem;
    border-radius: 1rem;
    margin: 2rem 0;
    box-sizing: border-box;
    min-width: 200px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 45px;
}


@media (max-width: 767px) {
    .intro {
        padding: 15px;
    }
}


.server {
    grid-column-start: span 3;
    background: rgba(255, 255, 255, 0.9);
    padding: 1rem;
    border-radius: 0.5rem;
}

/* 添加动画效果 */
.animate__animated {
    animation-duration: 1s;
}
</style>
