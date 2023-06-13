<script setup lang="ts">
import type { KirbyBlock } from '#nuxt-kql'
import type { KirbyLinktreeData } from '~/queries'

defineProps<{
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

const page = usePage<KirbyLinktreeData>()

// Use static data to avoid reactivity when redirecting to another page
const images = page.value.images

const socialIcons: Record<string, string> = {
  'youtube.com': 'i-carbon:logo-youtube',
  'instagram.com': 'i-carbon:logo-instagram',
  'twitter.com': 'i-carbon:logo-twitter',
}
</script>

<template>
  <div
    class="linktree-section mt-$margin space-y-4"
    style="--margin: calc(2 * var(--un-prose-space-y))"
  >
    <div v-for="(item, index) in block.content.links" :key="index">
      <ElementButton is="a" :href="item.link" class="relative w-full">
        <span
          v-if="
            Object.keys(socialIcons).some((icon) => item.link.includes(icon))
          "
          class="absolute left-3 h-[1.75em] w-[1.75em]"
          :class="[
              ,
              Object.entries(socialIcons).find(([icon]) => item.link.includes(icon))![1],
            ]"
        />
        <span>
          {{ item.title }}
        </span>
      </ElementButton>
    </div>
  </div>
</template>
