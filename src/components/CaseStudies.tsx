import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { profile, type CaseStudy } from '../data/profile'
import { useTheme } from '../context/ThemeContext'

interface CaseStudiesProps {
  recruiterMode: boolean
}

function CaseStudyCard({
  study,
  recruiterMode,
  defaultOpen,
}: {
  study: CaseStudy
  recruiterMode: boolean
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen ?? recruiterMode)
  const { reducedMotion } = useTheme()

  const cardClass = recruiterMode
    ? 'rounded-lg border border-gray-200 bg-white p-5'
    : 'glass rounded-xl p-5'

  return (
    <motion.article
      layout={!reducedMotion}
      className={cardClass}
      initial={recruiterMode || reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button
        type="button"
        onClick={() => !recruiterMode && setOpen(!open)}
        className={`flex w-full items-start justify-between gap-4 text-left ${recruiterMode ? 'cursor-default' : 'cursor-pointer'}`}
        disabled={recruiterMode}
        aria-expanded={open}
      >
        <div>
          <h3
            className={`text-lg font-semibold ${recruiterMode ? 'text-gray-900' : 'text-primary'}`}
          >
            {study.title}
          </h3>
          <p className={`mt-0.5 text-sm ${recruiterMode ? 'text-gray-500' : 'text-accent'}`}>
            {study.company} · {study.role}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {study.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className={
                  recruiterMode
                    ? 'rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600'
                    : 'rounded bg-[var(--accent-dim)] px-2 py-0.5 text-xs text-accent'
                }
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {!recruiterMode && (
          <motion.span animate={reducedMotion ? undefined : { rotate: open ? 180 : 0 }}>
            <ChevronDown size={18} className="mt-1 shrink-0 text-muted" />
          </motion.span>
        )}
      </button>

      <AnimatePresence initial={false}>
        {(open || recruiterMode) && (
          <motion.div
            initial={recruiterMode || reducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Problem
                </p>
                <p
                  className={`mt-1 text-sm leading-relaxed ${recruiterMode ? 'text-gray-700' : 'text-secondary'}`}
                >
                  {study.problem}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Approach
                </p>
                <p
                  className={`mt-1 text-sm leading-relaxed ${recruiterMode ? 'text-gray-700' : 'text-secondary'}`}
                >
                  {study.approach}
                </p>
              </div>

              <div className="diagram" role="img" aria-label={`Architecture diagram: ${study.title}`}>
                {study.diagram}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Outcomes
                </p>
                <ul className={`mt-2 space-y-1.5 ${recruiterMode ? 'list-disc pl-5' : ''}`}>
                  {study.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className={`text-sm ${recruiterMode ? 'text-gray-700' : 'flex gap-2 text-secondary'}`}
                    >
                      {!recruiterMode && (
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                      )}
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export function CaseStudies({ recruiterMode }: CaseStudiesProps) {
  const sectionClass = recruiterMode
    ? 'border-b border-gray-200 bg-white px-4 section-pad-recruiter sm:px-6'
    : 'border-t border-theme px-4 section-pad sm:px-6'

  return (
    <section id="case-studies" className={sectionClass}>
      <div className="mx-auto max-w-5xl">
        <p className={recruiterMode ? 'text-xs font-semibold uppercase tracking-widest text-gray-400' : 'section-label'}>
          Case Studies
        </p>
        <h2
          className={`mt-2 text-2xl font-bold sm:text-3xl ${recruiterMode ? 'text-gray-900' : 'text-primary'}`}
        >
          Platform Engineering Deep Dives
        </h2>
        <p className={`mt-2 text-sm ${recruiterMode ? 'text-gray-500' : 'text-muted'}`}>
          DispatchTrack — architecture, migration, and AI-operable SDLC work
        </p>

        <div className="mt-5 space-y-4">
          {profile.caseStudies.map((study, i) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              recruiterMode={recruiterMode}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
