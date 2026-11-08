import { useLayoutEffect } from 'react'
import { Cursor } from '@/components/layout/Cursor'
import { Header } from '@/components/layout/Header'
import { NicheDock } from '@/components/layout/NicheDock'
import { site } from '@/config/site'
import { ScrollTrigger } from '@/lib/gsap'
import { sectionRegistry } from '@/sections/registry'
import { NicheProvider, useNiche } from './NicheProvider'

/** Monta as seções na ordem de config/site.ts. */
function Page() {
  const { niche } = useNiche()

  // As seções criam seus gatilhos antes deste efeito, então a medição fica correta.
  useLayoutEffect(() => {
    ScrollTrigger.refresh()
  }, [niche.id])

  return (
    <>
      <Header />
      {/* A key recria as seções a cada nicho, com animações limpas. */}
      <main key={niche.id}>
        {site.sections.map((id) => {
          const Section = sectionRegistry[id]
          return <Section key={id} />
        })}
      </main>
      {site.showNicheDock && <NicheDock />}
      <Cursor />
    </>
  )
}

export function App() {
  return (
    <NicheProvider>
      <Page />
    </NicheProvider>
  )
}
