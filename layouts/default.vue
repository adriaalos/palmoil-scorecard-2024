<template>
    <div>
        <core-header />
        <nuxt-page />
    </div>
</template>

<script setup lang="ts">
const trStore = useTrStore()
if (!Object.keys(trStore.translations).length) {
    await trStore.fetchTranslations() 
}
</script>