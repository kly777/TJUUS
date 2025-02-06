<template>
    <div class="background relative sm:h-400px h-300px w-100vw">
        <div class="p-40px p-l-40 text-white relative">
            <div class="z-1 absolute">
                <h1>TTTT</h1>
                <h2>JJJJ</h2>
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