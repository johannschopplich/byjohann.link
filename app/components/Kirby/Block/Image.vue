<script setup lang="ts">
import type { KirbyBlock } from '#nuxt-kql'

interface ResolvedKirbyImage {
  url: string
  width: number
  height: number
  srcset: string
  alt: string | null
}

const props = defineProps<{
  block: KirbyBlock<
    'image-resolved',
    {
      location: string
      // File UUIDs are resolved server-side to the actual image data
      // See: https://kirby.tools/docs/headless/field-methods
      image: ResolvedKirbyImage[]
      src: string
      alt: string
      caption: string
      link: string
    }
  >
}>()

const figure = ref<HTMLElement | undefined>()
const { width } = useElementSize(figure)

const image = computed<Partial<ResolvedKirbyImage>>(
  () => props.block.content.image?.[0] ?? {},
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
