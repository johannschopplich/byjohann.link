import process from 'node:process'

export default defineNuxtConfig({
  modules: [
    '@byjohann/ui/nuxt',
    '@nuxt/fonts',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-lcp-speedup',
    'nuxt-kql',
  ],

  runtimeConfig: {
    public: {
      siteUrl: 'https://byjohann.link',
    },
  },

  kql: {
    auth: 'bearer',
    server: {
      cache: true,
      storage: 'kql',
      swr: false,
      maxAge: 60 * 60 * 24 * 30, // 30 days
    },
  },

  features: {
    inlineStyles: false,
  },

  lcpSpeedup: {
    disablePrefetchLinks: true,
  },

  unocss: {
    // We manually import the reset and `uno.css` styles
    autoImport: false,
    preflight: false,
    // UnoCSS disables the `inlineStyles` Nuxt feature by default, which we may want to use
    disableNuxtInlineStyle: false,
  },

  fonts: {
    families: [
      {
        name: 'Cooper Hewitt',
        weights: [400, 700],
      },
    ],
  },

  nitro: {
    storage: {
      kql:
        process.env.NITRO_PRESET === 'cloudflare_pages'
          ? {
              driver: 'cloudflareKVBinding',
              binding: 'KV_BINDING',
            }
          : {
              driver: 'fs',
              base: '.data',
            },
    },
    devStorage: {
      kql: {
        driver: 'fs',
        base: '.data',
      },
    },
  },
})
