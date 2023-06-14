<script setup lang="ts">
import type { KirbyLinktreeData } from '~/queries'

// Wait for the page to be loaded before rendering this component,
// otherwise `usePage()` would return `undefined`
await hasPage()

const page = usePage<KirbyLinktreeData>()
</script>

<template>
  <div
    class="absolute left-0 right-0 top-0 z-[-1] h-[100px] flex justify-center overflow-hidden md:h-[200px]"
  >
    <div
      class="mx-[-50vw] h-[80rem] w-[160rem] translate-y-[-90%]"
      style="background: radial-gradient(50% 50%, #ff9320 0%, transparent 100%)"
    />
    <div class="noisey absolute inset-0 opacity-40" />
    <div
      class="from-ivory to-ivory/0 absolute bottom-0 left-0 h-[40%] w-full transform-gpu bg-gradient-to-t"
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
      class="mx-auto w-28 rounded-full shadow-sm"
    />
  </header>
</template>

<style scoped>
.noisey {
  background-image: url('/images/noise.png');
  background-repeat: repeat;
  background-size: 100px 100px;
}
</style>
