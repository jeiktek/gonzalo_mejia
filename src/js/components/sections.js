/**
 * Renderizadores de contenido por página.
 * Todo el texto proviene de `data.js`; ningún valor literral en estos templates.
 */

import {
  about,
  contact,
  council,
  documents,
  gallery,
  hero,
  managementAreas,
  managementPages,
  news,
  pagesMeta,
  projects,
  site,
  stats,
} from '../data.js'
import { icon } from '../utils/helpers.js'

const reveal = (delay = 0) => ` data-reveal${delay ? ` style="--reveal-delay:${delay}ms"` : ''}`

/* ------------------------------------------------------------------
   Bloques compartidos
   ------------------------------------------------------------------ */

function pageHero({ eyebrow, title, lead }) {
  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        ${lead ? `<p class="lead">${lead}</p>` : ''}
      </div>
    </section>
  `
}

function sectionHead({ eyebrow, title, lead, center = false }) {
  return `
    <div class="section-head${center ? ' section-head--center' : ''}">
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
      <h2>${title}</h2>
      ${lead ? `<p class="lead">${lead}</p>` : ''}
    </div>
  `
}

function statsBlock() {
  return `
    <div class="stats-card"${reveal()}>
      <div class="stats-grid">
        ${stats
          .map(
            (s, i) => `
          <div class="stat">
            <span class="stat-icon" data-accent="${i + 1}">${icon(s.icon)}</span>
            <div>
              <p class="stat-num" data-count="${s.value}">0</p>
              <p class="stat-label">${s.label}</p>
            </div>
          </div>`
          )
          .join('')}
      </div>
    </div>
  `
}

/* ------------------------------------------------------------------
   Inicio
   ------------------------------------------------------------------ */

function renderIndex() {
  return `
    ${renderHero()}

    <div class="container">${statsBlock()}</div>

    <section class="section">
      <div class="container about-grid">
        <div${reveal(0)}>
          <p class="eyebrow">${about.eyebrow}</p>
          <h2>${about.title}</h2>
          <p class="text-secondary stack mt-4">${about.paragraphs[0]}</p>
          <p class="text-secondary mt-4">${about.paragraphs[1]}</p>
          <div class="inline-list mt-5">
            <a class="btn btn--primary" href="/nosotros.html">Conoce la institución ${icon('arrow-right')}</a>
            <a class="btn btn--secondary" href="/proyectos.html">Proyectos pedagógicos</a>
          </div>
          <p class="badge mt-5">${icon('map-pin')} ${about.locationBadge.text}</p>
        </div>
        <div class="about-media"${reveal(120)}>
          <img src="${about.image}" alt="${about.imageAlt}" loading="lazy">
          <img class="about-emblem" src="/images/gonzalomejia-escudo.png" alt="" loading="lazy">
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        ${sectionHead({ eyebrow: projects.eyebrow, title: projects.title, center: true, lead: 'Proyectos transversales que desarrollan competencias básicas y ciudadanas en toda la comunidad educativa.' })}
        <div class="grid grid-4">
          ${projects.items
            .map(
              (p, i) => `
            <article class="project-card"${reveal(i * 90)}>
              <span class="project-num" aria-hidden="true">${p.number}</span>
              <div class="project-icon">${icon(p.icon)}</div>
              <h3 class="project-title">${p.title}</h3>
              <p class="project-desc">${p.description}</p>
            </article>`
            )
            .join('')}
        </div>
        <div class="text-center mt-6"${reveal(120)}>
          <a class="link-animated" href="/proyectos.html">Ver todos los proyectos ${icon('arrow-right')}</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHead({ eyebrow: news.eyebrow, title: news.title, lead: 'Mantente al día con la vida de nuestra institución.' })}
        <div class="grid grid-4">
          ${news.items
            .map(
              (n, i) => `
            <article class="card"${reveal(i * 90)}>
              <div class="card-media">
                <img src="${n.image}" alt="${n.title}" loading="lazy">
              </div>
              <div class="card-body">
                <p class="card-category">${n.category}</p>
                <h3 class="card-title"><a href="/noticias.html">${n.title}</a></h3>
                <p class="card-text">${n.summary}</p>
                <div class="card-foot">
                  <span class="card-date">${icon('calendar')} ${n.date}</span>
                  <a class="link-animated" href="/noticias.html">Leer más ${icon('arrow-right')}</a>
                </div>
              </div>
            </article>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section section--navy">
      <div class="container">
        ${sectionHead({ eyebrow: gallery.eyebrow, title: gallery.title, lead: gallery.intro })}
        <div class="gallery-preview">${galleryItemPreview(gallery.items.slice(0, 5))}</div>
        <div class="mt-6 text-center"${reveal(60)}>
          <a class="btn btn--primary" href="/galeria.html">Ver galería completa ${icon('arrow-right')}</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cta-band"${reveal(0)}>
          <span class="deco deco-1" aria-hidden="true"></span>
          <span class="deco deco-2" aria-hidden="true"></span>
          <h2>¿Quieres conocer más sobre nuestra institución?</h2>
          <p>Escríbenos, llámanos o visita nuestra sede en el centro de Chigorodó. ¡Te esperamos!</p>
          <div class="inline-list" style="justify-content:center">
            <a class="btn btn--inverse" href="/contacto.html">Contáctanos ${icon('arrow-right')}</a>
            <a class="btn btn--glass" href="${site.social.plataforma}" target="_blank" rel="noopener">Plataforma Académica ${icon('external-link')}</a>
          </div>
        </div>
      </div>
    </section>
  `
}

function renderHero() {
  return `
    <section class="hero" id="hero-carousel" aria-roledescription="carrusel" aria-label="Presentación institucional">
      <h1 class="sr-only">${site.name}</h1>
      <div class="hero-slides">
        ${hero.slides
          .map(
            (s, i) => `
          <div class="hero-slide${i === 0 ? ' is-active' : ''}" role="group" aria-roledescription="diapositiva" aria-label="Diapositiva ${i + 1} de ${hero.slides.length}">
            <img class="hero-img" src="${s.image}" alt="" ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>
            <div class="hero-overlay" aria-hidden="true"></div>
            <div class="hero-caption">
              <p class="hero-eyebrow">${s.eyebrow}</p>
              <h2>${s.title}</h2>
              <p>${s.text}</p>
              <div class="hero-cta">
                <a class="btn btn--primary" href="${hero.primaryCta.href}">${hero.primaryCta.label} ${icon('arrow-right')}</a>
                <a class="btn btn--glass" href="${hero.secondaryCta.href}">${hero.secondaryCta.label} ${icon('camera')}</a>
              </div>
            </div>
          </div>`
          )
          .join('')}
      </div>

      <button type="button" class="hero-arrow prev" aria-label="Diapositiva anterior">${icon('chevron-left')}</button>
      <button type="button" class="hero-arrow next" aria-label="Siguiente diapositiva">${icon('chevron-right')}</button>

      <div class="hero-dots" aria-label="Seleccionar diapositiva">
        ${hero.slides.map((s, i) => `<button type="button" class="hero-dot${i === 0 ? ' is-active' : ''}" aria-label="Ir a diapositiva ${i + 1}"></button>`).join('')}
      </div>
    </section>
  `
}

function galleryItemPreview(items) {
  return items
    .map(
      (g) => `
    <figure class="gallery-item" data-gallery-image="${g.image}" data-gallery-caption="${g.caption}" tabindex="0" role="button" aria-label="Ampliar imagen: ${g.caption}">
      <img src="${g.image}" alt="${g.caption}" loading="lazy">
      <figcaption class="gallery-overlay"><span>${icon('camera')} ${g.caption}</span></figcaption>
    </figure>`
    )
    .join('')
}

/* ------------------------------------------------------------------
   Quienes somos
   ------------------------------------------------------------------ */

function renderNosotros() {
  return `
    ${pageHero({ eyebrow: 'Sobre nosotros', title: 'Quienes somos', lead: 'Un establecimiento educativo de dimensiones físicas reducidas, pero con grandes aspiraciones, proyecciones y compromiso con el servicio a la comunidad.' })}

    <div class="container">${statsBlock()}</div>

    <section class="section">
      <div class="container about-grid">
        <div class="about-media"${reveal(0)}>
          <img src="${about.image}" alt="${about.imageAlt}">
        </div>
        <div${reveal(120)}>
          <p class="eyebrow">${about.eyebrow}</p>
          <h2>${about.title}</h2>
          ${about.paragraphs.map((p) => `<p class="text-secondary mt-4">${p}</p>`).join('')}
          <dl class="info-list mt-5">
            ${about.info.map((i) => `<div><dt>${i.label}</dt><dd>${i.value}</dd></div>`).join('')}
          </dl>
          <div class="inline-list mt-5">
            <a class="btn btn--primary" href="/galeria.html">Ver galería ${icon('arrow-right')}</a>
            <a class="btn btn--secondary" href="/gestiones.html">Nuestras gestiones</a>
          </div>
        </div>
      </div>
    </section>
  `
}

/* ------------------------------------------------------------------
   Galería
   ------------------------------------------------------------------ */

function renderGaleria() {
  return `
    ${pageHero({ eyebrow: 'Sobre nosotros', title: 'Galería institucional', lead: gallery.intro })}
    <section class="section">
      <div class="container">
        <div class="gallery" id="gallery-grid">
          ${gallery.items.map(galleryItem).join('')}
        </div>
      </div>
    </section>
  `
}

function galleryItem(g) {
  return `
    <figure class="gallery-item" data-gallery-image="${g.image}" data-gallery-caption="${g.caption}" tabindex="0" role="button" aria-label="Ampliar imagen: ${g.caption}"${revealOnLoad()}>
      <img src="${g.image}" alt="${g.caption}" loading="lazy">
      <figcaption class="gallery-overlay"><span>${icon('camera')} ${g.caption}</span></figcaption>
    </figure>
  `
}

function revealOnLoad() {
  return ' data-reveal'
}

/* ------------------------------------------------------------------
   Proyectos
   ------------------------------------------------------------------ */

function renderProyectos() {
  return `
    ${pageHero({ eyebrow: 'Institucional', title: 'Proyectos pedagógicos', lead: 'Una apuesta al desarrollo de competencias básicas y ciudadanas desde un enfoque transversal al currículo.' })}
    <section class="section">
      <div class="container container-narrow">
        <p class="text-center text-secondary"${reveal(0)}>${projects.intro}</p>
      </div>
    </section>
    <section class="section section--alt">
      <div class="container">
        <div class="grid grid-4">
          ${projects.items.map((p, i) => `
            <article class="project-card"${reveal(i * 90)}>
              <span class="project-num" aria-hidden="true">${p.number}</span>
              <div class="project-icon">${icon(p.icon)}</div>
              <h2 class="project-title">${p.title}</h2>
              <p class="project-desc">${p.description}</p>
            </article>`).join('')}
        </div>
      </div>
    </section>
  `
}

/* ------------------------------------------------------------------
   Documentos
   ------------------------------------------------------------------ */

function renderDocumentos() {
  return `
    ${pageHero({ eyebrow: 'Institucional', title: 'Documentos institucionales', lead: documents.intro })}
    <section class="section">
      <div class="container">
        <div class="grid grid-2">
          ${documents.items.map((d, i) => `
            <article class="doc-card"${reveal(i * 90)}>
              <span class="doc-icon">${icon(d.icon)}</span>
              <div>
                <h2 class="doc-title">${d.title}</h2>
                <p class="doc-desc">${d.description}</p>
                <div class="doc-actions">
                  <a href="${d.file}" target="_blank" rel="noopener">${icon('external-link')} Ver</a>
                  <a href="${d.file}" download>${icon('download')} Descargar</a>
                </div>
              </div>
            </article>`).join('')}
        </div>
      </div>
    </section>
  `
}

/* ------------------------------------------------------------------
   Noticias
   ------------------------------------------------------------------ */

function renderNoticias() {
  return `
    ${pageHero({ eyebrow: 'Blog y noticias', title: 'Noticias', lead: news.title })}
    <section class="section">
      <div class="container">
        <div class="grid grid-2">
          ${news.items.map((n, i) => `
            <article class="card card--wide"${reveal(i * 90)}>
              <div class="card-media">
                <img src="${n.image}" alt="${n.title}" loading="lazy">
              </div>
              <div class="card-body">
                <p class="card-category">${n.category}</p>
                <h2 class="card-title">${n.title}</h2>
                <p class="card-text">${n.summary}</p>
                <div class="card-foot">
                  <span class="card-date">${icon('calendar')} ${n.date}</span>
                  <span class="link-animated">Leer más ${icon('arrow-right')}</span>
                </div>
              </div>
            </article>`).join('')}
        </div>
      </div>
    </section>
  `
}

/* ------------------------------------------------------------------
   Gestiones (landing)
   ------------------------------------------------------------------ */

function renderGestiones() {
  return `
    ${pageHero({ eyebrow: 'Gestiones', title: 'Áreas de gestión', lead: 'Los procesos que orientan la vida institucional: consejo académico y las cuatro gestiones del Proyecto Educativo Institucional.' })}
    <section class="section">
      <div class="container">
        <div class="grid grid-2">
          ${managementAreas.map((a, i) => `
            <a class="area-card" href="/${a.slug}.html"${reveal(i * 90)}>
              ${icon(a.icon, ' class="area-icon icon-xl"')}
              <h2 class="area-title">${a.title}</h2>
              <p class="area-summary">${a.summary}</p>
              <span class="area-arrow link-animated">Leer más ${icon('arrow-right')}</span>
            </a>`).join('')}
        </div>
      </div>
    </section>
  `
}

/* ------------------------------------------------------------------
   Consejo académico
   ------------------------------------------------------------------ */

function renderConsejoAcademico() {
  return `
    ${pageHero({ eyebrow: 'Gestiones', title: 'Consejo académico', lead: council.description })}
    <section class="section">
      <div class="container">
        <div class="container-narrow">
          ${sectionHead({ eyebrow: 'Consejo académico', title: council.functionsTitle })}
          <ol class="function-list">
            ${council.functions
              .map(
                (f, i) =>
                  `<li class="function-item"${reveal(i * 60)}>${icon('check-circle-2')} <span>${i + 1}. ${f}</span></li>`
              )
              .join('')}
          </ol>
        </div>
      </div>
    </section>
    <section class="section section--alt">
      <div class="container">
        <div class="container-narrow">
          ${sectionHead({ eyebrow: 'Rectoría', title: council.rector.title, lead: council.rector.lead })}
          <ol class="function-list">
            ${council.rector.functions
              .map(
                (f, i) =>
                  `<li class="function-item"${reveal(i * 40)}>${icon('check-circle-2')} <span>${i + 1}. ${f}</span></li>`
              )
              .join('')}
          </ol>
        </div>
      </div>
    </section>
  `
}

/* ------------------------------------------------------------------
   Gestión administrativa / comunitaria / directiva
   ------------------------------------------------------------------ */

function renderManagement(key) {
  const m = managementPages[key]
  const principles = m.principles
    ? `
      <section class="section section--alt">
        <div class="container">
          ${sectionHead({ eyebrow: 'Principios', title: 'Principios fundamentales que orientan la acción de la comunidad educativa', center: true })}
          <div class="grid grid-3">
            ${m.principles
              .map(
                (p, i) => `
              <article class="principle-card"${reveal(i * 90)}>
                <h3 class="principle-title">${icon(p.icon, ' class="icon"')} ${p.title}</h3>
                <p class="principle-text">${p.text}</p>
              </article>`
              )
              .join('')}
          </div>
        </div>
      </section>`
    : ''

  return `
    ${pageHero({ eyebrow: m.eyebrow, title: m.title })}
    <section class="section">
      <div class="container container-narrow">
        ${m.paragraphs.map((p, i) => `<p class="text-secondary stack mt-4"${reveal(i * 90)}>${p}</p>`).join('')}
        <p class="mt-6"${reveal(120)}>
          <a class="link-animated" href="/gestiones.html">${icon('arrow-left')} Volver a gestiones</a>
        </p>
      </div>
    </section>
    ${principles}
  `
}

/* ------------------------------------------------------------------
   Contacto
   ------------------------------------------------------------------ */

function renderContacto() {
  const f = contact.form
  const field = (name) => {
    const def = f.fields[name]
    if (def.type === 'textarea') {
      return `
        <div class="form-field form-field--full">
          <label class="form-label" for="field-${name}">${def.label} <span class="required">*</span></label>
          <textarea class="form-input" id="field-${name}" name="${name}" placeholder="${def.placeholder}" required></textarea>
        </div>`
    }
    return `
      <div class="form-field">
        <label class="form-label" for="field-${name}">${def.label} <span class="required">*</span></label>
        <input class="form-input" type="${def.type}" id="field-${name}" name="${name}" placeholder="${def.placeholder}" required>
      </div>`
  }

  return `
    ${pageHero({ eyebrow: contact.eyebrow, title: contact.title, lead: contact.intro })}
    <section class="section">
      <div class="container">
        <div class="contact-wrap"${reveal(0)}>
          <div class="contact-info">
            <div>
              <p class="eyebrow">${contact.eyebrow}</p>
              <h2>${contact.title}</h2>
              <p>${contact.intro}</p>
            </div>
            <ul class="contact-list">
              ${contact.items
                .map(
                  (c) => `
                <li class="contact-item">
                  <span class="icon">${icon(c.icon)}</span>
                  <div>
                    <strong>${c.label}</strong>
                    ${c.href ? `<span><a href="${c.href}">${c.value}</a></span>` : `<span>${c.value}</span>`}
                  </div>
                </li>`
                )
                .join('')}
            </ul>
          </div>

          <form class="contact-form" id="contact-form" novalidate>
            <fieldset style="border:0; padding:0; margin:0;">
              <legend class="sr-only">${f.legend}</legend>
              <div class="form-grid">
                ${field('name')}
                ${field('email')}
                ${field('subject')}
                ${field('message')}
              </div>
            </fieldset>
            <div class="form-status" id="form-status" role="status" aria-live="polite"></div>
            <div>
              <button type="submit" class="btn btn--inverse">${f.submit} ${icon('send')}</button>
              <p class="form-note mt-3">${f.note}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  `
}

/* ------------------------------------------------------------------
   Dispatcher
   ------------------------------------------------------------------ */

export function renderPage() {
  const main = document.getElementById('main')
  if (!main) return

  const key = main.dataset.page || 'index'
  document.title = `${pagesMeta[key] ? pagesMeta[key].title : ''} · ${site.name}`

  const renderers = {
    index: renderIndex,
    nosotros: renderNosotros,
    galeria: renderGaleria,
    proyectos: renderProyectos,
    documentos: renderDocumentos,
    noticias: renderNoticias,
    gestiones: renderGestiones,
    'consejo-academico': renderConsejoAcademico,
    'gestion-administrativa': () => renderManagement('gestion-administrativa'),
    'gestion-comunitaria': () => renderManagement('gestion-comunitaria'),
    'gestion-directiva': () => renderManagement('gestion-directiva'),
    contacto: renderContacto,
  }

  main.innerHTML = (renderers[key] || renderIndex)()
}

export function bindContactForm() {
  const form = document.getElementById('contact-form')
  if (!form) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const status = document.getElementById('form-status')
    status.textContent = contact.form.success
    status.classList.add('is-visible', 'form-status--success')
    form.reset()
  })
}