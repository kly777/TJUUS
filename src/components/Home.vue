<script setup lang="ts">
import "animate.css"
import SPic from "./Home/SPic.vue"
import Developing from "./Home/Developing.vue"
import Divline from "./Home/Divline.vue"
import Servers from "./Home/Server/Servers.vue"
import Buildings from "./Home/Building/Buildings.vue"
import Carousel from "./Home/Carousel.vue"
import { NDivider } from "naive-ui"
import GlassSplitView from "./Home/GlassSplitView.vue"
import Follow from "./Home/Follow.vue"
import Creeper from "./Home/Creeper.vue"
import { useWindowSize } from "@vueuse/core"
const { width: windowWidth, height: windowHeight } = useWindowSize();
</script>

<template>
    <SPic />
    <div class="intro sm:mx-10 md:mx-20 lg:mx-30 mx-0 w-80% py-8">
        <Developing class="developing" />
        <n-divider></n-divider>
    </div>
    <div class="grid sc box-border justify-center items-center sm:m-7 m-9">
        <div class="grid-cols-1">
            <Servers class="row min-w-sm lg:w-80%" />
        </div>
        <div class="h-auto w-0 justify-self-start creeper">
            <Creeper class="md:h-400px md:w-400px lg:h-550px lg:w-550px sm:h-350px sm:w-300px w-200px h-250px" />
        </div>
    </div>
    <div class="intro sm:mx-10 md:mx-20 lg:mx-30 mx-0 w-80% py-8">
        <n-divider></n-divider>

        <Divline class="row" main="我们是" sub="TJUUS"></Divline>

    </div>
    <GlassSplitView />
    <div class="intro sm:mx-10 md:mx-20 lg:mx-30 mx-5 w-80% py-8">
        <Divline class="row" main="建设成果" sub="探索Minecraft的无限可能"></Divline>
        <Buildings class="row" />
        <Divline class="row my-5" main="我们的伙伴" sub="联合"></Divline>
        <Carousel class="row my-5" />

    </div>
    <Follow></Follow>
</template>

<style scoped>
.sc {
    grid-template-columns: 100% 0%;
}

.row {
    transition: all 0.3s ease;
}



.developing {
    margin: 15px auto;

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

.creeper {
    transform: translate(-46%, 0);
    transition: all 0.7s ease-in-out;
}

.creeper:hover {
    transform: translate(-49%, 0) scale(0.98);

}
</style>
