/**
 * Contadores de estadísticas (UI-UX.md: 10).
 * Animan el número al entrar en el viewport. Respeta `prefers-reduced-motion`.
 */

import { formatNumber, prefersReducedMotion } from '../utils/helpers.js'

const DURATION = 1600

export function initStats() {
  const els = [...document.querySelectorAll('.stat-num[data-count]')]
  if (!els.length) return

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    els.forEach((el) => {
      el.textContent = formatNumber(Number(el.dataset.count))
    })
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        animate(entry.target)
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.4 }
  )

  els.forEach((el) => observer.observe(el))
}

function animate(el) {
  const target = Number(el.dataset.count)
  const start = performance.now()

  const frame = (now) => {
    const progress = Math.min((now - start) / DURATION, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = formatNumber(Math.round(target * eased))
    if (progress < 1) requestAnimationFrame(frame)
    else el.textContent = formatNumber(target)
  }

  requestAnimationFrame(frame)
}