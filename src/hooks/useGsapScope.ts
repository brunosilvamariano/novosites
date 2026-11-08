import { useLayoutEffect, useRef, type DependencyList } from 'react'
import { gsap } from '@/lib/gsap'

/**
 * Roda animações dentro de um gsap.context preso ao elemento retornado.
 * Ao desmontar, tudo é desfeito, inclusive ScrollTriggers.
 */
export function useGsapScope<T extends HTMLElement>(
  setup: (root: T) => void | (() => void),
  deps: DependencyList = [],
) {
  const ref = useRef<T>(null)

  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return
    let cleanup: void | (() => void)
    const context = gsap.context(() => {
      cleanup = setup(root)
    }, root)
    return () => {
      cleanup?.()
      context.revert()
    }
    // As dependências são definidas por quem chama o hook.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
