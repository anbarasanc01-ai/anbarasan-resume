import { useEffect, useState } from 'react'
import { profile } from './data/profile'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { CaseStudies } from './components/CaseStudies'
import { ExperienceSection } from './components/Experience'
import { Education, Contact, Footer } from './components/Education'

function App() {
  const [recruiterMode, setRecruiterMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('recruiter-mode', recruiterMode)
  }, [recruiterMode])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    if (!recruiterMode) {
      window.addEventListener('mousemove', handler)
      return () => window.removeEventListener('mousemove', handler)
    }
  }, [recruiterMode])

  return (
    <>
      <Header
        recruiterMode={recruiterMode}
        onToggleRecruiter={() => setRecruiterMode((v) => !v)}
      />
      <main>
        <Hero recruiterMode={recruiterMode} />
        <About recruiterMode={recruiterMode} />
        <CaseStudies recruiterMode={recruiterMode} />
        <Skills recruiterMode={recruiterMode} />
        <ExperienceSection recruiterMode={recruiterMode} />
        <Education recruiterMode={recruiterMode} />
        <Contact recruiterMode={recruiterMode} />
      </main>
      <Footer recruiterMode={recruiterMode} />

      <noscript>
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          <h1>
            {profile.name} — {profile.title}
          </h1>
          <p>{profile.summary}</p>
          {profile.caseStudies.map((cs) => (
            <div key={cs.id}>
              <h2>{cs.title}</h2>
              <p>{cs.problem}</p>
              <p>{cs.approach}</p>
            </div>
          ))}
          {profile.experience.map((job) => (
            <div key={job.id}>
              <h2>
                {job.role} at {job.company}
              </h2>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 30)}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </noscript>
    </>
  )
}

export default App
