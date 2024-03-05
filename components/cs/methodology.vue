<template>
    <section class="u-section u-section--padded">
        <div class="bg-cake py-32">
            <div class="u-container u-container--lg">
                <header class="u-header u-header--left u-header--green">
                    <h2>METHODOLOGY</h2>
                    <div class="flex gap-x-16">
                        <div class="flex-1">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div class="flex-1">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </header>
            </div>
        </div>
        <div class="-mt-32">
            <div class="w-full h-[50%] absolute top-0 left-0 bg-cake"></div>
            <div class="u-container">
                <div>
                    <img 
                        v-motion-slide-visible-once-top
                        src="@/assets/img/cs-02.png"
                    />
                </div>
            </div>
        </div>
        <div class="mt-32 u-container u-container--lg">
            <div class="flex gap-x-16">
                <div class="flex-1">
                    <div 
                        v-motion-slide-visible-once-right
                        class="u-gradient u-gradient--green-greensoft p-12 rounded-[12px]"
                    >
                        <h3 class="font-wwf text-white uppercase u-fs48">What obstacles do companies face in sourcing sustainable palm oil?</h3>
                    </div>
                </div>
                <div class="flex-1">
                    <p>
                        <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
        <div class="mt-32 u-container u-container--lg">
            <div class="flex gap-x-16">
                <div class="flex-1">
                    <div 
                        v-motion-slide-visible-once-right
                        class="u-gradient u-gradient--green-greensoft p-12 rounded-[12px]"
                    >
                        <h3 class="font-wwf text-white uppercase u-fs48">How are companies addressing these challenges?</h3>
                    </div>
                </div>
                <div class="flex-1">
                    <p>
                        <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const sc = useScStore()
const tr = useTrStore().translations

</script>