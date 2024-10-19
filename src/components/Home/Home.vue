<script setup lang="ts">
import "animate.css"
import { useWindowScroll } from "@vueuse/core"
import { ref, watch } from "vue"
const background = ref()
import Server from "./Server.vue"
import Achievement from "./Achievement.vue"

const { y } = useWindowScroll()
watch(y, (val) => {
    background.value.style.transform = `translateY(${-val / 6}px)`
})
</script>

<template>
    <div class="home-container animate__animated animate__pulse">
        <div class="logo animate__animated animate__fadeInUp">
            <div class="title">TJUUS</div>
            <div class="describe">TianJinUniversityUnitedServer</div>
        </div>
        <div class="background" ref="background">

        </div>
    </div>
    <div class="intro">
        <div class="tip">
            <div class="image">

            </div>
            <div class="tip-text">#网站正在施工中</div>
        </div>
        <Server class="server" />
        <Server class="server" />
        <div class="achievement">成果</div>
        <Achievement class="achievement-item" text="123" :picture="'@/assets/tianda1.png'"/>
    </div>
</template>

<style scoped>
.home-container {
    width: 100%;
    height: calc(100vh - 48px);
    overflow: hidden;

}


.background {
    background-image: url("../../assets/landsc.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    background-position: center;
    height: 140%;
    transform: translateY(0);
    transition: transform 0.5s ease-out;
}

.title {
    color: #ffffff;
    font-size: 96px;
    font-weight: bold;
    text-align: center;
    text-shadow: 0px 8px #666,
        0px 10px #eee;
}

.logo {
    position: absolute;
    top: 300px;
    left: 0;
    right: 0;
    z-index: 1;
}

.describe {
    color: #ffffff;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    text-shadow: 0px 4px #666;
}

.intro {
    background-color: #f5f5f5;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, auto);
    margin: 7vw;
    grid-row-gap: 40px;
    grid-column-gap: 20px;
}

.tip {
    grid-column-start: 1;
    grid-column-end: 7;
    font-size: 26px;
    height: 100px;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    border-radius: 30px;

    .tip-text {
        line-height: 100px;
        color: #010101;
        position: relative;
        top: -100px;
        pointer-events: none;
    }

    .image {
        background-image: url("../../assets/program.jpg");
        background-size: cover;
        background-position: center;
        height: 100px;
        opacity: 0.3;
        border-radius: 30px;
        transition: all 0.5s ease-in-out;
    }
}

.image:hover {

    opacity: 0.5;
    transform: scale(1.01);
}

.server {
    grid-column-start: span 3;
}

.achievement {
    grid-column-start: 1;
    grid-column-end: 7;
    color: rgba(0,
        81,
        135, 0.5);
    font-size: 30px;
    position: relative;
    text-align: center;
    transition: all 0.5s ease-in-out;

}

.achievement:hover {
    transform: scale(1.1);
}

.achievement::after {
    content: "gggggggggggggggggggggggggggggggg";
    position: absolute;
    top: 3.3em;
    font-size: 10px;
    left:-70px;
}
.achievement-item {
    grid-column-start: 2;
    grid-column-end: 6;
}
</style>