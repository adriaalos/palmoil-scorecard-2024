<template>
    <section class="u-section u-section--padded">
        <div class="absolute w-full h-[300px] top-0 left-0 u-gradient u-gradient--cake-transparent"></div>
        <div class="u-container u-container--lg">
            <div class="flex space-x-6">
                <div class="flex-1">
                    <header class="u-header u-header--left">
                        <h3>PALM OIL IS EVERYWHERE</h3>
                        <div>
                            <p>
                                <strong>If you consume chocolates, instant noodles, vegetable oil;</strong> purchase household items such as soaps, detergents, cosmetics. Then without necessarily knowing it, we all consume palm oil on a daily basis. Palm oil is an extremely versatile oil that has many different properties which make it very useful for a variety of products.
                            </p>
                        </div>
                    </header>
                </div>
                <div class="flex-1">
                    <img 
                        v-motion-slide-visible-once-right
                        src="@/assets/img/ab-feats-01.png" 
                        alt="PALM OIL IS EVERYWHERE"
                    />
                </div>
            </div>
        </div>
        <div class="u-container u-container--lg mt-20">
            <div class="flex space-x-6">
                <div class="flex-1 flex items-center">
                    <img 
                        v-motion-slide-visible-once-left
                        src="@/assets/img/ab-feats-02.svg" 
                        alt="PALM OIL IS EVERYWHERE"
                    />
                </div>
                <div class="flex-1">
                    <header class="u-header u-header--left">
                        <div class="u-list-default">
                            <ul>
                                <li>
                                    It has a smooth and creamy texture, making it ideal for blending and processing to form products of varying consistencies and characteristics;
                                </li>
                                <li>
                                    It is odorless, tasteless and colourless, meaning it doesn’t alter the smell, taste or look of products;
                                </li>
                                <li>
                                    It maintains its properties even under high temperatures, making it ideal for cooking and frying;
                                </li>
                                <li>
                                    It is resistant to oxidation and so can act as a natural preservative, giving products a longer shelf-life.
                                </li>
                            </ul>
                        </div>
                    </header>
                </div>
            </div>
        </div>
        <div class="mt-20">
            <div class="u-container u-container--md z-10">
                <header class="u-header u-header--left">
                    <h3>THE IMPACT OF PALM OIL</h3>
                    <div>
                        <p>
                            Palm oil makes a substantial contribution to economies and livelihoods across the tropics, particularly in Southeast Asia. But the rapid expansion of oil palm plantations to meet global demand has also resulted in a range of devastating impacts for people, nature and our climate
                        </p>
                    </div>
                </header>
            </div>
            <img 
                v-motion-slide-visible-once-top
                class="-mt-52 w-full"
                src="@/assets/img/ab-feats-03.png"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
const tr = useTrStore().translations
</script>