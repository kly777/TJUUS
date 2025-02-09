<template>
    <div class="follow-container">
        <div class="overlay">
            <h1>关注我们</h1>

        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.follow-container {
    width: 100%;
    height: 70vh;
    background-image: url('tianda1.png');
    /* 替换为你的背景图片路径 */
    background-size: cover;
    background-position: center;
    position: relative;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* 背景发暗 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
}

h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1.5rem;
}
</style>
