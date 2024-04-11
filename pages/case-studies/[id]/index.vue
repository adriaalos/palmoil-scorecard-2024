<template>
    <div>
        <cs-header />
        <cs-company />
        <cs-approach />
        <cs-roadblocks />
        <cs-plan />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const sc = useScStore()
if (!sc.companies.length) await sc.fetchScores()
await sc.setCompany(route.params.id)
</script>