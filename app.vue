<script setup lang="ts">
import '~/assets/css/main.css'
import '~/assets/css/prose.css'

import favicon from '~/assets/favicon.svg?raw'

const { languageCode } = getLocalePreference()

useHead({
  htmlAttrs: {
    lang: languageCode === 'de' ? 'de' : 'en',
    class: 'bg-off-white',
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

  <main id="main" class="max-w-content mb-16">
    <NuxtPage />
  </main>
</template>
