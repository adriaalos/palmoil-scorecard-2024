<template>
    <div>
        <sc-header />
        <sc-legend />
        <sc-data />
    </div>
</template>

<script setup lang="ts">
const sc = useScStore()
if (!sc.companies.length) await sc.fetchScores()
</script>