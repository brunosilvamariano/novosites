import type { ArtKind } from '@/niches/types'
import type { Behavior } from '../types'
import { arches } from './arches'
import { blooms } from './blooms'
import { embers } from './embers'
import { ink } from './ink'
import { meridians } from './meridians'

export const behaviors: Record<ArtKind, Behavior> = { embers, meridians, arches, blooms, ink }
