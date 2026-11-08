import { useState } from 'react'
import { useNiche } from '@/app/NicheProvider'
import './Services.css'

/** Lâminas: a escolhida se abre e empurra as outras. */
export function Services() {
  const { niche } = useNiche()
  const [active, setActive] = useState(0)

  return (
    <section className="services gutter">
      <h2 className="section-title display">{niche.services.title}</h2>

      <div className="services__blades">
        {niche.services.list.map(({ title, text, items, icon: Icon }, i) => {
          const open = i === active
          return (
            <article key={title} className="blade" data-open={open} onPointerEnter={() => setActive(i)}>
              <h3 className="blade__heading">
                <button
                  type="button"
                  className="blade__toggle display"
                  aria-expanded={open}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <Icon className="blade__icon" aria-hidden="true" />
                  <span>{title}</span>
                </button>
              </h3>
              <div className="blade__panel">
                <p className="blade__text">{text}</p>
                <ul className="blade__items">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
