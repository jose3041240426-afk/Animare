"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import StarButton from "./StarButton";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [isPressing, setIsPressing] = useState(false);
  const isUpdating = useRef(false);
  const smoothedPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = () => {
    setIsPressing(true);
    if (videoRef.current) videoRef.current.pause();
  };

  const handleMouseUp = () => {
    setIsPressing(false);
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !videoRef.current || !videoRef.current.duration || isUpdating.current) return;

    isUpdating.current = true;
    requestAnimationFrame(() => {
      if (!containerRef.current || !videoRef.current) {
        isUpdating.current = false;
        return;
      }
      
      const rect = containerRef.current.getBoundingClientRect();
      const targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
      const targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 30;

      // LERP for smooth motion (factor 0.1 for high smoothness)
      smoothedPos.current.x += (targetX - smoothedPos.current.x) * 0.15;
      smoothedPos.current.y += (targetY - smoothedPos.current.y) * 0.15;
      
      setMousePos({ x: smoothedPos.current.x, y: smoothedPos.current.y });

      if (isPressing) {
        const progress = (e.clientX - rect.left) / rect.width;
        const targetTime = Math.max(0, Math.min(progress * videoRef.current.duration, videoRef.current.duration));
        // Direct assignment is still needed for scrubbing, but smoothing mousePos helps parallax
        videoRef.current.currentTime = targetTime;
      }
      
      isUpdating.current = false;
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsPressing(false);
    if (videoRef.current) videoRef.current.play();
  };

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

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 flex-grow py-24">
        
        {/* Left Column: Simple Elegant Text */}
        <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-tight text-white opacity-90">
            Dale vida a tus <br /> 
            <span className="font-semibold text-white">
              proyectos
            </span>
          </h1>
          <StarButton />
        </div>

        {/* Right Column: 3D Video Container */}
        <div className="relative flex justify-center lg:justify-end animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className={`relative w-full max-w-[300px] md:max-w-[400px] aspect-square flex items-center justify-center ease-out group ${isPressing ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ 
              transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) rotateX(${-mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)` 
            }}
          >
            {/* Area Indicator */}
            <div className={`absolute inset-0 border border-white/10 rounded-full scale-110 transition-all duration-300 ${isPressing ? 'opacity-100 scale-100 border-white/30' : 'opacity-0 group-hover:opacity-100'}`} />
            
            <video 
              ref={videoRef}
              autoPlay
              loop
              muted 
              playsInline 
              className="w-full h-full object-contain pointer-events-none"
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
