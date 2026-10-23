import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SOCIALS } from '../data'
import Typewriter from './Typewriter'
import Lamps from './Lamps'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false)
  const { scrollY } = useScroll()
  const avatarY = useTransform(scrollY, [0, 500], [0, 70])
  const textY = useTransform(scrollY, [0, 500], [0, -30])

  return (
    <section id="home" className="hero-section">
      <Lamps />
      <motion.div className="hero-text-content" variants={container} initial="hidden" animate="show" style={{ y: textY }}>
        <motion.span variants={item} className="badge-pill">
          ✦ Senior CS &amp; Cybersecurity Specialist
        </motion.span>

        <motion.h1 variants={item} className="hero-title">
          Hi, I'm <span className="text-gradient">Sahar Rasooli</span>
        </motion.h1>

        <motion.div variants={item}><Typewriter /></motion.div>

        <motion.p variants={item} className="hero-subtitle">
          Crafting resilient web architectures, modern visual interfaces, and secure digital experiences with precision and creative intuition.
        </motion.p>

        <motion.div variants={item} className="hero-buttons">
          <motion.a href="#contact" className="btn-glow-primary" whileHover={{ y: -3, scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            Contact Me <i className="fa-solid fa-arrow-right" />
          </motion.a>
          <motion.a href="#projects" className="btn-glass-secondary" whileHover={{ y: -3, scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            View Work
          </motion.a>
        </motion.div>

        <motion.div variants={item} className="social-icons-row">
          {SOCIALS.map((s) => (
            <motion.a
              key={s.title}
              href={s.href}
              title={s.title}
              className="social-circle"
              {...(s.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              whileHover={{ y: -5, scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className={s.icon} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-avatar-wrapper"
        style={{ y: avatarY }}
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.5 }}
      >
        <motion.div
          className="avatar-glow-ring"
          animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="avatar-card-glass"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.04, rotate: 1.5 }}
        >
          {imgFailed ? (
            <div className="avatar-initials">SR</div>
          ) : (
            <img src="/images/me.jpeg" alt="Sahar Rasooli" className="avatar-img" onError={() => setImgFailed(true)} />
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}
