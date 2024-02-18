<template>
    <section class="u-section u-section--padded u-gradient u-gradient--cake-transparent">
        <div class="u-container u-container--md">
            <header class="u-header">
                <h2><span class="font-wwf text-green">{{ sc.companies.length }}</span> {{ tr.ho_scatter_title }}</h2>
                <p>{{ tr.ho_scatter_description_01 }} <span class="font-bold text-green">{{ tr.ho_scatter_description_02 }} {{ sc.sc_average }} {{ tr.ho_scatter_description_03 }} {{ sc.sc_total_points }}</span> {{ tr.ho_scatter_description_04 }}</p>
            </header>
        </div>
        <div class="u-container">
            <div class="w-[1110px] flex flex-col justify-center mx-auto">
                <div class="flex items-center gap-3 mb-10">
                    <div class="w-1/2 flex gap-3">
                        <core-select 
                            class="flex-1"
                            :placeholder="tr.ho_scatter_filters_sector"
                            :options="sc.sc_filter_sectors"
                            @on-change="onFilter('sector', $event)"
                        />
                        <core-select 
                            class="flex-1"
                            :placeholder="tr.ho_scatter_filters_country"
                            :options="sc.sc_filter_countries"
                            @on-change="onFilter('hq', $event)"
                        />
                        <core-select 
                            class="flex-1"
                            :placeholder="tr.ho_scatter_filters_region"
                            :options="sc.sc_filter_regions"
                            @on-change="onFilter('regionHq', $event)"
                        />
                    </div>
                    <div class="w-1/2">
                        <div>
                            <input 
                                v-model="search"
                                type="text" 
                                class="font-open w-full border border-[#dadada] rounded-[50px] px-3 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300" 
                                :placeholder="tr.ho_scatter_search_placholder"
                                @keyup="onSearch"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7b7b7b" class="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div class="u-scatter__resume">
                    <div class="u-scatter__resume__block u-scatter__resume__block--col">
                        <h5>{{ tr.ho_scatter_resume_palmoil }}</h5>
                        <h4>{{ getResumePalmoil }}</h4>
                    </div>
                    <div class="u-scatter__resume__block">
                        <h4>{{ getResumePercentage('sgip') }}%</h4>
                        <h5>{{ tr.ho_scatter_resume_segregated }}</h5>
                    </div>
                    <div class="u-scatter__resume__block">
                        <h4>{{ getResumePercentage('is') }}%</h4>
                        <h5>{{ tr.ho_scatter_resume_credits }}</h5>
                    </div>
                    <div class="u-scatter__resume__block">
                        <h4>{{ getResumePercentage('mb') }}%</h4>
                        <h5>{{ tr.ho_scatter_resume_mass_balance }}</h5>
                    </div>
                    <div class="u-scatter__resume__block">
                        <h4>{{ getResumePercentage('bAndG') }}%</h4>
                        <h5>{{ tr.ho_scatter_resume_book_claim }}</h5>
                    </div>
                    <div class="u-scatter__resume__block">
                        <h4>{{ getResumePercentage('uncertified') }}%</h4>
                        <h5>{{ tr.ho_scatter_resume_uncertified }}</h5>
                    </div>
                </div>
                <apexchart 
                    class="w-full h-full"
                    type="scatter" 
                    :options="options" 
                    :series="series"
                />
                <div 
                    class="u-scatter-item"
                    :style="{ 'left': (sc.sc_average / sc.sc_total_points) * 100 + '%'}"
                >
                    <div 
                        class="u-scatter-item__circle"
                        :style="{ 'background-color': averageColor }"
                    />
                    <div 
                        class="u-scatter-item__line"
                        :style="{ 'background-color': averageColor }"
                    />
                    <div
                        class="u-scatter-item__data"
                        :style="{ 'background-color': averageColor }"
                    >
                        {{ sc.sc_average }}
                        <div class="u-scatter-item__data__label">
                            {{ tr.ho_scatter_axis_x_score_average }}
                        </div>
                    </div>
                </div>
                <div 
                    class="u-scatter-item"
                    :style="{ 'left': (sc.sc_total_points / sc.sc_total_points) * 100 + '%'}"
                >
                    <div 
                        class="u-scatter-item__circle"
                        :style="{ 'background-color': totalColor }"
                    />
                    <div 
                        class="u-scatter-item__line"
                        :style="{ 'background-color': totalColor }"
                    />
                    <div
                        class="u-scatter-item__data"
                        :style="{ 'background-color': totalColor }"
                    >
                        {{ sc.sc_total_points }}
                        <div class="u-scatter-item__data__label">
                            {{ tr.ho_scatter_axis_x_objective }}
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="flex justify-center mt-16">
                <core-score-ranges :norespondents="false" />
            </div> 
        </div>
        <footer class="mt-20">
            <div class="u-container u-container--md">
                <div class="text-center" v-html="tr.ho_scatter_closing"></div>
            </div>
        </footer>
    </section>
</template>

<script setup lang="ts">
const tr = useTrStore().translations
const sc = useScStore()

const companies = ref<Company[]>(sc.companies.filter((c: any) => c.respStatus))
const options = ref ({
    chart: {
        height: 550,
        type: 'scatter',
        zoom: {
            enabled: false,
            type: 'xy',
        },
    },
    xaxis: {
        tickAmount: 4,
        min: 0,
        max: 24,
        labels: {
            formatter: function (val:string) {
                return parseFloat(val).toFixed(0)
            },
        },
        title: {
            text: tr.ho_scatter_axis_x_score_total,
            offsetX: -460,
            offsetY: -10,
            style: {
                fontFamily: 'Open Sans',
                cssClass: 'u-scatter-xaxis-title',
            },
        },
        tooltip: {
            formatter: function (val: number) {
                return (+val).toFixed(1)
            },
        },
    },
    yaxis: {
        tickAmount: 4,
        labels: {
            formatter: function (val: number) {
                return useFormatNumberWithComma(+val.toFixed(0))
            },
        },
        title: {
            text: tr.ho_scatter_axis_y_title,
            style: {
                fontFamily: 'Open Sans',
                cssClass: 'u-scatter-yaxis-title',
            },
        },
    },
    legend: {
        show: false,
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
            const company: any = sc.sc_references[seriesIndex][dataPointIndex]
            return renderTooltip(company)
        },
    },
})
const series = ref(sc.sc_ranges)
const filters = ref({
    sector: null,
    hq: null,
    regionHq: null,
})
const search = ref<string>('')
const averageId = ref(sc.getTotalScoreRange(sc.sc_average, true))
const averageColor = ref(sc.sc_ranges.find((r: any) => r.id == averageId.value).color)
const totalId = ref(sc.getTotalScoreRange(sc.sc_total_points, true))
const totalColor = ref(sc.sc_ranges.find((r: any) => r.id == totalId.value).color)

const getResumePalmoil = computed(() => {
    const sumTotalPalmOil = companies.value.reduce((acc, company) => acc + company.totalPalmOil, 0)
    useFormatNumberWithComma
    return useFormatNumberWithComma(+sumTotalPalmOil.toFixed(0)) + ' MT'
})

const getResumePercentage = (field: string) => {
    const sumProducto = companies.value.reduce(
      (sum, current: any) => sum + current.purchasing[field] * current.totalPalmOil,
      0
    )
    const sumTotal = companies.value.reduce(
      (sum, current) => sum + current.totalPalmOil,
      0
    )
    if (sumProducto === 0 && companies.value.length === 0) {
      return '-'
    }
    return (sumProducto / sumTotal).toFixed(2)
  }


await sc.setCompaniesByRange(companies.value)
sc.sc_filter_sectors = sc.getListOfInCompanies(sc.companies, 'sector')
sc.sc_filter_countries = sc.getListOfInCompanies(sc.companies, 'hq')
sc.sc_filter_regions = sc.getListOfInCompanies(sc.companies, 'regionHq')

