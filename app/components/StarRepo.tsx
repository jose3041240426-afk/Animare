"use client";

import { useEffect, useState } from "react";

export default function StarRepo() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    // Intentar obtener las estrellas reales si es posible, si no, dejar un fallback elegante
    // Nota: Reemplaza con tu repo real si lo tienes
    fetch("https://api.github.com/repos/jose3041240426-afk/Animare")
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count) setStars(data.stargazers_count);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-24 bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-white text-3xl md:text-5xl font-light tracking-tight mb-4 animate-fade-in">
          ¿Esta web te ha ayudado?
        </h2>
        <p className="text-white/40 text-lg font-light mb-12 max-w-lg mx-auto">
          Si te gusta lo que estamos construyendo, considera apoyarnos con una estrella en GitHub. Nos motiva a seguir creando.
        </p>
        
        <div className="group relative inline-block">
          {/* Outer glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          
          <a
            href="https://github.com/jose3041240426-afk/Animare"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-4 px-10 py-5 bg-black border border-white/10 rounded-full text-white transition-all duration-500 hover:border-white/40 hover:scale-[1.02]"
          >
            <svg 
              height="24" 
              viewBox="0 0 16 16" 
              version="1.1" 
              width="24" 
              aria-hidden="true"
              className="fill-white group-hover:rotate-[360deg] transition-transform duration-700"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 01-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 010 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            
            <div className="flex flex-col items-start leading-none">
              <span className="text-lg font-light tracking-wider">Star on GitHub</span>
              <span className="text-[10px] text-white/40 uppercase mt-1 tracking-[0.2em]">Open Source Project</span>
            </div>

            <div className="h-8 w-[1px] bg-white/10 mx-2" />

            <div className="flex items-center gap-1.5 text-white/80">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="w-4 h-4 text-yellow-500 fill-yellow-500"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="font-mono text-sm">{stars !== null ? stars : '--'}</span>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-20 flex gap-12 opacity-20 filter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <span className="text-xs tracking-[0.3em] uppercase">Built with Passion</span>
        <span className="text-xs tracking-[0.3em] uppercase">Next.js 16</span>
        <span className="text-xs tracking-[0.3em] uppercase">Tailwind CSS</span>
      </div>
    </section>
  );
}
