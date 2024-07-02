<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import {
  LazyKirbyBlockHeading,
  LazyKirbyBlockImage,
  LazyKirbyBlockLine,
  LazyKirbyBlockLinktreeSection,
  LazyKirbyBlockList,
  LazyKirbyBlockQuote,
  LazyKirbyBlockText,
} from '#components'
import type { KirbyBlock } from '#nuxt-kql'

defineProps<{
  blocks: KirbyBlock<string>[]
}>()

type ComponentConstructor = new (...args: any[]) => ComponentPublicInstance

const blockComponents: Record<string, ComponentConstructor> = {
  heading: LazyKirbyBlockHeading,
  image: LazyKirbyBlockImage,
  line: LazyKirbyBlockLine,
  list: LazyKirbyBlockList,
  quote: LazyKirbyBlockQuote,
  text: LazyKirbyBlockText,
  // Custom blocks
  'linktree-section': LazyKirbyBlockLinktreeSection,
}

const content = ref<HTMLElement | undefined>()
useInternalLinks(content)
</script>

<template>
  <div
    ref="content"
    class="prose text-center"
    style="--un-prose-space-y: 0.5rem"
  >
    <template v-for="(block, index) in blocks" :key="index">
      <component :is="blockComponents[block.type]" :block="block" />
    </template>
  </div>
</template>
