import './Footer.css'

const LINKS = [
  { label: 'About',    id: 'about' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Services', id: 'services' },
  { label: 'Work',     id: 'work' },
  { label: 'Contact',  id: 'contact' },
]

export default function Footer() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__top-inner">
          <div className="footer__brand">
            <span className="footer__logo">Ammara<span>.</span></span>
            <p className="footer__tagline">
              Full-Stack Developer · Karachi, Pakistan<br />
              Building modern digital experiences.
            </p>
          </div>
          <nav className="footer__nav">
            <span className="footer__nav-label">Navigation</span>
            {LINKS.map(l => (
              <button key={l.id} className="footer__link" onClick={() => go(l.id)}>
                {l.label}
              </button>
            ))}
          </nav>
          <div className="footer__contact">
            <span className="footer__nav-label">Contact</span>
            <a className="footer__link" href="mailto:ammara.saleem@email.com">ammara.saleem@email.com</a>
            <span className="footer__link" style={{ cursor: 'default' }}>Karachi, Pakistan</span>
            <div className="footer__socials">
              {['GitHub','LinkedIn','Twitter'].map(s => (
                <a key={s} href="#" className="footer__social">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© 2025 Ammara Saleem. All rights reserved.</span>
          <span>Designed &amp; Built with ❤️</span>
        </div>
      </div>
    </footer>
  )
}
