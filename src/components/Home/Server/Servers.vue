<template>
    <div class="servers-container sm:w-90% box-border">
        <div class="grid place-items-center">
            <Server v-for="(server, index) in servers" :key="index" :imageSrc="server.imageSrc" :title="server.title"
                :description="server.description" :imageOnRight="index % 2 === 1" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Server from './Server.vue'

const servers = ref([
    { imageSrc: 'tianda1.png', title: '服务器1', description: '这是服务器1的描述' },
    { imageSrc: 'tianda2.png', title: '服务器2', description: '这是服务器2的描述' },
    { imageSrc: 'server.jpg', title: '服务器3', description: '这是服务器3的描述' },
])
</script>

<style scoped>
.servers-container {
    padding: 20px;
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