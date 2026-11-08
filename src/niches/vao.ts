import { PiCompassTool, PiCube, PiHouseLine, PiLampPendant, PiStairs } from 'react-icons/pi'
import type { Niche } from './types'

export const vao: Niche = {
  id: 'vao',
  label: 'Arquitetura',
  icon: PiStairs,
  art: 'arches',
  theme: {
    bg: '#c3c9c6', fg: '#000000', accent: '#1f3bff', onAccent: '#ffffff', accent2: '#ff4a1c',
    fontDisplay: "'Syne', sans-serif", fontBody: "'Familjen Grotesk', sans-serif",
    fontsQuery: 'family=Syne:wght@400..800&family=Familjen+Grotesk:wght@400..700',
    displayWeight: 800, displayCase: 'lowercase', displayTracking: '-0.04em', displayLeading: 0.92,
    displayVariation: 'normal', radius: '0px', heroLayout: 'stair',
  },
  brand: { name: 'Atelier Vão', whatsapp: '5500000000000', email: 'contato@ateliervao.exemplo', address: 'Sua rua, 000, sua cidade', social: '@ateliervao' },
  opening: {
    title: ['o espaço', 'que falta', 'na sua casa'],
    lead: 'Projetos residenciais que começam pela luz da manhã, não pela planta baixa.',
    cta: 'Conversar sobre um projeto',
  },
  manifesto: 'Uma casa boa não aparece na foto. Ela aparece às sete da manhã, quando o sol chega na mesa certa, e às onze da noite, quando ninguém precisa acender a luz do corredor.',
  services: {
    title: 'Do terreno vazio à chave na mão',
    list: [
      { title: 'Casas novas', text: 'Estudamos insolação, vento e rotina antes do primeiro traço.', items: ['Estudo de terreno', 'Projeto executivo', 'Maquete física'], icon: PiHouseLine },
      { title: 'Reformas', text: 'Abrimos o que está fechado sem perder a história do imóvel.', items: ['Levantamento a laser', 'Demolição planejada', 'Cronograma por etapa'], icon: PiCompassTool },
      { title: 'Interiores', text: 'Marcenaria desenhada para o que você realmente guarda.', items: ['Marcenaria sob medida', 'Curadoria de peças', 'Projeto de iluminação'], icon: PiLampPendant },
      { title: 'Obra assistida', text: 'Uma pessoa nossa no canteiro, toda semana, até a entrega.', items: ['Visitas semanais', 'Controle de custo', 'Relatório com fotos'], icon: PiCube },
    ],
  },
  works: {
    title: 'Casas que aprenderam a respirar',
    list: [
      { title: 'Casa Pátio', note: 'Reforma, 210 m²' }, { title: 'Casa Telha', note: 'Construção, 340 m²' },
      { title: 'Apartamento Eixo', note: 'Interiores, 95 m²' }, { title: 'Casa Sombra', note: 'Construção, 280 m²' },
      { title: 'Loft Galpão', note: 'Reforma, 160 m²' },
    ],
  },
  method: {
    title: 'Quatro etapas até a entrega',
    steps: [
      { title: 'Escuta', text: 'Passamos um dia acompanhando como você vive hoje.' },
      { title: 'Estudo', text: 'Você recebe três caminhos em maquete, com custo estimado.' },
      { title: 'Projeto', text: 'Detalhamos cada encontro de materiais antes de ir para a obra.' },
      { title: 'Obra', text: 'Acompanhamos o canteiro até a última tomada funcionar.' },
    ],
  },
  contrast: {
    title: 'Arraste e veja a diferença',
    withoutLabel: 'Projeto de catálogo', withLabel: 'Projeto do Vão',
    without: ['Planta repetida', 'Luz acesa ao meio-dia', 'Armário que não fecha', 'Aditivo surpresa'],
    with: ['Planta da sua rotina', 'Sol onde você precisa', 'Marcenaria no milímetro', 'Custo fechado por etapa'],
  },
  diagnosis: {
    title: 'Monte o seu pedido em três toques',
    questions: [
      { lead: 'Quero', options: ['construir do zero', 'reformar um imóvel', 'refazer os interiores'] },
      { lead: 'um espaço de', options: ['até 100 m²', '100 a 300 m²', 'mais de 300 m²'] },
      { lead: 'começando', options: ['neste trimestre', 'em seis meses', 'quando o projeto estiver pronto'] },
    ],
    closing: 'A frase acima já é a sua primeira mensagem para nós.',
    cta: 'Enviar pelo WhatsApp',
  },
  finale: { line: 'Traga o terreno. Ou só a vontade.', cta: 'Marcar uma visita' },
}
