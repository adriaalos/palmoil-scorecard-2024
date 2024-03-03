<template>
    <div class="u-range-balance">
        <div v-if="current == old">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1197 1.40289L18.2722 5.83768M18.2722 5.83768L14.1197 10.2725M18.2722 5.83768L8.59668 5.83768" stroke="#7B7B7B" stroke-width="1.61265" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.15278 1.40289L1.00024 5.83768M1.00024 5.83768L5.15278 10.2725M1.00024 5.83768L10.6758 5.83768" stroke="#7B7B7B" stroke-width="1.61265" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div v-if="current > old">
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.93207 5.79731L5.49729 1.64477M5.49729 1.64477L1.0625 5.79731M5.49729 1.64477L5.49729 11.3203" stroke="#7B7B7B" stroke-width="1.61265" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>+{{ (current - old).toFixed(2).replace(/\.00$/, '') }}</span>
        </div>
        <div v-if="current < old">
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.93207 7.16735L5.49729 11.3199M5.49729 11.3199L1.0625 7.16735M5.49729 11.3199L5.49729 1.64435" stroke="#7B7B7B" stroke-width="1.61265" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>-{{ (old - current).toFixed(2).replace(/\.00$/, '') }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    current: {
        type: Number,
        required: true
    },
    old: {
        type: Number,
        required: true
    }
})
</script>