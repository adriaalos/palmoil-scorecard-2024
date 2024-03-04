<template>
    <div>
        <ho-hero />
        <ho-scatter />
        <ho-keys />
        <ho-rean />
        <ho-app />
        <ho-report />
        <ho-partners />
    </div>
</template>

<script setup lang="ts">
const sc = useScStore()
if (!sc.companies.length) await sc.fetchScores()
</script>

