<template>
    <section class="u-section u-section--padded">
        <div class="absolute w-full h-[300px] top-0 left-0 u-gradient u-gradient--cake-transparent"></div>
        <div class="u-container u-container--lg">
            <div class="flex space-x-6">
                <div class="flex-1">
                    <header class="u-header u-header--left">
                        <h3>{{ $t('ab_feats_where_title') }}</h3>
                        <div v-html="$t('ab_feats_where_description')" />
                    </header>
                </div>
                <div class="flex-1">
                    <img 
                        v-motion-slide-visible-once-right
                        src="@/assets/img/ab-feats-01.png" 
                        :alt="$t('ab_feats_where_title')"
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
                        <div class="u-list-default" v-html="$t('ab_feats_where_feats')" />
                    </header>
                </div>
            </div>
        </div>
        <div class="mt-20">
            <div class="u-container u-container--md z-10">
                <header class="u-header u-header--left">
                    <h3>{{ $t('ab_feats_impact_title') }}</h3>
                    <div v-html="$t('ab_feats_impact_description')" />
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