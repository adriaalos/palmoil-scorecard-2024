import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts
} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    theme: {
        colors: {
            green: '#41B464', 
            greensoft: '#6FB956', 
            greendark: '#2A6F3F', 
            leaf: '#96B441',
            gold: '#96B441',
            rosy: '#E46466',
            grayy: '#C1C1C1',
            cake: '#FFFAF3',
            ocre: '#E29F38',
            ocrelight: '#E4C864',
            line: '#DADADA'
        },
        breakpoints: {
            '2xl': '1536.1px',
            'xl': '1280.1px',
            'lg': '1024.1px',
            'md': '768.1px',
            'sm': '640.1px',
            'xs': '414.1px',
        }
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                provider: 'google',
                open: 'Open Sans:100,300,400,600,700,800,900',
                wwf: [
                    {
                        name: 'WWF',
                        provider: 'none'
                    }
                ]
            },
        }),
    ],
    transformers: [
        transformerDirectives()
    ]
})