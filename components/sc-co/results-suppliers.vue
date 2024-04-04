<template>
    <section v-if="sc.company && sc.company.respStatus" class="mt-20 py-20 border-t">
        <div class="u-container u-container--lg">
            <div class="flex space-x-6">
                <div>
                    <div :class="[`u-range u-range--results u-sc-bg ${suppliersColor}`]">
                        {{ sc.company.suppliers.supTotalScore }}
                    </div>
                    <div :class="[`my-1 text-sm font-bold text-center u-sc-text ${suppliersColor}`]">
                        OUT OF {{ suppliers?.out_of }}
                    </div>
                    <core-range-balance 
                        v-if="Object.keys(sc.company.previousScore).length > 0 && sc.company.respStatus"            
                        :current="sc.company.suppliers.supTotalScore" 
                        :old="sc.company.previousScore.supTotalScore"
                    />
                    <div :class="[`u-range u-range--bg ${suppliersColor2021}`]">
                        {{ sc.company.previousScore.supTotalScore }}
                    </div>
                    <div 
                        v-if="Object.keys(sc.company.previousScore).length >    0 && sc.company.respStatus"
                        class="text-sm font-wwf text-[#7B7B7B] text-center"
                    >2021</div>
                </div>
                <div class="flex-1">
                    <header>
                        <h2 class="u-result-cat">SUPPLIERS REQUIREMENTS</h2>
                    </header>
                    <div class="u-result-grid">
                        <div class="u-result-grid-block border-r w-1/2">
                            <div class="u-result-block">
                                <header>
                                    <h3 class="u-result-block__header noline"><span>Does the company expect suppliers to have a commitment to sourcing deforestation- and conversion-free palm oil?</span></h3>
                                </header>
                                <div :class="[`u-result-card u-result-card--flex u-result-card u-result-card--${sc.company.suppliers.supFree.toLowerCase()}`]">
                                    <div class="u-result-card__ans">
                                        <span>{{ sc.company.suppliers.supFree.toLowerCase() }}</span>
                                    </div>
                                    <div class="u-result-card__des">
                                        {{ getSuppliersDescription('supFree') }}
                                    </div>
                                    <VDropdown :triggers="['hover']" class="u-result-card__tooltip">
                                        <a><img src="@/assets/img/tooltip.svg"></a>

                                        <template #popper>
                                            <div class="u-result-card__tooltip__content">
                                                <p>
                                                    {{ SUPPLIERS_TOOLTIPS[0] }}
                                                </p>
                                            </div>
                                            
                                        </template>
                                    </VDropdown>
                                </div>
                            </div>
                        </div>
                        <div class="u-result-grid-block w-1/2">
                            <div class="u-result-block">
                                <header>
                                    <h3 class="u-result-block__header noline"><span>Does the company expect suppliers to have a commitment to sourcing palm oil that respects human rights?</span></h3>
                                </header>
                                <div :class="[`u-result-card u-result-card--flex u-result-card u-result-card--${sc.company.suppliers.supHr.toLowerCase()}`]">
                                    <div class="u-result-card__ans">
                                        <span>{{ sc.company.suppliers.supHr.toLowerCase() }}</span>
                                    </div>
                                    <div class="u-result-card__des">
                                        {{ getSuppliersDescription('supHr') }}
                                    </div>
                                    <VDropdown :triggers="['hover']" class="u-result-card__tooltip">
                                        <a><img src="@/assets/img/tooltip.svg"></a>

                                        <template #popper>
                                            <div class="u-result-card__tooltip__content">
                                                <p>
                                                    {{ SUPPLIERS_TOOLTIPS[1] }}
                                                </p>
                                            </div>
                                            
                                        </template>
                                    </VDropdown>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="u-result-grid mt-20">
                        <div class="u-result-grid-block border-r w-1/2">
                            <div class="u-result-block">
                                <header>
                                    <h3 class="u-result-block__header noline"><span>Does the company have monitoring and response systems in place to verify supplier compliance with:</span></h3>
                                </header>
                                <div :class="[`u-result-card__badge ${transformBoolean(sc.company.suppliers.supMonDcfree)}`]" >
                                    <img :src="`/2024/${transformBoolean(sc.company.suppliers.supMonDcfree)}_invert.svg`" />
                                    <span>DEFORESTATION- AND/OR CONVERSION-FREE COMMITMENTS</span>
                                </div>
                                <div :class="[`mt-3 u-result-card__badge ${transformBoolean(sc.company.suppliers.supMonHr)}`]" >
                                    <img :src="`/2024/${transformBoolean(sc.company.suppliers.supMonHr)}_invert.svg`" />
                                    <span>DEFORESTATION- AND/OR CONVERSION-FREE COMMITMENTS</span>
                                </div>
                            </div>
                        </div>
                        <div class="u-result-grid-block w-1/2">
                            <div class="u-result-block">
                                <header>
                                    <h3 class="u-result-block__header noline"><span>Does the company expect suppliers to source palm oil that is traceable to the mill/plantation?</span></h3>
                                </header>
                                <div :class="[`u-result-card__badge ${transformBoolean(sc.company.suppliers.supMill)}`]" >
                                    <img :src="`/2024/${transformBoolean(sc.company.suppliers.supMill)}_invert.svg`" />
                                    <span>has a monitoring system for Traceability to Mill (TTM) and achieves more than 50%</span>
                                </div>
                                <div :class="[`mt-3 u-result-card__badge ${transformBoolean(sc.company.suppliers.supPlant)}`]" >
                                    <img :src="`/2024/${transformBoolean(sc.company.suppliers.supPlant)}_invert.svg`" />
                                    <span>has a monitoring system for Traceability to Plantation (TTP) and achieves more than 50% </span>
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

