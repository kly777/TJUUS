<script setup lang="ts">
import "animate.css"
import SPic from "./Home/SPic.vue"
import Developing from "./Home/Developing.vue"
import Divline from "./Home/Divline.vue"
import Servers from "./Home/Server/Servers.vue"
import Buildings from "./Home/Building/Buildings.vue"
import Carousel from "./Home/Carousel.vue"
import { NDivider } from "naive-ui"
</script>

<template>
    <SPic />
    <div class="intro sm:mx-10 md:mx-20 lg:mx-30 mx-5 w-80% py-8">
        <Developing class="developing" />
        <n-divider></n-divider>
        <Servers class="row" />
        <n-divider></n-divider>
        <Divline class="row" main="建设成果" sub="不知道写什么"></Divline>
        <Buildings class="row" />
        <Divline class="row" main="我们是" sub="不知道是什么"></Divline>
        <Carousel class="row" />
    </div>
</template>

<style scoped>
.row {
    margin: auto;
    transition: all 0.3s ease;
}



.developing {
    margin:15px auto;

    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.intro {
    margin: auto;
    min-width: 200px;
    max-width: 1280px;
}


@media (max-width: 767px) {
    .intro {
        padding: 15px;
    }
}


.server {
    background: rgba(255, 255, 255, 0.9);
    padding: 1rem;
    border-radius: 0.5rem;
}


.animate__animated {
    animation-duration: 1s;
}
</style>
