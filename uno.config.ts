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
            leaf: '#96B441',
            gold: '#96B441',
            rosy: '#E46466',
            gray: '#C1C1C1',
            cake: '#FFFAF3',
            ocre: '#E29F38',
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
                open: 'Open Sans',
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