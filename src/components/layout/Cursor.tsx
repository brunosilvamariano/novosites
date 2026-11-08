import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { hasFinePointer, prefersReducedMotion } from '@/lib/motion'
import './Cursor.css'

const INTERACTIVE = 'a, button, label, input'

/** Ponto que acompanha o mouse e cresce sobre elementos clicáveis. */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return
    const el = dot.current!
    el.style.display = 'block'
    const x = gsap.quickTo(el, 'x', { duration: 0.25, ease: 'power3' })
    const y = gsap.quickTo(el, 'y', { duration: 0.25, ease: 'power3' })

    const move = (event: PointerEvent) => {
      x(event.clientX)
      y(event.clientY)
      const overTarget = (event.target as Element).closest?.(INTERACTIVE)
      gsap.to(el, { scale: overTarget ? 3.4 : 1, duration: 0.25, overwrite: 'auto' })
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return <div ref={dot} className="cursor" aria-hidden="true" />
}
