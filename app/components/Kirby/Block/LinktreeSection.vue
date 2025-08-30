<script setup lang="ts">
import type { KirbyBlock } from '#nuxt-kql'

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

const TextShimmer = resolveComponent('ElementTextShimmer')

const ICONS: Record<string, string> = {
  // Social
  'https://www.instagram.com': 'i-carbon:logo-instagram',
  'https://www.linkedin.com': 'i-carbon:logo-linkedin',
  'https://github.com': 'i-carbon:logo-github',
  'https://x.com': 'i-carbon:logo-x',
  'https://www.youtube.com': 'i-carbon:logo-youtube',
  'mailto:': 'i-carbon:email',
  // Products
  'https://kirby': 'i-logos:kirby-icon',
}

const linksWithIcons = props.block.content.links.map((item) => {
  const hostname = Object.keys(ICONS).find((icon) => item.link.startsWith(icon))

  return {
    ...item,
    ...(hostname && { icon: ICONS[hostname] }),
  }
})
</script>

<template>
  <div
    class="linktree-section mt-$gap space-y-$gap"
    style="--gap: calc(2 * var(--un-prose-space-y))"
  >
    <div v-for="(item, index) in linksWithIcons" :key="index">
      <ElementButton :href="item.link" class="relative w-full">
        <span
          v-if="item.icon"
          class="absolute inset-y-0 left-3 flex items-center"
        >
          <span class="h-[1.75em] w-[1.75em]" :class="[item.icon]" />
        </span>
        <component
          :is="item.title.toLowerCase().includes('blog') ? TextShimmer : 'span'"
        >
          {{ item.title }}
        </component>
      </ElementButton>
    </div>
  </div>
</template>
