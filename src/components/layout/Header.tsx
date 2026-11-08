import { useNiche } from '@/app/NicheProvider'
import './Header.css'

export function Header() {
  const { niche } = useNiche()

  return (
    <header className="gutter pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-between py-4">
      <a href="#inicio" className="header-pill display pointer-events-auto">
        {niche.brand.name}
      </a>
      <a href="#contato" className="header-pill pointer-events-auto">
        Contato
      </a>
    </header>
  )
}
