<script setup lang="ts">
import '~/assets/css/main.css'
import '~/assets/css/prose.css'

import favicon from '~/assets/favicon.svg?raw'

useHead({
  htmlAttrs: {
    lang: 'de',
    class: 'bg-ivory',
  },
  link: [
    {
      rel: 'icon',
      href: `data:image/svg+xml,${favicon.replace('"', '%22')}`,
    },
    // {
    //   rel: 'stylesheet',
    //   href: '/fonts/Tagada.css',
    // },
  ],
})
</script>

<template>
  <AppHeader />

  <main id="main" class="mx-auto mb-8 w-[min(100%-2rem,640px)]">
    <NuxtPage />
  </main>
</template>
