<template>
    <section v-if="sc.company && sc.company.respStatus" class="mt-20 py-20 border-t">
        <div class="u-container u-container--lg">
            <div class="flex space-x-6 <sm:space-x-0 <sm:flex-col">
                <div class="<sm:flex <sm:items-center <sm:space-x-4">
                    <div :class="[`u-range u-range--results u-sc-bg ${traceabilityColor}`]">
                        {{ sc.company.traceability.supTraceScore }}
                    </div>
                    <div :class="[`my-1 text-sm font-bold text-center u-sc-text ${traceabilityColor}`]">
                        OUT OF {{ traceability?.out_of }}
                    </div>
                </div>
                <div class="flex-1">
                    <header>
                        <h2 class="u-result-cat">TRACEABILITY</h2>
                    </header>
                    <div class="u-result-grid <md:mt-12">
                        <div class="u-result-grid-block w-1/2 <md:w-full">
                            <div class="u-result-block">
                                <header>
                                    <h3 class="u-result-block__header noline"><span>Does the company measure traceability of palm oil purchased?</span></h3>
                                </header>
                                <div 
                                    v-if="sc.company.traceability.supMill"
                                    :class="[`u-result-card__badge ${transformBoolean(sc.company.traceability.supMill)}`]" 
                                >
                                    <img :src="`/${transformBoolean(sc.company.traceability.supMill)}_invert.svg`" />
                                    <span>Yes, traceable to the mill.</span>
                                </div>
                                <div 
                                    v-if="!sc.company.traceability.supMill"
                                    :class="[`u-result-card__badge ${transformBoolean(sc.company.traceability.supMill)}`]" 
                                >
                                    <img :src="`/${transformBoolean(sc.company.traceability.supMill)}_invert.svg`" />
                                    <span>No, not traceable to the mill</span>
                                </div>
                                <div 
                                    v-if="sc.company.traceability.supPlant"
                                    :class="[`mt-3 u-result-card__badge ${transformBoolean(sc.company.traceability.supPlant)}`]" 
                                >
                                    <img :src="`/${transformBoolean(sc.company.traceability.supPlant)}_invert.svg`" />
                                    <span>Yes, traceable to plantations.</span>
                                </div>
                                <div 
                                    v-if="!sc.company.traceability.supPlant"
                                    :class="[`mt-3 u-result-card__badge ${transformBoolean(sc.company.traceability.supPlant)}`]" 
                                >
                                    <img :src="`/${transformBoolean(sc.company.suppliers.supPlant)}_invert.svg`" />
                                    <span>No, not traceable to plantations.</span>
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

const traceability = ref(sc.categories.find(c => c.id === 'traceability'))
const traceabilityColor = ref(sc.company ? sc.getRangeColor(sc.company.traceability.supTraceScore, 'traceability', sc.company.respStatus) : '')
const traceabilityColor2021 = ref(sc.company ? sc.getRangeColor2021(sc.company.previousScore.supTraceScore, 'suppliers', sc.company.respStatus) : '')
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

</script>