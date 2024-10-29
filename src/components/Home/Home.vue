<script setup lang="ts">
import "animate.css"
import Server from "./Server.vue"
import SPic from "./SPic.vue"
import Developing from "./Developing.vue"
import CardDes from "./CardDes.vue"
import Divline from "./Divline.vue"
</script>

<template>
    <SPic />
    <div class="intro">
        <Developing class="developing" />
        <Server class="server" image-src="server.jpg" />
        <Server class="server" image-src="tianda1.png" />
        <Divline class="row"></Divline>
        <CardDes class="card-des" pic="复刻.png"/>
        <CardDes class="card-des" pic="wood.jpg"/>
        <CardDes class="card-des" pic="tianda1.png"/>
    </div>
</template>

<style scoped>
.row{
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
    grid-template-rows: repeat(4, auto) ;
    margin: 7vw;
    grid-row-gap: 40px;
    grid-column-gap: 40px;
}

.server {
    grid-column-start: span 3;
}
</style>