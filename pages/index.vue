<template>
    <div>
        <ho-hero />
        <ho-scatter />
        <ho-keys />
        <ho-rean />
        <ho-app />
        <ho-report />
    </div>
</template>

<script setup lang="ts">
const sc = useScStore()
await sc.fetchScores()
</script>

