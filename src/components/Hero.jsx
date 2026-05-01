import { useState, useEffect } from 'react'
import './Hero.css'

const ROLES = ['Full-Stack Developer', 'React Engineer', 'Laravel Expert', 'PHP Specialist', '.NET Developer']

export default function Hero() {
  const [idx, setIdx]       = useState(0)
  const [phase, setPhase]   = useState('in')   // 'in' | 'out'
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setPhase('out')
      setTimeout(() => {
        setIdx(i => (i + 1) % ROLES.length)
        setPhase('in')
      }, 420)
    }, 3200)
    return () => clearInterval(t)
  }, [])

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero">
      {/* Yellow accent strip */}
      <div className="hero__strip" aria-hidden="true" />

      <div className="container">
        <div className="hero__layout">

          {/* ── LEFT ── */}
          <div className="hero__left">
            <div className={`hero__badge ${mounted ? 'hero__badge--in' : ''}`}>
              <span className="hero__badge-dot" />
              Available for Work
            </div>

            <h1 className={`hero__name ${mounted ? 'hero__name--in' : ''}`}>
              Ammara<br />
              <em className="hero__name-italic">Saleem</em>
            </h1>

            <div className={`hero__role-row ${mounted ? 'hero__role-row--in' : ''}`}>
              <span className="hero__role-slash">&#47;&#47;</span>
              <span className={`hero__role hero__role--${phase}`}>{ROLES[idx]}</span>
            </div>

            <p className={`hero__desc ${mounted ? 'hero__desc--in' : ''}`}>
              I craft fast, accessible, and visually stunning web applications
              from frontend interfaces to backend systems — end to end with precision.
            </p>

            <div className={`hero__ctas ${mounted ? 'hero__ctas--in' : ''}`}>
              <button className="btn btn-yellow hero__btn" onClick={() => scrollTo('work')}>
                View My Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="btn btn-white" onClick={() => scrollTo('contact')}>
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className={`hero__stats ${mounted ? 'hero__stats--in' : ''}`}>
              {[
                { n: '3+',  l: 'Years Exp.'    },
                { n: '20+', l: 'Projects Done' },
                { n: '10+', l: 'Technologies'  },
                { n: '100%',l: 'Dedication'    },
              ].map(s => (
                <div className="hstat" key={s.l}>
                  <span className="hstat__n">{s.n}</span>
                  <span className="hstat__l">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — visual card ── */}
          <div className={`hero__right ${mounted ? 'hero__right--in' : ''}`}>
            <div className="hero__card">
              {/* Top accent bar */}
              <div className="hero__card-bar" />

              <div className="hero__card-body">
                {/* Avatar initials */}
                <div className="hero__avatar">
                  <span>AS</span>
                </div>

                <h2 className="hero__card-name">Ammara Saleem</h2>
                <p className="hero__card-role">Full-Stack Developer</p>

                <div className="hero__card-divider" />

                {/* Tech stack badges */}
                <p className="hero__card-label">Tech Stack</p>
                <div className="hero__badges">
                  {['React','Laravel','PHP','ASP.NET','MySQL','JavaScript','CSS3','HTML5'].map((t,i) => (
                    <span key={t} className="hbadge" style={{ animationDelay: `${0.6 + i * 0.07}s` }}>{t}</span>
                  ))}
                </div>

                <div className="hero__card-divider" />

                {/* Status row */}
                <div className="hero__card-status">
                  <span className="hero__card-status-dot" />
                  <span>Open to new opportunities</span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="hero__card-corner" aria-hidden="true">
                <svg width="60" height="60" viewBox="0 0 60 60"><path d="M60 0 L60 60 L0 60" fill="none" stroke="rgba(248,180,0,0.15)" strokeWidth="1"/></svg>
              </div>
            </div>

            {/* Floating tags */}
            <div className="hero__float hero__float--1">Karachi, PK 🇵🇰</div>
            <div className="hero__float hero__float--2">⚡ Fast Delivery</div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll">
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
