import { motion } from 'framer-motion'

// Hanging brass lamps (visible in the Noir Gold theme)
export default function Lamps() {
  return (
    <div className="lamps" aria-hidden>
      {[{ h: 90, d: 0 }, { h: 150, d: 1.2 }].map((l, i) => (
        <motion.div
          key={i}
          className="lamp"
          style={{ transformOrigin: '50% 0' }}
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: l.d }}
        >
          <span className="lamp-cord" style={{ height: l.h }} />
          <span className="lamp-cap" />
          <motion.span className="lamp-bulb" animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 2.5, repeat: Infinity }} />
        </motion.div>
      ))}
    </div>
  )
}
