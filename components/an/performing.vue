<template>
    <section class="u-section">
        <div class="u-container u-container--lg">
            <div class="flex space-x-10">
                <div class="flex-1">
                    <h3 class="u-fs40 font-wwf text-green uppercase text-right">How companies are performing ON
                        FUNDAMENTAL ACTION AREAS</h3>
                </div>
                <div class="flex-1">
                    <p>
                        <strong>In light of the urgent global crisis</strong>, WWF's 2024 scorecard evaluated palm oil
                        buyers against a rigorous set of criteria.
                    </p>
                    <p>
                        The results are indisputable: while a few have shown praiseworthy strides in removing
                        deforestation, conversion, and human rights violations from their supply chains, there's ample
                        room for improvement among palm oil buyers collectively to achieve impactful and swift progress.
                    </p>
                </div>
            </div>
        </div>
        <div class="mt-20 u-container u-container--md">
            <h4 class="mb-10 font-wwf u-fs24noleaded text-green text-center uppercase">Share of respondents in select
                sectors<br> who meet key sustainability criteria</h4>
        </div>
        <div class="mb-20">
            <ClientOnly>
                <div class="w-full h-[75vh] flex justify-center">
                    <Radar :options="chartOptions" :data="chartData" />
                </div>
            </ClientOnly>
        </div>
        <div class="u-container u-container--lg">
            <div class="flex flex-wrap -mx-6 -my-6">
                <div class="u-an__radar">
                    <h4>Food Manufacturers</h4>
                    <div class="grid">
                        <div class="graph">
                            <img src="@/assets/img/an-radar-food-manufacturers.svg" alt="Food Manufacturers">
                        </div>
                        <div class="desc">
                            <ul>
                                <li>Food manufacturers comprise 53% of the total volume assessed.</li>
                                <li><strong>85%</strong> have "no-deforestation"  policies, with <strong>49%</strong> aligning with AFI standards.</li>
                                <li><strong>93%</strong> have publicly committed to procuring 100% RSPO CSPO, with 70% achieving this commitment by 2023 or earlier.</li>
                                <li><strong>41%</strong> report some level of traceability in their palm oil supply chain.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="u-an__radar">
                    <h4>Non-Food Manufacturers</h4>
                    <div class="grid">
                        <div class="graph">
                            <img src="@/assets/img/an-radar-nonfood-manufacturers.svg" alt="Food Manufacturers">
                        </div>
                        <div class="desc">
                            <ul>
                                <li>Non-food manufacturers account for 17% of assessed companies.</li>
                                <li><strong>86%</strong> have "no deforestation and conversion" policies, and <strong>86%</strong> have policy commitments to respect human rights.</li>
                                <li>Majority purchase POD (58%), followed by PKO (20%) and CPO (22%).</li>
                                <li><strong>91%</strong> have made public commitments to procure 100% RSPO CSPO, but <strong>only 32%</strong> have achieved this commitment by 2023 or earlier.</li>
                                <li><strong>68%</strong> can determine the traceability of their palm oil supply chain.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="u-an__radar">
                    <h4>Retailers</h4>
                    <div class="grid">
                        <div class="graph">
                            <img src="@/assets/img/an-radar-retailers.svg" alt="Food Manufacturers">
                        </div>
                        <div class="desc">
                            <ul>
                                <li>Retailers make up 32% of all assessed companies.</li>
                                <li>Majority use palm oil in their own brand food products (71%).</li>
                                <li>76% of palm products consumed by retailers are CPO, followed by POD at 19% and PKO making up the rest.</li>
                                <li><strong>90%</strong> have made public commitments to source 100% RSPO CSPO, with 61% achieving this target by 2023.</li>
                                <li><strong>Only 17%</strong> can trace a portion of their palm oil back to the plantations.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="u-an__radar">
                    <h4>FEED AND BIOFUEL</h4>
                    <div class="grid">
                        <div class="graph">
                            <img src="@/assets/img/an-radar-biofuel.svg" alt="FEED AND BIOFUEL">
                        </div>
                        <div class="desc">
                            <ul>
                                <li>Three respondents primarily use palm oil ingredients for animal feed manufacturing.</li>
                                <li>All three companies are RSPO members, but <strong>only two</strong> made commitments to source 100% RSPO certified palm products, none achieved by 2023.</li>
                                <li>None currently have traceability in their palm oil supply chains.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</template>

<script setup lang="ts">
import { Radar } from 'vue-chartjs'

