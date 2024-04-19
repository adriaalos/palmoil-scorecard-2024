
<template>
    <header class="u-page-header">
        <div class="u-page-header__container u-container u-container--lg">
            <div class="u-page-header__header">
                <h1>{{ $t('sc_header_title') }}</h1>
            </div>
            <div class="u-page-header__cta">
                <a 
                    href="/WWF_POBS_2024_full_results.xlsx"
                    target="_blank"
                    class="u-button u-button--greendark"
                >
                    <span>{{ $t('sc_header_download_button') }}</span>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.75 13.7514L16 19L21.25 13.7514" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 5V18.9963" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27 19V26C27 26.2652 26.8946 26.5196 26.7071 26.7071C26.5196 26.8946 26.2652 27 26 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    </header>
</template>