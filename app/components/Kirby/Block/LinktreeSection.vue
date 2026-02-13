<script setup lang="ts">
import type { KirbyBlock } from 'kirby-types'

const props = defineProps<{
  block: KirbyBlock<
    'linktree-section',
    {
      links: {
        title: string
        link: string
      }[]
    }
  >
}>()

const ICONS: Record<string, string> = {
  // Social
  'https://www.instagram.com': 'i-carbon:logo-instagram',
  'https://www.linkedin.com': 'i-carbon:logo-linkedin',
  'https://github.com': 'i-carbon:logo-github',
  'https://x.com': 'i-carbon:logo-x',
  'https://www.youtube.com': 'i-carbon:logo-youtube',
  'mailto:': 'i-carbon:email',
  // Products
  'https://kirby': 'i-simple-icons:kirby',
}

const EXTENSION_ICONS: Record<string, string> = {
  pdf: 'i-carbon:document-pdf',
}

const linksWithIcons = props.block.content.links.map((item) => {
  const hostname = Object.keys(ICONS).find((icon) => item.link.startsWith(icon))
  const extension = item.link.split('.').pop()?.toLowerCase()

  return {
    ...item,
    ...(hostname && { icon: ICONS[hostname] }),
    ...(extension &&
      EXTENSION_ICONS[extension] && { icon: EXTENSION_ICONS[extension] }),
  }
})
</script>

<template>
  <div
    class="linktree-section mt-$gap space-y-$gap"
    style="--gap: calc(2 * var(--un-prose-space-y))"
  >
    <div v-for="(item, index) in linksWithIcons" :key="index">
      <a
        :href="item.link"
        class="py-1.5 decoration-[length:var(--un-decoration-thickness)] underline-offset-[var(--un-decoration-offset)] inline-flex w-full items-center justify-center relative halftone-bg -my-0.5 focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-2 focus-visible:outline hover:underline hover:decoration-secondary-500 active:translate-y-[1px] dark:[--un-dithered-from:var(--colors-stone-400)] hover:[--un-dithered-from:var(--un-color-secondary-600)] dark:hover:decoration-secondary-400 dark:hover:[--un-dithered-from:var(--un-color-secondary-400)]"
      >
        <span
          v-if="item.icon"
          aria-hidden="true"
          class="flex items-center inset-y-0 left-3 justify-center absolute isolate"
        >
          <span
            class="rounded-full bg-$un-color-background size-[1.75em] absolute"
          />
          <span class="size-[1.75em] z-1" :class="[item.icon]" />
        </span>
        <span>{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>
