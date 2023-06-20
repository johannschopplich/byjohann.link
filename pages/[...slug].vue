<script setup lang="ts">
import { linktreeQuery } from '~/queries'

const { languageCode } = getLocalePreference()
const { data, error } = await useKql(linktreeQuery, {
  language: languageCode === 'de' ? 'de' : 'en',
})

if (!data.value?.result) {
  setResponseStatus(useRequestEvent(), 404)
}

// Store page data
const page = data.value?.result
setPage(page)
</script>

<template>
  <div>
    <KirbyLayouts v-if="page?.layouts?.length" :layouts="page.layouts" />
    <KirbyBlocks v-else-if="page?.blocks" :blocks="page.blocks" />
    <DevOnly>
      <AppDebugHelper :data="page" :error="error" />
    </DevOnly>
  </div>
</template>
