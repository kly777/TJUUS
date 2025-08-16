<script setup>
import { ref } from "vue";

const reports = ref([
  {
    period: "2025 Q1", //报告期
    summary: "财报摘要内容示例...", //摘要
    date: "2025-04-15", //发布日期
    link: "/reports/2025Q1.png" // 具体财报链接
  },
  {
    period: "2025 Q2",
    summary: "财报摘要内容示例...",
    date: "2025-07-15",
    link: "/reports/2025Q2.png"
  }
  // 按需继续添加
]);
</script>


<template>
  <div class="page-container min-h-screen bg-gray-50 dark:bg-zinc-900">
    <!-- Hero Section -->
    <div class="hero-section bg-gradient-to-br from-blue-500 to-indigo-400 dark:from-blue-700 dark:to-indigo-700 py-20 md:py-28">
      <div class="hero-content max-w-4xl mx-auto text-center px-4">
        <h1 class="hero-title text-4xl md:text-5xl font-bold text-white mb-4">财报公示</h1>
        <p class="hero-subtitle text-xl md:text-2xl text-white opacity-90">透明 · 公正 · 公开</p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section max-w-5xl mx-auto px-4 py-12">
      <table class="w-full border-collapse bg-white dark:bg-zinc-800 shadow-lg rounded-xl overflow-hidden">
        <thead>
          <tr class="bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-200">
            <th class="py-3 px-4 text-left">报告期</th>
            <th class="py-3 px-4 text-left">摘要</th>
            <th class="py-3 px-4 text-left">发布日期</th>
            <th class="py-3 px-4 text-left">查看</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(report, index) in reports" :key="index" class="border-t border-gray-200 dark:border-zinc-700">
            <td class="py-3 px-4">{{ report.period }}</td>
            <td class="py-3 px-4">{{ report.summary }}</td>
            <td class="py-3 px-4">{{ report.date }}</td>
            <td class="py-3 px-4">
              <a :href="report.link" target="_blank" class="text-blue-500 hover:underline">
                查看
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
