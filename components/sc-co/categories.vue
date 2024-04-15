<template>
    <section v-if="sc.company" class="mt-16">
        <div class="u-container u-container--lg">
            <div class="flex flex-wrap items-center">
                <div v-if="commitments" class="w-1/2 px-6 py-6 <sm:w-full">
                    <div class="flex justify-between items-end mb-3">
                        <div class="flex-1 flex space-x-3 items-center">
                            <div :class="[`u-range u-range--cat u-range--bg ${commitments_color}`]">
                                {{ commitments_pts }}
                            </div>
                            <div>
                                <h4 class="text-xl leading-[18px] text-[#7B7B7B] font-wwf uppercase" v-html="commitments.label"></h4>
                            </div>
                        </div>
                        <div>
                            <p :class="[`font-montserrat font-semibold text-xs u-sc-text ${commitments_color}`]">
                                {{ commitments_pts }} OF {{ commitments_max }}  ({{ commitments_per.toFixed(2)  }}%)
                            </p>
                        </div>
                    </div>
                    <div class="u-bar">
                        <div class="u-bar__ranges">
                            <span>0</span>
                            <span>·</span>
                            <span>·</span>
                            <span>{{ commitments_max / 2 }}</span>
                            <span>·</span>
                            <span>·</span>
                            <span>{{ commitments_max }}</span>
                        </div>
                        <div class="u-bar__scores">
                            <div 
                                :class="[`u-bar__score u-range u-range--bg ${commitments_color}`]"
                                :style="`left: ${commitments_per.toFixed(2)}%`"
                            >
                                {{ commitments_pts }}
                            </div>
                        </div>
                        <div class="u-bar__median" :style="`left: ${commitments_median_per.toFixed(2)}%`">
                            <span class="u-bar__median__indicator"></span>
                            <span class="u-bar__median__text">MEDIAN</span>
                        </div>
                    </div>
                </div>
                <div v-if="purchasing" class="w-1/2 px-6 py-6 <sm:w-full">
                    <div class="flex justify-between items-end mb-3">
                        <div class="flex-1 flex space-x-3 items-center">
                            <div :class="[`u-range u-range--cat u-range--bg ${purchasing_color}`]">
                                {{ purchasing_pts }}
                            </div>
                            <div>
                                <h4 class="text-xl leading-[18px] text-[#7B7B7B] font-wwf uppercase" v-html="purchasing.label"></h4>
                            </div>
                        </div>
                        <div>
                            <p :class="[`font-montserrat font-semibold text-xs u-sc-text ${purchasing_color}`]">
                                {{ purchasing_pts }} OF {{ purchasing_max }}  ({{ purchasing_per.toFixed(2)  }}%)
                            </p>
                        </div>
                    </div>
                    <div class="u-bar">
                        <div class="u-bar__ranges">
                            <span>0</span>
                            <span>·</span>
                            <span>·</span>
                            <span>{{ purchasing_max / 2 }}</span>
                            <span>·</span>
                            <span>·</span>
                            <span>{{ purchasing_max }}</span>
                        </div>
                        <div class="u-bar__scores">
                            <div 
                                :class="[`u-bar__score u-range u-range--bg ${purchasing_color}`]"
                                :style="`left: ${purchasing_per.toFixed(2)}%`"
                            >
                                {{ purchasing_pts }}
                            </div>
                        </div>
                        <div class="u-bar__median" :style="`left: ${purchasing_median_per.toFixed(2)}%`">
                            <span class="u-bar__median__indicator"></span>
                            <span class="u-bar__median__text">MEDIAN</span>
                        </div>
                    </div>
                </div>
                <div v-if="suppliers" class="w-1/2 px-6 py-6 <sm:w-full">
                    <div class="flex justify-between items-end mb-3">
                        <div class="flex-1 flex space-x-3 items-center">
                            <div :class="[`u-range u-range--cat u-range--bg ${suppliers_color}`]">
                                {{ suppliers_pts }}
                            </div>
                            <div>
                                <h4 class="text-xl leading-[18px] text-[#7B7B7B] font-wwf uppercase" v-html="suppliers.label"></h4>
                            </div>
                        </div>
                        <div>
                            <p :class="[`font-montserrat font-semibold text-xs u-sc-text ${suppliers_color}`]">
                                {{ suppliers_pts }} OF {{ suppliers_max }}  ({{ suppliers_per.toFixed(2)  }}%)
                            </p>
                        </div>
                    </div>
                    <div class="u-bar">
                        <div class="u-bar__ranges">
                            <span>0</span>
                            <span>·</span>
                            <span>·</span>
                            <span>{{ suppliers_max / 2 }}</span>
                            <span>·</span>
                            <span>·</span>
                            <span>{{ suppliers_max }}</span>
                        </div>
                        <div class="u-bar__scores">
                            <div 
                                :class="[`u-bar__score u-range u-range--bg ${suppliers_color}`]"
                                :style="`left: ${suppliers_per.toFixed(2)}%`"
                            >
                                {{ suppliers_pts }}
                            </div>
                        </div>
                        <div class="u-bar__median" :style="`left: ${suppliers_median_per.toFixed(2)}%`">
                            <span class="u-bar__median__indicator"></span>
                            <span class="u-bar__median__text">MEDIAN</span>
                        </div>
                    </div>
                </div>
                <div v-if="traceability" class="w-1/2 px-6 py-6 <sm:w-full">
                    <div class="flex justify-between items-end mb-3">
                        <div class="flex-1 flex space-x-3 items-center">
                            <div :class="[`u-range u-range--cat u-range--bg ${traceability_color}`]">
                                {{ traceability_pts }}
                            </div>
                            <div>
                                <h4 class="text-xl leading-[18px] text-[#7B7B7B] font-wwf uppercase" v-html="traceability.label"></h4>
                            </div>
                        </div>
                        <div>
                            <p :class="[`font-montserrat font-semibold text-xs u-sc-text ${traceability_color}`]">
                                {{ traceability_pts }} OF {{ traceability_max }}  ({{ traceability_per.toFixed(2)  }}%)
                            </p>
                        </div>
                    </div>
                    <div class="u-bar">
                        <div class="u-bar__ranges">
                            <span>0</span>
                            <span>·</span>
                            <span>·</span>
                            <span>{{ traceability_max / 2 }}</span>
                            <span>·</span>
                            <span>·</span>
                            <span>{{ traceability_max }}</span>
                        </div>
                        <div class="u-bar__scores">
                            <div 
                                :class="[`u-bar__score u-range u-range--bg ${traceability_color}`]"
                                :style="`left: ${traceability_per.toFixed(2)}%`"
                            >
                                {{ traceability_pts }}
                            </div>
                        </div>
                        <div class="u-bar__median" :style="`left: ${traceability_median_per.toFixed(2)}%`">
                            <span class="u-bar__median__indicator"></span>
                            <span class="u-bar__median__text">MEDIAN</span>
                        </div>
                    </div>
                </div>
                <div v-if="platforms" class="w-1/2 px-6 py-6 <sm:w-full">
                    <div class="flex justify-between items-end mb-3">
                        <div class="flex-1 flex space-x-3 items-center">
                            <div :class="[`u-range u-range--cat u-range--bg ${platforms_color}`]">
                                {{ platforms_pts }}
                            </div>
                            <div>
                                <h4 class="text-xl leading-[18px] text-[#7B7B7B] font-wwf uppercase" v-html="platforms.label"></h4>
                            </div>
                        </div>
                        <div>
                            <p :class="[`font-montserrat font-semibold text-xs u-sc-text ${platforms_color}`]">
                                {{ platforms_pts }} OF {{ platforms_max }}  ({{ platforms_per.toFixed(2)  }}%)
                            </p>
                        </div>
                    </div>
                    <div class="u-bar">
                        <div class="u-bar__ranges">
                            <span>0</span>
                            <span>·</span>
                            <span>·</span>
                            <span>{{ platforms_max / 2 }}</span>
                            <span>·</span>
                            <span>·</span>
                            <span>{{ platforms_max }}</span>
                        </div>
                        <div class="u-bar__scores">
                            <div 
                                :class="[`u-bar__score u-range u-range--bg ${platforms_color}`]"
                                :style="`left: ${platforms_per.toFixed(2)}%`"
                            >
                                {{ platforms_pts }}
                            </div>
                        </div>
                        <div class="u-bar__median" :style="`left: ${platforms_median_per.toFixed(2)}%`">
                            <span class="u-bar__median__indicator"></span>
                            <span class="u-bar__median__text">MEDIAN</span>
                        </div>
                    </div>
                </div>
                <div v-if="onTheGround" class="w-1/2 px-6 py-6 <sm:w-full">
                    <div class="flex justify-between items-end mb-3">
                        <div class="flex-1 flex space-x-3 items-center">
                            <div :class="[`u-range u-range--cat u-range--bg ${onTheGround_color}`]">
                                {{ onTheGround_pts }}
                            </div>
                            <div>
                                <h4 class="text-xl leading-[18px] text-[#7B7B7B] font-wwf uppercase" v-html="onTheGround.label"></h4>
                            </div>
                        </div>
                        <div>
                            <p :class="[`font-montserrat font-semibold text-xs u-sc-text ${onTheGround_color}`]">
                                {{ onTheGround_pts }} OF {{ onTheGround_max }}  ({{ onTheGround_per.toFixed(2)  }}%)
                            </p>
                        </div>
                    </div>
                    <div class="u-bar">
                        <div class="u-bar__ranges">
                            <span>0</span>
                            <span>·</span>
                            <span>·</span>
                            <span>{{ onTheGround_max / 2 }}</span>
                            <span>·</span>
                            <span>·</span>
                            <span>{{ onTheGround_max }}</span>
                        </div>
                        <div class="u-bar__scores">
                            <div 
                                :class="[`u-bar__score u-range u-range--bg ${onTheGround_color}`]"
                                :style="`left: ${onTheGround_per.toFixed(2)}%`"
                            >
                                {{ onTheGround_pts }}
                            </div>
                        </div>
                        <div class="u-bar__median" :style="`left: ${onTheGround_median_per.toFixed(2)}%`">
                            <span class="u-bar__median__indicator"></span>
                            <span class="u-bar__median__text">MEDIAN</span>
                        </div>
                    </div>
                </div>
                <div class="w-full px-6 py-6 mt-6" v-if="csStore.casestudy">
                    <div class="flex items-center justify-center">
                        <nuxt-link 
                            :to="`/case-studies/${sc.company.id}`"
                            class="u-button"
                        >
                            <span>GO TO CASE STUDY</span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const sc = useScStore()
