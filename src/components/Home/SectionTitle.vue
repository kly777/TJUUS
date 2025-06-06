<template>
    <div class="mb-10">
        <!-- 主标题 -->
        <div class="text-center font-semibold text-blue-400 dark:text-blue-300 
                text-xl sm:text-2xl md:text-3xl lg:text-4xl opacity-80">
            {{ main }}
        </div>

        <!-- 副标题 -->
        <div class="text-center italic relative text-lg sm:text-xl
                mt-[-15px] text-sky-700 dark:text-blue-200">
            {{ sub }}
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    main: String,
    sub: String
})
</script>