import { motion } from 'framer-motion'
import { GraduationCap, Mail, Phone, Link, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { GitHubIcon } from './icons/GitHubIcon'
import { useTheme } from '../context/ThemeContext'

interface SectionProps {
  recruiterMode: boolean
}

export function Education({ recruiterMode }: SectionProps) {
  const { reducedMotion } = useTheme()
  const sectionClass = recruiterMode
    ? 'border-b border-gray-200 bg-gray-50 px-4 section-pad-recruiter sm:px-6'
    : 'px-4 section-pad sm:px-6'

  return (
    <section id="education" className={sectionClass}>
      <div className="mx-auto max-w-5xl">
        <p className={recruiterMode ? 'text-xs font-semibold uppercase tracking-widest text-gray-400' : 'section-label'}>
          Education
        </p>
        <h2 className={`mt-2 text-2xl font-bold sm:text-3xl ${recruiterMode ? 'text-gray-900' : 'text-primary'}`}>
          Background
        </h2>

        <motion.div
          initial={recruiterMode || reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-5 flex gap-4 ${recruiterMode ? 'rounded-lg border border-gray-200 bg-white p-5' : 'glass rounded-xl p-5'}`}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-dim)] text-accent">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className={`font-semibold ${recruiterMode ? 'text-gray-900' : 'text-primary'}`}>
              {profile.education.degree}
            </h3>
            <p className={`text-sm ${recruiterMode ? 'text-gray-600' : 'text-secondary'}`}>
              {profile.education.school} · {profile.education.period}
            </p>
            <p className="mt-1 text-sm text-muted">{profile.education.detail}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Contact({ recruiterMode }: SectionProps) {
  const links = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: Link, label: 'LinkedIn', href: profile.linkedin },
    { icon: null, label: 'GitHub', href: profile.github, customIcon: <GitHubIcon size={16} /> },
    { icon: MapPin, label: profile.location, href: null },
  ]

  const sectionClass = recruiterMode ? 'bg-white px-4 section-pad-recruiter sm:px-6' : 'px-4 section-pad sm:px-6'

  return (
    <section id="contact" className={sectionClass}>
      <div className="mx-auto max-w-5xl text-center">
        <p className={recruiterMode ? 'text-xs font-semibold uppercase tracking-widest text-gray-400' : 'section-label'}>
          Contact
        </p>
        <h2 className={`mt-2 text-2xl font-bold sm:text-3xl ${recruiterMode ? 'text-gray-900' : 'text-primary'}`}>
          Let&apos;s connect
        </h2>
        <p className={`mx-auto mt-3 max-w-md text-sm ${recruiterMode ? 'text-gray-600' : 'text-secondary'}`}>
          Open to Senior Backend, Platform, and AI Platform roles in India.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {links.map(({ icon: Icon, label, href, customIcon }) =>
            href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={
                  recruiterMode
                    ? 'flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 hover:border-[var(--accent)] hover:text-[var(--accent)]'
                    : 'glass flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-secondary hover:text-primary'
                }
              >
                {customIcon ?? (Icon && <Icon size={16} />)}
                {label}
              </a>
            ) : (
              <span
                key={label}
                className={
                  recruiterMode
                    ? 'flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600'
                    : 'glass flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-muted'
                }
              >
                {Icon && <Icon size={16} />}
                {label}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export function Footer({ recruiterMode }: SectionProps) {
  return (
    <footer
      className={`px-4 py-6 text-center text-xs ${recruiterMode ? 'border-t border-gray-200 text-gray-400' : 'text-muted'}`}
    >
      © {new Date().getFullYear()} {profile.name} ·{' '}
      <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
        GitHub
      </a>{' '}
      · Built with React + Vite
    </footer>
  )
}
