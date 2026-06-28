import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  Download,
  Mail,
  Moon,
  Sun,
} from 'lucide-react'
import { profile } from '../data/profile'
import { GitHubIcon } from './icons/GitHubIcon'
import { useTheme } from '../context/ThemeContext'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent-emerald)]">
      {children}
    </p>
  )
}

function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
  ...rest
}: {
  children: ReactNode
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li'
  className?: string
  id?: string
}) {
  const { reducedMotion } = useTheme()
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(reducedMotion)

  useEffect(() => {
    if (reducedMotion) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reducedMotion])

  if (reducedMotion) {
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  return (
    <Tag
      ref={ref as never}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '')
  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    elements.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [ids])
  return active
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

interface PortfolioPageProps {
  recruiterMode: boolean
  onToggleRecruiter: () => void
}

export function PortfolioPage({ recruiterMode, onToggleRecruiter }: PortfolioPageProps) {
  const { theme, toggleTheme } = useTheme()
  const active = useActiveSection(NAV.map((n) => n.id))
  const firstName = profile.name.split(' ')[0]

  useEffect(() => {
    document.body.classList.toggle('recruiter-mode', recruiterMode)
  }, [recruiterMode])

  if (recruiterMode) {
    return (
      <div className="min-h-screen bg-white text-gray-800 antialiased">
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
            <span className="font-bold">{profile.name}</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onToggleRecruiter}
                className="rounded-full bg-[var(--color-accent-emerald)] px-3 py-1.5 text-xs font-medium text-white"
              >
                Exit recruiter mode
              </button>
              <a
                href={profile.pdfUrl}
                download
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-3 py-1.5 text-xs"
              >
                <Download className="h-3.5 w-3.5" /> PDF
              </a>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-6 py-10">
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="text-lg text-gray-600">{profile.title}</p>
          <p className="mt-1 text-sm text-gray-500">
            {profile.location} · {profile.email} · {profile.phone}
          </p>
          <p className="mt-8 leading-relaxed text-gray-700">{profile.summary}</p>

          <h2 className="mt-10 text-xl font-bold">Experience</h2>
          <div className="mt-4 space-y-6">
            {profile.experience.map((job) => (
              <div key={job.id} className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold">
                  {job.role} — {job.company}
                </h3>
                <p className="text-sm text-gray-500">
                  {job.location} · {job.period}
                </p>
                <p className="mt-1 text-sm italic text-gray-500">{job.project}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 40)}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="mt-10 text-xl font-bold">Education</h2>
          <p className="mt-2 text-gray-700">
            {profile.education.degree}, {profile.education.school} ·{' '}
            {profile.education.period} · {profile.education.detail}
          </p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-bold tracking-tight">
            {firstName}
            <span className="text-[var(--color-accent-emerald)]">.</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => {
              const isActive = active === n.id
              return (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className={`relative text-sm transition-colors hover:text-foreground ${
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {n.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-[var(--color-accent-emerald)] transition-all duration-300 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                </a>
              )
            })}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleRecruiter}
              title="Recruiter mode"
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-card px-3 text-xs font-medium hover:bg-secondary"
            >
              <Briefcase className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Recruiter</span>
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:bg-secondary"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href={profile.pdfUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-emerald)] px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" /> PDF
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="relative pt-16 pb-16 md:pt-24 md:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{
              backgroundImage:
                'radial-gradient(60% 50% at 20% 10%, color-mix(in oklab, var(--color-accent-emerald) 18%, transparent), transparent), radial-gradient(50% 40% at 90% 0%, color-mix(in oklab, var(--color-accent-amber) 14%, transparent), transparent)',
            }}
          />
          <p className="font-mono text-xs tracking-widest text-[var(--color-accent-emerald)]">
            {profile.tagline}
          </p>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
            Hi, I&apos;m{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(95deg, var(--color-accent-emerald), oklch(0.62 0.13 130), var(--color-accent-amber))',
              }}
            >
              {firstName}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {profile.title} — building distributed SaaS backends, async platforms, and
            AI-operable engineering systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent-emerald)] px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
            >
              Case studies <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.pdfUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary"
            >
              <Download className="h-4 w-4" /> Download resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary"
            >
              <GitHubIcon size={16} /> GitHub
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {profile.metrics.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 80}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-[var(--color-accent-emerald)]/40"
              >
                <div className="text-3xl font-bold tracking-tight md:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </Reveal>
            ))}
          </div>

          <a
            href="#about"
            className="mt-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
          >
            Scroll <ArrowDown className="h-3 w-3" />
          </a>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border py-16 md:py-20">
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Professional Summary
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            <p className="text-base leading-relaxed text-muted-foreground md:col-span-2 md:text-lg">
              {profile.summary}
            </p>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Domains
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.domains.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="border-t border-border py-16 md:py-20">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Platform Engineering Deep Dives
          </h2>
          <p className="mt-3 text-muted-foreground">
            DispatchTrack — architecture, migration, and AI-operable SDLC work.
          </p>

          <div className="mt-10 space-y-6">
            {profile.caseStudies.map((cs, i) => (
              <Reveal
                as="article"
                key={cs.id}
                delay={i * 100}
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-[var(--color-accent-emerald)]/40 md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                      {cs.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {cs.company} · {cs.role}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-[var(--color-surface-2)] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-accent-emerald)]">
                      Problem
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {cs.problem}
                    </p>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-[var(--color-accent-emerald)]">
                      Approach
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {cs.approach}
                    </p>
                  </div>
                  <div>
                    <pre className="overflow-x-auto rounded-lg border border-border bg-[var(--color-surface-2)] p-4 font-mono text-[11px] leading-relaxed text-foreground/80">
                      {cs.diagram}
                    </pre>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-[var(--color-accent-emerald)]">
                      Outcomes
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                      {cs.outcomes.map((o) => (
                        <li key={o} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent-emerald)]" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-border py-16 md:py-20">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Technical Stack
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {profile.skills.map((s, i) => (
              <Reveal
                key={s.category}
                delay={i * 70}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-accent-emerald)]">
                  {s.category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-md border border-border bg-[var(--color-surface-2)] px-2.5 py-1 text-xs"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-t border-border py-16 md:py-20">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Career Timeline
          </h2>

          <ol className="mt-10 space-y-4">
            {profile.experience.map((r, i) => (
              <Reveal
                as="li"
                key={r.id}
                delay={i * 60}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                      {r.role}
                    </h3>
                    {'highlight' in r && r.highlight && (
                      <span className="rounded-full bg-[var(--color-accent-emerald)]/12 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent-emerald)]">
                        Current
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{r.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {r.company} · {r.location}
                </p>
                <p className="mt-3 text-sm text-foreground/80">{r.project}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {r.bullets.map((b) => (
                    <li key={b.slice(0, 40)} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent-emerald)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Education */}
        <section id="education" className="border-t border-border py-16 md:py-20">
          <SectionLabel>Education</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Background</h2>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-lg font-semibold tracking-tight md:text-xl">
              {profile.education.degree}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {profile.education.school} · {profile.education.period}
            </p>
            <p className="mt-3 font-mono text-xs text-foreground/80">
              {profile.education.detail}
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border py-16 md:py-20">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            Let&apos;s connect.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Open to Senior Backend, Platform, and AI Platform roles in India.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent-emerald)] px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary"
            >
              <GitHubIcon size={16} /> GitHub
            </a>
          </div>
        </section>

        <footer className="border-t border-border py-10 text-center font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} ·{' '}
          <a href={profile.github} className="hover:text-foreground">
            GitHub
          </a>{' '}
          · Built with React + Vite
        </footer>
      </main>
    </div>
  )
}
