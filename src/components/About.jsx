import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import CountUp from './CountUp'
import { STATS } from '../data'

export default function About() {
  return (
    <section id="about" className="section-container">
      <SectionHeading first="About" accent="Me" sub="Bridging cybersecurity robustness with elegant front-end design." />

      <div className="about-grid">
        <Reveal x={-60} y={0} className="glass-card about-main-card">
          <div className="fan-accent-wrapper">
            <motion.div
              className="glowing-fan-icon"
              animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              🪭
            </motion.div>
          </div>
          <h3>Driven by Logic, Focused on User Experience</h3>
          <p>
            Based in Kabul, Afghanistan, I am a senior Computer Science student at the American University of Afghanistan specializing in cybersecurity. I blend analytical systems engineering with refined digital creation—ranging from secure web architectures to high-end UI/UX layouts, media creation, and content strategy.
          </p>
          <div className="stats-row">
            {STATS.map((s) => (
              <div className="stat-item" key={s.label}>
                <CountUp to={s.to} suffix={s.suffix} />
                <span className="stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="about-side-stack">
          <Reveal x={60} y={0} delay={0.1} className="glass-card side-card" whileHover={{ x: -6, scale: 1.02 }}>
            <div className="side-icon"><i className="fa-solid fa-shield-halved" /></div>
            <div>
              <h4>Cybersecurity Focus</h4>
              <p>Analyzing system security threats, network architecture, and security protocols.</p>
            </div>
          </Reveal>
          <Reveal x={60} y={0} delay={0.25} className="glass-card side-card" whileHover={{ x: -6, scale: 1.02 }}>
            <div className="side-icon"><i className="fa-solid fa-palette" /></div>
            <div>
              <h4>Design &amp; Media</h4>
              <p>Crafting sleek layouts, video editing (Premiere Pro, CapCut), and visual branding.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
