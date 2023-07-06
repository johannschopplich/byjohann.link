<script setup lang="ts">
import {
  LazyKirbyBlockHeading,
  LazyKirbyBlockImage,
  LazyKirbyBlockLine,
  LazyKirbyBlockLinktreeSection,
  LazyKirbyBlockList,
  LazyKirbyBlockQuote,
  LazyKirbyBlockText,
} from '#components'
import type { ComponentPublicInstance } from 'vue'
import type { KirbyBlock } from 'kirby-fest'

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

const router = useRouter()
const route = useRoute()
const content = ref<HTMLElement | undefined>()

if (process.client) {
  useEventListener(window, 'hashchange', navigate)
  useEventListener(content, 'click', handleAnchors)
}

function navigate() {
  if (window.location.hash) {
    document
      .querySelector(window.location.hash)
      ?.scrollIntoView({ behavior: 'smooth' })
  }
}

function handleAnchors(
  event: MouseEvent & {
    target: HTMLElement
  },
) {
  const link = event.target.closest('a')

  if (
    !event.defaultPrevented &&
    link &&
    event.button === 0 &&
    link.target !== '_blank' &&
    link.rel !== 'external' &&
    !link.download &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  ) {
    const url = new URL(link.href)
    const { origin, pathname: path, hash } = url
    if (origin !== window.location.origin) return

    event.preventDefault()

    if (hash && (!path || path === route.path)) {
      window.history.replaceState({}, '', link.href)
      navigate()
    } else {
      router.push({ path, hash })
    }
  }
}
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
