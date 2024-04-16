<template>
    <section v-if="sc.company && sc.company.respStatus" class="border-t pt-20 mt-20 <md:overflow-hidden">
        <div class="u-container u-container--lg">
            <div class="flex space-x-6 <sm:space-x-0 <sm:flex-col">
                <div class="<sm:flex <sm:items-center <sm:space-x-4">
                    <div :class="[`u-range u-range--results u-sc-bg ${onTheGroundColor}`]">
                        {{ sc.company.onTheGround.onTheGroundTotalScore }}
                    </div>
                    <div :class="[`my-1 text-sm font-bold text-center u-sc-text ${onTheGroundColor}`]">
                        OUT OF {{ onTheGround?.out_of }}
                    </div>
                    <core-range-balance 
                        v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"            
                        :current="sc.company.onTheGround.onTheGroundTotalScore" 
                        :old="sc.company.previousScore.groundTotalScore"
                    />
                    <div :class="[`u-range u-range--bg ${onTheGroundColor2021}`]">
                        {{ sc.company.previousScore.groundTotalScore }}
                    </div>
                    <div 
                        v-if="Object.keys(sc.company.previousScore).length >    0 && sc.company.respStatus"
                        class="text-sm font-wwf text-[#7B7B7B] text-center"
                    >2021</div>
                </div>
                <div class="flex-1">
                    <header>
                        <h2 class="u-result-cat">ON THE GROUND INVESTMENTS</h2>
                    </header>
                    <div class="u-result-block">
                        <header>
                            <h3 class="u-result-block__header"><span>Does the company have on the ground investments?</span></h3>
                        </header>
                        <div class="flex <md:mb-10">
                            <div class="w-1/2 <md:w-full">
                                <div :class="[`u-result-card u-result-card--flex u-result-card u-result-card--${transformValue(onTheGroundVal)}`]">
                                    <div class="u-result-card__ans">
                                        <span>{{ onTheGroundVal }}</span>
                                    </div>
                                    <div class="u-result-card__des">
                                        {{ getOnTheGroundDescription('haveOnTheGrnd', onTheGroundVal ) }}
                                    </div>
                                    <VDropdown :triggers="['hover']" class="u-result-card__tooltip">
                                        <a><img src="@/assets/img/tooltip.svg"></a>

                                        <template #popper>
                                            <div class="u-result-card__tooltip__content">
                                                <p>
                                                    {{ ONTHEGROUND_TOOLTIPS[0] }}
                                                </p>
                                            </div>
                                        </template>
                                    </VDropdown>
                                </div>
                            </div>
                        </div>
                        <div class="mt-10 flex justify-between space-x-6 <md:flex-wrap <md:space-x-0 <md:-m-3 <md:justify-initial">
                            <div 
                                v-for="badge in ONTHEGROUND_BADGES"
                                :class="[
                                    'u-otg-badge <md:w-1/2 <md:p-3 <md:flex-initial',
                                    { 'u-otg-badge--disabled': !badge.value }
                                ]"
                            >
                                <div>
                                    <img :src="`/2024/${badge.pic}`" :alt="badge.label">
                                    <div class="u-otg-badge__ans">
                                        <span v-if="badge.value">YES</span>
                                        <span v-if="!badge.value">NO</span>
                                    </div>
                                </div>
                                <!-- <div class="u-otg-badge__label pt-10">{{ badge.label }}</div> -->
                                <div :class="[`u-result-card__badge w-full ${transformBoolean(badge.value)} mt-10 pr-10`]" >
                                    <!-- <img :src="`/2024/${transformBoolean(badge.value)}_invert.svg`" /> -->
                                    <!-- <span v-html="badge.text"></span> -->
                                    <span>{{ badge.label }}</span>
                                    <VDropdown :triggers="['hover']" :html="true" class="u-result-card__tooltip">
                                        <a><img src="@/assets/img/tooltip.svg"></a>

                                        <template #popper>
                                            <div class="u-result-card__tooltip__content" v-html="badge.text" />
                                        </template>
                                    </VDropdown>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="mt-10 flex flex-wrap justify-between -mx-6 -my-3">
                            <div 
                                v-for="badge in ONTHEGROUND_BADGES"
                                class="u-otg-check w-1/2 px-6 py-3"
                            >
                                <div :class="[`u-result-card__badge ${transformBoolean(badge.value)}`]" >
                                    <img :src="`/2024/${transformBoolean(badge.value)}_invert.svg`" />
                                    <span v-html="badge.text"></span>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const sc = useScStore()

