<template>
    <section class="u-section mb-32 u-cs__approach" v-if="cs && cs.plan">
        <div class="py-12 u-gradient u-gradient--green-greensoft">
            <img class="absolute top-0 -left-16 mix-blend-color-burn" src="@/assets/img/cs-04.png">
            <div class="u-container u-container--lg">
                <div class="w-8/12 pr-10">
                    <div class="flex-1">
                        <header class="u-header u-header--left">
                            <h2 class="text-white uppercase">Action Plan for the next 5 years</h2>
                            <div class="u-cs__plan" v-html="cs.plan" />
                        </header>
                    </div>
                </div>
            </div>
            <div class="absolute right-0 top-1/2 transform -translate-y-1/2 max-h-[120%] overflow-hidden rounded-[60px]">
                <img 
                    class="w-full h-full object-cover object-center"
                    src="@/assets/img/cs-03.png"
                >
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const csStore = useCsStore()
const cs = csStore.casestudy
</script>