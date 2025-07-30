<template>
    <div class="building-container">
        <div class="grid" :style="{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }">
            <FeaturedItem v-for="(build, index) in buildings" :key="index" :imageSrc="build.imageSrc"
                :title="build.title" :description="build.description" :blueMap="build.blueMap"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import FeaturedItem from './FeaturedItem.vue'
import Config from "@/TJUUS.config"

const buildings = ref(Config.building)
</script>

<style scoped>
.building-container {
    width: 100%;
    box-sizing: border-box;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
}
</style>