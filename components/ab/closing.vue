<template>
    <section class="u-section">
        <div class="u-container u-container--lg">
            <img 
                class="absolute top-1/2 left-0 transform translate-x-[-75%] <sm:hidden"
                src="@/assets/img/ab-closing-01.png "
            />
            <img 
                class="absolute top-1/2 left-full transform translate-x-[-25%] <sm:hidden"
                src="@/assets/img/ab-closing-01.png"
            />
            <div>
                <h2 class="u-gradient u-gradient--greensoft-ocre font-wwf uppercase u-fs68 text-center text-transparent bg-clip-text">
                    {{ $t('ab_closing_title') }}
                </h2>
            </div>
        </div>
        <div class="u-container u-container--md mt-20">
            <div class="text-center" v-html="$t('ab_closing_description')" />
        </div>
        <div class="u-container u-container--lg mt-20">
            <div class="flex space-x-12 <sm:flex-col <sm:space-x-0 <sm:space-y-6">
                <div class="flex-1">
                    <div class="u-gradient u-gradient--green-greensoft p-12 rounded-[60px]">
                        <h2 class="mb-6 font-wwf text-white u-fs55">{{ $t('ab_closing_cta_title') }}</h2>
                        <nuxt-link 
                            :to="`/${$t('sc_url')}`"
                            class="u-button u-button--white-green"
                        >
                            <span>{{ $t('ab_closing_cta_button') }}</span>
                        </nuxt-link>
                    </div>
                </div>
                <div class="flex-1 min-h-full">
                    <div class="rounded-[60px] min-h-full overflow-hidden">
                        <img 
                            v-motion-slide-visible-once-top
                            class="absolute top-0 left-0 w-full h-full object-cover object-center <sm:relative" 
                            src="@/assets/img/ab-closing-02.png"
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>