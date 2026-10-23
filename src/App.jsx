import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import AmbientOrbs from './components/AmbientOrbs'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Marquee from './components/Marquee'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import SettingsPanel from './components/SettingsPanel'
import CommandPalette from './components/CommandPalette'
import useActiveSection from './hooks/useActiveSection'
import { useSettings } from './SettingsContext'
import { NAV_LINKS } from './data'

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export default function App() {
  const active = useActiveSection(SECTION_IDS)
  const { settings } = useSettings()
  const [palette, setPalette] = useState(false)

  return (
    <MotionConfig reducedMotion={settings.reduceMotion ? 'always' : 'user'}>
      <AmbientOrbs />
      <CustomCursor />
      <Navbar active={active} />
      <main className="main-content">
        <Hero />
        <Marquee />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <SettingsPanel onOpenPalette={() => setPalette(true)} />
      <CommandPalette open={palette} setOpen={setPalette} />
    </MotionConfig>
  )
}
