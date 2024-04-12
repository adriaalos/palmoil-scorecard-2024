<template>
    <section class="u-section">
        <div class="u-container">
            <div class="flex flex-wrap <md:flex-col-reverse <md:flex-nowrap">
                <div class="w-1/2 <md:w-full">
                    <div class="pic pic--end">
                        <img v-motion-slide-visible-once-left src="@/assets/img/ho-rean-01.jpg">
                    </div>
                    <div class="pic pic--end">
                        <img v-motion-slide-visible-once-left src="@/assets/img/ho-rean-02.jpg" class="<md:-left-6">
                    </div>
                </div>
                <div class="w-1/2 pl-12 sticky top-3 self-start <md:w-full <md:relative">
                    <div class="u-header u-header--left">
                        <h2>{{ $t('ho_rean_re_title') }}</h2>
                        <h3>{{ $t('ho_rean_re_subtitle') }}</h3>
                        <div v-html="$t('ho_rean_re_description')" />
                        <div class="mt-10">
                        <nuxt-link 
                            :to="`/${$t('re_url')}`"
                            class="u-button"
                        >
                            <span>{{ $t('ho_rean_re_button') }}</span>
                            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11.9361L6.18868 6.47244L1 1.00879" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </nuxt-link>
                    </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap mt-20 <md:flex-nowrap <md:flex-col">
                <div class="w-1/2 pr-12 sticky top-3 self-start <md:w-full <md:relative">
                    <div class="u-header u-header--left">
                        <h2>{{ $t('ho_rean_me_title') }}</h2>
                        <h3>{{ $t('ho_rean_me_subtitle') }}</h3>
                        <div v-html="$t('ho_rean_me_description')" />
                        <div class="mt-10">
                        <nuxt-link 
                            :to="`/${$t('me_url')}`"
                            class="u-button"
                        >
                            <span>{{ $t('ho_rean_me_button') }}</span>
                            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11.9361L6.18868 6.47244L1 1.00879" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </nuxt-link>
                    </div>
                    </div>
                </div>
                <div class="w-1/2 <md:w-full">
                    <div class="pic pic--start">
                        <img v-motion-slide-visible-once-right src="@/assets/img/ho-rean-03.jpg">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.pic {
    @apply mb-20 flex;
    img {
        @apply max-w-none <sm:max-w-full;
    }
    &--end {
        @apply justify-end;
    }
    &:last-of-type {
        @apply mb-0;
    }
}
</style>