const suppliers = ref(sc.categories.find(c => c.id === 'suppliers'))
const suppliersColor = ref(sc.company ? sc.getRangeColor(sc.company.suppliers.supTotalScore, 'suppliers', sc.company.respStatus) : '')
const suppliersColor2021 = ref(sc.company ? sc.getRangeColor2021(sc.company.previousScore.supTotalScore, 'suppliers', sc.company.respStatus) : '')
const SUPPLIERS_CARDS = ref<any>({
    supFree: {
        options: {
            yes: 'Company requires suppliers to have a deforestation- and conversion-free commitment ',
            no: 'Company does not require suppliers to have have a deforestation- or conversion- free commitment',
            partially:
            'Company only requires suppliers to have a deforestation-free commitment',
        },
    },
    supHr: {
        options: {
            yes: 'Company requires suppliers to have a commitment to respect the human rights of all relevant stakeholder groups',
            no: 'Company does not require suppliers to have a human rights commitment',
            partially: 'Company requires suppliers to have a commitment to respect human rights, but it does not cover the rights of all relevant stakeholder groups',
        },
    },
    supMilPlant: {
        options: {
            yes_mill:
            'Company requires suppliers to only purchase palm oil that is traceable to the mill',
            yes_plant: 'Company requires suppliers to only purchase palm oil that is traceable to the plantation',
            no: 'Company does not require suppliers to purchase traceable palm oil',
        },
    },
});

const SUPPLIERS_TOOLTIPS = [
    "WWF expects palm oil buyers to require their suppliers to also be committed to sourcing sustainable palm oil that is free of deforestation and conversion, in alignment with the Accountability Framework's definitions. This commitment should extend across the suppliers’ entire operations (beyond what is sourced directly to the company).",
    "WWF expects palm oil buyers to require their suppliers to also be committed to sourcing sustainable palm oil that respects the rights of all stakeholders that may be negatively impacted by palm oil production or trade (including Indigenous peoples, local communities, workers and and others who may be impacted by company activities), in alignment with the Accountability Framework's definitions. This commitment should extend across the suppliers’ entire operations (beyond what is sourced directly to the company)."
]

const getSuppliersDescription = (field: string) =>{
    if (sc.company) {
        let value = sc.company.suppliers[field];
        if (!value) {
            value = sc.company.suppliers.supMilPlantValue;
        }
        return SUPPLIERS_CARDS.value[field].options[value.toLowerCase()];
    }
    
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
            class: 'partially',
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
            class: 'partially',
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