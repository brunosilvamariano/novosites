import type { Theme } from '@/niches/types'

const loaded = new Set<string>()

/** Quanto tempo esperar pela fonte antes de seguir com a fonte alternativa. */
const FONT_TIMEOUT_MS = 1800

/**
 * Baixa as fontes de um tema somente quando ele é usado
 * e resolve quando estão prontas (ou quando o tempo limite acaba).
 */
export function loadThemeFonts(theme: Theme): Promise<unknown> {
  if (!loaded.has(theme.fontsQuery)) {
    loaded.add(theme.fontsQuery)
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = `https://fonts.googleapis.com/css2?${theme.fontsQuery}&display=swap`
    document.head.appendChild(link)
  }

  const ready = new Promise<void>((resolve) => {
    const check = () =>
      Promise.all([
        document.fonts.load(`${theme.displayWeight} 64px ${theme.fontDisplay.split(',')[0]}`),
        document.fonts.load(`400 18px ${theme.fontBody.split(',')[0]}`),
      ]).then((faces) => (faces.every((f) => f.length) ? resolve() : setTimeout(check, 80)))
    check()
  })

  return Promise.race([ready, new Promise((r) => setTimeout(r, FONT_TIMEOUT_MS))])
}