const csStore = useCsStore()
// Commitments
const commitments = ref(sc.categories.find(c => c.id === 'commitments'))
const commitments_pts = ref(sc.company ? sc.company.commitments.commitTotalScore : 0)
const commitments_per = ref(sc.company && commitments.value ? sc.company.commitments.commitTotalScore / commitments.value.out_of * 100 : '')
const commitments_max = ref(commitments.value ? commitments.value.out_of : 0)
const commitments_color = ref(sc.company ? sc.getRangeColor(sc.company.commitments.commitTotalScore, 'commitments', sc.company.respStatus) : '')
const commitments_median_per = sc.companies.length && commitments.value ? sc.companies.reduce((acc, c) => acc + c.commitments.commitTotalScore, 0) / sc.companies.length / commitments.value.out_of * 100 : 0

// Purchasing
const purchasing = ref(sc.categories.find(c => c.id === 'purchasing'))
const purchasing_pts = ref(sc.company ? sc.company.purchasing.purchTotalScore : 0)
const purchasing_per = ref(sc.company && purchasing.value ? sc.company.purchasing.purchTotalScore / purchasing.value.out_of * 100 : '')
const purchasing_max = ref(purchasing.value ? purchasing.value.out_of : 0)
const purchasing_color = ref(sc.company ? sc.getRangeColor(sc.company.purchasing.purchTotalScore, 'purchasing', sc.company.respStatus) : '')
const purchasing_median_per = sc.companies.length && purchasing.value ? sc.companies.reduce((acc, c) => acc + c.purchasing.purchTotalScore, 0) / sc.companies.length / purchasing.value.out_of * 100 : 0

