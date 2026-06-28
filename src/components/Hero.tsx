import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Link, ArrowDown } from 'lucide-react'
import { profile } from '../data/profile'
import { GitHubIcon } from './icons/GitHubIcon'
import { useTheme } from '../context/ThemeContext'

interface HeroProps {
  recruiterMode: boolean
}

export function Hero({ recruiterMode }: HeroProps) {
  const { reducedMotion } = useTheme()

  const fade = (delay = 0) =>
    reducedMotion
      ? {}
      : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay } }

  if (recruiterMode) {
    return (
      <section className="border-b border-gray-200 px-4 pb-10 pt-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{profile.name}</h1>
          <p className="mt-1 text-lg text-gray-600">{profile.title}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1 hover:text-[var(--accent)]">
              <Mail size={14} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-1 hover:text-[var(--accent)]">
              <Phone size={14} /> {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)]">
              <Link size={14} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)]">
              <GitHubIcon size={14} /> GitHub
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28">
      <div className="spotlight pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at top, var(--accent-dim), transparent 55%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.p {...fade()} className="mb-4 font-mono text-sm text-accent">
          {profile.tagline}
        </motion.p>

        <motion.h1
          {...fade(0.1)}
          className="text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m <span className="gradient-text">{profile.name.split(' ')[0]}</span>
        </motion.h1>

        <motion.p {...fade(0.25)} className="mt-4 max-w-2xl text-lg text-secondary sm:text-xl">
          {profile.title} — building distributed SaaS backends, async platforms, and
          AI-operable engineering systems.
        </motion.p>

        <motion.div {...fade(0.4)} className="mt-8 flex flex-wrap gap-3">
          <a href="#case-studies" className="btn-accent rounded-lg px-5 py-2.5 text-sm font-medium transition">
            Case studies
          </a>
          <a href={profile.pdfUrl} download className="glass rounded-lg px-5 py-2.5 text-sm font-medium text-primary transition hover:opacity-90">
            Download resume
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="glass rounded-lg px-5 py-2.5 text-sm font-medium text-primary transition hover:opacity-90">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="glass flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-primary transition hover:opacity-90">
            <GitHubIcon size={16} /> GitHub
          </a>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={reducedMotion ? undefined : { opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {profile.metrics.map((m) => (
            <div key={m.label} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary sm:text-3xl">{m.value}</div>
              <div className="mt-1 text-xs text-muted">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {!reducedMotion && (
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
            className="mt-8 inline-flex flex-col items-center gap-1 text-muted hover:text-accent"
          >
            <span className="text-xs">Scroll</span>
            <ArrowDown size={16} />
          </motion.a>
        )}
      </div>
    </section>
  )
}
