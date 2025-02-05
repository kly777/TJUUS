<template>
    <div class="servers-container box-border">
        <div class="grid place-items-center">
            <Server v-for="(server, index) in servers" :key="index" :imageSrc="server.imageSrc" title="也许你需要这个"
                description="休息一下吧111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Server from './Server.vue'

const servers = ref([
    { imageSrc: 'tianda1.png' },
    { imageSrc: 'tianda2.png' },
    { imageSrc: 'server.jpg' },
])
</script>

<style scoped>
.servers-container {
    padding: 20px;
    width: 100%;
    margin: 0 auto;
    /* 居中对齐 */
}

.grid {
    display: grid;
    gap: 40px;
}

/* 添加 Server 组件的样式 */
.server-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s;
}

.server-card:hover {
    transform: translateY(-5px);
}
</style>