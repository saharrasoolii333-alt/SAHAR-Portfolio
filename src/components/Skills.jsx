import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { SKILL_GROUPS } from '../data'

const group = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
}
const pill = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 18 } },
}

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <SectionHeading first="Technical" accent="Toolkit" sub="Languages, frameworks, design software, and digital media tools." />

      <Reveal className="skills-wrapper glass-card">
        {SKILL_GROUPS.map((g) => (
          <div className="skill-group" key={g.title}>
            <h4>{g.title}</h4>
            <motion.div
              className="pills-flex"
              variants={group}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              {g.skills.map((s) => (
                <motion.span
                  key={s.name}
                  className="skill-pill"
                  variants={pill}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={s.icon} /> {s.name}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
