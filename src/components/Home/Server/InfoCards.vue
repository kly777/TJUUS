<template>
    <div class="servers-container sm:w-85% box-border">
        <div class="grid place-items-center">
            <InfoCard v-for="(server, index) in servers" :key="index" :imageSrc="server.imageSrc" :title="server.title"
                :description="server.description" :imageOnRight="index % 2 === 1" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import InfoCard from './InfoCard.vue'
import Config from "@/../TJUUS.config.json"
const servers = ref(Config.server)
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