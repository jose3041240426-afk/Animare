"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from "@/app/components/ui/carousel";

const TypewriterText = ({ text, speed = 15 }: { text: string, speed?: number }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayedText(text.substring(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayedText}<span className="inline-block w-[2px] h-[1em] bg-red-500 ml-0.5 animate-pulse align-text-bottom" /></span>;
};

const LazyVideo = ({ src, className }: { src: string; className?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {isVisible ? (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className={className}
        />
      ) : (
        <div className="w-full h-full bg-white/[0.02] animate-pulse" />
      )}
    </div>
  );
};

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [ryuTab, setRyuTab] = useState<"pos" | "admin">("pos");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const rafRef = useRef<number>(0);

  const handleZoomMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const handleSpotlight = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.spotlight-card');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--x", String(e.clientX - rect.left));
      card.style.setProperty("--y", String(e.clientY - rect.top));
    });
  }, []);

  const selectedProject = projects.find(p => p.id === id);

  if (!selectedProject) {
    notFound();
  }

  const isRyu = !!selectedProject.apps;
  const activeApp = isRyu ? selectedProject.apps![ryuTab] : null;
  const currentTech = isRyu ? activeApp!.tech : selectedProject.tech;
  const currentScreens = isRyu ? activeApp!.screens : selectedProject.screens;
  const currentHighlights = isRyu ? activeApp!.technicalHighlights : selectedProject.technicalHighlights;
  const currentImages = isRyu ? (activeApp as any).images : (selectedProject as any).images;

  const currentImageData = currentImages?.[carouselIndex];
  const imageDescription = typeof currentImageData === 'object' ? currentImageData?.description : null;
  const displayDescription = imageDescription || (isRyu ? activeApp!.description : selectedProject.description);

  const currentAspect = (activeApp as any)?.carouselAspect || (selectedProject as any).carouselAspect || "aspect-video";
  const currentMaxW = (activeApp as any)?.carouselMaxW || (selectedProject as any).carouselMaxW || "max-w-2xl";

  return (
    <main className="min-h-screen bg-[#060606] text-white selection:bg-red-600 selection:text-white font-sans">
      {/* Fixed Top Bar */}
      <nav className="fixed top-0 left-0 w-full px-6 py-4 z-50 bg-[#060606]/80 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Link href="/proyectos" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group text-xs uppercase tracking-[0.2em]">
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Proyectos
            </Link>
            <span className="text-white/20 text-xs tracking-[0.3em] uppercase">{selectedProject.title}</span>
            <div className="w-20" /> {/* Spacer instead of redundant button */}
          </div>
        </nav>

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        {/* Hero */}
        <header className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] uppercase tracking-[0.2em] text-white/40">{selectedProject.tag}</span>
            {isRyu && <span className="px-3 py-1 rounded-full border border-red-600/20 bg-red-600/5 text-[10px] uppercase tracking-[0.2em] text-red-500">Ecosistema Dual</span>}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-4">{selectedProject.title}</h1>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-lg text-white/30 font-light max-w-xl">{selectedProject.subtitle}</p>
            {selectedProject.link && (
              <Link href={selectedProject.link} target="_blank">
                <button className="cssbuttons-io-button">
                  Visitar
                  <div className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </Link>
            )}
          </div>

          <div className="mt-8 h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </header>

        {/* Ryu Tab Bar */}
        {isRyu && (
          <section className="mb-12 animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="glass-radio-group">
              <input type="radio" name="ryu-tab" id="glass-pos" checked={ryuTab === "pos"} onChange={() => setRyuTab("pos")} />
              <label htmlFor="glass-pos">Ryu Sushi POS</label>
              <input type="radio" name="ryu-tab" id="glass-admin" checked={ryuTab === "admin"} onChange={() => setRyuTab("admin")} />
              <label htmlFor="glass-admin">Ryu Admin</label>
              <div className="glass-glider"></div>
            </div>
          </section>
        )}

        <div className={cn(
          "flex mb-24",
          isRyu ? "flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start" : "flex-col gap-16"
        )}>
          {/* Gallery */}
          {currentImages && (
            <section key={`gallery-${ryuTab}`} className={cn(isRyu ? "w-full lg:w-fit shrink-0" : "w-full", "animate-fade-in")} style={{ animationDelay: '100ms' }}>
              <div className={cn("relative mx-auto", isRyu && "lg:mx-0 px-4 lg:px-0", currentMaxW)}>
                <Carousel onIndexChange={setCarouselIndex}>
                  <CarouselContent>
                    {currentImages.map((imgData: any, idx: number) => {
                      const imgUrl = typeof imgData === 'string' ? imgData : imgData.url;
                      return (
                        <CarouselItem key={idx} className="p-1">
                          <div 
                            className={cn("rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:border-red-500/20 transition-colors group relative", currentAspect, imgData.type !== 'video' && "cursor-zoom-in")}
                            onMouseMove={imgData.type !== 'video' ? handleZoomMove : undefined}
                            onMouseLeave={() => setZoomPos({ x: 50, y: 50 })}
                          >
                            {imgData.type === 'video' ? (
                              <LazyVideo src={imgUrl} className="w-full h-full object-cover" />
                            ) : (
                              <img 
                                src={imgUrl} 
                                alt={`Screenshot ${idx + 1}`} 
                                loading="lazy" 
                                className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[2.5]" 
                                style={{ 
                                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` 
                                }}
                              />
                            )}
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <CarouselNavigation
                    alwaysShow
                    className="left-[-5%] w-[110%] px-0"
                    classNameButton="bg-red-600 border-red-600 hover:bg-red-500 hover:border-red-500 text-white w-8 h-8 shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                  />
                  <CarouselIndicator className="mt-8" classNameButton="w-2 h-2" />
                </Carousel>
              </div>
            </section>
          )}

          {/* Info Section */}
          <div className={cn(
            "animate-fade-in",
            isRyu ? "flex-1 space-y-12" : "max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12"
          )} style={{ animationDelay: '200ms' }}>
            <section className={cn(!isRyu && "md:col-span-2")}>
              <h3 className="text-xs uppercase tracking-[0.25em] text-white/25 mb-6 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-white/15" />Descripción
              </h3>
              <div className="min-h-[100px]">
                <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light italic text-justify">
                  <TypewriterText key={displayDescription} text={displayDescription} />
                </p>
              </div>
            </section>

            {/* Technical Highlights */}
            <section className="space-y-6">
              <h3 className="text-xs uppercase tracking-[0.25em] text-white/25 mb-6 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-white/15" />Puntos Clave
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {currentHighlights?.map((highlight: any, idx: number) => (
                  <div
                    key={`${ryuTab}-hl-${idx}`}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all"
                  >
                    <h5 className="font-semibold text-white/80 text-xs mb-1 uppercase tracking-wider">{highlight.key}</h5>
                    <p className="text-white/35 text-[11px] leading-relaxed">{highlight.val}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Screens Section - Only for Ryu Sushi */}
        {isRyu && (
          <section key={`screens-${ryuTab}`} className="mb-12">
            <h3 className="text-xs uppercase tracking-[0.25em] text-white/25 mb-5 flex items-center gap-3 animate-stagger" style={{ animationDelay: '200ms' }}>
              <span className="w-6 h-[1px] bg-white/15" />Pantallas
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {currentScreens?.map((screen: any, idx: number) => (
                <div
                  key={`${ryuTab}-screen-${idx}`}
                  className="group p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all animate-slide-up"
                  style={{ animationDelay: `${idx * 100 + 300}ms` }}
                >
                  <h4 className="text-sm font-semibold mb-3 text-white/70 group-hover:text-white transition-colors">{screen.name}</h4>
                  {screen.video && (
                    <div className="mb-4 rounded-lg overflow-hidden border border-white/[0.06] bg-black aspect-video">
                      <LazyVideo src={screen.video} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <ul className="space-y-1.5">
                    {screen.features?.map((feat: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start gap-2 text-white/40 text-xs leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-red-600/40 shrink-0" />{feat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}





        {/* Tech Stack — Compact Horizontal Cards */}
        <section className="mb-12">
          <h3 className="text-xs uppercase tracking-[0.25em] text-white/25 mb-5 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-white/15" />Stack Tecnológico
          </h3>
          <div onMouseMove={handleSpotlight} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: "Backend", data: currentTech?.backend, imgs: currentTech?.backendImages },
              { label: "Frontend", data: currentTech?.frontend, imgs: currentTech?.frontendImages },
              { label: "Servicios", data: currentTech?.external, imgs: currentTech?.externalImages },
              { label: "Seguridad", data: currentTech?.security, imgs: null }
            ].map((col: any, idx: number) => (
              <div
                key={`${ryuTab}-tech-${idx}`}
                className="spotlight-card animate-stagger"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="spotlight-content h-full">
                  <h4 className="text-white/25 uppercase tracking-widest text-[9px] mb-3 font-semibold">{col.label}</h4>
                  <ul className="space-y-1.5">
                    {col.data?.map((t: string, i: number) => <li key={i} className="text-white/60 text-xs leading-relaxed">{t}</li>)}
                  </ul>
                  {col.imgs && col.imgs.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/[0.04] flex gap-3 items-center">
                      {col.imgs.map((img: any, i: number) => (
                        <img key={i} src={img.url} alt={img.name} loading="lazy" className="h-5 w-auto object-contain opacity-25 hover:opacity-80 transition-opacity grayscale hover:grayscale-0" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>







        {/* Presentation */}
        <footer className="relative p-8 md:p-12 rounded-2xl border border-white/[0.06] bg-white/[0.015] text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/[0.03] to-transparent pointer-events-none" />
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-semibold">Presentación</span>
            <p className="text-lg md:text-xl text-white/60 font-light italic leading-relaxed max-w-3xl mx-auto mt-4">"{selectedProject.presentation}"</p>
          </div>
        </footer>

        {/* Private System Warning - Only for dual apps/ecosystems */}
        {isRyu && (
          <div className="mt-8 p-6 rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm relative overflow-hidden group animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-sm md:text-base text-red-200/60 font-light leading-relaxed">
                Este ecosistema es de uso <span className="text-red-400 font-medium">privado y cerrado</span>. Debido a la naturaleza operativa y la sensibilidad de los datos del negocio, el acceso está restringido exclusivamente a personal con permisos autorizados.
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        .animate-stagger {
          animation: slideUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes banner-shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          60% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(300%) skewX(-15deg); }
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 10s ease infinite;
        }
        .animate-banner-shine {
          animation: banner-shine 8s infinite;
        }

        .glass-radio-group {
          --bg: rgba(255, 255, 255, 0.03);
          --text: rgba(255, 255, 255, 0.35);
          display: flex;
          position: relative;
          background: var(--bg);
          border-radius: 0.75rem;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          overflow: hidden;
          width: fit-content;
          padding: 3px;
        }
        .glass-radio-group input { display: none; }
        .glass-radio-group label {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
          font-size: 12px;
          padding: 0.55rem 1.2rem;
          cursor: pointer;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: var(--text);
          position: relative;
          z-index: 2;
          transition: color 0.3s ease;
        }
        .glass-radio-group label:hover { color: rgba(255, 255, 255, 0.7); }
        .glass-radio-group input:checked + label { color: #fff; }
        .glass-glider {
          position: absolute;
          top: 3px;
          bottom: 3px;
          left: 3px;
          width: calc(50% - 3px);
          border-radius: 0.6rem;
          z-index: 1;
          transition: transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56);
        }
        #glass-pos:checked ~ .glass-glider,
        #glass-admin:checked ~ .glass-glider {
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.4), #dc2626);
          box-shadow: 0 0 16px rgba(220, 38, 38, 0.35);
        }
        #glass-pos:checked ~ .glass-glider { transform: translateX(0%); }
        #glass-admin:checked ~ .glass-glider { transform: translateX(100%); }
      `}</style>
    </main>
  );
}
