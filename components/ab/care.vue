<template>
    <section class="u-section">
        <div class="u-container u-container--md">
            <div class="u-header">
                <h3>{{ $t('ab_care_title') }}</h3>
            </div>
        </div>
        <div class="mb-20">
            <Swiper
                :slidesPerView="1.5"
                :modules="[SwiperPagination, SwiperNavigation]"
                :spaceBetween="distance"
                :centeredSlides="true"
                :pagination="{
                    clickable: true,
                }"
                :navigation="true"
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
                <h3>{{ $t('ab_care_cols_title') }}</h3>
            </header>
            <div class="flex space-x-10 -mt-12 <sm:flex-col <sm:space-x-0">
                <div class="flex-1" v-html="$t('ab_care_cols_01')" />
                <div class="flex-1" v-html="$t('ab_care_cols_02')" />
            </div>
        </div>
        <div class="mt-20">
            <div class="u-container u-container--lg">
                <header class="pl-12">
                    <h4 class="u-fs24 uppercase font-wwf text-green">{{ $t('ab_care_lands_title') }}</h4>
                    <p class="text-[10px] text-[#7B7B7B] leading-[12px]" v-html="$t('ab_care_lands_source')" />
                </header>
                <div>
                    <img 
                        v-motion-slide-visible-once-top
                        src="@/assets/img/ab-care-06.svg"
                    />
                </div>
            </div>
            <div class="u-container u-container--md text-center" v-html="$t('ab_care_lands_description')" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()

const distance = ref(150)
if (width.value <= 1024) distance.value = 100
if (width.value <= 768) distance.value = 75
if (width.value <= 640) distance.value = 50
</script>

<style lang="scss">
.swiper {
    @apply overflow-y-visible;
}
.swiper-pagination-bullets.swiper-pagination-horizontal {
    @apply top-[100%] mt-6;
}
.swiper-pagination-bullet {
    @apply w-[12px] h-[12px] rounded-full <md:w-[8px] <md:h-[8px];
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
    @apply bg-green;
}
.swiper-button-prev, .swiper-button-next {
    @apply bg-green w-[54px] h-[54px] rounded-full shadow-md;
    &:after {
        @apply text-white text-sm;
    }
}
</style>