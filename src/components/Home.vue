<script setup lang="ts">
import "animate.css";
import PageBanner from "./Home/PageBanner.vue";
import { NDivider } from "naive-ui";

import Developing from "./Home/Developing.vue";
import SectionTitle from "./Home/SectionTitle.vue";
import ProjectCards from "./Home/Project/ProjectCards.vue";
import FeaturedItems from "./Home/Building/FeaturedItems.vue";
import Carousel from "./Home/Carousel.vue";
import GlassSplitView from "./Home/About/GlassSplitView.vue";
import FollowUs from "./Home/FollowUs.vue";
import Creeper from "./Home/3DModels/Creeper.vue";
</script>

<template>
  <div class="min-h-screen">
    <!-- 页面顶部图片 -->
    <PageBanner />

    <!-- 开发中 -->
    <section class="intro sm:mx-10 md:mx-20 lg:mx-30 mx-0 w-[85%] py-8">
      <Developing class="developing" />
    </section>

    <n-divider :dashed="true"></n-divider>

    <!-- 项目卡片和右边的爬行者 -->
    <section class="grid sc box-border justify-center items-center sm:mx-7 mx-9">
      <div class="grid-cols-1">
        <ProjectCards class="row lg:w-80%" />
      </div>
      <div class="h-auto w-0 justify-self-start creeper animate__animated animate__fadeInRight animate__delay-2s">
        <Creeper
          class="sm:h-[350px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[550px] lg:w-[550px] h-[260px] w-[250px]" />
      </div>
    </section>

    <!-- 关于我们 -->
    <section class="intro sm:mx-10 md:mx-20 lg:mx-30 mx-0 w-80% py-8">
      <SectionTitle class="row my" main="我们是" sub="TJUUS"></SectionTitle>
    </section>

    <!-- 玻璃视图 -->
    <GlassSplitView />

    <!-- 伙伴 -->
    <section class="intro sm:mx-10 md:mx-20 lg:mx-30 mx-5 w-80% py-8">
      <SectionTitle class="row my" main="建设成果" sub="探索Minecraft的无限可能"></SectionTitle>
      <FeaturedItems class="row" />
      <SectionTitle class="row my-5" main="我们的伙伴" sub="联合"></SectionTitle>
      <Carousel class="row my-5" />
    </section>

    <!-- 关注我们 -->
    <FollowUs class="mt" />
  </div>
</template>

<style scoped>
.sc {
  grid-template-columns: 100% 0%;
}

.row {
  transition: all 0.3s ease;
}

.developing {
  margin: 15px auto;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.intro {
  margin: auto;
  min-width: 200px;
  max-width: 1280px;
}

@media (max-width: 767px) {
  .intro {
    padding: 15px;
  }
}

.creeper {
  transform: translate(-46%, 0);
  transition: all 0.7s ease-in-out;
}

.creeper:hover {
  transform: translate(-49%, 0) scale(0.98);
}
</style>
