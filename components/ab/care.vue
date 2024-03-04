<template>
    <section class="u-section">
        <div class="u-container u-container--md">
            <div class="u-header">
                <h3>WHY YOU SHOULD CARE ABOUT PALM OIL?</h3>
            </div>
        </div>
        <div class="mb-20">
            <Swiper
                :slidesPerView="1.5"
                :modules="[SwiperPagination]"
                :spaceBetween="150"
                :centeredSlides="true"
                :pagination="{
                    clickable: true,
                }"
                :loop="false"
            >
                <SwiperSlide class="">
                    <div class="flex justify-center">
                        <div>
                            <img src="@/assets/img/ab-care-01.svg" alt="">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center">
                        <div>
                            <img src="@/assets/img/ab-care-02.svg" alt="">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center">
                        <div>
                            <img src="@/assets/img/ab-care-03.svg" alt="">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center">
                        <div>
                            <img src="@/assets/img/ab-care-04.svg" alt="">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center">
                        <div>
                            <img src="@/assets/img/ab-care-05.svg" alt="">
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="pt-20 u-container u-container--lg">
            <header class="u-header u-header--left">
                <h3>WHY DON’T WE SIMPLY REPLACE PALM OIL</h3>
            </header>
            <div class="flex space-x-10 -mt-12">
                <div class="flex-1">
                    <p>
                        <strong>Palm oil's remarkable productivity, surpassing other vegetable oils, is a critical factor.</strong> While considering alternatives might seem like a solution, the reality is that replacing palm oil could exacerbate environmental and social challenges. The efficiency of palm oil production means that replacing it with other oils may demand four to ten times more land, posing a greater threat to nature and wildlife.
                    </p>
                </div>
                <div class="flex-1">
                    <p>
                        Beyond its agricultural impact, the palm oil industry plays a significant role in job creation, particularly supporting rural communities where palm oil is a lifeline. Shifting away from this commodity could have substantial consequences, especially for the 40% of global palm oil production contributed by smallholder farmers. <strong>Striking a balance that ensures sustainability while supporting livelihoods is key.</strong>
                    </p>
                </div>
            </div>
        </div>
        <div class="mt-20">
            <div class="u-container u-container--lg">
                <header class="pl-12">
                    <h4 class="u-fs24 uppercase font-wwf text-green">land required to produce 1 tonne of major oils</h4>
                    <p class="text-[10px] text-[#7B7B7B] leading-[12px]">Source: Meijaard, E. et al. (2018). Oil palm and biodiversity. <br> A situation analysis by the IUCN Oil Palm Task Force.</p>
                </header>
                <div>
                    <img 
                        v-motion-slide-visible-once-top
                        src="@/assets/img/ab-care-06.svg"
                    />
                </div>
            </div>
            <div class="u-container u-container--md text-center">
                <p>
                    Palm oil demand is projected to increase in the near future. This growth could cause more environmental and social problems, not only in Southeast Asia but also in places like Africa, Latin America and Papua New Guinea.<br>
                    <strong>But here's the good news: As consumers we have a CHOICE!</strong>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const tr = useTrStore().translations
</script>

<style lang="scss">
.swiper {
    @apply overflow-y-visible;
}
.swiper-pagination-bullets.swiper-pagination-horizontal {
    @apply top-[100%] mt-6;
}
.swiper-pagination-bullet {
    @apply w-[12px] h-[12px] rounded-full;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
    @apply bg-green;
}
</style>