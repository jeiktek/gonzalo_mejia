## Concepto

Crear un sitio web institucional moderno, profesional, dinámico e interactivo que represente a la Institución Educativa Gonzalo Mejía como una institución educativa actual, tecnológica y cercana a su comunidad.

## Stack y restricciones (IMPORTANTES)

- HTML + CSS + JavaScript vanilla + Lucide icons. Vite como servidor de desarrollo, nada más.
- Debe funcionar sin backend y sin build de producción complejo.
- Accesible: HTML semántico, navegable por teclado, contraste correcto (WCAG AA).

## Página y contenido

- usa el contenido que aparece en el fichero `CONTENT.md`
- Las imagenes estan en una carpeta images, al crear la estructura del proyecto, mueve esa carpeta a su sitio correspondiente
  o extrae el contenido y muevelo a su sitio

## Estructura del proyecto

- Nombres claros siguiendo principios SOLID donde aplique y toda la nomenclatura de los fichero
  y código en inglés: variables, funciones, ficheros
- Aplica el principio DRY
- Separa datos en un fichero `data.js`, para poder cambiar datos rápidamente en un solo fichero
- El contenido de todas las páginas en donde aplique debe estar estructurado en submenús
  ejemplo: sobre nosotros -> galería, quienes somos
- Con esta estructura de ficheros como ejemplo base, solo es un ejemplo base, no tienes que crear y usar exactamente lo mismo
  por ejemplo si en js no tenemos ni usamos servicios no lo crees: mi-web/
  │
  ├── public/
  │ ├── favicon.ico
  │ ├── robots.txt
  │ └── images/
  │
  ├── src/
  │ │
  │ ├── assets/
  │ │ ├── images/
  │ │ ├── icons/
  │ │ └── fonts/
  │ │
  │ ├── css/
  │ │ ├── base.css
  │ │ ├── variables.css
  │ │ ├── reset.css
  │ │ ├── layout.css
  │ │ ├── components.css
  │ │ ├── utilities.css
  │ │ └── style.css
  │ │
  │ ├── js/
  │ │ ├── main.js
  │ │ ├── modules/
  │ │ ├── utils/
  │ │ ├── services/
  │ │ └── components/
  │ │
  │ ├── pages/
  │ │
  │ └── index.html
  │
  ├── .gitignore
  ├── package.json
  ├── vite.config.js
  └── README.md

## Diseño

- Para el diseño usa la información que está en `UI-UX.md`

## Implementaciones

- Tema oscuro/claro con conmutador, y q respete el diseño establecido
- Micro-interacciones sobrias: aparición al hacer scroll, efectos, hover,
- Rediseña los colores si amerita

## Criterios de aceptación

- Arranca con `npm run dev` sin errores
- Cambiar un dato en `data.js` se refleja en la página sin tocar nada más
- Permite descargar y ver pdfs, gráficas claras, legibles y profesionales
- Funciona con teclado y pasa revisión básica de accesibilidad

Antes de escribir código, dame un plan: estructura
Espera mi visto bueno antes de construir
