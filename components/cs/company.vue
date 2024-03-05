<template>
    <section v-if="sc.company">
        <div class="w-1/2 h-full absolute top-0 left-0">
            <img 
                class="absolute top-0 left-0 w-full h-full object-cover object-center rounded-r-[60px]" 
                src="@/assets/img/cs-01.jpg"                
            >
        </div>
        <div class="py-20 u-container u-container--lg">
            <div class="flex justify-end">
                <div class="w-2/3">
                    <div class="bg-cake p-12 rounded-[20px]">
                        <header>
                            <h3 class="text-sm font-semibold">{{ sc.company.hq }}</h3>
                            <h2 class="font-wwf u-fs68 uppercase">{{ sc.company.companyName }}</h2>
                        </header>
                        <div class="mt-10 u-fs24 font-bold leading-[32px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const sc = useScStore()
const tr = useTrStore().translations

</script>