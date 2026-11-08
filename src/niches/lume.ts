import { PiDrop, PiFlower, PiSparkle, PiSunHorizon, PiSyringe } from 'react-icons/pi'
import type { Niche } from './types'

export const lume: Niche = {
  id: 'lume',
  label: 'Clínica',
  icon: PiFlower,
  art: 'blooms',
  theme: {
    bg: '#e4daff', fg: '#2a1458', accent: '#00725f', onAccent: '#f4fff9', accent2: '#ff9d7d',
    fontDisplay: "'Funnel Display', sans-serif", fontBody: "'Figtree', sans-serif",
    fontsQuery: 'family=Funnel+Display:wght@300..800&family=Figtree:wght@300..900',
    displayWeight: 300, displayCase: 'none', displayTracking: '-0.045em', displayLeading: 0.98,
    displayVariation: 'normal', radius: '48px', heroLayout: 'base',
  },
  brand: { name: 'Lume Derma', whatsapp: '5500000000000', email: 'agenda@lumederma.exemplo', address: 'Sua rua, 000, sua cidade', social: '@lumederma' },
  opening: {
    title: ['Sua pele', 'sem filtro,', 'só saúde'],
    lead: 'Dermatologia que trata primeiro e embeleza como consequência.',
    cta: 'Agendar uma avaliação',
  },
  manifesto: 'Você não vai sair daqui com um rosto novo. Vai sair com um plano claro, feito para a sua pele, e com a liberdade de dizer não para qualquer procedimento que não faça sentido para você.',
  services: {
    title: 'Cuidados que começam pelo diagnóstico',
    list: [
      { title: 'Consulta', text: 'Uma hora inteira para entender a sua pele e a sua rotina.', items: ['Dermatoscopia digital', 'Mapa de manchas', 'Plano por escrito'], icon: PiSunHorizon },
      { title: 'Tratamentos', text: 'Acne, melasma e rosácea com acompanhamento real.', items: ['Protocolos clínicos', 'Retornos programados', 'Fotos de evolução'], icon: PiDrop },
      { title: 'Procedimentos', text: 'Doses pequenas, indicação honesta, resultado natural.', items: ['Toxina botulínica', 'Bioestimuladores', 'Lasers'], icon: PiSyringe },
      { title: 'Rotina', text: 'Só os produtos de que você precisa, nem um a mais.', items: ['Revisão do nécessaire', 'Fórmulas manipuladas', 'Rotina em três passos'], icon: PiSparkle },
    ],
  },
  works: {
    title: 'Protocolos mais procurados',
    list: [
      { title: 'Melasma', note: 'Acompanhamento de 6 meses' }, { title: 'Acne adulta', note: 'Acompanhamento de 4 meses' },
      { title: 'Rosácea', note: 'Controle contínuo' }, { title: 'Fotoenvelhecimento', note: 'Sessões trimestrais' },
      { title: 'Queda capilar', note: 'Acompanhamento de 8 meses' },
    ],
  },
  method: {
    title: 'Sua pele em quatro encontros',
    steps: [
      { title: 'Escuta', text: 'Histórico, rotina e o que realmente incomoda você.' },
      { title: 'Exame', text: 'Dermatoscopia e registro fotográfico para comparar depois.' },
      { title: 'Plano', text: 'Um caminho por escrito, com prazos e custos.' },
      { title: 'Retorno', text: 'Ajustamos o tratamento conforme a pele responde.' },
    ],
  },
  contrast: {
    title: 'Arraste e compare',
    withoutLabel: 'Consulta apressada', withLabel: 'Consulta na Lume',
    without: ['Dez minutos', 'Pacote fechado', 'Doze produtos', 'Sem retorno'],
    with: ['Uma hora inteira', 'Só o que for indicado', 'Rotina em três passos', 'Evolução acompanhada'],
  },
  diagnosis: {
    title: 'Conte o que você busca em três toques',
    questions: [
      { lead: 'Gostaria de cuidar de', options: ['manchas', 'acne', 'sinais do tempo'] },
      { lead: 'e já', options: ['fiz tratamentos antes', 'nunca tratei isso', 'estou em tratamento'] },
      { lead: 'com consulta', options: ['nos próximos dias', 'neste mês', 'em horário a combinar'] },
    ],
    closing: 'A frase acima já é a sua mensagem para a recepção.',
    cta: 'Enviar pelo WhatsApp',
  },
  finale: { line: 'Sua primeira consulta dura uma hora.', cta: 'Agendar agora' },
}
