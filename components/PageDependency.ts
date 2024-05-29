export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },

  setup(_, { slots }) {
    if (!slots.default) {
      return
    }

    const nuxtApp = useNuxtApp()
    const error = useError()

    if (import.meta.server) {
      // Defer rendering the component until the page component has rendered.
      return new Promise((resolve) => {
        const resolver = () => {
          resolve(() => slots.default!())
        }

        // If Nuxt has an error, immediately render the component.
        if (error.value) {
          return resolver()
        }

        if (nuxtApp._pageDependenciesRendered) {
          return resolver()
        }

        // Called manually by using the `renderPageDependencies` composable.
        nuxtApp.hooks.hookOnce('page-dependencies:rendered', resolver)

        // When any error happens, resolve.
        nuxtApp.hooks.hookOnce('app:error', resolver)
        nuxtApp.hooks.hookOnce('vue:error', resolver)
      })
    }

    return () => slots.default!()
  },
})
