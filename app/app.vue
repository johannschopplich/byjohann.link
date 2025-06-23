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

const { languageCode } = getLocalePreference()

useSeoMeta({
  themeColor: '#fefaf7',
})

if (import.meta.server) {
  useHead({
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
  })
}
</script>

<template>
  <PageDependency>
    <AppHeader />
  </PageDependency>

  <main id="main" class="max-w-content mb-16">
    <NuxtPage />
  </main>
</template>
