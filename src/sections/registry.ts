import type { ComponentType } from 'react'
import { Contrast } from './Contrast/Contrast'
import { Diagnosis } from './Diagnosis/Diagnosis'
import { Finale } from './Finale/Finale'
import { Manifesto } from './Manifesto/Manifesto'
import { Method } from './Method/Method'
import { Opening } from './Opening/Opening'
import { Services } from './Services/Services'
import { Works } from './Works/Works'

/** Catálogo de seções. A ordem real fica em config/site.ts. */
export const sectionRegistry = {
  opening: Opening,
  manifesto: Manifesto,
  services: Services,
  works: Works,
  method: Method,
  contrast: Contrast,
  diagnosis: Diagnosis,
  finale: Finale,
} satisfies Record<string, ComponentType>

export type SectionId = keyof typeof sectionRegistry
