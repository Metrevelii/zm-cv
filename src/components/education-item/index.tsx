export type Education = {
  degree: string
  institution: string
  period: string
  field?: string
}

export function EducationItem({ degree, institution, period, field }: Education) {
  return (
    <div>
      <h3 className="text-lg font-bold text-white">{degree}</h3>
      <p className="text-slate-300">{institution}</p>
      <div className="mt-1 flex justify-between text-sm text-accent">
        <span>{period}</span>
        {field && <span>{field}</span>}
      </div>
    </div>
  )
}
