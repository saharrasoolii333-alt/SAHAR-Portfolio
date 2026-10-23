import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { CONTACT_ITEMS } from '../data'

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0 },
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section-container">
      <SectionHeading first="Let's" accent="Connect" sub="Have a project, opportunity, or collaboration in mind? Reach out below." />

      <div className="contact-grid">
        <Reveal x={-50} y={0} className="glass-card contact-info-card">
          <h3>Contact Details</h3>
          <p>Feel free to reach out directly via phone, email, or connect through social channels.</p>

          <motion.div variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            {CONTACT_ITEMS.map((c) => (
              <motion.div className="contact-item" key={c.label} variants={itemVariants} whileHover={{ x: 6 }}>
                <div className="contact-icon"><i className={c.icon} /></div>
                <div>
                  <span className="lbl">{c.label}</span>
                  <p className="val">{c.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>

        <Reveal as="form" x={50} y={0} delay={0.1} className="glass-card contact-form" onSubmit={onSubmit}>
          <div className="input-group">
            <motion.input type="text" placeholder="Your Name" required whileFocus={{ scale: 1.02 }} />
          </div>
          <div className="input-group">
            <motion.input type="email" placeholder="Your Email" required whileFocus={{ scale: 1.02 }} />
          </div>
          <div className="input-group">
            <motion.textarea rows={5} placeholder="Your Message" required whileFocus={{ scale: 1.02 }} />
          </div>

          <motion.button
            type="submit"
            className="btn-glow-primary form-submit"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
          >
            Send Message <i className="fa-solid fa-paper-plane" />
          </motion.button>

          <AnimatePresence>
            {sent && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
              >
                <i className="fa-solid fa-circle-check" /> Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
