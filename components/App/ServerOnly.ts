import { createStaticVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VNode } from 'vue'
import { getFragmentHTML } from '#app/components/utils'

export default defineComponent({
  setup(_, { slots }) {
    if (!slots.default) {
      return
    }

    const instance = getCurrentInstance()!
    let vnode: VNode | undefined

    if (instance.vnode.el) {
      const fragment = getFragmentHTML(instance.vnode.el, false)
      if (fragment) {
        vnode = createStaticVNode(fragment.join(''), fragment.length)
      }
    }

    return () => (import.meta.server ? slots.default!() : vnode)
  },
})
