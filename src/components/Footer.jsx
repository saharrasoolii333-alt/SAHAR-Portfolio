import { motion } from 'framer-motion'
import { SOCIALS } from '../data'

export default function Footer() {
  return (
    <motion.footer
      className="glass-footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="footer-content">
        <p>Made with ✦ &amp; Passion by <strong>Sahar Rasooli</strong> © 2026</p>
        <div className="footer-socials">
          {SOCIALS.map((s) => (
            <motion.a
              key={s.title}
              href={s.href}
              title={s.title}
              {...(s.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              whileHover={{ y: -4, scale: 1.2 }}
            >
              <i className={s.icon} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}
