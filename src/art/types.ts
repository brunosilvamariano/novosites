export interface ArtPalette {
  fg: string
  accent: string
  accent2: string
}

export interface ArtFrame {
  ctx: CanvasRenderingContext2D
  width: number
  height: number
  /** Tempo em segundos. */
  time: number
  /** Posição suavizada do ponteiro, em pixels. */
  px: number
  py: number
  palette: ArtPalette
}

/** Uma arte generativa: cria o estado e devolve a função que desenha cada quadro. */
export type Behavior = () => (frame: ArtFrame) => void
