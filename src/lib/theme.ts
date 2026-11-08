import type { Theme } from '@/niches/types'

/** Publica o tema do nicho como variáveis CSS em <html>. */
export function applyTheme(theme: Theme) {
  const vars: Record<string, string> = {
    '--bg': theme.bg,
    '--fg': theme.fg,
    '--accent': theme.accent,
    '--on-accent': theme.onAccent,
    '--accent2': theme.accent2,
    '--font-display-family': theme.fontDisplay,
    '--font-body-family': theme.fontBody,
    '--display-weight': String(theme.displayWeight),
    '--display-case': theme.displayCase,
    '--display-tracking': theme.displayTracking,
    '--display-leading': String(theme.displayLeading),
    '--display-variation': theme.displayVariation,
    '--radius': theme.radius,
  }
  const root = document.documentElement
  Object.entries(vars).forEach(([key, value]) => root.style.setProperty(key, value))
}