const onTheGround = ref(sc.categories.find(c => c.id === 'onTheGround'))
const onTheGroundColor = ref(sc.company ? sc.getRangeColor(sc.company.onTheGround.onTheGroundTotalScore, 'onTheGround', sc.company.respStatus) : '')
const onTheGroundColor2021 = ref(sc.company ? sc.getRangeColor2021(sc.company.previousScore.groundTotalScore, 'onTheGround', sc.company.respStatus) : '')
const ONTHEGROUND_CARDS = ref<any>({
    haveOnTheGrnd: {
        options: {
            yes: 'Company is investing in projects in palm oil producing landscapes',
            no: 'Company is not investing in any projects in palm oil producing landscapes',
        },
    },
});

const ONTHEGROUND_TOOLTIPS = ref([
    'WWF expects palm oil buyers to move beyond cleaning up supply chains and mitigating sustainability risks, to an approach which proactively addresses past, current and potential future deforestation and conversion, and promotes sustainable production practices that protect both nature and people.',
])

const ONTHEGROUND_BADGES = ref([
    {
        label: 'SMALLHOLDERS',
        text: 'NATURE OF THE SUPPORTING SMALLHOLDER PRODUCERS PROJECT MATCHES THE TYPES OF SUPPORT TO SMALLHOLDER PRODUCERS LISTED IN TABLE 1 OF AFI OPERATIONAL GUIDANCE ON SMALLHOLDER INCLUSION IN ETHICAL SUPPLY CHAINS',
        value: sc.company?.onTheGround.smallHolders,
        pic: 'sc-smallholders.svg',
    },
    {
        label: 'CONSERVATION PROJECTS',
        text: 'NATURE OF BIODIVERSITY CONSERVATION PROJECTS INVOLVING RESTORATION ADHERES TO THE PARAMETERS FOR EFFECTIVE ENVIRONMENTAL RESTORATION AND CONSERVATION PER AFI OPERATIONAL GUIDANCE ON ENVIRONMENTAL RESTORATION COMPENSATION',
        value: sc.company?.onTheGround.investCons,
        pic: 'sc-conservation-projects.svg',
    },
    {
        label: 'Forest protect and restoration projects',
        text: 'NATURE OF ON-THE-GROUND PROJECTS DEMONSTRATE ENGAGEMENT AND AN IMPACT ON LOCAL COMMUNITIES, INDIGENOUS PEOPLE, OR WOMEN. INCLUDING BUT NOT LIMITED TO INTENTIONAL SOURCING COMMITMENTS TOWARD THESE GROUPS, GENDER-SENSITIVE GRIEVANCE MECHANISMS, AND ALIGNMENT WITH UN WOMEN’S EMPOWERMENT PRINCIPLE 5',
        value: sc.company?.onTheGround.investForest,
        pic: 'sc-forest-projects.svg',
    },
    {
        label: 'Jurisdictional or landscape approaches',
        text: 'NATURE OF SUPPORTING LANDSCAPES AND JURISDICTIONAL APPROACHES INCORPORATE ACTIONS SPECIFIED IN THE AFI OPERATIONS GUIDANCE ON ACHIEVING COMMITMENTS THROUGH COLLABORATION',
        value: sc.company?.onTheGround.investLandScape,
        pic: 'sc-jurisdictional.svg',
    }
])

const onTheGroundVal = ref(sc.company?.onTheGround.haveOnTheGrnd ? 'yes' : 'no')
const getOnTheGroundDescription = (field: string, val: string) => {
    if (sc.company) {
        return ONTHEGROUND_CARDS.value[field].options[val.toLowerCase()]
    }
}


</script>