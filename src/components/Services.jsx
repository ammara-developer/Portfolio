import { useReveal } from '../hooks/useReveal'
import './Services.css'

const SERVICES = [
  {
    num: '01',
    icon: '◈',
    title: 'Frontend Development',
    desc: 'Pixel-perfect, responsive interfaces built with React, HTML5, CSS3, and modern JavaScript. Fast, accessible, and beautiful.',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive'],
    accent: 'yellow',
  },
  {
    num: '02',
    icon: '⬡',
    title: 'Backend & API Development',
    desc: 'Scalable server-side solutions with Laravel, PHP, and ASP.NET Core. RESTful APIs, authentication, business logic — built to last.',
    tags: ['Laravel', 'PHP', 'ASP.NET Core', 'REST APIs'],
    accent: 'red',
  },
  {
    num: '03',
    icon: '◉',
    title: 'Database Design & Management',
    desc: 'Efficient schema architecture and query optimization with MySQL and SQL. Designed for performance and reliability at scale.',
    tags: ['MySQL', 'SQL', 'Schema Design', 'Optimization'],
    accent: 'yellow',
  },
  {
    num: '04',
    icon: '◎',
    title: 'Full-Stack Web Applications',
    desc: 'End-to-end product development — from architecture to deployment. One developer who understands the entire stack.',
    tags: ['Full-Stack', 'MVC', 'SPA', 'API Integration'],
    accent: 'red',
  },
]

export default function Services() {
  const ref = useReveal()
  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="services__head sr fade sd1">
          <span className="tag">What I Do</span>
        </div>

        <div className="services__intro">
          <h2 className="services__heading sr up sd2">
            Comprehensive <em className="services__em">Digital Solutions</em>
          </h2>
          <p className="services__sub sr up sd3">
            From conception to completion — I deliver end-to-end solutions
            tailored exactly to your goals and requirements.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div key={s.num} className={`svc sr up sd${i + 1}`}>
              <div className="svc__top">
                <span className={`svc__icon svc__icon--${s.accent}`}>{s.icon}</span>
                <span className="svc__num">{s.num}</span>
              </div>
              <h3 className="svc__title">{s.title}</h3>
              <p className="svc__desc">{s.desc}</p>
              <div className="svc__tags">
                {s.tags.map(t => <span key={t} className="svc__tag">{t}</span>)}
              </div>
              <div className={`svc__bar svc__bar--${s.accent}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
