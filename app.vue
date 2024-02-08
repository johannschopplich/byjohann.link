<script setup lang="ts">
import '~/assets/css/main.css'
import '~/assets/css/prose.css'

// import favicon from '~/assets/favicon.svg?raw'

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
})
</script>

<template>
  <AppHeader />

  <main id="main" class="max-w-content mb-16">
    <NuxtPage />
  </main>
</template>
