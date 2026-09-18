# Manual de Diseño UI/UX

## Institución Educativa Gonzalo Mejía

**Versión:** 1.0
**Estilo:** Modern Educational / Editorial / Dynamic Corporate

---

## 1. Objetivo

Crear un sitio web institucional moderno, profesional, dinámico e interactivo que represente a la Institución Educativa Gonzalo Mejía como una institución educativa actual, tecnológica y cercana a su comunidad.

La web debe sentirse como una **plataforma educativa moderna**, no como un blog institucional tradicional.

### Requerimientos

- Diseño moderno y profesional.
- Experiencia interactiva.
- Identidad visual consistente.
- Fotografías institucionales protagonistas.
- Profundidad visual.
- Microanimaciones.
- Diseño responsive.
- Accesibilidad.
- Componentes reutilizables.
- Navegación clara.

---

## 2. Dirección visual

### Estilo

**Modern Educational / Editorial / Dynamic Corporate**

### Características

- Diseño moderno, limpio y visualmente atractivo.
- Identidad educativa combinada con elementos tecnológicos.
- Fotografías grandes y protagonistas.
- Cards elevadas.
- Bordes redondeados.
- Gradientes sutiles.
- Formas orgánicas y curvas.
- Sombras suaves.
- Microinteracciones.
- Espacios negativos generosos.
- Secciones visualmente diferenciadas.
- Layouts asimétricos.
- Composición editorial.
- Elementos interactivos.

### Evitar

- Diseño completamente plano.
- Grandes bloques de texto.
- Cards genéricas.
- Bordes cuadrados.
- Sombras negras o demasiado fuertes.
- Exceso de gradientes.
- Animaciones excesivas.
- Elementos decorativos sin propósito.
- Apariencia de plantilla genérica.
- Estética de blog institucional antiguo.

---

## 3. Paleta de colores

### Colores principales

- **Primary:** `#0A1F4D`
- **Primary Light:** `#153B7A`
- **Primary Dark:** `#061535`
- **Blue:** `#1769FF`
- **Blue Light:** `#4D8DFF`
- **Blue Dark:** `#0A4BC2`
- **Yellow:** `#FFD21F`
- **Yellow Light:** `#FFE45C`
- **Yellow Dark:** `#E5B900`

### Colores secundarios

- **Cyan:** `#29B6F6`
- **Green:** `#20C997`
- **Purple:** `#8B5CF6`
- **Orange:** `#FF9F1C`

### Colores neutros

- **White:** `#FFFFFF`
- **Surface:** `#F7F9FC`
- **Surface Alt:** `#EEF3FA`
- **Text:** `#13213C`
- **Text Secondary:** `#5D6B82`
- **Text Muted:** `#8793A7`
- **Border:** `#DCE4F0`

### Uso

| Color               | Uso                                        |
| ------------------- | ------------------------------------------ |
| Navy                | Identidad, navbar, footer y fondos oscuros |
| Azul                | Botones, enlaces y elementos interactivos  |
| Amarillo            | CTA y elementos destacados                 |
| Blanco              | Fondos y contenido                         |
| Gris claro          | Superficies secundarias                    |
| Colores secundarios | Categorías, iconos y accents               |

El navy y azul deben dominar la identidad. El amarillo debe utilizarse como color de acción y contraste.

---

## 4. Tipografía

### Fuente principal

**Poppins**

Uso:

- Títulos.
- Subtítulos.
- Texto general.
- Navegación.
- Botones.
- Cards.
- Estadísticas.

### Fuente decorativa

**Caveat**

Uso exclusivo para frases destacadas y elementos decorativos.

No utilizar Caveat para contenido institucional extenso.

### Escala

| Elemento | Desktop | Mobile | Peso |
| -------- | ------: | -----: | ---: |
| Hero     |    64px |   40px |  700 |
| H1       |    48px |   34px |  700 |
| H2       |    38px |   30px |  700 |
| H3       |    24px |   21px |  600 |
| H4       |    18px |   17px |  600 |
| Body     |    16px |   15px |  400 |
| Small    |    14px |   13px |  400 |
| Caption  |    12px |   11px |  500 |

### Line-height

- Títulos principales: `1.1`
- Títulos secundarios: `1.2`
- Texto general: `1.65`

---

## 5. Layout y espaciado

### Container

- Ancho máximo: `1280px`.
- En pantallas muy grandes puede ampliarse hasta aproximadamente `1380px`.
- Contenido centrado.

### Sistema de espaciado

Utilizar múltiplos de 4 y 8px:

- `4px`
- `8px`
- `12px`
- `16px`
- `20px`
- `24px`
- `32px`
- `40px`
- `48px`
- `64px`
- `80px`
- `96px`
- `128px`

### Espaciado vertical de secciones

- Desktop: `96px`
- Tablet: `72px`
- Mobile: `56px`

---

## 6. Bordes y sombras

### Border radius

- Small: `8px`
- Medium: `14px`
- Large: `20px`
- XL: `28px`
- XXL: `36px`
- Pill: `999px`

### Aplicación

