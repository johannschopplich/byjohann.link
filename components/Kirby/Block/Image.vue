<script lang="ts">
export interface ResolvedKirbyImage {
  url: string
  width: number
  height: number
  srcset: string
  alt: string | null
}
</script>

<script setup lang="ts">
import type { KirbyBlock } from 'kirby-fest'

const props = defineProps<{
  block: KirbyBlock<
    'resolved-image',
    {
      location: string
      image: string[]
      src: string
      alt: string
      caption: string
      link: string
      // File UUUIDs are resolved server-side to the actual image data
      // See: https://github.com/johannschopplich/kirby-headless#toresolvedblocks
      resolved: {
        image: ResolvedKirbyImage[]
      }
    }
  >
}>()

const figure = ref<HTMLElement | undefined>()
const { width } = useElementSize(figure)

const image = computed<Partial<ResolvedKirbyImage>>(
  () => props.block.content.resolved.image?.[0] ?? {},
)
</script>

<template>
  <figure ref="figure">
    <img
      :src="block.content.location === 'web' ? block.content.src : undefined"
      :srcset="image.srcset"
      :width="image.width"
      :height="image.height"
      :sizes="`${width}px`"
      :alt="block.content.alt || image.alt || ''"
    />

    <figcaption v-if="block.content.caption" v-html="block.content.caption" />
  </figure>
</template>
