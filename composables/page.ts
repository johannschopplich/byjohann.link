import { joinURL } from 'ufo'

/**
 * Returns the currently active page, similar to Kirby's `$page` global variable
 */
export function usePage<T extends Record<string, any> = Record<string, any>>() {
  return useState<T>('app.page', () => ({} as T))
}

/**
 * Sets the currently active page and updates the document head
 */
export function setPage<T extends Record<string, any>>(page?: T) {
  const pageState = usePageState()

  if (!page) {
    pageState.value = 'rejected'
    return
  }

  usePage().value = page

  // Build the page meta tags
  const { siteUrl } = useRuntimeConfig().public
  const title = page.title
  const description = page.description
  const url = joinURL(siteUrl, useRoute().path)
  const image = page?.cover?.url

  // Write the meta tags to the document head
  useHead({
    title,
    bodyAttrs: {
      'data-template': page.intendedTemplate || 'default',
    },
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      ...(image ? [{ property: 'og:image', content: image }] : []),
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:url', content: url },
      {
        name: 'twitter:card',
        content: image ? 'summary_large_image' : 'summary',
      },
      ...(image ? [{ name: 'twitter:image', content: image }] : []),
    ],
    link: [{ rel: 'canonical', href: url }],
  })

  pageState.value = 'resolved'
}

/**
 * Returns a promise that resolves when the page data has been loaded or rejected
 */
export async function hasPage() {
  const state = usePageState()

  await until(state).not.toBe('pending')
  await nextTick()

  return state.value === 'resolved'
}

function usePageState() {
  return useState<'pending' | 'resolved' | 'rejected'>(
    'app.state.page',
    () => 'pending'
  )
}
