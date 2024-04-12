<template>
    <section class="u-section" v-if="sc.companies && cs.casestudies">
        <div class="u-container u-container--lg">
            <header class="u-header u-header--left">
                <h2>CASE STUDIES</h2>
            </header>
        </div>
        <div class="-mt-16">
            <Swiper
                :slidesPerView="slidesPerV"
                :modules="[SwiperPagination]"
                :spaceBetween="40"
                :centeredSlides="false"
                :slidesOffsetBefore="40"
                :pagination="{
                    clickable: true,
                }"
                :loop="false"
            >
                <SwiperSlide
                    v-for="casestudy in cs.casestudies"
                >
                    <div class="flex flex-col bg-green rounded-[60px] overflow-hidden h-[500px]">
                        <nuxt-link
                            :to="`/case-studies/${casestudy.id}`"
                            class="group h-[300px] overflow-hidden"
                        >
                            <img 
                                class="w-full h-full object-cover object-center transform group-hover:scale-115 transition-transform duration-500 ease-in-out"
                                :src="`/2024/cs-${casestudy.company}-thumb.jpg`"
                                alt=""
                            />
                        </nuxt-link>
                        <div class="font-wwf text-white py-3 p-6 flex-1 flex flex-col">
                            <h4 class="u-fs20 uppercase">{{ getData(casestudy).hq }}</h4>
                            <h3 class="uppercase u-fs36">{{ getData(casestudy).name }}</h3>
                            <nuxt-link
                                :to="`/case-studies/${casestudy.id}`"
                                class="absolute bottom-8 right-8 u-link u-link--white flex justify-end mt-2 hover:opacity-80">
                                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" class="<lg:w-[48px]">
                                    <path d="M26 32.9273L31.1887 27.4636L26 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M52.5 27C52.5 41.0833 41.0833 52.5 27 52.5C12.9167 52.5 1.5 41.0833 1.5 27C1.5 12.9167 12.9167 1.5 27 1.5C41.0833 1.5 52.5 12.9167 52.5 27Z" stroke="white" stroke-width="3"/>
                                </svg>
                            </nuxt-link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup lang="ts">
const cs = useCsStore()
const sc = useScStore()
const cases = ref(cs.casestudies || [])

import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()

const slidesPerV = ref(3.5)
if (width.value <= 1024) slidesPerV.value = 2.75
if (width.value <= 768) slidesPerV.value = 2.25
if (width.value <= 640) slidesPerV.value = 1.5

const getData = (item: any) => {
    const comp = sc.companies.find((company: any) => company.id === item.id)
    return {
        name: comp?.companyName,
        hq: comp?.hq,
    }
}

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
</style>