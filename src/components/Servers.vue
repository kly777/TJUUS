<template>
  <div class="main-base">
    <h1 class="text-2xl font-bold mb-4">主基地</h1>
    <div class="grid grid-cols-2 gap-4">
      <div class="component">
        <h2 class="text-lg font-semibold mb-2">高速熔炉</h2>
        <p>高效处理矿石，提升资源获取速度。</p>
      </div>
      <div class="component">
        <h2 class="text-lg font-semibold mb-2">刷树机</h2>
        <p>自动化种植和砍伐树木，确保木材供应。</p>
      </div>
      <div class="component">
        <h2 class="text-lg font-semibold mb-2">骨粉机</h2>
        <p>快速生产骨粉，用于农作物生长加速。</p>
      </div>
      <div class="component">
        <h2 class="text-lg font-semibold mb-2">刷石机</h2>
        <p>自动化生成石头，提供建筑材料。</p>
      </div>
      <div class="component">
        <h2 class="text-lg font-semibold mb-2">公共仓库</h2>
        <p>集中存储资源，方便团队成员共享。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 这里可以添加组件的逻辑代码
</script>

<style scoped>
.main-base {
  padding: 20px;
  background-color: var(--base-bg);
  border-radius: 8px;
  color: var(--text-color);
}

.component {
  padding: 15px;
  background-color: var(--component-bg);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: var(--text-color);
}

:root {
  --base-bg: #f0f0f0;
  --component-bg: #ffffff;
  --text-color: #000000;
}

.dark {
  --base-bg: #1a1a1a;
  --component-bg: #2d2d2d;
  --text-color: rgba(255, 255, 255, 0.87);
}
</style>
