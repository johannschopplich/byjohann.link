import { consola } from 'consola'

const shouldPrerender = process.env.NITRO_PRERENDER_PAGES === 'true'
if (shouldPrerender) consola.info('Nitro page prerendering enabled')

export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@unlazy/nuxt', '@vueuse/nuxt', 'nuxt-kql'],

  runtimeConfig: {
    public: {
      siteUrl: 'https://byjohann.link',
    },
  },

  kql: {
    auth: 'bearer',
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
  },

  experimental: {
    payloadExtraction: shouldPrerender,
  },

  typescript: {
    typeCheck: true,
    shim: false,
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
  },
})
