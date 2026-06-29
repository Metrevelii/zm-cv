import { SkillBadge } from '../skill-badge'

export type SkillCategory = {
  title: string
  items: string[]
}

export function SkillGroup({ title, items }: SkillCategory) {
  return (
    <div>
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <SkillBadge key={item}>{item}</SkillBadge>
        ))}
      </div>
    </div>
  )
}
