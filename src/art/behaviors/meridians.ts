import type { Behavior } from '../types'

/** Advocacia: linhas paralelas que se curvam, como pesos em uma balança. */
export const meridians: Behavior = () => {
  const LINES = 44
  const STEP = 14

  return ({ ctx, width, height, time, px, py, palette }) => {
    ctx.clearRect(0, 0, width, height)
    for (let l = 0; l <= LINES; l++) {
      const base = (l / LINES) * height
      const highlighted = l === 22
      ctx.beginPath()
      for (let x = 0; x <= width + STEP; x += STEP) {
        const wave = Math.sin(x * 0.004 + time * 0.5 + l * 0.14) * 14
        const pull = Math.exp(-((x - px) ** 2 + (base - py) ** 2) / 42000) * 90
        const y = base + wave + (base < py ? -pull : pull)
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.strokeStyle = highlighted ? palette.accent : palette.fg
      ctx.globalAlpha = highlighted ? 1 : 0.2
      ctx.lineWidth = highlighted ? 2.5 : 1
      ctx.stroke()
    }
    ctx.globalAlpha = 1
  }
}
