import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Work.css'

const PROJECTS = [

   {
    id: '04', cat: 'Backend/Frontend Development',
    title: 'Netflix clone',
    desc: 'A Netflix clone with user authentication, movie browsing, and personalized recommendations.',
    tech: ['Laravel', 'PHP', 'Redis', 'MySQL'],
    year: '2024', status: 'Live',
    link:'https://netflix-pearl-eight.vercel.app/login',
  },
  {
    id: '01', cat: 'Frontend Development',
    title: 'Gym Website',
    desc: 'A modern, responsive website for a local gym with class schedules, trainer profiles, and membership information.',
    tech: ['Laravel', 'React', 'MySQL', 'Stripe'],
    link:'https://ammara-developer.github.io/Gym-Website/', 
      year: '2024', status: 'Live',
  },
  {
    id: '02', cat: 'Web Application',
    title: 'Coffee Shop ',
    desc: 'A modern, responsive website for a local coffee shop with menu browsing, online ordering, and loyalty program integration.',
    tech: ['ASP.NET Core', 'React', 'SQL Server'],
    year: '2024', status: 'Live',
    link:'https://ammara-developer.github.io/Java-Buzz/', 
  },
  {
    id: '03', cat: 'SaaS Product',
    title: 'Ecommerce Website',
    desc: 'A scalable e-commerce platform with product management, shopping cart, and secure checkout features.',
    tech: ['React', 'PHP', 'MySQL'],
    year: '2023', status: 'Live',
      link:'https://ammara-developer.github.io/ecommerce-website.io/index.html', 
  },
 
  {
    id: '05', cat: 'Data Dashboard',
    title: 'Solar intelligence',
    desc: '.',
    tech: ['React', 'ASP.NET Core', 'SQL', 'Chart.js'],
    year: '2025', status: 'In Progress',
     link:'https://solaris-5y5w.vercel.app/#impact',
  },
  {
    id: '06', cat: 'CMS',
    title: 'Shoes Site Banner',
    desc: 'Modern banner design for a shoe retail website.',
    tech: ['Laravel', 'React', 'MySQL'],
    year: '2025', status: 'Coming Soon',
       link:'https://ammara-developer.github.io/React-First-Project/',
  },
]

const STATUS_COLORS = { 'Live': '#22c55e', 'In Progress': '#f59e0b', 'Coming Soon': '#8b5cf6' }

export default function Work() {
  const ref = useReveal()
  const [hovered, setHovered] = useState(null)

  return (
    <section className="work" id="work" ref={ref}>
      <div className="container">
        <div className="work__head sr fade sd1">
          <span className="tag">Selected Work</span>
        </div>

        <div className="work__intro">
          <h2 className="work__heading sr up sd2">
            A Portfolio of <em className="work__em">Precision</em>
          </h2>
          <p className="work__sub sr up sd3">
            Projects that combine strong engineering with thoughtful design — built to perform and built to last.
          </p>
        </div>

        {/* Project list — editorial row style */}
        <div className="work__list">
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
             className={`wrow sr up sd${(i % 3) + 1}`}
             
            >
              <span className="wrow__num">{p.id}</span>

              <div className="wrow__main">
                <div className="wrow__top-row">
                  <span className="wrow__cat">{p.cat}</span>
                  <span className="wrow__year">{p.year}</span>
                </div>
                <h3 className="wrow__title">{p.title}</h3>
                <p className="wrow__desc">{p.desc}</p>
                <div className="wrow__tech">
                  {p.tech.map(t => <span key={t} className="wrow__tag">{t}</span>)}
                </div>
              </div>
<div className="wrow__right">
  <span
    className="wrow__status"
    style={{ '--sc': STATUS_COLORS[p.status] }}
  >
    <span className="wrow__status-dot" />
    {p.status}
  </span>

  {p.link && (
    <a href={p.link} target="_blank" rel="noopener noreferrer" className="wrow__link">
      View Project ↗
    </a>
  )}

  <span className="wrow__arrow">→</span>
</div>
                <span
                  className="wrow__status"
                  style={{ '--sc': STATUS_COLORS[p.status] }}

                >
                  <span className="wrow__status-dot" />
                  {p.status}
                  
                </span>
                
                <span className="wrow__arrow">→</span>
              </div>
        
          ))}
        </div>

        {/* CTA strip */}
        <div className="work__cta sr up sd3">
          <p className="work__cta-text">Have a project in mind? Let's discuss it.</p>
          <button
            className="btn btn-yellow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  )
}
