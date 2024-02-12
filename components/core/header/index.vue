<template>
    <header 
        class="font-wwf uppercase text-white bg-black"
    >
        <div 
            class="u-container flex items-center justify-between"
        >
            <div class="self-start">
                <nuxt-link 
                    class="absolute top-0 left-0 transform" 
                    to="/"
                >   
                    <img 
                        src="@/assets/img/wwf.png" 
                    />
                </nuxt-link>
                <nuxt-link 
                    to="/"
                    class="block ml-30 py-5 u-fs28"
                >
                    <span>{{ tr.app }}</span>
                </nuxt-link>
            </div>
            <nav>
                <ul class="flex items-center gap-x-8 u-fs18">
                    <li
                        v-for="item in nav"
                        :key="item.id"
                        >
                        <router-link 
                            :to="item.url"
                            class="hover:text-green"
                        >
                            <span>{{ item.title }}</span>
                        </router-link>
                    </li> 
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
const tr = useTrStore().translations
const nav = ref([
    {
        id: 'about',
        title: tr.ab_name,
        url: `/${tr.ab_url}`
    },
    {
        id: 'scores',
        title: tr.sc_name,
        url: `/${tr.sc_url}`
    },
    {
        id: 'analysis',
        title: tr.an_name,
        url: `/${tr.an_url}`
    },
    {
        id: 'recommendations',
        title: tr.re_name,
        url: `/${tr.re_url}`
    },
    {
        id: 'methodology',
        title: tr.me_name,
        url: `/${tr.me_url}`
    }
])
</script>