import presetUno from '@unocss/preset-uno'
import { defineConfig } from 'unocss'
import { presetMini } from '@unocss/preset-mini'

export default defineConfig({
    presets: [
        presetMini(),
        presetUno({
            dark: {
                light: 'light',
                dark: 'dark',
            },
        }),
    ],
})