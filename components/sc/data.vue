<template>
    <!-- <pre>{{ companies }}</pre> -->
    <section class="mt-20">
        <div>
            <div class="u-container">
                <div class="flex items-center gap-x-6">
                    <div class="w-3/4">
                        <div>
                            <input 
                                v-model="search"
                                type="text" 
                                class="font-open w-full border border-[#dadada] rounded-[50px] px-3 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300" 
                                :placeholder="$t('ho_scatter_search_placholder')"
                                @keyup="onSearch"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7b7b7b" class="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </div>
                    </div>
                    <div class="w-1/4">
                        <button 
                            class="u-button u-button--border py-[4px]"
                            @click="modal = true"
                        >
                            <span>{{ $t('sc_data_filter_title') }}</span>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.26074 6H26.7396C26.9334 6 27.1229 6.05627 27.2853 6.16198C27.4476 6.26769 27.5758 6.41828 27.6542 6.59545C27.7325 6.77262 27.7578 6.96874 27.7268 7.15997C27.6958 7.35121 27.6099 7.52932 27.4796 7.67267L19.2603 16.7139C19.0929 16.898 19.0002 17.1378 19.0002 17.3866V24.4648C19.0002 24.6294 18.9595 24.7915 18.8819 24.9367C18.8042 25.0818 18.6919 25.2055 18.5549 25.2969L14.5549 27.9635C14.4043 28.0639 14.2293 28.1216 14.0485 28.1303C13.8677 28.1391 13.6879 28.0986 13.5283 28.0132C13.3688 27.9278 13.2353 27.8006 13.1423 27.6454C13.0493 27.4901 13.0002 27.3125 13.0002 27.1315V17.3866C13.0002 17.1378 12.9075 16.898 12.7401 16.7139L4.5208 7.67267C4.39049 7.52932 4.30461 7.35121 4.27362 7.15997C4.24263 6.96874 4.26785 6.77262 4.34623 6.59545C4.4246 6.41828 4.55275 6.26769 4.7151 6.16198C4.87745 6.05627 5.06701 6 5.26074 6V6Z" stroke="#D86300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.26074 6H26.7396C26.9334 6 27.1229 6.05627 27.2853 6.16198C27.4476 6.26769 27.5758 6.41828 27.6542 6.59545C27.7325 6.77262 27.7578 6.96874 27.7268 7.15997C27.6958 7.35121 27.6099 7.52932 27.4796 7.67267L19.2603 16.7139C19.0929 16.898 19.0002 17.1378 19.0002 17.3866V24.4648C19.0002 24.6294 18.9595 24.7915 18.8819 24.9367C18.8042 25.0818 18.6919 25.2055 18.5549 25.2969L14.5549 27.9635C14.4043 28.0639 14.2293 28.1216 14.0485 28.1303C13.8677 28.1391 13.6879 28.0986 13.5283 28.0132C13.3688 27.9278 13.2353 27.8006 13.1423 27.6454C13.0493 27.4901 13.0002 27.3125 13.0002 27.1315V17.3866C13.0002 17.1378 12.9075 16.898 12.7401 16.7139L4.5208 7.67267C4.39049 7.52932 4.30461 7.35121 4.27362 7.15997C4.24263 6.96874 4.26785 6.77262 4.34623 6.59545C4.4246 6.41828 4.55275 6.26769 4.7151 6.16198C4.87745 6.05627 5.06701 6 5.26074 6V6Z" stroke="#41B464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div 
                    v-if="!objIsNull(filters)"
                    class="mt-10 flex items-center gap-x-5"
                >
                    <h5 class="text-xs font-bold">{{ $t('sc_data_filter_label') }}:</h5>
                    <ul class="flex items-center gap-3">
                        <template v-for="(value, key) in filters" :key="key">
                            <li 
                                v-if="value"
                                class="u-filter"
                            >
                                <span v-if="key == 'respStatus'">{{ $t('ho_scatter_filters_rspo') }}: {{ value }}</span>
                                <span v-else-if="key == 'totalMin'">Min {{ $t('ho_scatter_filters_total') }}: {{ value }}</span>
                                <span v-else-if="key == 'totalMax'">Max {{ $t('ho_scatter_filters_total') }}: {{ value }}</span>
                                <span v-else>{{ formatString(value, ';') }}</span>
                                <button @click="onFilterRemove(key)">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.7188 3.28125L3.28125 11.7188" stroke="#D86300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.7188 3.28125L3.28125 11.7188" stroke="#41B464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.7188 11.7188L3.28125 3.28125" stroke="#D86300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.7188 11.7188L3.28125 3.28125" stroke="#41B464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
        <div class="w-screen overflow-auto">
            <table class="mt-12">
                <thead>
                    <tr>
                        <th @click="sortBy('companyName', 'string')">
                            <div class="th-label">
                                <span>COMPANY</span>
                            </div>
                            <div class="th-sort">
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'companyName' && sortedBy.dir == 'asc'}]"
                                    src="@/assets/img/sc-sort-asc.svg" class="w-[13px]"
                                />
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'companyName' && sortedBy.dir == 'desc'}]"
                                    src="@/assets/img/sc-sort-desc.svg" class="w-[13px]"
                                />
                            </div>
                        </th>
                        <th @click="sortBy('totalPalmOil', 'number')">
                            <div class="th-label">
                                <span>PO USED (Mt)</span>
                            </div>
                            <div class="th-sort">
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'totalPalmOil' && sortedBy.dir == 'asc'}]"
                                    src="@/assets/img/sc-sort-asc.svg" class="w-[13px]"
                                />
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'totalPalmOil' && sortedBy.dir == 'desc'}]"
                                    src="@/assets/img/sc-sort-desc.svg" class="w-[13px]"
                                />
                            </div>
                        </th>
                        <th @click="sortBy('hq', 'string')">
                            <div class="th-label">
                                <span>COUNTRY OF HQ</span>
                            </div>
                            <div class="th-sort">
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'hq' && sortedBy.dir == 'asc'}]"
                                    src="@/assets/img/sc-sort-asc.svg" class="w-[13px]"
                                />
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'hq' && sortedBy.dir == 'desc'}]"
                                    src="@/assets/img/sc-sort-desc.svg" class="w-[13px]"
                                />
                            </div>
                        </th>
                        <th @click="sortBy('sector', 'string')">
                            <div class="th-label">
                                <span>SECTOR</span>
                            </div>
                            <div class="th-sort">
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'sector' && sortedBy.dir == 'asc'}]"
                                    src="@/assets/img/sc-sort-asc.svg" class="w-[13px]"
                                />
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'sector' && sortedBy.dir == 'desc'}]"
                                    src="@/assets/img/sc-sort-desc.svg" class="w-[13px]"
                                />
                            </div>
                        </th>
                        <th @click="sortBy('commitments.commitTotalScore', 'number')">
                            <div class="th-label th-label--text-center">
                                <span v-html="$t('sc_type_commitment')" />
                                <span>{{ $t('gl_outof') }} {{ getOutOf('commitments') }}</span>
                            </div>
                            <div class="th-sort th-sort--centered">
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'commitments.commitTotalScore' && sortedBy.dir == 'asc'}]"
                                    src="@/assets/img/sc-sort-asc.svg" class="w-[13px]"
                                />
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'commitments.commitTotalScore' && sortedBy.dir == 'desc'}]"
                                    src="@/assets/img/sc-sort-desc.svg" class="w-[13px]"
                                />
                            </div>
                        </th>
                        <th @click="sortBy('purchasing.purchTotalScore', 'number')">
                            <div class="th-label th-label--text-center">
                                <span v-html="$t('sc_type_purchasing')" />
                                <span>{{ $t('gl_outof') }} {{ getOutOf('purchasing') }}</span>
                            </div>
                            <div class="th-sort th-sort--centered">
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'purchasing.purchTotalScore' && sortedBy.dir == 'asc'}]"
                                    src="@/assets/img/sc-sort-asc.svg" class="w-[13px]"
                                />
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'purchasing.purchTotalScore' && sortedBy.dir == 'desc'}]"
                                    src="@/assets/img/sc-sort-desc.svg" class="w-[13px]"
                                />
                            </div>
                        </th>
                        <th @click="sortBy('suppliers.supTotalScore', 'number')">
                            <div class="th-label th-label--text-center">
                                <span v-html="$t('sc_type_suppliers')" />
                                <span>{{ $t('gl_outof') }} {{ getOutOf('suppliers') }}</span>
                            </div>
                            <div class="th-sort th-sort--centered">
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'suppliers.supTotalScore' && sortedBy.dir == 'asc'}]"
                                    src="@/assets/img/sc-sort-asc.svg" class="w-[13px]"
                                />
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'suppliers.supTotalScore' && sortedBy.dir == 'desc'}]"
                                    src="@/assets/img/sc-sort-desc.svg" class="w-[13px]"
                                />
                            </div>
                        </th>
                        <th @click="sortBy('platforms.platformsTotalScore', 'number')">
                            <div class="th-label th-label--text-center">
                                <span v-html="$t('sc_type_platforms')" />
                                <span>{{ $t('gl_outof') }} {{ getOutOf('platforms') }}</span>
                            </div>
                            <div class="th-sort th-sort--centered">
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'platforms.platformsTotalScore' && sortedBy.dir == 'asc'}]"
                                    src="@/assets/img/sc-sort-asc.svg" class="w-[13px]"
                                />
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'platforms.platformsTotalScore' && sortedBy.dir == 'desc'}]"
                                    src="@/assets/img/sc-sort-desc.svg" class="w-[13px]"
                                />
                            </div>
                        </th>
                        <th @click="sortBy('onTheGround.onTheGroundTotalScore', 'number')">
                            <div class="th-label th-label--text-center">
                                <span v-html="$t('sc_type_ground')" />
                                <span>{{ $t('gl_outof') }} {{ getOutOf('onTheGround') }}</span>
                            </div>
                            <div class="th-sort th-sort--centered">
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'onTheGround.onTheGroundTotalScore' && sortedBy.dir == 'asc'}]"
                                    src="@/assets/img/sc-sort-asc.svg" class="w-[13px]"
                                />
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'onTheGround.onTheGroundTotalScore' && sortedBy.dir == 'desc'}]"
                                    src="@/assets/img/sc-sort-desc.svg" class="w-[13px]"
                                />
                            </div>
                        </th>
                        <th @click="sortBy('companyTotalScore', 'number')">
                            <div class="th-label th-label--text-center">
                                <span>{{ $t('gl_total_score') }}</span>
                                <span>{{ $t('gl_outof') }} {{ sc.total_outof }}</span>
                            </div>
                            <div class="th-sort th-sort--centered">
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'companyTotalScore' && sortedBy.dir == 'asc'}]"
                                    src="@/assets/img/sc-sort-asc.svg" class="w-[13px]"
                                />
                                <img 
                                    :class="[{ 'opacity-30': sortedBy.key == 'companyTotalScore' && sortedBy.dir == 'desc'}]"
                                    src="@/assets/img/sc-sort-desc.svg" class="w-[13px]"
                                />
                            </div>
                        </th>
                        <th class="th--noevents">
                            <div class="th-label">
                                <span>{{ $t('sc_data_table_full_report') }}</span>
                            </div>
                            <div class="th-sort th-sort--hidden">
                                <img src="@/assets/img/sc-sort-asc.svg" class="w-[13px]"/>
                                <img src="@/assets/img/sc-sort-desc.svg" class="w-[13px]"/>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="company in companies"
                        :key="company.id"
                        :class="[{ 'bg-cake': company.historical}]"
                    >
                        <td>
                            <span class="block font-bold">{{ company.companyName }}</span>
                        </td>
                        <td>
                            <span>{{ formatNumberWithComma(company.totalPalmOil) }}</span>
                        </td>
                        <td>
                            <span>{{ company.hq }}</span>
                        </td>
                        <td>
                            <span>{{ company.sector }}</span>
                        </td>
                        <td>
                            <div class="flex flex-col">
                                <div>
                                    <button 
                                        v-if="Object.keys(company.previousScore).length > 0 && company.respStatus"
                                        :class="[
                                            'absolute top-4 transform rotate-90 -left-6  flex items-center space-x-1 cursor-pointer z-10 hover:opacity-60',
                                            { 'pointer-events-none': company.historical }
                                        ]"
                                        @click="toggleHistorical(company)"
                                    >
                                        <span>2024</span>
                                        <svg
                                            width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            :class="[
                                                'transform rotate-270', 
                                                { 'opacity-0': company.historical },
                                                { 'opacity-100': !company.historical }
                                            ]"
                                        >
                                            <path d="M1 1L6.5 6.14995L12 1" stroke="#D86300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M1 1L6.5 6.14995L12 1" stroke="#41B464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <VDropdown v-if="company.respStatus">
                                        <span
                                            :class="[
                                                'u-range u-range--border u-range--text u-range u-range--pointer', 
                                                sc.getRangeColor(company.commitments.commitTotalScore, 'commitments', company.respStatus)
                                            ]"
                                        >
                                            {{ company.commitments.commitTotalScore }}
                                        </span>
                                        <template #popper="{ hide }">
                                            <div @click="hide()">
                                                <core-tooltip 
                                                    :category="'commitments'" 
                                                    :company="company" 
                                                />
                                            </div>
                                        </template>
                                    </VDropdown>
                                    <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                </div>
                                <div v-if="Object.keys(company.previousScore).length > 0 && company.respStatus && company.historical">
                                    <core-range-balance 
                                        :current="company.commitments.commitTotalScore" 
                                        :old="company.previousScore.commitTotalScore"
                                    />
                                </div>
                                <div v-if="Object.keys(company.previousScore).length > 0 && company.respStatus && company.historical">
                                    <button 
                                        :class="[
                                            'absolute top-3 transform rotate-90 -left-6  flex items-center space-x-1 cursor-pointer z-10 hover:opacity-60',
                                            { 'pointer-events-none': !company.historical }
                                        ]"
                                        @click="toggleHistorical(company)"
                                    >
                                        <svg
                                            width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                            :class="[
                                                'transform rotate-90', 
                                                { 'opacity-0': !company.historical },
                                                { 'opacity-100': company.historical }
                                            ]"
                                        >
                                            <path d="M1 1L6.5 6.14995L12 1" stroke="#D86300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M1 1L6.5 6.14995L12 1" stroke="#41B464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <span>2021</span>
                                    </button>
                                    <span
                                        :class="[
                                            'u-range u-range--border u-range--text', 
                                            sc.getRangeColor2021(company.previousScore.commitTotalScore, 'commitments', company.respStatus)
                                        ]"
                                    >
                                        {{ company.previousScore.commitTotalScore }}
                                    </span>
                                </div>
                                
                            </div> 
                        </td>
                        <td>
                            <div class="flex flex-col">
                                <div>
                                    <VDropdown v-if="company.respStatus">
                                        <span
                                            :class="[
                                                'u-range u-range--border u-range--text u-range--pointer', 
                                                sc.getRangeColor(company.purchasing.purchTotalScore, 'purchasing', company.respStatus)
                                            ]"
                                        >
                                            {{ company.purchasing.purchTotalScore }}
                                        </span>
                                        <template #popper="{ hide }">
                                            <div @click="hide()">
                                                <core-tooltip 
                                                    :category="'purchasing'" 
                                                    :company="company" 
                                                />
                                            </div>
                                        </template>
                                    </VDropdown>
                                    <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                </div>
                                <div v-if="Object.keys(company.previousScore).length > 0 && company.respStatus && company.historical">
                                    <core-range-balance 
                                        :current="company.purchasing.purchTotalScore" 
                                        :old="company.previousScore.purchTotalCalcScore"
                                    />
                                </div>
                                <div v-if="Object.keys(company.previousScore).length > 0 && company.respStatus && company.historical">
                                    <span
                                        :class="[
                                            'u-range u-range--border u-range--text', 
                                            sc.getRangeColor2021(company.previousScore.purchTotalCalcScore, 'purchasing', company.respStatus)
                                        ]"
                                    >
                                        {{ company.previousScore.purchTotalCalcScore }}
                                    </span>
                                </div>   
                            </div> 
                        </td>
                        <td>
                            <div class="flex flex-col">
                                <div>
                                    <VDropdown v-if="company.respStatus">
                                        <span
                                            :class="[
                                                'u-range u-range--border u-range--text u-range--pointer', 
                                                sc.getRangeColor(company.suppliers.supTotalScore, 'suppliers', company.respStatus)
                                            ]"
                                        >
                                            {{ company.suppliers.supTotalScore }}
                                        </span>
                                        <template #popper="{ hide }">
                                            <div @click="hide()">
                                                <core-tooltip 
                                                    :category="'suppliers'" 
                                                    :company="company" 
                                                />
                                            </div>
                                        </template>
                                    </VDropdown>
                                    <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                </div>
                                <div v-if="Object.keys(company.previousScore).length > 0 && company.respStatus && company.historical">
                                    <core-range-balance 
                                        :current="company.suppliers.supTotalScore" 
                                        :old="company.previousScore.supTotalScore"
                                    />
                                </div>
                                <div v-if="Object.keys(company.previousScore).length > 0 && company.respStatus && company.historical">
                                    <span
                                        :class="[
                                            'u-range u-range--border u-range--text', 
                                            sc.getRangeColor2021(company.previousScore.supTotalScore, 'suppliers', company.respStatus)
                                        ]"
                                    >
                                        {{ company.previousScore.supTotalScore }}
                                    </span>
                                </div>   
                            </div> 
                        </td>
                        <td>
                            <div class="flex flex-col">
                                <div>
                                    <VDropdown v-if="company.respStatus">
                                        <span
                                            :class="[
                                                'u-range u-range--border u-range--text u-range--pointer', 
                                                sc.getRangeColor(company.platforms.platformsTotalScore, 'platforms', company.respStatus)
                                            ]"
                                        >
                                            {{ company.platforms.platformsTotalScore }}
                                        </span>
                                        <template #popper="{ hide }">
                                            <div @click="hide()">
                                                <core-tooltip 
                                                    :category="'platforms'" 
                                                    :company="company" 
                                                />
                                            </div>
                                        </template>
                                    </VDropdown>
                                    <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                </div>
                                <div v-if="Object.keys(company.previousScore).length > 0 && company.respStatus && company.historical">
                                    <core-range-balance 
                                        :current="company.platforms.platformsTotalScore" 
                                        :old="company.previousScore.platformsTotalScore"
                                    />
                                </div>
                                <div v-if="Object.keys(company.previousScore).length > 0 && company.respStatus && company.historical">
                                    <span
                                        :class="[
                                            'u-range u-range--border u-range--text', 
                                            sc.getRangeColor2021(company.previousScore.platformsTotalScore, 'platforms', company.respStatus)
                                        ]"
                                    >
                                        {{ company.previousScore.platformsTotalScore }}
                                    </span>
                                </div>   
                            </div> 
                        </td>
                        <td>
                            <div class="flex flex-col">
                                <div>
                                    <VDropdown v-if="company.respStatus">
                                        <span
                                            :class="[
                                                'u-range u-range--border u-range--text u-range--pointer', 
                                                sc.getRangeColor(company.onTheGround.onTheGroundTotalScore, 'onTheGround', company.respStatus)
                                            ]"
                                        >
                                            {{ company.onTheGround.onTheGroundTotalScore }}
                                        </span>
                                        <template #popper="{ hide }">
                                            <div @click="hide()">
                                                <core-tooltip 
                                                    :category="'onTheGround'" 
                                                    :company="company" 
                                                />
                                            </div>
                                        </template>
                                    </VDropdown>
                                    <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                </div>
                                <div v-if="Object.keys(company.previousScore).length > 0 && company.respStatus && company.historical">
                                    <core-range-balance 
                                        :current="company.onTheGround.onTheGroundTotalScore" 
                                        :old="company.previousScore.groundTotalScore"
                                    />
                                </div>
                                <div v-if="Object.keys(company.previousScore).length > 0 && company.respStatus && company.historical">
                                    <span
                                        :class="[
                                            'u-range u-range--border u-range--text', 
                                            sc.getRangeColor2021(company.previousScore.groundTotalScore, 'onTheGround', company.respStatus)
                                        ]"
                                    >
                                        {{ company.previousScore.groundTotalScore }}
                                    </span>
                                </div>   
                            </div> 
                        </td>
                        <td>
                            <div class="flex flex-col">
                                <div>
                                    <span
                                        v-if="company.respStatus"
                                        :class="[
                                            'u-range u-range--border u-range--bg u-range--big', 
                                            sc.getTotalScoreRange(company.companyTotalScore, company.respStatus)
                                        ]"
                                    >{{ company.companyTotalScore }}</span>
                                    <span class="u-noscore" v-else>{{ $t('gl_no_score') }}</span>
                                </div>
                                <div v-if="Object.keys(company.previousScore).length > 0 && company.respStatus && company.historical">
                                    <core-range-balance 
                                        :current="company.companyTotalScore" 
                                        :old="company.previousScore.companyTotalScore"
                                    />
                                </div>
                                <div v-if="Object.keys(company.previousScore).length > 0 && company.respStatus && company.historical">
                                    <span
                                        :class="[
                                            'u-range u-range--border u-range--bg', 
                                            sc.getTotalScoreRange(company.previousScore.companyTotalScore, company.respStatus)
                                        ]"
                                    >
                                        {{ company.previousScore.companyTotalScore }}
                                    </span>
                                </div>   
                            </div> 
                            
                        </td>
                        <td>
                            <nuxt-link
                                :to="`/scores/${company.id}`"
                            >
                                <span class="u-range u-range--border advanced">
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.9248 12.075L7.07476 6.57495L1.9248 1.07495" stroke="#D86300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1.9248 12.075L7.07476 6.57495L1.9248 1.07495" stroke="#41B464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                </span>
                            </nuxt-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="modal" class="u-modal">
            <div class="u-modal__overlay" @click="modal = false" />
            <div class="u-modal__content">
                <header>
                    <h3>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.26074 6H26.7396C26.9334 6 27.1229 6.05627 27.2853 6.16198C27.4476 6.26769 27.5758 6.41828 27.6542 6.59545C27.7325 6.77262 27.7578 6.96874 27.7268 7.15997C27.6958 7.35121 27.6099 7.52932 27.4796 7.67267L19.2603 16.7139C19.0929 16.898 19.0002 17.1378 19.0002 17.3866V24.4648C19.0002 24.6294 18.9595 24.7915 18.8819 24.9367C18.8042 25.0818 18.6919 25.2055 18.5549 25.2969L14.5549 27.9635C14.4043 28.0639 14.2293 28.1216 14.0485 28.1303C13.8677 28.1391 13.6879 28.0986 13.5283 28.0132C13.3688 27.9278 13.2353 27.8006 13.1423 27.6454C13.0493 27.4901 13.0002 27.3125 13.0002 27.1315V17.3866C13.0002 17.1378 12.9075 16.898 12.7401 16.7139L4.5208 7.67267C4.39049 7.52932 4.30461 7.35121 4.27362 7.15997C4.24263 6.96874 4.26785 6.77262 4.34623 6.59545C4.4246 6.41828 4.55275 6.26769 4.7151 6.16198C4.87745 6.05627 5.06701 6 5.26074 6V6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>{{ $t('sc_data_filter_label') }}</span>
                    </h3>
                    <button @click="modal = false">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.625 4.375L4.375 15.625" stroke="#D86300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.625 4.375L4.375 15.625" stroke="#41B464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.625 15.625L4.375 4.375" stroke="#D86300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.625 15.625L4.375 4.375" stroke="#41B464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </header>
                <div class="py-12 px-6">
                    <div class="flex flex-wrap -my-3 -mx-6">
                        <div class="w-1/2 py-3 px-6">
                            <label class="u-label">{{ $t('gl_by') }} {{ $t('ho_scatter_filters_sector') }}</label>
                            <core-select 
                                class="flex-1"
                                :filter="true"
                                :placeholder="$t('ho_scatter_filters_sector')"
                                :options="sc.filter_sectors"
                                v-model="prefilters.sector"
                                @on-change="onPrefilter('sector', $event)"
                            />
                        </div>
                        <div class="w-1/2 py-3 px-6">
                            <label class="u-label">{{ $t('gl_by') }} {{ $t('ho_scatter_filters_country') }}</label>
                            <core-select 
                                class="flex-1"
                                :filter="true"
                                :placeholder="$t('ho_scatter_filters_country')"
                                :options="sc.filter_countries"
                                v-model="prefilters.hq"
                                @on-change="onPrefilter('hq', $event)"
                            />
                        </div>
                        <div class="w-1/2 py-3 px-6">
                            <label class="u-label">{{ $t('gl_by') }} {{ $t('ho_scatter_filters_region') }}</label>
                            <core-select 
                                class="flex-1"
                                :filter="true"
                                :placeholder="$t('ho_scatter_filters_region')"
                                :options="sc.filter_regions"
                                v-model="prefilters.regionHq"
                                @on-change="onPrefilter('regionHq', $event)"
                            />
                        </div>
                        <div class="w-1/2 py-3 px-6">
                            <label class="u-label">{{ $t('gl_by') }} {{ $t('ho_scatter_filters_applicSector') }}</label>
                            <core-select 
                                class="flex-1"
                                :filter="true"
                                :placeholder="$t('ho_scatter_filters_applicSector')"
                                :options="sc.filter_applicSector"
                                v-model="prefilters.applicSector"
                                @on-change="onPrefilter('applicSector', $event)"
                            />
                        </div>
                        <div class="w-1/2 py-3 px-6">
                            <label class="u-label">{{ $t('gl_by') }} {{ $t('ho_scatter_filters_rspo') }}</label>
                            <core-select 
                                class="flex-1"
                                :filter="true"
                                :placeholder="$t('ho_scatter_filters_rspo')"
                                :options="[$t('gl_yes'), $t('gl_no')]"
                                v-model="prefilters.respStatus"
                                @on-change="onPrefilter('respStatus', $event)"
                            />
                        </div>
                        <div class="w-1/2 py-3 px-6">
                            <label class="u-label">{{ $t('gl_by') }} Total Palm Oil Purchase</label>
                            <div class="flex items-center gap-x-1">
                                <input placeholder="Min" class="u-input" type="number" v-model="totalMin" @keyup="onPrefilter('totalMin', totalMin)" />
                                <span class="u-label">to</span>
                                <input placeholder="Max" class="u-input" type="number" v-model="totalMax" @keyup="onPrefilter('totalMax', totalMax)"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div 
                    v-if="!objIsNull(prefilters)"
                    class="border-t border-[#dadada] py-8 px-6"
                >
                    <h5 class="mb-3 text-xs font-bold">{{ $t('sc_data_filter_label') }}:</h5>
                    <ul class="flex items-center gap-3">
                        <template v-for="(value, key) in prefilters" :key="key">
                            <li 
                                v-if="value"
                                class="u-filter"
                            >
                                <span v-if="key == 'respStatus'">{{ $t('ho_scatter_filters_rspo') }}: {{ value }}</span>
                                <span v-else-if="key == 'totalMin'">Min {{ $t('ho_scatter_filters_total') }}: {{ value }}</span>
                                <span v-else-if="key == 'totalMax'">Max {{ $t('ho_scatter_filters_total') }}: {{ value }}</span>
                                <span v-else>{{ formatString(value, ';') }}</span>
                                <button @click="onPrefilterRemove(key)">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.7188 3.28125L3.28125 11.7188" stroke="#D86300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.7188 3.28125L3.28125 11.7188" stroke="#41B464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.7188 11.7188L3.28125 3.28125" stroke="#D86300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.7188 11.7188L3.28125 3.28125" stroke="#41B464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </li>
                        </template>
                    </ul>
                </div>
                <footer class="border-t border-[#dadada] py-8 px-6">
                    <button 
                        class="u-button u-button--border py-[4px]"
                        @click="onFilter"
                    >
                        <span>{{ $t('sc_data_filter_title') }}</span>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.26074 6H26.7396C26.9334 6 27.1229 6.05627 27.2853 6.16198C27.4476 6.26769 27.5758 6.41828 27.6542 6.59545C27.7325 6.77262 27.7578 6.96874 27.7268 7.15997C27.6958 7.35121 27.6099 7.52932 27.4796 7.67267L19.2603 16.7139C19.0929 16.898 19.0002 17.1378 19.0002 17.3866V24.4648C19.0002 24.6294 18.9595 24.7915 18.8819 24.9367C18.8042 25.0818 18.6919 25.2055 18.5549 25.2969L14.5549 27.9635C14.4043 28.0639 14.2293 28.1216 14.0485 28.1303C13.8677 28.1391 13.6879 28.0986 13.5283 28.0132C13.3688 27.9278 13.2353 27.8006 13.1423 27.6454C13.0493 27.4901 13.0002 27.3125 13.0002 27.1315V17.3866C13.0002 17.1378 12.9075 16.898 12.7401 16.7139L4.5208 7.67267C4.39049 7.52932 4.30461 7.35121 4.27362 7.15997C4.24263 6.96874 4.26785 6.77262 4.34623 6.59545C4.4246 6.41828 4.55275 6.26769 4.7151 6.16198C4.87745 6.05627 5.06701 6 5.26074 6V6Z" stroke="#D86300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.26074 6H26.7396C26.9334 6 27.1229 6.05627 27.2853 6.16198C27.4476 6.26769 27.5758 6.41828 27.6542 6.59545C27.7325 6.77262 27.7578 6.96874 27.7268 7.15997C27.6958 7.35121 27.6099 7.52932 27.4796 7.67267L19.2603 16.7139C19.0929 16.898 19.0002 17.1378 19.0002 17.3866V24.4648C19.0002 24.6294 18.9595 24.7915 18.8819 24.9367C18.8042 25.0818 18.6919 25.2055 18.5549 25.2969L14.5549 27.9635C14.4043 28.0639 14.2293 28.1216 14.0485 28.1303C13.8677 28.1391 13.6879 28.0986 13.5283 28.0132C13.3688 27.9278 13.2353 27.8006 13.1423 27.6454C13.0493 27.4901 13.0002 27.3125 13.0002 27.1315V17.3866C13.0002 17.1378 12.9075 16.898 12.7401 16.7139L4.5208 7.67267C4.39049 7.52932 4.30461 7.35121 4.27362 7.15997C4.24263 6.96874 4.26785 6.77262 4.34623 6.59545C4.4246 6.41828 4.55275 6.26769 4.7151 6.16198C4.87745 6.05627 5.06701 6 5.26074 6V6Z" stroke="#41B464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </footer>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
