import type { Theme } from '@unocss/preset-wind4'
import {
  defineConfig,
  presetIcons,
  presetWind4,
  toEscapedSelector,
  transformerDirectives,
} from 'unocss'

export default defineConfig<Theme>({
  cli: {
    entry: {
      patterns: ['**/*.vue'],
      outFile: 'app/assets/uno.css',
    },
  },
  safelist: [
    'font-heading',
    // Force stone color CSS variables to be generated
    ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
      (n) => `text-stone-${n}`,
    ),
  ],
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
        DEFAULT: 'oklch(64.8% 0.150 40)', // #d96a41
        50: 'oklch(97.0% 0.014 40)', // #fef2ee
        100: 'oklch(94.0% 0.028 40)', // #fde5dd
        200: 'oklch(89.0% 0.050 40)', // #f9d0c2
        300: 'oklch(83.0% 0.082 40)', // #f7b69f
        400: 'oklch(74.0% 0.122 40)', // #ec8f6e
        500: 'oklch(64.8% 0.150 40)', // #d96a41
        600: 'oklch(55.0% 0.136 40)', // #b1512d
        700: 'oklch(46.0% 0.122 40)', // #8e3b1b
        800: 'oklch(38.0% 0.108 40)', // #70290c
        900: 'oklch(31.0% 0.095 40)', // #561a02
        950: 'oklch(21.0% 0.076 40)', // #330600
      },
    },
    font: {
      heading: 'Cooper Hewitt, system-ui, sans-serif',
    },
    container: {
      prose: '60ch',
    },
  },
  rules: [
    [
      /^halftone-bg$/,
      ([,], { rawSelector }) => {
        const selector = toEscapedSelector(rawSelector)
        const from = 'var(--un-dithered-from, var(--un-color-text))'
        const to = 'var(--un-dithered-to, var(--un-color-background))'
        const textShadow = generateTextOutlineShadow(to, 2)
        const dotSize = 5
        const dotSizeRetina = 4

        return `
${selector} {
  text-shadow: ${textShadow};
  background-image: radial-gradient(${from} 20%, transparent 20%), radial-gradient(${from} 20%, transparent 20%);
  background-position: 0px 0px, ${dotSize / 2}px ${dotSize / 2}px;
  background-size: ${dotSize}px ${dotSize}px;
}

@media (min-resolution: 2dppx) {
  ${selector} {
    background-position: 0px 0px, ${dotSizeRetina / 2}px ${dotSizeRetina / 2}px;
    background-size: ${dotSizeRetina}px ${dotSizeRetina}px;
  }
}
`
      },
    ],
  ],
  shortcuts: {
    'max-w-content': 'mx-auto w-[min(100%-4rem,640px)]',
  },
  presets: [presetWind4(), presetIcons()],
  transformers: [transformerDirectives()],
})

/**
 * Generates a text-shadow that creates an outline effect around glyphs.
 * Covers all positions in a box pattern up to the given radius.
 */
function generateTextOutlineShadow(color: string, radius = 2): string {
  const shadows: string[] = []
  for (let x = -radius; x <= radius; x++) {
    for (let y = -radius; y <= radius; y++) {
      if (x === 0 && y === 0) continue
      shadows.push(`${x}px ${y}px 0 ${color}`)
    }
  }
  return shadows.join(', ')
}
