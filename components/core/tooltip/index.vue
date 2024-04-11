<template>
    <div class="w-[500px] max-w-screen p-9 bg-cake">
        <h5 class=" mb-4 text-xs font-bold uppercase [&>br]:hidden" v-html="cat.label" />
        <div>
            <div class="mb-6 last:mb-0" v-for="section in cat.sections ">
                <h6 class="mb-3 text-xs font-bold uppercase text-[#7b7b7b]">{{ section.description }}</h6>
                <div 
                    v-for="c in section.categories"
                    :class="[`u-legend u-legend--${getScore(c)}`]"
                >
                    <div class="u-legend__score">
                        <span>{{ getScore(c) }}</span>
                    </div>
                    <div
                        class="u-legend__description"
                    >
                        <p>{{ getDescription(c) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const sc = useScStore()
const props = defineProps({
    category: {
        type: String,
        required: true
    },
    company: {
        type: Object as PropType<any>,
        required: true
    }
})

const cat = ref<any>(sc.categories.find((c) => c.id === props.category))

const getScore = (c: any) => {
    let respond = 'yes'

    switch (c.property) {
        case 'supMill':
            if (!props.company[props.category].supMill && !props.company[props.category].supPlant) {
                respond = 'no'
            }
            break
        case 'rspoMember':
            if (!props.company[props.category][c.property]) {
                respond = 'no'
            }
            break
        case 'poigMemeber':
            if (!props.company[props.category][c.property]) {
                respond = 'no'
            }
            break
        case 'memberPlatforms':
            if (!props.company[props.category][c.property]) {
                respond = 'no'
            }
            break
        case 'haveOnTheGrnd':
            if (!props.company[props.category][c.property]) {
                respond = 'no'
            }
            break

        default:
            respond = props.company[props.category][c.property].toLowerCase()
            if (respond.includes('partially')) {
                respond = 'partially'
            }
            break
    }
    return respond
}

const getDescription = (c: any) => {
    const respond = getScore(c)
    let description = c[respond] || ''
    if (c.property === 'commitRspoCpo' && respond === 'partially') {
        description = getCommitRspoCpoDescription(c)
    }

    if (c.property === 'supMill') {
        description = getSupplierMillPlantDescription(c)
    }

    if (c.property === 'memberPlatforms') {
        description = getPlatformMemberOfDescription(c)
    }

    return description
}

const getCommitRspoCpoDescription = (c: any) => {
    if (Number.isNaN(+props.company[props.category].commitLaterDate)) {
        return c['partially_non_date']
    } else {
        return (
            c['partially_target_date'] + props.company[props.category].commitLaterDate
        );
    }
}

const getSupplierMillPlantDescription = (c: any) => {
    let description = c['no']
    if (props.company[props.category].supMill) {
        description = c['yes_mill']
    }
    if (props.company[props.category].supPlant) {
        description = c['yes_plant']
    }
    return description;
}

const getPlatformMemberOfDescription = (c: any) => {
    if (props.company[props.category].memberPlatforms) {
        return (
            c['yes'] +
            ' ' +
            formatString(props.company[props.category].platformNames, ';')
        );
    } else {
        return c['no'];
    }
}

</script>