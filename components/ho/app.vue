<template>
    <section class="u-section u-section--cake py-10">
        <div class="u-container">
            <div class="flex <lg:flex-col">
                <div class="w-6/12 <lg:w-full">
                    <div class="flex flex-col gap-y-8 h-full py-12 px-12 bg-green rounded-l-[12px] <lg:rounded-[12px]">
                        <div v-html="$t('ho_app_text')" class="[&>p]:text-base" />
                        <!-- <div class="flex items-baseline">
                            <p class="text-white text-sm">{{ $t('ho_app_by') }}</p>
                            <img src="@/assets/img/ho-app-waza.png" alt="Waza">
                        </div> -->
                    </div>
                </div>
                <div class="w-6/12 flex <lg:w-full <lg:justify-center <lg:space-x-10 <lg:mt-10 <md:space-x-6">
                    <div class="w-1/2 <lg:w-auto" v-motion-slide-visible-once-bottom>
                        <img 
                            class="absolute top-1/2 transform -translate-y-1/2 <lg:relative <lg:transform-none <lg:top-0 <lg:max-h-[50vh]"
                            src="@/assets/img/ho-app-01.png" 
                            :alt="$t('ho_app_mobile_alt')"
                        >
                    </div>
                    <div class="w-1/2 <lg:w-auto">
                        <a class="block mb-2" :href="$t('ho_app_appstore_url')" target="_blank">
                            <img src="@/assets/img/ho-app-appstore.png" :alt="$t('ho_app_appstore_alt')">
                        </a>
                        <a :href="$t('ho_app_playstore_url')" target="_blank">
                            <img src="@/assets/img/ho-app-googlestore.png" :alt="$t('ho_app_playstore_alt')">
                        </a>
                        <img class="left-[-20px]" src="@/assets/img/ho-app-qr.png" alt="QR">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>