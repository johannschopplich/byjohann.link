<script setup lang="ts">
const colorMode = useColorMode()

function toggle() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    class="group text-$un-color-text p-2 rounded-full bg-$un-color-background bottom-4 right-4 fixed z-50 halftone-bg lg:right-10"
    @click="toggle"
  >
    <span
      class="i-carbon:sun size-5 block group-hover:bg-secondary dark:hidden"
    />
    <span
      class="i-carbon:moon size-5 hidden group-hover:bg-secondary dark:block"
    />
  </button>
</template>
