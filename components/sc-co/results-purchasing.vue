<template>
    <section v-if="sc.company && sc.company.respStatus" class="border-t pt-20 mt-20">
        <div class="u-container u-container--lg">
            <div class="flex space-x-6">
                <div>
                    <div :class="[`u-range u-range--results u-sc-bg ${purchasingColor}`]">
                        {{ sc.company.purchasing.purchTotalScore }}
                    </div>
                    <div :class="[`my-1 text-sm font-bold text-center u-sc-text ${purchasingColor}`]">
                        OUT OF {{ purchasing?.out_of }}
                    </div>
                    <core-range-balance 
                        v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"            
                        :current="sc.company.purchasing.purchTotalScore" 
                        :old="sc.company.previousScore.purchTotalCalcScore"
                    />
                    <div :class="[`u-range u-range--bg ${purchasingColor2021}`]">
                        {{ sc.company.previousScore.purchTotalCalcScore }}
                    </div>
                    <div 
                        v-if="Object.keys(sc.company.previousScore).length >    0 && sc.company.respStatus"
                        class="text-sm font-wwf text-[#7B7B7B] text-center"
                    >2021</div>
                </div>
                <div class="flex-1">
                    <header>
                        <h2 class="u-result-cat">PURCHASING SUSTAINABLE PALM OIL</h2>
                    </header>
                    <div class="u-result-block">
                        <header>
                            <h3 class="u-result-block__header"><span>Are all of the company’s palm oil volumes 100% RSPO certified?</span></h3>
                        </header>
                        <div class="flex">
                            <div class="w-1/2">
                                <div :class="[`u-result-card u-result-card--flex u-result-card u-result-card--${transformValue(sc.company.purchasing.rspoCert)}`]">
                                    <div class="u-result-card__ans">
                                        <span>{{ transformValue(sc.company.purchasing.rspoCert) }}</span>
                                    </div>
                                    <div class="u-result-card__des">
                                        {{ getPurchasingDescription('rspoCert') }}
                                    </div>
                                    <VDropdown :triggers="['hover']" class="u-result-card__tooltip">
                                        <a><img src="@/assets/img/tooltip.svg"></a>

                                        <template #popper>
                                            <div class="u-result-card__tooltip__content">
                                                <p>
                                                    {{ PURCHASING_TOOLTIPS[0] }}
                                                </p>
                                            </div>
                                        </template>
                                    </VDropdown>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div class="mt-10">
                            <div :class="[`u-result-card u-result-card u-result-card--border`]">
                                <div class="u-result-card__que u-result-card__que--absolute">
                                    How much RSPO certified sustainable palm oil does the company purchase overall?
                                </div>
                                <div class="u-result-card__bar">
                                    <div class="u-result-card__bar__label">
                                        <span>2024 -</span> <span>{{ PURCHASING_DATA.global.label }}</span>
                                    </div>
                                    <div class="u-result-card__bar__bar">
                                        <div class="u-result-card__bar__wrap">
                                            <div 
                                            v-if="PURCHASING_DATA.global.sgip > 0" 
                                            class="u-result-card__bar__item bg-[#4AB16A]" :style="{
                                                'width': `calc(${PURCHASING_DATA.global.sgip}% + 15px)`,
                                                'left': `${PURCHASING_DATA.global.bAndG + PURCHASING_DATA.global.mb}%`
                                            }">
                                                <span class="last">{{ PURCHASING_DATA.global.sgip }}%</span>
                                            </div>
                                            <div 
                                            v-if="PURCHASING_DATA.global.mb > 0" 
                                            class="u-result-card__bar__item bg-[#83DA9E]" :style="{
                                                'width': `calc(${PURCHASING_DATA.global.mb}% + 15px)`,
                                                'left': `${PURCHASING_DATA.global.bAndG}%`
                                            }">
                                                <span>{{ PURCHASING_DATA.global.mb }}%</span>
                                            </div>
                                            <div v-if="PURCHASING_DATA.global.bAndG > 0" class="u-result-card__bar__item bg-[#BBE5C8]" :style="{
                                                'width': `calc(${PURCHASING_DATA.global.bAndG}% + 15px)`,
                                                'left': `${PURCHASING_DATA.global.bAndG}%`
                                            }">
                                                <span>{{ PURCHASING_DATA.global.bAndG }}%</span>
                                            </div>
                                        </div>
                                        <div class="u-result-card__bar__total-wrap">
                                            <div 
                                                class="u-result-card__bar__total"
                                                :style="{
                                                    'left': `${PURCHASING_DATA.global.total}%`
                                                }"
                                            >
                                                <span>{{ PURCHASING_DATA.global.total }}%</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-10">
                            <div :class="[`u-result-card u-result-card u-result-card--border`]">
                                <div class="u-result-card__que u-result-card__que--absolute">
                                    How much RSPO certified sustainable palm oil does THE COMPANY purchase by palm oil type?
                                </div>
                                <div 
                                    v-for="item in PURCHASING_DATA.specific"
                                    class="u-result-card__bar"
                                >
                                    <div class="u-result-card__bar__label">
                                        <span>{{ item.label }} -</span> <span>{{ item.volume }}</span>
                                    </div>
                                    <div class="u-result-card__bar__bar">
                                        <div class="u-result-card__bar__wrap">
                                            <div 
                                            v-if="item.sgip > 0" 
                                            class="u-result-card__bar__item bg-[#4AB16A]" :style="{
                                                'width': `calc(${item.sgip}% + 15px)`,
                                                'left': `${item.bAndG + item.mb}%`
                                            }">
                                                <span class="last">{{ item.sgip }}%</span>
                                            </div>
                                            <div 
                                            v-if="item.mb > 0" 
                                            class="u-result-card__bar__item bg-[#83DA9E]" :style="{
                                                'width': `calc(${item.mb}% + 15px)`,
                                                'left': `${item.bAndG}%`
                                            }">
                                                <span>{{ item.mb }}%</span>
                                            </div>
                                            <div v-if="item.bAndG > 0" class="u-result-card__bar__item bg-[#BBE5C8]" :style="{
                                                'width': `calc(${item.bAndG}% + 15px)`,
                                                'left': `${item.bAndG}%`
                                            }">
                                                <span>{{ item.bAndG }}%</span>
                                            </div>
                                        </div>
                                        <div class="u-result-card__bar__total-wrap">
                                            <div 
                                                class="u-result-card__bar__total"
                                                :style="{
                                                    'left': `${item.total}%`
                                                }"
                                            >
                                                <span>{{ item.total }}%</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="u-result-block">
                        <header>
                            <h3 class="u-result-block__header"><span>What is the company's estimated RSPO CSPO uptake by region?</span></h3>
                        </header>
                        <div class="flex m-3">
                            <div 
                                v-for="item in PURCHASING_COUNTRIES"
                                class="w-2/12 p-3"
                            >
                                <template v-if="item.volume > 0">
                                    <div class="w-[100px] h-[100px] flex items-center justify-center bg-white after:content-[''] after:w-[2px] after:h-[50%] after:absolute after:bottom-0 after:bg-[#41b464] before:content-[''] before:w-[10px] before:h-[2px] before:bg-[#41b464] before:absolute before:bottom-0 before:rounded-full">
                                        <div 
                                            class="bg-[#4AB16A] flex items-center justify-center text-white text-center rounded-full font-wwf text-sm z-10"
                                            :style="{
                                                'width': `${item.volume * PURCHASING_COUNTRY_RATIO}px`,
                                                'height': `${item.volume * PURCHASING_COUNTRY_RATIO}px`
                                            }"
                                        >
                                            <span :class="[
                                                item.volume < 30 ? 'absolute text-[#41b464] bottom-full' : ''
                                            ]">{{ item.volume }}%</span>
                                        </div>
                                    </div>
                                    <div class="mt-2 text-[#7B7B7B] text-xs font-bold uppercase text-center">
                                        {{ item.name }}
                                    </div>
                                </template>

                            </div>
                        </div>
                    </div>
                    <div class="u-result-block">
                        <header>
                            <h3 class="u-result-block__header"><span>Did the company report palm oil quantities for its entire operations?</span></h3>
                        </header>
                        <div class="flex">
                            <div class="w-1/2">
                                <div :class="[`u-result-card u-result-card--flex u-result-card u-result-card--${transformValue(sc.company.purchasing.entireOps)}`]">
                                    <div class="u-result-card__ans">
                                        <span>{{ transformValue(sc.company.purchasing.entireOps) }}</span>
                                    </div>
                                    <div class="u-result-card__des">
                                        {{ getPurchasingDescription('entireOps') }}
                                    </div>
                                    <VDropdown :triggers="['hover']" class="u-result-card__tooltip">
                                        <a><img src="@/assets/img/tooltip.svg"></a>

                                        <template #popper>
                                            <div class="u-result-card__tooltip__content">
                                                <p>
                                                    {{ PURCHASING_TOOLTIPS[2] }}
                                                </p>
                                            </div>
                                        </template>
                                    </VDropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const tr = useTrStore().translations
