<template>
    <div>
        <core-header />
        <main role="main">
            <nuxt-page />
        </main>
        <core-footer />
    </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const trStore = useTrStore()
const appStore = useAppStore()

if (!Object.keys(trStore.translations).length) {
    await trStore.fetchTranslations() 
}

const prevY = ref(0)
const y = ref(useWindowScroll().y)

watch(y, (newY) => {
    newY > prevY.value ? appStore.setScrollDirection('down') : appStore.setScrollDirection('up')
    appStore.setScrollPosition(newY)
    prevY.value = newY
})


</script>