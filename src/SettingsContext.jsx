import { createContext, useContext, useEffect, useState } from 'react'

export const THEMES = {
  noir:   { label: 'Noir Gold',   primary: '#8A1F2D', neon: '#D4A24C' },
  violet: { label: 'Soft Violet', primary: '#6F66D6', neon: '#D9D4FF' },
  cream:  { label: 'Cream Blue',  primary: '#2F5BD0', neon: '#FFD34D' },
}

const DEFAULTS = { theme: 'noir', reduceMotion: false, cursor: true }
const Ctx = createContext(null)
export const useSettings = () => useContext(Ctx)

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem('portfolio-settings')) } }
    catch { return DEFAULTS }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = THEMES[settings.theme] ? settings.theme : 'noir'
    try { localStorage.setItem('portfolio-settings', JSON.stringify(settings)) } catch {}
  }, [settings])

  const update = (patch) => setSettings((s) => ({ ...s, ...patch }))
  return <Ctx.Provider value={{ settings, update }}>{children}</Ctx.Provider>
}
