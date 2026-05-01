import './Ticker.css'

const items = ['React','Laravel','PHP','ASP.NET Core','JavaScript','MySQL','SQL','HTML5','CSS3','JSON','REST APIs','Full-Stack']

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="ticker">
      <div className="ticker__track">
        {doubled.map((t, i) => (
          <span key={i} className="ticker__item">
            {t} <span className="ticker__sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
