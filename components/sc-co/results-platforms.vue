<template>
    <section v-if="sc.company && sc.company.respStatus" class="mt-20 py-20 border-t">
        <div class="u-container u-container--lg">
            <div class="flex space-x-6 <sm:space-x-0 <sm:flex-col">
                <div class="<sm:flex <sm:items-center <sm:space-x-4">
                    <div :class="[`u-range u-range--results u-sc-bg ${platformsColor}`]">
                        {{ sc.company.platforms.platformsTotalScore }}
                    </div>
                    <div :class="[`my-1 text-sm font-bold text-center u-sc-text ${platformsColor}`]">
                        OUT OF {{ platforms?.out_of }}
                    </div>
                    <core-range-balance 
                        v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"            
                        :current="sc.company.platforms.platformsTotalScore" 
                        :old="sc.company.previousScore.platformsTotalScore"
                    />
                    <div :class="[`u-range u-range--bg ${platformsColor2021}`]">
                        {{ sc.company.previousScore.platformsTotalScore }}
                    </div>
                    <div 
                        v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"
                        class="text-sm font-wwf text-[#7B7B7B] text-center"
                    >2021</div>
                </div>
                <div class="flex-1">
                    <header>
                        <h2 class="u-result-cat">ACTION ORIENTED PLATFORMS</h2>
                    </header>
                    <div class="u-result-grid">
                        <div class="u-result-grid-block border-r flex-1 <md:flex-initial <md:w-1/2 <sm:w-full <sm:border-0">
                            <div class="u-result-block">
                                <header>
                                    <h3 class="u-result-block__header noline"><span>IS THE COMPANY A MEMBER OF THE RSPO?</span></h3>
                                </header>
                                <div :class="[`u-result-card u-result-card--${transformBooleanYesNo(sc.company.platforms.rspoMember)}`]">
                                    <div class="u-result-card__ans">
                                        <span>{{ getPlatformsDescription('rspoMember').ans }}</span>
                                    </div>
                                    <div class="u-result-card__des">
                                        {{ getPlatformsDescription('rspoMember').text }}
                                    </div>
                                    <VDropdown :triggers="['hover']" class="u-result-card__tooltip">
                                        <a><img src="@/assets/img/tooltip.svg"></a>

                                        <template #popper>
                                            <div class="u-result-card__tooltip__content">
                                                <p>
                                                    {{ PLATFORMS_TOOLTIPS[0] }}
                                                </p>
                                            </div>
                                            
                                        </template>
                                    </VDropdown>
                                </div>
                            </div>
                        </div>
                        <div v-if="sc.company.platforms.rspoMember" class="u-result-grid-block border-r flex-1 <md:flex-initial <md:w-1/2 <sm:w-full <sm:border-0">
                            <div class="u-result-block">
                                <header>
                                    <h3 class="u-result-block__header noline"><span>What was your RSPO SR score?</span></h3>
                                </header>
                                <div :class="[`u-result-card u-result-card--yes`]">
                                    <div class="u-result-card__ans">
                                        <span>{{ sc.company.platforms.pobrSrScore }}</span>
                                    </div>
                                    <div class="u-result-card__des">
                                        Based on the Company score on the SR scorecard Requirement set by RSPO
                                    </div>
                                    <VDropdown :triggers="['hover']" class="u-result-card__tooltip">
                                        <a><img src="@/assets/img/tooltip.svg"></a>

                                        <template #popper>
                                            <div class="u-result-card__tooltip__content">
                                                <p>
                                                    {{ PLATFORMS_TOOLTIPS[2] }}
                                                </p>
                                            </div>
                                            
                                        </template>
                                    </VDropdown>
                                </div>
                            </div>
                        </div>
                        <div class="u-result-grid-block flex-1 <md:flex-initial <md:w-1/2 <sm:w-full">
                            <div class="u-result-block">
                                <header>
                                    <h3 class="u-result-block__header noline"><span>DOES THE COMPANY TAKE PART IN OTHER ACTION-ORIENTED SUSTAINABILITY PLATFORMS?</span></h3>
                                </header>
                                <div :class="[`u-result-card u-result-card--${transformBooleanYesNo(sc.company.platforms.poigMemeber)}`]">
                                    <div class="u-result-card__ans">
                                        <span>{{ getPlatformsDescription('poigMemeber').ans }}</span>
                                    </div>
                                    <div class="u-result-card__des">
                                        {{ getPlatformsDescription('poigMemeber').text }}
                                    </div>
                                    <VDropdown :triggers="['hover']" class="u-result-card__tooltip">
                                        <a><img src="@/assets/img/tooltip.svg"></a>

                                        <template #popper>
                                            <div class="u-result-card__tooltip__content">
                                                <p>
                                                    {{ PLATFORMS_TOOLTIPS[1] }}
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
const sc = useScStore()

const platforms = ref(sc.categories.find(c => c.id === 'platforms'))
const platformsColor = ref(sc.company ? sc.getRangeColor(sc.company.platforms.platformsTotalScore, 'platforms', sc.company.respStatus) : '')
const platformsColor2021 = ref(sc.company ? sc.getRangeColor2021(sc.company.previousScore.platformsTotalScore, 'platforms', sc.company.respStatus) : '')
const PLATFORMS_CARDS = ref<any>({
    rspoMember: {
        options: {
            yes: {
                ans: 'YES',
                text: 'Company is a member of the RSPO',
            },
            no: {
                ans: 'NO',
                text: 'Company is not a member of the RSPO',
            }
        },
    },
    memberPlatforms: {
        options: {
            yes: 'Company is a member of',
            no: 'Company is not a member of any other platforms',
        },
    },
    poigMemeber: {
        options: {
            yes: {
                ans: 'YES',
                text: 'Company is a part of any action-oriented platforms.',
            },
            no: {
                ans: 'NO',
                text: 'Company is not a part of any action-oriented platforms.',
            }
        },
    },
});

const PLATFORMS_TOOLTIPS = [
    'WWF expects palm oil buyers to join the Roundtable on Sustainable Palm Oil (RSPO) and actively contribute to its vision of making sustainable palm oil the norm.',
    'Aside from the RSPO and/or POIG, WWF expects palm oil buyers to participate in other action-oriented sustainability platforms. These platforms need to go beyond just membership and commitments on paper and must require demonstrable action and implementation by participating companies to support a sustainable palm oil industry beyond their own supply chains.',
    'WWF encourages palm oil buyers to comply with RSPO’s shared responsibility requirements.'  
]

const getPlatformsDescription = (field: string) => {
     if (sc.company) {
        let description;
        if (field == 'rspoMember' || field == 'poigMemeber') {
            sc.company.platforms[field] == true ? description = PLATFORMS_CARDS.value[field].options.yes : description = PLATFORMS_CARDS.value[field].options.no
        } else {
            description = 'Lol'
        }
        return description;
        
        /* if (
        field === 'memberPlatforms' &&
        value === 'yes' &&
        sc.company.platforms.platformNames !== ''
        ) {
        description +=
            ' ' +
            formatString(sc.company.platforms.platformNames, ';');
        }
        return description; */
    }
   
}





</script>