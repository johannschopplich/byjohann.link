<script setup lang="ts">
import type { KirbyBlock } from 'kirby-types'

defineProps<{
  block: KirbyBlock<'text'>
}>()
</script>

<template>
  <div class="prose" v-html="block.content.text" />
</template>
