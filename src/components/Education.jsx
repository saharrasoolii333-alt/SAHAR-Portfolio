import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import FlipCard from './FlipCard'
import { EDUCATION } from '../data'

export default function Education() {
  return (
    <section id="education" className="section-container">
      <SectionHeading first="Academic" accent="Journey" sub="Degrees, diplomas, high school, and technical development training." />

      <div className="cards-grid">
        {EDUCATION.map((e, i) => (
          <FlipCard
            key={e.title}
            index={i}
            front={
              <>
                <motion.div className="logo-container" whileHover={{ rotate: -6, scale: 1.08 }}>
                  <img src={e.logo} alt={e.alt} className="edu-logo-img" />
                </motion.div>
                <h3>{e.title}</h3>
                <p className="institution">{e.institution}</p>
                <span className="pill-tag">{e.tag}</span>
                <p className="hover-hint">Hover / Tap to view details</p>
              </>
            }
            back={
              <>
                <h4>{e.backTitle}</h4>
                <p>{e.backText}</p>
                <motion.a
                  href={e.url}
                  target="_blank"
                  rel="noreferrer"
                  className="edu-web-link"
                  onClick={(ev) => ev.stopPropagation()}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa-solid fa-globe" /> Visit Website
                </motion.a>
              </>
            }
          />
        ))}
      </div>
    </section>
  )
}
