/** Utilidades genéricas del sitio. */

export function formatNumber(value) {
  return new Intl.NumberFormat('es-CO').format(value)
}

/** Ruta actual normalizada: '/' se trata como '/index.html'. */
export function currentPage() {
  const path = window.location.pathname
  return path === '/' ? '/index.html' : path
}

/** Ícono de Lucide renderizado como atributo (se convierte al montar). */
export function icon(name, extra = '') {
  return `<i data-lucide="${name}" aria-hidden="true"${extra}></i>`
}

/**
 * Iconos de marca como SVG inline. Lucide dejó de incluir iconos de marca
 * (facebook, twitter, github...); estos se dibujan a mano.
 */
export function brandIcon(name) {
  if (name === 'facebook') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
  }
  return icon(name)
}

export function prefersReducedMotion() {
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}