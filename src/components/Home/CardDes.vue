<template>
    <div class="card-des hover:scale-105 transition-all duration-300 min-w-[200px]">
        <div class="pic" ref="picture" />
        <div class="title">{{ title?title:'无标题' }}</div>
        <div class="content">{{ content?content:'无内容' }}</div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
    pic: String,
    title: String,
    content: String,
})

const picture = ref(null)
onMounted(() => {
    picture.value.style.backgroundImage = `url(${props.pic})`
})



</script>

<style scoped>
.pic {
    background-size: cover;
    border-radius: 20px;
    width: 100%;
    height: 200px;
    transition: all .5s;
}



.card-des {
    background-color: #f9f9f9;
    border-radius: 8px;
    height: 300px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .25);
}
.title {
    font-size: 22px;
    margin-bottom: 8px;
    margin-top: 8px;
     margin-left: 8px;
}
.content {
    font-size: 14px;
    margin-left: 8px;
}
</style>