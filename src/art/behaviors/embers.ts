import type { Behavior } from '../types'

/** Restaurante: brasas sobem e desviam do ponteiro. */
export const embers: Behavior = () => {
  const sparks = Array.from({ length: 220 }, () => ({
    x: Math.random(),
    y: Math.random(),
    size: 1 + Math.random() ** 3 * 9,
    speed: 0.0008 + Math.random() * 0.003,
    phase: Math.random() * 6.28,
  }))

  return ({ ctx, width, height, time, px, py, palette }) => {
    ctx.clearRect(0, 0, width, height)
    ctx.globalCompositeOperation = 'lighter'
    for (const s of sparks) {
      s.y -= s.speed
      if (s.y < -0.05) s.y = 1.05
      let x = s.x * width + Math.sin(time + s.phase) * 26
      const y = s.y * height
      const dx = x - px
      const distance = Math.hypot(dx, y - py)
      if (distance < 200) x += (dx / (distance + 1)) * (200 - distance) * 0.6
      // Quanto mais alto, mais a brasa se apaga.
      ctx.globalAlpha = Math.min(1, s.y * 1.4) * (0.55 + Math.sin(time * 5 + s.phase) * 0.35)
      ctx.fillStyle = s.size > 4 ? palette.accent : palette.accent2
      ctx.beginPath()
      ctx.arc(x, y, s.size, 0, 6.28)
      ctx.fill()
    }
    ctx.globalAlpha = 1
    ctx.globalCompositeOperation = 'source-over'
  }
}
