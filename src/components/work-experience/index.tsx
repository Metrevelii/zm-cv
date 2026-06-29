import { SectionTitle } from '../section-title'
import { WorkExperienceItem, type Job } from '../work-experience-item'

type WorkExperienceProps = {
  jobs: Job[]
}

export function WorkExperience({ jobs }: WorkExperienceProps) {
  return (
    <section>
      <SectionTitle>Work Experience</SectionTitle>
      <div className="space-y-8">
        {jobs.map((job) => (
          <WorkExperienceItem key={`${job.company}-${job.role}`} {...job} />
        ))}
      </div>
    </section>
  )
}
