import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', () => {
    const scrollPosition = ref<number>(0)
    const scrollDirection = ref<string>('down')

    const setScrollPosition = (position: number) => {
        scrollPosition.value = position
    }

    const setScrollDirection = (direction: string) => {
        scrollDirection.value = direction
    }

    return {
        scrollPosition,
        scrollDirection,
        setScrollPosition,
        setScrollDirection
    }
})