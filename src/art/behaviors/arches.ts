import type { Behavior } from '../types'

/** Arquitetura: uma fachada de vãos que se abrem perto do ponteiro. */
export const arches: Behavior = () => {
  return ({ ctx, width, height, time, px, py, palette }) => {
    ctx.clearRect(0, 0, width, height)
    const cell = Math.max(70, width / 14)
    const rows = Math.ceil(height / (cell * 1.5)) + 1
    const cols = Math.ceil(width / cell) + 1

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cx = c * cell + cell / 2
        const cy = r * cell * 1.5 + cell * 0.75
        const near = Math.exp(-((cx - px) ** 2 + (cy - py) ** 2) / 70000)
        const breath = (Math.sin(time * 0.6 + c * 0.5 + r * 0.8) + 1) * 0.1
        const open = Math.min(1, 0.1 + breath + near * 1.1)
        const w = cell * 0.82 * open
        const h = cell * 1.3 * open
        const bottom = cy + (cell * 1.3) / 2
        ctx.beginPath()
        ctx.moveTo(cx - w / 2, bottom)
        ctx.lineTo(cx - w / 2, bottom - h + w / 2)
        ctx.arc(cx, bottom - h + w / 2, w / 2, Math.PI, 0)
        ctx.lineTo(cx + w / 2, bottom)
        ctx.closePath()
        ctx.fillStyle = near > 0.5 ? palette.accent2 : palette.accent
        ctx.globalAlpha = 0.28 + near * 0.72
        ctx.fill()
      }
    }
    ctx.globalAlpha = 1
  }
}
