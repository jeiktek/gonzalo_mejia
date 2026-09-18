import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

const pages = [
  'index',
  'nosotros',
  'galeria',
  'proyectos',
  'documentos',
  'noticias',
  'gestiones',
  'consejo-academico',
  'gestion-administrativa',
  'gestion-comunitaria',
  'gestion-directiva',
  'contacto',
]

const input = Object.fromEntries(
  pages.map((name) => [
    name,
    fileURLToPath(new URL(`src/pages/${name}.html`, import.meta.url)),
  ])
)

/**
 * Los HTML viven en `src/pages/`, pero se navegan con URLs limpias
 * (`/nosotros.html`):
 * - En dev el middleware reescribe la petición hasta el archivo real.
 * - En build se emiten en la raíz del `dist/`.
 */
function mpaRewrite() {
  return {
    name: 'mpa-rewrite',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const path = decodeURIComponent(req.url || '').split('?')[0]
        if (path === '/') {
          req.url = '/src/pages/index.html'
          return next()
        }
        if (path.endsWith('.html')) {
          const name = path.slice(1, -'.html'.length)
          if (pages.includes(name)) {
            req.url = `/src/pages/${name}.html`
          }
        }
        next()
      })
    },
  }
}

function flushPagesToRoot() {
  return {
    name: 'flush-pages-to-root',
    apply: 'build',
    async writeBundle() {
      const { cpSync, rmSync } = await import('node:fs')
      const { join } = await import('node:path')
      const src = fileURLToPath(new URL('dist/src/pages', import.meta.url))
      const dest = fileURLToPath(new URL('dist', import.meta.url))
      pages.forEach((name) =>
        cpSync(join(src, `${name}.html`), join(dest, `${name}.html`))
      )
      rmSync(fileURLToPath(new URL('dist/src', import.meta.url)), {
        recursive: true,
        force: true,
      })
    },
  }
}

export default defineConfig({
  plugins: [mpaRewrite(), flushPagesToRoot()],
  build: {
    rollupOptions: { input },
  },
})