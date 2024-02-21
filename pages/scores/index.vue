<template>
    <div>
        <sc-header />
    </div>
</template>

<script setup lang="ts">
const sc = useScStore()
await sc.fetchScores()
</script>