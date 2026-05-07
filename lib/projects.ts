export const projects = [
  {
    id: "sinergy",
    title: "Sinergy",
    subtitle: "Arquitectura Inmersiva 3D",
    tag: "Canvas Engine / UX",
    description: "Sinergy es una plataforma web vanguardista diseñada para un estudio de arquitectura. El sitio se centra en una experiencia de usuario inmersiva basada en el movimiento del usuario (scroll), utilizando técnicas de renderizado de alto rendimiento para simular una navegación tridimensional a través de un edificio.",
    summary: "Experiencia inmersiva que simula un recorrido 3D mediante scroll, optimizada con Spritesheets y Canvas API.",
    tech: {
      backend: ["Lógica de Estados", "Optimización de Memoria", "CI/CD Netlify"],
      backendImages: [
        { name: "JavaScript", url: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" },
        { name: "Netlify", url: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" }
      ],
      frontend: ["HTML5 Semántico", "CSS3 Vanilla", "Canvas API", "Lucide Icons"],
      frontendImages: [
        { name: "HTML5", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/960px-HTML5_logo_and_wordmark.svg.png" },
        { name: "CSS3", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1920px-CSS3_logo_and_wordmark.svg.png" },
        { name: "Lucide", url: "https://lucide.dev/logo.svg" }
      ],
      external: ["Spritesheets", "requestAnimationFrame"],
      externalImages: [],
      security: ["Carga Diferida", "Preloader de Assets", "Performance Audit"]
    },
    screens: [
      {
        name: "1. Preloader Inteligente",
        video: null,
        features: ["Bloqueo de scroll hasta carga total", "Contador de spritesheets", "Transición suave de revelación"]
      },
      {
        name: "2. Motor de Animación Canvas",
        video: null,
        features: ["Renderizado de 168 frames", "Sincronización con requestAnimationFrame", "Cálculo dinámico de posición de scroll"]
      },
      {
        name: "3. Diseño Editorial & Glassmorphism",
        video: null,
        features: ["Tipografía Inter de alto impacto", "Efectos de refracción en navegación", "Layout responsivo adaptativo"]
      }
    ],
    technicalHighlights: [
      { key: "Canvas Engine", val: "Renderizado eficiente de spritesheets para evitar latencia de video." },
      { key: "Optimización HTTP", val: "Reducción de peticiones mediante agrupación de frames en hojas maestras." },
      { key: "UX Inmersiva", val: "Navegación intuitiva vinculada directamente al scroll del usuario." }
    ],
    presentation: "Sinergy representa la frontera entre el desarrollo web y la arquitectura digital. Implementamos un motor de Canvas personalizado que transforma el scroll tradicional en una experiencia cinematográfica tridimensional, optimizando cada frame para un rendimiento fluido incluso en dispositivos móviles.",
    link: "https://sinergy-animare.netlify.app/",
    images: [
      "https://res.cloudinary.com/dkrqtc2vo/image/upload/v1778119480/inicio_mnyeay.png",
      "https://res.cloudinary.com/dkrqtc2vo/image/upload/v1778119479/descripcion_i0cesv.png",
      "https://res.cloudinary.com/dkrqtc2vo/image/upload/v1778119480/galeria_kkmvf3.png"
    ]
  },
  {
    id: "section80",
    title: "Section.80",
    subtitle: "E-commerce de Streetwear",
    tag: "Full Stack Web App",
    description: "Section.80 es una plataforma de comercio electrónico completa y funcional, diseñada para la venta de ropa urbana, calzado y accesorios streetwear. El nombre es un homenaje al álbum homónimo de Kendrick Lamar, reflejendo la fusión entre la cultura del hip-hop, los sneakers y la moda callejera.",
    summary: "El proyecto simula una tienda online real con todas las funcionalidades de un e-commerce moderno: catálogo de productos, carrito de compras, sistema de autenticación seguro, panel de administración, y más.",
    tech: {
      backend: ["Node.js", "Express", "JWT con cookies httpOnly", "MySQL"],
      backendImages: [
        { name: "Node.js", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { name: "Express js", url: "https://user-images.githubusercontent.com/11978772/40430986-a0eb7b92-5e63-11e8-80eb-43fe07f664a6.png" },
        { name: "MySQL", url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCi2Eu20hfSD8N5RY-LwECWFt5gNaYvdoXBfm9-KE7Q4lXn_2ikdQoHMAKhquaSVh5m9WIZuPLMhLtxGyOThAy1RjZ16BifHPeyf4X7inohsIi6FOUzZsQoVVkjArANlmEyTNOxyPEi7M/s1600/255b77e251b19a6d0600634d2ff9b006.png" }
      ],
      frontend: ["HTML5", "CSS3", "JavaScript vanilla", "GSAP para animaciones"],
      frontendImages: [
        { name: "HTML5", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/960px-HTML5_logo_and_wordmark.svg.png" },
        { name: "CSS3", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1920px-CSS3_logo_and_wordmark.svg.png" },
        { name: "JavaScript", url: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" }
      ],
      external: ["Cloudinary", "Leaflet", "LocationIQ"],
      externalImages: [
        { name: "Cloudinary", url: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/cloudinary-icon-ug0qqy8ms6ozyzy6cntbll.png/cloudinary-icon-hz05evx1htrghud89kpab4.png?_a=DATAiZAAZAA0" },
        { name: "Leaflet", url: "https://iconlogovector.com/uploads/images/2024/11/lg-6728a31f548b4-Leaflet.webp" },
        { name: "LocationIQ", url: "https://make-cxp-documentation.ams3.digitaloceanspaces.com/apps-center-icons/locationiq-community.png" }
      ],
      security: ["Rate limiting", "refresh tokens rotativos", "subidas firmadas a Cloudinary"]
    },
    screens: [
      {
        name: "1. Pantalla de Login / Registro",
        video: "https://res.cloudinary.com/dkrqtc2vo/video/upload/v1778119284/Login_dkuf5n.mp4",
        features: ["Interfaz con efecto slider (overlay)", "Fondo animado con estrellas", "Encriptación con bcrypt", "Entrada como invitado"]
      },
      {
        name: "2. Pantalla de Inicio",
        video: "https://res.cloudinary.com/dkrqtc2vo/video/upload/v1778119289/Home_mbmepb.mp4",
        features: [
          "Hero slider con Swiper.js",
          "Efecto parallax con GSAP",
          "Modelo 3D de gorra",
          "Modo oscuro/claro persistente",
          "Navbar inteligente y dinámico"
        ]
      },
      {
        name: "3. Catálogo de Productos",
        video: "https://res.cloudinary.com/dkrqtc2vo/video/upload/v1778119284/Catalogo_ohhjue.mp4",
        features: [
          "Grid responsivo glassmorphism",
          "Filtros avanzados y paginación animada",
          "Vista de detalle con efecto zoom y modal",
          "Sistema de reseñas y calificación por estrellas",
          "Notificaciones Toast modernas"
        ]
      },
      {
        name: "4. Carrito de Compras",
        video: "https://res.cloudinary.com/dkrqtc2vo/video/upload/v1778119284/Carrito_a9bikr.mp4",
        features: ["Modelo 3D de carrito", "Checkout con Leaflet", "Buscador LocationIQ", "Billetera virtual"]
      },
      {
        name: "5. Perfil de Usuario",
        video: "https://res.cloudinary.com/dkrqtc2vo/video/upload/v1778119286/Profile_sjaclq.mp4",
        features: ["Dashboard con fotos", "Historial expansible", "Efecto wallet interactivo"]
      },
      {
        name: "6. Panel de Administración",
        video: "https://res.cloudinary.com/dkrqtc2vo/video/upload/v1778119285/Administrar_nk0b8n.mp4",
        features: ["Protección de rol real-time", "Gestión de stock/pedidos", "Subida Cloudinary"]
      }
    ],
    technicalHighlights: [
      { key: "Autenticación segura", val: "JWT con refresh tokens en cookies httpOnly." },
      { key: "Monitor de roles", val: "Verificación constante para actualización de UI dinámica." },
      { key: "Gestión de Mapas", val: "Integración Leaflet + LocationIQ para envíos precisos." }
    ],
    presentation: "Section.80 es mi proyecto personal de e-commerce de streetwear. Cuenta con autenticación segura mediante JWT con refresh tokens en cookies httpOnly, panel de administración en tiempo real, sistema de reseñas, carrito de compras interactivo, integración con mapas para selección de envío, y subida de imágenes a Cloudinary con firmas seguras."
  },
  {
    id: "ryu-sushi-pos",
    title: "Ryu Sushi",
    subtitle: "Ecosistema de Gestión Restaurantera",
    tag: "POS + Admin BI",
    description: "Un ecosistema dual: un POS de alto rendimiento para la operación diaria y una app administrativa para el análisis ejecutivo del negocio.",
    summary: "Sistema integral que une operación táctica y analítica ejecutiva para el control total del restaurante.",
    apps: {
      pos: {
        name: "Ryu Sushi POS",
        subtitle: "Terminal de Punto de Venta",
        description: "Plataforma robusta para centralizar ventas, gastos, impresión de tickets y gestión de órdenes en tiempo real.",
        tech: {
          backend: ["Supabase (PostgreSQL)", "Sincronización Cloud", "Gestión de Egresos", "IA de Asistencia"],
          backendImages: [
            { name: "Supabase", url: "https://swimlane.com/wp-content/uploads/2022/07/supabase-logo-icon.png" },
            { name: "PostgreSQL", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" }
          ],
          frontend: ["React Native (Expo)", "Interfaz Táctil Bento-style", "Navegación Intuitiva", "Multiplataforma"],
          frontendImages: [
            { name: "React Native", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "Expo", url: "https://static.expo.dev/static/brand/logo-512x512.png" }
          ],
          external: ["Impresión Térmica BT", "Generador de Tickets PDF", "Reportes de Venta"],
          externalImages: [],
          security: ["Persistencia de Datos", "Sincronización Real-time", "Control de Cierres"]
        },
        screens: [
          {
            name: "1. Toma de Órdenes",
            video: null,
            features: ["Interfaz táctil de alta velocidad", "Categorías con iconografía personalizada", "Soporte multi-dispositivo", "Asistencia por voz opcional"]
          },
          {
            name: "2. Control de Caja",
            video: null,
            features: ["Cierres de día automatizados", "Registro de egresos y gastos", "Balance de ingresos neto", "Tickets profesionales al instante"]
          },
          {
            name: "3. Historial de Ventas",
            video: null,
            features: ["Consulta de ventas históricas", "Sincronización en la nube", "Reportes detallados en PDF", "Respaldo constante"]
          }
        ],
        technicalHighlights: [
          { key: "Gestión Centralizada", val: "Control total desde inventario hasta cierre de caja en una sola plataforma." },
          { key: "Sincronización Total", val: "Cada movimiento se refleja al instante en todos los dispositivos conectados." },
          { key: "Estabilidad Operativa", val: "Diseñado para funcionar sin interrupciones durante turnos completos." }
        ]
      },
      admin: {
        name: "Ryu Admin",
        subtitle: "Dashboard de Análisis Ejecutivo",
        description: "Cerebro analítico del ecosistema. Transforma datos transaccionales en insights estratégicos para la toma de decisiones.",
        tech: {
          backend: ["Supabase (PostgreSQL)", "DeepSeek AI (Analista)", "Business Logic Helpers"],
          backendImages: [
            { name: "Supabase", url: "https://swimlane.com/wp-content/uploads/2022/07/supabase-logo-icon.png" },
            { name: "PostgreSQL", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" }
          ],
          frontend: ["React Native (Expo)", "React Native Chart Kit", "Custom Modern Tab Bar", "Bento-style UI"],
          frontendImages: [
            { name: "React Native", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "Expo", url: "https://static.expo.dev/static/brand/logo-512x512.png" }
          ],
          external: ["Analítica Financiera IA", "Gestión de Impresión BT", "Reportes en Tiempo Real"],
          externalImages: [],
          security: ["Auth Supabase", "Segregación de Roles", "Cifrado de Datos"]
        },
        screens: [
          {
            name: "1. Dashboard Ejecutivo",
            video: null,
            features: ["Ventas totales y ticket promedio", "Gráfica de tendencia de 7 días", "Productos estrella (Pie Chart)", "Horas pico (Bar Chart)"]
          },
          {
            name: "2. Filtrado Inteligente",
            video: null,
            features: ["Segmentación Hoy / 7D / 30D / Todo", "Comparativa de métodos de pago", "Actualización instantánea de KPIs"]
          },
          {
            name: "3. Historial Avanzado",
            video: null,
            features: ["Agrupación cronológica de pedidos", "Detalle de items y notas", "Filtro rápido por fecha con scroll horizontal"]
          },
          {
            name: "4. Gestión de Impresión",
            video: null,
            features: ["Conectividad Bluetooth", "Generación de tickets administrativos", "Búsqueda de hardware térmico"]
          }
        ],
        technicalHighlights: [
          { key: "Data Transformation", val: "chartHelpers procesa datos crudos de Supabase en visualizaciones legibles." },
          { key: "IA Predictive", val: "Integración planeada con DeepSeek para recomendaciones de inventario." },
          { key: "UX Premium", val: "Interfaz oscura con diseño basado en capas y profundidad visual." }
        ]
      }
    },
    presentation: "Hemos construido más que un simple POS; hemos creado el cerebro operativo de Ryu Sushi. Al unificar la toma de órdenes con un potente dashboard administrativo, permitimos que el negocio escale con claridad financiera y tecnología móvil avanzada."
  }
];
