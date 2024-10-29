<template>
    <div class="container" :style="{ backgroundImage: `url(${props.imageSrc})` }">
        <h3 class="title">xxx服务器</h3>
        <div class="options">
            <v-btn class="btn">
                选项一
            </v-btn>
            <v-btn class="btn">
                选项二
            </v-btn>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    imageSrc: string
}>()

</script>
<style scoped less>
.container {
    width: 100%;
    height: 200px;
    overflow: hidden;
    background-size: cover;
    border-radius: 30px;
    margin: 10px;
    transition: all 0.5s;
}

.title {
    margin-top: 40px;
    margin-left: 30px;
    color: #000000;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.options {
    margin-top: 60px;
    margin-left: 20px;
}

.btn {
    margin-left: 20px;
    transition: all 0.5s;
    font: .8em sans-serif;
    background-color: #7c94be;
    width: 40px;
}

.btn:hover {
    opacity: 0.8;
    scale: 1.03;
    cursor: pointer;
}
.container:hover{
    scale:calc(1.01);
}
</style>