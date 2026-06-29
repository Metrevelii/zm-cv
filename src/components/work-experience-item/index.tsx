export type Job = {
  role: string
  company: string
  period: string
  location: string
  description?: string
  achievements: string[]
}

export function WorkExperienceItem({ role, company, period, location, description, achievements }: Job) {
  return (
    <div>
      <h3 className="text-lg font-bold text-slate-900">{role}</h3>
      <p className="text-slate-700">{company}</p>
      <div className="mt-1 flex justify-between text-sm text-teal-600">
        <span>{period}</span>
        <span>{location}</span>
      </div>
      {description && <p className="mt-1 text-sm italic text-slate-500">{description}</p>}
      {achievements.length > 0 && (
        <ul className="mt-2 space-y-1.5">
          {achievements.map((achievement) => (
            <li key={achievement} className="flex gap-2 text-sm text-slate-700">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
