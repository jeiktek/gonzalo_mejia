# AGENTS.md

## Project

Institutional website for Institución Educativa Gonzalo Mejía (Chigorodó, Colombia).
Implemented vanilla multi-page site. The product specs remain the source of truth for
content and design; never introduce text/images outside them without noting it as a placeholder.

## Stack & setup

- HTML + CSS + vanilla JavaScript (no frameworks), Lucide icons.
- Vite as dev server (`npm run dev`). `npm run build` also works (see `vite.config.js`).
- No backend. Contact form is client-only (shows a success message).

## Source of truth

| What | File |
|------|------|
| Project concept, structure, acceptance criteria | `ABOUT.md` |
| All site content (Spanish) | `CONTENT.md` |
| Full design spec (colors, typography, spacing, components, dark mode, animations, responsive) | `UI-UX.md` |

Read `UI-UX.md` before writing any CSS or layout: exact hex values, radii, shadows,
spacing (multiples of 4/8), breakpoints (576/768/1024/1280/1440), animation timing,
and the dark-mode palette.

## Architecture (read before editing)

- **Multi-page:** each page is an HTML shell in `src/pages/` with `data-page` + `data-theme`
  inline boot script; bodies are rendered from data. Entry points: `vite.config.js`
  (multi-page `input`) and `src/js/main.js`.
- **Data-driven:** ALL site content lives in `src/js/data.js`. Every string must come from
  there; changing a value updates the page without touching other files.
- **Layout plumbing:**
  - `src/js/components/header.js` — nav + submenus + mobile menu (active state vs `currentPage()`).
  - `src/js/components/footer.js`
  - `src/js/components/sections.js` — page body renderers (all HTML from data).
  - `src/js/components/` carousel, stats (counters), lightbox (`<dialog>`), scrollReveal.
  - `src/css/style.css` imports variables/reset/base/layout/components/utilities.
- **Dev URL rewrite:** pages live in `src/pages/` but are navigated as `/page.html`. The
  `mpaRewrite` plugin rewrites those requests in dev; `flushPagesToRoot` emits them at the
  `dist/` root on build. If you add a page, register it in the `pages` array in `vite.config.js`.

## Key constraints

- All code and file naming in English; content in Spanish (keep both).
- Dark/light toggle: key `gm-theme` in `localStorage`, defaults to `prefers-color-scheme`.
  The inline `<head>` script applies it pre-paint — keep it in any new page.
- WCAG AA: semantic HTML, keyboard nav, `:focus-visible` (yellow outline), alt text,
  `prefers-reduced-motion` (reveal/counters/carousel respect it).
- Micro-interactions: scroll reveal, hover, counters on stats.
- `public/images/` hosts the real assets, organized by use: `hero/` (banners),
  `gallery/`, `news/`, `extra/` (unused, pending review), the escudo logo at the
  root (`gonzalomejia-escudo.png`, used as header/footer brand, favicon and about
  emblem), plus `public/documents/` for the institutional PDFs. Canonical photo
  format is `.webp` (one file per image). New photos → same folders, update the
  `src/js/data.js` paths; keep thumbs out (no server-side resizing here).

## Commands

- `npm run dev` — start dev server (must pass without errors).
- `npm run build` — production build; check `dist/` for the flattened HTML.
- `netlify.toml` — Netlify deploy (build `npm run build`, publish `dist`, Node 22).
- Brand icons (Facebook, etc.) are NOT in Lucide 1.x: render with `brandIcon()`
  in `src/js/utils/helpers.js` (inline SVG), never a lucide icon name.
- No test/lint tooling configured.