import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import FlipCard from './FlipCard'
import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <SectionHeading first="Featured" accent="Projects" sub="Hover or tap cards to inspect interface details and tech stacks." />

      <div className="cards-grid">
        {PROJECTS.map((p, i) => (
          <FlipCard
            key={p.title}
            index={i}
            className="project-card"
            front={
              <>
                <motion.img
                  src={p.img}
                  alt={p.alt}
                  className="project-img"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                />
                <h3>{p.title}</h3>
                <p className="proj-category">{p.category}</p>
                <p className="hover-hint">Hover / Tap to view details</p>
              </>
            }
            back={
              <>
                <h4>{p.backTitle}</h4>
                <p>{p.backText}</p>
                <div className="proj-tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </>
            }
          />
        ))}
      </div>
    </section>
  )
}
