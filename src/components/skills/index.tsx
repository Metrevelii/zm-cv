import { SectionTitle } from '../section-title'
import { SkillBadge } from '../skill-badge'

type SkillsProps = {
  skills: string[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section>
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill}>{skill}</SkillBadge>
        ))}
      </div>
    </section>
  )
}
