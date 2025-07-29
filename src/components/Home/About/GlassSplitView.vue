<template>
  <div class="back-img relative sm:h-[500px] h-[300px] w-screen bg-fixed  bg-[50%_80%] bg-auto">
    <div class="absolute inset-0  bg-opacity-70 z-[0.5]"></div>
    <div class="text-white relative">
      <div
        class="z-[1] absolute overflow-hidden sm:h-[500px] w-screen h-[300px] p-[30px] pl-15 box-border flex flex-col items-start flex-wrap text-2xl gap-y-3.5">
        <h1>TJUUS</h1>
        <h2>是一个</h2>
        <h2>人很多</h2>
        <h2>的</h2>
        <h2>社团</h2>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.back-img {
  background-image: url('/numbers.png');
}

.back-img::after {
  display: block;
  position: absolute;
  z-index: 0.5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  content: "";
}
</style>
