<template>
    <section v-if="sc.company && sc.company.respStatus" class="u-section">
        <div class="u-container u-container--lg">
            <div class="flex space-x-6 <sm:space-x-0 <sm:flex-col">
                <div class="<sm:flex <sm:items-center <sm:space-x-4">
                    <div :class="[`u-range u-range--results u-sc-bg ${commitmentsColor}`]">
                        {{ sc.company.commitments.commitTotalScore }}
                    </div>
                    <div :class="[`my-1 text-sm font-bold text-center u-sc-text ${commitmentsColor}`]">
                        OUT OF {{ commitments?.out_of }}
                    </div>
                    <core-range-balance 
                        v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"            
                        :current="sc.company.commitments.commitTotalScore" 
                        :old="sc.company.previousScore.commitTotalScore"
                    />
                    <div :class="[`u-range u-range--bg ${commitmentsColor2021}`]">
                        {{ sc.company.previousScore.commitTotalScore }}
                    </div>
                    <div 
                        v-if="Object.keys(sc.company.previousScore).length >    0 && sc.company.respStatus"
                        class="text-sm font-wwf text-[#7B7B7B] text-center"
                    >2021</div>
                </div>
                <div class="flex-1">
                    <header>
                        <h2 class="u-result-cat">COMMITMENTS</h2>
                    </header>
                    <div class="u-result-block">
                        <header>
                            <h3 class="u-result-block__header"><span>Does the company have a public commitment to sourcing deforestation- and conversion-free palm oil?</span></h3>
                        </header>
                        <div class="flex gap-x-4 <md:flex-wrap <md:gap-x-0 <md:-m-3">
                            <div class="flex-1 <md:flex-initial <md:w-1/2 <md:p-3 <sm:w-full">
                                <div :class="[`u-result-card u-result-card u-result-card--${sc.company.commitments.commitDef.toLowerCase()}`]">
                                    <div class="u-result-card__ans">
                                        <span>{{ sc.company.commitments.commitDef.toLowerCase() }}</span>
                                    </div>
                                    <div class="u-result-card__des">
                                        {{ getCommitmentDescription('commitDef') }}
                                    </div>
                                    <VDropdown :triggers="['hover']" class="u-result-card__tooltip">
                                        <a><img src="@/assets/img/tooltip.svg"></a>

                                        <template #popper>
                                            <div class="u-result-card__tooltip__content">
                                                <p>
                                                    {{ COMMITMENT_TOOLTIPS[0] }}
                                                </p>
                                            </div>
                                            
                                        </template>
                                    </VDropdown>
                                </div>
                            </div>
                            <div class="flex-1 <md:flex-initial <md:w-1/2 <md:p-3 <sm:w-full">
                                <div :class="[`u-result-card u-result-card u-result-card--border`]">
                                    <div class="u-result-card__que">
                                        What palm oil types does the commitment cover?
                                    </div>
                                    <div class="u-result-card__checks">
                                        <div :class="[`u-result-card__check ${valuesDCFree.cpo}`]">
                                            <img :src="`/${valuesDCFree.cpo}.svg`" />
                                            <span>CRUDE PALM OIL</span>
                                        </div>
                                        <div :class="[`u-result-card__check ${valuesDCFree.pke}`]">
                                            <img :src="`/${valuesDCFree.pke}.svg`" />
                                            <span>PALM KERNEL EXPELLER</span>
                                        </div>
                                        <div :class="[`u-result-card__check ${valuesDCFree.pko}`]">
                                            <img :src="`/${valuesDCFree.pko}.svg`" />
                                            <span>PALM KERNEL OIL</span>
                                        </div>
                                        <div :class="[`u-result-card__check ${valuesDCFree.pod}`]">
                                            <img :src="`/${valuesDCFree.pod}.svg`" />
                                            <span>PALM OIL DERIVATIVES</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 <md:flex-initial <md:w-1/2 <md:p-3 <sm:w-full">
                                <div :class="[`u-result-card u-result-card u-result-card--border`]">
                                    <div class="u-result-card__que">
                                        Does the commitment cover the entire corporate group or just the company itself?
                                    </div>
                                    <div class="flex-1">
                                        <div :class="[`u-result-card__badge ${getCommitCorp()?.class}`]" >
                                            <img :src="`/${getCommitCorp()?.class}_invert.svg`" />
                                            <span>{{ getCommitCorp()?.text }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="u-result-block">
                        <header>
                            <h3 class="u-result-block__header"><span>Does the company have a public commitment to sourcing palm oil that respects human rights?</span></h3>
                        </header>
                        <div class="flex gap-x-4 <md:flex-wrap <md:gap-x-0 <md:-m-3">
                            <div class="flex-1 <md:flex-initial <md:w-1/2 <md:p-3 <sm:w-full">
                                <div :class="[`u-result-card u-result-card u-result-card--${sc.company.commitments.commitHr.toLowerCase()}`]">
                                    <div class="u-result-card__ans">
                                        <span>{{ sc.company.commitments.commitHr.toLowerCase() }}</span>
                                    </div>
                                    <div class="u-result-card__des">
                                        {{ getCommitmentDescription('commitHr') }}
                                    </div>
                                    <VDropdown :triggers="['hover']" class="u-result-card__tooltip">
                                        <a><img src="@/assets/img/tooltip.svg"></a>

                                        <template #popper>
                                            <div class="u-result-card__tooltip__content">
                                                <p>
                                                    {{ COMMITMENT_TOOLTIPS[1] }}
                                                </p>
                                            </div>
                                        </template>
                                    </VDropdown>
                                </div>
                            </div>
                            <div class="flex-1 <md:flex-initial <md:w-1/2 <md:p-3 <sm:w-full">
                                <div :class="[`u-result-card u-result-card u-result-card--border`]">
                                    <div class="u-result-card__que">
                                        What palm oil types does the commitment cover?
                                    </div>
                                    <div class="u-result-card__checks">
                                        <div :class="[`u-result-card__check ${valuesHR.cpo}`]">
                                            <img :src="`/${valuesHR.cpo}.svg`" />
                                            <span>CRUDE PALM OIL</span>
                                        </div>
                                        <div :class="[`u-result-card__check ${valuesHR.pke}`]">
                                            <img :src="`/${valuesHR.pke}.svg`" />
                                            <span>PALM KERNEL EXPELLER</span>
                                        </div>
                                        <div :class="[`u-result-card__check ${valuesHR.pko}`]">
                                            <img :src="`/${valuesHR.pko}.svg`" />
                                            <span>PALM KERNEL OIL</span>
                                        </div>
                                        <div :class="[`u-result-card__check ${valuesHR.pod}`]">
                                            <img :src="`/${valuesHR.pod}.svg`" />
                                            <span>PALM OIL DERIVATIVES</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 <md:flex-initial <md:w-1/2 <md:p-3 <sm:w-full">
                                <div :class="[`u-result-card u-result-card u-result-card--border`]">
                                    <div class="u-result-card__que">
                                        Does the commitment cover the entire corporate group or just the company itself?
                                    </div>
                                    <div class="flex-1">
                                        <div :class="[`u-result-card__badge ${getCommitEntCorp()?.class}`]" >
                                            <img :src="`/${getCommitEntCorp()?.class}_invert.svg`" />
                                            <span>{{ getCommitEntCorp()?.text }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="u-result-block">
                        <header>
                            <h3 class="u-result-block__header"><span>Does the company have a public commitment to sourcing 100% RSPO certified sustainable palm oil?</span></h3>
                        </header>
                        <div class="flex">
                            <div class="w-1/2 <sm:w-full">
                                <div :class="[`u-result-card u-result-card--flex u-result-card u-result-card--${transformValue(sc.company.commitments.commitRspoCpo)}`]">
                                    <div class="u-result-card__ans">
                                        <span>{{ transformValue(sc.company.commitments.commitRspoCpo) }}</span>
                                    </div>
                                    <div class="u-result-card__des">
                                        {{ getCommitmentDescription('commitRspoCpo') }}
                                    </div>
                                    <VDropdown :triggers="['hover']" class="u-result-card__tooltip">
                                        <a><img src="@/assets/img/tooltip.svg"></a>

                                        <template #popper>
                                            <div class="u-result-card__tooltip__content">
                                                <p>
                                                    {{ COMMITMENT_TOOLTIPS[2] }}
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

const commitments = ref(sc.categories.find(c => c.id === 'commitments'))
const commitmentsColor = ref(sc.company ? sc.getRangeColor(sc.company.commitments.commitTotalScore, 'commitments', sc.company.respStatus) : '')
const commitmentsColor2021 = ref(sc.company ? sc.getRangeColor2021(sc.company.previousScore.commitTotalScore, 'commitments', sc.company.respStatus) : '')
const COMMITMENTS_CARDS = ref<any>({
    commitDef: {
        options: {
            yes: 'COMPANY HAS A DEFORESTATION AND CONVERSION-FREE COMMITMENT',
            no: 'Company does not have a deforestation- or conversion-free commitment',
            partially: 'Company only has a deforestation-free commitment',
        },
    },
    commitHr: {
        options: {
            yes: 'Company has a commitment to respect the human rights of all relevant stakeholder groups',
            no: 'Company does not have a commitment to respect human rights',
            partially: 'Company has a commitment to respect human rights, but it does not cover the rights of all relevant stakeholder groups',
        },
    },
    commitRspoCpo: {
        options: {
            yes: 'Company has a commitment to source 100% RSPO CSPO by 2023 (or earlier)',
            partially_non_date: 'Company has a commitment to source 100% RSPO CSPO, but has not set an explicit target date',
            partially_target_date: 'Company has a commitment to source 100% RSPO CSPO, but has set a target date of ',
            no: 'Company does not has a commitment to source 100% RSPO CSPO',
        },
    },
});

const COMMITMENT_TOOLTIPS = [
    'In alignment with the Accountability Framework\'s definitions, WWF expects palm oil buyers to have a commitment to sourcing palm oil that is produced without deforestation or natural ecosystem conversion. This commitment also needs to cover the company\s entire operations — including all palm oil volumes and types sourced, and geographies in which the company operates. If a company is part of a corporate group, the same must be true for the group level.',
    'In alignment with the Accountability Framework\'s definitions, WWF expects palm oil buyers to have a human rights commitment that covers the rights of all stakeholder groups that may be negatively impacted by palm oil production or trade (including Indigenous peoples, local communities, workers and others who may be impacted by company activities). This commitment also needs to cover the company\'s entire operations — including all palm oil volumes and types sourced,  and geographies in which the company operates. If a company is part of a corporate group, the same must be true for the group level.',
    'Making a public, time-bound commitment to sourcing 100% RSPO CSPO is a simple action all palm oil buyers can take towards cleaning their own supply chain and incentivising more sustainable palm oil production. WWF expects palm oil buyers to have a sufficiently challenging target date that they have ideally already met.',
]

const getCommitmentDescription = (field: any) => {
    let description = ''
    if (sc.company) {
        const value = sc.company.commitments[field];
        description = COMMITMENTS_CARDS.value[field].options[value.toLowerCase()];
        if (field === 'commitRspoCpo') {
            if (
                sc.company.commitments.commitRspoCpo.toLowerCase() !== 'no' &&
                sc.company.commitments.commitRspoCpo.toLowerCase() !== 'yes'
            ) {
                if (Number.isNaN(+sc.company.commitments.commitLaterDate)) {
                    description = COMMITMENTS_CARDS.value[field].options['partially_non_date'];
                } else {
                    description =
                        COMMITMENTS_CARDS.value[field].options['partially_target_date'] +
                        sc.company.commitments.commitLaterDate;
                }
            }
        }
    }
    
    return description;
}

const valuesDCFree = ref(sc.company ? {
      cpo: transformCheck(sc.company.commitments.commitCpo),
      pko: transformCheck(sc.company.commitments.commitPko),
      pke: transformCheck(sc.company.commitments.commitPke),
      pod: transformCheck(sc.company.commitments.commitPod),
}: {})

const valuesHR = ref(sc.company ? {
      cpo: transformCheck(sc.company.commitments.commitHrCpo),
      pko: transformCheck(sc.company.commitments.commitHrPko),
      pke: transformCheck(sc.company.commitments.commitHrPke),
      pod: transformCheck(sc.company.commitments.commitHrPod),
}: {})

const getCommitCorp = () => {
    if (sc.company?.commitments.commitCorp.toLowerCase().includes('corporate group')) {
        return {
            class: 'ok',
            text: 'ENTIRE CORPORATE GROUP',
        }
    }
    if (sc.company?.commitments.commitCorp.toLowerCase().includes('company')) {
        return {
            class: 'ok',
            text: 'ENTIRE COMPANY',
        }
    }
    if (sc.company?.commitments.commitCorp.toLowerCase().includes('no')) {
        return {
            class: 'not',
            text: 'NO',
        }
    }
}

const getCommitEntCorp = () => {
    if (sc.company?.commitments.commitEntCorp.toLowerCase().includes('corporate group')) {
        return {
            class: 'ok',
            text: 'ENTIRE CORPORATE GROUP',
        }
    }
    if (sc.company?.commitments.commitEntCorp.toLowerCase().includes('company')) {
        return {
            class: 'ok',
            text: 'ENTIRE COMPANY',
        }
    }
    if (sc.company?.commitments.commitEntCorp.toLowerCase().includes('no')) {
        return {
            class: 'not',
            text: 'NO',
        }
    }
}
</script>