<template>
    <section class="u-section">
        <div class="u-container u-container--lg">
            <div class="flex">
                <div class="flex-1">
                    <div class="flex items-center space-x-6">
                        <p class="text-green u-fs126 font-wwf">285</p>
                        <p class="font-wwf uppercase u-fs32noleaded [&>span]:block">
                            <span class="u-fs36">COMPANIES APPROACHED</span>
                            <span class="">to participate in the 2024</span>
                            <span class="text-green">palm oil buyers scorecard</span>
                        </p>
                    </div>
                </div>
                <div class="flex-1 <sm:hidden"></div>
            </div>
            <div class="mt-6">
                <div class="flex items-center">
                    <div class="flex-1">
                        <img 
                            v-motion-slide-visible-once-top
                            src="@/assets/img/an-approach-respondants.svg" alt=""
                        />
                    </div>
                    <div class="flex-1">
                        <div class="flex space-x-6">
                            <img 
                                v-motion-slide-visible-once-right
                                src="@/assets/img/an-approach-average.svg" alt=""
                            />
                            <p class="font-wwf u-fs36">OUT OF 24 WAS THE  AVERAGE SCORE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>