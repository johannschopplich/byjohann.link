import process from 'node:process'

const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  modules: ['@byjohann/ui/nuxt', '@unocss/nuxt', '@vueuse/nuxt', 'nuxt-kql'],

  compatibilityDate: '2025-08-01',

  runtimeConfig: {
    public: {
      siteUrl: 'https://byjohann.link',
    },
  },

  features: {
    // Force inlining _all_ CSS
    inlineStyles: true,
  },

  hooks: {
    'build:manifest': (manifest) => {
      for (const item of Object.values(manifest)) {
        // Disable prefetch links for dynamic imports
        item.dynamicImports = []

        // Disable prefetch links for all items
        item.prefetch = false

        // Remove render-blocking CSS
        if (item.resourceType === 'script') {
          item.css = []
        }
      }
    },
  },

  kql: {
    auth: 'bearer',
    server: {
      cache: !isDev,
      storage: 'kql',
      swr: false,
      maxAge: 60 * 60 * 24 * 7, // 7 days
    },
  },

  unocss: {
    // We manually build and inline the `uno.css` at build-time, because the
    // UnoCSS Vite plugin doesn't get inlined by Nuxt
    autoImport: isDev,
    preflight: isDev,
    // UnoCSS disables the `inlineStyles` Nuxt feature by default (which we want to use)
    disableNuxtInlineStyle: false,
  },

  nitro: {
    storage: {
      kql:
        process.env.NITRO_PRESET === 'cloudflare_module'
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
