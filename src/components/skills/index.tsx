import { SectionTitle } from '../section-title'
import { SkillGroup, type SkillCategory } from '../skill-group'

type SkillsProps = {
  categories: SkillCategory[]
}

export function Skills({ categories }: SkillsProps) {
  return (
    <section>
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="space-y-5">
        {categories.map((category) => (
          <SkillGroup key={category.title} {...category} />
        ))}
      </div>
    </section>
  )
}
