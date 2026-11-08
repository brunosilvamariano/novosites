import { useNiche } from '@/app/NicheProvider'
import { nicheList } from '@/niches'
import './NicheDock.css'

/** Seletor que transforma o site inteiro. Desligue em config/site.ts. */
export function NicheDock() {
  const { niche, changeNiche } = useNiche()

  return (
    <nav className="dock" aria-label="Ver o template em outro nicho">
      {nicheList.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          className="dock__item"
          aria-pressed={niche.id === id}
          onClick={() => changeNiche(id)}
        >
          <Icon aria-hidden="true" size={20} />
          <span className="dock__label">{label}</span>
        </button>
      ))}
    </nav>
  )
}
