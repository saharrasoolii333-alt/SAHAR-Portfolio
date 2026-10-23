import { useEffect, useState } from 'react'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'

// 3D flip card driven by a Framer Motion value.
// Desktop: flips on hover. Touch devices: flips on tap.
export default function FlipCard({ front, back, className = '', index = 0 }) {
  const [flipped, setFlipped] = useState(false)
  const rotate = useMotionValue(0)

  // Opacity swap guarantees only one face is ever painted (avoids backface bugs).
  const frontOpacity = useTransform(rotate, [0, 89, 91, 180], [1, 1, 0, 0])
  const backOpacity = useTransform(rotate, [0, 89, 91, 180], [0, 0, 1, 1])

  useEffect(() => {
    const controls = animate(rotate, flipped ? 180 : 0, {
      type: 'spring',
      stiffness: 110,
      damping: 15,
    })
    return () => controls.stop()
  }, [flipped, rotate])

  const isTouch = () => window.matchMedia('(hover: none)').matches

  return (
    <motion.div
      className={`flip-card ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => !isTouch() && setFlipped(true)}
      onHoverEnd={() => !isTouch() && setFlipped(false)}
      onClick={() => isTouch() && setFlipped((f) => !f)}
    >
      <motion.div className="flip-card-inner" style={{ rotateY: rotate }}>
        <motion.div className="flip-card-front" style={{ opacity: frontOpacity }}>
          {front}
        </motion.div>
        <motion.div className="flip-card-back" style={{ opacity: backOpacity }}>
          {back}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
