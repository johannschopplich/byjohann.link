<script setup lang="ts">
defineProps<{
  href?: string
  theme?: 'primary' | 'secondary'
}>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :type="!href ? 'button' : undefined"
    :href="href"
    class="inline-flex items-center justify-center p-3 text-sm font-medium shadow-sm active:translate-y-[1px] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:hover:bg-gray-200"
    :class="[
      theme === 'secondary'
        ? 'bg-white text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50'
        : 'bg-secondary-300 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-300 focus-visible:outline hover:bg-secondary-200',
    ]"
  >
    <slot />
  </component>
</template>
