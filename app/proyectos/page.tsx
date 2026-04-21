"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProyectosPage() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null); // Fixed type for build

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const projects = [
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
          video: "/Login.mp4",
          features: ["Interfaz con efecto slider (overlay)", "Fondo animado con estrellas", "Encriptación con bcrypt", "Entrada como invitado"] 
        },
        { 
          name: "2. Pantalla de Inicio", 
          video: "/Home.mp4",
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
          video: "/Catalogo.mp4",
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
          video: "/Carrito.mp4",
          features: ["Modelo 3D de carrito", "Checkout con Leaflet", "Buscador LocationIQ", "Billetera virtual"] 
        },
        { 
          name: "5. Perfil de Usuario", 
          video: "/Profile.mp4",
          features: ["Dashboard con fotos", "Historial expansible", "Efecto wallet interactivo"] 
        },
        { 
          name: "6. Panel de Administración", 
          video: "/Administrar.mp4",
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
    /* {
      id: "expansiontech",
      title: "ExpansionTech",
      subtitle: "App Móvil de Tecnología",
      tag: "Native Mobile App",
      description: "ExpansionTech es una aplicación de comercio electrónico nativa para iOS y Android, enfocada en la venta de productos tecnológicos de vanguardia. Diseñada con una arquitectura móvil moderna, ofrece una experiencia de compra fluida y optimizada para dispositivos táctiles.",
      summary: "Aplicación móvil multiplataforma con integración completa de Supabase, gestión de carrito local, sistema de reseñas y checkout animado con tarjeta de crédito virtual.",
      tech: {
        backend: ["Supabase (PostgreSQL)", "Supabase Auth", "Supabase Storage"],
        backendImages: [
          { name: "Supabase", url: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Supabase_logo.svg" },
          { name: "PostgreSQL", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_classic.svg" },
          { name: "Storage", url: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4" }
        ],
        frontend: ["React Native 0.81.5", "Expo 54", "Animated API", "React Navigation 7"],
        frontendImages: [
          { name: "React Native", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
          { name: "Expo", url: "https://www.svgrepo.com/show/353724/expo-icon.svg" },
          { name: "React Navigation", url: "https://reactnavigation.org/img/spiro.svg" }
        ],
        external: ["AsyncStorage", "Expo Image Picker", "CryptoJS"],
        externalImages: [
          { name: "Expo", url: "https://www.svgrepo.com/show/353724/expo-icon.svg" },
          { name: "CryptoJS", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Yw9N1-C7h8eE-YREcKx0s0Vf-Y6Y0S9Yfg&s" },
          { name: "Async", url: "https://avatars.githubusercontent.com/u/31754024?s=200&v=4" }
        ],
        security: ["AES Encryption (CryptoJS)", "Supabase RLS", "Auth Persistance"]
      },
      screens: [
        { name: "Autenticación", features: ["Login/Registro con Supabase", "Fondo oscuro estilizado", "Manejo de errores con Alert"] },
        { name: "Pantalla de Inicio", features: ["Búsqueda con autocompletado", "Banner animado", "Chips de categorías dinámicos"] },
        { name: "Lista de Productos", features: ["Grid de 2 columnas optimizado", "Paginación virtual (FlatList)", "Sincronización de favoritos"] },
        { name: "Detalle de Producto", features: ["Sistema de pestañas (Tabs)", "Reseñas con estrellas (1-5)", "Preguntas y respuestas admin"] },
        { name: "Carrito y Checkout", features: ["Agrupación de productos", "Tarjeta de crédito FlipCard", "Swipe to Pay (Deslizador)"] },
        { name: "Perfil de Usuario", features: ["Gestión de avatar (Storage)", "Historial de pedidos real-time", "Sincronización automática"] },
        { name: "Favoritos y Ajustes", features: ["Grid de favoritos", "Modo Oscuro/Claro persistente", "Gestión de datos sensibles"] },
        { name: "Dirección y Envío", features: ["Formulario validado", "Placeholder de mapa", "Integración con user_addresses"] }
      ],
      technicalHighlights: [
        { key: "Supabase Stack", val: "Uso integral de Auth, Database y Storage para una arquitectura Serverless." },
        { key: "UX Móvil", val: "Checkout animado 'Swipe to Pay' y tarjeta FlipCard interactiva." },
        { key: "Persistencia", val: "Gestión híbrida de datos entre Supabase y AsyncStorage para modo offline." }
      ],
      presentation: "ExpansionTech es mi aplicación móvil nativa de e-commerce. Utiliza React Native con Expo y Supabase para el backend. Destaca por su sistema de checkout animado, persistencia de datos local y una interfaz moderna con soporte para modo oscuro, demostrando un dominio completo del ecosistema móvil actual."
    } */
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-6 md:p-8 z-50 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold tracking-[0.3em] text-white hover:opacity-50 transition-opacity">
            ANIMARE
          </Link>
        </div>

        <nav className="hidden lg:flex gap-12 text-sm uppercase tracking-[0.2em] font-light text-white/70 flex-grow justify-center -ml-16">
          <Link href="/" className="relative group hover:text-white transition-colors duration-500">
            inicio
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
          </Link>
          <Link href="/recursos" className="relative group hover:text-white transition-colors duration-500">
            recursos
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
          </Link>
          <Link href="/proyectos" className="relative group text-white transition-colors duration-500">
            proyectos
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transition-all duration-500" />
          </Link>
        </nav>

        <div className="lg:hidden">
          <label className="burger" htmlFor="burger">
            <input type="checkbox" id="burger" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
            <span></span><span></span><span></span>
          </label>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col gap-8 text-center">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white transition-colors">inicio</Link>
          <Link href="/recursos" onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white transition-colors">recursos</Link>
          <Link href="/proyectos" onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white transition-colors">proyectos</Link>
        </nav>
      </div>

      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mb-20">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            Nuestros <br />
            <span className="font-semibold italic text-white/90">Proyectos</span>
          </h1>
          <p className="text-white/40 text-xl font-light leading-relaxed max-w-2xl">
            Explora nuestras creaciones destacadas, desde plataformas de e-commerce hasta experiencias interactivas de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((proj: any) => (
            <div 
              key={proj.id}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 md:p-12 transition-all duration-700 hover:bg-white/[0.04] hover:border-white/20 cursor-pointer flex flex-col justify-between h-full"
              onClick={() => setSelectedProject(proj)}
            >
              <div className="mb-12">
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/60">
                    {proj.tag}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-45">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-4xl font-bold tracking-tight mb-2 group-hover:text-white transition-colors">
                  {proj.title}
                </h2>
                <p className="text-lg text-white/50 font-light italic">
                  {proj.subtitle}
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-white/40 leading-relaxed text-sm">
                  {proj.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.backend.slice(0, 2).concat(proj.tech.frontend.slice(0, 1)).map((t: string, idx: number) => (
                    <span key={idx} className="text-[10px] uppercase tracking-widest text-white/30 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02]">
                      {t.split(' ')[0]}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/[0.02] rounded-full blur-[80px] pointer-events-none group-hover:bg-white/[0.05] transition-colors duration-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-all duration-700 ${selectedProject ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/90 backdrop-blur-3xl" onClick={() => setSelectedProject(null)} />
        
        <div className={`relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-8 md:p-16 transition-all duration-700 custom-scrollbar ${selectedProject ? 'scale-100 translate-y-0' : 'scale-95 translate-y-12'}`}>
          <button className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 z-10" onClick={() => setSelectedProject(null)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {selectedProject && (
            <div className="space-y-16 animate-fade-in">
              <div className="max-w-3xl">
                <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-white/60 mb-6">Detalles del Proyecto</span>
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">{selectedProject.title}</h2>
                <p className="text-2xl text-white/40 leading-relaxed font-light italic">{selectedProject.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Tech Cards */}
                {[
                  { label: "Backend", data: selectedProject.tech.backend, imgs: selectedProject.tech.backendImages },
                  { label: "Frontend", data: selectedProject.tech.frontend, imgs: selectedProject.tech.frontendImages },
                  { label: "Servicios", data: selectedProject.tech.external, imgs: selectedProject.tech.externalImages },
                  { label: "Seguridad", data: selectedProject.tech.security, imgs: null }
                ].map((col: any, idx: number) => (
                  <div key={idx} className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col justify-between min-h-[300px]">
                    <div>
                      <h4 className="text-white/30 uppercase tracking-widest text-[10px] mb-4">{col.label}</h4>
                      <ul className="space-y-2 text-sm">
                        {col.data?.map((t: string, i: number) => <li key={i} className="text-white/80">{t}</li>)}
                      </ul>
                    </div>
                    {col.imgs && (
                      <div className="mt-8 pt-6 border-t border-white/5 flex justify-center gap-6 items-center">
                        {col.imgs.map((img: any, i: number) => (
                          <div key={i} className="group/img relative">
                            <img src={img.url} alt={img.name} className="h-8 md:h-10 w-auto object-contain grayscale opacity-40 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-300" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-12 flex items-center gap-4"><span className="w-12 h-[1px] bg-white/20" />Listado de Pantallas y Funcionalidades</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {selectedProject.screens?.map((screen: any, idx: number) => (
                    <div key={idx} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                      <h4 className="text-xl font-bold mb-6 text-white/70">{screen.name}</h4>
                      {screen.video && (
                        <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video">
                          <video 
                            src={screen.video} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <ul className="space-y-3">
                        {screen.features?.map((feat: string, fIdx: number) => (
                          <li key={fIdx} className="flex items-start gap-3 text-white/40 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />{feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-12 border-t border-white/5">
                <h3 className="text-2xl font-semibold mb-10">Características Técnicas Destacadas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedProject.technicalHighlights?.map((highlight: any, idx: number) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h5 className="font-bold text-white mb-2">{highlight.key}</h5>
                      <p className="text-white/40 text-sm leading-relaxed">{highlight.val}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-10 md:p-16 rounded-[3rem] border border-white/10 text-center">
                <h3 className="text-3xl font-bold mb-6">¿Cómo presentarlo?</h3>
                <p className="text-xl text-white/60 font-light italic leading-relaxed max-w-4xl mx-auto">"{selectedProject.presentation}"</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
      `}</style>
    </main>
  );
}
