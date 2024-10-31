<template>
    <div class="building-container">
        <div class="grid" :style="{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }">
            <Building v-for="(build, index) in buildings" :key="index" :imageSrc="build.imageSrc" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Building from './Building.vue'

const buildings = ref([
    { imageSrc: 'tianda1.png' },
    { imageSrc: 'tianda2.png' },
    { imageSrc: 'server3.jpg' },
])
</script>

<style scoped>
.building-container {
    padding: 20px;
    width:100%;
}

.grid {
    display: grid;
    gap: 20px;
}
</style>