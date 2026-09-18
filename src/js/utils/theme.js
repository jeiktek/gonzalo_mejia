/**
 * Gestión del tema claro/oscuro (UI-UX.md: 21).
 * Respeta `prefers-color-scheme` como valor inicial y persiste en `localStorage`.
 */

import { createIcons, icons } from 'lucide'

const KEY = 'gm-theme'

export function resolveTheme() {
  const saved = localStorage.getItem(KEY)
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function applyTheme() {
  document.documentElement.setAttribute('data-theme', resolveTheme())
}

const icon = (name) => `<i data-lucide="${name}" aria-hidden="true"></i>`

export function initThemeToggle() {
  const btn = document.getElementById('theme-toggle')
  if (!btn) return

  const sync = () => {
    const dark =
      document.documentElement.getAttribute('data-theme') === 'dark'
    btn.innerHTML = icon(dark ? 'sun' : 'moon')
    btn.setAttribute(
      'aria-label',
      dark ? 'Activar modo claro' : 'Activar modo oscuro'
    )
    createIcons({ icons })
  }

  btn.addEventListener('click', () => {
    const next =
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'light'
        : 'dark'
    document.documentElement.classList.add('theme-transition')
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem(KEY, next)
    sync()
    setTimeout(
      () => document.documentElement.classList.remove('theme-transition'),
      450
    )
  })

  sync()
}