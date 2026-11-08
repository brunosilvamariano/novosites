import { PiBank, PiBuildings, PiFileText, PiHandshake, PiScales } from 'react-icons/pi'
import type { Niche } from './types'

export const foro: Niche = {
  id: 'foro',
  label: 'Advocacia',
  icon: PiScales,
  art: 'meridians',
  theme: {
    bg: '#12224f', fg: '#eef0e3', accent: '#d8e34a', onAccent: '#12224f', accent2: '#8fa8ff',
    fontDisplay: "'Kalnia', serif", fontBody: "'Instrument Sans', sans-serif",
    fontsQuery: 'family=Kalnia:wdth,wght@100..125,100..700&family=Instrument+Sans:wght@400..700',
    displayWeight: 300, displayCase: 'none', displayTracking: '-0.02em', displayLeading: 1,
    displayVariation: "'wdth' 125", radius: '2px', heroLayout: 'center',
  },
  brand: { name: 'Foro Norte', whatsapp: '5500000000000', email: 'contato@foronorte.exemplo', address: 'Sua avenida, 000, sua cidade', social: '@foronorte' },
  opening: {
    title: ['Antes do', 'processo,', 'a estratégia'],
    lead: 'Advocacia empresarial para quem prefere resolver o conflito antes que ele vire ação.',
    cta: 'Agendar uma análise do caso',
  },
  manifesto: 'A melhor peça que escrevemos é aquela que nunca precisou ser protocolada. Lemos o contrato antes da crise, conversamos com o outro lado antes do juiz e dizemos com clareza quando não vale a pena brigar.',
  services: {
    title: 'Onde costumamos ser chamados',
    list: [
      { title: 'Contratos', text: 'Cláusulas escritas pensando no dia em que tudo der errado.', items: ['Revisão de risco', 'Acordos de sócios', 'Negociação assistida'], icon: PiFileText },
      { title: 'Societário', text: 'Entrada, saída e sucessão sem paralisar a empresa.', items: ['Reorganização', 'Fusões e aquisições', 'Governança familiar'], icon: PiBuildings },
      { title: 'Tributário', text: 'Teses sólidas, sem aposta com o caixa do cliente.', items: ['Planejamento', 'Defesa em autuações', 'Recuperação de créditos'], icon: PiBank },
      { title: 'Mediação', text: 'Mesa de acordo conduzida com método e prazo.', items: ['Conflitos entre sócios', 'Disputas comerciais', 'Arbitragem'], icon: PiHandshake },
    ],
  },
  works: {
    title: 'Situações que já atravessamos',
    list: [
      { title: 'Saída de sócio', note: 'Empresa familiar' }, { title: 'Autuação fiscal', note: 'Indústria' },
      { title: 'Compra de operação', note: 'Varejo' }, { title: 'Disputa de marca', note: 'Tecnologia' },
      { title: 'Sucessão em vida', note: 'Agronegócio' },
    ],
  },
  method: {
    title: 'Como conduzimos um caso',
    steps: [
      { title: 'Leitura', text: 'Analisamos documentos e riscos antes de qualquer promessa.' },
      { title: 'Mapa', text: 'Você recebe os cenários possíveis, com custo e prazo de cada um.' },
      { title: 'Movimento', text: 'Negociamos ou litigamos conforme o caminho escolhido.' },
      { title: 'Blindagem', text: 'Ajustamos contratos para o problema não voltar.' },
    ],
  },
  contrast: {
    title: 'Arraste e compare',
    withoutLabel: 'Assessoria comum', withLabel: 'Foro Norte',
    without: ['Juridiquês em PDF', 'Prazo incerto', 'Honorário aberto', 'Reação à crise'],
    with: ['Resposta em português', 'Cenários com datas', 'Valor definido por fase', 'Prevenção por contrato'],
  },
  diagnosis: {
    title: 'Descreva o seu caso em três toques',
    questions: [
      { lead: 'Preciso de ajuda com', options: ['um contrato', 'uma questão societária', 'um problema tributário'] },
      { lead: 'em uma empresa', options: ['em início de operação', 'em crescimento', 'já consolidada'] },
      { lead: 'e a urgência é', options: ['imediata', 'para este mês', 'preventiva'] },
    ],
    closing: 'A frase acima já é o resumo do seu caso. As conversas são sigilosas.',
    cta: 'Enviar pelo WhatsApp',
  },
  finale: { line: 'Fale conosco antes de assinar.', cta: 'Agendar uma análise' },
}
