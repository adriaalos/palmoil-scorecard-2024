<template>
    <div>
        <home-hero />
        <home-scatter />
        <home-keys />
        <home-rean />
        <home-app />
    </div>
</template>

<script setup lang="ts">
const sc = useScStore()
await sc.fetchScores()
</script>

