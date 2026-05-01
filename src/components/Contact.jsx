import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Contact.css'

export default function Contact() {
  const ref = useReveal()
  const [form, setForm]   = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]   = useState(false)
  const [focus, setFocus] = useState(null)

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4500)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const INFO = [
    { icon: '✉', label: 'Email',    val: 'ammarasaleem311@gmail.com',  sub: 'Reply within 24h' },
    { icon: '◎', label: 'Location', val: 'Karachi, Pakistan',        sub: 'UTC+5 (PKT)' },
    { icon: '◈', label: 'Hire',     val: 'Open to Opportunities',    sub: 'Freelance & Full-time' },
    { icon: '⊕', label: 'Connect',  val: 'www.linkedin.com/in/ammara-saleem-422825370',   sub: '@ammara_dev' },
  ]

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        {/* Yellow top bar */}
        <div className="contact__bar sr scale sd1" />

        <div className="contact__head sr fade sd1">
          <span className="tag">Get In Touch</span>
        </div>

        <div className="contact__layout">
          {/* Left */}
          <div className="contact__left">
            <h2 className="contact__heading sr up sd2">
              Let's Build<br />
              <em className="contact__em">Something</em><br />
              Great Together.
            </h2>
            <p className="contact__lead sr up sd3">
              Have a project, a question, or just want to say hello?
              Drop me a message — I'd love to hear from you.
            </p>

            <div className="contact__info sr up sd4">
              {INFO.map(item => (
                <div key={item.label} className="cinfo">
                  <span className="cinfo__icon">{item.icon}</span>
                  <div>
                    <span className="cinfo__label">{item.label}</span>
                    <span className="cinfo__val">{item.val}</span>
                    <span className="cinfo__sub">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrap sr right sd2">
            {sent && (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <div>
                  <strong>Message sent!</strong>
                  <p>I'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}
            <form className="cform" onSubmit={submit}>
              <div className="cform__row">
                <div className={`cform__group ${focus === 'name' ? 'cform__group--focus' : ''}`}>
                  <label className="cform__label">Full Name *</label>
                  <input
                    className="cform__field"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set('name')}
                    onFocus={() => setFocus('name')}
                    onBlur={() => setFocus(null)}
                    required
                  />
                </div>
                <div className={`cform__group ${focus === 'email' ? 'cform__group--focus' : ''}`}>
                  <label className="cform__label">Email Address *</label>
                  <input
                    className="cform__field"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={set('email')}
                    onFocus={() => setFocus('email')}
                    onBlur={() => setFocus(null)}
                    required
                  />
                </div>
              </div>
              <div className={`cform__group ${focus === 'subject' ? 'cform__group--focus' : ''}`}>
                <label className="cform__label">Subject</label>
                <input
                  className="cform__field"
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={set('subject')}
                  onFocus={() => setFocus('subject')}
                  onBlur={() => setFocus(null)}
                />
              </div>
              <div className={`cform__group ${focus === 'message' ? 'cform__group--focus' : ''}`}>
                <label className="cform__label">Message *</label>
                <textarea
                  className="cform__field cform__field--ta"
                  placeholder="Tell me about your project, goals, and timeline..."
                  value={form.message}
                  onChange={set('message')}
                  onFocus={() => setFocus('message')}
                  onBlur={() => setFocus(null)}
                  rows={5}
                  required
                />
              </div>
              <button className={`cform__submit ${sent ? 'cform__submit--sent' : ''}`} type="submit">
                {sent ? '✓ Sent Successfully!' : 'Send Message'}
                {!sent && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
