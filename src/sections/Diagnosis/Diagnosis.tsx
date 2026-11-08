import { useState } from 'react'
import { PiWhatsappLogoBold } from 'react-icons/pi'
import { useNiche } from '@/app/NicheProvider'
import { ActionLink } from '@/components/ui/ActionLink'
import './Diagnosis.css'

/** O visitante escreve a própria mensagem preenchendo as lacunas de uma frase. */
export function Diagnosis() {
  const { niche } = useNiche()
  const { title, questions, closing, cta } = niche.diagnosis
  const [answers, setAnswers] = useState<(string | null)[]>(() => questions.map(() => null))

  const current = answers.findIndex((answer) => answer === null)
  const done = current === -1
  // Depois de concluída, nenhuma pergunta fica aberta até o visitante clicar em uma lacuna.
  const [editing, setEditing] = useState<number | null>(null)
  const openIndex = editing ?? current

  const choose = (option: string) => {
    setAnswers((list) => list.map((value, i) => (i === openIndex ? option : value)))
    setEditing(null)
  }

  const sentence = questions.map((q, i) => `${q.lead} ${answers[i]}`).join(' ') + '.'
  const whatsapp = `https://wa.me/${niche.brand.whatsapp}?text=${encodeURIComponent(sentence)}`

  return (
    <section className="diagnosis gutter">
      <h2 className="diagnosis__title">{title}</h2>

      <p className="diagnosis__sentence display">
        {questions.map((question, i) => (
          <span key={question.lead}>
            {question.lead}{' '}
            <button
              type="button"
              className="diagnosis__gap"
              data-open={i === openIndex}
              disabled={answers[i] === null && i !== openIndex}
              onClick={() => setEditing(i)}
            >
              {answers[i] ?? '      '}
            </button>{' '}
          </span>
        ))}
      </p>

      <div className="diagnosis__foot" aria-live="polite">
        {openIndex >= 0 ? (
          <div className="diagnosis__options" key={openIndex}>
            {questions[openIndex].options.map((option) => (
              <button key={option} type="button" className="diagnosis__option" onClick={() => choose(option)}>
                {option}
              </button>
            ))}
          </div>
        ) : (
          done && (
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <p className="max-w-[38ch]">{closing}</p>
              <ActionLink href={whatsapp} external>
                <span className="inline-flex items-center gap-2">
                  <PiWhatsappLogoBold aria-hidden="true" />
                  {cta}
                </span>
              </ActionLink>
            </div>
          )
        )}
      </div>
    </section>
  )
}
