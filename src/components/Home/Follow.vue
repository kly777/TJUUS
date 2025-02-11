<template>
    <div class="follow-container">
        <div class="overlay">
            <h1>关注我们!!!!!</h1>
            <p>

                <a href="https://space.bilibili.com/1343371808" target="_blank"
                    class="text-white flex items-center justify-center decoration-none">
                    <img src="/icon/bili.png" alt="bilibili Logo" class="h-7 mr-2" />
                    bilibili
                </a>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.follow-container {
    width: 100%;
    height: 33vh;
    background-image: url('eg/6.png');
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
