<template>
    <div>
        <div class="main">{{main}}</div>
        <div class="sub">{{sub}}</div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    main: String,
    sub:String
}
)
</script>

<style scoped>
.main {
    color: #5985bf;
    text-align: center;
    font: 2em sans-serif;
    font-weight: 600;
    opacity: 0.4;
}
.sub{
    color: #2ca3c1;
    text-align: center;
    font-style: italic;
    position: relative;
    bottom: 17px;
}

</style>