// Suppliers
const suppliers = ref(sc.categories.find(c => c.id === 'suppliers'))
const suppliers_pts = ref(sc.company ? sc.company.suppliers.supTotalScore : 0)
const suppliers_per = ref(sc.company && suppliers.value ? sc.company.suppliers.supTotalScore / suppliers.value.out_of * 100 : '')
const suppliers_max = ref(suppliers.value ? suppliers.value.out_of : 0)
const suppliers_color = ref(sc.company ? sc.getRangeColor(sc.company.suppliers.supTotalScore, 'suppliers', sc.company.respStatus) : '')
const suppliers_median_per = sc.companies.length && suppliers.value ? sc.companies.reduce((acc, c) => acc + c.suppliers.supTotalScore, 0) / sc.companies.length / suppliers.value.out_of * 100 : 0

// Traceability
const traceability = ref(sc.categories.find(c => c.id === 'traceability'))
const traceability_pts = ref(sc.company ? sc.company.traceability.supTraceScore : 0)
const traceability_per = ref(sc.company && traceability.value ? sc.company.traceability.supTraceScore / traceability.value.out_of * 100 : '')
const traceability_max = ref(traceability.value ? traceability.value.out_of : 0)
const traceability_color = ref(sc.company ? sc.getRangeColor(sc.company.traceability.supTraceScore, 'traceability', sc.company.respStatus) : '')
const traceability_median_per = sc.companies.length && traceability.value ? sc.companies.reduce((acc, c) => acc + c.traceability.supTraceScore, 0) / sc.companies.length / traceability.value.out_of * 100 : 0

