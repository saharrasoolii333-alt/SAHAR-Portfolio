import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { THEMES, useSettings } from '../SettingsContext'

function Toggle({ on, onClick, label }) {
  return (
    <button className="toggle-row" onClick={onClick}>
      <span>{label}</span>
      <span className={`toggle ${on ? 'on' : ''}`}>
        <motion.span layout className="toggle-knob" transition={{ type: 'spring', stiffness: 500, damping: 30 }} />
      </span>
    </button>
  )
}

export default function SettingsPanel({ onOpenPalette }) {
  const [open, setOpen] = useState(false)
  const { settings, update } = useSettings()

  return (
    <div className="settings-dock">
      <AnimatePresence>
        {open && (
          <motion.div
            className="settings-panel glass-card"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <h4>Settings</h4>
            <p className="set-label">Accent theme</p>
            <div className="swatches">
              {Object.entries(THEMES).map(([key, t]) => (
                <motion.button
                  key={key}
                  title={t.label}
                  className={`swatch ${settings.theme === key ? 'sel' : ''}`}
                  style={{ background: `linear-gradient(135deg, ${t.primary}, ${t.neon})` }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => update({ theme: key })}
                />
              ))}
            </div>
            <Toggle label="Custom cursor" on={settings.cursor} onClick={() => update({ cursor: !settings.cursor })} />
            <Toggle label="Reduce motion" on={settings.reduceMotion} onClick={() => update({ reduceMotion: !settings.reduceMotion })} />
            <button className="palette-btn" onClick={() => { setOpen(false); onOpenPalette() }}>
              <i className="fa-solid fa-terminal" /> Command palette <kbd>Ctrl K</kbd>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="settings-fab"
        aria-label="Settings"
        onClick={() => setOpen((o) => !o)}
        animate={{ rotate: open ? 90 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fa-solid fa-gear" />
      </motion.button>
    </div>
  )
}
