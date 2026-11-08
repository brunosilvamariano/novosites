import type { Behavior } from '../types'

/** Tatuagem: fios de tinta seguem um campo de fluxo e giram em torno do ponteiro. */
export const ink: Behavior = () => {
  const strands = Array.from({ length: 80 }, (_, i) => ({ seed: i * 0.37, offset: i / 80 }))
  const SEGMENTS = 70
  const STEP = 13

  return ({ ctx, width, height, time, px, py, palette }) => {
    ctx.clearRect(0, 0, width, height)
    ctx.lineCap = 'round'
    strands.forEach((s, index) => {
      let x = s.offset * width * 1.2 - width * 0.1
      let y = -20
      ctx.beginPath()
      ctx.moveTo(x, y)
      for (let n = 0; n < SEGMENTS; n++) {
        let angle = 1.57 + Math.sin(x * 0.005 + time * 0.25 + s.seed) * 0.9 + Math.cos(y * 0.006 - time * 0.2) * 0.7
        const dx = x - px
        const dy = y - py
        const distance = Math.hypot(dx, dy)
        if (distance < 240) angle += ((240 - distance) / 240) * 2.2
        x += Math.cos(angle) * STEP
        y += Math.sin(angle) * STEP
        ctx.lineTo(x, y)
      }
      ctx.strokeStyle = index % 11 === 0 ? palette.accent2 : palette.fg
      ctx.lineWidth = index % 5 === 0 ? 5 : 1.4
      ctx.stroke()
    })
  }
}
