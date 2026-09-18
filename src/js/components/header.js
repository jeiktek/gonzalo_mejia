/**
 * Cabecera y navegación con submenús (UI-UX.md: 7).
 * Renderizada desde `data.js` (navigation + site).
 */

import { navigation, site } from '../data.js'
import { brandIcon, currentPage, icon } from '../utils/helpers.js'

function navItem(item) {
  const isCurrent = currentPage() === item.href

  const linkLabel = item.children
    ? `<button type="button" class="nav-link" aria-expanded="false" aria-haspopup="true">${item.label}${icon('chevron-down')}</button>`
    : `<a class="nav-link" href="${item.href}"${isCurrent ? ' aria-current="page"' : ''}>${item.label}</a>`

  const children = item.children
    ? `<ul class="dropdown">${item.children
        .map(
          (c) =>
            `<li><a class="dropdown-link${currentPage() === c.href ? ' is-active' : ''}" href="${c.href}">${c.label}</a></li>`
        )
        .join('')}</ul>`
    : ''

  const cls = [
    'nav-item',
    item.children ? 'has-children' : '',
    isCurrent ? 'is-active' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return `<li class="${cls}">${linkLabel}${children}</li>`
}

export function renderHeader(el) {
  el.innerHTML = `
    <div class="container nav-inner">
      <a class="brand" href="/index.html" aria-label="${site.name}">
        <span class="brand-mark" aria-hidden="true">GM</span>
        <span class="brand-text">
          <strong>${site.shortName}</strong>
          <small>Institución Educativa</small>
        </span>
      </a>

      <nav class="nav" id="primary-nav" aria-label="Navegación principal">
        <ul class="nav-list">
          ${navigation.map(navItem).join('')}
        </ul>
      </nav>

      <div class="nav-actions">
        <a class="social-btn social-btn--fb" href="${site.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook de la institución">
          ${brandIcon('facebook')}
        </a>
        <button type="button" class="icon-btn" id="theme-toggle" aria-label="Cambiar tema"></button>
        <a class="btn btn--primary btn--sm nav-cta" href="${site.social.plataforma}" target="_blank" rel="noopener">
          Plataforma Académica ${icon('external-link')}
        </a>
        <button type="button" class="icon-btn nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Abrir menú">
          ${icon('menu')}
        </button>
      </div>
    </div>
  `
}

export function initHeader() {
  const header = document.getElementById('site-header')
  if (!header) return
  renderHeader(header)
  initHeaderInteractions(header)
}

function initHeaderInteractions(header) {
  const nav = header.querySelector('.nav')
  const toggle = header.querySelector('#nav-toggle')

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10)
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  const closeMenu = () => {
    header.classList.remove('nav-open')
    toggle?.setAttribute('aria-expanded', 'false')
  }

  toggle?.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open')
    toggle.setAttribute('aria-expanded', String(open))
    toggle.innerHTML = icon(open ? 'x' : 'menu')
  })

  header.querySelectorAll('.nav-item.has-children > .nav-link').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.nav-item')
      const open = item.classList.toggle('dropdown-open')
      btn.setAttribute('aria-expanded', String(open))
    })
  })

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu)
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu()
  })

  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) closeMenu()
  })
}