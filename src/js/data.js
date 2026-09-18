/**
 * Fuente de datos del sitio.
 * Cambiar cualquier valor aquí se refleja en todas las páginas sin tocar otro archivo.
 */

export const site = {
  name: 'Institución Educativa Gonzalo Mejía',
  shortName: 'Gonzalo Mejía',
  tagline: 'Educación con compromiso, ciencia y futuro',
  address: 'Calle 96 # 105 - Barrio Fondo Obrero',
  municipality: 'Chigorodó',
  region: 'Subregión Urabá',
  department: 'Antioquia, Colombia',
  phone: '(4) 825 3851',
  email: 'contacto@gonzalomejia.edu.co',
  schedule: 'Lunes a viernes: 6:30 a.m. - 12:30 p.m. y 1:30 p.m. - 5:00 p.m.',
  dane: '811025423-2',
  icfes: '143545',
  nit: '811025423-2',
  social: {
    facebook:
      'https://www.facebook.com/mejiagonzalo20/photos?locale=es_LA',
    plataforma: 'https://gonzalomejia.colegioenlinea.pro/seguridad/login',
  },
}

export const navigation = [
  { label: 'Inicio', href: '/index.html' },
  {
    label: 'Sobre Nosotros',
    href: '/nosotros.html',
    children: [
      { label: 'Quienes somos', href: '/nosotros.html' },
      { label: 'Galería', href: '/galeria.html' },
    ],
  },
  {
    label: 'Institucional',
    href: '/proyectos.html',
    children: [
      { label: 'Proyectos', href: '/proyectos.html' },
      { label: 'Documentos institucionales', href: '/documentos.html' },
      { label: 'Noticias', href: '/noticias.html' },
    ],
  },
  {
    label: 'Gestiones',
    href: '/gestiones.html',
    children: managementNavItems(),
  },
  { label: 'Contacto', href: '/contacto.html' },
]

// Submenú de gestiones para la navegación principal
function managementNavItems() {
  return [
    { label: 'Consejo académico', href: '/consejo-academico.html' },
    { label: 'Gestión administrativa y financiera', href: '/gestion-administrativa.html' },
    { label: 'Gestión comunitaria', href: '/gestion-comunitaria.html' },
    { label: 'Gestión directiva', href: '/gestion-directiva.html' },
  ]
}

export const hero = {
  slides: [
    {
      image: '/images/hero/hero-1.svg',
      eyebrow: 'Bienvenidos',
      title: 'Educación con compromiso y futuro',
      text: 'La Institución Educativa Gonzalo Mejía forma ciudadanos íntegros, con grandes aspiraciones y profundo compromiso con su comunidad.',
    },
    {
      image: '/images/hero/hero-2.svg',
      eyebrow: 'Nuestra institución',
      title: 'Una comunidad que aprende, crece y transforma',
      text: 'En el corazón de Chigorodó trabajamos cada día por una educación moderna, tecnológica y cercana a las familias.',
    },
    {
      image: '/images/hero/hero-3.svg',
      eyebrow: 'Proyectos pedagógicos',
      title: 'Competencias básicas y ciudadanas',
      text: 'Proyectos transversales de sexualidad, ornamentación, medio ambiente y prevención de desastres para vivir el aprendizaje.',
    },
    {
      image: '/images/hero/hero-4.svg',
      eyebrow: 'Plataforma académica',
      title: 'Conectados con la tecnología',
      text: 'Una sala de sistemas con 50 computadores y plataforma en línea para estar siempre en contacto con el proceso escolar.',
    },
  ],
  primaryCta: { label: 'Conoce la institución', href: '/nosotros.html', icon: 'arrow-right' },
  secondaryCta: { label: 'Ver galería', href: '/galeria.html', icon: 'camera' },
}

export const stats = [
  { value: 1000, label: 'Estudiantes', icon: 'users' },
  { value: 600, label: 'Egresados', icon: 'graduation-cap' },
  { value: 29, label: 'Docentes', icon: 'book-open' },
  { value: 15, label: 'Aulas de clase', icon: 'school' },
]

