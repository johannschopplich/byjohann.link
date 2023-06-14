<script setup lang="ts">
import type { KirbyLinktreeData } from '~/queries'

// Wait for the page to be loaded before rendering this component,
// otherwise `usePage()` would return `undefined`
await hasPage()

const page = usePage<KirbyLinktreeData>()
</script>

<template>
  <header class="mb-8 mt-16">
    <UnLazyImage
      :thumbhash="page.profileImage.thumbhash"
      :src-set="page.profileImage.srcset"
      auto-sizes
      :width="page.profileImage.width"
      :height="page.profileImage.height"
      :alt="page.profileImage.alt"
      class="mx-auto w-28 rounded-full"
    />
  </header>
</template>
