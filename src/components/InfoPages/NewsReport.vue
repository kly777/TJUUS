<template>
  <div class="page-container min-h-screen bg-gray-50 dark:bg-zinc-900">
    <!-- Hero Section -->
    <div
      class="hero-section bg-gradient-to-br from-red-500 to-orange-400 dark:from-red-700 dark:to-orange-700 py-20 md:py-28">
      <div class="hero-content max-w-4xl mx-auto text-center px-4">
        <h1 class="hero-title text-4xl md:text-5xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
          新闻报道
        </h1>
        <p
          class="hero-subtitle text-xl md:text-2xl text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
          项目进展与校园文化传承动态资讯
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section max-w-6xl mx-auto px-4 py-12">
      <div class="news-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 6" :key="i"
          class="news-card bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105">
          <div class="news-image h-40 bg-gray-200 dark:bg-zinc-700"></div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">新闻标题 {{ i }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">新闻摘要内容将由用户补充...</p>
            <div class="text-sm text-gray-500 dark:text-gray-400">2023-06-01</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 保留原有样式 */
</style>