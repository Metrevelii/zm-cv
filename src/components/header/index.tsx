type HeaderProps = {
  name: string
  title: string
  summary: string
  photoUrl?: string
}

export function Header({ name, title, summary, photoUrl }: HeaderProps) {
  return (
    <header className="flex items-start justify-between gap-8 bg-slate-800 px-10 py-8">
      <div>
        <h1 className="text-4xl font-bold text-white">{name}</h1>
        <p className="mt-1 text-lg text-teal-400">{title}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-200">{summary}</p>
      </div>
      {photoUrl && (
        <img
          src={photoUrl}
          alt={name}
          className="h-28 w-28 shrink-0 rounded-full border-4 border-teal-400 object-cover"
        />
      )}
    </header>
  )
}