export const about = {
  eyebrow: 'Nuestra institución',
  title: 'Grandes aspiraciones, compromiso con la comunidad',
  paragraphs: [
    'La Institución Educativa Gonzalo Mejía está ubicada en el centro del municipio de Chigorodó, en la calle 96 Nº 105-27, barrio Fondo Obrero. Es un establecimiento educativo de dimensiones físicas reducidas, pero con grandes aspiraciones, proyecciones y compromiso con el servicio a la comunidad.',
    'Dispone de 13 aulas, una sala de sistemas equipada con 50 computadores en buen estado, una biblioteca amplia y confortable, un laboratorio con espacio limitado pero debidamente dotado, un área destinada a la secretaría y la rectoría, así como espacios para coordinación y orientación escolar. Además, cuenta con una tienda escolar, una simulación de restaurante escolar, una batería sanitaria compuesta por seis unidades, un baño adaptado para estudiantes con necesidades educativas especiales y una cancha para el desarrollo de actividades deportivas.',
  ],
  image: '/images/about/about-1.svg',
  imageAlt: 'Institución Educativa Gonzalo Mejía',
  locationBadge: { icon: 'map-pin', text: 'Centro de Chigorodó, Urabá' },
  info: [
    { label: 'Dirección', value: site.address },
    { label: 'Teléfono', value: site.phone },
    { label: 'Subregión', value: site.region },
    { label: 'Municipio', value: site.municipality },
    { label: 'Código DANE', value: site.dane },
    { label: 'Código ICFES', value: site.icfes },
    { label: 'NIT', value: site.nit },
  ],
}

export const projects = {
  eyebrow: 'Institucional',
  title: 'Proyectos pedagógicos',
  intro:
    'Los proyectos pedagógicos establecidos como obligatorios para todos los niveles de la educación formal en la Ley 115 de 1994, su decreto reglamentario 1860 del mismo año y las normas que la han modificado, se conciben como una apuesta al desarrollo de competencias básicas y ciudadanas a través de todas las dinámicas institucionales en cada plantel educativo y desde un enfoque transversal al currículo.',
  items: [
    {
      number: '01',
      title: 'Sexualidad',
      description: 'Proyecto sexualidad I.E. Gonzalo Mejía.',
      icon: 'heart-pulse',
    },
    {
      number: '02',
      title: 'Ornamentación y jardinería',
      description: 'Proyecto ornamentación I.E. Gonzalo Mejía.',
      icon: 'flower-2',
    },
    {
      number: '03',
      title: 'Medio ambiente',
      description: 'Proyecto medio ambiente I.E. Gonzalo Mejía.',
      icon: 'leaf',
    },
    {
      number: '04',
      title: 'Prevención de desastres',
      description: 'Proyecto prevención de desastres I.E. Gonzalo Mejía.',
      icon: 'shield',
    },
  ],
}

export const documents = {
  eyebrow: 'Institucional',
  title: 'Documentos institucionales',
  intro:
    'Consulta y descarga los documentos institucionales que orientan la vida escolar de la institución.',
  items: [
    {
      title: 'Proyecto Educativo Institucional (PEI)',
      description: 'Documento rector del horizonte y las prácticas institucionales.',
      file: '/documents/pei.pdf',
      icon: 'file-text',
    },
    {
      title: 'Manual de convivencia',
      description: 'Acuerdos y normas para una sana convivencia escolar.',
      file: '/documents/manual-convivencia.pdf',
      icon: 'file-text',
    },
    {
      title: 'Sistema Institucional de Evaluación',
      description: 'Criterios y procedimientos de la evaluación de los estudiantes.',
      file: '/documents/sistema-evaluacion.pdf',
      icon: 'file-text',
    },
    {
      title: 'Horizonte institucional',
      description: 'Misión, visión y principios que orientan nuestra labor educativa.',
      file: '/documents/horizonte-institucional.pdf',
      icon: 'file-text',
    },
  ],
}

