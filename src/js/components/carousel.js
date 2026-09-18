/**
 * Carrusel del Hero (UI-UX.md: 8).
 * Autoplay (6s), controles, indicadores y swipe táctil.
 * Se pausa al interactuar. Respeta `prefers-reduced-motion`.
 */

import { prefersReducedMotion } from '../utils/helpers.js'

const AUTOPLAY_MS = 6000

export function initCarousel() {
  const container = document.getElementById('hero-carousel')
  if (!container) return

  const slides = [...container.querySelectorAll('.hero-slide')]
  const dots = [...container.querySelectorAll('.hero-dot')]
  const prev = container.querySelector('.hero-arrow.prev')
  const next = container.querySelector('.hero-arrow.next')
  if (!slides.length) return

  const reduced = prefersReducedMotion()
  let current = 0
  let timer = null
  let touchX = null

  const stop = () => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  const start = () => {
    stop()
    if (!reduced && slides.length > 1) {
      timer = setInterval(() => go(current + 1), AUTOPLAY_MS)
    }
  }

  function go(index) {
    current = (index + slides.length) % slides.length
    slides.forEach((slide, k) => {
      const active = k === current
      slide.classList.toggle('is-active', active)
      slide.setAttribute('aria-hidden', String(!active))
    })
    dots.forEach((dot, k) => dot.classList.toggle('is-active', k === current))
    start()
  }

  prev?.addEventListener('click', () => go(current - 1))
  next?.addEventListener('click', () => go(current + 1))

  dots.forEach((dot, k) => dot.addEventListener('click', () => go(k)))

  container.addEventListener('pointerenter', stop)
  container.addEventListener('pointerleave', start)
  container.addEventListener('focusin', stop)
  container.addEventListener('focusout', start)

  container.addEventListener(
    'touchstart',
    (e) => {
      touchX = e.changedTouches[0].clientX
      stop()
    },
    { passive: true }
  )

  container.addEventListener(
    'touchend',
    (e) => {
      if (touchX === null) return
      const delta = e.changedTouches[0].clientX - touchX
      if (Math.abs(delta) > 48) go(current + (delta < 0 ? 1 : -1))
      touchX = null
    },
    { passive: true }
  )

  go(0)
}