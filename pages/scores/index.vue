<template>
    <div>
        <sc-header />
        <sc-legend />
        <sc-data />
    </div>
</template>

<script setup lang="ts">
const sc = useScStore()
await sc.fetchScores()
</script>