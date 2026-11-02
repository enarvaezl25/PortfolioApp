// Contenido del portfolio. Todo el texto y las cifras salen del CV y de las láminas de cada proyecto.
const path = require('path');
const local = require('./local-images.json');

// Imágenes de Behance alojadas en public/img/behance; la clave conserva la ruta original del proyecto
const b = (key, w, h, alt = '') => ({ src: `/img/behance/${path.basename(key).replace(/\.[a-z]+$/i, '')}.webp`, w, h, alt });
const l = (name, alt = '') => ({ src: `/img/${name}.webp`, w: local[name].w, h: local[name].h, alt });

const site = {
  name: 'Enoc Narváez',
  fullName: 'Enoc Narváez López',
  role: 'Diseñador visual y UX/UI',
  city: 'Managua, Nicaragua',
  email: 'enocnarvaez@gmail.com',
  behance: 'https://www.behance.net/israelnarvaez',
  linkedin: 'https://www.linkedin.com/in/enarvaezl',
  description: 'Portfolio de Enoc Narváez, diseñador visual y UX/UI en Managua, Nicaragua. Interfaces, sitios web, identidad de marca y diseño editorial.',
  bio: 'Diseño interfaces, marcas y piezas gráficas con más de 5 años de experiencia en proyectos institucionales, educativos y comerciales, en Nicaragua y a nivel internacional.',
  clients: ['Grupo LAFISE', 'IBW Nicaragua', 'TK Analytic', 'UNAN-Managua', 'All Florida Marketing', 'Tecnocomp', 'INATEC', 'Best Brand Pacas', 'INCODEGSA', 'Children Believe'],
  impact: [
    { n: 60, pre: '+', suf: '%', label: 'de tráfico web frente al sitio anterior', source: 'Biblioteca Central UNAN-Managua', slug: 'biblioteca-unan' },
    { n: 100, pre: '+', suf: '%', label: 'de tráfico móvil con la nueva estructura UX', source: 'Best Brand Pacas', slug: 'best-brand-pacas' },
    { n: 15, pre: '+', suf: '%', label: 'de conversiones digitales', source: 'Best Brand Pacas', slug: 'best-brand-pacas' },
    { n: 35, pre: '+', suf: '%', label: 'de participación estudiantil en entornos virtuales', source: 'Cursos e-learning, UNAN-Managua' },
    { n: 40, pre: '−', suf: '%', label: 'de reducción máxima en tiempos de entrega editorial', source: 'Revistas, boletines y catálogos', slug: 'editorial' },
    { n: 4, pre: '+', suf: '%', label: 'en ventas con publicidad y material gráfico', source: 'IBW Nicaragua', slug: 'ibw-nicaragua' },
  ],
  process: [
    { title: 'Investigar', body: 'Entiendo a las personas usuarias, analizo referentes del sector y defino los flujos de navegación antes de abrir el archivo de diseño.', tags: ['Investigación de usuarios', 'Análisis competitivo', 'User journey'] },
    { title: 'Estructurar', body: 'Organizo el contenido con wireframes de baja y alta fidelidad para validar la arquitectura de información desde temprano.', tags: ['Arquitectura', 'Wireframes', 'Flujos'] },
    { title: 'Prototipar', body: 'Construyo prototipos interactivos para probar la experiencia cuando cambiar algo todavía cuesta poco.', tags: ['Figma', 'Prototipos', 'Validación'] },
    { title: 'Diseñar', body: 'Llevo la interfaz a alta fidelidad con tokens y componentes reutilizables, cuidando jerarquía, tipografía y consistencia.', tags: ['UI', 'Design system', 'Accesibilidad'] },
    { title: 'Implementar', body: 'Trabajo junto a desarrollo, marketing y producto, y sigo iterando con feedback, pruebas y métricas.', tags: ['WordPress', 'HTML, CSS, JS', 'Google Analytics'] },
  ],
  experience: [
    { role: 'Diseñador UX/UI', org: 'Grupo LAFISE', when: 'Jul. 2026 – Actual', points: ['Diseño de interfaces móviles para aplicaciones y productos digitales del grupo.', 'Integración de inteligencia artificial en la experiencia de producto, buscando que aporte claridad y confianza a quien la usa.', 'Aplicación de Behavior Design para entender qué motiva a las personas y facilitar la acción en cada flujo.', 'Definición de flujos, prototipos e interfaces de alta fidelidad para móvil.'] },
    { role: 'Diseñador Gráfico', org: 'IBW Nicaragua', when: 'Sep. 2025 – Jun. 2026', where: 'Remoto', points: ['Campañas publicitarias digitales: concepto, layout, adaptación multiformato y entrega para pauta.', 'Piezas para redes sociales, banners web, carruseles, material impreso de ventas y merchandising.', 'Contribución a un aumento del 4% en ventas derivado de la publicidad y los materiales gráficos producidos.'] },
    { role: 'Diseñador Senior UX/UI', org: 'TK Analytic, España', when: 'Oct. 2025', where: 'Remoto', points: ['Wireframes de baja y alta fidelidad para plataformas web, gestores internos y aplicaciones.', 'Prototipos interactivos para validar flujos y experiencia de usuario desde temprano.', 'Rediseño de interfaces en sistemas de gestión, sitios web y aplicaciones, junto a desarrollo, marketing y producto.'] },
    { role: 'Diseñador Gráfico y Web Senior', org: 'Empresa comercial, freelance', when: 'Ene. – Jun. 2025', where: 'Managua', points: ['Rediseño completo de la identidad visual para medios impresos y digitales.', 'Nuevo sitio web con e-commerce y los primeros 6 catálogos de productos de la empresa.', 'Materiales de campaña que aumentaron las conversiones en un 15%.'] },
    { role: 'Diseñador Gráfico y Web', org: 'Biblioteca Central “Salomón de la Selva”, UNAN-Managua', when: 'Abr. – Dic. 2024', where: 'Managua', points: ['Sitio web institucional y portal que centraliza las 10 revistas académicas de la universidad.', 'Diseño y diagramación de boletines informativos.', 'Como webmaster, la nueva arquitectura incrementó el tráfico en un 60% frente al sitio anterior.'] },
    { role: 'Diseñador UI/UX y Web, freelance', org: 'All Florida Marketing, Miami', when: 'Jul. – Sep. 2023', where: 'Remoto', points: ['Sitios para construcción, servicios automotrices, turismo y venta de materiales metálicos.', 'Soluciones a medida en WordPress con APIs, CSS, JavaScript y PHP.', 'Diseño UX/UI adaptativo para móvil y escritorio.'] },
    { role: 'Diseñador UI/UX y Web, freelance', org: 'Tecnocomp, Servicios Computarizados S.A.', when: '2020 – 2023', where: 'Managua', points: ['Sitios corporativos y plataformas e-commerce para empresas nacionales e internacionales.', 'Investigación de usuarios y definición de flujos de navegación para móvil y escritorio.'] },
    { role: 'Consultor en Diseño Gráfico y e-Learning', org: 'Tecnocomp · INATEC · Children Believe / MEFCCA', when: '2020 – 2023', where: 'Managua', points: ['Manuales, guías y recursos interactivos para programas de formación virtual.', 'Contenidos SCORM con Articulate 360 integrados en plataformas LMS.'] },
    { role: 'Docente de Diseño Gráfico y Multimedia', org: 'UNAN-Managua', when: 'Ene. 2016 – Ene. 2025', where: 'Managua', points: ['Asignaturas de Diseño Gráfico, Web, UX/UI, Proyectos Multimedia y Base de Datos.', 'Materiales e-learning con Articulate 360, Moodle y plataformas LMS.'] },
    { role: 'Docente de Diseño Integral de Comunicaciones', org: 'UNP', when: 'Sep. – Dic. 2024', where: 'Managua', points: ['Animación Digital y Diseño de Aplicaciones Móviles.', 'Prototipos con Figma y Adobe XD, Scrum, Kanban, Design Thinking y User Journey Mapping.'] },
  ],
  education: [
    { title: 'Maestría en Diseño Gráfico Digital', org: 'UNIR México y UNAN-Managua', when: '2024 – 2025' },
    { title: 'Maestría en Administración de Tecnologías de la Información', org: 'UNAN-Managua', when: '2017 – 2020' },
    { title: 'Licenciatura en Informática Educativa', org: 'UNAN-Managua', when: '2011 – 2016' },
    { title: 'Técnico en Diseño Gráfico', org: 'INATEC', when: '2023' },
    { title: 'Diseñador de Experiencia de Usuario (UX)', org: 'Fundación Carlos Slim', when: '2021' },
    { title: 'Scrum Foundation (SPFC)', org: 'Certiprof', when: '2022' },
  ],
  tools: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'InDesign', 'WordPress', 'Elementor', 'HTML y CSS', 'JavaScript', 'Articulate 360', 'Moodle', 'Google Analytics', 'Meta Business Suite', 'Jira', 'Notion', 'ClickUp'],
};

