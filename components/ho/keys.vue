<template>
    <section class="u-section u-section--padded u-section--cake">
        <div class="u-container u-container--lg">
            <header class="u-header">
                <h2> {{ $t('ho_keys_title') }}</h2>
                <div v-html="$t('ho_keys_description')"></div>
                <div class="flex justify-center mt-10">
                    <nuxt-link 
                        :to="`/${$t('an_url')}`"
                        class="u-button"
                    >
                        <span>{{ $t('ho_keys_button') }}</span>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11.9361L6.18868 6.47244L1 1.00879" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </nuxt-link>
                </div>
            </header>
            <div>
                <div class="u-container">
                    <img v-motion-slide-visible-once-top src="@/assets/img/ho-keys.png" :alt="$t('ho_keys_title')">
                </div>
            </div>
            <ul class="mt-6 flex items-center justify-center gap-4">
                <li v-for="sm in share" :key="sm.id">
                    <a :href="sm.url" target="_blank">
                        <img :src="`/2024/ico-${sm.id}.svg`" :alt="sm.url">
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()

const share = ref([
    {
        id: 'twitter',
        url: $i18n.t('ho_keys_twitter')
    },
    {
        id: 'facebook',
        url: $i18n.t('ho_keys_facebook')
    },
    {
        id: 'linkedin',
        url: $i18n.t('ho_keys_linkedin')
    }
])
</script>