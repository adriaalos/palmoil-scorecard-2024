<template>
    <div class="<sm:overflow-x-hidden">
        <cs-header />
        <cs-company />
        <cs-approach />
        <cs-roadblocks />
        <cs-plan />
        <core-cases />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const sc = useScStore()
if (!sc.companies.length) await sc.fetchScores()
await sc.setCompany(route.params.id)
</script>