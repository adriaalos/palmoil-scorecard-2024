<template>
    <section class="u-section">
        <div class="u-container u-container--lg">
            <img 
                class="absolute top-1/2 left-0 transform translate-x-[-75%]"
                src="@/assets/img/ab-closing-01.png"
            />
            <img 
                class="absolute top-1/2 left-full transform translate-x-[-25%]"
                src="@/assets/img/ab-closing-01.png"
            />
            <div>
                <h2 class="u-gradient u-gradient--greensoft-ocre font-wwf uppercase u-fs68 text-center text-transparent bg-clip-text">
                    Palm can be produced sustainably and responsibly, without deforestation and the conversion of natural ecosystems, benefitting both communities and the environment.
                </h2>
            </div>
        </div>
        <div class="u-container u-container--md mt-20">
            <div class="text-center">
                <p>But, seizing this opportunity requires urgent action to hold the palm oil industry accountable and steer it towards sustainability. Companies purchasing palm oil must swiftly embrace and support the production and utilisation of sustainable palm oil. <strong>Together, we can make a significant impact.</strong></p>
            </div>
        </div>
        <div class="u-container u-container--lg mt-20">
            <div class="flex space-x-12">
                <div class="flex-1">
                    <div class="u-gradient u-gradient--green-greensoft p-12 rounded-[60px]">
                        <h2 class="mb-6 font-wwf text-white u-fs55">ARE BRANDS COMMITED TO A RESPONSIBLE PALM OIL FUTURE?</h2>
                        <nuxt-link 
                            :to="`/${tr.sc_url}`"
                            class="u-button u-button--white-green"
                        >
                            <span>CHECK THE BRAND’S SCORES</span>
                        </nuxt-link>
                    </div>
                </div>
                <div class="flex-1 min-h-full">
                    <div class="rounded-[60px] min-h-full overflow-hidden">
                        <img 
                            v-motion-slide-visible-once-top
                            class="absolute top-0 left-0 w-full h-full object-cover object-center" 
                            src="@/assets/img/ab-closing-02.png"
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const tr = useTrStore().translations
</script>