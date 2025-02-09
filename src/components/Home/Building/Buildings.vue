<template>
    <div class="building-container">
        <div class="grid" :style="{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }">
            <Building v-for="(build, index) in buildings" :key="index" :imageSrc="build.imageSrc" :title="build.title"
                :description="build.description" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Building from './Building.vue'

const buildings = ref([
    {
        imageSrc: 'dongdamen.jpeg', title: '天大大门', description: '实事求是'
    },
    {
        imageSrc: 'eg/6.png', title: '网图 0', description: 'Description'
    },
    {
        imageSrc: 'eg/3.png', title: '网图 1', description: 'Description too'
    },
    {
        imageSrc: 'eg/4.png', title: '网图 2', description: 'Description again'
    }
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