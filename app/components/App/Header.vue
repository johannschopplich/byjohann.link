<script setup lang="ts">
import type { KirbyLinktreeData } from '~/queries'

const page = usePage<KirbyLinktreeData>()

const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header class="flex flex-col items-center">
    <div
      class="h-22 w-full relative halftone-bg dark:[--un-dithered-from:var(--colors-stone-400)]"
    >
      <button
        type="button"
        aria-label="Toggle color mode"
        :aria-pressed="colorMode.value === 'dark'"
        class="group text-$un-color-text p-1 rounded-full bg-$un-color-background flex ring-2 ring-$un-color-background items-center right-3 top-3 justify-center absolute focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-2 focus-visible:outline lg:right-12 sm:right-10"
        @click="toggleColorMode"
      >
        <span
          aria-hidden="true"
          class="i-carbon:sun size-[1.25em] group-hover:text-secondary dark:hidden"
        />
        <span
          aria-hidden="true"
          class="i-carbon:moon size-[1.5em] hidden group-hover:text-secondary dark:block"
        />
      </button>
    </div>

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
