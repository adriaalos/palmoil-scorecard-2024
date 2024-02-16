<template>
    <div 
        @mouseenter="visible = true"
        @mouseleave="visible = false"
    >
        <div :class="[
            'flex items-center justify-between bg-white border border-[#dadada] px-3 py-2.6 rounded-[50px]',
            { 'ring-1 ring-gray-300': visible }
        ]">
            <span 
                :class="[
                    'font-wwf u-fs18 uppercase',
                    { 'text-[#7b7b7b]': !sel },
                    { 'text-[#000000]': sel }
                ]"
            >
                {{ sel ? sel : placeholder }}
            </span>
            <div class="flex items-center gap-1">
                <svg
                    v-if="placeholder && sel" 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="w-4 h-4 cursor-pointer"
                    @click="onClear"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"     stroke-width="1.5" stroke="currentColor" 
                    :class="[
                        'w-4 h-4 transform',
                        { 'rotate-0': !visible },
                        { 'rotate-180': visible }
                    ]"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
        <ul :class="[
            'absolute top-full left-[20px] w-[calc(100%-40px)] border border-[#dadada] border-t-0 z-10',
            { 'opacity-0 pointer-events-none': !visible },
            { 'opacity-100 pointer-events-auto': visible }
        ]">
            <li 
                v-for="option in opts" 
                :key="option"
            >
                <span
                    :class="[
                        'px-3 py-0.5 block text-sm text-[#7b7b7b]',
                        { 'cursor-default bg-green text-white': sel === option },
                        { 'cursor-pointer bg-white hover:bg-gray-100': sel !== option }
                    ]"
                    @click="onChange(option)"
                >
                    {{ option }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    placeholder: {
        type: String,
        required: false,
        default: ''
    },
    options: {
        type: Array,
        required: true,
        default: []
    },
    selected: {
        required: false,
        default: null
    }
})
const emit = defineEmits(['onChange'])

const opts = ref<any>(props.options)
const sel = ref<any>(props.selected)
const visible = ref<boolean>(false)

const onChange = (option) => {
    visible.value = false
    sel.value = option
    emit('onChange', option)
}

const onClear = () => {
    sel.value = null
    emit('onChange', null)
}
</script>