export const news = {
  eyebrow: 'Blog y noticias',
  title: 'Lo más reciente',
  items: [
    {
      image: '/images/news/news-1.svg',
      category: 'Institucional',
      title: 'Inicio del año escolar 2026',
      summary: 'Conoce las fechas clave del calendario académico y los protocolos de inicio de clases.',
      date: 'Enero 2026',
    },
    {
      image: '/images/news/news-2.svg',
      category: 'Proyectos',
      title: 'Proyecto de medio ambiente: sembrando vida',
      summary: 'Estudiantes y docentes participan en jornadas de embellecimiento y cuidado del entorno escolar.',
      date: 'Febrero 2026',
    },
    {
      image: '/images/news/news-3.svg',
      category: 'Comunidad',
      title: 'Jornadas de integración con las familias',
      summary: 'Espacios de encuentro y participación para las familias de nuestra comunidad educativa.',
      date: 'Marzo 2026',
    },
    {
      image: '/images/news/news-4.svg',
      category: 'Logros',
      title: 'Gonzalo Mejía frente a las pruebas Saber',
      summary: 'Nuestros estudiantes se preparan con acompañamiento permanente para las pruebas de Estado.',
      date: 'Abril 2026',
    },
  ],
}

export const gallery = {
  eyebrow: 'Sobre nosotros',
  title: 'Galería institucional',
  intro: 'Un recorrido visual por los espacios, las aulas y los momentos de nuestra institución.',
  items: [
    { image: '/images/gallery/gallery-1.svg', caption: 'Nuestra sede' },
    { image: '/images/gallery/gallery-2.svg', caption: 'Aula de clase' },
    { image: '/images/gallery/gallery-3.svg', caption: 'Sala de sistemas' },
    { image: '/images/gallery/gallery-4.svg', caption: 'Biblioteca' },
    { image: '/images/gallery/gallery-5.svg', caption: 'Cancha deportiva' },
    { image: '/images/gallery/gallery-6.svg', caption: 'Laboratorio' },
    { image: '/images/gallery/gallery-7.svg', caption: 'Restaurante escolar' },
    { image: '/images/gallery/gallery-8.svg', caption: 'Tienda escolar' },
  ],
}

export const managementAreas = [
  {
    slug: 'consejo-academico',
    title: 'Consejo académico',
    icon: 'presentation',
    summary:
      'Integrado por el Rector, los directivos docentes y un docente por cada área definida en el plan de estudios.',
  },
  {
    slug: 'gestion-administrativa',
    title: 'Gestión administrativa y financiera',
    icon: 'briefcase',
    summary:
      'Provee los recursos financieros, físicos, logísticos y humanos necesarios para la prestación del servicio educativo.',
  },
  {
    slug: 'gestion-comunitaria',
    title: 'Gestión comunitaria',
    icon: 'users-round',
    summary:
      'Planes, programas y servicios para mejorar las condiciones de vida y la participación de la comunidad.',
  },
  {
    slug: 'gestion-directiva',
    title: 'Gestión directiva',
    icon: 'compass',
    summary:
      'Facilita la coordinación e integración de los procesos institucionales en sus contextos local, regional y nacional.',
  },
]

