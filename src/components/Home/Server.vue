<template>
    <div class="container">
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


</script>
<style scoped>
.container{
    width: 100%;
    height: 200px;
    overflow: hidden;
    background-image: url("../../assets/server.jpg");
    background-size: cover;
    border-radius: 30px;
    margin: 10px;
}
.title{
    margin-top: 40px;
    margin-left: 30px;
    color: #000000;
    font-family: cursive
}
.options{
    margin-top: 60px;
    margin-left: 20px;
}
.btn{
    margin-left: 20px;
}
</style>