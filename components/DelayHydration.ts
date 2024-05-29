import { createStaticVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VNode } from 'vue'
import { getFragmentHTML } from '#app/components/utils'

interface Handler {
  promise: Promise<void | Event>
  cleanup: () => void
}

export default defineComponent({
  setup(_, { slots }) {
    if (!slots.default) {
      return
    }

    if (import.meta.server) {
      return () => slots.default!()
    }

    const nuxtApp = useNuxtApp()
    const instance = getCurrentInstance()!
    const isIdle = ref(false)
    let vnode: VNode | undefined

    if (import.meta.client && nuxtApp.isHydrating && instance.vnode.el) {
      const fragment = getFragmentHTML(instance.vnode.el, false)
      if (fragment) {
        vnode = createStaticVNode(fragment.join(''), fragment.length)
      }
    }

    onMounted(async () => {
      if (!('requestIdleCallback' in window)) {
        isIdle.value = true
        return
      }

      const triggers = [idleListener(), eventListeners()]
      nuxtApp._delayHydrationPromise ??= Promise.race<void | Event>(
        triggers.map((t) => t.promise),
      ).finally(() => {
        for (const t of triggers) t.cleanup()
      })

      await nuxtApp._delayHydrationPromise
      isIdle.value = true
    })

    return () => (isIdle.value ? slots.default!() : vnode)
  },
})

const postIdleTimeout = 5000
const idleCallbackTimeout = 7000
const hydrateOnEvents: (keyof WindowEventMap)[] = [
  'mousemove',
  'scroll',
  'keydown',
  'click',
  'touchstart',
  'wheel',
]

function eventListeners(): Handler {
  const abortController = new AbortController()
  const promise = new Promise<Event>((resolve) => {
    const handler = (e: Event) => {
      for (const e of hydrateOnEvents) window.removeEventListener(e, handler)
      requestAnimationFrame(() => resolve(e))
    }
    for (const e of hydrateOnEvents) {
      window.addEventListener(e, handler, {
        capture: true,
        once: true,
        passive: true,
        signal: abortController.signal,
      })
    }
  })

  return {
    promise,
    cleanup: () => abortController.abort(),
  }
}

function idleListener(): Handler {
  let id: number
  const promise = new Promise<void>((resolve) => {
    const timeoutDelay = () =>
      setTimeout(() => requestAnimationFrame(() => resolve()), postIdleTimeout)
    id = requestIdleCallback(timeoutDelay, {
      timeout: idleCallbackTimeout,
    })
  })

  return {
    promise,
    cleanup: () => cancelIdleCallback(id),
  }
}
