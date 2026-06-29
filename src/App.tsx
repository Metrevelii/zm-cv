import { ContactBar } from './components/contact-bar'
import { Education } from './components/education'
import { Header } from './components/header'
import { Languages } from './components/languages'
import { Skills } from './components/skills'
import { WorkExperience } from './components/work-experience'
import { cv } from './data/cv'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-page py-10">
      <div className="w-full max-w-5xl bg-page shadow-2xl shadow-black/40 ring-1 ring-white/10">
        <Header name={cv.name} title={cv.title} summary={cv.summary} photoUrl={cv.photoUrl} />
        <ContactBar {...cv.contact} />
        <main className="grid grid-cols-1 gap-10 p-10 md:grid-cols-3">
          <div className="md:col-span-2 space-y-10">
            <WorkExperience jobs={cv.jobs} />
            <Education education={cv.education} />
          </div>
          <div className="space-y-10">
            <Skills categories={cv.technicalSkills} />
            <Languages languages={cv.languages} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
