"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 w-full p-6 md:p-8 z-50 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold tracking-[0.3em] text-white">ANIMARE</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-12 text-sm uppercase tracking-[0.2em] font-light text-white/70 flex-grow justify-center -ml-16">
          {['inicio', 'recursos', 'plantillas'].map((item) => (
            <button key={item} className="relative group hover:text-white transition-colors duration-500">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
            </button>
          ))}
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
          {['inicio', 'recursos', 'plantillas'].map((item) => (
            <button 
              key={item} 
              onClick={() => setMenuOpen(false)}
              className="text-2xl uppercase tracking-[0.3em] font-light text-white hover:text-gray-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 flex-grow py-24">
        
        {/* Left Column: Simple Elegant Text */}
        <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-tight text-white opacity-90">
            Dale vida a tus <br /> 
            <span className="font-semibold text-white">
              proyectos
            </span>
          </h1>
        </div>

        {/* Right Column: 3D Video */}
        <div className="relative flex justify-center lg:justify-end animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
          <div 
            className="relative w-full max-w-[300px] md:max-w-[400px] aspect-square flex items-center justify-center transition-transform duration-700 ease-out pointer-events-none"
            style={{ 
              transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) rotateX(${-mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)` 
            }}
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-contain"
              style={{ mixBlendMode: 'screen' }}
            >
              <source src="/circle.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
