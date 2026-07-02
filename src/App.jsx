import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'resume', 'contact']

function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  })
  const [active, setActive] = useState('home')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="dark:bg-navy-deep bg-paper min-h-screen transition-colors duration-300">
      <Sidebar active={active} dark={dark} onToggleDark={() => setDark((d) => !d)} />
      <main className="md:ml-56 pt-[61px] md:pt-0">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}

export default App