const sc = useScStore()

const purchasing = ref(sc.categories.find(c => c.id === 'purchasing'))
const purchasingColor = ref(sc.company ? sc.getRangeColor(sc.company.purchasing.purchTotalScore, 'purchasing', sc.company.respStatus) : '')
const purchasingColor2021 = ref(sc.company ? sc.getRangeColor2021(sc.company.previousScore.purchTotalCalcScore, 'purchasing', sc.company.respStatus) : '')
const PURCHASING_CARDS = ref<any>({
    rspoCert: {
        options: {
            yes: 'All of the company’s palm oil volumes are RSPO certified',
            no: 'Not all of the company’s palm oil volumes are RSPO certified',
            none: 'None of the company’s palm oil volumes ares RSPO certified',
        },
    },
    entireOps: {
        options: {
            yes: 'All of the countries in which the group/company operates (company is not part of a group)',
            no: 'Only some of the countries in which the group/company operates',
            partially:
            'All of the countries in which the company operates, but not the group ',
        },
    },
});

const PURCHASING_TOOLTIPS = ref([
    'Purchasing RSPO CSPO is a simple action any company can take towards cleaning its own supply chain and incentivising more sustainable production. Currently a significant percentage of RSPO CSPO is unsold and remains available for purchase. Closing this gap of oversupply will send an important signal to producers that markets support sustainable palm oil. WWF scored companies based on the proportion of their total palm oil sourcing that is certified as sustainable under one or more RSPO supply chain models. A bonus point is awarded to companies that have gone all the way to ensure they are 100% covered by RSPO CSPO. Data is drawn from the company\'s RSPO 2020 Annual Communication of Progress reports and represents self-declared information that has been verified by WWF.',
    'In their 2020 Annual Communication of Progress reports, members of the RSPO were asked to provide insight into their purchases of sustainable palm oil across nine geographies they operate in. Data represented on this map are estimates based on self-declared information.',
    'WWF expects palm oil buyers to disclose their palm oil usage and sustainability efforts across their entire operations — including all palm volumes and types they source, and geographies in which they operate. If a company is part of a corporate group, the same must be true for the group level.',
])

