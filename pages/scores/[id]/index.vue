<template>
    <div>
        <sc-co-header />
        <sc-co-resume />
        <sc-co-stats />
        <sc-co-categories />
        <sc-co-global />
        <sc-co-results-commitments />
        <sc-co-results-purchasing />
        <sc-co-results-suppliers />
        <sc-co-results-platforms />
        <sc-co-results-ground />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const sc = useScStore()
if (!sc.companies.length) await sc.fetchScores()
await sc.setCompany(route.params.id)
</script>