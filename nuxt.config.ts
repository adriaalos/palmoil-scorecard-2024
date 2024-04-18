export default defineNuxtConfig({
    /* app: {
        baseURL: '/2024'
    }, */
    app: {
        head: {
          script: [
            { 
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=UA-84202334-1',
            },
            {
                innerHTML: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                    dataLayer.push(arguments);
                    }
                    gtag("js", new Date());
                `
            }
          ],
        },
    },
    ignore: [
        '**/*._*'
    ],
    devtools: { enabled: true },
    ssr: true,
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