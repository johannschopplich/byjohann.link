import { consola } from 'consola'

const shouldPrerender = process.env.NITRO_PRERENDER_PAGES === 'true'
if (shouldPrerender) consola.info('Prerendering enabled')

export default defineNuxtConfig({
  modules: [
    '@byjohann/ui/nuxt',
    '@unocss/nuxt',
    // '@unlazy/nuxt',
    '@vueuse/nuxt',
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
      maxAge: 60,
    },
  },

  unocss: {
    preflight: true,
  },

  nitro: {
    prerender: {
      // Enable Nitro's crawler to prerender all pages (optional)
      // If Kirby content changes, the frontend will have to be rebuilt
      ...(shouldPrerender && {
        crawlLinks: shouldPrerender,
        routes: ['/'],
      }),
    },
    storage: {
      kql: {
        driver: 'cloudflareKVBinding',
        binding: 'BYJOHANN_LINK_KQL',
      },
    },
    devStorage: {
      kql: {
        driver: 'fs',
        base: '.nuxt/data',
      },
    },
  },

  typescript: {
    typeCheck: 'build',
    shim: false,
  },
})
