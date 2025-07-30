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

    <!-- 卡片区域 -->
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

    <!-- 时间轴区域 -->
    <div class="timeline-section max-w-6xl mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">发展历程</h2>

      <!-- 容器层 -->
      <div class="timeline-wrapper relative min-h-[400px]">
        <!-- 时间线主体 -->
        <div class="timeline-axis absolute left-1/2 top-0 bottom-0 w-1.5 transform -translate-x-1/2 z-0">
          <!-- 装饰元素 -->
          <div class="axis-decoration absolute top-0 bottom-0 w-full">
            <!-- 动态效果 -->
            <div
              class="axis-glow absolute left-1/2 top-0 bottom-0 w-4 transform -translate-x-1/2 bg-gradient-to-b from-blue-400/30 to-purple-500/30 blur-md">
            </div>
            <!-- 脉冲动画 -->
            <div
              class="axis-pulse absolute left-1/2 top-0 bottom-0 w-1.5 transform -translate-x-1/2 animate-pulse bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500">
            </div>
          </div>
        </div>

        <!-- 时间事件 -->
        <div class="timeline-events relative z-10">
          <div v-for="(event, index) in historyEvents" :key="index" class="timeline-event mb-16 last:mb-0">
            <div
              class="event-card bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
              :class="{ 'ml-auto mr-12 md:mr-24': index % 2 === 0, 'mr-auto ml-12 md:ml-24': index % 2 === 1 }">
              <!-- 事件内容保持不变 -->
              <div class="event-date text-blue-500 dark:text-blue-400 font-bold mb-2">{{ event.date }}</div>
              <h3 class="event-title text-xl font-semibold mb-2 text-gray-800 dark:text-white">{{ event.title }}</h3>
              <p class="event-description text-gray-600 dark:text-gray-300">{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 宣言和现状介绍 -->
    <div class="declaration-section max-w-6xl mx-auto px-4 py-12">
      <div class="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8">
        <h2 class="text-2xl font-bold mb-6 text-center text-purple-600 dark:text-purple-400">社团宣言</h2>
        <p class="declaration-text text-lg text-center italic text-gray-700 dark:text-gray-300 mb-10 max-w-4xl mx-auto">
          {{ declaration }}
        </p>

        <h2 class="text-2xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">现状介绍</h2>
        <div class="current-status grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(item, index) in currentStatus" :key="index"
            class="status-item bg-gray-50 dark:bg-zinc-700 rounded-xl p-5 text-center shadow-md">
            <div class="status-value text-2xl font-bold text-blue-500 dark:text-blue-300 mb-2">{{ item.value }}</div>
            <div class="status-label text-gray-600 dark:text-gray-300">{{ item.label }}</div>
          </div>
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
    description: '社团致力于...'
  },
  {
    icon: '👥',
    title: '团队组成',
    description: '来自巴啦巴啦专业的成员...'
  },
  {
    icon: '🎯',
    title: '使命愿景',
    description: '通过数字技术保存校园建筑...'
  }
];

// 历史事件数据
const historyEvents = [
  {
    date: "2018年3月",
    title: "社团成立",
    description: "由几位热爱数字复刻的学生发起成立"
  },
  {
    date: "2019年5月",
    title: "首个校园项目",
    description: "完成北洋园校区图书馆的数字复刻"
  },
  {
    date: "2020年9月",
    title: "技术升级",
    description: "引入激光扫描和摄影测量技术"
  },
  {
    date: "2022年1月",
    title: "跨校区合作",
    description: "与卫津路校区团队建立长期合作"
  },
  {
    date: "2023年6月",
    title: "社区拓展",
    description: "建立线上分享平台和教程体系"
  }
];

// 社团宣言
const declaration = "我们致力于通过数字技术保存和传承校园文化遗产，让历史建筑在虚拟世界获得新生。通过精确的数字化复刻，我们连接过去与未来，为校园留下永恒的记忆。";

// 现状介绍
const currentStatus = [
  { label: "成员数量", value: "32人" },
  { label: "完成项目", value: "28个" },
  { label: "技术方向", value: "三维建模、纹理映射、场景重建" },
  { label: "合作院校", value: "3所" }
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

/* 波浪线样式 */
.timeline-line {
  width: 20px !important;
}

.wave-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.wave {
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #3498db, #9b59b6);
  border-radius: 50%;
  animation: wave 3s infinite ease-in-out;
  opacity: 0.7;
  transform: translateY(100%);
}

.dark .wave {
  background: linear-gradient(45deg, #42a5f5, #ab47bc);
}

@keyframes wave {
  0%, 100% {
    transform: translateY(100%) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(0) scale(1.2);
    opacity: 1;
  }
}

/* 时间轴样式 */
.timeline-container {
  min-height: 400px;
  position: relative;
}

.timeline-event:nth-child(odd) {
  padding-right: 50%;
  padding-left: 30px;
}

.timeline-event:nth-child(even) {
  padding-left: 50%;
  padding-right: 30px;
}

@media (max-width: 768px) {
  .timeline-line {
    left: 30px;
  }

  .timeline-event:nth-child(odd),
  .timeline-event:nth-child(even) {
    padding-left: 60px;
    padding-right: 20px;
  }
}

/* 宣言区域 */
.declaration-text {
  line-height: 1.8;
}

/* 现状介绍 */
.status-item {
  transition: all 0.3s ease;
}

.status-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
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

.dark .event-card {
  background: #2d2d2d;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.dark .event-title {
  color: #ecf0f1;
}

.dark .event-description {
  color: #bdc3c7;
}

.dark .declaration-section .bg-white {
  background: #2d2d2d;
}

.dark .status-item {
  background: #333;
}

.timeline-container {
  min-height: 400px;
  position: relative;
}





.timeline-events {
  position: relative;
  z-index: 1;
}

/* 奇数项向左偏移 */
.timeline-event:nth-child(odd) .event-card {
  margin-left: auto;

}

/* 偶数项向右偏移 */
.timeline-event:nth-child(even) .event-card {
  margin-right: auto;

}


/* 时间线容器 */
.timeline-wrapper {
  position: relative;
  min-height: 400px;
  overflow: visible;
}

/* 时间轴主体 */
.timeline-axis {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 0.375rem;
  /* 6px */
  transform: translateX(-50%);
  z-index: 0;
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 999px;
  box-shadow: 0 0 10px #3b82f6, 0 0 20px #8b5cf6;
}

/* 装饰元素 */
.axis-decoration {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* 脉冲动画 */
@keyframes pulse {
  0% {
    opacity: 0.8;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.8;
  }
}

.axis-pulse {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 0.375rem;
  height: 100%;
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  animation: pulse 2s infinite;
}

/* 光晕效果 */
.axis-glow {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1rem;
  height: 100%;
  background: linear-gradient(to bottom, #3b82f640, #8b5cf640);
  filter: blur(8px);
}

/* 响应式适配 */
@media (max-width: 768px) {
  .timeline-axis {
    display: none;
  }

  .timeline-event .event-card {
    margin-left: auto !important;
    margin-right: auto !important;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

</style>