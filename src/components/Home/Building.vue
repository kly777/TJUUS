<template>
      <div class="component">
        <div  class="flex justify-center align-center">      
              <div class="bg rounded-lg hover:scale-108 transition-all duration-300"/>
            </div>

        <h2 class="text-1.5rem font-semibold mb-2 text-center m-t5 ">高速熔炉</h2>
        <p class="text-center text-.8rem m-t3">高效处理矿石，提升资源获取速度。</p>
      </div>
     
</template>

<script setup>
// 这里可以添加组件的逻辑代码
</script>

<style scoped>
.bg {
  background-image: url("/tianda1.png");
  background-size: cover;
  width: 100%;
  height: 0;
  padding-bottom: 55%; /* 使高度等于宽度，形成正方形 */
  position: static;


}
.component {
  padding: 15px;
  min-height: 350px;
}
</style>