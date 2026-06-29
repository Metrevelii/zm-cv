type HeaderProps = {
  name: string
  title: string
  summary: string
  photoUrl?: string
}

export function Header({ name, title, summary, photoUrl }: HeaderProps) {
  const paragraphs = summary.split('\n\n')

  return (
    <header className="flex items-start justify-between gap-8 bg-page px-10 py-8">
      <div>
        <h1 className="text-4xl font-bold text-white">{name}</h1>
        <p className="mt-1 text-lg text-accent">{title}</p>
        <div className="mt-4 max-w-2xl space-y-3">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      {photoUrl && (
        <img
          src={photoUrl}
          alt={name}
          className="h-28 w-28 shrink-0 rounded-full border-4 border-accent object-cover"
        />
      )}
    </header>
  )
}
