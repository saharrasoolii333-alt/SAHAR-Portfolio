import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useSettings } from '../SettingsContext'

export default function CustomCursor() {
  const { settings } = useSettings()
  const [big, setBig] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40 })
  const sy = useSpring(y, { stiffness: 500, damping: 40 })

  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    const over = (e) => setBig(!!e.target.closest('a, button, input, textarea, .flip-card'))
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over) }
  }, [x, y])

  if (!settings.cursor || window.matchMedia('(hover: none)').matches) return null
  return (
    <motion.div
      className="custom-cursor"
      style={{ x: sx, y: sy }}
      animate={{ width: big ? 56 : 28, height: big ? 56 : 28, opacity: big ? 0.6 : 1 }}
    />
  )
}
