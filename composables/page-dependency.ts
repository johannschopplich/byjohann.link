import type { HookResult } from '@nuxt/schema'

/**
 * Resolves components that depend on the finished page setup.
 */
export function renderPageDependencies() {
  const nuxtApp = useNuxtApp()
  nuxtApp._pageDependenciesRendered = true
  return nuxtApp.callHook('page-dependencies:rendered')
}

declare module '#app' {
  interface RuntimeNuxtHooks {
    'page-dependencies:rendered': () => HookResult
  }
}
