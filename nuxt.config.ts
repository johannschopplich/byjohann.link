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
      maxAge: 60,
    },
  },

  unocss: {
    preflight: true,
  },

  fonts: {
    defaults: {
      weights: [400, 600],
      styles: ['normal'],
    },
  },

  nitro: {
    storage: {
      kql: {
        driver: 'cloudflareKVBinding',
        binding: 'BYJOHANN_LINK_KQL',
      },
    },
    devStorage: {
      kql: {
        driver: 'fs',
        base: '.data',
      },
    },
  },

  typescript: {
    // typeCheck: 'build',
    shim: false,
  },
})
