import type { Theme } from '@unocss/preset-wind'
import {
  defineConfig,
  presetIcons,
  presetWind,
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
        DEFAULT: '#89937A',
        50: '#E3E5DF',
        100: '#D9DCD4',
        200: '#C5CABE',
        300: '#B1B8A7',
        400: '#9DA591',
        500: '#89937A',
        600: '#6D755F',
        700: '#505746',
        800: '#33382D',
        900: '#171914',
        950: '#080907',
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
      heading: 'Cooper Hewitt, "Cooper Hewitt fallback"',
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
  presets: [presetWind(), presetIcons()],
  transformers: [transformerDirectives()],
})
