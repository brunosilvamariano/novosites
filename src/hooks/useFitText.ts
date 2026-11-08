import { useLayoutEffect, useRef } from 'react'

interface FitOptions {
  /** Altura máxima do bloco, como fração da janela. */
  maxHeight?: number
  /** Fração da largura reservada, por exemplo para a escada do título. */
  reserve?: number
}

/**
 * Ajusta o corpo do texto para a linha mais longa (.fit-line) ocupar toda a largura.
 * Isso permite trocar de fonte, por mais larga que seja, sem estourar o layout.
 */
export function useFitText<T extends HTMLElement>({ maxHeight = 0.7, reserve = 0 }: FitOptions = {}) {
  const ref = useRef<T>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const fit = () => {
      const lines = [...el.querySelectorAll<HTMLElement>('.fit-line')]
      el.style.fontSize = '100px'
      const widest = Math.max(...lines.map((line) => line.offsetWidth))
      const blockHeight = el.offsetHeight
      const byWidth = (el.clientWidth * (1 - reserve) * 100) / widest
      const byHeight = (window.innerHeight * maxHeight * 100) / blockHeight
      el.style.fontSize = `${Math.floor(Math.min(byWidth, byHeight))}px`
    }

    fit()
    document.fonts.ready.then(fit)
    // Fontes do tema inicial podem chegar depois do `ready`.
    document.fonts.addEventListener('loadingdone', fit)
    const observer = new ResizeObserver(fit)
    observer.observe(el.parentElement ?? el)
    return () => {
      observer.disconnect()
      document.fonts.removeEventListener('loadingdone', fit)
    }
  }, [maxHeight, reserve])

  return ref
}
