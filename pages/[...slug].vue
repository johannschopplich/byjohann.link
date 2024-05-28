<script setup lang="ts">
import { linktreeQuery } from '~/queries'

const { languageCode } = getLocalePreference()
const { data, error } = await useKql(linktreeQuery, {
  language: languageCode === 'de' ? 'de' : 'en',
})

if (!data.value?.result) {
  const event = useRequestEvent()
  if (event) setResponseStatus(event, 404)
}

// Store page data
const page = data.value?.result
setPage(page)

// Wait for components that require page data to be loaded
await renderPageDependencies()
</script>

<template>
  <div>
    <AppServerOnly>
      <KirbyLayouts v-if="page?.layouts?.length" :layouts="page.layouts" />
      <KirbyBlocks v-else-if="page?.blocks" :blocks="page.blocks" />
      <DevOnly>
        <AppDebugHelper :data="page" :error="error" />
      </DevOnly>
    </AppServerOnly>
  </div>
</template>
