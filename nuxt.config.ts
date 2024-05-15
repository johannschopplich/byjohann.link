export default defineNuxtConfig({
  modules: [
    '@byjohann/ui/nuxt',
    '@nuxt/fonts',
    '@unocss/nuxt',
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
      maxAge: 60 * 60 * 24 * 30, // 30 days
    },
  },

  unocss: {
    preflight: true,
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
      kql: {
        driver: 'cloudflareKVBinding',
        binding: 'KV_BINDING',
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