- Inputs: `12px`
- Cards: `20px`
- Imágenes: `18-28px`
- Secciones destacadas: `28-36px`
- Botones: `999px`
- Badges: `999px`

### Sombras

Utilizar sombras suaves:

- Small: `0 2px 8px rgba(10,31,77,.06)`
- Medium: `0 8px 24px rgba(10,31,77,.10)`
- Large: `0 16px 40px rgba(10,31,77,.14)`
- XL: `0 24px 60px rgba(10,31,77,.18)`

---

## 7. Navbar

### Requerimientos

- Logo institucional.
- Inicio.
- Sobre Nosotros.
- Institucional.
- Contáctenos.
- Recursos.
- Dropdowns.
- Estado activo.
- Botón "Plataforma Académica".
- Sticky.
- Responsive.

### Estado inicial

- Transparente o semitransparente.
- Integrada visualmente con el Hero.

### Estado al hacer scroll

- Fondo navy.
- Blur.
- Sombra suave.
- Transición de aproximadamente `300ms`.

---

## 8. Hero

El Hero debe ser el elemento visual principal de la página.

### Requerimientos

- Fotografía institucional de alta calidad.
- Carousel.
- Overlay oscuro.
- Título grande.
- Descripción corta.
- CTA principal.
- CTA secundario para vídeo.
- Flechas de navegación.
- Indicadores.
- Elementos decorativos.
- Transición visual hacia la siguiente sección.

### Altura

- Desktop: `620-700px`
- Mobile: aproximadamente `650px`

### Carousel

- 3-5 imágenes.
- Autoplay cada `5-7 segundos`.
- Transición de `800-1000ms`.
- Controles manuales.
- Swipe en móvil.
- Pausa al interactuar.

### Overlay

Utilizar un gradiente oscuro sobre la fotografía para mantener la legibilidad del texto.

---

## 9. Botones

### Primary

- Fondo amarillo.
- Texto navy.
- Forma pill.
- Padding aproximado de `14px 24px`.
- Peso `600`.

### Secondary

- Fondo transparente.
- Borde azul.
- Texto azul.
- Forma pill.

### Hover

- Elevación de aproximadamente `2px`.
- Sombra ligeramente mayor.
- Cambio de color sutil.
- Movimiento del icono o flecha.

### Botón de vídeo

- Forma circular.
- Icono de reproducción.
- Tamaño aproximado: `52px`.

---

## 10. Estadísticas

Las estadísticas deben aparecer como una **card flotante** parcialmente superpuesta al Hero.

### Datos

- Estudiantes.
- Egresados.
- Docentes.
- Aulas.

### Diseño

- Fondo blanco.
- Radius `20px`.
- Sombra grande.
- Iconos con fondos de diferentes colores.
- Números grandes.
- Etiquetas pequeñas.

### Interacción

Los números deben animarse mediante contadores cuando la sección entre en viewport.

---

## 11. Nuestra Institución

### Layout

Diseño de dos columnas:

- Información institucional.
- Fotografía institucional.

### Requerimientos

- Etiqueta de sección.
- Título grande.
- Descripción breve.
- CTA.
- Fotografía principal.
- Elementos decorativos.
- Etiqueta de ubicación.
- Layout ligeramente asimétrico.

La fotografía debe utilizar `object-fit: cover` y un radius aproximado de `28px`.

---

## 12. Blog y Noticias

Presentar el contenido como una sección editorial moderna.

### Encabezado

**BLOG & NOTICIAS**

**Lo más reciente**

### Grid

- Desktop: 4 columnas.
- Tablet: 2 columnas.
- Mobile: 1 columna.

### Card

Cada noticia debe incluir:

- Imagen.
- Categoría.
- Título.
- Resumen.
- Fecha cuando corresponda.
- Enlace "Leer más".

### Hover

- Elevación de la card.
- Zoom suave de la imagen.
- Incremento de sombra.
- Transición suave.

### Fondo

La sección puede utilizar fondo navy con elementos decorativos sutiles como blobs, líneas o formas geométricas.

---

## 13. Galería

Utilizar una composición tipo **masonry/editorial** en lugar de una cuadrícula uniforme.

### Requerimientos

- Fotografías institucionales.
- Diferentes tamaños y proporciones.
- Bordes redondeados.
- Hover.
- Overlay.
- Icono de visualización.
- Lightbox.
- Botón "Ver galería completa".

### Hover

- Oscurecer ligeramente la imagen.
- Mostrar icono.
- Mostrar acción de visualización.
- Aplicar zoom sutil.

---

## 14. Contacto

La sección de contacto debe funcionar como una CTA visual importante.

### Diseño

- Fondo navy/azul.
- Gradiente.
- Radius aproximado de `32px`.
- Elementos decorativos.
- Información de contacto.
- Formulario.

### Información

- Teléfono.
- Correo.
- Dirección.
- Horario.

### Formulario

Campos:

- Nombre.
- Correo.
- Asunto.
- Mensaje.

### Inputs

- Altura aproximada: `48px`.
- Radius: `12px`.
- Fondo blanco.
- Borde claro.

### Focus

- Borde azul.
- Anillo exterior azul suave.

---

