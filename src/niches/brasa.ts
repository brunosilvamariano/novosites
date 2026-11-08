import { PiCallBell, PiChefHat, PiCookingPot, PiFire, PiWine } from 'react-icons/pi'
import type { Niche } from './types'

export const brasa: Niche = {
  id: 'brasa',
  label: 'Restaurante',
  icon: PiFire,
  art: 'embers',
  theme: {
    bg: '#4a0e12', fg: '#ffe7c2', accent: '#ff6a13', onAccent: '#2b0508', accent2: '#f7c23c',
    fontDisplay: "'Bricolage Grotesque', sans-serif", fontBody: "'Onest', sans-serif",
    fontsQuery: 'family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&family=Onest:wght@400..700',
    displayWeight: 800, displayCase: 'none', displayTracking: '-0.03em', displayLeading: 0.86,
    displayVariation: "'wdth' 75, 'opsz' 96", radius: '28px', heroLayout: 'base',
  },
  brand: { name: 'Brasa Alta', whatsapp: '5500000000000', email: 'reservas@brasaalta.exemplo', address: 'Sua rua, 000, sua cidade', social: '@brasaalta' },
  opening: {
    title: ['Tudo aqui', 'passou', 'pelo fogo'],
    lead: 'Doze lugares, uma parrilha de quatro metros e um menu que muda com o que chegou da roça.',
    cta: 'Reservar um lugar no balcão',
  },
  manifesto: 'Não temos freezer. Temos um fogo aceso desde as quatro da tarde, um produtor que liga quando a colheita está boa e uma cozinha aberta, porque ninguém aqui tem nada a esconder.',
  services: {
    title: 'Quatro jeitos de sentar à mesa',
    list: [
      { title: 'Balcão', text: 'Sete tempos servidos pelas mãos de quem cozinhou.', items: ['Sete tempos', 'Harmonização opcional', 'Duas sessões por noite'], icon: PiChefHat },
      { title: 'Salão', text: 'Pratos para dividir, saídos direto da grelha.', items: ['Cortes na brasa', 'Vegetais defumados', 'Mesas de até seis'], icon: PiCookingPot },
      { title: 'Adega', text: 'Rótulos de pequenos produtores, servidos em taça.', items: ['Vinhos naturais', 'Taças do dia', 'Visita à adega'], icon: PiWine },
      { title: 'Casa fechada', text: 'O restaurante inteiro para a sua noite.', items: ['Até trinta convidados', 'Menu desenhado junto', 'Fogo na calçada'], icon: PiCallBell },
    ],
  },
  works: {
    title: 'O que saiu da grelha esta semana',
    list: [
      { title: 'Abóbora na cinza', note: 'Tahine e mel de cacau' }, { title: 'Costela doze horas', note: 'Farofa de banana' },
      { title: 'Cebola queimada', note: 'Queijo curado da serra' }, { title: 'Peixe na folha', note: 'Limão-cravo tostado' },
      { title: 'Pêssego na brasa', note: 'Sorvete de fumaça' },
    ],
  },
  method: {
    title: 'O caminho de um prato',
    steps: [
      { title: 'Colheita', text: 'O produtor avisa o que está no ponto e o menu nasce dali.' },
      { title: 'Lenha', text: 'Laranjeira e goiabeira, escolhidas para cada ingrediente.' },
      { title: 'Fogo', text: 'Horas de brasa baixa, sem pressa e sem atalho.' },
      { title: 'Mesa', text: 'Do fogo para a sua frente em menos de um minuto.' },
    ],
  },
  contrast: {
    title: 'Arraste e sinta o cheiro',
    withoutLabel: 'Jantar de sempre', withLabel: 'Noite na Brasa',
    without: ['Cardápio plastificado', 'Prato do congelador', 'Cozinha escondida', 'Conta e tchau'],
    with: ['Menu escrito hoje', 'Ingrediente colhido ontem', 'Fogo na sua frente', 'Cozinheiro na sua mesa'],
  },
  diagnosis: {
    title: 'Peça sua mesa em três toques',
    questions: [
      { lead: 'Quero uma noite no', options: ['balcão', 'salão', 'restaurante inteiro'] },
      { lead: 'para', options: ['duas pessoas', 'até seis pessoas', 'um grupo grande'] },
      { lead: 'de preferência', options: ['nesta semana', 'no próximo fim de semana', 'em uma data especial'] },
    ],
    closing: 'A frase acima já é o seu pedido de reserva.',
    cta: 'Enviar pelo WhatsApp',
  },
  finale: { line: 'O fogo acende às dezesseis horas.', cta: 'Garantir a reserva' },
}