export const council = {
  description:
    'Está integrado por el Rector quien lo preside, los directivos docentes y un docente por cada área definida en el plan de estudios.',
  functionsTitle: 'Funciones del Consejo Académico',
  functions: [
    'Servir de órgano consultor del Consejo Directivo en la revisión de la propuesta del proyecto educativo institucional.',
    'Estudiar el currículo y propiciar su continuo mejoramiento, introduciendo las modificaciones y ajustes, de acuerdo con el procedimiento previsto en el Decreto.',
    'Organizar el plan de estudios y orientar su ejecución.',
    'Participar en la evaluación institucional anual.',
    'Integrar los consejos de docentes para la evaluación periódica del rendimiento de los educandos y para la promoción, asignarles sus funciones y supervisar el proceso general de evaluación.',
    'Recibir y decidir los reclamos de los alumnos sobre la evaluación educativa.',
    'Las demás funciones afines o complementarias con las anteriores que le atribuya el proyecto educativo institucional.',
  ],
  rector: {
    title: 'Funciones del Rector',
    lead: 'Le corresponde al Rector del establecimiento educativo:',
    functions: [
      'Orientar la ejecución del proyecto educativo institucional y aplicar las decisiones del gobierno escolar.',
      'Velar por el cumplimiento de las funciones docentes y el oportuno aprovisionamiento de los recursos necesarios para el efecto.',
      'Promover el proceso continuo de mejoramiento de la calidad de la educación en el establecimiento.',
      'Mantener activas las relaciones con las autoridades educativas, con los patrocinadores o auspiciadores de la institución y con la comunidad local.',
      'Establecer canales de comunicación entre los diferentes estamentos de la comunidad educativa.',
      'Orientar el proceso educativo con la asistencia del Consejo Académico.',
      'Ejercer las funciones disciplinarias que le atribuyan la ley, los reglamentos y el manual de convivencia.',
      'Identificar las nuevas tendencias, aspiraciones e influencias para canalizarlas en favor del mejoramiento del proyecto educativo institucional.',
      'Promover actividades de beneficio social que vinculen al establecimiento con la comunidad local.',
      'Aplicar las disposiciones que se expidan por parte del Estado, atinentes a la prestación del servicio público educativo.',
      'Las demás funciones afines o complementarias con las anteriores que le atribuya el proyecto educativo institucional.',
    ],
  },
}

export const managementPages = {
  'gestion-administrativa': {
    eyebrow: 'Gestiones',
    title: 'Gestión administrativa y financiera',
    paragraphs: [
      'El componente administrativo del PEI, o gestión administrativa y financiera, propone cambiar el sistema administrativo vertical y rígido tradicional, por otras formas que respondan al reto de la modernización, flexibilización y democratización del manejo directivo de las instituciones educativas, dando uso a la autoridad horizontal y ejecutando elementos propios de una gerencia estratégica.',
      'En la institución educativa, la Gestión administrativa y financiera se halla orientada a proveer los recursos financieros, físicos, logísticos y humanos necesarios a la prestación del servicio educativo. En esta área se analizan la capacidad de la institución para guiar sus sistemas de apoyo en beneficio del quehacer pedagógico, y la manera como la administración fundamenta su razón de ser en función de las demandas de la Gestión académica.',
    ],
  },
  'gestion-comunitaria': {
    eyebrow: 'Gestiones',
    title: 'Gestión comunitaria',
    paragraphs: [
      'Comprende los planes, programas y servicios que la institución pone a disposición de la comunidad para mejorar sus condiciones de vida, hacerla partícipe de la vida institucional, de sus procesos y decisiones y estimular el apoyo de la familia en relación con el aprendizaje de los estudiantes, para poner a disposición de la comunidad educativa un conjunto de servicios que apoyen su bienestar.',
      'Busca la creación de escenarios y formas de comunicación claramente establecidos y de doble vía, que estimulen la participación de los miembros de la comunidad educativa en los diferentes espacios e instancias de toma de decisiones y acción de la institución educativa, para contar con instancias de apoyo que favorezcan una sana convivencia basada en el respeto por los demás, la tolerancia, la valoración de las diferencias y la atención a la diversidad.',
      'La comunidad educativa debe fijar un sistema de principios con sentido y contexto, que genere una convivencia armónica y pacífica; su permanencia se fundamenta en el cumplimiento de esos principios, además del rendimiento académico según lo estipulado por las normas que nos rigen. La institución se rige por los principios de:',
    ],
    principles: [
      {
        title: 'Virtud',
        icon: 'heart-handshake',
        text: 'Entendida como el hábito constante de obrar, implica el aprender a SER y a CONVIVIR, la formación de mejores seres humanos, el desarrollo de competencias afectivas, cultivando las dimensiones más íntimas y complejas de la existencia humana. La comunidad educativa desarrollará valores como: autoestima, autodeterminación, solidaridad, respeto, pluralismo y justicia.',
      },
      {
        title: 'Trabajo',
        icon: 'hard-hat',
        text: 'Aprender a HACER para influir en el entorno, implica el desarrollo de habilidades y destrezas para desempeñarse en la vida, poner en práctica los conocimientos y adaptar la enseñanza al futuro mercado del trabajo. La comunidad educativa desarrollará valores como: trabajo en equipo, creatividad, responsabilidad, honestidad, pertenencia, compromiso, tolerancia, competitividad y laboriosidad.',
      },
      {
        title: 'Ciencia',
        icon: 'lightbulb',
        text: 'Desarrollo de habilidades intelectivas y del conocimiento; implica la adquisición de los instrumentos de la comprensión, así mismo aprender a aprender ejercitando la atención, la memoria y el pensamiento, orientado todo a la adquisición de competencias interpretativas, argumentativas y propositivas.',
      },
    ],
  },
  'gestion-directiva': {
    eyebrow: 'Gestiones',
    title: 'Gestión directiva',
    paragraphs: [
      'El área de la Gestión directiva del PEI involucra los procesos orientados a facilitar la coordinación e integración de los procesos institucionales y la inclusión del establecimiento educativo en los contextos local, regional y nacional.',
      'El reto institucional de esta área es el de armonizar y coordinar los esfuerzos de las diferentes áreas de gestión de la institución en consonancia con su horizonte institucional, un horizonte que, en la medida en que es pertinente, prepara a la institución para responder a los múltiples retos que debe enfrentar.',
    ],
  },
}

