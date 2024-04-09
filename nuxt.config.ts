export default defineNuxtConfig({
    app: {
        baseURL: '/2024'
    },
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
        'nuxt-swiper',
        '@nuxtjs/i18n',
    ],
    css: [
        '@unocss/reset/tailwind.css',
        '@/assets/scss/fonts.scss',
        '@/assets/scss/utils.scss'
    ],
    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en.json'
            },
        ],
        lazy: true,
        langDir: 'assets/lang',
        defaultLocale: 'en',
        compilation: {
            strictMessage: false
        }
    }
})