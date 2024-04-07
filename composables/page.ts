import { joinURL } from 'ufo'
import type { HookResult } from '@nuxt/schema'

/**
 * Returns the currently active page, similar to Kirby's `$page` global variable
 */
export function usePage<T extends Record<string, any> = Record<string, any>>() {
  return useState<T>('app.page', () => ({}) as T)
}

/**
 * Sets the currently active page and updates the document head
 */
export function setPage<T extends Record<string, any>>(page: T) {
  usePage().value = page

  // Build the page meta tags
  const { siteUrl } = useRuntimeConfig().public
  const title = page.title
  const description = page.description
  const url = joinURL(siteUrl, useRoute().path)
  const image = page?.thumbnail?.url

  useHead({
    bodyAttrs: {
      'data-template': page.intendedTemplate || 'default',
    },
  })

  useServerHead({
    link: [{ rel: 'canonical', href: url }],
  })

  useSeoMeta({
    title,
  })

  useServerSeoMeta({
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: url,
    ogType: 'website',
    ...(image && { ogImage: image }),
    twitterTitle: title,
    twitterDescription: description,
    twitterCard: image ? 'summary_large_image' : 'summary',
    ...(image && { twitterImage: image }),
  })
}

/**
 * Resolves components that depend on the finished page setup.
 */
export function renderPageDependencies() {
  const nuxtApp = useNuxtApp()
  nuxtApp._nuxtPageDependenciesRendered = true
  return nuxtApp.callHook('nuxt-page-dependencies:rendered')
}

declare module '#app' {
  interface RuntimeNuxtHooks {
    'nuxt-page-dependencies:rendered': () => HookResult
  }
}
