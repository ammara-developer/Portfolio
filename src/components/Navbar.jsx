import { useState, useEffect } from 'react'
import './Navbar.css'

const LINKS = [
  { label: 'About',    id: 'about' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Services', id: 'services' },
  { label: 'Work',     id: 'work' },
  { label: 'Contact',  id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const [active,   setActive]   = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      // Highlight active section
      const ids = LINKS.map(l => l.id)
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(ids[i]); break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__inner container">
        {/* Logo */}
        <button className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="nav__logo-name">Ammara</span>
          <span className="nav__logo-dot">.</span>
        </button>

        {/* Desktop links */}
        <nav className="nav__links">
          {LINKS.map(l => (
            <button
              key={l.id}
              className={`nav__link ${active === l.id ? 'nav__link--on' : ''}`}
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="nav__right">
          <button className="btn btn-yellow nav__cta" onClick={() => go('contact')}>
            Hire Me
          </button>
          {/* Burger */}
          <button
            className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`nav__drawer ${open ? 'nav__drawer--open' : ''}`}>
        {LINKS.map(l => (
          <button key={l.id} className="nav__drawer-link" onClick={() => go(l.id)}>
            {l.label}
          </button>
        ))}
        <button className="btn btn-yellow" onClick={() => go('contact')} style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
          Hire Me
        </button>
      </div>
    </header>
  )
}
