export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    modules: [
        '@unocss/nuxt',
        '@pinia/nuxt',
    ],
    css: [
        '@unocss/reset/tailwind.css',
        '@/assets/scss/fonts.scss',
        '@/assets/scss/utils.scss'
    ]
})