<script setup lang="ts">
import type { KirbyLinktreeData } from '~/queries'

const page = usePage<KirbyLinktreeData>()
</script>

<template>
  <div class="mx-auto max-w-screen-sm">
    <span
      class="fixed bottom-[calc(100%-200px)] aspect-square w-full max-w-screen-sm rounded-full from-secondary-200 to-off-white bg-gradient-to-b blur-3xl -z-50"
    />
  </div>

  <header class="mb-8 mt-16">
    <!-- <UnLazyImage
      :thumbhash="page.profileImage.thumbhash"
      :src-set="page.profileImage.srcset"
      auto-sizes
      :width="page.profileImage.width"
      :height="page.profileImage.height"
      :alt="page.profileImage.alt"
      class="mx-auto w-28 rounded-full ring-1 ring-offset-2 ring-secondary-100 ring-offset-off-white"
    /> -->
    <img
      :srcset="page.profileImage.srcset"
      :width="page.profileImage.width"
      :height="page.profileImage.height"
      :alt="page.profileImage.alt"
      sizes="112px"
      class="mx-auto w-28 rounded-full ring-1 ring-offset-2 ring-secondary-100 ring-offset-off-white"
    />
  </header>
</template>
