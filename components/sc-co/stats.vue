<template>
    <section v-if="sc.company" class="u-section mt-12">
        <div class="u-container u-container--lg">
            <div class="flex gap-x-16 <md:flex-col <md:gap-x-0 <md:gap-y-4">
                <div class="flex-1 u-separator after:h-[140px] after:translate-x-8">
                    <div class="flex gap-x-6">
                        <div class="flex flex-col items-center gap-y-3">
                            <div
                                :class="[ `u-range u-range--bg u-range--company ${rangeTotal}`]">
                                    <span v-if="sc.company.respStatus">{{ sc.company.companyTotalScore }}</span>
                                    <span v-else>NO SCORE</span>
                            </div>
                            <div 
                                v-if="sc.company.respStatus"
                                :class="[ `u-sc-text ${rangeTotal} font-bold text-sm text-center`]"
                                >
                                <span v-html="$t('sc_co_stats_total_outof')" /> {{ sc.total_outof }} 
                            </div>
                        </div>
                        <div class="flex-1">
                            <h3 
                                v-if="sc.company.respStatus"
                                :class="[ `u-sc-text ${rangeTotal} font-wwf uppercase u-fs48 mb-2`]">
                                {{ sc.ranges.find(r => r.id == rangeTotal).name }}
                            </h3>
                            <h3 
                                :class="[ `u-sc-text ${rangeTotal} font-wwf uppercase u-fs48 mb-2`]"
                                v-else>NON-RESPONDENT</h3>
                            <div class="flex flex-col gap-y-0.5 text-[#7B7B7B]">
                                <div class="flex items-center space-between gap-x-5 text-[#7B7B7B]">
                                    <div class="flex justify-end w-[90px] font-wwf u-fs31">
                                        <span :class="[ `u-sc-text ${rangeTotal}`]">{{ sc.company.ownSupplyChn }}</span>/{{ sc.supply_chain_own }}
                                    </div>
                                    <p class="font-bold text-xs">{{ $t('sc_co_stats_ownSupplyChn') }}</p>
                                </div>
                                <div class="flex items-center space-between gap-x-5 text-[#7B7B7B]">
                                    <div class="flex justify-end w-[90px] font-wwf u-fs31">
                                        <span :class="[ `u-sc-text ${rangeTotal}`]">{{ sc.company.byondSupChain }}</span>/{{ sc.supply_chain_beyond }}
                                    </div>
                                    <p class="font-bold text-xs">{{ $t('sc_co_stats_byondSupChain') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-1 <sm:hidden"> 
                    <div class="flex space-x-1">
                        <div class="flex flex-col">
                            <div class="flex items-center flex-1">
                                <p class="mt-14 font-wwf text-[#7B7B7B] text-sm">2024</p>
                            </div>
                            <div class="flex items-center flex-1" v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus">
                                <p class="mt-16 font-wwf text-[#7B7B7B] text-sm">2021</p>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-x-3">
                            <div v-if="commitments" class="flex-1">
                                <div class="flex items-center justify-center font-wwf text-[#7B7B7B] text-sm text-center uppercase leading-[14px] min-h-[60px] ">
                                    <span v-html="commitments.label" />
                                </div>
                                <div
                                    v-if="sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg', 
                                        sc.getRangeColor(sc.company.commitments.commitTotalScore, commitments.id, true)
                                    ]"
                                >
                                    {{ sc.company.commitments.commitTotalScore }}
                                </div>
                                <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                <core-range-balance 
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :current="sc.company.commitments.commitTotalScore" 
                                    :old="sc.company.previousScore.commitTotalScore"
                                />
                                <div
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg u-range--past', 
                                        sc.getRangeColor2021(sc.company.previousScore.commitTotalScore, commitments.id, true)
                                    ]"
                                >
                                    {{ sc.company.previousScore.commitTotalScore }}
                                </div>
                            </div>
                            <div v-if="purchasing" class="flex-1">
                                <div class="flex items-center justify-center font-wwf text-[#7B7B7B] text-sm text-center uppercase leading-[14px] min-h-[60px] ">
                                    <span v-html="purchasing.label" />
                                </div>
                                <div
                                    v-if="sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg', 
                                        sc.getRangeColor(sc.company.purchasing.purchTotalScore, purchasing.id, true)
                                    ]"
                                >
                                    {{ sc.company.purchasing.purchTotalScore }}
                                </div>
                                <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                <core-range-balance 
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :current="sc.company.purchasing.purchTotalScore" 
                                    :old="sc.company.previousScore.purchTotalCalcScore"
                                />
                                <div
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg u-range--past', 
                                        sc.getRangeColor2021(sc.company.previousScore.purchTotalCalcScore, purchasing.id, true)
                                    ]"
                                >
                                    {{ sc.company.previousScore.purchTotalCalcScore }}
                                </div>
                            </div>
                            <div v-if="suppliers" class="flex-1">
                                <div class="flex items-center justify-center font-wwf text-[#7B7B7B] text-sm text-center uppercase leading-[14px] min-h-[60px] ">
                                    <span v-html="suppliers.label" />
                                </div>
                                <div
                                    v-if="sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg', 
                                        sc.getRangeColor(sc.company.suppliers.supTotalScore, suppliers.id, true)
                                    ]"
                                >
                                    {{ sc.company.suppliers.supTotalScore }}
                                </div>
                                <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                <core-range-balance 
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :current="sc.company.suppliers.supTotalScore" 
                                    :old="sc.company.previousScore.supTotalScore"
                                />
                                <div
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg u-range--past', 
                                        sc.getRangeColor2021(sc.company.previousScore.supTotalScore, suppliers.id, true)
                                    ]"
                                >
                                    {{ sc.company.previousScore.supTotalScore }}
                                </div>
                            </div>
                            <div v-if="traceability" class="flex-1">
                                <div class="flex items-center justify-center font-wwf text-[#7B7B7B] text-sm text-center uppercase leading-[14px] min-h-[60px] ">
                                    <span v-html="traceability.label" />
                                </div>
                                <div
                                    v-if="sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg', 
                                        sc.getRangeColor(sc.company.traceability.supTraceScore, traceability.id, true)
                                    ]"
                                >
                                    {{ sc.company.traceability.supTraceScore }}
                                </div>
                                <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                <!-- <core-range-balance 
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :current="sc.company.traceability.supTraceScore" 
                                    :old="sc.company.previousScore.supTraceScore"
                                />
                                <div
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg u-range--past', 
                                        sc.getRangeColor2021(sc.company.previousScore.supTraceScore, traceability.id, true)
                                    ]"
                                >
                                    {{ sc.company.previousScore.supTraceScore }}
                                </div> -->
                            </div>
                            <div v-if="platforms" class="flex-1">
                                <div class="flex items-center justify-center font-wwf text-[#7B7B7B] text-sm text-center uppercase leading-[14px] min-h-[60px] ">
                                    <span v-html="platforms.label" />
                                </div>
                                <div
                                    v-if="sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg', 
                                        sc.getRangeColor(sc.company.platforms.platformsTotalScore, platforms.id, true)
                                    ]"
                                >
                                    {{ sc.company.platforms.platformsTotalScore }}
                                </div>
                                <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                <core-range-balance 
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :current="sc.company.platforms.platformsTotalScore" 
                                    :old="sc.company.previousScore.platformsTotalScore"
                                />
                                <div
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg u-range--past', 
                                        sc.getRangeColor2021(sc.company.previousScore.platformsTotalScore, platforms.id, true)
                                    ]"
                                >
                                    {{ sc.company.previousScore.platformsTotalScore }}
                                </div>
                            </div>
                            <div v-if="onTheGround" class="flex-1">
                                <div class="flex items-center justify-center font-wwf text-[#7B7B7B] text-sm text-center uppercase leading-[14px] min-h-[60px] ">
                                    <span v-html="onTheGround.label" />
                                </div>
                                <div
                                    v-if="sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg', 
                                        sc.getRangeColor(sc.company.onTheGround.onTheGroundTotalScore, onTheGround.id, true)
                                    ]"
                                >
                                    {{ sc.company.onTheGround.onTheGroundTotalScore }}
                                </div>
                                <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                <core-range-balance
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :current="sc.company.onTheGround.onTheGroundTotalScore" 
                                    :old="sc.company.previousScore.groundTotalScore"
                                />
                                <div
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg u-range--past', 
                                        sc.getRangeColor2021(sc.company.previousScore.groundTotalScore, onTheGround.id, true)
                                    ]"
                                >
                                    {{ sc.company.previousScore.groundTotalScore }}
                                </div>
                            </div>
                            
                            <div class="flex-1">
                                <div class="flex items-center justify-center font-wwf text-[#7B7B7B] text-sm text-center uppercase leading-[14px] min-h-[60px] ">
                                    <span>TOTAL</span>
                                </div>
                                <div
                                    v-if="sc.company.respStatus"
                                    :class="[ `u-range u-range--bg u-range--total -mt-[15px] top-[7.5px] ${rangeTotal}`]"
                                >
                                    {{ sc.company.companyTotalScore }}
                                </div>
                                <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                <core-range-balance 
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :current="sc.company.companyTotalScore" 
                                    :old="sc.company.previousScore.companyTotalScore"
                                />
                                <div
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :class="[ `u-range u-range--bg u-range--past-total ${rangeTotal2021} top-[-5px]`]"
                                >
                                    {{ sc.company.previousScore.companyTotalScore }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden flex-1 <sm:block"> 
                    <div class="flex space-x-1">
                        <div class="flex flex-col">
                            <div class="flex items-center flex-1">
                                <p class="mt-14 font-wwf text-[#7B7B7B] text-sm">2024</p>
                            </div>
                            <div class="flex items-center flex-1" v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus">
                                <p class="mt-16 font-wwf text-[#7B7B7B] text-sm">2021</p>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-x-3">
                            <div v-if="commitments" class="flex-1">
                                <div class="flex items-center justify-center font-wwf text-[#7B7B7B] text-sm text-center uppercase leading-[14px] min-h-[60px] ">
                                    <span v-html="commitments.label" />
                                </div>
                                <div
                                    v-if="sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg', 
                                        sc.getRangeColor(sc.company.commitments.commitTotalScore, commitments.id, true)
                                    ]"
                                >
                                    {{ sc.company.commitments.commitTotalScore }}
                                </div>
                                <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                <core-range-balance 
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :current="sc.company.commitments.commitTotalScore" 
                                    :old="sc.company.previousScore.commitTotalScore"
                                />
                                <div
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg u-range--past', 
                                        sc.getRangeColor2021(sc.company.previousScore.commitTotalScore, commitments.id, true)
                                    ]"
                                >
                                    {{ sc.company.previousScore.commitTotalScore }}
                                </div>
                            </div>
                            <div v-if="purchasing" class="flex-1">
                                <div class="flex items-center justify-center font-wwf text-[#7B7B7B] text-sm text-center uppercase leading-[14px] min-h-[60px] ">
                                    <span v-html="purchasing.label" />
                                </div>
                                <div
                                    v-if="sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg', 
                                        sc.getRangeColor(sc.company.purchasing.purchTotalScore, purchasing.id, true)
                                    ]"
                                >
                                    {{ sc.company.purchasing.purchTotalScore }}
                                </div>
                                <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                <core-range-balance 
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :current="sc.company.purchasing.purchTotalScore" 
                                    :old="sc.company.previousScore.purchTotalCalcScore"
                                />
                                <div
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg u-range--past', 
                                        sc.getRangeColor2021(sc.company.previousScore.purchTotalCalcScore, purchasing.id, true)
                                    ]"
                                >
                                    {{ sc.company.previousScore.purchTotalCalcScore }}
                                </div>
                            </div>
                            <div v-if="suppliers" class="flex-1">
                                <div class="flex items-center justify-center font-wwf text-[#7B7B7B] text-sm text-center uppercase leading-[14px] min-h-[60px] ">
                                    <span v-html="suppliers.label" />
                                </div>
                                <div
                                    v-if="sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg', 
                                        sc.getRangeColor(sc.company.suppliers.supTotalScore, suppliers.id, true)
                                    ]"
                                >
                                    {{ sc.company.suppliers.supTotalScore }}
                                </div>
                                <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                <core-range-balance 
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :current="sc.company.suppliers.supTotalScore" 
                                    :old="sc.company.previousScore.supTotalScore"
                                />
                                <div
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg u-range--past', 
                                        sc.getRangeColor2021(sc.company.previousScore.supTotalScore, suppliers.id, true)
                                    ]"
                                >
                                    {{ sc.company.previousScore.supTotalScore }}
                                </div>
                            </div>
                            <div v-if="traceability" class="flex-1">
                                <div class="flex items-center justify-center font-wwf text-[#7B7B7B] text-sm text-center uppercase leading-[14px] min-h-[60px] ">
                                    <span v-html="traceability.label" />
                                </div>
                                <div
                                    v-if="sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg', 
                                        sc.getRangeColor(sc.company.traceability.supTraceScore, traceability.id, true)
                                    ]"
                                >
                                    {{ sc.company.traceability.supTraceScore }}
                                </div>
                                <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                <!-- <core-range-balance 
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :current="sc.company.traceability.supTraceScore" 
                                    :old="sc.company.previousScore.supTraceScore"
                                />
                                <div
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg u-range--past', 
                                        sc.getRangeColor2021(sc.company.previousScore.supTraceScore, traceability.id, true)
                                    ]"
                                >
                                    {{ sc.company.previousScore.supTraceScore }}
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden flex-1 <sm:block"> 
                    <div class="flex space-x-1">
                        <div class="flex flex-col">
                            <div class="flex items-center flex-1">
                                <p class="mt-14 font-wwf text-[#7B7B7B] text-sm">2024</p>
                            </div>
                            <div class="flex items-center flex-1" v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus">
                                <p class="mt-16 font-wwf text-[#7B7B7B] text-sm">2021</p>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-x-3">
                            <div v-if="platforms" class="flex-1">
                                <div class="flex items-center justify-center font-wwf text-[#7B7B7B] text-sm text-center uppercase leading-[14px] min-h-[60px] ">
                                    <span v-html="platforms.label" />
                                </div>
                                <div
                                    v-if="sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg', 
                                        sc.getRangeColor(sc.company.platforms.platformsTotalScore, platforms.id, true)
                                    ]"
                                >
                                    {{ sc.company.platforms.platformsTotalScore }}
                                </div>
                                <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                <core-range-balance 
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :current="sc.company.platforms.platformsTotalScore" 
                                    :old="sc.company.previousScore.platformsTotalScore"
                                />
                                <div
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg u-range--past', 
                                        sc.getRangeColor2021(sc.company.previousScore.platformsTotalScore, platforms.id, true)
                                    ]"
                                >
                                    {{ sc.company.previousScore.platformsTotalScore }}
                                </div>
                            </div>
                            <div v-if="onTheGround" class="flex-1">
                                <div class="flex items-center justify-center font-wwf text-[#7B7B7B] text-sm text-center uppercase leading-[14px] min-h-[60px] ">
                                    <span v-html="onTheGround.label" />
                                </div>
                                <div
                                    v-if="sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg', 
                                        sc.getRangeColor(sc.company.onTheGround.onTheGroundTotalScore, onTheGround.id, true)
                                    ]"
                                >
                                    {{ sc.company.onTheGround.onTheGroundTotalScore }}
                                </div>
                                <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                <core-range-balance
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :current="sc.company.onTheGround.onTheGroundTotalScore" 
                                    :old="sc.company.previousScore.groundTotalScore"
                                />
                                <div
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :class="[
                                        'u-range u-range--bg u-range--past', 
                                        sc.getRangeColor2021(sc.company.previousScore.groundTotalScore, onTheGround.id, true)
                                    ]"
                                >
                                    {{ sc.company.previousScore.groundTotalScore }}
                                </div>
                            </div>
                            
                            <div class="flex-1">
                                <div class="flex items-center justify-center font-wwf text-[#7B7B7B] text-sm text-center uppercase leading-[14px] min-h-[60px] ">
                                    <span>TOTAL</span>
                                </div>
                                <div
                                    v-if="sc.company.respStatus"
                                    :class="[ `u-range u-range--bg u-range--total -mt-[15px] top-[7.5px] ${rangeTotal}`]"
                                >
                                    {{ sc.company.companyTotalScore }}
                                </div>
                                <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                <core-range-balance 
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :current="sc.company.companyTotalScore" 
                                    :old="sc.company.previousScore.companyTotalScore"
                                />
                                <div
                                    v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                                    :class="[ `u-range u-range--bg u-range--past-total ${rangeTotal2021} top-[-5px]`]"
                                >
                                    {{ sc.company.previousScore.companyTotalScore }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <pre>{{ sc.company }}</pre> -->
    </section>
</template>

<script setup lang="ts">
const sc = useScStore()

const commitments = ref(sc.categories.find(c => c.id === 'commitments'))
const purchasing = ref(sc.categories.find(c => c.id === 'purchasing'))
const suppliers = ref(sc.categories.find(c => c.id === 'suppliers'))
const traceability = ref(sc.categories.find(c => c.id === 'traceability'))
const platforms = ref(sc.categories.find(c => c.id === 'platforms'))
const onTheGround = ref(sc.categories.find(c => c.id === 'onTheGround'))

const rangeTotal = ref(sc.company && sc.company.respStatus ? sc.getTotalScoreRange(sc.company.companyTotalScore, true) : 'non-resp');
const rangeTotal2021 = ref(sc.company ? sc.getTotalScoreRange(sc.company.previousScore.companyTotalScore, true) : null);

</script>