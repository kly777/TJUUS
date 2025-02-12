<template>
    <div class="background relative sm:h-500px h-300px w-100vw ">
        <div class=" text-white relative">
            <div class="z-1 absolute overflow-hidden sm:h-500px h-300px p-30px pl-20 box-border">
                <h1>TJUUS</h1>
                <h2>是一个</h2>
                <h2>人很多</h2>
                <h2>的</h2>
                <h2>社团</h2>
                <h3>测试超出范围</h3>
                <h3>测试超出范围</h3>
                <h3>测试超出范围</h3>
                <h3>测试超出范围</h3>
                <h3>测试超出范围</h3>
                <h3>测试超出范围</h3>
                <h3>测试超出范围</h3>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.background {
    background-attachment: fixed;
    background-image: url(/numbers.png);
    background-position: 50% 80%;
    background-size: auto;
}

.background::after {
    display: block;
    position: absolute;
    z-index: 0.5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    content: "";
}

.mut {
    position: absolute;
    top: 0;
    left: 0;
}
</style>