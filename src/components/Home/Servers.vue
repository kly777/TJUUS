<template>
    <div class="servers-container">
        <div class="grid" :style="{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }">
            <Server v-for="(server, index) in servers" :key="index" :imageSrc="server.imageSrc" />
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
    width:100%;
}

.grid {
    display: grid;
    gap: 20px;
}
</style>