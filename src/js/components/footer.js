/**
 * Pie de página (UI-UX.md: 15). Renderizado desde `data.js`.
 */

import { footer, managementAreas, site } from '../data.js'
import { icon } from '../utils/helpers.js'

export function renderFooter(el) {
  const year = new Date().getFullYear()

  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="brand" href="/index.html" aria-label="${site.name}">
            <span class="brand-mark" aria-hidden="true">GM</span>
            <span class="brand-text">
              <strong>${site.shortName}</strong>
              <small>Institución Educativa</small>
            </span>
          </a>
          <p class="footer-about">${footer.about}</p>
          <ul class="footer-social">
            ${footer.socials
              .map(
                (s) =>
                  `<li><a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">${icon(s.icon)}</a></li>`
              )
              .join('')}
          </ul>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h3 class="footer-title">Navegación</h3>
          <ul class="footer-links">
            ${footer.links
              .map((l) => `<li><a href="${l.href}">${l.label}</a></li>`)
              .join('')}
          </ul>
        </nav>

        <nav aria-label="Gestiones">
          <h3 class="footer-title">Gestiones</h3>
          <ul class="footer-links">
            ${managementAreas
              .map(
                (a) =>
                  `<li><a href="/${a.slug}.html">${a.title}</a></li>`
              )
              .join('')}
          </ul>
        </nav>

        <div>
          <h3 class="footer-title">Contacto</h3>
          <ul class="footer-contact">
            <li>${icon('map-pin')} <span>${site.address}</span></li>
            <li>${icon('phone')} <a href="tel:+5748253851">${site.phone}</a></li>
            <li>${icon('mail')} <a href="mailto:${site.email}">${site.email}</a></li>
            <li>${icon('clock')} <span>${site.schedule}</span></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${year} ${site.name}. Todos los derechos reservados.</p>
        <p>${site.municipality} · ${site.region} · ${site.department}</p>
      </div>
    </div>
  `
}