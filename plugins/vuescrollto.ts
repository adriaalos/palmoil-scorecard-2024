import VueScrollTo from 'vue-scrollto'

export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.vueApp.directive('scroll-to', {
        mounted(el, binding) {
            const { element } = binding.value
            el.addEventListener('click', (e: Event) => {
                e.preventDefault()
                VueScrollTo.scrollTo(element, { easing: [0.12, 0, 0.39, 0] })
            })
        },
    })

    return {
        provide: {
            $scrollTo: VueScrollTo.scrollTo
        }
    }
})