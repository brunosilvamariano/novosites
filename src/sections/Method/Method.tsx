import { useState } from 'react'
import { useNiche } from '@/app/NicheProvider'
import { useGsapScope } from '@/hooks/useGsapScope'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import './Method.css'

/** Disco que gira com o scroll; cada marca do círculo é uma etapa. */
export function Method() {
  const { niche } = useNiche()
  const { title, steps } = niche.method
  const [active, setActive] = useState(0)
  const slice = 360 / steps.length

  const scope = useGsapScope<HTMLElement>((root) => {
    const dial = root.querySelector('.method__dial')
    ScrollTrigger.create({
      trigger: root,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: ({ progress }) => {
        const position = progress * (steps.length - 1)
        gsap.set(dial, { rotate: -position * slice, '--dial': `${position * slice}deg` })
        setActive(Math.round(position))
      },
    })
  })

  return (
    <section ref={scope} className="method" style={{ height: `${steps.length * 90}vh` }}>
      <div className="method__stage gutter">
        <h2 className="section-title display method__title">{title}</h2>

        <div className="method__wheel" aria-hidden="true">
          <div className="method__dial">
            {steps.map((step, i) => (
              <span
                key={step.title}
                className="method__mark display"
                data-active={i === active}
                style={{ transform: `rotate(${i * slice}deg) translateY(calc(var(--wheel) / -2))` }}
              >
                {/* Compensa o giro do disco e o da marca: o número fica sempre em pé. */}
                <span style={{ transform: `rotate(calc(var(--dial, 0deg) - ${i * slice}deg))` }}>{i + 1}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Todas as etapas ficam no DOM, então leitores de tela percorrem a lista completa. */}
        <ol className="method__steps">
          {steps.map((step, i) => (
            <li key={step.title} className="method__step" data-active={i === active}>
              <h3 className="display">{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
