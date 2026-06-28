import { useEffect, useState } from 'react'
import { Moon, Sun, Briefcase, Download } from 'lucide-react'
import { profile } from '../data/profile'
import { useTheme } from '../context/ThemeContext'

interface HeaderProps {
  recruiterMode: boolean
  onToggleRecruiter: () => void
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Header({ recruiterMode, onToggleRecruiter }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const barClass = recruiterMode
    ? scrolled
      ? 'bg-white/95 border-gray-200 shadow-sm'
      : 'bg-white border-gray-200'
    : scrolled
      ? 'glass border-theme'
      : 'border-transparent bg-transparent'

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${barClass}`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#"
          className={`text-sm font-semibold tracking-tight ${recruiterMode ? 'text-gray-900' : 'text-primary'}`}
        >
          {profile.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-[var(--accent)] ${recruiterMode ? 'text-gray-600' : 'text-muted'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleRecruiter}
            title="Recruiter mode — clean, linear layout"
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              recruiterMode
                ? 'bg-[var(--accent)] text-white'
                : 'glass text-secondary hover:text-primary'
            }`}
          >
            <Briefcase size={14} />
            <span className="hidden sm:inline">Recruiter</span>
          </button>

          {!recruiterMode && (
            <button
              type="button"
              onClick={toggleTheme}
              className="glass rounded-lg p-2 text-muted hover:text-primary"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          <a
            href={profile.pdfUrl}
            download
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              recruiterMode
                ? 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                : 'btn-accent text-white'
            }`}
          >
            <Download size={14} />
            <span className="hidden sm:inline">PDF</span>
          </a>
        </div>
      </div>
    </header>
  )
}
