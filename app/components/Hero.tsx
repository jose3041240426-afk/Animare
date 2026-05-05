"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import StarButton from "./StarButton";
import TechBackground from "./TechBackground"; 

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-transparent overflow-hidden">
      <TechBackground className="absolute" />
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 w-full p-6 md:p-8 z-50 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold tracking-[0.3em] text-white">
            <span className="text-red-500">A</span>NIMARE
          </span>
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
          <Link href="/proyectos" className="relative group hover:text-white transition-colors duration-500">
            proyectos
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
          </Link>
          <Link href="/contacto" className="relative group hover:text-white transition-colors duration-500">
            contacto
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
          </Link>
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

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl space-y-12">
          {/* Main Title with Staggered Animation */}
          <div className="space-y-6">
            
            <h1 className="text-[12vw] lg:text-[10vw] font-bold leading-[0.8] tracking-tighter text-white animate-slide-up">
              DAMOS <br />
              <span className="font-light italic text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">VIDA</span>
            </h1>
            
            <p className="text-white/40 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
              Creamos <span className="text-white">experiencias</span> digitales de <span className="text-white">alto impacto</span> mediante <span className="text-white">software</span> de <span className="text-white">vanguardia</span> y <span className="text-white">diseño</span> técnico de <span className="text-white">precisión</span>.
            </p>
          </div>

          <div className="flex justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Link 
              href="/proyectos" 
              className="text-[10px] uppercase tracking-[0.4em] text-white bg-red-600 hover:bg-red-500 transition-all duration-500 py-5 px-12 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.5)] border border-red-400/50"
            >
              ver proyectos
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col gap-8 text-center">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white hover:text-gray-400 transition-colors">
            inicio
          </Link>
          <Link href="/recursos" onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white hover:text-gray-400 transition-colors">
            recursos
          </Link>
          <Link href="/proyectos" onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white hover:text-gray-400 transition-colors">
            proyectos
          </Link>
          <Link href="/contacto" onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white hover:text-gray-400 transition-colors">
            contacto
          </Link>
        </nav>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
