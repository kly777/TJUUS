<template>
  <div class="page-container min-h-screen bg-gray-50 dark:bg-zinc-900">
    <!-- Hero Section -->
    <div class="hero-section py-20 md:py-28"
      :style="`background: linear-gradient(135deg, ${colorConfig.from} 0%, ${colorConfig.to} 100%);`">
      <div class="hero-content max-w-4xl mx-auto text-center px-4">
        <h1 class="hero-title text-4xl md:text-5xl font-bold text-white mb-4">
          {{ contentData.title }}
        </h1>
        <p class="hero-subtitle text-xl md:text-2xl text-white opacity-90">
          {{ contentData.subtitle }}
        </p>
      </div>
    </div>

    <!-- Progress Section -->
    <div class="progress-section max-w-4xl mx-auto px-4 py-8">
      <div class="progress-bar bg-white dark:bg-zinc-800 rounded-full h-4 mb-2">
        <div class="progress-fill h-full rounded-full transition-all duration-1000"
          :style="`width: ${contentData.progress}%; background: ${colorConfig.from}`"></div>
      </div>
      <div class="progress-text text-center text-lg font-medium">
        完成度: {{ contentData.progress }}%
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section max-w-6xl mx-auto px-4 py-12">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Left Column -->
        <div class="flex-1">
          <!-- Campus-specific Content -->
          <div class="map-container bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">校区布局概览</h2>
            <!-- 北洋园特有内容 -->
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
              <!-- 其他图例 -->
            </div>
          </div>

          <div class="timeline-container bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">项目进展</h2>
            <!-- 卫津路特有内容 -->
            <div class="timeline grid grid-cols-1 md:grid-cols-3 gap-6">
              <div v-for="(step, index) in contentData.steps" :key="index"
                class="timeline-item bg-gray-100 dark:bg-zinc-700 rounded-lg p-6 transition-all duration-300 hover:scale-105">
                <div
                  class="timeline-badge w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto"
                  :style="`background: ${colorConfig.from}`">
                  {{ step.id }}
                </div>
                <div class="timeline-content text-center">
                  <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{{ step.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-300">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column (Common Content) -->
        <div class="flex-1">
          <!-- Stats Section -->
          <div class="stats-container grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(stat, index) in contentData.stats" :key="index"
              class="stat-card bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:scale-105">
              <div class="stat-value text-4xl font-bold mb-2" :style="`color: ${colorConfig.from}`">
                {{ stat.value }}
              </div>
              <div class="stat-label text-gray-600 dark:text-gray-400">
                {{ stat.label }}
              </div>
            </div>
          </div>

          <!-- Team Members -->
          <div class="team-section mt-8 bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">核心成员</h2>
            <div class="team-grid grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div v-for="member in contentData.team" :key="member.name" class="team-member text-center">
                <div
                  class="member-avatar mx-auto mb-2 w-16 h-16 rounded-full bg-gray-200 dark:bg-zinc-700 flex items-center justify-center">
                  <span class="text-xl">{{ member.initials }}</span>
                </div>
                <div class="member-name font-medium">{{ member.name }}</div>
                <div class="member-role text-sm text-gray-500 dark:text-gray-400">{{ member.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  campusType: {
    type: String,
    required: true,
    validator: (value: string) => ['beiyangyuan', 'weijinlu'].includes(value)
  },
  colorConfig: {
    type: Object,
    required: true,
    default: () => ({
      from: '#ff7e5f',
      to: '#feb47b'
    })
  },
  contentData: {
    type: Object,
    required: true,
    default: () => ({
      title: '校区复刻项目',
      subtitle: '校区三维建模与场景还原',
      progress: 85,
      stats: [
        { value: '32', label: '建筑模型' },
        { value: '12', label: '团队成员' }
      ],
      steps: [
        { id: '1', title: '数据采集', description: '激光扫描与摄影测量技术结合...' },
        { id: '2', title: '模型重建', description: '基于点云数据的精细建模...' }
      ],
      team: [
        { name: '张三', role: '项目经理', initials: 'ZS' },
        { name: '李四', role: '建模师', initials: 'LS' }
      ]
    })
  }
})
</script>

<style scoped>
.hero-section {
  transition: background 0.5s ease;
}

.progress-bar {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.progress-fill {
  transition: width 1s ease-in-out;
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

.stat-card {
  min-width: 120px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
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