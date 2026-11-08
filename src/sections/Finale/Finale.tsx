import { useRef, type PointerEvent } from 'react'
import { useNiche } from '@/app/NicheProvider'
import { ActionLink } from '@/components/ui/ActionLink'
import { useFitText } from '@/hooks/useFitText'
import './Finale.css'

/** Nome da marca em contorno; a lanterna do ponteiro revela o preenchimento. */
export function Finale() {
  const { niche } = useNiche()
  const { brand, finale } = niche
  const fitRef = useFitText<HTMLDivElement>({ maxHeight: 0.42 })
  const stage = useRef<HTMLDivElement>(null)

  const moveLight = (event: PointerEvent<HTMLDivElement>) => {
    const box = stage.current!.getBoundingClientRect()
    stage.current!.style.setProperty('--x', `${event.clientX - box.left}px`)
    stage.current!.style.setProperty('--y', `${event.clientY - box.top}px`)
  }

  const whatsapp = `https://wa.me/${brand.whatsapp}`

  return (
    <footer id="contato" className="finale gutter">
      <div className="finale__head">
        <h2 className="section-title display">{finale.line}</h2>
        <ActionLink href={whatsapp} external>
          {finale.cta}
        </ActionLink>
      </div>

      <address className="finale__contacts">
        <a href={`mailto:${brand.email}`}>{brand.email}</a>
        <span>{brand.address}</span>
        <span>{brand.social}</span>
      </address>

      <div ref={stage} className="finale__stage" onPointerMove={moveLight} aria-hidden="true">
        {/* O corpo calculado fica no bloco e é herdado pelas duas camadas. */}
        <div ref={fitRef} className="relative">
          <p className="finale__name display">
            <span className="fit-line">{brand.name}</span>
          </p>
          <p className="finale__name finale__name--fill display">
            <span className="fit-line">{brand.name}</span>
          </p>
        </div>
      </div>

      <p className="finale__legal">© {new Date().getFullYear()} {brand.name}</p>
    </footer>
  )
}
