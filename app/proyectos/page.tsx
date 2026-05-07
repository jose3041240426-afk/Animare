"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProyectosPage() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const rafRef = useRef<number>(0);

  const handleSpotlight = useCallback((e: React.MouseEvent<HTMLElement>) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.spotlight-card');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--x", String(e.clientX - rect.left));
      card.style.setProperty("--y", String(e.clientY - rect.top));
    });
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-white selection:text-black font-sans">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-6 md:p-8 z-50 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold tracking-[0.3em] text-white hover:opacity-50 transition-opacity">
            <span className="text-red-500">A</span>NIMARE
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
          <Link href="/contacto" className="relative group hover:text-white transition-colors duration-500">
            contacto
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
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
          <Link href="/contacto" onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white transition-colors">contacto</Link>
        </nav>
      </div>

      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mb-20">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 animate-slide-up">
            Nuestros <br />
            <span className="font-semibold italic text-red-500">Proyectos</span>
          </h1>
          <p className="text-white/40 text-xl font-light leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: '200ms' }}>
            Explora nuestras creaciones destacadas, desde plataformas de e-commerce hasta experiencias interactivas de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj: any, index: number) => (
            <Link
              href={`/proyectos/${proj.id}`}
              key={proj.id}
              className="group spotlight-card animate-slide-up relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[#090909] flex items-center justify-center text-center p-8 transition-all duration-500 hover:border-red-600/30"
              style={{ animationDelay: `${400 + index * 100}ms` }}
              onMouseMove={handleSpotlight}
            >
              <div className="spotlight-content h-full w-full flex flex-col items-center justify-center pointer-events-none">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-700 ease-out uppercase">
                  {proj.title}
                </h2>
                <div className="mt-4 w-0 h-[2px] bg-red-600 transition-all duration-700 group-hover:w-12" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