const sc = useScStore()

sc.filter_sectors = sc.getListOfInCompanies(sc.companies, 'sector')
sc.filter_countries = sc.getListOfInCompanies(sc.companies, 'hq')
sc.filter_regions = sc.getListOfInCompanies(sc.companies, 'regionHq')
sc.filter_applicSector = sc.getListOfInCompanies(sc.companies, 'applicSector')

const companies = ref(sc.companies)
const sortedBy = ref({
    key: '',
    dir: ''
})
const totalMin = ref<number | null>(null)
const totalMax = ref<number | null>(null)
const filters = ref({
    sector: null,
    hq: null,
    regionHq: null,
    applicSector: null,
    respStatus: null,
    totalMin: null,
    totalMax: null
})
const prefilters = ref({
    sector: null,
    hq: null,
    regionHq: null,
    applicSector: null,
    respStatus: null,
    totalMin: null,
    totalMax: null
})
const search = ref<string>('')
const modal = ref<boolean>(false)

const getOutOf = ((id: any) => {
    return sc.categories.find((c: any) => c.id === id)?.out_of
})

const sortBy = (key: string, sorttype: string) => {
    // Update sortedBy.value before sorting
    if (sortedBy.value.key === key) {
        sortedBy.value.dir = sortedBy.value.dir === 'asc' ? 'desc' : 'asc';
    } else {
        sortedBy.value.key = key;
        sortedBy.value.dir = 'asc';
    }

    if (sorttype === 'string') {
        companies.value.sort((a, b) => {
            const aKey: any = key.split('.').reduce((o: any, i) => o[i], a);
            const bKey: any = key.split('.').reduce((o: any, i) => o[i], b);
            return sortedBy.value.dir === 'asc' ? aKey.localeCompare(bKey) : bKey.localeCompare(aKey);
        });
    } else {
        companies.value.sort((a, b) => {
            const aKey: any = key.split('.').reduce((o: any, i) => o[i], a);
            const bKey: any = key.split('.').reduce((o: any, i) => o[i], b);
            return sortedBy.value.dir === 'asc' ? aKey - bKey : bKey - aKey;
        });
    }
}

