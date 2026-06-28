import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useTheme } from '../context/ThemeContext'

interface AboutProps {
  recruiterMode: boolean
}

export function About({ recruiterMode }: AboutProps) {
  const { reducedMotion } = useTheme()
  const sectionClass = recruiterMode
    ? 'border-b border-gray-200 bg-white px-4 section-pad-recruiter sm:px-6'
    : 'px-4 section-pad sm:px-6'

  return (
    <section id="about" className={sectionClass}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={recruiterMode || reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className={recruiterMode ? 'text-xs font-semibold uppercase tracking-widest text-gray-400' : 'section-label'}>
            About
          </p>
          <h2 className={`mt-2 text-2xl font-bold sm:text-3xl ${recruiterMode ? 'text-gray-900' : 'text-primary'}`}>
            Professional Summary
          </h2>
          <p className={`mt-4 max-w-3xl text-base leading-relaxed ${recruiterMode ? 'text-gray-700' : 'text-secondary'}`}>
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.domains.map((domain) => (
              <span
                key={domain}
                className={
                  recruiterMode
                    ? 'rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600'
                    : 'glass rounded-full px-3 py-1 text-xs text-secondary'
                }
              >
                {domain}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
