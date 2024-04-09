<template>
    <footer class="mt-20 bg-cake py-32">
        <div class="u-container u-container--md">
            <img 
                class="mx-auto"
                src="@/assets/img/wwf-logo.png" alt="WWF" 
            />
            <ul class="mt-6 flex items-center justify-center gap-x-8">
                <li
                    v-for="item in nav"
                    :key="item.id"
                    >
                    <router-link 
                        :to="item.url"
                        class="font-wwf text-lg uppercase hover:text-green"
                    >
                        <span>{{ item.title }}</span>
                    </router-link>
                </li> 
            </ul>
            <span class="mt-6 block mx-auto w-[150px] h-px bg-[#DED1B4]"></span>
            <div class="mt-6 text-sm text-center text-[#7B7870]">
                Photos and graphics © WWF or used with permission.<br>
                Text is available under Creative Commonc license
            </div>
            <ul class="mt-6 flex items-center justify-center gap-x-3">
                <li
                    v-for="item in legal"
                    :key="item.id"
                    >
                    <a 
                        :href="item.url"
                        class="text-sm text-green hover:underline"
                        target="_blank"
                    >
                        <span>{{ item.label }}</span>
                    </a>
                </li> 
            </ul>
        </div>
    </footer>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
const nav = ref([
    {
        id: 'about',
        title: $i18n.t('ab_name'),
        url: `/${$i18n.t('ab_url')}`
    },
    {
        id: 'scores',
        title: $i18n.t('sc_name'),
        url: `/${$i18n.t('sc_url')}`
    },
    {
        id: 'analysis',
        title: $i18n.t('an_name'),
        url: `/${$i18n.t('an_url')}`
    },
    {
        id: 'recommendations',
        title: $i18n.t('re_name'),
        url: `/${$i18n.t('re_url')}`
    },
    {
        id: 'methodology',
        title: $i18n.t('me_name'),
        url: `/${$i18n.t('me_url')}`
    }
])
const legal = ref([
    {
        id: 'privacy',
        label: 'Privacy Policy',
        url: 'https://wwf.panda.org/privacy/'
    },
    {
        id: 'terms',
        label: 'Terms & Conditions',
        url: 'https://wwf.panda.org/terms_and_conditions_of_use/'
    }
])
</script>