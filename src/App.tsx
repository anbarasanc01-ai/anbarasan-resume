import { useEffect, useState } from 'react'
import { PortfolioPage } from './components/PortfolioPage'
import { profile } from './data/profile'
import { useTheme } from './context/ThemeContext'

function App() {
  const [recruiterMode, setRecruiterMode] = useState(false)
  const { reducedMotion } = useTheme()

  useEffect(() => {
    document.documentElement.classList.toggle('reduced-motion', reducedMotion)
  }, [reducedMotion])

  return (
    <>
      <PortfolioPage
        recruiterMode={recruiterMode}
        onToggleRecruiter={() => setRecruiterMode((v) => !v)}
      />

      <noscript>
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          <h1>
            {profile.name} — {profile.title}
          </h1>
          <p>{profile.summary}</p>
        </div>
      </noscript>
    </>
  )
}

export default App
