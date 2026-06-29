import { SectionTitle } from '../section-title'
import { EducationItem, type Education } from '../education-item'

type EducationProps = {
  education: Education[]
}

export function Education({ education }: EducationProps) {
  return (
    <section>
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-8">
        {education.map((entry) => (
          <EducationItem key={`${entry.institution}-${entry.degree}`} {...entry} />
        ))}
      </div>
    </section>
  )
}
