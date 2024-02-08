import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts
} from 'unocss'

export default defineConfig({
    theme: {
        colors: {
            po: {
                DEFAULT: '#41B464'
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
})