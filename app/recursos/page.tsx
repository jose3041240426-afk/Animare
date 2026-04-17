"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const resources = [
  {
    title: "Componentes UI",
    description: "Una colección de componentes React listos para usar con animaciones integradas.",
    tag: "Premium",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: "Iconos Animados",
    description: "Iconos SVG minimalistas con micro-interacciones que cobran vida al tocarlos.",
    tag: "Gratis",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Paletas de Color",
    description: "Curadas específicamente para interfaces oscuras y modernas de alto contraste.",
    tag: "Pro",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Efectos de Cursor",
    description: "Interacciones de ratón fluidas para mejorar la experiencia de usuario.",
    tag: "Nuevo",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
      </svg>
    ),
  },
];

export default function RecursosPage() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Header igual al de la página principal */}
      <header className="absolute top-0 left-0 w-full p-6 md:p-8 z-50 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold tracking-[0.3em] text-white hover:opacity-50 transition-opacity">
            ANIMARE
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-12 text-sm uppercase tracking-[0.2em] font-light text-white/70 flex-grow justify-center -ml-16">
          <Link href="/" className="relative group hover:text-white transition-colors duration-500">
            inicio
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
          </Link>
          <Link href="/recursos" className="relative group hover:text-white transition-colors duration-500">
            recursos
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
          </Link>
          <button className="relative group hover:text-white transition-colors duration-500">
            plantillas
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
          </button>
        </nav>

        {/* Burger Button */}
        <div className="lg:hidden">
          <label className="burger" htmlFor="burger">
            <input
              type="checkbox"
              id="burger"
              checked={menuOpen}
              onChange={() => setMenuOpen(!menuOpen)}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col gap-8 text-center">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white hover:text-gray-400 transition-colors">
            inicio
          </Link>
          <Link href="/recursos" onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white hover:text-gray-400 transition-colors">
            recursos
          </Link>
          <button onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white hover:text-gray-400 transition-colors">
            plantillas
          </button>
        </nav>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 animate-fade-in">
            Recursos <br />
            <span className="font-semibold italic text-white/90">Creativos</span>
          </h1>
          <p className="text-white/40 text-xl font-light leading-relaxed max-w-2xl animate-fade-in [--animation-delay:200ms]">
            Herramientas y activos diseñados para elevar la calidad visual de tus proyectos digitales.
          </p>
        </div>

        {/* Texto arriba de los contenedores */}
        <div className="text-center my-12">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 animate-pulse">
            🖱️ Mueve tu mouse sobre el recurso y observa lo que ocurre — haz clic en "Ver recurso" para ver su código
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Recurso 1: Botón Elegante */}
          <Link
            href="/recursos/boton-elegante"
            className="aspect-square bg-white/[0.02] border border-white/10 rounded-3xl relative overflow-hidden group hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 flex items-center justify-center cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col items-center gap-6 z-10">
              <button
                className="px-8 py-3 bg-white text-black rounded-full font-medium text-sm uppercase tracking-widest transition-all duration-300 hover:scale-110 active:scale-90 active:rotate-3 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-default"
              >
                boton
              </button>
              <span className="text-xs uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">Ver recurso</span>
            </div>
          </Link>

          {/* Recurso 2: Botón Neón */}
          <Link
            href="/recursos/boton-neon"
            className="aspect-square bg-white/[0.02] border border-white/10 rounded-3xl relative overflow-hidden group hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 flex items-center justify-center cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#a855f715] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col items-center gap-6 z-10">
              <div className="px-8 py-3 border-2 border-[#a855f7] rounded-lg text-[#a855f7] font-medium text-sm uppercase tracking-widest">
                Neón
              </div>
              <span className="text-xs uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">Ver recurso</span>
            </div>
          </Link>

          {/* Recurso 3: Botón Glass */}
          <Link
            href="/recursos/boton-glass"
            className="aspect-square bg-white/[0.02] border border-white/10 rounded-3xl relative overflow-hidden group hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 flex items-center justify-center cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col items-center gap-6 z-10">
              <div className="flex items-center gap-2 px-8 py-3 bg-red-600/40 backdrop-blur-md border border-white/20 rounded-2xl text-black font-medium text-sm uppercase tracking-widest">
                Glass
              </div>
              <span className="text-xs uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">Ver recurso</span>
            </div>
          </Link>

          {/* Recurso 4: Botón Slide */}
          <Link
            href="/recursos/boton-slide"
            className="aspect-square bg-white/[0.02] border border-white/10 rounded-3xl relative overflow-hidden group hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 flex items-center justify-center cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f615] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col items-center gap-6 z-10">
              <div className="px-8 py-3 bg-[#18181b] border border-white/10 rounded-full text-white font-medium text-sm uppercase tracking-widest">
                Explorar
              </div>
              <span className="text-xs uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">Ver recurso</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer Decoration */}
      <footer className="py-24 border-t border-white/5 flex items-center justify-center opacity-20">
        <span className="text-[10vw] font-bold tracking-tighter select-none">ANIMARE.RECURSOS</span>
      </footer>
    </main>
  );
}