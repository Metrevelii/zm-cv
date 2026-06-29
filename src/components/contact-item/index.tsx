import type { ReactNode } from 'react'

type ContactItemProps = {
  icon: ReactNode
  children: ReactNode
}

export function ContactItem({ icon, children }: ContactItemProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="shrink-0 text-white">{icon}</span>
      <span>{children}</span>
    </div>
  )
}
