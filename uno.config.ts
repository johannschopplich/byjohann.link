import {
  defineConfig,
  presetIcons,
  presetWind,
  transformerDirectives,
} from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'
import type { Theme } from '@unocss/preset-wind'

export default defineConfig<Theme>({
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
    },
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
  transformers: [transformerDirectives()],
  presets: [presetForms(), presetWind(), presetIcons()],
})
