import type { ReactNode } from 'react'
import { PiArrowUpRightBold } from 'react-icons/pi'
import './ActionLink.css'

interface ActionLinkProps {
  href: string
  children: ReactNode
  external?: boolean
}

/** Botão principal: o ícone desliza e troca de lugar no hover. */
export function ActionLink({ href, children, external }: ActionLinkProps) {
  return (
    <a
      href={href}
      className="action"
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span>{children}</span>
      <span className="action__icon" aria-hidden="true">
        <PiArrowUpRightBold />
        <PiArrowUpRightBold />
      </span>
    </a>
  )
}
