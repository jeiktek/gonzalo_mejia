/**
 * Lightbox para la galería (UI-UX.md: 13).
 * Usa `<dialog>` nativo para soporte de foco y accesibilidad.
 * Navegación por flechas/teclado y swipe táctil.
 */

import { icon } from '../utils/helpers.js'

export function initLightbox() {
  const items = [...document.querySelectorAll('[data-gallery-image]')]
  if (!items.length) return

  const images = items.map((el) => ({
    src: el.dataset.galleryImage,
    caption: el.dataset.galleryCaption || '',
  }))

  const dialog = document.createElement('dialog')
  dialog.className = 'lightbox'
  dialog.setAttribute('aria-label', 'Visor de imágenes')
  dialog.innerHTML = `
    <figure class="lightbox-figure">
      <button type="button" class="lightbox-close" aria-label="Cerrar">${icon('x')}</button>
      <img class="lightbox-img" src="" alt="">
      <figcaption class="lightbox-cap">
        <span class="lightbox-caption"></span>
        <div class="lightbox-nav">
          <button type="button" class="lightbox-prev" aria-label="Imagen anterior">${icon('chevron-left')}</button>
          <span class="lightbox-counter" aria-hidden="true"></span>
          <button type="button" class="lightbox-next" aria-label="Siguiente imagen">${icon('chevron-right')}</button>
        </div>
      </figcaption>
    </figure>
  `
  document.body.appendChild(dialog)

  const imgEl = dialog.querySelector('.lightbox-img')
  const captionEl = dialog.querySelector('.lightbox-caption')
  const counterEl = dialog.querySelector('.lightbox-counter')
  const closeBtn = dialog.querySelector('.lightbox-close')
  const prevBtn = dialog.querySelector('.lightbox-prev')
  const nextBtn = dialog.querySelector('.lightbox-next')
  let current = 0

  function show(index) {
    current = (index + images.length) % images.length
    const slide = images[current]
    imgEl.src = slide.src
    imgEl.alt = slide.caption
    captionEl.textContent = slide.caption
    counterEl.textContent = `${current + 1} / ${images.length}`
  }

  function open(index) {
    show(index)
    if (typeof dialog.showModal === 'function') {
      dialog.showModal()
    } else {
      dialog.setAttribute('open', '')
    }
  }

  function close() {
    if (typeof dialog.close === 'function') dialog.close()
    else dialog.removeAttribute('open')
  }

  items.forEach((el, i) => {
    el.addEventListener('click', () => open(i))
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        open(i)
      }
    })
  })

  closeBtn.addEventListener('click', close)

  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) close()
  })

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    show(current - 1)
  })

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    show(current + 1)
  })

  document.addEventListener('keydown', (e) => {
    if (!dialog.open && !dialog.hasAttribute('open')) return
    if (e.key === 'Escape') close()
    if (e.key === 'ArrowLeft') show(current - 1)
    if (e.key === 'ArrowRight') show(current + 1)
  })

  let touchX = null
  dialog.addEventListener(
    'touchstart',
    (e) => {
      touchX = e.changedTouches[0].clientX
    },
    { passive: true }
  )
  dialog.addEventListener(
    'touchend',
    (e) => {
      if (touchX === null) return
      const delta = e.changedTouches[0].clientX - touchX
      if (Math.abs(delta) > 48)
        show(current + (delta < 0 ? 1 : -1))
      touchX = null
    },
    { passive: true }
  )
}