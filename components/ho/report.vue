<template>
    <section class="u-section">
        <div class="u-container">
            <div class="bg-ocre py-20 rounded-[12px] <md:py-12" v-motion-pop-visible-once>
                <div class="flex justify-center items-center gap-x-12 <md:flex-col <md:gap-x-0 <md:gap-y-4">
                    <h3 class="u-fs48 font-wwf text-white">{{ $t('ho_report_text') }}</h3>
                    <a 
                        href="/2024/WWF_POBS_2023_3_ONLINE.pdf"
                        target="_blank"
                        class="u-button u-button--white-ocre"
                    >
                        <span>{{ $t('ho_report_button') }}</span>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11.9508L6.18868 6.4754L1 1" stroke="#E29F38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>