export const contact = {
  eyebrow: 'Contáctenos',
  title: 'Estamos para servirte',
  intro:
    'Comunícate con nosotros para conocer más sobre el proceso de matrícula, los proyectos de la institución o cualquier inquietud sobre nuestra labor educativa.',
  items: [
    {
      icon: 'phone',
      label: 'Teléfono',
      value: site.phone,
      href: 'tel:+5748253851',
    },
    {
      icon: 'mail',
      label: 'Correo',
      value: site.email,
      href: 'mailto:contacto@gonzalomejia.edu.co',
    },
    {
      icon: 'map-pin',
      label: 'Dirección',
      value: `${site.address}, ${site.municipality}`,
    },
    {
      icon: 'clock',
      label: 'Horario',
      value: site.schedule,
    },
  ],
  form: {
    legend: 'Formulario de contacto',
    fields: {
      name: { label: 'Nombre', type: 'text', placeholder: 'Tu nombre completo', required: true },
      email: { label: 'Correo', type: 'email', placeholder: 'tucorreo@ejemplo.com', required: true },
      subject: { label: 'Asunto', type: 'text', placeholder: '¿Sobre qué nos escribes?', required: true },
      message: { label: 'Mensaje', type: 'textarea', placeholder: 'Cuéntanos tu inquietud...', required: true },
    },
    submit: 'Enviar mensaje',
    success:
      '¡Gracias por escribirnos! Hemos recibido tu mensaje y te responderemos pronto.',
    note: 'El sitio es de carácter informativo; envíanos un correo o llámanos para atención directa.',
  },
}

export const footer = {
  about:
    'Institución educativa moderna, tecnológica y cercana a su comunidad, comprometida con la formación de ciudadanos íntegros en Chigorodó, Urabá.',
  socials: [
    { icon: 'facebook', label: 'Facebook', href: site.social.facebook },
    { icon: 'external-link', label: 'Plataforma académica', href: site.social.plataforma },
  ],
  links: navigation,
}

export const pagesMeta = {
  index: { title: 'Inicio' },
  nosotros: { title: 'Quienes somos' },
  galeria: { title: 'Galería' },
  proyectos: { title: 'Proyectos' },
  documentos: { title: 'Documentos institucionales' },
  noticias: { title: 'Noticias' },
  gestiones: { title: 'Gestiones' },
  'consejo-academico': { title: 'Consejo académico' },
  'gestion-administrativa': { title: 'Gestión administrativa y financiera' },
  'gestion-comunitaria': { title: 'Gestión comunitaria' },
  'gestion-directiva': { title: 'Gestión directiva' },
  contacto: { title: 'Contacto' },
}