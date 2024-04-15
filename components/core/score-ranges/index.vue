<template>
    <div class="flex items-center space-x-4 <md:flex-wrap <md:space-x-0 <md:-m-3">
        <template 
            v-for="range in ranges"
            :key="range.id"
        >
            <div
                class="flex items-center space-x-1  <md:w-1/3 <md:p-3 <sm:w-1/2"
            >
                <div
                    :class="['w-[48px] h-[48px] rounded-full flex items-center justify-center text-sm text-white font-wwf']"
                    :style="{ 'background-color': `${range.color}` }" 
                >
                    <span v-if="range.range">{{ range.range[0] }}-{{ range.range[1] }}</span>
                    <span v-else>NO SCORE</span>
                </div>
                <p class="font-wwf uppercase text-base whitespace-nowrap">{{ range.name }}</p>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
const sc = useScStore()

const props = defineProps({
    norespondents: {
        type: Boolean,
        default: true,
        required: false
    }
})

const ranges = computed(() => {
    return props.norespondents ? sc.ranges : sc.ranges.filter(range => range.id !== 'no-data')
})
</script>