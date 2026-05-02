"use client";

import React from "react";

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "React Native",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Three.js",
  "Framer Motion",
];

export default function TechStack() {
  // Double the technologies array for seamless infinite scroll
  const extendedTech = [...technologies, ...technologies];

  return (
    <section className="py-24 overflow-hidden bg-transparent border-y border-white/5">
      <div className="container mx-auto px-6 mb-12">
        <h3 className="text-[10px] uppercase tracking-[0.5em] text-white/20 text-center font-bold">
          Arsenal Tecnológico de Vanguardia
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-12">
          {extendedTech.map((tech, index) => (
            <div
              key={index}
              className="mx-12 text-3xl md:text-5xl font-bold tracking-tighter text-white hover:text-red-500 transition-all duration-500 cursor-default select-none flex items-center gap-4 group/item"
            >
              <span className="w-2 h-2 rounded-full bg-red-500/0 group-hover/item:bg-red-500 transition-all duration-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
              {tech}
            </div>
          ))}
        </div>

        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-12">
          {extendedTech.map((tech, index) => (
            <div
              key={index}
              className="mx-12 text-3xl md:text-5xl font-bold tracking-tighter text-white/10 hover:text-red-500 transition-all duration-500 cursor-default select-none flex items-center gap-4 group/item"
            >
              <span className="w-2 h-2 rounded-full bg-red-500/0 group-hover/item:bg-red-500 transition-all duration-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
              {tech}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}
