import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useDarkStore = defineStore('dark', () => {
    // 从localStorage获取初始值
    const dark = ref(localStorage.getItem('dark') === 'true')

    // 监听dark变化并保存到localStorage
    watch(dark, (newVal) => {
        localStorage.setItem('dark', newVal.toString())
        updateTheme(newVal)
    }, { immediate: true })

    // 更新主题样式
    function updateTheme(isDark: boolean) {
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return {
        dark
    }
})
