<template>
    <header class="u-page-header" v-if="sc.company">
        <div class="u-page-header__container u-container u-container--lg">
            <div class="u-page-header__header">
                <h2>{{ tr.sc_co_header_year }}</h2>
                <h1>{{ sc.company.companyName }}</h1>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const tr = useTrStore().translations
const sc = useScStore()
</script>