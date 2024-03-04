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
        extend: {
            screens: {
                '2xl': {'max': '1536px'},
                'xl': {'max': '1280px'},
                'lg': {'max': '1024px'},
                'md': {'max': '768px'},
                'sm': {'max': '640px'},
                'xs': {'max': '414px'},
            }
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