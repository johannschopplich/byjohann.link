<script setup lang="ts">
import '~/assets/css/main.css'
import '~/assets/css/prose.css'

import favicon from '~/assets/favicon.svg?raw'

const { languageCode } = getLocalePreference()

useHead({
  htmlAttrs: {
    lang: languageCode === 'de' ? 'de' : 'en',
    class: 'bg-ivory',
  },
  link: [
    {
      rel: 'icon',
      href: `data:image/svg+xml,${favicon.replace('"', '%22')}`,
    },
  ],
})
</script>

<template>
  <AppHeader />

  <main id="main" class="mx-auto mb-16 w-[min(100%-2rem,640px)]">
    <NuxtPage />
  </main>
</template>
