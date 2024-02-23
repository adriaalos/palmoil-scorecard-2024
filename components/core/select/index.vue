<template>
    <div 
        
        @mouseleave="visible = false"
    >
        <div :class="[
                'flex items-center justify-between bg-white border border-[#dadada] px-3 py-2.5  cursor-pointer',
                { 'rounded-[50px]': !filter },
                { 'ring-1 ring-gray-300': visible }
            ]"
            @click="visible = !visible"
        >
            <span 
                :class="[
                    'cursor-pointer truncate pr-10',
                    { 'font-wwf uppercase u-fs18': !filter },
                    { 'text-base': filter },
                    { 'text-[#7b7b7b]': !model },
                    { 'text-[#000000]': model }
                ]"
            >
                {{ model ? model : placeholder }}
            </span>
            <div :class="[
                'flex items-center gap-1',
                { 'text-green': filter }]
            ">
                <svg
                    v-if="placeholder && model" 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="w-4 h-4 cursor-pointer"
                    @click.stop="onClear"
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
            'absolute top-full max-h-[200px] border border-[#dadada] border-t-0 z-10 overflow-auto',
            { 'w-[calc(100%-40px)] left-[20px]': !filter},
            { 'w-full left-0': filter },
            { 'opacity-0 pointer-events-none': !visible },
            { 'opacity-100 pointer-events-auto': visible }
        ]">
            <li 
                class="border-b border-[#dadada]"
                v-for="option in opts" 
                :key="option"
            >
                <span
                    :class="[
                        'px-3 py-1.5 block text-sm text-[#7b7b7b]',
                        { 'cursor-default bg-green text-white': model === option },
                        { 'cursor-pointer bg-white hover:bg-gray-100': model !== option }
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
    filter: {
        type: Boolean,
        required: false,
        default: false
    }
})
const emit = defineEmits(['onChange'])

const opts = ref<any>(props.options)
const visible = ref<boolean>(false)

const model = defineModel({
    required: false
})

const onChange = (option: any) => {
    visible.value = false
    model.value = option
    emit('onChange', option)
}

const onClear = () => {
    visible.value = false
    model.value = null
    emit('onChange', null)
}
</script>