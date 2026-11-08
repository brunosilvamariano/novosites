import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '@/lib/motion'
import type { Niche } from '@/niches/types'
import { behaviors } from './behaviors'

/** Canvas da arte viva. Só desenha enquanto está visível na tela. */
export function LiveForm({ niche }: { niche: Niche }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const { fg, accent, accent2 } = niche.theme
    const draw = behaviors[niche.art]()
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 }
    let width = 0
    let height = 0
    let frameId = 0
    let visible = true

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      pointer.tx ||= width * 0.68
      pointer.ty ||= height * 0.42
      pointer.x ||= pointer.tx
      pointer.y ||= pointer.ty
      paint(performance.now())
    }

    const paint = (now: number) => {
      pointer.x += (pointer.tx - pointer.x) * 0.09
      pointer.y += (pointer.ty - pointer.y) * 0.09
      draw({ ctx, width, height, time: now / 1000, px: pointer.x, py: pointer.y, palette: { fg, accent, accent2 } })
    }

    const loop = (now: number) => {
      if (visible) paint(now)
      frameId = requestAnimationFrame(loop)
    }

    const onMove = (event: PointerEvent) => {
      const box = canvas.getBoundingClientRect()
      pointer.tx = event.clientX - box.left
      pointer.ty = event.clientY - box.top
    }

    const sizeObserver = new ResizeObserver(resize)
    sizeObserver.observe(canvas)
    const viewObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    viewObserver.observe(canvas)
    window.addEventListener('pointermove', onMove)
    resize()
    if (!prefersReducedMotion()) frameId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frameId)
      sizeObserver.disconnect()
      viewObserver.disconnect()
      window.removeEventListener('pointermove', onMove)
    }
  }, [niche])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
