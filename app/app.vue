<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import '~/assets/uno.css'
import '~/assets/css/main.css'
import '~/assets/css/prose.css'
import '~/assets/css/prose.custom.css'

if (import.meta.dev) {
  useNuxtApp().hooks.hook('vue:error', console.error)
}

const { languageCode } = useLocalePreference()
const { theme, generateColorVars } = useTheme()
const colorMode = useColorMode()

useSeoMeta({
  themeColor: () => (colorMode.value === 'dark' ? '#1c1917' : 'white'),
})

if (import.meta.server) {
  useHead({
    htmlAttrs: {
      lang: languageCode.value === 'de' ? 'de' : 'en',
    },
    link: [
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
    style: [
      {
        innerHTML: `:root {\n${generateColorVars(theme.colors)}\n}`,
      },
    ],
  })
}
</script>

<template>
  <div
    class="mx-4 border-x border-secondary/75 hidden inset-0 fixed z-[-1] lg:mx-8 sm:mx-6 sm:block"
  />

  <PageDependency>
    <AppHeader class="mb-8" />
  </PageDependency>

  <main id="main" class="max-w-content mb-16">
    <NuxtPage />
  </main>
</template>
