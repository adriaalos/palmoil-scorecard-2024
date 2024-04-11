<template>
    <section v-if="sc.company" class="u-section u-section--cake mt-0 py-12">
        <div class="u-container u-container--lg">
            <div class="grid flex flex-wrap -mx-2 -my-1">
                <div
                    v-for="item in items"
                    :key="item.id"
                    class="w-1/4 px-2 py-1"
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
const { $i18n } = useNuxtApp()
const items = ref(sc.company ? [
    {
        id: 'totalPalmOil',
        label: $i18n.t('sc_co_resume_totalPalmOil'),
        value: `${formatNumberWithComma(sc.company?.totalPalmOil)} Mt`
    },
    {
        id: 'hq',
        label: $i18n.t('sc_co_resume_hq'),
        value: sc.company?.hq
    },
    {
        id: 'regionOfOper',
        label: $i18n.t('sc_co_resume_regionOfOper'),
        value: formatString(sc.company?.regionOfOper, ';')
    },
    {
        id: 'topBrands',
        label: $i18n.t('sc_co_resume_topBrands'),
        value: formatString(sc.company?.topBrands, ';')
    },
    {
        id: 'sector',
        label: $i18n.t('sc_co_resume_sector'),
        value: sc.company?.sector
    },
    {
        id: 'applicSector',
        label: $i18n.t('sc_co_resume_applicSector'),
        value: formatString(sc.company?.applicSector, ';')
    }
] : null)
</script>
