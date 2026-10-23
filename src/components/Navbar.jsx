import { useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { NAV_LINKS } from '../data'

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <motion.nav
        className="glass-nav"
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.1 }}
      >
        <div className="nav-logo">Sahar<span>.</span></div>

        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? 'active' : ''}>
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="nav-label">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="btn-glow-primary nav-cta"
          whileHover={{ y: -3, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          Get In Touch
        </motion.a>

        <button
          className="nav-burger"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} />
          <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS.map((l, i) => (
              <motion.li
                key={l.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <a href={`#${l.id}`} onClick={() => setOpen(false)} className={active === l.id ? 'active' : ''}>
                  {l.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  )
}
