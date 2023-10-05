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
          <span class="h-[1.75em] w-[1.75em]" :class="[item.icon]" />
        </span>
        <span
          v-if="item.title.toLowerCase().includes('vlog')"
          class="text-shimmer [background-image:linear-gradient(110deg,#000,45%,#89937A,55%,#000)] bg-[length:250%_100%] bg-clip-text text-transparent"
        >
          {{ item.title }}
        </span>
        <span v-else>
          {{ item.title }}
        </span>
      </ElementButton>
    </div>
  </div>
</template>

<style scoped>
@keyframes text-shimmer {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -200% 0;
  }
}

.text-shimmer {
  animation: text-shimmer 2.5s ease-out infinite alternate;
}
</style>
