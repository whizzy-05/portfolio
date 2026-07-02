import { Sun, Moon, Menu, X } from 'lucide-react'
import { useState } from 'react'

const NAV_ITEMS = [
  { id: 'home', label: 'home', ext: '.jsx' },
  { id: 'about', label: 'about', ext: '.md' },
  { id: 'skills', label: 'skills', ext: '.json' },
  { id: 'projects', label: 'projects', ext: '/' },
  { id: 'resume', label: 'resume', ext: '.pdf' },
  { id: 'contact', label: 'contact', ext: '.txt' },
]

export default function Sidebar({ active, dark, onToggleDark }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop sidebar — file-tree / folder-tab hybrid */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-56 flex-col justify-between border-r border-slate/20 bg-paper dark:bg-navy-deep z-40">
        <div>
          <div className="px-6 pt-8 pb-6">
            <p className="font-display text-xl font-semibold text-ink dark:text-paper leading-tight">
              Pendo
              <br />
              Amani
            </p>
            <p className="font-mono text-[11px] text-slate mt-2 tracking-wide">
              ~/portfolio
            </p>
          </div>

          <nav className="flex flex-col mt-2">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`group relative flex items-center gap-2 pl-6 pr-4 py-3 font-mono text-sm text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-paper-dim dark:bg-ink-soft/30 text-emerald dark:text-emerald-bright'
                      : 'text-slate hover:text-ink dark:hover:text-paper hover:bg-paper-dim/50 dark:hover:bg-ink-soft/10'
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-[3px] transition-colors duration-200 ${
                      isActive ? 'bg-emerald' : 'bg-transparent'
                    }`}
                  />
                  <span>{item.label}</span>
                  <span className="opacity-50">{item.ext}</span>
                </button>
              )
            })}
          </nav>
        </div>

        <div className="px-6 pb-8">
          <button
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            className="flex items-center gap-2 font-mono text-xs text-slate hover:text-ink dark:hover:text-paper transition-colors"
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
            {dark ? 'light_mode()' : 'dark_mode()'}
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 py-4 bg-paper/95 dark:bg-navy-deep/95 backdrop-blur border-b border-slate/20">
        <p className="font-display text-lg font-semibold text-ink dark:text-paper">
          Yvonne Misango
        </p>
        <div className="flex items-center gap-3">
          <button onClick={onToggleDark} aria-label="Toggle dark mode" className="text-slate">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu" className="text-ink dark:text-paper">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="md:hidden fixed top-[61px] left-0 right-0 z-30 bg-paper dark:bg-navy-deep border-b border-slate/20 flex flex-col">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`font-mono text-sm text-left px-5 py-3 border-b border-slate/10 ${
                active === item.id
                  ? 'text-emerald dark:text-emerald-bright bg-paper-dim dark:bg-ink-soft/20'
                  : 'text-slate'
              }`}
            >
              {item.label}
              <span className="opacity-50">{item.ext}</span>
            </button>
          ))}
        </div>
      )}
    </>
  )
}

export { NAV_ITEMS }
