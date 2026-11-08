import { useNiche } from '@/app/NicheProvider'
import { LiveForm } from '@/art/LiveForm'
import { ActionLink } from '@/components/ui/ActionLink'
import { useFitText } from '@/hooks/useFitText'
import { useGsapScope } from '@/hooks/useGsapScope'
import { gsap } from '@/lib/gsap'
import { hasFinePointer, prefersReducedMotion } from '@/lib/motion'
import './Opening.css'

const REACH = 170 // Raio, em pixels, em que as letras fogem do ponteiro.
const STAIR_STEP = 0.075 // Recuo de cada linha na composição em escada.

export function Opening() {
  const { niche } = useNiche()
  const { title, lead, cta } = niche.opening
  const stair = niche.theme.heroLayout === 'stair'
  const reserve = stair ? STAIR_STEP * (title.length - 1) : 0
  const fitRef = useFitText<HTMLHeadingElement>({ maxHeight: 0.6, reserve })

  const scope = useGsapScope<HTMLElement>((root) => {
    const chars = gsap.utils.toArray<HTMLElement>('.opening__char', root)
    if (prefersReducedMotion()) return

    // O único momento coreografado da página: as letras sobem depois das persianas.
    gsap.from(chars, { yPercent: 115, duration: 1.1, delay: 0.45, ease: 'expo.out', stagger: 0.018 })
    gsap.from('.opening__foot', { opacity: 0, duration: 0.8, delay: 1.1 })

    if (!hasFinePointer()) return

    // Letras magnéticas: fogem do ponteiro.
    const movers = chars.map((char) => ({
      char,
      x: gsap.quickTo(char, 'x', { duration: 0.5, ease: 'power3' }),
      y: gsap.quickTo(char, 'y', { duration: 0.5, ease: 'power3' }),
    }))

    const onMove = (event: PointerEvent) => {
      for (const { char, x, y } of movers) {
        const box = char.getBoundingClientRect()
        const dx = box.left + box.width / 2 - event.clientX
        const dy = box.top + box.height / 2 - event.clientY
        const distance = Math.hypot(dx, dy)
        const force = distance < REACH ? (REACH - distance) / REACH : 0
        x(force ? (dx / distance) * force * 34 : 0)
        y(force ? (dy / distance) * force * 34 : 0)
      }
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  })

  return (
    <section ref={scope} id="inicio" className="opening" data-layout={niche.theme.heroLayout}>
      <LiveForm niche={niche} />

      <div className="gutter relative flex min-h-svh flex-col justify-end pt-24 pb-24">
        <h1 ref={fitRef} className="opening__title display" aria-label={title.join(' ')}>
          {title.map((line, lineIndex) => (
            <span
              key={line}
              className="opening__line"
              style={{ marginLeft: stair ? `${lineIndex * STAIR_STEP * 100}%` : undefined }}
              aria-hidden="true"
            >
              <span className="fit-line">
                {[...line].map((char, i) => (
                  <span key={i} className="opening__char">
                    {char === ' ' ? ' ' : char}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </h1>

        <div className="opening__foot mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[38ch] text-pretty">{lead}</p>
          <ActionLink href="#contato">{cta}</ActionLink>
        </div>
      </div>
    </section>
  )
}
