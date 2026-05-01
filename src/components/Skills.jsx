import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Skills.css'

const SKILLS = [
  { name: 'HTML5 / CSS3',   pct: 96, color: '#F8B400' },
  { name: 'JavaScript',     pct: 90, color: '#F8B400' },
  { name: 'React',          pct: 88, color: '#61dafb' },
  { name: 'PHP',            pct: 92, color: '#8892be' },
  { name: 'Laravel',        pct: 91, color: '#E63946' },
  { name: 'ASP.NET Core',   pct: 82, color: '#9b72cf' },
  { name: 'MySQL',          pct: 88, color: '#4479a1' },
  { name: 'SQL',            pct: 87, color: '#4479a1' },
  { name: 'JSON / REST',    pct: 95, color: '#F8B400' },
]

const TOOLS = [
  { cat: 'Frontend',   items: ['React','JavaScript','HTML5','CSS3','Responsive Design'] },
  { cat: 'Backend',    items: ['PHP','Laravel','ASP.NET Core','REST APIs','MVC'] },
  { cat: 'Database',   items: ['MySQL','SQL','Schema Design','Query Optimization'] },
  { cat: 'Dev Tools',  items: ['Git','VS Code','Postman','npm','Composer'] },
]

function SkillBar({ skill, i }) {
  const [w, setW] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setW(skill.pct), i * 90); obs.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [skill.pct, i])
  return (
    <div ref={ref} className="sbar">
      <div className="sbar__top">
        <span className="sbar__name">{skill.name}</span>
        <span className="sbar__pct">{w ? skill.pct + '%' : ''}</span>
      </div>
      <div className="sbar__track">
        <div className="sbar__fill" style={{ width: `${w}%`, background: skill.color }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useReveal()
  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <div className="skills__top sr fade sd1">
          <span className="tag">Expertise</span>
          <h2 className="skills__heading sr up sd2">
            My Skills &amp; <em className="skills__em">Toolbox</em>
          </h2>
          <p className="skills__sub sr up sd3">
            Technologies I use daily to build reliable, scalable, and beautiful products.
          </p>
        </div>

        <div className="skills__body">
          {/* Bars */}
          <div className="skills__bars sr left sd2">
            {SKILLS.map((s, i) => <SkillBar key={s.name} skill={s} i={i} />)}
          </div>

          {/* Tool categories */}
          <div className="skills__cats">
            {TOOLS.map((t, i) => (
              <div key={t.cat} className={`scat sr up sd${i + 2}`}>
                <div className="scat__header">
                  <span className="scat__icon">
                    {i === 0 ? '◈' : i === 1 ? '⬡' : i === 2 ? '◉' : '◎'}
                  </span>
                  <h3 className="scat__title">{t.cat}</h3>
                </div>
                <div className="scat__items">
                  {t.items.map(item => (
                    <span key={item} className="scat__item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
