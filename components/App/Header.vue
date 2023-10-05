<script setup lang="ts">
import type { KirbyLinktreeData } from '~/queries'

// Wait for the page to be loaded before rendering this component,
// otherwise `usePage()` would return `undefined`
await hasPage()

const page = usePage<KirbyLinktreeData>()
</script>

<template>
  <div
    class="fixed inset-x-0 bottom-[calc(100%-200px)] flex justify-center -z-50"
  >
    <div
      class="aspect-square w-full max-w-screen-sm rounded-full from-secondary-300 to-ivory bg-gradient-to-b blur-3xl"
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
      class="mx-auto w-28 rounded-full ring-1 ring-offset-2 ring-secondary-100 ring-offset-ivory"
    />
  </header>
</template>
