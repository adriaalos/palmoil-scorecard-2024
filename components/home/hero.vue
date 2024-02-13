
import type { Style } from '#build/components';
<template>
    <div class="overflow-hidden">
        <div class="u-container u-container--md py-28">
            <div class="collage">
                <img v-motion-slide-top src="@/assets/img/ho-hero-01.png" alt="hero" class="collage__pic collage__pic--01" />
                <img v-motion-slide-top src="@/assets/img/ho-hero-02.png" alt="hero" class="collage__pic collage__pic--02" />
                <img v-motion-slide-right src="@/assets/img/ho-hero-03.png" alt="hero" class="collage__pic collage__pic--03" />
                <img v-motion-slide-left src="@/assets/img/ho-hero-04.png" alt="hero" class="collage__pic collage__pic--04" />
                <img v-motion-slide-bottom src="@/assets/img/ho-hero-05.png" alt="hero" class="collage__pic collage__pic--05" />
                <img v-motion-slide-bottom src="@/assets/img/ho-hero-06.png" alt="hero" class="collage__pic collage__pic--06" />
                <img v-motion-slide-visible-once-bottom src="@/assets/img/ho-hero-07.png" alt="hero" class="collage__pic collage__pic--07" />
            </div>
            <header class="font-wwf uppercase text-center">
                <h3 class="u-fs88 text-black" v-html="tr.ho_hero_year" />
                <h1 class="-mt-8 u-fs220 text-green" v-html="tr.ho_hero_title_big" />
                <h2 class="-mt-9 u-fs180 bg-gradient-to-b from-green via-green to-gold inline-block text-transparent bg-clip-text" v-html="tr.ho_hero_title_small" />
            </header>
            <div class="mt-6 py-3 font-wwf text-white u-fs31 uppercase text-center bg-green rounded-[42px]">
                <p>{{ tr.ho_hero_claim }}</p>
            </div>
            <div class="flex justify-center mt-18">
                <nuxt-link 
                    :to="`/${tr.sc_url}`"
                    class="u-button u-button--hero"
                >
                    <span>{{ tr.ho_hero_button }}</span>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11.9273L6.18867 6.46365L1 1" stroke="#41B464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </nuxt-link>
            </div>
        </div>
        <div class="mt-32 p-16">
            <div class="collage">
                <img v-motion-slide-visible-once-left src="@/assets/img/ho-hero-08.png" alt="hero" class="collage__pic collage__pic--08" />
                <img v-motion-slide-visible-once-right src="@/assets/img/ho-hero-09.png" alt="hero" class="collage__pic collage__pic--09" />
            </div>
            <div class="u-container u-container--lg">
                <div class="u-fs32 text-center" v-html="tr.ho_hero_about_description" />
                <div class="flex justify-center mt-18">
                    <nuxt-link 
                        :to="`/${tr.ab_url}`"
                        class="u-button"
                    >
                        <span>{{ tr.ho_hero_about_button }}</span>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11.9361L6.18868 6.47244L1 1.00879" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const tr = useTrStore().translations
</script>

<style lang="scss" scoped>
.collage {
    @apply w-full h-full absolute top-0 left-0;
    &__pic {
        @apply absolute transform;
        &--01 {
            @apply -top-20 -left-20;
        }
        &--02 {
            @apply -top-48 left-2/3;
        }
        &--03 {
            @apply top-22 left-full;
        }
        &--04 {
            @apply top-60 -left-72;
        }
        &--05 {
            @apply bottom-20 left-5/6;
        }
        &--06 {
            @apply -bottom-7 -left-60;
        }
        &--07 {
            @apply -bottom-28 left-12/12;
        }
        &--08 {
            @apply top-0 -left-10;
        }
        &--09 {
            @apply -bottom-10 -right-20;
        }
    }
}
</style>