// Platforms
const platforms = ref(sc.categories.find(c => c.id === 'platforms'))
const platforms_pts = ref(sc.company ? sc.company.platforms.platformsTotalScore : 0)
const platforms_per = ref(sc.company && platforms.value ? sc.company.platforms.platformsTotalScore / platforms.value.out_of * 100 : '')
const platforms_max = ref(platforms.value ? platforms.value.out_of : 0)
const platforms_color = ref(sc.company ? sc.getRangeColor(sc.company.platforms.platformsTotalScore, 'platforms', sc.company.respStatus) : '')
const platforms_median_per = sc.companies.length && platforms.value ? sc.companies.reduce((acc, c) => acc + c.platforms.platformsTotalScore, 0) / sc.companies.length / platforms.value.out_of * 100 : 0

// On the ground
const onTheGround = ref(sc.categories.find(c => c.id === 'onTheGround'))
const onTheGround_pts = ref(sc.company ? sc.company.onTheGround.onTheGroundTotalScore : 0)
const onTheGround_per = ref(sc.company && onTheGround.value ? sc.company.onTheGround.onTheGroundTotalScore / onTheGround.value.out_of * 100 : '')
const onTheGround_max = ref(onTheGround.value ? onTheGround.value.out_of : 0)
const onTheGround_color = ref(sc.company ? sc.getRangeColor(sc.company.onTheGround.onTheGroundTotalScore, 'onTheGround', sc.company.respStatus) : '')
const onTheGround_median_per = sc.companies.length && onTheGround.value ? sc.companies.reduce((acc, c) => acc + c.onTheGround.onTheGroundTotalScore, 0) / sc.companies.length / onTheGround.value.out_of * 100 : 0

</script>