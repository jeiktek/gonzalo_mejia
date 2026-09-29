/**
 * Cabecera y navegación con submenús (UI-UX.md: 7).
 * Renderizada desde `data.js` (navigation + site).
 */

import { navigation, site } from '../data.js'
import { brandIcon, currentPage, icon } from '../utils/helpers.js'
import { createIcons, icons } from 'lucide'

function navItem(item) {
  const page = currentPage()
  const isCurrent = page === item.href

  // Si la página actual es un hijo del submenú, la fila padre se marca activa
  // para que siga resaltada, pero es el hijo quien declara `aria-current` para
  // no duplicar la marca en el árbol de accesibilidad.
  const hasActiveChild = (item.children || []).some((c) => page === c.href)

  const chip = item.icon
    ? `<span class="nav-link-icon" aria-hidden="true">${icon(item.icon)}</span>`
    : ''

  const parentIsCurrent = isCurrent && !hasActiveChild

  const linkLabel = item.children
    ? `<button type="button" class="nav-link" aria-expanded="false" aria-haspopup="true"${parentIsCurrent ? ' aria-current="page"' : ''}>${chip}<span class="nav-link-label">${item.label}</span><span class="nav-link-caret" aria-hidden="true">${icon('chevron-right')}</span></button>`
    : `<a class="nav-link" href="${item.href}"${isCurrent ? ' aria-current="page"' : ''}>${chip}<span class="nav-link-label">${item.label}</span></a>`

  const children = item.children
    ? `<ul class="dropdown">${item.children
        .map(
          (c) =>
            `<li><a class="dropdown-link${page === c.href ? ' is-active' : ''}" href="${c.href}"${page === c.href ? ' aria-current="page"' : ''}>${c.icon ? `<span class="dropdown-link-icon" aria-hidden="true">${icon(c.icon)}</span>` : ''}<span class="dropdown-link-label">${c.label}</span></a></li>`
        )
        .join('')}</ul>`
    : ''

  const cls = [
    'nav-item',
    item.children ? 'has-children' : '',
    isCurrent || hasActiveChild ? 'is-active' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return `<li class="${cls}">${linkLabel}${children}</li>`
}

export function renderHeader(el) {
  el.innerHTML = `
    <div class="container nav-inner">
      <a class="brand" href="/index.html" aria-label="${site.name}">
        <img class="brand-logo" src="/images/gonzalomejia-escudo.png" alt="" width="40" height="40">
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

  const setToggleIcon = (isOpen) => {
    if (!toggle) return
    toggle.innerHTML = icon(isOpen ? 'x' : 'menu')
    createIcons({ icons })
  }

  const closeMenu = () => {
    if (!header.classList.contains('nav-open')) return
    header.classList.remove('nav-open')
    toggle?.setAttribute('aria-expanded', 'false')
    setToggleIcon(false)
    document.body.style.overflow = ''
    closeDropdowns()
  }

  toggle?.addEventListener('click', (e) => {
    e.stopPropagation()
    const open = header.classList.toggle('nav-open')
    toggle.setAttribute('aria-expanded', String(open))
    setToggleIcon(open)
    document.body.style.overflow = open ? 'hidden' : ''
  })

  const closeDropdowns = () => {
    header.querySelectorAll('.nav-item.dropdown-open').forEach((item) => {
      item.classList.remove('dropdown-open')
      item.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false')
    })
  }

  header.querySelectorAll('.nav-item.has-children > .nav-link').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
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
    if (e.composedPath().includes(header)) return
    closeMenu()
  })
}