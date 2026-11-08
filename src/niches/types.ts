import type { IconType } from 'react-icons'

export type NicheId = 'brasa' | 'foro' | 'vao' | 'lume' | 'tinta'

/** Arte generativa usada no Opening e nos pôsteres de Works. */
export type ArtKind = 'embers' | 'meridians' | 'arches' | 'blooms' | 'ink'

export interface Theme {
  bg: string
  fg: string
  accent: string
  /** Cor de texto legível sobre `accent`. */
  onAccent: string
  accent2: string
  fontDisplay: string
  fontBody: string
  /** Trecho `family=` da URL do Google Fonts. */
  fontsQuery: string
  displayWeight: number
  displayCase: 'none' | 'uppercase' | 'lowercase'
  displayTracking: string
  displayLeading: number
  /** Valor de font-variation-settings do título, quando a fonte permite. */
  displayVariation: string
  /** Raio dos elementos grandes. */
  radius: string
  /** Composição do título de abertura. */
  heroLayout: 'base' | 'center' | 'stair'
}

export interface Service {
  title: string
  text: string
  items: string[]
  icon: IconType
}

export interface Work {
  title: string
  note: string
}

export interface Step {
  title: string
  text: string
}

export interface DiagnosisQuestion {
  /** Texto fixo antes da lacuna da frase. */
  lead: string
  options: string[]
}

export interface Niche {
  id: NicheId
  /** Nome curto no seletor de nichos. */
  label: string
  icon: IconType
  art: ArtKind
  theme: Theme
  brand: { name: string; whatsapp: string; email: string; address: string; social: string }
  opening: { title: string[]; lead: string; cta: string }
  manifesto: string
  services: { title: string; list: Service[] }
  works: { title: string; list: Work[] }
  method: { title: string; steps: Step[] }
  contrast: { title: string; withoutLabel: string; withLabel: string; without: string[]; with: string[] }
  diagnosis: { title: string; questions: DiagnosisQuestion[]; closing: string; cta: string }
  finale: { line: string; cta: string }
}
