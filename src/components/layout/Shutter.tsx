import { forwardRef, useImperativeHandle, useRef, type CSSProperties } from 'react'
import { gsap } from '@/lib/gsap'
import { prefersReducedMotion } from '@/lib/motion'
import type { Niche } from '@/niches/types'
import './Shutter.css'

export interface ShutterHandle {
  /** Cobre a tela com as cores do próximo nicho. */
  close: (next: Niche) => Promise<void>
  /** Revela a página. */
  open: () => Promise<void>
}

const BAR_COUNT = 7

/** Persianas que cobrem a troca de identidade. */
export const Shutter = forwardRef<ShutterHandle, { initial: Niche }>(({ initial }, ref) => {
  const root = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLParagraphElement>(null)

  useImperativeHandle(ref, () => {
    const bars = () => gsap.utils.toArray<HTMLElement>('.shutter__bar', root.current)
    const speed = prefersReducedMotion() ? 0 : 1

    return {
      close: (next) =>
        new Promise<void>((resolve) => {
          root.current!.style.visibility = 'visible'
          root.current!.style.setProperty('--shutter-a', next.theme.accent)
          root.current!.style.setProperty('--shutter-b', next.theme.bg)
          label.current!.textContent = next.label
          label.current!.style.color = next.theme.accent2
          label.current!.style.fontFamily = next.theme.fontDisplay
          gsap.set(bars(), { scaleY: 0, transformOrigin: '50% 100%' })
          gsap
            .timeline({ onComplete: resolve })
            .to(bars(), { scaleY: 1, duration: 0.55 * speed, ease: 'expo.inOut', stagger: 0.04 * speed })
            .fromTo(label.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.3 * speed }, '-=0.25')
        }),
      open: () =>
        new Promise<void>((resolve) => {
          gsap.set(bars(), { transformOrigin: '50% 0%' })
          gsap
            .timeline({
              onComplete: () => {
                root.current!.style.visibility = 'hidden'
                resolve()
              },
            })
            .to(label.current, { opacity: 0, duration: 0.2 * speed })
            .to(bars(), { scaleY: 0, duration: 0.6 * speed, ease: 'expo.inOut', stagger: 0.04 * speed }, 0.05 * speed)
        }),
    }
  }, [])

  return (
    <div
      ref={root}
      className="shutter"
      aria-hidden="true"
      style={{ '--shutter-a': initial.theme.accent, '--shutter-b': initial.theme.bg } as CSSProperties}
    >
      {Array.from({ length: BAR_COUNT }, (_, i) => (
        <span key={i} className="shutter__bar" />
      ))}
      <p ref={label} className="shutter__label" />
    </div>
  )
})

Shutter.displayName = 'Shutter'
