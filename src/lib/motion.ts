export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Verdadeiro em dispositivos com mouse ou trackpad. */
export const hasFinePointer = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches

/** Consulta que liga as cenas presas ao scroll. */
export const SCENE_QUERY = '(min-width: 900px) and (prefers-reduced-motion: no-preference)'