## 15. Footer

### Fondo

`#061535`

## 16. Animaciones

Las animaciones deben ser suaves y funcionales.

### Scroll reveal

Elementos pueden iniciar con:

- Opacidad `0`.
- Desplazamiento vertical de `30px`.

Al entrar en viewport:

- Opacidad `1`.
- Desplazamiento `0`.

### Duración

`600ms`

### Easing

`cubic-bezier(.22, 1, .36, 1)`

---

## 17. Microinteracciones

### Botones

- Elevación.
- Cambio de sombra.
- Cambio de color.
- Movimiento de iconos.

### Cards

- Elevación.
- Zoom de imágenes.
- Cambio de sombra.

### Links

- Cambio de color.
- Subrayado animado.
- Transición de `200-300ms`.

### Imágenes

- Zoom suave.
- Overlay.
- Cursor apropiado.

---

## 18. Elementos decorativos

Utilizar de forma moderada:

- SVG waves.
- Blobs.
- Círculos.
- Líneas curvas.
- Formas orgánicas.
- Elementos geométricos.
- Gradientes sutiles.

Las secciones no deben sentirse como bloques rectangulares completamente independientes.

---

## 19. Responsive Design

### Breakpoints

- Mobile: `576px`
- Tablet: `768px`
- Desktop: `1024px`
- Large: `1280px`
- XL: `1440px`

### Desktop

- Navbar completa.
- Hero grande.
- Estadísticas en una fila.
- 4 cards por fila.
- Layouts de dos columnas.
- Galería editorial.

### Tablet

- 2 cards por fila.
- Layouts simplificados.
- Hero reducido.
- Navbar adaptada.

### Mobile

- Menú hamburger.
- Hero vertical.
- Estadísticas 2×2.
- Cards de una columna.
- Galería de dos columnas.
- Contacto vertical.
- Tipografía reducida.
- Espaciado reducido.

---

## 20. Accesibilidad

### Requerimientos

- Contraste mínimo WCAG AA.
- Texto alternativo en imágenes.
- Navegación mediante teclado.
- Estados `focus-visible`.
- Labels correctamente asociados a formularios.
- Botones accesibles.
- Tamaños táctiles adecuados.
- No depender únicamente del color.
- Soporte para `prefers-reduced-motion`.

### Focus

```css
:focus-visible {
  outline: 3px solid #ffd21f;
  outline-offset: 3px;
}
```

## 21. Modo oscuro (Dark Mode)

El sitio debe incluir **modo claro y modo oscuro**, manteniendo la identidad visual institucional y garantizando buena legibilidad en ambos modos.

### Activación

- Botón de cambio de tema en la Navbar.
- Icono de sol ☀️ para indicar modo claro.
- Icono de luna 🌙 para indicar modo oscuro.
- Transición suave entre temas.
- Guardar la preferencia del usuario mediante `localStorage`.
- Respetar `prefers-color-scheme` como configuración inicial cuando no exista una preferencia guardada.

### Paleta modo oscuro

| Elemento              | Dark Mode |
| --------------------- | --------- |
| Background principal  | `#07142F` |
| Background secundario | `#0A1F4D` |
| Surface / Cards       | `#102653` |
| Surface elevada       | `#15305F` |
| Texto principal       | `#F5F7FB` |
| Texto secundario      | `#B8C4D9` |
| Texto muted           | `#8796B0` |
| Border                | `#263D68` |
| Azul principal        | `#4D8DFF` |
| Azul hover            | `#70A5FF` |
| Amarillo principal    | `#FFD21F` |
| Amarillo hover        | `#FFE45C` |

### Comportamiento de componentes

#### Navbar

- Fondo oscuro semitransparente.
- `backdrop-filter: blur()`.
- Sombra más sutil.
- Links en blanco/gris claro.
- Estado activo en azul o amarillo.

#### Hero

- Mantener las fotografías originales.
- Aumentar ligeramente el overlay oscuro.
- Mantener los colores de los CTA.
- Evitar oscurecer excesivamente el contenido fotográfico.

#### Cards

- Fondo `#102653`.
- Borde `#263D68`.
- Sombras oscuras y suaves.
- Texto principal claro.
- Texto secundario en gris azulado.

#### Secciones

- Alternar entre `#07142F` y `#0A1F4D`.
- Evitar utilizar negro puro `#000000`.
- Mantener suficiente separación visual entre secciones.

#### Formularios

- Inputs con fondo `#102653`.
- Texto blanco.
- Placeholder `#8796B0`.
- Borde `#263D68`.
- Focus en azul.
- CTA amarillo para mantener contraste.

#### Footer

- Utilizar el tono más oscuro de la paleta.
- Mantener textos secundarios visibles.
- Links con hover azul o amarillo.

### Transición entre temas

El cambio de tema debe sentirse fluido:

- Duración: `250-350ms`.
- Transición de `background`, `color`, `border-color` y `box-shadow`.
- No utilizar animaciones exageradas.

```css
* {
  transition:
    background-color 300ms ease,
    color 300ms ease,
    border-color 300ms ease,
    box-shadow 300ms ease;
}
```
