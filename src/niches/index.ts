import { brasa } from './brasa'
import { foro } from './foro'
import { lume } from './lume'
import { tinta } from './tinta'
import type { Niche, NicheId } from './types'
import { vao } from './vao'

/** Para criar um nicho: copie um arquivo desta pasta e registre-o aqui. */
export const niches: Record<NicheId, Niche> = { brasa, foro, vao, lume, tinta }

export const nicheList = Object.values(niches)
