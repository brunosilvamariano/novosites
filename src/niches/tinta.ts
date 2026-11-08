import { PiDrop, PiEyedropper, PiPenNib, PiPencilLine, PiSkull } from 'react-icons/pi'
import type { Niche } from './types'

export const tinta: Niche = {
  id: 'tinta',
  label: 'Tatuagem',
  icon: PiSkull,
  art: 'ink',
  theme: {
    bg: '#ff2d78', fg: '#000000', accent: '#000000', onAccent: '#fff200', accent2: '#fff200',
    fontDisplay: "'Dela Gothic One', sans-serif", fontBody: "'Schibsted Grotesk', sans-serif",
    fontsQuery: 'family=Dela+Gothic+One&family=Schibsted+Grotesk:wght@400..900',
    displayWeight: 400, displayCase: 'uppercase', displayTracking: '-0.02em', displayLeading: 0.95,
    displayVariation: 'normal', radius: '999px', heroLayout: 'stair',
  },
  brand: { name: 'Tinta Crua', whatsapp: '5500000000000', email: 'agenda@tintacrua.exemplo', address: 'Sua galeria, 000, sua cidade', social: '@tintacrua' },
  opening: {
    title: ['Pele não', 'tem botão', 'desfazer'],
    lead: 'Desenhos autorais feitos uma única vez, para uma única pessoa.',
    cta: 'Mandar minha ideia',
  },
  manifesto: 'Não copiamos foto da internet e não repetimos desenho. Se a sua ideia não funcionar na pele daqui a vinte anos, vamos dizer na sua cara e desenhar outra até ficar certa.',
  services: {
    title: 'Escolha a sua agulha',
    list: [
      { title: 'Autoral', text: 'Um desenho criado do zero a partir da sua história.', items: ['Sessão de criação', 'Desenho exclusivo', 'Ajustes ilimitados'], icon: PiPenNib },
      { title: 'Blackwork', text: 'Preto sólido, contraste alto e linhas que envelhecem bem.', items: ['Fechamentos', 'Ornamental', 'Geométrico'], icon: PiDrop },
      { title: 'Cobertura', text: 'Aquela tatuagem antiga vira outra coisa, sem vestígio.', items: ['Avaliação presencial', 'Estudo de sobreposição', 'Plano por sessão'], icon: PiEyedropper },
      { title: 'Flash', text: 'Desenhos prontos da parede, tatuados no mesmo dia.', items: ['Dias de flash', 'Peças únicas', 'Sem agendamento'], icon: PiPencilLine },
    ],
  },
  works: {
    title: 'Saíram daqui e não voltam mais',
    list: [
      { title: 'Serpente', note: 'Blackwork, antebraço' }, { title: 'Mandíbula', note: 'Autoral, costela' },
      { title: 'Cardo', note: 'Cobertura, ombro' }, { title: 'Relâmpago', note: 'Flash, tornozelo' },
      { title: 'Espinha', note: 'Autoral, costas' },
    ],
  },
  method: {
    title: 'Da ideia à cicatrização',
    steps: [
      { title: 'Ideia', text: 'Você manda referências e a gente discute sem filtro.' },
      { title: 'Risco', text: 'Desenhamos para o seu corpo, não para uma folha.' },
      { title: 'Agulha', text: 'Sessão com material descartável e tempo de sobra.' },
      { title: 'Cura', text: 'Acompanhamos a cicatrização e retocamos se precisar.' },
    ],
  },
  contrast: {
    title: 'Arraste e escolha',
    withoutLabel: 'Tatuagem de impulso', withLabel: 'Tatuagem na Tinta',
    without: ['Foto do Pinterest', 'Traço que borra', 'Tamanho errado', 'Arrependimento'],
    with: ['Desenho exclusivo', 'Linha que envelhece bem', 'Feita para o seu corpo', 'Orgulho em vinte anos'],
  },
  diagnosis: {
    title: 'Conte a ideia em três toques',
    questions: [
      { lead: 'Quero uma', options: ['peça autoral', 'cobertura', 'tatuagem flash'] },
      { lead: 'no', options: ['braço', 'tronco', 'lugar que ainda vou decidir'] },
      { lead: 'em tamanho', options: ['pequeno', 'médio', 'fechamento completo'] },
    ],
    closing: 'A frase acima já é o seu orçamento pedido.',
    cta: 'Enviar pelo WhatsApp',
  },
  finale: { line: 'A agenda abre uma vez por mês.', cta: 'Entrar na agenda' },
}