const renderTooltip = (company: Company) => {
    const OUT_OF = sc.sc_out_of
    let str = `<div class="u-scatter-tooltip">`
    str += `<div class="w-full">`
    str += renderCategory(
        company.purchasing.purchTotalCalcScore,
        OUT_OF.PURCHASING,
        sc.sc_types.PURCHASING,
        company.respStatus,
        sc.sc_types_text.PURCHASING
    )

    str += `</div>`

    str += `<div class="flex flex-wrap">`
    str += `<div class="w-1/2">`
    str += renderCategory(
        company.commitments.commitTotalScore,
        OUT_OF.COMMITMENTS,
        sc.sc_types.COMMITMENTS,
        company.respStatus,
        sc.sc_types_text.COMMITMENTS
    )
    str += renderCategory(
        company.suppliers.supTotalScore,
        OUT_OF.SUPPLIERS,
        sc.sc_types.SUPPLIERS,
        company.respStatus,
        sc.sc_types_text.SUPPLIERS
    )
    str += renderCategory(
        company.platforms.platformsTotalScore,
        OUT_OF.PLATFORMS,
        sc.sc_types.PLATFORMS,
        company.respStatus,
        sc.sc_types_text.PLATFORMS
    )
    str += renderCategory(
        company.onTheGround.groundTotalScore,
        OUT_OF.ON_THE_GROUND,
        sc.sc_types.ON_THE_GROUND,
        company.respStatus,
        sc.sc_types_text.ON_THE_GROUND
    )
    str += `</div>`
    str += `<div class="w-1/2">`
    str += renderTotalScore(
        company.companyTotalScore.toFixed(1),
        company.companyName,
        company.hq,
        company.totalPalmOil,
        company.id,
        company.respStatus
    )
    str += `</div>`
    str += `</div>`

    str += `</div>`

    return str
}

const renderCategory = (
    scoreOfCategory: number,
    total: number,
    categoryName: string,
    respondent: boolean,
    title: string
) => {
    let str = `<div class="u-scatter-tooltip__category py-2">
                <div class="flex items-center">`
    if (categoryName === sc.sc_types.PURCHASING) {
      str += `<div><span class="u-scatter-tooltip__category__title">${title}</span></div>
            <div class="flex flex-1 ">`
    } else {
      str += `<div><span class="u-scatter-tooltip__category__title">${title}</span></div>
                  <div class="flex flex-1 items-center">`
    }
    for (let index = 0; index < total; index++) {
        const color = sc.getRangeColor(
            scoreOfCategory,
            categoryName,
            respondent
        )
        if (scoreOfCategory > index) {
            str += `<img
            class="palm"
            src="/sc-palm-${color}.png"
            alt="sc-palm-${color}" />`
        } else {
            str += `<img
            class="palm"
            src="/sc-palm-none.png"/>`
        }
    }
    str += `</div>
        </div>
    </div>`

    return str
}

const renderTotalScore = (
    totalScore: number,
    companyName: string,
    country: string,
    totalPalm: any,
    id: any,
    respondent: boolean
) => {
    const rangeId = sc.getTotalScoreRange(totalScore, respondent)
    let str = `
    <div class="u-scatter-tooltip__stats">
        <div class="total-score-ctn">
            <div class="u-scatter-tooltip__counter ${rangeId}" style="background-color: ${sc.sc_ranges.find((r: any) => r.id == rangeId).color}">
                ${totalScore}
            </div>
        </div>
        <div class="u-scatter-tooltip__summary">
            <h5>${companyName}</h5>
            <p class="u-scatter-tooltip__hq">${country}</p>
            <p class="u-scatter-tooltip__mt">${useFormatNumberWithComma(totalPalm.toFixed(1))} MT</p>
        </div>
    </div>`
    return str
}

const onFilter = (type: any, value: any) => {
    (filters.value as any)[type] = value
    console.log('Filter changed', type, value)
    console.log('Filters', filters.value)
    // Clean series data
    sc.sc_ranges.map((r: any) => {
        r.data = []
    })
    sc.sc_references = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
    }
    // Empty search
    search.value = ''
    
    companies.value = sc.companies.filter(c => c.respStatus) as Company[]
    
    // Apply filters
    if (filters.value.sector) {
        companies.value = companies.value.filter((c: any) => c.sector == filters.value.sector)
    }
    if (filters.value.hq) {
        companies.value = companies.value.filter((c: any) => c.hq == filters.value.hq)
    }
    if (filters.value.regionHq) {
        companies.value = companies.value.filter((c: any) => c.regionHq == filters.value.regionHq)
    }

    // Set series data
    sc.setCompaniesByRange(companies.value)
}

const onSearch = () => {
    // Clean series data
    filters.value = {
        sector: null,
        hq: null,
        regionHq: null,
    }
    sc.sc_ranges.map((r: any) => {
        r.data = []
    })
    sc.sc_references = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
    }
    companies.value = sc.companies.filter(c => c.respStatus)

    
    companies.value = companies.value.filter((c: any) => {
        return c.companyName.toLowerCase().includes(search.value.toLocaleLowerCase())
    })
    console.log(companies.value)

    // Set series data
    sc.setCompaniesByRange(companies.value)
}
</script>