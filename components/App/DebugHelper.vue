<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  data?: any
  error?: NuxtError<any> | null
}>()
</script>

<template>
  <details v-if="data || error" class="mt-4">
    <summary class="cursor-pointer">
      {{ data ? 'Page data' : 'Error fetching page data' }}
    </summary>
    <pre class="whitespace-pre-wrap text-[0.875em]">{{
      JSON.stringify(data, undefined, 2)
    }}</pre>
  </details>
</template>
