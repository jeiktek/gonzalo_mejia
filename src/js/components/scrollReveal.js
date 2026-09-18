/**
 * Aparición al hacer scroll (UI-UX.md: 16).
 * Los elementos con `[data-reveal]` se revelan al entrar al viewport.
 * Respeta `prefers-reduced-motion`.
 */

import { prefersReducedMotion } from '../utils/helpers.js'

export function initScrollReveal() {
  const items = document.querySelectorAll('[data-reveal]')
  if (!items.length) return

  if (
    prefersReducedMotion() ||
    !('IntersectionObserver' in window)
  ) {
    items.forEach((el) => el.classList.add('is-revealed'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  items.forEach((el) => observer.observe(el))
}