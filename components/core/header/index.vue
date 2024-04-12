<template>
    <header 
        :class="[
            'sticky top-0 font-wwf uppercase text-white bg-black z-30 transform transition-all duration-300',
            appStore.scrollDirection === 'down' && appStore.scrollPosition > 200 ? 'translate-y-[-150%]' : 'translate-y-0'
        ]"
    >
        <div 
            class="u-container flex items-center justify-between"
        >
            <div class="self-start">
                <nuxt-link 
                    class="absolute top-0 left-0 transform z-1" 
                    to="/"
                >   
                    <img 
                        src="@/assets/img/wwf.png"
                        class="<xl:w-[100px] <md:w-[90px]" 
                    />
                </nuxt-link>
                <nuxt-link 
                    to="/"
                    class="block ml-30 py-5 u-fs28 <md:ml-26"
                >
                    <span>{{ $t('app') }}</span>
                </nuxt-link>
            </div>
            <nav :class="['<lg:fixed <lg:w-screen <lg:h-[calc(100vh-76px)] <lg:bg-black <lg:top-[76px] <lg:flex <lg:left-0 <lg:items-center <lg:justify-center <lg:transition <md:h-[calc(100vh-76px)] <md:top-[76px]', {
                '<lg:pointer-events-none <lg:opacity-0': !collapsed,
                '<lg:pointer-events-auto <lg:opacity-100': collapsed,
            }]">
                <ul class="flex items-center gap-x-8 text-xl <lg:flex-col <lg:gap-x-0 <lg:gap-y-2">
                    <li
                        v-for="item in nav"
                        :key="item.id"
                        >
                        <router-link 
                            :to="item.url"
                            class="hover:text-green"
                            @click="collapsed = false"
                        >
                            <span>{{ item.title }}</span>
                        </router-link>
                    </li> 
                </ul>
            </nav>
            <button :class="['u-burger', { 'u-burger--opened': collapsed }]" @click="toggleNav">
                <span></span>
                <span></span>
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
const appStore = useAppStore()
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
const collapsed = ref(false)
const toggleNav = () => {
    collapsed.value = !collapsed.value
}
</script>