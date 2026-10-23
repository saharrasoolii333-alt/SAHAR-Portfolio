import { motion } from 'framer-motion'

const WORDS = ['Cybersecurity', 'React', 'UI / UX', 'Network Security', 'Figma', 'Video Editing', 'JavaScript', 'Branding']

export default function Marquee() {
  const row = [...WORDS, ...WORDS]
  return (
    <div className="marquee">
      <motion.div className="marquee-track" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>
        {row.map((w, i) => <span key={i}>{w} <b>✦</b></span>)}
      </motion.div>
    </div>
  )
}
