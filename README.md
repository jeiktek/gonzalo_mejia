# Institución Educativa Gonzalo Mejía

Sitio web institucional para la Institución Educativa Gonzalo Mejía (Chigorodó, Antioquia, Colombia).

## Stack

- HTML + CSS + JavaScript vanilla (sin frameworks)
- Iconos: [Lucide](https://lucide.dev) (los iconos de marca como Facebook se dibujan como SVG inline en `src/js/utils/helpers.js`, porque Lucide ya no los incluye)
- Vite como servidor de desarrollo (sin backend, sin build de producción complejo)

## Puesta en marcha

```bash
npm install
npm run dev
npm run build   # emite el sitio en dist/
```

## Deploy (Netlify)

El repo incluye un `netlify.toml` que construye con `npm run build` y publica
`dist/` (Node 22). Dos opciones:

- **GitHub → Netlify:** el sitio ya está en git/GitHub. Conectar el repo en
  Netlify y cada `push` a `main` despliega automáticamente.
- **Netlify Drop / CLI:** arrastrar `dist/` o ejecutar `npx netlify deploy`
  (con `--prod` para producción).

## Cómo funciona

- **Todo el contenido del sitio vive en `src/js/data.js`.** Cambiar un valor ahí se refleja en todas las páginas sin tocar otro archivo.
- **Multi-página:** cada página es un HTML en `src/pages/` (enrutado configurado en `vite.config.js`). El layout común (header, footer) y el cuerpo de cada página se renderizan desde `data.js` mediante `src/js/main.js` y `src/js/components/sections.js`.
- **Tema oscuro/claro:** respeta `prefers-color-scheme` por defecto y persiste la elección en `localStorage` (`gm-theme`).
- **Accesibilidad:** HTML semántico, navegación por teclado, estados `focus-visible`, `prefers-reduced-motion`, contraste WCAG AA.

## Assets de muestra (placeholders)

Las fotos, el escudo y los documentos institucionales ya son los reales. Están organizados así:

- `public/images/hero/` — banners del carrusel (gonzalomejia-{2,3,4,13}.webp).
- `public/images/gallery/` — fotos de la galería (incluye la reutilizada en "Sobre nosotros").
- `public/images/news/` — fotos de las tarjetas de noticias.
- `public/images/extra/` — fotos subidas sin usar (gonzalomejia-17, 18-1); revisar antes de borrarlas o usarlas.
- `public/images/gonzalomejia-escudo.png` — logo/escudo (marca del header, footer, favicon y sección "Sobre nosotros").
- `public/images/gonzalomejia-logo.png` — variante de logo (por ahora sin usar).
- `public/documents/` — PDFs institucionales; `data.js` los lista y nombrá en la sección Documentos.

Formato canónico de fotos: `.webp`, un archivo por imagen. Los placeholders SVG originales y las variantes
de tamaño de la exportación de WordPress se eliminaron.

## Fuentes

Poppins y Caveat se cargan desde Google Fonts (ver el `<head>` de cada página).

## Estructura

```
public/          # favicon, robots.txt, images/, documents/
src/
  css/           # variables, reset, base, layout, components, utilities, style
  js/
    data.js      # TODO el contenido del sitio
    main.js      # bootstrap + init de componentes
    utils/       # theme.js, helpers.js
    components/  # header, footer, sections, carousel, stats, lightbox, scrollReveal
  pages/         # 12 páginas HTML
```