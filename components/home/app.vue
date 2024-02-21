<template>
    <section class="u-section u-section--cake py-10">
        <div class="u-container">
            <div class="flex">
                <div class="w-1/2">
                    <div class="flex flex-col gap-y-8 h-full pt-12 px-12 pb-2 bg-green rounded-l-[12px]">
                        <div v-html="tr.ho_app_text" />
                        <div class="flex items-baseline">
                            <p class="text-white text-sm">{{ tr.ho_app_by }}</p>
                            <img src="@/assets/img/ho-app-waza.png" alt="Waza">
                        </div>
                    </div>
                </div>
                <div class="w-1/2 flex">
                    <div class="w-1/2" v-motion-slide-visible-once-bottom>
                        <img 
                            class="absolute top-1/2 transform -translate-y-1/2"
                            src="@/assets/img/ho-app-01.png" 
                            :alt="tr.ho_app_mobile_alt"
                        >
                    </div>
                    <div class="w-1/2">
                        <a class="block mb-2" :href="tr.ho_app_appstore_url" target="_blank">
                            <img src="@/assets/img/ho-app-appstore.png" :alt="tr.ho_app_appstore_alt">
                        </a>
                        <a :href="tr.ho_app_playstore_url" target="_blank">
                            <img src="@/assets/img/ho-app-googlestore.png" :alt="tr.ho_app_playstore_alt">
                        </a>
                        <img class="left-[-20px]" src="@/assets/img/ho-app-qr.png" alt="QR">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const tr = useTrStore().translations
</script>