<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import '~/assets/uno.css'
import '~/assets/css/main.css'
import '~/assets/css/prose.css'

// import favicon from '~/assets/favicon.svg?raw'

// Log any uncaught errors to the console during development
if (import.meta.dev) {
  useNuxtApp().hooks.hook('vue:error', console.error)
}

const { siteUrl } = useRuntimeConfig().public
const { languageCode } = getLocalePreference()

useServerSeoMeta({
  themeColor: '#fefaf7',
})

useServerHead({
  htmlAttrs: {
    lang: languageCode === 'de' ? 'de' : 'en',
    class: 'bg-off-white',
  },
  link: [
    // {
    //   rel: 'icon',
    //   href: `data:image/svg+xml,${favicon.replace('"', '%22')}`,
    // },
    {
      rel: 'icon',
      href: '/favicon.ico',
      sizes: '32x32',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
  ],
  script: [
    {
      src: 'https://plausible.io/js/script.js',
      'data-domain': new URL(siteUrl).hostname,
      defer: true,
    },
  ],
})
</script>

<template>
  <PageDependency>
    <AppHeader />
  </PageDependency>

  <main id="main" class="max-w-content mb-16">
    <NuxtPage />
  </main>
</template>
