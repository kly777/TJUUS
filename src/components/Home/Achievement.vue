<template>
    <div class="achievement-0">
        <div class="picture" ref="pic">
            {{ props.picture }}
        </div>



        <div class="text"> {{ props.text }}</div>
    </div>


</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';


const props = defineProps<{
    text: string,
    picture: string
}>()


console.log(props.picture)
const pic = ref<HTMLElement>()
onMounted(() => {
    if (pic.value) { pic.value.style.backgroundImage = `url(../../assets/tianda.png)` }
})






</script>

<style lang="css" scoped>
.achievement-0 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    border-radius: 10px;
    padding: 30px;
    box-sizing: border-box;
}
</style>