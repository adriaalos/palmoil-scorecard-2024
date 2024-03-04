<template>
    <section v-if="sc.company" class="u-section u-section--cake mt-0 py-12">
        <div class="u-container u-container--lg">
            <div class="grid flex gap-x-24 gap-y-5 flex-wrap">
                <div
                    v-for="item in items"
                    :key="item.id"
                >
                    <p class="text-xs font-bold mb-0">{{ item.label }}</p>
                    <p class="text-sm">{{ item.value }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const sc = useScStore()
const tr = useTrStore().translations
const items = ref(sc.company ? [
    {
        id: 'totalPalmOil',
        label: tr.sc_co_resume_totalPalmOil,
        value: `${useFormatNumberWithComma(sc.company?.totalPalmOil)} Mt`
    },
    {
        id: 'hq',
        label: tr.sc_co_resume_hq,
        value: sc.company?.hq
    },
    {
        id: 'regionOfOper',
        label: tr.sc_co_resume_regionOfOper,
        value: useFormatString(sc.company?.regionOfOper, ';')
    },
    {
        id: 'topBrands',
        label: tr.sc_co_resume_topBrands,
        value: useFormatString(sc.company?.topBrands, ';')
    },
    {
        id: 'sector',
        label: tr.sc_co_resume_sector,
        value: sc.company?.sector
    },
    {
        id: 'applicSector',
        label: tr.sc_co_resume_applicSector,
        value: useFormatString(sc.company?.applicSector, ';')
    }
] : null)
</script>
