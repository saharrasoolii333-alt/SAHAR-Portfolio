import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS } from '../data'
import { THEMES, useSettings } from '../SettingsContext'

export default function CommandPalette({ open, setOpen }) {
  const [q, setQ] = useState('')
  const [idx, setIdx] = useState(0)
  const inputRef = useRef(null)
  const { update } = useSettings()

  const commands = useMemo(() => [
    ...NAV_LINKS.map((l) => ({ label: `Go to ${l.label}`, icon: 'fa-solid fa-arrow-right', run: () => document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth' }) })),
    ...Object.entries(THEMES).map(([k, t]) => ({ label: `Theme: ${t.label}`, icon: 'fa-solid fa-palette', run: () => update({ theme: k }) })),
    { label: 'Email Sahar', icon: 'fa-solid fa-envelope', run: () => (window.location.href = 'mailto:sahar.rasoolii333@gmail.com') },
  ], [update])

  const results = commands.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()))

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen((o) => !o) }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setOpen])

  useEffect(() => { if (open) { setQ(''); setIdx(0); setTimeout(() => inputRef.current?.focus(), 50) } }, [open])

  const run = (c) => { if (c) { c.run(); setOpen(false) } }
  const onInputKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => Math.min(i + 1, results.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)) }
    if (e.key === 'Enter') run(results[idx])
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="palette-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
          <motion.div
            className="palette"
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <input ref={inputRef} value={q} onChange={(e) => { setQ(e.target.value); setIdx(0) }} onKeyDown={onInputKey} placeholder="Type a command or search…" />
            <ul>
              {results.map((c, i) => (
                <motion.li key={c.label} layout className={i === idx ? 'sel' : ''} onMouseEnter={() => setIdx(i)} onClick={() => run(c)}>
                  <i className={c.icon} /> {c.label}
                </motion.li>
              ))}
              {!results.length && <li className="empty">No results</li>}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
