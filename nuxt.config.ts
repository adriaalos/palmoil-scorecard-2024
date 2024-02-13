export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    modules: [
        '@unocss/nuxt',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@vueuse/motion/nuxt'
    ],
    css: [
        '@unocss/reset/tailwind.css',
        '@/assets/scss/fonts.scss',
        '@/assets/scss/utils.scss'
    ]
})