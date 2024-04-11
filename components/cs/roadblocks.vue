<template>
    <section class="u-section" v-if="cs && cs.roadblocks">
        <div class="u-container u-container--lg">
            <div class="">
                <div class="mb-16">
                    <div 
                        v-motion-slide-visible-once-right
                        class="u-gradient u-gradient--green-greensoft p-12 rounded-[12px]"
                    >
                        <h3 class="font-wwf text-white uppercase u-fs48 text-center">Roadblocks and solutions</h3>
                    </div>
                </div>
                <div class="u-cs__roadblocks" v-html="cs.roadblocks"></div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const csStore = useCsStore()
const cs = csStore.casestudy
</script>