const onSearch = () => {
    // Clean series data
    filters.value = {
        sector: null,
        hq: null,
        regionHq: null,
        applicSector: null,
        respStatus: null,
        totalMin: null,
        totalMax: null
    }
    companies.value = sc.companies
    companies.value = companies.value.filter((c: any) => {
        return c.companyName.toLowerCase().includes(search.value.toLocaleLowerCase())
    })
}

const onPrefilter = (type: any, value: any) => {
    (prefilters.value as any)[type] = value
}

const onPrefilterRemove = (key: string) => {
    (prefilters.value as any)[key] = null

    if (key === 'totalMin') totalMin.value = null
    if (key === 'totalMax') totalMax.value = null

}

const onFilterRemove = (key: string) => {
    (filters.value as any)[key] = null
    prefilters.value = filters.value

    if (key === 'totalMin') totalMin.value = null
    if (key === 'totalMax') totalMax.value = null

    onFilter()
}

const onFilter = () => {
    const pref = JSON.parse(JSON.stringify(prefilters.value))
    filters.value = pref
    
    // Empty search
    search.value = ''
    
    companies.value = sc.companies
    
    // Apply filters
    if (filters.value.sector) {
        companies.value = companies.value.filter((c: any) => c.sector == filters.value.sector)
    }
    if (filters.value.hq) {
        companies.value = companies.value.filter((c: any) => c.hq == filters.value.hq)
    }
    if (filters.value.regionHq) {
        companies.value = companies.value.filter((c: any) => c.regionHq == filters.value.regionHq)
    }
    if (filters.value.applicSector) {
        companies.value = companies.value.filter((c: any) => c.applicSector == filters.value.applicSector)
    }
    if (filters.value.respStatus) {
        if (filters.value.respStatus == $i18n.t('gl_yes')) {
            companies.value = companies.value.filter((c: any) => c.respStatus)
        } else {
            companies.value = companies.value.filter((c: any) => !c.respStatus)
        }
    }

    if (filters.value.totalMin && filters.value.totalMin > 0) {
        companies.value = companies.value.filter((c: any) => c.totalPalmOil >= (filters.value.totalMin as any))
    }

    if (filters.value.totalMax && filters.value.totalMax > 0) {
        companies.value = companies.value.filter((c: any) => c.totalPalmOil <= (filters.value.totalMax as any))
    }

    modal.value = false

}

const toggleHistorical = (company: any) => {
    company.historical = !company.historical
}


</script>

<style lang="scss" scoped>
table {
    @apply w-full;
    thead {
        @apply sticky top-0 z-20;
    }
    th {
        @apply align-bottom px-6 py-4 bg-cake cursor-pointer hover:bg-light;
        .th-label {
            @apply flex flex-col;
            span {
                @apply text-left text-xs uppercase;
                &:last-child:not(:first-child) {
                    @apply text-[#7B7B7B] text-[11px];
                }
            }
            &--text-center {
                span {
                    @apply text-center;
                }
            }
        }
        .th-sort {
            @apply mt-3 flex flex-col gap-y-1;
            &--centered {
                @apply items-center;
            }
            &--hidden {
                @apply opacity-0;
            }
        }
        &.th--noevents {
            @apply cursor-default hover:bg-cake;
        }
    }
    td {
        @apply align-middle px-3 py-4 border-b border-b-[#dadada] text-sm;
    }
}
</style>