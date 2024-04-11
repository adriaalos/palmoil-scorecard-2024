<template>
    <section class="u-cs" v-if="cs">
        <div class="u-cs__approach bg-cake py-32">
            <div class="u-container u-container--lg">
                <header class="u-header u-header--left u-header--green u-header--case">
                    <h2>APPROACH AND KEY ACHIEVEMENTS</h2>
                </header>
                <div 
                    v-if="cs.approach.intro"
                    class="u-cs__approach__intro" 
                    v-html="cs.approach.intro" 
                />
                <div 
                    v-if="cs.approach.description"
                    class="u-cs__approach__description" 
                    v-html="cs.approach.description"
                />
                <div 
                    v-if="cs.approach.closing"
                    class="u-cs__approach__closing" 
                    v-html="cs.approach.closing"
                />
            </div>
        </div>
        <div class="-mt-32">
            <div class="w-full h-[50%] absolute top-0 left-0 bg-cake"></div>
            <div class="u-container">
                <div>
                    <img 
                        v-motion-slide-visible-once-top
                        src="@/assets/img/cs-02.png"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const csStore = useCsStore()
const cs = csStore.casestudy
</script>