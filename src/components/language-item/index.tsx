export type Language = {
  name: string
  proficiency: string
}

export function LanguageItem({ name, proficiency }: Language) {
  return (
    <div>
      <p className="text-slate-100">{name}</p>
      <p className="text-sm text-accent">{proficiency}</p>
    </div>
  )
}
