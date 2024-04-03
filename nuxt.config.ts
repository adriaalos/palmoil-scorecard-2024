export default defineNuxtConfig({
    ignore: [
        '**/*._*'
    ],
    devtools: { enabled: true },
    ssr: false,
    modules: [
        '@unocss/nuxt',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@vueuse/motion/nuxt',
        'floating-vue/nuxt',
        'nuxt-swiper'
    ],
    css: [
        '@unocss/reset/tailwind.css',
        '@/assets/scss/fonts.scss',
        '@/assets/scss/utils.scss'
    ]
})