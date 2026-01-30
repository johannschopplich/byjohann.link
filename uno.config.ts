import type { Theme } from '@unocss/preset-wind4'
import {
  defineConfig,
  presetIcons,
  presetWind4,
  transformerDirectives,
} from 'unocss'

export default defineConfig<Theme>({
  cli: {
    entry: {
      patterns: ['**/*.vue'],
      outFile: 'app/assets/uno.css',
    },
  },
  theme: {
    colors: {
      primary: {
        DEFAULT: 'oklch(64.8% 0.055 125.2)', // #879570
        50: 'oklch(97.0% 0.005 125.2)', // #F4F6F2
        100: 'oklch(94.0% 0.010 125.2)', // #E9ECE5
        200: 'oklch(89.0% 0.018 125.2)', // #D8DDD0
        300: 'oklch(83.0% 0.030 125.2)', // #C3CBB6
        400: 'oklch(74.0% 0.045 125.2)', // #A4B092
        500: 'oklch(64.8% 0.055 125.2)', // #879570
        600: 'oklch(55.0% 0.050 125.2)', // #6B7757
        700: 'oklch(46.0% 0.045 125.2)', // #525D41
        800: 'oklch(38.0% 0.040 125.2)', // #3D462F
        900: 'oklch(31.0% 0.035 125.2)', // #2C3420
        950: 'oklch(21.0% 0.028 125.2)', // #151B0C
      },
      secondary: {
        DEFAULT: '#FF9320',
        50: '#FFECD8',
        100: '#FFE2C3',
        200: '#FFCE9A',
        300: '#FFBB72',
        400: '#FFA749',
        500: '#FF9320',
        600: '#E77700',
        700: '#AF5A00',
        800: '#773D00',
        900: '#3F2000',
        950: '#231200',
      },
      off: {
        white: {
          DEFAULT: '#fefaf7',
        },
      },
    },
    font: {
      heading: 'Cooper Hewitt, system-ui, sans-serif',
    },
  },
  shortcuts: {
    'max-w-content': 'mx-auto w-[min(100%-2rem,640px)]',
  },
  presets: [presetWind4(), presetIcons()],
  transformers: [transformerDirectives()],
})
