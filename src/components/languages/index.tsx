import { SectionTitle } from '../section-title'
import { LanguageItem, type Language } from '../language-item'

type LanguagesProps = {
  languages: Language[]
}

export function Languages({ languages }: LanguagesProps) {
  return (
    <section>
      <SectionTitle>Languages</SectionTitle>
      <div className="space-y-3">
        {languages.map((language) => (
          <LanguageItem key={language.name} {...language} />
        ))}
      </div>
    </section>
  )
}