const PURCHASING_DATA = ref({
    global: {
        label: formatNumberWithComma(sc.company?.purchasing.purchOver) + ' MT',
        volume: '',
        bAndG: sc.company?.purchasing.bAndG,
        mb: sc.company?.purchasing.mb,
        sgip: sc.company?.purchasing.sgip,
        total: (sc.company?.purchasing.bAndG ?? 0) + (sc.company?.purchasing.mb ?? 0) + (sc.company?.purchasing.sgip ?? 0)
    },
    specific: [
        {
            label: 'CPO',
            volume: formatNumberWithComma(sc.company?.purchasing.cpoVolume) + ' MT',
            bAndG: sc.company?.purchasing.bAndGCpo,
            mb: sc.company?.purchasing.mbCpo,
            sgip: sc.company?.purchasing.sgipCpo,
            total: (sc.company?.purchasing.bAndGCpo ?? 0) + (sc.company?.purchasing.mbCpo ?? 0) + (sc.company?.purchasing.sgipCpo ?? 0)
        },
        {
            label: 'PKO',
            volume: formatNumberWithComma(sc.company?.purchasing.pkoVolume) + ' MT',
            bAndG: sc.company?.purchasing.bAndGPko,
            mb: sc.company?.purchasing.mbPko,
            sgip: sc.company?.purchasing.sgipPko,
            total: (sc.company?.purchasing.bAndGPko ?? 0) + (sc.company?.purchasing.mbPko ?? 0) + (sc.company?.purchasing.sgipPko ?? 0)
        },
        {
            label: 'PKE',
            volume: formatNumberWithComma(sc.company?.purchasing.pkeVolume) + ' MT',
            bAndG: sc.company?.purchasing.bAndGPke,
            mb: sc.company?.purchasing.mbPke,
            sgip: sc.company?.purchasing.sgipPke,
            total: (sc.company?.purchasing.bAndGPke ?? 0) + (sc.company?.purchasing.mbPke ?? 0) + (sc.company?.purchasing.sgipPke ?? 0)
        },
        {
            label: 'POD',
            volume: formatNumberWithComma(sc.company?.purchasing.podVolume) + ' MT',
            bAndG: sc.company?.purchasing.bAndGPod,
            mb: sc.company?.purchasing.mbPod,
            sgip: sc.company?.purchasing.sgipPod,
            total: (sc.company?.purchasing.bAndGPod ?? 0) + (sc.company?.purchasing.mbPod ?? 0) + (sc.company?.purchasing.sgipPod ?? 0)
        },
    ]
})

const PURCHASING_COUNTRY_RATIO = ref(0.7);
const PURCHASING_COUNTRIES = ref([
    {
        name: 'Europe',
        volume: (sc.company?.purchasing.cspoEurope ?? 0)
    },
    {
        name: 'North America',
        volume: (sc.company?.purchasing.cspoNorthAm ?? 0)
    },
    {
        name: 'Malaysia',
        volume: (sc.company?.purchasing.cspoMalaysia ?? 0)
    },
    {
        name: 'Indo',
        volume: (sc.company?.purchasing.cspoIndo ?? 0)
    },
    {
        name: 'China',
        volume: (sc.company?.purchasing.cspoChina ?? 0)
    },
    {
        name: 'India',
        volume: (sc.company?.purchasing.cspoIndia ?? 0)
    },
    {
        name: 'Latam',
        volume: (sc.company?.purchasing.cspoLatAm ?? 0)
    },
    {
        name: 'Africa',
        volume: (sc.company?.purchasing.cspoAfrica ?? 0)
    },
    {
        name: 'Rest of the world',
        volume: (sc.company?.purchasing.cspoWorld ?? 0)
    }
])

const getPurchasingDescription = (field: string) => {
    if (sc.company) {
        const value = sc.company.purchasing[field]
        return PURCHASING_CARDS.value[field].options[value.toLowerCase()]
    }
}


</script>