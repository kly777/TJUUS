<template>
  <div class="page-container min-h-screen bg-gray-50 dark:bg-zinc-900">
    <!-- Hero Section -->
    <div
      class="hero-section bg-gradient-to-br from-orange-400 to-yellow-400 dark:from-orange-700 dark:to-yellow-700 py-20 md:py-28">
      <div class="hero-content max-w-4xl mx-auto text-center px-4">
        <h1 class="hero-title text-4xl md:text-5xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
          北洋园校区复刻项目
        </h1>
        <p
          class="hero-subtitle text-xl md:text-2xl text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
          北洋园校区核心区域三维建模与场景还原
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section max-w-6xl mx-auto px-4 py-12">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Map Section -->
        <div class="map-container bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 flex-1">
          <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">校区布局概览</h2>

          <div class="map-overview mb-8">
            <div class="map-grid grid grid-cols-3 gap-3">
              <div v-for="i in 9" :key="i"
                class="map-cell aspect-square rounded-lg border-2 border-gray-200 dark:border-zinc-700" :class="[
                  i % 3 === 0 ? 'bg-orange-400' : '',
                  i % 3 === 1 ? 'bg-purple-500' : '',
                  i % 3 === 2 ? 'bg-teal-400' : ''
                ]"></div>
            </div>
          </div>

          <div class="map-legend flex flex-wrap gap-4">
            <div class="legend-item flex items-center">
              <div class="color-box w-5 h-5 rounded mr-2 bg-orange-400"></div>
              <span class="text-gray-700 dark:text-gray-300">教学楼区</span>
            </div>
            <div class="legend-item flex items-center">
              <div class="color-box w-5 h-5 rounded mr-2 bg-purple-500"></div>
              <span class="text-gray-700 dark:text-gray-300">生活区</span>
            </div>
            <div class="legend-item flex items-center">
              <div class="color-box w-5 h-5 rounded mr-2 bg-teal-400"></div>
              <span class="text-gray-700 dark:text-gray-300">景观区</span>
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="stats-container grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          <div v-for="(stat, index) in stats" :key="index"
            class="stat-card bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:scale-105">
            <div class="stat-value text-4xl font-bold mb-2 text-orange-500 dark:text-orange-400">
              {{ stat.value }}
            </div>
            <div class="stat-label text-gray-600 dark:text-gray-400">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '85%', label: '完成度' },
  { value: '32', label: '建筑模型' },
  { value: '12', label: '团队成员' }
];
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%);
}
</style>

<style scoped>


.map-container {
  display: flex;
  gap: 40px;
  margin-top: 40px;
}

.map-overview {
  flex: 2;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(10px);
}

.map-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  aspect-ratio: 1/1;
}

.map-cell {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.map-cell:hover {
  transform: scale(1.05);
  background: rgba(255, 255, 255, 0.3);
}

.map-legend {
  flex: 1;
  background: white;
  border-radius: 20px;
  padding: 20px;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.color-box {
  width: 30px;
  height: 30px;
  border-radius: 6px;
  margin-right: 15px;
}

.stats-container {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.stat-card {
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 15px;
  min-width: 120px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.stat-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff7e5f;
}

.stat-label {
  color: #7f8c8d;
  margin-top: 10px;
}

/* 深色模式适配 */
.dark .map-overview {
  background: rgba(45, 45, 45, 0.3);
}

.dark .map-legend,
.dark .stat-card {
  background: #2d2d2d;
}
</style>