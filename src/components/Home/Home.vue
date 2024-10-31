<script setup lang="ts">
import "animate.css"
import SPic from "./SPic.vue"
import Developing from "./Developing.vue"
import CardDes from "./CardDes.vue"
import Divline from "./Divline.vue"
import Servers from "./Servers.vue"
import Buildings from "./Buildings.vue"
</script>

<template>
    <SPic />
    <div class="intro">
        <Developing class="developing" />
        <Servers class="row"/>
        <Divline class="row" main="建设成果" sub="不知道写什么"></Divline>
        <Buildings class="row"/>
    </div>
</template>

<style scoped>
.row {
    grid-column: span 6;
}

.card-des {
    grid-column: span 2;
}

.developing {
    grid-column: 1 / 7;
}


.intro {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, auto);
    margin: 4vw;
    grid-row-gap: 40px;
    grid-column-gap: 40px;
}

.server {
    grid-column-start: span 3;
}
</style>