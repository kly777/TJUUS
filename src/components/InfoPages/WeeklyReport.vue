<template>
  <div class="page-container min-h-screen bg-gray-50 dark:bg-zinc-900">
    <!-- Hero Section -->
    <div class="hero-section bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-blue-700 dark:to-cyan-700 py-20 md:py-28">
      <div class="hero-content max-w-4xl mx-auto text-center px-4">
        <h1 class="hero-title text-4xl md:text-5xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
          运营周报
        </h1>
        <p class="hero-subtitle text-xl md:text-2xl text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
          复刻项目每周进度与技术指标报告
        </p>
      </div>
    </div>
    
    <!-- Content Section -->
    <div class="content-section max-w-6xl mx-auto px-4 py-12">
      <div class="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-8">
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Progress Section -->
          <div class="progress-section flex-1">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">本周进展</h2>
            <div class="progress-items space-y-6">
              <div
                v-for="i in 3"
                :key="i"
                class="progress-item bg-gray-100 dark:bg-zinc-700 rounded-lg p-4"
              >
                <div class="flex items-center mb-2">
                  <div class="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white">项目进展 {{ i }}</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 pl-6">详细内容将由用户补充...</p>
              </div>
            </div>
          </div>
          
          <!-- Metrics Section -->
          <div class="metrics-section flex-1">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">技术指标</h2>
            <div class="metrics-grid grid grid-cols-2 gap-4">
              <div
                v-for="i in 4"
                :key="i"
                class="metric-card bg-gray-100 dark:bg-zinc-700 rounded-lg p-4 text-center"
              >
                <div class="text-2xl font-bold text-blue-500 dark:text-blue-400 mb-2">指标 {{ i }}</div>
                <div class="text-gray-600 dark:text-gray-300">详细数据待补充</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 保留原有样式 */
</style>