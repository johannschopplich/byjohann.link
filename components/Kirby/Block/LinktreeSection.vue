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

const socialIcons: Record<string, string> = {
  'youtube.com': 'i-carbon:logo-youtube',
  'instagram.com': 'i-carbon:logo-instagram',
  'twitter.com': 'i-carbon:logo-twitter',
}

const linksWithIcons = props.block.content.links.map((item) => {
  const hostname = Object.keys(socialIcons).find((icon) =>
    item.link.includes(icon)
  )

  return {
    ...item,
    icon: hostname ? socialIcons[hostname] : undefined,
  }
})
</script>

<template>
  <div
    class="linktree-section mt-$gap space-y-$gap"
    style="--gap: calc(2 * var(--un-prose-space-y))"
  >
    <div v-for="(item, index) in linksWithIcons" :key="index">
      <ElementButton is="a" :href="item.link" class="relative w-full">
        <span
          v-if="item.icon"
          class="absolute left-3 h-[1.75em] w-[1.75em]"
          :class="[item.icon]"
        />
        <span>
          {{ item.title }}
        </span>
      </ElementButton>
    </div>
  </div>
</template>
