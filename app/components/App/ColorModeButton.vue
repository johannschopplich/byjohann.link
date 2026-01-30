<script setup lang="ts">
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    aria-label="Toggle color mode"
    :aria-pressed="colorMode.value === 'dark'"
    class="group text-$un-color-text p-1 rounded-full bg-$un-color-background flex ring-2 ring-$un-color-background items-center justify-center focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-2 focus-visible:outline"
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
</template>
