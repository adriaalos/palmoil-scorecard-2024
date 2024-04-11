<template>
    <section v-if="sc.company">
        <div class="w-full h-full absolute top-0 left-0">
            <img 
                v-motion-fade-visible-once
                class="absolute top-0 left-0 w-full h-full object-cover object-center" 
                src="@/assets/img/cs-01.jpg"                
            >
        </div>
        <div class="u-container u-container--lg pt-96 pb-32">
            <header class="font-wwf text-white uppercase">
                <h2 class="u-fs40">{{ sc.company.hq }}</h2>
                <h1 class="u-fs100">{{ sc.company.companyName }}</h1>
            </header>
            
        </div>
    </section>
</template>

<script setup lang="ts">
const sc = useScStore()
</script>