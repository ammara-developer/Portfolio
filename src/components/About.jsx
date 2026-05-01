import { useReveal } from '../hooks/useReveal'
import './About.css'

export default function About() {
  const ref = useReveal()

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">

        {/* Section label */}
        <div className="sr fade sd1">
          <span className="tag">About Me</span>
        </div>

        <div className="about__grid">
          {/* LEFT — image / visual */}
          <div className="about__visual sr left sd1">
            <div className="about__img-wrap">
              <div className="about__img-placeholder">
                <div className="about__img-initials">AS</div>
                <div className="about__img-glow" />
              </div>
              {/* Experience badge */}
              <div className="about__exp-badge sr scale sd3">
                <span className="about__exp-num">3+</span>
                <span className="about__exp-label">Years of<br/>Experience</span>
              </div>
            </div>
          </div>

          {/* RIGHT — text */}
          <div className="about__content">
            <h2 className="about__heading sr up sd2">
              Crafting Digital<br />
              <em className="about__heading-em">Experiences</em>
            </h2>

            <p className="about__intro sr up sd3">
              I'm <strong>Ammara Saleem</strong>, a full-stack developer from Karachi, Pakistan.
              I specialize in building high-quality web applications that are fast, accessible,
              and visually refined — from frontend to backend.
            </p>
            <p className="about__body sr up sd4">
              My expertise spans React, Laravel, PHP, ASP.NET Core, and database systems.
              I care deeply about clean code, user experience, and delivering products that
              clients and users are genuinely proud of. I approach every project as a
              partnership — not just a transaction.
            </p>

            {/* Facts grid */}
            <div className="about__facts sr up sd4">
              {[
                ['Name',       'Ammara Saleem'],
                ['Nationality','Pakistani'],
                ['Location',   'Karachi, Pakistan'],
                ['Languages',  'Urdu, English'],
                ['Stack',      'Full-Stack Web Dev'],
                ['Status',     'Open to Work ✓'],
              ].map(([k, v]) => (
                <div key={k} className="afact">
                  <span className="afact__k">{k}</span>
                  <span className="afact__v">{v}</span>
                </div>
              ))}
            </div>

            <div className="about__ctas sr up sd5">
              <button
                className="btn btn-yellow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
