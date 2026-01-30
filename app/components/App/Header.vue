<script setup lang="ts">
import type { KirbyLinktreeData } from '~/queries'

const page = usePage<KirbyLinktreeData>()
</script>

<template>
  <div class="mx-auto max-w-screen-sm">
    <span
      class="rounded-full w-full max-w-screen-sm aspect-square bottom-[calc(100%-200px)] fixed from-secondary-200 to-off-white bg-gradient-to-b blur-3xl -z-50"
    />
  </div>

  <header class="mb-8 mt-16">
    <img
      :srcset="page.profileImage.srcset"
      :width="page.profileImage.width"
      :height="page.profileImage.height"
      :alt="page.profileImage.alt"
      sizes="112px"
      class="mx-auto rounded-full w-28 ring-1 ring-secondary-100 ring-offset-2 ring-offset-off-white"
    />
  </header>
</template>
