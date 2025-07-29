<template>
  <div class="page-container min-h-screen bg-gray-50 dark:bg-zinc-900">
    <!-- Hero Section -->
    <div
      class="hero-section bg-gradient-to-br from-green-500 to-lime-400 dark:from-green-700 dark:to-lime-700 py-20 md:py-28">
      <div class="hero-content max-w-4xl mx-auto text-center px-4">
        <h1 class="hero-title text-4xl md:text-5xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
          卫津路校区复刻项目
        </h1>
        <p
          class="hero-subtitle text-xl md:text-2xl text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
          卫津路校区标志性建筑数字化复刻工程
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section max-w-6xl mx-auto px-4 py-12">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Timeline Section -->
        <div class="timeline-container bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 flex-1">
          <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">项目进展</h2>

          <div class="timeline grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(step, index) in steps" :key="index"
              class="timeline-item bg-gray-100 dark:bg-zinc-700 rounded-lg p-6 transition-all duration-300 hover:scale-105">
              <div
                class="timeline-badge w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                {{ step.id }}
              </div>
              <div class="timeline-content text-center">
                <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{{ step.title }}</h3>
                <p class="text-gray-600 dark:text-gray-300">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Gallery Preview -->
        <div class="gallery-container bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 flex-1">
          <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">建筑预览</h2>

          <div class="gallery-preview grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div v-for="i in 3" :key="i"
              class="gallery-item aspect-square bg-gray-200 dark:bg-zinc-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-zinc-600 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-300 hover:scale-105">
              <span class="text-lg">建筑 {{ i }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const steps = [
  { id: '1', title: '数据采集', description: '激光扫描与摄影测量技术结合...' },
  { id: '2', title: '模型重建', description: '基于点云数据的精细建模...' },
  { id: '3', title: '纹理贴图', description: '高分辨率照片映射表面材质...' }
];
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 800px;
  margin: 50px auto;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #e0e0e0;
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-badge {
  position: absolute;
  left: -40px;
  top: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #00b09b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  z-index: 1;
}

.timeline-content {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.gallery-preview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.gallery-item {
  aspect-ratio: 4/3;
  background: linear-gradient(45deg, #f5f7fa, #c3cfe2);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.gallery-item::before {
  content: '';
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
}

.gallery-item::after {
  content: '';
  position: absolute;
  top: 30%;
  left: 30%;
  right: 30%;
  bottom: 30%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 3px;
}

/* 深色模式适配 */
.dark .timeline-content {
  background: #2d2d2d;
}

.dark .gallery-item {
  background: linear-gradient(45deg, #2c3e50, #4a6491);
}
</style>