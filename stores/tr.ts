import { defineStore } from 'pinia'

export const useTrStore = defineStore('trStore', () => {
    const translations = ref<Tr>({})

    const fetchTranslations = async () => {
         const { data, error } = await useFetch('https://raw.githubusercontent.com/adriaalos/po-translations/main/index.json')

        if (error.value) {
            console.error('Error fetching translations', error.value)
            return
        }

        translations.value = JSON.parse(data.value as string)
        console.log(translations.value)
        
    }

    return {
        translations,
        fetchTranslations,
    }
})