import { defineStore } from 'pinia'

export const useScStore = defineStore('scStore', () => {
    const csStore = useCsStore()
    const { $i18n } = useNuxtApp()
    const companies = ref<Company[]>([])
    const company = ref<Company|null>(null)
    const average = ref<number>(0)
    const ranges = ref<any>([
        {
            id: 'non-respondent',
            name: $i18n.t('sc_range_05'),
            color: '#C1C1C1',
            range: null,
            data: [],
        },
        {
            id: 'lagging-behind',
            name: $i18n.t('sc_range_04'),
            color: '#E46466',
            range: [0, 10.99],
            data: [],
        },
        {
            id: 'middle-of-the-pack',
            name: $i18n.t('sc_range_03'),
            color: '#E4C864',
            range: [11, 16.49],
            data: [],
        },
        {
            id: 'intermediate',
            name: $i18n.t('sc_range_02'),
            color: '#96b441',
            range: [16.5, 19.49],
            data: [],
        },
        {
            id: 'advanced',
            name: $i18n.t('sc_range_01'),
            color: '#41b464',
            range: [19.5, 24],
            data: [],
        }
    ])
    const ranges2021 = ref<any>([
        {
            id: 'non-respondent',
            name: $i18n.t('sc_range_05'),
            color: '#C1C1C1',
            range: null,
            data: [],
        },
        {
            id: 'lagging-behind',
            name: $i18n.t('sc_range_04'),
            color: '#E46466',
            range: [0, 10.99],
            data: [],
        },
        {
            id: 'middle-of-the-pack',
            name: $i18n.t('sc_range_03'),
            color: '#E4C864',
            range: [11, 16.49],
            data: [],
        },
        {
            id: 'intermediate',
            name: $i18n.t('sc_range_02'),
            color: '#96b441',
            range: [16.5, 19.5],
            data: [],
        },
        {
            id: 'advanced',
            name: $i18n.t('sc_range_01'),
            color: '#41b464',
            range: [19.5, 24],
            data: [],
        }
    ])
    const references = ref<any>({
        0: [],
        1: [],
        2: [],
        3: [],
        4: []
    })
    const filter_sectors = ref<Company[]>([])
    const filter_countries = ref<Company[]>([])
    const filter_regions = ref<Company[]>([])
    const filter_applicSector = ref<Company[]>([])
    const categories = ref([
        {
            id: 'commitments',
            label: $i18n.t('sc_type_commitment'),
            total: 'commitTotalScore',
            out_of: 4,
            sections: [
                {
                    description:
                        'Does the company have a public commitment to sourcing deforestation- and conversion-free palm oil?',
                    categories: [
                        {
                            yes: 'COMPANY HAS A DEFORESTATION AND CONVERSION-FREE COMMITMENT',
                            no: 'Company does not have a deforestation- or conversion-free commitment',
                            partially: 'Company only has a deforestation-free commitment',
                            property: 'commitDef',
                        },
                    ],
                },
                {
                    description:
                        'Does the company have a public commitment to sourcing palm oil that respects human rights?',
                    categories: [
                        {
                            yes: 'COMPANY HAS A DEFORESTATION AND CONVERSION-FREE COMMITMENT',
                            no: 'Company does not have a commitment to respect human rights',
                            partially:
                                'Company has a commitment to respect human rights, but it does not cover the rights of all relevant stakeholder groups',
                            property: 'commitHr',
                        },
                    ],
                },
                {
                    description:
                        'Does the company have a public commitment to sourcing 100% RSPO certified sustainable palm oil? ',
                    categories: [
                        {
                            yes: 'Company has a commitment to source 100% RSPO CSPO by 2020 (or earlier)',
                            partially_non_date:
                                'Company has a commitment to source 100% RSPO CSPO, but has not set an explicit target date',
                            partially_target_date:
                                'Company has a commitment to source 100% RSPO CSPO, but has set a target date of ',
                            no: 'Company does not has a commitment to source 100% RSPO CSPO.',
                            property: 'commitRspoCpo',
                        },
                    ],
                },
            ],
        },
        {
            id: 'purchasing',
            label: $i18n.t('sc_type_purchasing'),
            out_of: 11,
            sections: [
                {
                    description:
                        'Are all of the company’s palm oil volumes 100% RSPO certified? ',
                    categories: [
                        {
                            yes: 'All of the company’s palm oil volumes are RSPO certified',
                            no: 'Not all of the company’s palm oil volumes are RSPO certified',
                            none: 'None of the company’s palm oil volumes ares RSPO certified',
                            property: 'rspoCert',
                        },
                    ],
                },
                {
                    description:
                        'DID THE COMPANY REPORT PALM OIL QUANTITIES FOR ITS ENTIRE OPERATIONS?',
                    categories: [
                        {
                            yes: 'All of the countries in which the group/company operates (company is not part of a group)',
                            no: 'Only some of the countries in which the group/company operates',
                            partially:
                                'All of the countries in which the company operates, but not the group',
                            property: 'entireOps',
                        },
                    ],
                },
            ],
        },
        {
            id: 'suppliers',
            label: $i18n.t('sc_type_suppliers'),
            out_of: 2,
            sections: [
                {
                    description:
                        'Does the company expect suppliers to have a commitment to sourcing deforestation- and conversion-free palm oil?',
                    categories: [
                        {
                            yes: 'Company requires suppliers to have a deforestation- and conversion-free commitment ',
                            no: 'Company does not require suppliers to have have a deforestation- or conversion- free commitment',
                            partially:
                                'Company only requires suppliers to have a deforestation-free commitment',
                            property: 'supFree',
                        },
                    ],
                },
                {
                    description:
                        'Does the company expect suppliers to have a commitment to sourcing palm oil that respects human rights?',
                    categories: [
                        {
                            yes: 'Company requires suppliers to have a commitment to respect the human rights of all relevant stakeholder groups',
                            no: 'Company does not require suppliers to have a human rights commitment',
                            partially:
                                'Company requires suppliers to have a commitment to respect human rights, but it does not cover the rights of all relevant stakeholder groups',
                            property: 'supHr',
                        },
                    ],
                }
            ],
        },
        {
            id: 'traceability',
            label: $i18n.t('sc_type_traceability'),
            out_of: 1,
            sections: [
                {
                    description:
                        'Does the company expect suppliers to source palm oil that is traceable to the mill/plantation?',
                    categories: [
                        {
                            yes_mill:
                                'Company requires suppliers to only purchase palm oil that is traceable to the mill.',
                            yes_plant:
                                'Company requires suppliers to only purchase palm oil that is traceable to the plantation.',
                            no: 'Company does not require suppliers to purchase traceable palm oil.',
                            property: 'supMill',
                        },
                    ],
                },
            ],
        },
        {
            id: 'platforms',
            label: $i18n.t('sc_type_platforms'),
            out_of: 2,
            sections: [
                {
                    description: 'Is the company a member of the RSPO?',
                    categories: [
                        {
                            yes: 'Company is a member of the RSPO',
                            no: 'Company is not a member of the RSPO',
                            property: 'rspoMember',
                        },
                    ],
                },
                {
                    description: 'Is the company a member of POIG?',
                    categories: [
                        {
                            yes: 'Company is a member of POIG',
                            no: 'Company is not a member of POIG',
                            property: 'poigMemeber',
                        },
                    ],
                },
                {
                    description:
                        'Does the company take part in other action-oriented sustainability platforms?',
                    categories: [
                        {
                            yes: 'Company is a member of',
                            no: 'Company is not a member of any other platforms',
                            property: 'memberPlatforms',
                        },
                    ],
                },
            ],
        },
        {
            id: 'onTheGround',
            label: $i18n.t('sc_type_ground'),
            out_of: 4,
            sections: [
                {
                    description: 'Does the company have on the ground investments?',
                    categories: [
                        {
                            yes: 'Company is investing in projects in palm oil producing landscapes',
                            no: 'Company is not investing in any projects in palm oil producing landscapes',
                            property: 'haveOnTheGrnd',
                        },
                    ],
                },
            ],
        }
    ])
    const total_outof = ref<number>(24)
    const supply_chain_own = ref<number>(18)
    const supply_chain_beyond = ref<number>(6)

    const fetchScores = async () => {
        const { data, error } = await useFetch('https://palmoiladm.panda.org/scores?year=2024')

        if (error.value) {
            console.error('Error fetching scores', error.value)
            return
        }

        companies.value = data.value as Company[]
        companies.value.map((c: Company) => { c.historical = false })
        await getAverage()
    }

    const setCompaniesByRange = (cs: Company[]) => {
        if (cs.length === 0) return
        cs.map((c: Company) => {
            if (c.companyTotalScore >= ranges.value[4].range[0] && c.companyTotalScore <= 24) {
                ranges.value[4].data.push([c.companyTotalScore, c.totalPalmOil, c.id])
                references.value['4'].push(c)
            }
            if (c.companyTotalScore >= ranges.value[3].range[0] && c.companyTotalScore < ranges.value[3].range[1]) {
                ranges.value[3].data.push([c.companyTotalScore, c.totalPalmOil, c.id])
                references.value['3'].push(c)
            }
            if (c.companyTotalScore >= ranges.value[2].range[0] && c.companyTotalScore < ranges.value[2].range[1]) {
                ranges.value[2].data.push([c.companyTotalScore, c.totalPalmOil, c.id])
                references.value['2'].push(c)
            }
            if (c.companyTotalScore < ranges.value[1].range[1]) {
                ranges.value[1].data.push([c.companyTotalScore, c.totalPalmOil, c.id])
                references.value['1'].push(c)
            }
            if (!c.respStatus) {
                ranges.value[0].data.push([c.companyTotalScore, c.totalPalmOil])
                references.value['0'].push(c)
            }
        })
    }

    const getAverage = async () => {
        const respondants = companies.value.filter((c: Company) => c.respStatus)
        const scores = respondants.map((c: Company) => c.companyTotalScore)
        const total = scores.reduce((acc, cur) => acc + cur, 0)
        const avrg = total / respondants.length
        average.value = avrg.toFixed(1) as any
    }

    const getTotalScoreRange = (totalScore: number, respondent: boolean) => {
        if (!respondent) return ranges.value[0].id
        if (totalScore >= 19.5 && totalScore <= 24) return ranges.value[4].id
        if (totalScore >= 16.5 && totalScore < 19.5) return ranges.value[3].id
        if (totalScore >= 11 && totalScore < 16.5) return ranges.value[2].id
        if (totalScore < 11) return ranges.value[1].id
    }

    const getRangeColor = (
        total: number,
        type: string,
        respondent: boolean
    ): string => {
        switch (type) {
            case 'commitments':
                return getCommitmentRange(total, respondent)
                break
            case 'purchasing':
                return getPurchasingRange(total, respondent);
                break
            case 'platforms':
                return getPlatformRange(total, respondent);
                break
            case 'suppliers':
                return getSuppliersRange(total, respondent);
                break
            case 'traceability':
                return getTraceabilityRange(total, respondent);
                break
            case 'onTheGround':
            default:
                return getOnTheGroundRange(total, respondent);
                break;
        }
    }

    const getCommitmentRange = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return ranges.value[0].id
        if (score === 4) return ranges.value[4].id
        if (score >= 3 && score < 4) return ranges.value[3].id
        if (score >= 2 && score < 3) return ranges.value[2].id
        if (score >= 0 && score < 2) return ranges.value[1].id
    }

    const getPurchasingRange = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return ranges.value[0].id
        if (score >= 9 && score <= 11) return ranges.value[4].id
        if (score >= 6 && score < 9) return ranges.value[3].id
        if (score >= 3 && score < 6) return ranges.value[2].id
        if (score >= 0 && score < 3) return ranges.value[1].id
    }

    const getPlatformRange = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return ranges.value[0].id
        if (score === 2) return ranges.value[4].id
        if (score >= 1 && score < 2) return ranges.value[3].id
        if (score > 0 && score < 1) return ranges.value[2].id
        if (score === 0) return ranges.value[1].id
    }

    const getSuppliersRange = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return ranges.value[0].id
        if (score >= 1.5) return ranges.value[4].id
        if (score >= 1 && score < 1.5) return ranges.value[3].id
        if (score >= 0.5 && score < 1) return ranges.value[2].id
        if (score >= 0 && score < 0.5) return ranges.value[1].id
    }

    const getTraceabilityRange = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return ranges.value[0].id
        if (score >= 1) return ranges.value[4].id
        if (score >= 0.5 && score < 1) return ranges.value[3].id
        /* if (score >= 05 && score < 0.5) return ranges.value[2].id */
        if (score >= 0 && score < 0.5) return ranges.value[1].id
    }

    const getOnTheGroundRange = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return ranges.value[0].id
        if (score > 3) return ranges.value[4].id
        if (score === 2) return ranges.value[3].id
        if (score === 1) return ranges.value[2].id
        if (score === 0) return ranges.value[1].id
    }

    const getTotalScoreRange2021 = (totalScore: number, respondent: boolean) => {
        if (!respondent) return ranges.value[0].id
        if (totalScore >= 19.5 && totalScore <= 24) return ranges.value[4].id
        if (totalScore >= 16.5 && totalScore < 19.5) return ranges.value[3].id
        if (totalScore >= 11 && totalScore < 16.5) return ranges.value[2].id
        if (totalScore < 11) return ranges.value[1].id
    }

    const getRangeColor2021 = (
        total: number,
        type: string,
        respondent: boolean
    ): string => {
        switch (type) {
            case 'commitments':
                return getCommitmentRange2021(total, respondent)
                break
            case 'purchasing':
                return getPurchasingRange2021(total, respondent);
                break
            case 'platforms':
                return getPlatformRange2021(total, respondent);
                break
            case 'suppliers':
                return getSuppliersRange2021(total, respondent);
                break
            case 'onTheGround':
            default:
                return getOnTheGroundRange2021(total, respondent);
                break;
        }
    }

    const getCommitmentRange2021 = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return ranges.value[0].id
        if (score === 4) return ranges.value[4].id
        if (score >= 3 && score < 4) return ranges.value[3].id
        if (score >= 2 && score < 3) return ranges.value[2].id
        if (score >= 0 && score < 2) return ranges.value[1].id
    }

    const getPurchasingRange2021 = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return ranges.value[0].id
        if (score >= 9 && score <= 11) return ranges.value[4].id
        if (score >= 6 && score < 9) return ranges.value[3].id
        if (score >= 3 && score < 6) return ranges.value[2].id
        if (score >= 0 && score < 3) return ranges.value[1].id
    }

    const getPlatformRange2021 = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return ranges.value[0].id
        if (score === 2) return ranges.value[4].id
        if (score === 1) return ranges.value[2].id
        if (score === 0) return ranges.value[1].id
    }

    const getSuppliersRange2021 = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return ranges.value[0].id
        if (score === 3) return ranges.value[4].id
        if (score >= 2 && score < 3) return ranges.value[3].id
        if (score >= 1 && score < 2) return ranges.value[2].id
        if (score >= 0 && score < 1) return ranges.value[1].id
    }

    const getOnTheGroundRange2021 = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return ranges.value[0].id
        if (score === 4 || score === 3) return ranges.value[4].id
        if (score === 2) return ranges.value[3].id
        if (score === 1) return ranges.value[2].id
        if (score === 0) return ranges.value[1].id
    }

    const getListOfInCompanies = (companies: Company[], field: string) => {
        let result = [...new Set(companies.map((e: any) => e[field]))]
        return result.sort()
    }

    const setCompany = async (id: any) => {
        company.value = companies.value.find((c: Company) => c.id == id) || null
        csStore.casestudy = csStore.casestudies.find((c: any) => c.id == id) || null
        console.log(csStore.casestudy)
    }

    return {
        companies,
        company,
        average,
        ranges,
        references,
        filter_sectors,
        filter_countries,
        filter_regions,
        filter_applicSector,
        categories,
        total_outof,
        supply_chain_own,
        supply_chain_beyond,
        fetchScores,
        setCompaniesByRange,
        getRangeColor,
        getRangeColor2021,
        getTotalScoreRange,
        getTotalScoreRange2021,
        getListOfInCompanies,
        setCompany
    }
})