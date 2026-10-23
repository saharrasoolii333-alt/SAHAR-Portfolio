import { motion } from 'framer-motion'

const orbs = [
  { cls: 'orb-1', x: [0, 30, -20, 0], y: [0, 40, 20, 0], scale: [1, 1.08, 0.95, 1], duration: 14 },
  { cls: 'orb-2', x: [0, -40, 20, 0], y: [0, -30, 30, 0], scale: [1, 0.95, 1.1, 1], duration: 17 },
  { cls: 'orb-3', x: [0, 50, -30, 0], y: [0, 20, -40, 0], scale: [1, 1.12, 0.92, 1], duration: 20 },
]

export default function AmbientOrbs() {
  return (
    <>
      {orbs.map((o) => (
        <motion.div
          key={o.cls}
          className={`ambient-glow ${o.cls}`}
          animate={{ x: o.x, y: o.y, scale: o.scale }}
          transition={{ duration: o.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </>
  )
}
