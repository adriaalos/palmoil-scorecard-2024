<template>
    <div>
        <home-hero />
        <home-scatter />
    </div>
</template>

<script setup lang="ts">
const sc = useScStore()
await sc.fetchScores()
</script>

