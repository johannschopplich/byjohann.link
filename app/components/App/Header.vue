<script setup lang="ts">
import type { KirbyLinktreeData } from '~/queries'

const page = usePage<KirbyLinktreeData>()
</script>

<template>
  <header class="flex flex-col items-center">
    <div
      class="h-22 w-full halftone-bg dark:[--un-dithered-from:var(--colors-stone-400)]"
    />

    <div class="relative">
      <div
        class="rounded-full bg-secondary/75 size-18 left-1/2 top-1/2 absolute z-[-1] blur-3xl dark:bg-secondary/50 -translate-x-1/2 -translate-y-1/2"
      />

      <img
        :srcset="page.profileImage.srcset"
        :width="page.profileImage.width"
        :height="page.profileImage.height"
        :alt="page.profileImage.alt"
        sizes="112px"
        class="rounded-full w-28 ring-2 ring-$un-color-background -mt-14"
      />
    </div>
  </header>
</template>
