import type { ReactNode } from 'react'

type SkillBadgeProps = {
  children: ReactNode
}

export function SkillBadge({ children }: SkillBadgeProps) {
  return (
    <span className="rounded bg-slate-100 px-3 py-1 text-sm text-slate-700">
      {children}
    </span>
  )
}
