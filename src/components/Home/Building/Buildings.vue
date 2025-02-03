<template>
    <div class="building-container">
        <div class="grid" :style="{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }">
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

    width: 100%;
    box-sizing: border-box;
}

.grid {
    display: grid;
    gap: 5px;
}
</style>