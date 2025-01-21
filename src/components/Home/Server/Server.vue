<template>
    <div class="container" :style="{ backgroundImage: `url(${props.imageSrc})` }">
        <h3 class="title">xxx服务器</h3>
        <div class="options">
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    imageSrc: string;
}>();
import { NButton } from 'naive-ui';
</script>

<style scoped less>
.container {
    width: 100%;
    height: 300px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
}

.title {
    margin-top: 60px;
    margin-left: 40px;
    color: #ffffff;
    font-family: "Arial", sans-serif;
    font-size: 2em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.options {
    margin-top: 80px;
    margin-left: 30px;
    display: flex;
    gap: 20px;
}

.btn {
    margin-left: 0;
    transition: all 0.5s;
    font: 1em "Arial", sans-serif;
    background-color: #4a69bd;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.btn:hover {
    opacity: 0.9;
    scale: 1.05;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.container:hover {
    scale: 1.02;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
