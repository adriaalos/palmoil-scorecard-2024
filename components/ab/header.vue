<template>
    <section class="u-section mt-0" id="about">
        <div class="py-32 u-gradient u-gradient--green-greensoft">
            <div class="u-container flex flex-col items-center">
                <h2 class="u-fs68 text-white text-center font-wwf">ABOUT PALM OIL</h2>
                <span class="mt-6 w-[110px] h-px bg-[#88D7A0]"></span>
            </div>
        </div>
        <div class="u-container mt-12">
            <div class="flex flex-wrap items-center">
                <div class="w-1/2 flex justify-end">
                    <img 
                        v-motion-slide-visible-once-right
                        class="max-w-none rounded-r-[60px]" 
                        src="@/assets/img/ab-intro-01.jpg" 
                        alt="PALM OIL"
                    />
                </div>
                <div class="w-1/2 pl-12">
                    <h3 class="u-fs126 font-wwf u-gradient u-gradient--green-greensoft inline-block text-transparent bg-clip-text">PALM OIL</h3>
                    <h4 class="u-fs68 font-wwf uppercase">
                        A versatile and widely used oil, powering industries and households globally
                    </h4>
                </div>
            </div>
        </div>
        <div class="u-container u-container--md mt-12">
            <div class="text-center font-bold">
                <p>
                    Palm oil’s wide range of uses and relative affordability have earned it the title of the world’s most consumed and traded vegetable oil.
                </p>
            </div>
        </div>
        <div class="u-container mt-12">
            <div class="flex z-10">
                <div class="flex-1"></div>
                <div class="flex-1">
                    <header class="u-header u-header--green u-header--left">
                        <h2>EVERY PART OF THE OIL PALM PLANT CAN BE USED</h2>
                        <p>
                            Palm oil is an edible vegetable oil that comes from the fruit of oil palm trees. To extract the oil, palm fruits are pressed in mills. Two types of oil can be produced: crude palm oil (CPO) comes from squeezing the fruit’s flesh, while palm kernel oil (PKO) can be extracted by crushing the kernel in the middle of the fruit.
                        </p>
                    </header>
                </div>
            </div>
            <div class="mt-[-325px]">
                <img 
                    v-motion-slide-visible-once-top
                    src="@/assets/img/ab-intro-02.svg"
                >
            </div>
        </div>
        <div class="mt-20 u-container u-container--lg">
            <div 
                v-motion-slide-visible-once-top
                class="p-12 rounded-[60px] overflow-hidden"
            >
                <img 
                    class="absolute w-full h-full top-0 left-0 object-center object-cover"
                    src="@/assets/img/ab-intro-03.jpg" 
                    alt=""
                />
                <div class="font-wwf u-fs36 text-center text-white">
                    Oil palms grow best in low-lying, hot and wet areas such as rainforests and peatlands near the equator. These areas are home to more than two-thirds of the world's biodiversity and play a critical role in the ecological balance of our planet. Beyond their environmental role, these areas provide essential resources for local communities, supporting livelihoods through food, shelter, energy, medicine, and income generation.
                </div>
            </div>
        </div>
        <div class="mt-32">
            <div class="u-container u-container--md">
                <div class="text-center">
                    <p>
                        <strong>Embracing sustainable practices is crucial to preserve the delicate balance between palm oil production and environmental conservation.</strong><br>
                        Global demand for palm oil is forecast to increase exponentially in the near future. Companies play a key role in making this happen. By adopting eco-friendly practices, they can ensure palm oil production benefits nature and the communities it sustains
                    </p>
                </div>
            </div>
            <div>
                <img src="@/assets/img/ab-intro-04.svg" />
                <div class="absolute left-[35%] bottom-12 u-gradient u-gradient--green-greensoft p-6 rounded-[12px] font-wwf text-white uppercase">
                    <span class="block u-fs38">77.6 million MT</span>
                    <span class="block text-sm">total volume of palm oil produced globally</span>
                    <span class="block u-fs24 leading-[24px]">the equivalent of 20,000<br> olympic swimming pools</span>
                </div>
                <div class="max-w-[35%] absolute left-[60%] -bottom-6 text-[10px] text-[#7b7b7b]">
                    <span class="block u-fs24 font-wwf text-green">GLOBAL PALM OIL PRODUCTION & TRADE</span>
                    <span class="block">Palm oil production</span>
                    <div class="w-[150px] h-[7px] rounded-[12px] u-gradient u-gradient--horiz from-[#C6FB88] to-[#3D6041]"></div>
                    <div class="w-[150px] flex justify-between ">
                        <span>Min</span>
                        <span>Max</span>
                    </div>
                    <span class="mt-2 block">Source: United States Department of Agriculture Foreign Agricultural Service (2022). Production, Supply and Distribution database; Ramankutty et al. (2008). Farming the planet: 2. Geographic distribution of crop areas, yields, physiological types, and net primary production in the year 2022.</span>
                </div>
            </div>
            <div class="flex justify-center mt-20">
                <nuxt-link 
                    :to="`/${$t('sc_url')}`"
                    class="u-button"
                >
                    <span>CHECK COMPANY SCORES</span>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11.9361L6.18868 6.47244L1 1.00879" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>