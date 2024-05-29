import { createStaticVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VNode } from 'vue'
import { getFragmentHTML } from '#app/components/utils'

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
    let idleHandle: number | null = null
    let vnode: VNode | undefined

    if (import.meta.client && nuxtApp.isHydrating && instance.vnode.el) {
      const fragment = getFragmentHTML(instance.vnode.el, false)
      if (fragment) {
        vnode = createStaticVNode(fragment.join(''), fragment.length)
      }
    }

    onMounted(() => {
      idleHandle = requestIdleCallback(async () => {
        isIdle.value = true
        cancelIdleCallback(idleHandle as unknown as number)
        idleHandle = null
      })
    })

    onBeforeUnmount(() => {
      if (idleHandle) {
        cancelIdleCallback(idleHandle as unknown as number)
        idleHandle = null
      }
    })

    return () => (isIdle.value ? slots.default!() : vnode)
  },
})
