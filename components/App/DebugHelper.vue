<script setup lang="ts">
import type { FetchError } from 'ofetch'

defineProps<{
  data?: any
  error?: FetchError | null
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
