import type { Behavior } from '../types'

/** Clínica: halos de luz suaves, um deles segue o ponteiro. */
export const blooms: Behavior = () => {
  const halos = Array.from({ length: 7 }, (_, i) => ({
    ax: 0.15 + (i * 0.73) % 0.8,
    ay: 0.2 + (i * 0.41) % 0.7,
    phase: i * 1.7,
    radius: 0.22 + (i % 3) * 0.1,
  }))

  return ({ ctx, width, height, time, px, py, palette }) => {
    ctx.clearRect(0, 0, width, height)
    const unit = Math.max(width, height)

    const halo = (x: number, y: number, radius: number, color: string) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      gradient.addColorStop(0, color)
      gradient.addColorStop(1, `${color}00`)
      ctx.fillStyle = gradient
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2)
    }

    halos.forEach((h, i) => {
      halo(
        (h.ax + Math.sin(time * 0.25 + h.phase) * 0.08) * width,
        (h.ay + Math.cos(time * 0.2 + h.phase) * 0.08) * height,
        h.radius * unit,
        i % 2 ? palette.accent2 : '#ffffff',
      )
    })
    halo(px, py, unit * 0.2, palette.accent2)
  }
}
