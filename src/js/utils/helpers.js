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

export function prefersReducedMotion() {
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}