const chartOptions = ref({
    maintainAspectRatio: false,
    elements: {
        line: {
            borderWidth: 2
        },
    },
    scales: {
        r: {
            pointLabels: {
                // Include a dollar sign in the ticks
                callback: function(value: string) {
                    const val = `${value}`
                    return `${val.substring(0, 30)}...`;
                }
            }
        }
    },
    plugins: {
        layout: {
            autoPadding: true,
            padding: {
                left: 0,
                right: 0,
                top: 50,
                bottom: 50
            }
        },
        legend: {
            display: true,
            labels: {
                font: {
                    family: 'WWF',
                    size: '18',
                    lineHeight: 1.5
                },
                color: '#000',
                pointStyle: 'circle',
                usePointStyle: true
            }
        },
        tooltip: {
            backgroundColor: '#f1ebdd',
            borderWidth: 1,
            borderColor:'#dadada',
            padding: 20,
            titleFont: {
                size: '16',
                lineHeight: 1,
                style: 'uppercase'
            },
            titleColor: '#000',
            bodyColor: '#000',
        }
    }
})

const chartData = ref({
    labels: [
        ['Deforestation-free commitment only'],
        ['Conversion-free commitment aligned with AFI', '(out of total respondents)'],
        ['Deforestation- and/or conversion-free commitment applies', 'to entire corporate group/company (out of total respondents)'],
        ['Human rights commitment (general)'],
        ['Human rights commitment aligned with AFI', '(out of total respondents)'],
        ['Human rights commitment applies', 'to the entire corporate group/company', '(out of total respondents)'],
        ['Time-bound commitment to sourcing 100%', 'RSPO CSPO (general)'],
        ['Purchasing: already sourcing' ,'100% RSPO CSPOO'],
        ['Share of total palm oil usage', 'that is RSPO-certified', '(out of total PO volumes)'],
        ['Suppliers required to have deforestation-free policy', '(out of total respondents)'],
        ['Suppliers required to have conversion-free', 'policy aligned with the AFI', '(out of total respondents AND a sub-set of the above figures)'],
        ['Suppliers required to have a human rights policy'],
        ['Suppliers required to have a human rights policy aligned with the AFI', '(out of total respondents AND a sub-set of the above figures)'],
        ['A portion of supply volume is traceable to mill', '(out of total respondents)'],
        ['Over 50% of supply volume is traceable to mill (out of the above)'],
        ['A portion of supply volume is traceable to plantation', '(out of total respondents)'],
        ['Over 50% of supply volume is traceable to plantation', '(out of the above)'],
        ['Systems to monitor supplier compliance', 'with deforestation- and/or conversion-free policy'],
        ['Systems to monitor supplier compliance with human rights policy'],
        ['RSPO membership'],
        ['Membership of other action-oriented sustainability platforms'],
        ['Average RSPO SR Score'],
        ['On the ground investments in', 'palm oil producing landscapes'],
        ['Investments are aligned with AFI operational guidance and/or', 'POBS prescribed principles and frameworks']
    ],
    datasets: [
        {
            label: 'FOOD MANUFACTURERS',
            data: [36, 49, 77, 52, 38, 85, 93, 70, 0, 77, 46, 89, 39, 41, 36, 28,25, 41, 64, 98, 48, 49, 38, 36],
            fill: true,
            backgroundColor: 'rgba(228, 100, 102, 0.2)',
            borderColor: 'rgba(228, 100, 102, 1)',
            pointBackgroundColor: 'rgba(228, 100, 102, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(228, 100, 102, 1)'
        },
        {
            label: 'NON-FOOD MANUFACTURERS',
            data: [32,55,82,23,68,91,91,23,0,86,55,95,68,68,64,64,59,77,82,91,68,74,73,68],
            fill: true,
            backgroundColor: 'rgba(228, 200, 100, 0.2)',
            borderColor: 'rgba(228, 200, 100, 1)',
            pointBackgroundColor: 'rgba(228, 200, 100, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(228, 200, 100, 1)'
        },
        {
            label: 'RETAILERS',
            data: [32,56,83,46,51,98,90,61,0,71,44,98,49,27,15,17,7,54,66,90,73,54,51,49],
            fill: true,
            backgroundColor: 'rgba(65, 180, 100, 0.2)',
            borderColor: 'rgba(65, 180, 100, 1)',
            pointBackgroundColor: 'rgba(65, 180, 100, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(65, 180, 100, 1)'
        },
        {
            label: 'FEED AND BIOFUEL',
            data: [25,50,75,75,25,75,50,0,0,75,50,100,25,25,25,25,25,25,75,100,25,49,25,25],
            fill: true,
            backgroundColor: 'rgba(158, 104, 226, 0.2)',
            borderColor: 'rgba(158, 104, 226, 1)',
            pointBackgroundColor: 'rgba(158, 104, 226, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(158, 104, 226, 1)'
        },
    ]
});
</script>