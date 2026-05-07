"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
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
  const rafRef = useRef<number>(0);

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

        {/* Gallery */}
        {selectedProject.images && (
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '100ms' }}>

            <div className="relative max-w-2xl mx-auto px-4">
              <Carousel>
                <CarouselContent>
                  {selectedProject.images.map((img: string, idx: number) => (
                    <CarouselItem key={idx} className="p-1">
                      <div className="aspect-video rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:border-red-500/20 transition-colors">
                        <img src={img} alt={`Screenshot ${idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNavigation
                  alwaysShow
                  className="left-[-5%] w-[110%] px-0"
                  classNameButton="bg-red-600 border-red-600 hover:bg-red-500 hover:border-red-500 text-white w-8 h-8 shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                />
                <CarouselIndicator className="mt-12" classNameButton="w-2 h-2" />
              </Carousel>
            </div>
          </section>
        )}

        {/* Ryu Tab Bar */}
        {isRyu && (
          <section className="mb-10 animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="glass-radio-group">
              <input type="radio" name="ryu-tab" id="glass-pos" checked={ryuTab === "pos"} onChange={() => setRyuTab("pos")} />
              <label htmlFor="glass-pos">Ryu Sushi POS</label>
              <input type="radio" name="ryu-tab" id="glass-admin" checked={ryuTab === "admin"} onChange={() => setRyuTab("admin")} />
              <label htmlFor="glass-admin">Ryu Admin</label>
              <div className="glass-glider"></div>
            </div>
          </section>
        )}

        <section className="mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light italic max-w-3xl min-h-[3em] text-justify mx-auto">
            <TypewriterText text={isRyu ? activeApp!.description : selectedProject.description} />
          </p>
        </section>

        {/* Screens / Features */}
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





        {/* Technical Highlights */}
        <section key={`highlights-${ryuTab}`} className="mb-16">
          <h3 className="text-xs uppercase tracking-[0.25em] text-white/25 mb-5 flex items-center gap-3 animate-stagger" style={{ animationDelay: '200ms' }}>
            <span className="w-6 h-[1px] bg-white/15" />Highlights Técnicos
          </h3>
          <div onMouseMove={handleSpotlight} className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentHighlights?.map((highlight: any, idx: number) => (
              <div
                key={`${ryuTab}-hl-${idx}`}
                className="spotlight-card animate-stagger"
                style={{ animationDelay: `${idx * 80 + 300}ms` }}
              >
                <div className="spotlight-content h-full">
                  <h5 className="font-semibold text-white/80 text-sm mb-1.5">{highlight.key}</h5>
                  <p className="text-white/35 text-xs leading-relaxed">{highlight.val}</p>
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
