import { defineStore } from 'pinia'

export const useScStore = defineStore('scStore', () => {
    const tr = useTrStore().translations
    const companies = ref<Company[]>([])
    const sc_average = ref<number>(0)
    const sc_total_points = ref<number>(24)
    const sc_ranges = ref<any>([
        {
            id: 'non-respondent',
            name: tr.sc_range_05,
            color: '#C1C1C1',
            range: null,
            data: [],
        },
        {
            id: 'lagging-behind',
            name: tr.sc_range_04,
            color: '#E46466',
            range: [0,10.99],
            data: [],
        },
        {
            id: 'middle-of-the-pack',
            name: tr.sc_range_03,
            color: '#E4C864',
            range: [11,16.49],
            data: [],
        },
        {
            id: 'intermediate',
            name: tr.sc_range_02,
            color: '#96b441',
            range: [16.5,19.5],
            data: [],
        },
        {
            id: 'advanced',
            name: tr.sc_range_01,
            color: '#41b464',
            range: [19.5,24],
            data: [],
        }
    ])
    const sc_references = ref<any>({
        0: [],
        1: [],
        2: [],
        3: [],
        4: []
    })
    const sc_types = ref({
        COMMITMENTS: 'COMMITMENTS',
        PURCHASING: 'PURCHASING',
        SUPPLIERS: 'SUPPLIERS',
        PLATFORMS: 'PLATFORMS',
        ON_THE_GROUND: 'ON THE GROUND',
    })  
    const sc_types_text = ref({
        COMMITMENTS: tr.sc_type_commitment,
        PURCHASING: tr.sc_type_purchasing,
        SUPPLIERS: tr.sc_type_suppliers,
        PLATFORMS: tr.sc_type_platforms,
        ON_THE_GROUND: tr.sc_type_ground,
    });
    const sc_out_of = ref({
        COMMITMENTS: 4,
        PURCHASING: 11,
        SUPPLIERS: 3,
        PLATFORMS: 2,
        ON_THE_GROUND: 4,
        TOTAL_SCORE: 24,
    })
    const sc_filter_sectors = ref<Company[]>([])
    const sc_filter_countries = ref<Company[]>([])
    const sc_filter_regions = ref<Company[]>([])

    const fetchScores = async () => {
         const { data, error } = await useFetch('https://palmoiladm.panda.org/scores?_limit=-1')

        if (error.value) {
            console.error('Error fetching scores', error.value)
            return
        }

        companies.value = data.value as Company[]
        await getAverage()
        
    }

    const setCompaniesByRange = (cs: Company[]) => {
        if (cs.length === 0) return
        cs.map((c: Company) => {
            if (c.companyTotalScore >= sc_ranges.value[4].range[0] && c.companyTotalScore <= 24) {
                sc_ranges.value[4].data.push([c.companyTotalScore, c.totalPalmOil, c.id])
                sc_references.value['4'].push(c)
            }
            if (c.companyTotalScore >= sc_ranges.value[3].range[0] && c.companyTotalScore < sc_ranges.value[3].range[1]) {
                sc_ranges.value[3].data.push([c.companyTotalScore, c.totalPalmOil, c.id])
                sc_references.value['3'].push(c)
            }
            if (c.companyTotalScore >= sc_ranges.value[2].range[0] && c.companyTotalScore < sc_ranges.value[2].range[1]) {
                sc_ranges.value[2].data.push([c.companyTotalScore, c.totalPalmOil, c.id])
                sc_references.value['2'].push(c)
            }
            if (c.companyTotalScore < sc_ranges.value[1].range[1]) {
                sc_ranges.value[1].data.push([c.companyTotalScore, c.totalPalmOil, c.id])
                sc_references.value['1'].push(c)
            }
            if (!c.respStatus) {
                sc_ranges.value[0].data.push([c.companyTotalScore, c.totalPalmOil])
                sc_references.value['0'].push(c)
            }
        })
    }

    const getAverage = async () => {
        const scores = companies.value.map((c: Company) => c.companyTotalScore)
        const total = scores.reduce((acc, cur) => acc + cur, 0)
        const average = total / companies.value.length
        sc_average.value = average.toFixed(2) as any
    }

    const getTotalScoreRange = (totalScore: number, respondent: boolean) => {
        if (!respondent) return sc_ranges.value[0].id
        if (totalScore >= 19.5 && totalScore <= 24) return sc_ranges.value[4].id
        if (totalScore >= 16.5 && totalScore < 19.5) return sc_ranges.value[3].id
        if (totalScore >= 11 && totalScore < 16.5) return sc_ranges.value[2].id
        if (totalScore < 11) return sc_ranges.value[1].id
    }

    const getRangeColor = (
        total: number,
        type: string,
        respondent: boolean
    ): string => {
        switch (type) {
            case sc_types.value.COMMITMENTS:
                return getCommitmentRange(total, respondent)
                break
            case sc_types.value.PURCHASING:
                return getPurchasingRange(total, respondent);
                break
            case sc_types.value.PLATFORMS:
                return getPlatformRange(total, respondent);
                break
            case sc_types.value.SUPPLIERS:
                return getSuppliersRange(total, respondent);
                break
            case sc_types.value.ON_THE_GROUND:
            default:
                return getOnTheGroundRange(total, respondent);
                break;
            }
    } 

    const getCommitmentRange = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return sc_ranges.value[0].id
        if (score === 4) return sc_ranges.value[4].id
        if (score >= 3 && score < 4) return sc_ranges.value[3].id
        if (score >= 2 && score < 3) return sc_ranges.value[2].id
        if (score >= 0 && score < 2) return sc_ranges.value[1].id
    }

    const getPurchasingRange = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return sc_ranges.value[0].id
        if (score >= 9 && score <= 11) return sc_ranges.value[4].id
        if (score >= 6 && score < 9) return sc_ranges.value[3].id
        if (score >= 3 && score < 6) return sc_ranges.value[2].id
        if (score >= 0 && score < 3) return sc_ranges.value[1].id
    }

    const getPlatformRange = (total: number, respondent: boolean) =>{
        const score = total;
        if (!respondent) return sc_ranges.value[0].id
        if (score === 2) return sc_ranges.value[4].id
        if (score === 1) return sc_ranges.value[2].id
        if (score === 0) return sc_ranges.value[1].id
    }

    const getSuppliersRange = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return sc_ranges.value[0].id
        if (score === 3) return sc_ranges.value[4].id
        if (score >= 2 && score < 3) return sc_ranges.value[3].id
        if (score >= 1 && score < 2) return sc_ranges.value[2].id
        if (score >= 0 && score < 1) return sc_ranges.value[1].id
    }

    const getOnTheGroundRange = (total: number, respondent: boolean) => {
        const score = total;
        if (!respondent) return sc_ranges.value[0].id
        if (score === 4 || score === 3) return sc_ranges.value[4].id
        if (score === 2) return sc_ranges.value[3].id
        if (score === 1) return sc_ranges.value[2].id
        if (score === 0) return sc_ranges.value[1].id
    }

    const getListOfInCompanies = (companies: Company[], field: string) => {
        let result = [...new Set(companies.map((e) => e[field]))]
        return result.sort()
    }

    return {
        companies,
        sc_average,
        sc_total_points,
        sc_ranges,
        sc_references,
        sc_types,
        sc_types_text,
        sc_out_of,
        sc_filter_sectors,
        sc_filter_countries,
        sc_filter_regions,
        fetchScores,
        setCompaniesByRange,
        getRangeColor,
        getTotalScoreRange,
        getListOfInCompanies
    }
})