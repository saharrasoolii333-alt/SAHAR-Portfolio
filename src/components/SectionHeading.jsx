import { motion } from 'framer-motion'

export default function SectionHeading({ first, accent, sub }) {
  return (
    <>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {first} <span className="text-gradient">{accent}</span>
      </motion.h2>
      <motion.p
        className="section-subheading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        {sub}
      </motion.p>
    </>
  )
}
