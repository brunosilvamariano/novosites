import { useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import { useNiche } from '@/app/NicheProvider'
import { useGsapScope } from '@/hooks/useGsapScope'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { prefersReducedMotion } from '@/lib/motion'
import { PiArrowsHorizontalBold } from 'react-icons/pi'
import './Contrast.css'

function Layer({ label, lines, side }: { label: string; lines: string[]; side: 'without' | 'with' }) {
  return (
    <div className={`contrast__layer contrast__layer--${side} gutter`}>
      <p className="contrast__label">{label}</p>
      <ul className="contrast__lines display">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  )
}

/** Comparador arrastável. O input range, invisível, atende teclado e leitores de tela. */
export function Contrast() {
  const { niche } = useNiche()
  const { title, withoutLabel, withLabel, without, with: withUs } = niche.contrast
  const [position, setPosition] = useState(50)
  const touched = useRef(false)

  const dragTo = (event: PointerEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect()
    touched.current = true
    setPosition(Math.round(((event.clientX - box.left) / box.width) * 100))
  }

  const scope = useGsapScope<HTMLElement>((root) => {
    if (prefersReducedMotion()) return
    // Um único movimento de demonstração mostra que a divisória pode ser arrastada.
    ScrollTrigger.create({
      trigger: root,
      start: 'top 45%',
      once: true,
      onEnter: () => {
        const state = { value: 50 }
        gsap.to(state, {
          value: 26,
          duration: 0.9,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: 1,
          onUpdate: () => {
            if (!touched.current) setPosition(state.value)
          },
        })
      },
    })
  })

  return (
    <section ref={scope} className="contrast">
      <h2 className="section-title display gutter pt-24">{title}</h2>

      <div
        className="contrast__stage"
        style={{ '--pos': `${position}%` } as CSSProperties}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId)
          dragTo(event)
        }}
        onPointerMove={(event) => {
          if (event.buttons) dragTo(event)
        }}
      >
        <Layer label={withoutLabel} lines={without} side="without" />
        <Layer label={withLabel} lines={withUs} side="with" />

        <span className="contrast__handle" aria-hidden="true">
          <span>
            <PiArrowsHorizontalBold />
          </span>
        </span>

        <input
          type="range"
          className="contrast__input"
          min={0}
          max={100}
          value={position}
          aria-label={`Comparar ${withoutLabel} com ${withLabel}`}
          onChange={(event) => {
            touched.current = true
            setPosition(Number(event.target.value))
          }}
        />
      </div>
    </section>
  )
}
