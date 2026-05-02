"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollText() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDir, setScrollDir] = useState<"down" | "up">("down");
  const lastY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastY.current) {
        setScrollDir("down");
      } else if (window.scrollY < lastY.current) {
        setScrollDir("up");
      }
      lastY.current = window.scrollY;
    };
    
    // Ejecutar una vez para inicializar
    lastY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const text = "Somos una empresa de software y recursos para developers que quieren crear interfaces modernas y llenas de vida.";
  const words = text.split(" ");

  return (
    <section className="min-h-screen bg-transparent flex items-center justify-center px-6 md:px-12 py-20 relative overflow-hidden">
      {/* Brillo suave en el fondo para que se vea más premium */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto flex flex-wrap justify-center items-center text-center gap-x-2 md:gap-x-4 lg:gap-x-5 gap-y-2 md:gap-y-4 relative z-10 h-full"
      >
        {words.map((word, index) => {
          const isHighlight = ["software", "developers", "modernas", "vida."].includes(word);
          
          // La animación se basa en si es visible y la dirección del scroll
          // Si está desapareciendo hacia arriba, se va a -100%. Si hacia abajo, a 100%
          const exitTransform = scrollDir === "down" ? "translate-y-[-100%]" : "translate-y-[100%]";
          // Retardo inverso al salir: la última palabra se ve afectada primero
          const delay = isVisible ? index * 40 : (words.length - 1 - index) * 20;

          return (
            <div key={index} className="overflow-hidden py-1">
              <span
                className={`block text-3xl md:text-5xl lg:text-7xl font-extralight tracking-tight ${
                  isHighlight ? "text-white font-normal drop-shadow-md" : "text-white/40"
                } transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible ? "translate-y-0 opacity-100" : `${exitTransform} opacity-0`
                }`}
                style={{
                  transitionDelay: `${delay}ms`
                }}
              >
                {word}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
