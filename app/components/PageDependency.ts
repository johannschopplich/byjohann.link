export default defineComponent({
  inheritAttrs: false,

  setup(_, ctx) {
    if (!ctx.slots.default) return

    // Renders the default slot.
    const renderSlot = () => {
      return ctx.slots.default!()
    }

    if (import.meta.server) {
      const nuxtApp = useNuxtApp()

      // We can early return without a promise in some cases.
      if (nuxtApp.payload.error || nuxtApp._pageDependenciesRendered) {
        return renderSlot
      }

      // Defer rendering the component until the page component has rendered.
      return new Promise((resolve) => {
        const resolver = () => {
          resolve(renderSlot)
        }

        // If Nuxt has an error, immediately render the component.
        if (nuxtApp.payload.error || nuxtApp._pageDependenciesRendered) {
          return resolver()
        }

        // Called manually by using the `renderPageDependencies` composable.
        nuxtApp.hooks.hookOnce('page-dependencies:rendered', resolver)

        // When any error happens, resolve.
        nuxtApp.hooks.hookOnce('app:error', resolver)
        nuxtApp.hooks.hookOnce('vue:error', resolver)
      })
    }

    return renderSlot
  },
})
