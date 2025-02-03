<template>
    <div>
        <div class="main light:text-blue500 dark:text-blue200 lg:text-2.5rem md:text-2rem text-1.5rem">{{ main }}</div>
        <div class="sub">{{ sub }}</div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    main: String,
    sub: String
}
)
</script>

<style scoped>
.main {

    text-align: center;
    font-weight: 600;
    opacity: 0.5;
}

.sub {
    color: #2ca3c1;
    text-align: center;
    font-style: italic;
    position: relative;

    font-size: 1.3em;
    bottom: 23px;
}
</style>