<template>
    <div class="building-container">
        <div class="grid" :style="{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }">
            <Building v-for="(build, index) in buildings" :key="index" :imageSrc="build.imageSrc" :title="build.title" :description="build.description" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Building from './Building.vue'

const buildings = ref([
    { imageSrc: 'dongdamen.jpeg', title: '天大大门', description: '。。。' },
    { imageSrc: 'tianda2.png', title: 'Building 2', description: 'Description for Building 2' },
    { imageSrc: 'server.jpg', title: 'Building 3', description: 'Description for Building 3' },
])
</script>

<style scoped>
.building-container {
    width: 100%;
    box-sizing: border-box;
}

.grid {
    display: grid;
    gap: 5px;
}
</style>