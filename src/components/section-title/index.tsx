import type { ReactNode } from 'react'

type SectionTitleProps = {
  children: ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="inline-block border-b-2 border-teal-600 pb-1 mb-4 text-lg font-bold uppercase tracking-wide text-teal-600">
      {children}
    </h2>
  )
}
