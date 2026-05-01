import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const els = root.classList?.contains('sr')
      ? [root]
      : Array.from(root.querySelectorAll('.sr'))

    if (!els.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: options.threshold ?? 0.08, rootMargin: options.rootMargin ?? '0px 0px -40px 0px' }
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return ref
}
