<script setup lang="ts">
withDefaults(
  defineProps<{
    is?: 'button' | 'a'
    theme?: 'primary' | 'secondary'
  }>(),
  {
    is: 'button',
    theme: 'primary',
  }
)
</script>

<template>
  <component
    :is="is"
    :type="is === 'button' ? 'button' : undefined"
    class="inline-flex items-center justify-center p-3 text-sm font-medium shadow-sm active:translate-y-[1px] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:hover:bg-gray-200"
    :class="[
      theme === 'primary'
        ? 'bg-primary-300 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300 focus-visible:outline hover:bg-primary-200'
        : 'bg-white text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50',
    ]"
  >
    <slot />
  </component>
</template>
