<template>
    <section class="u-section">
        <div class="u-container">
            <img 
                v-motion-slide-visible-once-top
                class="mx-auto" 
                src="@/assets/img/me-map.svg" 
                alt=""
            />
        </div>
        <div class="u-container u-container--lg">
            <div class="flex border border-[#DADADA] rounded-[14px]">
                <div 
                    v-for="item in items"
                    :key="item.num"
                    class="data"
                >
                    <div class="data__num u-fs32">{{ item.num }}</div>
                    <div class="data__label">{{ item.label }}</div>
                </div>
            </div>
            <div class="mt-20">
                <div class="flex gap-x-10">
                    <div class="w-5/12">
                        <h3 class="font-wwf u-fs55">WHAT DATA DID WE COLECT?</h3>
                    </div>
                    <div class="w-7/12">
                        <p>
                            It is important to note that the questions are not exhaustive of the actions that companies can take to support sustainable palm oil, but represent some key areas identified by WWF, including embracing the RSPO standard (P&C 2018) and efforts to address deforestation, conversion and human rights issues in the palm oil sector.
                        </p>
                        <p>
                            For more detailed guidance, WWF encourages companies to refer to the <strong><a href='https://accountability-framework.org/' target='_blank'>Accountability Framework</a></strong> as a  comprehensive set of common norms and guidance for establishing, implementing, and demonstrating progress on ethical supply chain commitments in agriculture and forestry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const tr = useTrStore().translations
const items = ref([
    {
        num: 300,
        label: 'Number of companies assessed',
    },
    {
        num: 147,
        label: 'Companies assessed in Manufacturers',
    },
    {
        num: 63,
        label: 'Companies assessed in Retailer',
    },
    {
        num: 17,
        label: 'Companies assessed in Hospitality',
    }
])
</script>

<style lang="scss" scoped>
.data {
    @apply flex-1 flex items-center px-12 space-x-2 py-3;
    &__num {
        @apply flex-1 font-wwf;
    }
    &__label {
        @apply text-sm text-[#7B7B7B];
    }
    &:before {
        @apply content-[''] absolute top-1/2 left-0 w-px h-6 bg-[#DADADA] transform -translate-y-1/2;
    }
    &:first-child:before {
        @apply hidden;
    }
}
</style>