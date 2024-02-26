<template>
    <section v-if="sc.company" class="u-section u-section--cake mt-0 py-12">
        <div class="u-container u-container--lg">
            <div class="grid flex gap-x-24 gap-y-5 flex-wrap">
                <div
                    v-for="item in items"
                    :key="item.id"
                >
                    <p class="text-xs font-bold">{{ item.label }}</p>
                    <p class="text-sm">{{ item.value }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const sc = useScStore()
const tr = useTrStore().translations
const items = ref([
    {
        id: 'totalPalmOil',
        label: tr.sc_co_resume_totalPalmOil,
        value: sc.company?.totalPalmOil
    },
    {
        id: 'hq',
        label: tr.sc_co_resume_hq,
        value: sc.company?.hq
    },
    {
        id: 'regionOfOper',
        label: tr.sc_co_resume_regionOfOper,
        value: sc.company?.regionOfOper
    },
    {
        id: 'topBrands',
        label: tr.sc_co_resume_topBrands,
        value: sc.company?.topBrands
    },
    {
        id: 'sector',
        label: tr.sc_co_resume_sector,
        value: sc.company?.sector
    },
    {
        id: 'applicSector',
        label: tr.sc_co_resume_applicSector,
        value: sc.company?.applicSector
    }
])
</script>
