import type { Theme } from '@unocss/preset-wind4'
import { defineConfig, presetIcons, presetWind4 } from 'unocss'

export default defineConfig<Theme>({
  cli: {
    entry: {
      patterns: ['**/*.vue'],
      outFile: 'app/assets/uno.css',
    },
  },
  safelist: [
    'font-heading',
    // Force stone color CSS variables to be generated.
    ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
      (n) => `text-stone-${n}`,
    ),
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: 'oklch(65% 0.1624 39)', // #df653c
        50: 'oklch(97% 0.0145 39)', // #fff2ee
        100: 'oklch(94% 0.028 39)', // #fde5de
        200: 'oklch(89% 0.0491 39)', // #f9d0c3
        300: 'oklch(83% 0.0785 39)', // #f5b6a2
        400: 'oklch(75% 0.117 39)', // #ed9376
        500: 'oklch(65% 0.1624 39)', // #df653c
        600: 'oklch(55% 0.143 39)', // #b44e2a
        700: 'oklch(46% 0.1172 39)', // #8d3c20
        800: 'oklch(38% 0.0938 39)', // #6b2d18
        900: 'oklch(31% 0.0731 39)', // #4e2112
        950: 'oklch(21% 0.0549 39)', // #2c0d04
      },
      secondary: {
        DEFAULT: 'oklch(65% 0.0926 120)', // #889855
        50: 'oklch(97% 0.016 120)', // #f3f7eb
        100: 'oklch(94% 0.0258 120)', // #e9eedb
        200: 'oklch(89% 0.0388 120)', // #d7dfc3
        300: 'oklch(83% 0.0546 120)', // #c2cda6
        400: 'oklch(75% 0.0729 120)', // #a8b581
        500: 'oklch(65% 0.0926 120)', // #889855
        600: 'oklch(55% 0.0815 123)', // #697942
        700: 'oklch(46% 0.0668 126)', // #4f5f35
        800: 'oklch(38% 0.0535 128)', // #3a4828
        900: 'oklch(31% 0.0417 130)', // #29351e
        950: 'oklch(21% 0.0313 132)', // #131b0c
      },
    },
    font: {
      heading: 'Cooper Hewitt, system-ui, sans-serif',
    },
    container: {
      prose: '60ch',
    },
  },
  shortcuts: {
    'max-w-content': 'mx-auto w-[min(100%-4rem,640px)]',
  },
  presets: [presetWind4(), presetIcons()],
})