const CATS = { ux: 'UX/UI', web: 'Web', marca: 'Branding', grafico: 'Gráfico' };

// fit: 'cover' llena la tarjeta; 'contain' deja flotar los mockups con fondo transparente sobre el color del proyecto
const projects = [
  {
    slug: 'hootver', title: 'Hootver', cats: ['ux'], year: '2025', featured: true,
    kind: 'Plataforma de gestión de eventos',
    tagline: 'Un solo panel para crear eventos, vender entradas y entender el negocio.',
    accent: '#6427C4', on: '#FFFFFF', soft: '#EFE8FB',
    cover: b('fs_webp/439c7a249338503.6a056b5d9f228.png', 1400, 913, 'Pantalla de bienvenida de Hootver con su mascota, un búho morado'), fit: 'cover',
    behance: 'https://www.behance.net/gallery/249338503/Hootver-UXUI',
    facts: [['Rol', 'Lead UI/UX Designer'], ['Duración', '2 meses'], ['Equipo', '1 diseñador'], ['Herramientas', 'Figma, Adobe CC']],
    sections: [
      { id: 'problema', label: 'Problema', title: 'Eventos gestionados con procesos manuales y herramientas dispersas', blocks: [
        { type: 'lede', text: 'Controlar asistentes, entradas vendidas, pedidos y facturación dependía de procesos manuales. Sin un dashboard centralizado había poca visibilidad operativa, errores repetidos y una experiencia ineficiente para los administradores.' },
        { type: 'text', text: 'Tampoco existía una plataforma que integrara en un solo sistema la creación de eventos, las promociones, los descuentos, el balance financiero y el control general del negocio.' },
        { type: 'quote', text: '¿Cómo diseñar una plataforma que reduzca la fricción operativa y permita una gestión integral de eventos desde una sola experiencia digital?' },
      ] },
      { id: 'investigacion', label: 'Investigación', title: 'Auditoría e investigación', blocks: [
        { type: 'cols', items: [
          { title: 'Investigación de usuarios', body: 'Analicé las necesidades operativas de plataformas de ticketing y gestión de eventos. Estos fueron los puntos principales:', list: ['Falta de centralización', 'Procesos repetitivos manuales', 'Baja trazabilidad de pedidos', 'Dificultad para gestionar promociones', 'Ausencia de visibilidad financiera clara'] },
          { title: 'Análisis competitivo', body: 'Tomé como referencia Ticketmaster, Eventbrite y sistemas internos de ticketing del sector. Encontré oportunidades para mejorar:', list: ['Jerarquía visual', 'Simplicidad de navegación', 'Claridad en dashboards', 'Optimización de formularios', 'Experiencia administrativa completa'] },
        ] },
      ] },
      { id: 'decisiones', label: 'Decisiones', title: 'Decisiones estratégicas', blocks: [
        { type: 'cols', items: [
          { title: 'Centralizar en un dashboard', body: 'Prioricé un dashboard administrativo modular sobre varias herramientas separadas, para reducir tiempos operativos y reunir los procesos clave en una sola plataforma.' },
          { title: 'Web-first, no mobile-first', body: 'El usuario final puede consultar desde el móvil, pero las tareas complejas como facturación, pedidos y gestión de eventos ocurren en escritorio. Por eso diseñé primero una experiencia web robusta y después la adaptación móvil.' },
        ] },
        { type: 'grid', cols: 2, images: [
          b('fs_webp/b1d1bf249338503.6a056b5da0a1e.png', 1400, 1511, 'Wireframe del panel de control de Hootver'),
          b('fs_webp/fbb5d4249338503.6a056b5da10a5.png', 1400, 1511, 'Wireframes de listado de eventos y mapa de asientos'),
        ], caption: 'Wireframes de baja fidelidad: primero la estructura, después la interfaz.' },
      ] },
      { id: 'sistema', label: 'Design system', title: 'Un sistema basado en tokens', blocks: [
        { type: 'text', text: 'Establecí tokens reutilizables para colores, espaciados, tipografía y componentes, para garantizar consistencia y eficiencia en toda la plataforma.' },
        { type: 'palette', hint: 'Toca un color para copiar su valor', colors: [['Light Purple', '#DBC4FF'], ['Purple Hoot', '#9046FC'], ['Dark Purple', '#6427C4'], ['Ultra Dark Purple', '#290D55'], ['Yellow Hoot', '#EDCB3E'], ['Light Yellow', '#FFE167'], ['Pure White', '#FFFFFF'], ['Black', '#110820']] },
        { type: 'cols', items: [
          { title: 'Color con función', list: ['Purple Hoot: acciones y elementos interactivos', 'Light Purple: fondos suaves y respiración visual', 'Ultra Dark Purple: contraste alto y jerarquías importantes', 'Yellow Hoot: métricas, alertas y datos relevantes'] },
          { title: 'Tipografía', body: 'Cocon Pro para titulares con carácter e Inter V para la lectura de datos, con tamaños de 48, 30, 16 y 14 px.' },
        ] },
        { type: 'spacing', title: 'Escala de espaciado', note: 'Grid de 12 columnas con márgenes laterales de 96 px.', values: [4, 8, 16, 24, 32, 48, 64] },
        { type: 'image', image: b('fs_webp/991098249338503.6a05f6cbca259.png', 1400, 1692, 'Biblioteca de componentes de Hootver sobre fondo morado oscuro'), caption: 'Componentes reutilizables: botones, navegación, tablas y tarjetas.' },
      ] },
      { id: 'pantallas', label: 'Pantallas', title: 'La plataforma, módulo por módulo', blocks: [
        { type: 'tabs', tabs: [
          ['Bienvenida', b('fs_webp/ed5788249338503.6a056b5da869e.png', 1400, 1103, 'Pantalla de bienvenida de Hootver')],
          ['Panel de control', b('fs_webp/46c6f4249338503.6a056b5da3d8b.png', 1400, 1103, 'Panel de control con ventas y gráficos')],
          ['Resumen del evento', b('fs_webp/f1c4ff249338503.6a056b5d9f83b.png', 1400, 1103, 'Resumen de un evento con métricas y mapa')],
          ['Información', b('fs_webp/dcb647249338503.6a056b5d9ff37.png', 1400, 1103, 'Formulario de información del evento')],
          ['Imágenes', b('fs_webp/52eed6249338503.6a056b5da8c80.png', 1400, 1103, 'Carga de imágenes del evento')],
          ['Asistentes', b('fs_webp/080661249338503.6a056b5da5581.png', 1400, 1103, 'Listado de asistentes')],
          ['Editar entrada', b('fs_webp/2c8474249338503.6a056b5da600b.png', 1400, 1103, 'Modal para editar una entrada, con aviso en amarillo')],
          ['Entradas', b('fs_webp/2efa61249338503.6a056b5da7433.png', 1400, 1103, 'Listado de entradas de un evento')],
          ['Crear entradas', b('fs_webp/059da8249338503.6a056b5da37f5.png', 1400, 1103, 'Asistente por pasos para crear entradas')],
        ] },
      ] },
      { id: 'resultado', label: 'Resultado', title: 'Resultado y aprendizajes', blocks: [
        { type: 'stats', note: 'Impacto esperado, estimado en el diseño.', items: [{ n: 24, pre: '−', suf: '%', label: 'Reducción estimada en tiempos operativos manuales' }] },
        { type: 'text', text: 'El diseño dejó la base de una plataforma escalable que integra los procesos operativos en un solo sistema, con mayor control de asistentes, entradas y pedidos, y mejor trazabilidad en promociones y balance financiero.' },
        { type: 'cols', items: [
          { title: 'Complejidad vs. simplicidad', body: 'Una plataforma robusta no tiene que ser una experiencia compleja. La solución estuvo en simplificar procesos críticos con arquitectura clara, jerarquía visual y componentes consistentes.' },
          { title: 'Ciclos de feedback', body: 'La mejora más importante no estaba en agregar funciones, sino en reducir fricción y facilitar decisiones. Un dashboard exige pensar primero en el negocio y luego en la interfaz.' },
        ] },
      ] },
    ],
  },
  {
    slug: 'best-brand-pacas', title: 'Best Brand Pacas', cats: ['ux', 'web'], year: '2025', featured: true,
    kind: 'E-commerce y rebranding',
    tagline: 'Una tienda en línea clara para explorar productos y comprar sin fricción.',
    accent: '#1A3CB8', on: '#FFFFFF', soft: '#E6EBFA',
    cover: b('max_3840_webp/5f034b233352713.68adefcfc6a33.png', 2160, 1560, 'Sitio de Best Brand Pacas en un monitor sobre fondo oscuro'), fit: 'cover',
    behance: 'https://www.behance.net/gallery/233352713/Web-Design-UXUI',
    facts: [['Rol', 'Diseño UX/UI e implementación'], ['Duración', 'Menos de 2 meses'], ['Ubicación', 'Nicaragua'], ['Herramientas', 'Figma']],
    sections: [
      { id: 'contexto', label: 'Contexto', title: 'Una marca que necesitaba vender en línea', blocks: [
        { type: 'lede', text: 'Best Brand Pacas necesitaba un sitio que impulsara sus ventas en línea y posicionara la marca en el mercado digital. El reto fue diseñar un e-commerce claro y funcional, que facilitara la exploración y la compra transmitiendo confianza en cada interacción.' },
        { type: 'text', text: 'La solución se centró en un diseño moderno y accesible, con categorías organizadas, navegación intuitiva y un flujo de compra simplificado, además de secciones para comunicar la identidad de la empresa y dar visibilidad a los distribuidores.' },
        { type: 'stats', items: [{ n: 15, pre: '+', suf: '%', label: 'Conversiones digitales' }, { n: 100, pre: '+', suf: '%', label: 'Tráfico móvil' }] },
      ] },
      { id: 'proceso', label: 'Proceso', title: 'Proceso de diseño', blocks: [
        { type: 'steps', items: [['Research', 'Mejores prácticas de e-commerce y referentes.'], ['Ideating', 'Estructura de categorías y recorrido de compra.'], ['Copywriting', 'Titulares claros y llamadas a la acción.'], ['Design', 'Cuadrícula estricta, módulos y alto contraste.'], ['Development', 'Implementación e iteraciones rápidas.']] },
      ] },
      { id: 'wireframes', label: 'Wireframes', title: 'Validar la arquitectura antes del diseño visual', blocks: [
        { type: 'text', text: 'Los wireframes organizaron la información con una jerarquía clara. Prioricé los productos en la página principal, seguidos por categorías destacadas, secciones de confianza como testimonios, misión y valores, y un carrito accesible en todo momento.' },
        { type: 'image', image: b('1400_webp/784186233352713.68adefcfc60bb.png', 1400, 1491, 'Wireframes de la página principal de Best Brand Pacas') },
      ] },
      { id: 'interfaz', label: 'Interfaz', title: 'Un ritmo visual simple que acelera la decisión', blocks: [
        { type: 'text', text: 'Cada pantalla mantiene titulares grandes y un CTA destacado. La cuadrícula estricta, los módulos con esquinas redondeadas y la tipografía de alto contraste forman una UI ágil. La repetición de patrones reduce la carga cognitiva y genera confianza.' },
        { type: 'browser', image: b('1400_webp/30416b233352713.68adefcfc4b0f.png', 1400, 4213, 'Página completa del sitio de Best Brand Pacas'), url: 'bestbrandpacas', caption: 'Desliza dentro de la ventana para recorrer la página completa.' },
        { type: 'image', image: b('1400_webp/df816d233352713.68adefcfc5c1a.png', 1400, 733, 'Composición de páginas del sitio') },
        { type: 'image', image: b('1400_webp/2d1491233352713.68adefcfc5768.png', 1400, 820, 'Tipografía Montserrat y paleta de color') , caption: 'Tipografía Montserrat y paleta de azules de la marca.' },
      ] },
      { id: 'marca', label: 'Más allá del sitio', title: 'Rebranding y catálogos', blocks: [
        { type: 'text', text: 'El sitio fue parte de un trabajo mayor: rediseñé la identidad visual para medios impresos y digitales y elaboré los primeros 6 catálogos de productos de la empresa, que obtuvieron el 2% de las ventas.' },
        { type: 'image', image: l('web-best', 'Sitio de Best Brand Pacas en una pantalla inclinada'), bg: true },
      ] },
    ],
  },
  {
    slug: 'incodegsa', title: 'INCODEGSA', cats: ['ux', 'web'], year: '2025', featured: true,
    kind: 'Sitio inmobiliario con dashboard',
    tagline: 'Un sitio que le sirve al cliente que busca y al agente que publica.',
    accent: '#10131C', on: '#FFFFFF', soft: '#FBE9E7',
    cover: b('fs_webp/55a264234783823.68ca4f7473f1d.png', 1500, 1125, 'Sitio de INCODEGSA en una laptop bajo un foco de luz'), fit: 'cover',
    behance: 'https://www.behance.net/gallery/234783823/Real-State-Web-Design',
    facts: [['Rol', 'Diseño UI/UX y desarrollo'], ['Duración', '8 semanas'], ['Sector', 'Bienes raíces'], ['Herramientas', 'Figma, WordPress, Elementor Pro']],
    sections: [
      { id: 'reto', label: 'Reto', title: 'Diseñar y desarrollar desde cero', blocks: [
        { type: 'lede', text: 'INCODEGSA busca ofrecer confianza y eficiencia en la gestión de propiedades. El reto fue crear un sitio funcional y moderno que mejorara la experiencia de los clientes y facilitara la gestión de inmuebles a los agentes.' },
        { type: 'image', image: b('1400_webp/7a3e3a234783823.68cb0b62c1067.jpg', 1400, 980, 'Varias páginas del sitio de INCODEGSA en perspectiva') },
      ] },
      { id: 'proceso', label: 'Proceso', title: 'Ocho semanas, cuatro etapas', blocks: [
        { type: 'steps', items: [['Investigación', 'Referentes del sector inmobiliario y necesidades de clientes y agentes.'], ['Prototipo y diseño', 'Wireframes y UI en Figma, con navegación clara y jerarquía limpia.'], ['Desarrollo', 'Sitio en WordPress con Elementor, dashboard para agentes y carga dinámica de propiedades.'], ['Testing', 'Pruebas de usabilidad y ajustes visuales y funcionales.']] },
      ] },
      { id: 'sitio', label: 'El sitio', title: 'Del buscador a la ficha de propiedad', blocks: [
        { type: 'image', image: b('1400_webp/e5803e234783823.68ca4f74747c2.png', 1400, 853, 'Portada del sitio con buscador de propiedades'), caption: 'El buscador es lo primero: tipo de operación, propiedad, ubicación y cuartos.' },
        { type: 'grid', cols: 2, images: [
          b('1400_webp/770a2d234783823.68ca4f74755a1.png', 1400, 557, 'Sección de propiedades exclusivas'),
          b('1400_webp/56007c234783823.68ca4f7472b0b.png', 1400, 694, 'Sección de servicios'),
          b('1400_webp/b494b5234783823.68ca4f7471a83.png', 1400, 481, 'Propiedades por ciudad'),
          b('1400_webp/8271b1234783823.68ca4f7474dd0.png', 1400, 533, 'Equipo de agentes'),
        ] },
        { type: 'image', image: b('1400_webp/031ccb234783823.68cb0b62c08a6.png', 1400, 996, 'Vista general de las páginas del sitio') },
        { type: 'image', image: b('1400_webp/a04760234783823.68cb0b62c03b5.png', 1400, 1050, 'Laptop inclinada con el sitio sobre fondo oscuro') },
      ] },
    ],
  },
  {
    slug: 'biblioteca-unan', title: 'Biblioteca UNAN-Managua', cats: ['web', 'ux'], year: '2024',
    kind: 'Sitio web institucional',
    tagline: 'Más visibilidad para los servicios y la actividad académica de la biblioteca.',
    accent: '#12305A', on: '#FFFFFF', soft: '#E7ECF3',
    cover: l('web-biblioteca', 'Sitio del Sistema Bibliotecario de la UNAN-Managua en una laptop'), fit: 'contain',
    facts: [['Rol', 'Diseñador gráfico y web, webmaster'], ['Periodo', 'Abr. – Dic. 2024'], ['Institución', 'Biblioteca Central “Salomón de la Selva”']],
    sections: [
      { id: 'proyecto', label: 'Proyecto', title: 'Un sitio alineado a la identidad de la universidad', blocks: [
        { type: 'lede', text: 'Diseñé y desarrollé el sitio institucional de la biblioteca, alineado a la identidad visual de la UNAN-Managua, para dar visibilidad a sus servicios, estadísticas y actividades académicas.' },
        { type: 'stats', items: [{ n: 60, pre: '+', suf: '%', label: 'Tráfico frente al sitio anterior' }] },
        { type: 'image', image: l('web-biblioteca', 'Página de inicio del Sistema Bibliotecario'), bg: true },
      ] },
      { id: 'operacion', label: 'Operación', title: 'Más que el lanzamiento', blocks: [
        { type: 'text', text: 'Como webmaster mantuve el sitio, actualicé contenidos y mejoré la experiencia de usuario de forma continua. La nueva arquitectura hizo más eficiente la navegación y sumó un sistema de donación funcional, además de boletines informativos para la comunicación interna y externa.' },
      ] },
    ],
  },
  {
    slug: 'revistas-unan', title: 'Portal de Revistas', cats: ['web', 'ux'], year: '2024',
    kind: 'Portal académico, UNAN-Managua',
    tagline: 'Las 10 revistas académicas de la universidad en un solo lugar.',
    accent: '#E9B949', on: '#14202E', soft: '#FBF3DD',
    cover: l('web-revistas', 'Portal de Revistas Académicas de la UNAN-Managua en una laptop'), fit: 'contain',
    facts: [['Rol', 'Diseño y desarrollo web'], ['Periodo', '2024'], ['Institución', 'UNAN-Managua']],
    sections: [
      { id: 'proyecto', label: 'Proyecto', title: 'Divulgación científica centralizada', blocks: [
        { type: 'lede', text: 'Creé el portal que centraliza la publicación digital de las 10 revistas gestionadas por las bibliotecas de la universidad. Este espacio ayudó a ampliar el alcance de la divulgación científica dentro y fuera de la comunidad académica.' },
        { type: 'stats', items: [{ n: 10, suf: '', label: 'Revistas científicas reunidas en un portal' }] },
        { type: 'image', image: l('web-revistas', 'Página de inicio del Portal de Revistas'), bg: true },
      ] },
    ],
  },
  {
    slug: 'sitios-corporativos', title: 'Sitios corporativos', cats: ['web'], year: '2020 – 2023',
    kind: 'Cuatro sitios, cuatro sectores',
    tagline: 'Impresión, construcción, software y turismo, con foco en la presencia comercial.',
    accent: '#1F6F5C', on: '#FFFFFF', soft: '#E5F0ED',
    cover: l('web-tecnomessages', 'Sitio de Tecnomessages Software en un monitor y un teléfono'), fit: 'contain', coverBg: '#E5F0ED',
    facts: [['Rol', 'Diseñador UI/UX y web'], ['Sectores', 'Impresión, construcción, software, turismo'], ['Herramientas', 'WordPress, HTML, CSS, JS, PHP']],
    sections: [
      { id: 'enfoque', label: 'Enfoque', title: 'Interfaces limpias con objetivos comerciales', blocks: [
        { type: 'lede', text: 'Diseñé y desarrollé sitios para empresas nacionales e internacionales con versiones adaptadas a móvil y escritorio, navegación intuitiva y coherencia visual alineada a cada marca.' },
      ] },
      { id: 'sitios', label: 'Sitios', title: 'Selección de proyectos', blocks: [
        { type: 'image', image: l('web-arana', 'Sitio de Arana Impresiones en monitor, teléfono y otras pantallas'), bg: true, caption: 'Arana Impresiones: servicios de impresión comercial.' },
        { type: 'image', image: l('web-tecnomessages', 'Sitio de Tecnomessages Software'), bg: true, caption: 'Tecnomessages Software: envío de mensajes masivos por WhatsApp.' },
        { type: 'grid', cols: 2, bg: true, images: [l('web-kamilas-1', 'Sitio de Kamilas Tours en una laptop'), l('web-kamilas-2', 'Sitio de Kamilas Tours en teléfonos')], caption: 'Kamilas Tours: agencia de viajes y tour operadora.' },
        { type: 'image', image: l('web-union', 'Sitio de UnionConstruction en una laptop'), bg: true, caption: 'UnionConstruction: sector construcción.' },
      ] },
    ],
  },
  {
    slug: 'sport-city-club', title: 'Sport City Club', cats: ['marca'], year: '2025', featured: true,
    kind: 'Manual de marca',
    tagline: 'Una identidad para un club donde conviven deporte, recreación y bienestar.',
    accent: '#1D1B5E', on: '#FFFFFF', soft: '#F1E9FB',
    cover: b('1400_webp/3a7234232001949.6893901b219fd.jpg', 1400, 788, 'Papelería y credenciales de Sport City Club'), fit: 'cover', coverCrop: 24,
    behance: 'https://www.behance.net/gallery/232001949/Manual-de-Marca-Sport-City-Club',
    facts: [['Entregable', 'Manual de identidad visual'], ['Herramientas', 'Illustrator, Photoshop, Figma'], ['Sector', 'Deporte y bienestar']],
    sections: [
      { id: 'proposito', label: 'Propósito', title: 'Coherencia en cada punto de contacto', blocks: [
        { type: 'lede', text: 'El manual garantiza la coherencia de la marca, refleja sus valores y personalidad, refuerza su identidad y la diferencia de otras marcas del sector.' },
        { type: 'attrs', items: [['Dinámico', 'En movimiento, evolucionando junto a sus usuarios.'], ['Multidisciplinario', 'Deporte, recreación y bienestar en un solo espacio.'], ['Accesible', 'Experiencias inclusivas, abiertas a todo público.'], ['Conectado', 'Interacción y sentido de pertenencia.'], ['Moderno', 'Identidad visual y servicios pensados para el presente.']] },
        { type: 'text', text: 'Se dirige a personas activas de 8 a 50 años, familias con interés en actividades compartidas y quienes buscan equilibrio entre ejercicio, entretenimiento y comunidad.' },
      ] },
      { id: 'logo', label: 'Logo', title: 'El símbolo y su construcción', blocks: [
        { type: 'grid', cols: 2, images: [
          b('1400_webp/db0693232001949.6893901b22cff.jpg', 1400, 788, 'Logotipo de Sport City Club'),
          b('1400_webp/ea084c232001949.6893901b1eb36.jpg', 1400, 788, 'Símbolo de Sport City Club'),
        ] },
        { type: 'image', image: b('1400_webp/58327e232001949.68939a74b69ac.jpg', 1400, 788, 'Retícula de construcción y área de protección') },
      ] },
      { id: 'sistema', label: 'Sistema', title: 'Color, tipografía e ilustración', blocks: [
        { type: 'grid', cols: 2, images: [
          b('1400_webp/74d605232001949.6893901b21537.jpg', 1400, 788, 'Colores primarios de la marca'),
          b('1400_webp/bd31b6232001949.6893901b1f7c0.jpg', 1400, 788, 'Proporción de uso del color'),
          b('1400_webp/0f70bf232001949.6893901b1ff8f.jpg', 1400, 788, 'Familia tipográfica'),
          b('1400_webp/545dd8232001949.6893901b25382.jpg', 1400, 788, 'Tipografía Ubuntu'),
        ] },
        { type: 'image', image: b('1400_webp/8ae6db232001949.6893901b266a9.jpg', 1400, 788, 'Ilustraciones de personas haciendo deporte') },
      ] },
      { id: 'aplicaciones', label: 'Aplicaciones', title: 'La marca en uso', blocks: [
        { type: 'image', image: b('1400_webp/8333d9232001949.6893901b25f23.jpg', 1400, 788, 'Aplicaciones en botella y señalética') },
      ] },
    ],
  },
  {
    slug: 'bravium', title: 'Agencia Bravium', cats: ['marca'], year: '2025', featured: true,
    kind: 'Manual de marca',
    tagline: 'Ideas que trascienden: identidad para una agencia con visión latinoamericana.',
    accent: '#F2B93B', on: '#2B2170', soft: '#FBF1D8',
    cover: b('2800_webp/78e4c0236195893.68e6a7df96313.png', 2800, 1852, 'Portada del manual de marca de Bravium'), fit: 'cover',
    behance: 'https://www.behance.net/gallery/236195893/Manual-de-Marca-Agencia-Bravium',
    facts: [['Entregable', 'Naming, identidad y manual'], ['Herramientas', 'Illustrator, Photoshop'], ['Sector', 'Publicidad']],
    sections: [
      { id: 'marca', label: 'La marca', title: 'Un nombre con energía y proyección', blocks: [
        { type: 'lede', text: 'Bravium nace de “Bravi”, que evoca energía creativa y valentía, y del sufijo “-ium”, común en elementos como titanium o helium, que transmite una sensación tecnológica y moderna.' },
        { type: 'attrs', items: [['Creatividad', 'Cada reto es una oportunidad para innovar.'], ['Visión', 'Ideas con impacto a largo plazo.'], ['Confianza', 'Relaciones sólidas y transparentes.'], ['Innovación', 'Tendencias, tecnología y diseño.'], ['Colaboración', 'El trabajo en equipo como motor.']] },
        { type: 'image', image: b('1400_webp/b7077b236195893.68e6a7df7ff5b.png', 1400, 837, 'Construcción del símbolo de Bravium') },
      ] },
      { id: 'sistema', label: 'Sistema', title: 'Logo, color y patrón', blocks: [
        { type: 'grid', cols: 2, images: [
          b('1400_webp/ef718e236195893.68e6a7df80774.png', 1400, 699, 'Logotipo de Bravium'),
          b('1400_webp/11240c236195893.68e6b93863235.png', 1400, 729, 'Zona de protección del logotipo'),
          b('1400_webp/069934236195893.68e6b93861d44.png', 1400, 1207, 'Tipografía corporativa'),
          b('1400_webp/f54bf7236195893.68e6a7df7e5ab.png', 1400, 1033, 'Paleta de colores'),
        ] },
        { type: 'image', image: b('1400_webp/78dde4236195893.68e6a7df789a9.png', 1400, 1523, 'Patrón geométrico de Bravium') },
      ] },
      { id: 'aplicaciones', label: 'Aplicaciones', title: 'Papelería, merchandising y redes', blocks: [
        { type: 'grid', cols: 2, images: [
          b('1400_webp/c00639236195893.68e6abb1cbf5e.png', 1400, 920, 'Tarjetas de presentación'),
          b('1400_webp/f300d4236195893.68e6abb1ce71c.png', 1400, 1091, 'Carpetas y papelería'),
          b('1400_webp/72b184236195893.68e6abb1ca212.png', 1400, 1091, 'Credencial con cinta'),
          b('1400_webp/5634f8236195893.68e6b2cce416b.png', 1400, 1091, 'Bolsa de merchandising'),
          b('1400_webp/2266cc236195893.68e6b2cce3419.png', 1400, 1006, 'Artículos de merchandising'),
          b('1400_webp/5bcb86236195893.68e6b2cce2c13.png', 1400, 792, 'Publicaciones para redes sociales'),
        ] },
      ] },
    ],
  },
  {
    slug: 'tecnocomp', title: 'Tecnocomp Nicaragua', cats: ['marca'], year: '2025',
    kind: 'Rediseño de marca',
    tagline: 'Innovación, confiabilidad y cercanía para un socio tecnológico.',
    accent: '#E25B2B', on: '#FFFFFF', soft: '#FBE9E1',
    cover: b('fs_webp/818438230607671.68799f39c2c72.png', 1400, 953, 'Símbolo de Tecnocomp sobre fondo naranja'), fit: 'cover',
    behance: 'https://www.behance.net/gallery/230607671/Manual-de-Marca-Tecnocomp-Nicaragua',
    facts: [['Entregable', 'Rediseño y guía de marca'], ['Herramientas', 'Illustrator, Photoshop, Figma, WordPress'], ['Sector', 'Tecnología']],
    sections: [
      { id: 'objetivo', label: 'Objetivo', title: 'Reflejar a un socio estratégico', blocks: [
        { type: 'lede', text: 'Tecnocomp se especializa en soluciones digitales para negocios, emprendedores y organizaciones. El rediseño buscó alinear la identidad gráfica con los valores que la caracterizan: innovación, confiabilidad y cercanía.' },
      ] },
      { id: 'sistema', label: 'Sistema', title: 'Construcción, tipografía y color', blocks: [
        { type: 'image', image: b('max_632_webp/533f15230607671.6879a0711f567.png', 1400, 465, 'Construcción del logotipo de Tecnocomp') },
        { type: 'grid', cols: 2, images: [
          b('fs_webp/c484a6230607671.6879d28b058d4.png', 1400, 1000, 'Tipografía Montserrat'),
          b('fs_webp/f18581230607671.68799f39c37d7.png', 1400, 649, 'Paleta de color'),
        ] },
      ] },
      { id: 'aplicaciones', label: 'Aplicaciones', title: 'La marca en medios impresos y digitales', blocks: [
        { type: 'image', image: b('fs_webp/341f34230607671.6879a0711fb01.png', 1400, 908, 'Valla publicitaria de Tecnocomp') },
        { type: 'grid', cols: 2, images: [
          b('fs_webp/db5a82230607671.68799f39c51d9.png', 1400, 1371, 'Sudadera con la marca Tecnocomp'),
          b('fs_webp/15cf2e230607671.68799f39c5765.png', 1400, 1190, 'Sitio móvil de Tecnocomp en un teléfono'),
        ] },
        { type: 'image', image: b('fs_webp/ea3b09230607671.6879d28b0603e.png', 1400, 1054, 'Sitio de Tecnocomp en una tableta') },
        { type: 'image', image: b('fs_webp/8064f5230607671.68799f39c4a9b.png', 1400, 798, 'Señalética de Tecnocomp en una sala de reuniones') },
      ] },
    ],
  },
  {
    slug: 'congreso-cientifico', title: 'Congreso Científico', cats: ['marca'], year: '2023',
    kind: 'Identidad de evento, UNAN-Managua',
    tagline: 'Una identidad para el congreso, de la papelería a los materiales del asistente.',
    accent: '#B71C2E', on: '#FFFFFF', soft: '#F8E7E9',
    cover: l('congreso-1', 'Carpeta, papelería y tarjetas del Congreso Científico'), fit: 'cover',
    facts: [['Entregable', 'Logo, papelería y merchandising'], ['Institución', 'UNAN-Managua'], ['Año', '2023']],
    sections: [
      { id: 'aplicaciones', label: 'Aplicaciones', title: 'Un sistema para todo el evento', blocks: [
        { type: 'image', image: l('congreso-1', 'Carpeta institucional, tarjetas y papelería') },
        { type: 'grid', cols: 3, images: [l('congreso-2', 'Hoja membretada y tarjetas'), l('congreso-3', 'Bolsa de tela con el logotipo'), l('congreso-4', 'Credencial con cinta')] },
      ] },
    ],
  },
  {
    slug: 'logofolio', title: 'Logofolio', cats: ['marca', 'grafico'], year: '2025',
    kind: 'Colección de logotipos',
    tagline: 'Doce marcas, de hoteles y clínicas a congresos y proyectos universitarios.',
    accent: '#0A0A0A', on: '#FFFFFF', soft: '#EBEBEB',
    cover: b('fs_webp/fe9c38231532101.688acd7497cd0.png', 1400, 1200, 'Portada de la colección Logofolio'), fit: 'cover',
    behance: 'https://www.behance.net/gallery/231532101/Logofolio-Logotype-Logo-design',
    facts: [['Entregable', 'Logotipos'], ['Sectores', 'Empresa, educación, salud, turismo, deporte']],
    sections: [
      { id: 'coleccion', label: 'Colección', title: 'Selección de marcas', blocks: [
        { type: 'grid', cols: 3, images: [
          b('fs_webp/11f580231532101.688ac527cf8e5.png', 1400, 1200, 'Logotipo de Tecnocomp'),
          b('fs_webp/d6a42c231532101.688ac527cff40.png', 1400, 1200, 'Logotipo del Congreso Científico'),
          b('fs_webp/65d7ea231532101.688ac527d0de6.png', 1400, 1200, 'Logotipo de Colibrí Express'),
          b('fs_webp/0fe24a231532101.688ac527ce806.png', 1400, 1200, 'Logotipo de Best Brand Pacas'),
          b('fs_webp/41aa27231532101.688ac527d1cdb.png', 1400, 1200, 'Logotipo de ONDS'),
          b('fs_webp/448731231532101.688ac527cc09c.png', 1400, 1200, 'Logotipo de Peach Metals'),
          b('fs_webp/f686ff231532101.688ac527cf159.png', 1400, 1200, 'Logotipo de Hotel Walkiria'),
          b('fs_webp/be0ec7231532101.688ac527d086a.png', 1400, 1200, 'Logotipo del Foro de Robótica Educativa'),
          b('fs_webp/cfd83d231532101.688ac527cc942.png', 1400, 1200, 'Logotipo de Sport City Club'),
          b('fs_webp/24d031231532101.688ac527d1580.png', 1400, 1200, 'Logotipo de Diseño Gráfico y Multimedia'),
          b('fs_webp/a6f20d231532101.688ac527cdc89.png', 1400, 1200, 'Logotipo de CNIA'),
          b('fs_webp/fce7f0231532101.688ac527d2495.png', 1400, 1200, 'Logotipo de Opto Médico'),
        ] },
      ] },
    ],
  },
  {
    slug: 'ibw-nicaragua', title: 'IBW Nicaragua', cats: ['grafico'], year: '2025 – 2026',
    kind: 'Campañas digitales e impresas',
    tagline: 'Publicidad para internet residencial y empresarial, en pantalla y en papel.',
    accent: '#0C2A6E', on: '#FFFFFF', soft: '#E4E9F4',
    cover: l('ibw-3', 'Piezas publicitarias de IBW Nicaragua'), fit: 'contain',
    facts: [['Rol', 'Diseñador gráfico'], ['Periodo', 'Sep. 2025 – Jun. 2026'], ['Modalidad', 'Remoto']],
    sections: [
      { id: 'campanas', label: 'Campañas', title: 'Del concepto a la entrega para pauta', blocks: [
        { type: 'lede', text: 'Desarrollé campañas digitales completas, desde el concepto y el layout hasta la adaptación multiformato, y preparé el material impreso del equipo de ventas.' },
        { type: 'stats', items: [{ n: 4, pre: '+', suf: '%', label: 'En ventas, con publicidad y materiales gráficos' }] },
        { type: 'grid', cols: 2, bg: true, images: [l('ibw-1', 'Publicaciones para redes sociales'), l('ibw-2', 'Piezas para internet empresarial'), l('ibw-3', 'Tarjetas publicitarias'), l('ibw-4', 'Campañas para internet hogar')] },
      ] },
      { id: 'impreso', label: 'Impreso', title: 'Material para el equipo de ventas', blocks: [
        { type: 'grid', cols: 2, bg: true, images: [l('ibw-5', 'Volante de internet hogar por ambas caras'), l('ibw-6', 'Volantes de la campaña de fútbol')] },
      ] },
    ],
  },
  {
    slug: 'social-media', title: 'Social Media', cats: ['grafico'], year: '2025',
    kind: 'Contenido para redes sociales',
    tagline: 'Publicaciones, historias y anuncios con una idea clara en cada pieza.',
    accent: '#00077A', on: '#FFFFFF', soft: '#E4E5F5',
    cover: b('fs_webp/4ac0fb232490677.689d51af5ae7a.png', 1400, 1035, 'Portada Feeds Design con una persona diseñando en su escritorio'), fit: 'cover',
    behance: 'https://www.behance.net/gallery/232490677/Social-Media-Design-Brand-Post',
    facts: [['Marcas', 'Best Brand Pacas, Tecnocomp, Tecnomessages'], ['Herramientas', 'Photoshop, Illustrator, Figma']],
    sections: [
      { id: 'best', label: 'Best Brand Pacas', title: 'Promociones que se entienden al instante', blocks: [
        { type: 'text', text: 'Publicaciones, historias, portadas y anuncios para potenciar la presencia en redes de Best Brand Pacas.' },
        { type: 'image', image: b('fs_webp/23f7e6232490677.689d51af5d037.png', 1400, 1200, 'Publicaciones de Best Brand Pacas junto a un teléfono con Instagram') },
        { type: 'grid', cols: 3, images: ['best-post-1', 'best-post-2', 'best-post-4', 'best-post-5', 'best-post-7', 'best-post-8'].map((n) => l(n, 'Publicación de Best Brand Pacas')) },
      ] },
      { id: 'tecnologia', label: 'Tecnología', title: 'Servicios técnicos en mensajes simples', blocks: [
        { type: 'grid', cols: 3, images: ['tecno-post-1', 'tecno-post-2', 'tecno-post-3', 'msg-post-1', 'msg-post-2', 'msg-post-5'].map((n) => l(n, 'Publicación de Tecnocomp o Tecnomessages')) },
      ] },
    ],
  },
  {
    slug: 'editorial', title: 'Editorial', cats: ['grafico'], year: '2024 – 2025',
    kind: 'Informes, boletines y catálogos',
    tagline: 'Publicaciones institucionales y comerciales más claras y más rápidas de producir.',
    accent: '#0E7CC9', on: '#FFFFFF', soft: '#E2F0F9',
    cover: l('catalogo-1', 'Catálogo de Best Brand Pacas abierto'), fit: 'contain',
    facts: [['Piezas', 'Boletín Biblioteca Informa, catálogos comerciales'], ['Herramientas', 'InDesign, Illustrator, Photoshop']],
    sections: [
      { id: 'catalogo', label: 'Catálogo', title: 'Catálogo de productos', blocks: [
        { type: 'lede', text: 'Publicaciones que combinan calidad visual con procesos de maquetación optimizados, reduciendo los tiempos de entrega hasta en un 40%.' },
        { type: 'stats', items: [{ n: 40, pre: '−', suf: '%', label: 'Reducción máxima en tiempos de entrega' }, { n: 6, suf: '', label: 'Primeros catálogos de Best Brand Pacas' }] },
        { type: 'image', image: l('catalogo-1', 'Doble página del catálogo'), bg: true },
      ] },
      { id: 'informe', label: 'Informe', title: 'Boletín Biblioteca Informa', blocks: [
        { type: 'text', text: 'Diseño y diagramación del boletín de la Biblioteca Central de la UNAN-Managua, para fortalecer su comunicación interna y externa.' },
        { type: 'grid', cols: 2, bg: true, images: [l('informe-1', 'Portada del boletín 2024'), l('informe-2', 'Páginas interiores del boletín')] },
      ] },
    ],
  },
];

module.exports = { site, projects, CATS };
