import type { Theme } from '@unocss/preset-wind3'
import {
  defineConfig,
  presetIcons,
  presetWind3,
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
        50: 'oklch(97.0% 0.014 125.2)', // #F3F7ED
        100: 'oklch(94.0% 0.022 125.2)', // #E8EEDE
        200: 'oklch(89.0% 0.035 125.2)', // #D5DFC6
        300: 'oklch(83.0% 0.045 125.2)', // #C0CDAD
        400: 'oklch(74.0% 0.052 125.2)', // #A3B18D
        500: 'oklch(64.8% 0.055 125.2)', // #879570
        600: 'oklch(55.0% 0.050 125.2)', // #6B7757
        700: 'oklch(46.0% 0.044 125.2)', // #525D42
        800: 'oklch(38.0% 0.038 125.2)', // #3E4630
        900: 'oklch(31.0% 0.032 125.2)', // #2C3321
        950: 'oklch(21.0% 0.025 125.2)', // #161A0E
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
    fontFamily: {
      heading: 'Cooper Hewitt, system-ui, sans-serif',
    },
  },
  shortcuts: {
    'max-w-content': 'mx-auto w-[min(100%-2rem,640px)]',
  },
  rules: [
    [
      'text-underline',
      {
        'text-decoration-line': 'underline',
        'text-decoration-color': 'currentColor',
        'text-decoration-thickness': 'var(--un-decoration-thickness)',
        'text-underline-offset': 'var(--un-decoration-offset)',
      },
    ],
  ],
  presets: [presetWind3(), presetIcons()],
  transformers: [transformerDirectives()],
})
