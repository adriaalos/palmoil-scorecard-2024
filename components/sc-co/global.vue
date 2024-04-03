<template>
    <section v-if="sc.company && sc.company.respStatus" class="u-section u-section--padded u-section--cake">
        <div class="u-container u-container--md">
            <div class="u-header">
                <h2>GLOBAL POSITION</h2>
                <span class="-mt-3 block mx-auto w-[110px] h-px bg-[#DADADA]"></span>
                <h5 class="-mt-4 font-wwf u-fs24 text-green">{{ position }} OF {{ sc.companies.length }}</h5>
            </div>
        </div>
        <div class="u-container u-container--lg">
            <div class="w-full mt-52">
                <img src="@/assets/img/sc-global.png">
                <div class="w-[calc(100%-180px)] h-[42.5%] absolute top-0 left-1/2 transform -translate-x-1/2">
                    <template
                        v-for="company in sc.companies"
                        :key="company.id"
                >
                        <div 
                            class="u-total-map"
                            :style="`left: ${company.companyTotalScore / sc.total_outof * 100}%`"
                        >
                            <div :class="[`u-total-map__indicator u-sc-bg-light ${sc.getTotalScoreRange(company.companyTotalScore, company.respStatus) } `]"></div>
                            <div class="u-total-map__line"></div>
                            <div class="u-total-map__ground"></div>
                        </div>
                    </template>
                    <div :class="[`u-total-map u-total-map--current u-sc-text ${sc.getTotalScoreRange(sc.company.companyTotalScore, sc.company.respStatus)}`]"
                        :style="`left: ${sc.company.companyTotalScore / sc.total_outof * 100}%`"
                    >
                        <div class="u-total-map__indicator">
                            <span class="text-white">{{ sc.company.companyTotalScore }}</span>
                        </div>
                        <div :class="[`u-total-map__line u-sc-bg ${sc.getTotalScoreRange(sc.company.companyTotalScore, sc.company.respStatus)}`]"></div>
                        <div class="u-total-map__ground"></div>
                    </div>
                    <div class="w-full h-[10px] absolute bottom-[190px]">
                        <div class="absolute left-[30px]" :style="`width: ${bottom20ScorePercent}%`">
                            <div class="u-total-limit">
                                <span class="u-total-limit__circle"></span>
                                <span class="u-total-limit__line"></span>
                                <span class="u-total-limit__circle"></span>
                                <span class="u-total-limit__name">bottom 20%</span>
                            </div>
                        </div>
                        <div class="absolute right-[30px]" :style="`width: calc(100% - ${top20ScorePercent}%)`">
                            <div class="u-total-limit">
                                <span class="u-total-limit__circle"></span>
                                <span class="u-total-limit__line"></span>
                                <span class="u-total-limit__circle"></span>
                                <span class="u-total-limit__name u-total-limit__name--top">top 20%</span>
                            </div>
                        </div>
                        <!-- <div class="u-total-median" :style="`left: ${median}%`"><span>MEDIAN</span></div> -->
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="sc.company.companyTotalScore >= top20Score" 
            class="u-container u-container--md mt-12">
                <p class="text-center">Company scored in the <strong>top 20%</strong> across all manufacturers/retailers/hospitality companies who responded to the 2024 scorecard</p>
        </div>
    </section>
</template>

<script setup lang="ts">
const sc = useScStore()
const tr = useTrStore().translations

const companies = ref(sc.companies.sort((a, b) => b.companyTotalScore - a.companyTotalScore))
const position = ref(sc.company ? companies.value.findIndex((c) => c.id === sc.company.id) + 1 : 0)
const companiestop20Percent = ref(Math.floor(companies.value.length * 0.2))
const top20Score = ref(companies.value[companiestop20Percent.value - 1].companyTotalScore)
const top20ScorePercent = ref(top20Score.value / sc.total_outof * 100)
const companiesRespondants = ref(companies.value.filter((c) => c.respStatus))
const companiesbottom20Percent = ref(Math.floor(companiesRespondants.value.length * 0.8))
const bottom20Score = ref(companiesRespondants.value[companiesbottom20Percent.value].companyTotalScore)
const bottom20ScorePercent = ref(bottom20Score.value / sc.total_outof * 100)
const median = companiesRespondants.value.length ? companiesRespondants.value.reduce((acc, c) => acc + c.companyTotalScore, 0) / companiesRespondants.value.length / companiesRespondants.value.length * 100 : 0
</script>