/**
 * Bootstrap del sitio.
 * 1) Aplica el tema guardado. 2) Renderiza header/footer y la página actual
 * desde `data.js`. 3) Convierte los íconos de Lucide y arranca los
 * componentes (carousel, contadores, lightbox, scroll reveal, formulario).
 */

import { createIcons, icons } from 'lucide'
import { applyTheme, initThemeToggle } from './utils/theme.js'
import { initHeader } from './components/header.js'
import { renderFooter } from './components/footer.js'
import { renderPage, bindContactForm } from './components/sections.js'
import { initCarousel } from './components/carousel.js'
import { initStats } from './components/stats.js'
import { initLightbox } from './components/lightbox.js'
import { initScrollReveal } from './components/scrollReveal.js'

document.addEventListener('DOMContentLoaded', () => {
  applyTheme()
  initHeader()
  renderFooter(document.getElementById('site-footer'))
  renderPage()

  bindContactForm()

  initThemeToggle()
  createIcons({ icons })

  initCarousel()
  initStats()
  initLightbox()
  initScrollReveal()
})