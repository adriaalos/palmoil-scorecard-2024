<template>
    <div>
        <sc-co-header />
        <sc-co-resume />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const sc = useScStore()
await sc.fetchScores()
await sc.setCompany(route.params.id)
</script>