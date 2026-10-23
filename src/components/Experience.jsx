import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { EXPERIENCE } from '../data'

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const liVariants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0 },
}

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section id="experience" className="section-container">
      <SectionHeading first="Professional" accent="Experience" sub="Hands-on roles in documentation, communications, and content across international teams." />

      <div className="experience-timeline" ref={ref}>
        {/* Timeline line that draws itself while scrolling */}
        <div className="timeline-track" />
        <motion.div className="timeline-fill" style={{ scaleY: lineScale }} />

        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={exp.title}
            className="experience-item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="exp-icon"
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.15 }}
              whileHover={{ scale: 1.15, rotate: 8 }}
            >
              <i className={exp.icon} />
            </motion.div>

            <motion.div className="glass-card exp-card" whileHover={{ y: -4 }}>
              <div className="exp-header">
                <h3>{exp.title}</h3>
                {exp.date && <span className="exp-date pill-tag">{exp.date}</span>}
              </div>
              <p className="institution">{exp.org}</p>
              <motion.ul
                className="exp-list"
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                {exp.points.map((p) => (
                  <motion.li key={p} variants={liVariants}>{p}</motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
