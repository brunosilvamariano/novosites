import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { Shutter, type ShutterHandle } from '@/components/layout/Shutter'
import { site } from '@/config/site'
import { niches } from '@/niches'
import type { Niche, NicheId } from '@/niches/types'
import { loadThemeFonts } from '@/lib/fonts'
import { applyTheme } from '@/lib/theme'

interface NicheContextValue {
  niche: Niche
  /** Troca de nicho com a transição de persianas. */
  changeNiche: (id: NicheId) => void
}

const NicheContext = createContext<NicheContextValue | null>(null)

/** Lê ?nicho=... da URL e cai no padrão de config/site.ts. */
function initialNiche(): Niche {
  const fromUrl = new URLSearchParams(window.location.search).get('nicho') as NicheId | null
  return (fromUrl && niches[fromUrl]) || niches[site.defaultNiche]
}

export function NicheProvider({ children }: { children: ReactNode }) {
  const [niche, setNiche] = useState(initialNiche)
  const shutter = useRef<ShutterHandle>(null)
  const busy = useRef(false)

  // Aplicado na inicialização para evitar um quadro sem tema.
  useState(() => applyTheme(niche.theme))

  // Abertura: as persianas só saem quando as fontes chegam.
  useEffect(() => {
    loadThemeFonts(niche.theme).then(() => shutter.current?.open())
    // Só na montagem.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeNiche = useCallback((id: NicheId) => {
    const next = niches[id]
    if (busy.current || !next) return
    busy.current = true
    const fonts = loadThemeFonts(next.theme)

    shutter.current?.close(next).then(async () => {
      await fonts
      applyTheme(next.theme)
      setNiche(next)
      // Mantém o link compartilhável sem recarregar a página.
      try {
        window.history.replaceState(null, '', `?nicho=${next.id}`)
      } catch {
        // Ambientes em iframe podem bloquear a alteração da URL; a troca continua valendo.
      }
      await shutter.current?.open()
      busy.current = false
    })
  }, [])

  const value = useMemo(() => ({ niche, changeNiche }), [niche, changeNiche])

  return (
    <NicheContext.Provider value={value}>
      {children}
      <Shutter ref={shutter} initial={niche} />
    </NicheContext.Provider>
  )
}

export function useNiche() {
  const value = useContext(NicheContext)
  if (!value) throw new Error('useNiche precisa estar dentro de NicheProvider')
  return value
}
