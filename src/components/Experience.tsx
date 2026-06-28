import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Star } from 'lucide-react'
import { profile, type Experience } from '../data/profile'
import { useTheme } from '../context/ThemeContext'

interface ExperienceSectionProps {
  recruiterMode: boolean
}

function hasHighlight(job: Experience): job is Experience & { highlight: true } {
  return 'highlight' in job && job.highlight === true
}

function ExperienceCard({
  job,
  recruiterMode,
  defaultOpen,
}: {
  job: Experience
  recruiterMode: boolean
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen ?? recruiterMode)
  const { reducedMotion } = useTheme()

  const cardClass = recruiterMode
    ? 'rounded-lg border border-gray-200 bg-white p-5'
    : hasHighlight(job)
      ? 'glass rounded-xl border-[var(--accent)]/30 p-5'
      : 'glass rounded-xl p-5'

  return (
    <motion.article
      layout={!reducedMotion}
      className={cardClass}
      initial={recruiterMode || reducedMotion ? false : { opacity: 0, x: -20 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <button
        type="button"
        onClick={() => !recruiterMode && setOpen(!open)}
        className={`flex w-full items-start justify-between gap-4 text-left ${recruiterMode ? 'cursor-default' : 'cursor-pointer'}`}
        disabled={recruiterMode}
        aria-expanded={open}
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className={`font-semibold ${recruiterMode ? 'text-gray-900' : 'text-primary'}`}>
              {job.role}
            </h3>
            {hasHighlight(job) && !recruiterMode && (
              <span className="flex items-center gap-1 rounded-full bg-[var(--accent-dim)] px-2 py-0.5 text-xs text-accent">
                <Star size={10} fill="currentColor" /> Current
              </span>
            )}
          </div>
          <p className={`mt-0.5 text-sm ${recruiterMode ? 'text-gray-600' : 'text-accent'}`}>
            {job.company} · {job.location}
          </p>
          <p className="mt-0.5 text-xs text-muted">{job.period}</p>
          <p className="mt-1 text-xs italic text-muted">{job.project}</p>
        </div>
        {!recruiterMode && (
          <motion.span animate={reducedMotion ? undefined : { rotate: open ? 180 : 0 }}>
            <ChevronDown size={18} className="mt-1 shrink-0 text-muted" />
          </motion.span>
        )}
      </button>

      <AnimatePresence initial={false}>
        {(open || recruiterMode) && (
          <motion.ul
            initial={recruiterMode || reducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
            className={`mt-4 space-y-2 overflow-hidden ${recruiterMode ? 'list-disc pl-5' : ''}`}
          >
            {job.bullets.map((bullet) => (
              <li
                key={bullet.slice(0, 40)}
                className={`text-sm leading-relaxed ${recruiterMode ? 'text-gray-700' : 'flex gap-2 text-secondary'}`}
              >
                {!recruiterMode && (
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                )}
                {bullet}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export function ExperienceSection({ recruiterMode }: ExperienceSectionProps) {
  const sectionClass = recruiterMode
    ? 'border-b border-gray-200 bg-white px-4 section-pad-recruiter sm:px-6'
    : 'px-4 section-pad sm:px-6'

  return (
    <section id="experience" className={sectionClass}>
      <div className="mx-auto max-w-5xl">
        <p className={recruiterMode ? 'text-xs font-semibold uppercase tracking-widest text-gray-400' : 'section-label'}>
          Experience
        </p>
        <h2 className={`mt-2 text-2xl font-bold sm:text-3xl ${recruiterMode ? 'text-gray-900' : 'text-primary'}`}>
          Career Timeline
        </h2>
        <p className="mt-2 text-sm text-muted">
          {recruiterMode ? 'Full work history' : 'Click a role to expand details'}
        </p>

        <div className="mt-5 space-y-3 md:pl-4">
          {profile.experience.map((job, i) => (
            <ExperienceCard
              key={job.id}
              job={job}
              recruiterMode={recruiterMode}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
