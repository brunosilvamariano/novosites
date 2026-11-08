import type { NicheId } from '@/niches/types'
import type { SectionId } from '@/sections/registry'

/**
 * Painel de controle do template.
 * Para entregar a um cliente: escolha o nicho em `defaultNiche`
 * e desligue o seletor em `showNicheDock`.
 */
export const site = {
  /** Nicho exibido ao abrir o site. Pode ser trocado na URL com ?nicho=tinta */
  defaultNiche: 'vao' as NicheId,

  /** Mostra o seletor de nichos no rodapé da tela. Use `false` em sites de clientes. */
  showNicheDock: true,

  /** Ordem das seções. Remova ou reordene livremente. */
  sections: [
    'opening',
    'manifesto',
    'services',
    'works',
    'method',
    'contrast',
    'diagnosis',
    'finale',
  ] as SectionId[],
}
