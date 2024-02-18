<template>
    <section class="u-section overflow-hidden">
        <div class="u-container u-container--lg">
            <header class="u-header">
                <h2> {{ tr.ho_keys_title }}</h2>
                <div v-html="tr.ho_keys_description"></div>
                <div class="flex justify-center mt-10">
                    <nuxt-link 
                        :to="`/${tr.an_url}`"
                        class="u-button"
                    >
                        <span>{{ tr.ho_keys_button }}</span>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11.9361L6.18868 6.47244L1 1.00879" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </nuxt-link>
                </div>
            </header>
            <div>
                <div class="u-container">
                    <img v-motion-slide-visible-once-top src="@/assets/img/ho-keys.png" :alt="tr.ho_keys_title">
                </div>
            </div>
            <ul class="mt-6 flex items-center justify-center gap-4">
                <li v-for="sm in share" :key="sm.id">
                    <a :href="sm.url" target="_blank">
                        <img :src="`/ico-${sm.id}.svg`" :alt="sm.url">
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
const tr = useTrStore().translations

const share = ref([
    {
        id: 'twitter',
        url: tr.ho_keys_twitter 
    },
    {
        id: 'facebook',
        url: tr.ho_keys_facebook 
    },
    {
        id: 'linkedin',
        url: tr.ho_keys_linkedin 
    }
])
</script>