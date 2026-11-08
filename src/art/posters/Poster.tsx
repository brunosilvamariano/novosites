import type { ReactElement } from 'react'
import type { ArtKind, Theme } from '@/niches/types'

type Compose = (seed: number, t: Theme) => ReactElement

/* Pôsteres vetoriais usados até o cliente enviar fotos reais. Cada nicho tem sua gramática. */
const compositions: Record<ArtKind, Compose> = {
  embers: (seed, t) => (
    <>
      <rect width="400" height="500" fill={seed % 2 ? t.accent : t.accent2} />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${-20 + seed * 30} ${500 - i * 70} q 220 ${-170 + i * 22} 440 ${seed * 12}`} fill="none" stroke={t.bg} strokeWidth={34 - i * 5} />
      ))}
      <circle cx={120 + seed * 45} cy={130} r={62} fill={t.bg} />
    </>
  ),
  meridians: (seed, t) => (
    <>
      <rect width="400" height="500" fill={seed % 2 ? t.accent2 : t.fg} />
      <path d={`M0 ${240 + seed * 20} L400 ${260 - seed * 20} V500 H0Z`} fill={t.bg} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1={40 + i * 64} y1="40" x2={40 + i * 64} y2={150 + ((seed + i) % 4) * 42} stroke={t.bg} strokeWidth="3" />
      ))}
      <circle cx={200} cy={250} r={38 + seed * 8} fill={t.accent} />
    </>
  ),
  arches: (seed, t) => (
    <>
      <rect width="400" height="500" fill={seed % 2 ? t.accent : t.fg} />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${50 + i * 110} 500 V${250 - ((seed + i) % 3) * 60} a45 45 0 0 1 90 0 V500Z`} fill={i === seed % 3 ? t.accent2 : t.bg} />
      ))}
    </>
  ),
  blooms: (seed, t) => (
    <>
      <rect width="400" height="500" fill={seed % 2 ? '#ffffff' : t.accent2} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <ellipse key={i} cx="200" cy="250" rx={34 + seed * 4} ry="170" fill={t.accent} opacity="0.34" transform={`rotate(${i * 30 + seed * 9} 200 250)`} />
      ))}
      <circle cx="200" cy="250" r="26" fill={t.fg} />
    </>
  ),
  ink: (seed, t) => (
    <>
      <rect width="400" height="500" fill={seed % 2 ? t.accent2 : '#ffffff'} />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${80 + i * 80} -10 C${380 - seed * 60} 150 ${seed * 40} 300 ${320 - i * 80} 510`} fill="none" stroke="#000" strokeWidth={22 - i * 5} />
      ))}
    </>
  ),
}

export function Poster({ art, seed, theme }: { art: ArtKind; seed: number; theme: Theme }) {
  return (
    <svg viewBox="0 0 400 500" className="block h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {compositions[art](seed, theme)}
    </svg>
  )
}
