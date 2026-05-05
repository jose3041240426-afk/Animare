"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ExpandableCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop animation values (expand outward from center)
  const xLeft = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "-110%"]);
  const xRight = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "110%"]);
  const rotateLeft = useTransform(scrollYProgress, [0.1, 0.5], [0, -10]);
  const rotateRight = useTransform(scrollYProgress, [0.1, 0.5], [0, 10]);

  // Mobile animation values (cards slide in below, stacking vertically)
  const xDev = useTransform(scrollYProgress, [0.1, 0.4], ["120%", "0%"]);
  const opacityDev = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const xLaunch = useTransform(scrollYProgress, [0.4, 0.7], ["-120%", "0%"]);
  const opacityLaunch = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  const cards = [
    {
      title: "Estrategia",
      desc: "Análisis profundo de mercado y definición de objetivos claros.",
      badge: "Fase 1",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "from-red-500/20 to-transparent",
      badgeColor: "bg-red-500",
    },
    {
      title: "Desarrollo",
      desc: "Ingeniería de software de primer nivel con tecnologías modernas.",
      badge: "Fase 2",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "from-red-500/20 to-transparent",
      badgeColor: "bg-red-500",
    },
    {
      title: "Lanzamiento",
      desc: "Despliegue optimizado y escalamiento global garantizado.",
      badge: "Fase 3",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
        </svg>
      ),
      color: "from-red-500/20 to-transparent",
      badgeColor: "bg-red-500",
    },
  ];

  // ─── MOBILE LAYOUT: vertical stack with slide-in ───
  if (isMobile) {
    return (
      <section ref={containerRef} className="relative h-[180vh] py-20 overflow-visible">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-16 w-full px-6 overflow-hidden">
          <div className="text-center mb-8 space-y-3">
            <h2 className="text-4xl font-bold tracking-tighter">
              NUESTRO <span className="font-light italic text-red-500">PROCESO</span>
            </h2>
            <p className="text-white/40 uppercase tracking-[0.3em] text-[10px]">
              Sigue haciendo scroll para ver las etapas
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full max-w-sm">
            {/* Card 1 — Estrategia — always visible */}
            <div className="w-full bg-white/[0.05] backdrop-blur-3xl border border-white/20 rounded-3xl p-6 flex items-center gap-5 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
              <div className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${cards[0].color} flex items-center justify-center border border-white/10`}>
                {cards[0].icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded-full ${cards[0].badgeColor} text-[8px] font-bold uppercase tracking-widest text-white`}>{cards[0].badge}</span>
                </div>
                <h3 className="text-lg font-bold">{cards[0].title}</h3>
                <p className="text-white/40 text-xs leading-relaxed font-light mt-1">{cards[0].desc}</p>
              </div>
            </div>

            {/* Card 2 — Desarrollo — slides from right */}
            <motion.div
              style={{ x: xDev, opacity: opacityDev }}
              className="w-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl p-6 flex items-center gap-5 shadow-2xl"
            >
              <div className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${cards[1].color} flex items-center justify-center border border-white/10`}>
                {cards[1].icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded-full ${cards[1].badgeColor} text-[8px] font-bold uppercase tracking-widest text-white`}>{cards[1].badge}</span>
                </div>
                <h3 className="text-lg font-bold">{cards[1].title}</h3>
                <p className="text-white/40 text-xs leading-relaxed font-light mt-1">{cards[1].desc}</p>
              </div>
            </motion.div>

            {/* Card 3 — Lanzamiento — slides from left */}
            <motion.div
              style={{ x: xLaunch, opacity: opacityLaunch }}
              className="w-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl p-6 flex items-center gap-5 shadow-2xl"
            >
              <div className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${cards[2].color} flex items-center justify-center border border-white/10`}>
                {cards[2].icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded-full ${cards[2].badgeColor} text-[8px] font-bold uppercase tracking-widest text-white`}>{cards[2].badge}</span>
                </div>
                <h3 className="text-lg font-bold">{cards[2].title}</h3>
                <p className="text-white/40 text-xs leading-relaxed font-light mt-1">{cards[2].desc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // ─── DESKTOP LAYOUT: cards expand outward from center ───
  return (
    <section ref={containerRef} className="relative h-[120vh] py-32 overflow-visible">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            NUESTRO <span className="font-light italic text-red-500">PROCESO</span>
          </h2>
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs">Desliza para descubrir cómo trabajamos</p>
        </div>

        <div className="relative flex items-center justify-center h-[450px] w-full">
          {/* Left Card — Estrategia */}
          <motion.div
            style={{ x: xLeft, rotate: rotateLeft }}
            className="absolute w-[350px] h-[450px] bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center z-10 shadow-2xl"
          >
            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${cards[0].color} flex items-center justify-center border border-white/10 mb-8 shadow-2xl`}>
              {cards[0].icon}
            </div>
            <div className="space-y-4">
              <span className={`px-2 py-0.5 rounded-full ${cards[0].badgeColor} text-[10px] font-bold uppercase tracking-widest text-white`}>{cards[0].badge}</span>
              <h3 className="text-2xl font-bold">{cards[0].title}</h3>
              <p className="text-white/40 leading-relaxed font-light">{cards[0].desc}</p>
            </div>
          </motion.div>

          {/* Right Card — Lanzamiento */}
          <motion.div
            style={{ x: xRight, rotate: rotateRight }}
            className="absolute w-[350px] h-[450px] bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center z-10 shadow-2xl"
          >
            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${cards[2].color} flex items-center justify-center border border-white/10 mb-8 shadow-2xl`}>
              {cards[2].icon}
            </div>
            <div className="space-y-4">
              <span className={`px-2 py-0.5 rounded-full ${cards[2].badgeColor} text-[10px] font-bold uppercase tracking-widest text-white`}>{cards[2].badge}</span>
              <h3 className="text-2xl font-bold">{cards[2].title}</h3>
              <p className="text-white/40 leading-relaxed font-light">{cards[2].desc}</p>
            </div>
          </motion.div>

          {/* Center Card — Desarrollo (Core) */}
          <motion.div
            className="relative w-[350px] h-[450px] bg-white/[0.05] backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center z-20 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${cards[1].color} flex items-center justify-center border border-white/10 mb-8 shadow-[0_0_30px_rgba(239,68,68,0.2)]`}>
              {cards[1].icon}
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex flex-col items-center gap-2">
                <span className={`px-2 py-0.5 rounded-full ${cards[1].badgeColor} text-[10px] font-bold uppercase tracking-widest text-white mb-1`}>Core</span>
                <h3 className="text-3xl font-bold">{cards[1].title}</h3>
              </div>
              <p className="text-white/60 leading-relaxed font-light">{cards[1].desc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
