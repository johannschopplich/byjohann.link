<script setup lang="ts">
import type { KirbyLinktreeData } from '~/queries'

// Wait for the page to be loaded before rendering this component,
// otherwise `usePage()` would return `undefined`
await hasPage()

const page = usePage<KirbyLinktreeData>()
</script>

<template>
  <header class="mb-8 mt-16">
    <img
      :srcset="page.profileImage.srcset"
      :alt="page.profileImage.alt"
      class="mx-auto w-28 rounded-full"
    />
  </header>
</template>
