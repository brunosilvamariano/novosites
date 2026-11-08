import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registro único do plugin. Sempre importe gsap e ScrollTrigger deste arquivo.
gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }
