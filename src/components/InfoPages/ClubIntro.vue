<template>
  <div class="page-container min-h-screen bg-gray-50 dark:bg-zinc-900">
    <!-- Hero Section -->
    <div
      class="hero-section bg-gradient-to-br from-purple-600 to-blue-500 dark:from-purple-800 dark:to-blue-700 py-20 md:py-28">
      <div class="hero-content max-w-4xl mx-auto text-center px-4">
        <h1 class="hero-title text-4xl md:text-5xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
          社团简介
        </h1>
        <p
          class="hero-subtitle text-xl md:text-2xl text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
          TJUUS 社团介绍
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section max-w-6xl mx-auto px-4 py-12">
      <div class="card-grid grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(feature, index) in features" :key="index"
          class="feature-card bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:scale-105">
          <div class="card-icon text-4xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{{ feature.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    icon: '🏛️',
    title: '项目背景',
    description: '天津大学建筑复刻社团致力于...'
  },
  {
    icon: '👥',
    title: '团队组成',
    description: '来自巴啦巴啦专业的成员...'
  },
  {
    icon: '🎯',
    title: '使命愿景',
    description: '通过数字技术保存校园历史建筑...'
  }
];
</script>

<style scoped>
.hero-title {
  font-size: 3.5rem;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
}

.content-section {
  padding: 40px 0;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.feature-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #2c3e50;
}

.feature-card p {
  color: #7f8c8d;
  line-height: 1.6;
}

/* 深色模式适配 */
.dark .hero-section {
  background: linear-gradient(135deg, #2c3e50 0%, #4a6491 100%);
}

.dark .feature-card {
  background: #2d2d2d;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.dark .feature-card h3 {
  color: #ecf0f1;
}

.dark .feature-card p {
  color: #bdc3c7;
}
</style>