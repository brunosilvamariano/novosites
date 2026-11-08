import { useNiche } from '@/app/NicheProvider'
import { Poster } from '@/art/posters/Poster'
import { useGsapScope } from '@/hooks/useGsapScope'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { SCENE_QUERY } from '@/lib/motion'
import './Works.css'

const MAX_SKEW = 7 // Inclinação máxima dos pôsteres, em graus.

/** Rolo horizontal preso ao scroll. Os pôsteres inclinam com a velocidade. */
export function Works() {
  const { niche } = useNiche()

  const scope = useGsapScope<HTMLElement>((root) => {
    const media = gsap.matchMedia()

    media.add(SCENE_QUERY, () => {
      const track = root.querySelector<HTMLElement>('.works__track')!
      const posters = gsap.utils.toArray<HTMLElement>('.works__item', root)
      const distance = () => track.scrollWidth - window.innerWidth
      root.style.height = `${distance() + window.innerHeight}px`
      const skewers = posters.map((poster) => gsap.quickTo(poster, 'skewX', { duration: 0.6, ease: 'power3' }))

      ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: 'bottom bottom',
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          gsap.set(track, { x: -distance() * self.progress })
          const skew = gsap.utils.clamp(-MAX_SKEW, MAX_SKEW, self.getVelocity() / -320)
          skewers.forEach((setSkew) => setSkew(skew))
        },
      })

      return () => {
        root.style.height = ''
        gsap.set(track, { clearProps: 'x' })
      }
    })

    return () => media.revert()
  })

  return (
    <section ref={scope} className="works">
      <div className="works__stage">
        <div className="works__track">
          <h2 className="works__title section-title display">{niche.works.title}</h2>
          {niche.works.list.map(({ title, note }, i) => (
            <figure key={title} className="works__item" data-offset={i % 2}>
              <div className="works__poster">
                <Poster art={niche.art} seed={i + 1} theme={niche.theme} />
              </div>
              <figcaption className="mt-3">
                <strong className="display block text-2xl">{title}</strong>
                <span>{note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
