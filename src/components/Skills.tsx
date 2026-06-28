import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/profile'
import { useTheme } from '../context/ThemeContext'

interface SkillsProps {
  recruiterMode: boolean
}

export function Skills({ recruiterMode }: SkillsProps) {
  const [active, setActive] = useState(0)
  const { reducedMotion } = useTheme()
  const categories = profile.skills

  const sectionClass = recruiterMode
    ? 'border-b border-gray-200 bg-gray-50 px-4 section-pad-recruiter sm:px-6'
    : 'px-4 section-pad sm:px-6'

  return (
    <section id="skills" className={sectionClass}>
      <div className="mx-auto max-w-5xl">
        <p className={recruiterMode ? 'text-xs font-semibold uppercase tracking-widest text-gray-400' : 'section-label'}>
          Skills
        </p>
        <h2 className={`mt-2 text-2xl font-bold sm:text-3xl ${recruiterMode ? 'text-gray-900' : 'text-primary'}`}>
          Technical Stack
        </h2>

        {recruiterMode ? (
          <div className="mt-5 space-y-4">
            {categories.map((cat) => (
              <div key={cat.category}>
                <p className="text-sm font-semibold text-gray-800">{cat.category}</p>
                <p className="mt-1 text-sm text-gray-600">{cat.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <button
                  key={cat.category}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    active === i
                      ? 'btn-accent text-white'
                      : 'glass text-muted hover:text-primary'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: reducedMotion ? 0 : 0.25 }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {categories[active].items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: reducedMotion ? 0 : i * 0.04 }}
                    className="glass rounded-lg px-4 py-2 text-sm text-primary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  )
}
