import { useReveal } from '../hooks/useReveal'
import './Insights.css'

const POSTS = [
  {
    num: '01', tag: 'Laravel', tagColor: '#E63946',
    title: 'Building Scalable REST APIs with Laravel Sanctum',
    excerpt: 'A deep dive into token-based authentication, rate limiting, and API versioning strategies in modern Laravel applications.',
    date: 'Apr 2025', read: '6 min',
  },
  {
    num: '02', tag: 'React', tagColor: '#61dafb',
    title: 'Modern State Management in React 2025',
    excerpt: 'Exploring patterns beyond Redux — Zustand, Jotai, React Query, and when to use each one for optimal developer experience.',
    date: 'Mar 2025', read: '8 min',
  },
  {
    num: '03', tag: 'Architecture', tagColor: '#F8B400',
    title: 'Clean Architecture in ASP.NET Core Projects',
    excerpt: 'How to structure enterprise .NET applications with CQRS, the repository pattern, and proper separation of concerns.',
    date: 'Feb 2025', read: '10 min',
  },
]

export default function Insights() {
  const ref = useReveal()
  return (
    <section className="insights" id="insights" ref={ref}>
      <div className="container">
        <div className="insights__head sr fade sd1">
          <span className="tag">Blog</span>
        </div>

        <div className="insights__intro">
          <h2 className="insights__heading sr up sd2">
            Latest <em className="insights__em">Insights</em>
          </h2>
          <p className="insights__sub sr up sd3">
            Lessons learned building web apps in the real world — dev tips, architecture thoughts, and more.
          </p>
        </div>

        <div className="insights__grid">
          {POSTS.map((p, i) => (
            <article key={p.num} className={`icard sr up sd${i + 1}`}>
              <div className="icard__top">
                <span className="icard__tag" style={{ color: p.tagColor }}>{p.tag}</span>
                <span className="icard__meta">{p.date} · {p.read} read</span>
              </div>
              <div className="icard__num">{p.num}</div>
              <h3 className="icard__title">{p.title}</h3>
              <p className="icard__excerpt">{p.excerpt}</p>
              <div className="icard__footer">
                <span className="icard__read-link">Read Article →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
