<template>
    <div>
        <div class="main">123</div>
        <div class="sub">124567333333333</div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    main: String
}
)
</script>

<style scoped>
.main {
    color: #5985bf;
    text-align: center;
    font: 2em sans-serif;
}
.sub{
    color: #2ca3c1;
    text-align: center;
    position: relative;
    bottom: 17px;
}

</style>