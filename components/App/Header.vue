<script setup lang="ts">
import type { KirbyLinktreeData } from '~/queries'

// Wait for the page to be loaded before rendering this component,
// otherwise `usePage()` would return `undefined`
await hasPage()

const page = usePage<KirbyLinktreeData>()
</script>

<template>
  <div class="mx-auto max-w-[480px]">
    <span
      class="fixed bottom-[calc(100%-200px)] aspect-square max-w-[480px] w-full rounded-full from-secondary-200 to-ivory bg-gradient-to-b opacity-70 blur-3xl -z-50"
    />
  </div>

  <header class="mb-8 mt-16">
    <UnLazyImage
      :thumbhash="page.profileImage.thumbhash"
      :src-set="page.profileImage.srcset"
      auto-sizes
      :width="page.profileImage.width"
      :height="page.profileImage.height"
      :alt="page.profileImage.alt"
      class="mx-auto w-28 rounded-full ring-1 ring-offset-2 ring-primary-100 ring-offset-ivory"
    />
  </header>
</template>
