<script setup lang="ts">
import type { KirbyBlock } from 'kirby-fest'

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

const socialIcons: Record<string, string> = {
  'instagram.com': 'i-carbon:logo-instagram',
  'linkedin.com': 'i-carbon:logo-linkedin',
  'github.com': 'i-carbon:logo-github',
  'twitter.com': 'i-carbon:logo-twitter',
  'youtube.com': 'i-carbon:logo-youtube',
  'mail@johannschopplich.com': 'i-carbon:email',
}

const linksWithIcons = props.block.content.links.map((item) => {
  const hostname = Object.keys(socialIcons).find((icon) =>
    item.link.includes(icon),
  )

  return {
    ...item,
    ...(hostname && { icon: socialIcons[hostname] }),
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
          <span :class="['h-[1.75em] w-[1.75em]', item.icon]" />
        </span>
        <span>
          {{ item.title }}
        </span>
      </ElementButton>
    </div>
  </div>
</template>
