import { useNiche } from '@/app/NicheProvider'
import { useGsapScope } from '@/hooks/useGsapScope'
import { ScrollTrigger } from '@/lib/gsap'
import { prefersReducedMotion } from '@/lib/motion'
import './Manifesto.css'

// Primeira parte do scroll acende as palavras; a segunda abre o círculo.
const WORDS_END = 0.62

/** Texto renderizado duas vezes: uma cópia fica dentro do círculo que cresce. */
function Words({ words, hidden }: { words: string[]; hidden?: boolean }) {
  return (
    <p className="manifesto__text display" aria-hidden={hidden}>
      {words.map((word, i) => (
        <span key={i} className="manifesto__word">
          {word}{' '}
        </span>
      ))}
    </p>
  )
}

export function Manifesto() {
  const { niche } = useNiche()
  const words = niche.manifesto.split(' ')

  const scope = useGsapScope<HTMLElement>((root) => {
    if (prefersReducedMotion()) {
      root.style.setProperty('--circle', '0')
      root.querySelectorAll('.manifesto__word').forEach((w) => w.classList.add('is-lit'))
      return
    }
    const spans = [...root.querySelectorAll('.manifesto__word')]
    const perCopy = spans.length / 2

    ScrollTrigger.create({
      trigger: root,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: ({ progress }) => {
        const lit = Math.floor((Math.min(progress / WORDS_END, 1)) * perCopy)
        spans.forEach((span, i) => span.classList.toggle('is-lit', i % perCopy < lit))
        const opening = Math.max(0, (progress - WORDS_END) / (1 - WORDS_END))
        root.style.setProperty('--circle', String(opening))
      },
    })
  })

  return (
    <section ref={scope} className="manifesto">
      <div className="manifesto__stage">
        <div className="manifesto__copy gutter">
          <Words words={words} />
        </div>
        <div className="manifesto__copy manifesto__copy--circle gutter" aria-hidden="true">
          <Words words={words} hidden />
        </div>
      </div>
    </section>
  )
}
