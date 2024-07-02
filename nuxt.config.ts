import process from 'node:process'

const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  modules: [
    '@byjohann/ui/nuxt',
    '@nuxt/fonts',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-vitalizer',
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
    inlineStyles: true,
  },

  future: {
    compatibilityVersion: 4,
  },

  vitalizer: {
    disablePrefetchLinks: true,
    disableStylesheets: true,
  },

  unocss: {
    // We manually build and inline the `uno.css` at build-time, because the
    // UnoCSS Vite plugin don't get inlined by Nuxt
    autoImport: isDev,
    preflight: isDev,
    // UnoCSS disables the `inlineStyles` Nuxt feature by default, which we want to use
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
