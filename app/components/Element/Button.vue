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
    class="inline-flex items-center justify-center p-3 text-sm font-medium shadow-sm active:translate-y-[1px] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 focus-visible:outline-2 focus-visible:outline-primary-300 focus-visible:outline-offset-2 focus-visible:outline disabled:hover:bg-gray-200"
    :class="[
      theme === 'secondary'
        ? 'bg-white text-black ring-1 ring-gray-300 ring-inset hover:bg-gray-50'
        : 'bg-primary-300 text-black ring-1 ring-transparent ring-inset hover:bg-primary-200 hover:ring-primary-300',
    ]"
  >
    <slot />
  </component>
</template>
