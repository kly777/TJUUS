<template>
    <div class="home-container animate__animated animate__pulse">
        <div class="logo animate__animated animate__fadeInUp">
            <div class="title">TJUUS</div>
            <div class="describe">TianJinUniversityUnitedServer</div>
        </div>
        <div class="background" ref="background" />
    </div>
</template>

<script lang="ts" setup>
import "animate.css"
import { ref, watch } from "vue";
import { useWindowScroll } from "@vueuse/core"
const background = ref()
const { y } = useWindowScroll()
watch(y, (val) => {
    background.value.style.transform = `translateY(${-val / 6}px)`
})
</script>

<style scoped lang="less">
.home-container {
    width: 100%;
    height: calc(100vh - 48px);
    overflow: hidden;
}


.background {
    background-image: url("landsc.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    background-position: center;
    height: 140%;
    transform: translateY(0);
    transition: transform 0.5s ease-out;
}

.title {
    color: #ffffff;
    font-size: 136px;
    font-weight: bold;
    text-align: center;
    text-shadow: 0px 8px #666,
        0px 10px #eee;
}

.logo {
    position: absolute;
    top: 20vh;
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
</style>