<template>
    <div v-html="result" class="content mt-6"></div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it';


const md = MarkdownIt()

const props = defineProps<{
    title: string
    content: string
}>()
const result = md.render(props.content);
</script>

<style scoped lang="less">
.content {
    padding: 10px;
    background-color: #fafafa;
    border-radius: 10px;
    border: 1px solid #eaeaea;
    max-height: 200px;
    overflow: hidden;
}
</style>