"use client";

import { useEffect, useState, useRef } from "react";

const CODE_LINES = [
  { text: "import React from 'react';", colors: ["purple-400", "blue-400", "purple-400", "green-400"] },
  { text: "import { Motion } from 'framer-motion';", colors: ["purple-400", "white", "purple-400", "green-400"] },
  { text: "export default function SoftwareCompany() {", colors: ["purple-400", "yellow-400", "white"] },
  { text: "  return (", colors: ["white", "purple-400", "white"] },
  { text: "    <div className='glass-effect'>", colors: ["white", "white", "green-400", "white"] },
  { text: "      <h1>Design Excellence</h1>", colors: ["white", "white", "white"] },
  { text: "    </div>", colors: ["white", "white"] },
  { text: "  );", colors: ["white"] },
  { text: "}", colors: ["white"] }
];

export default function LaptopMockup() {
  const [visibleLines, setVisibleLines] = useState<string[]>(CODE_LINES.map(() => ""));
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // 3D Interaction State - FACING FORWARD BY DEFAULT
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // TYPING LOGIC
    if (!isDeleting) {
      if (currentLineIndex < CODE_LINES.length) {
        const currentFullText = CODE_LINES[currentLineIndex].text;
        
        if (currentCharIndex < currentFullText.length) {
          const timeout = setTimeout(() => {
            setVisibleLines(prev => {
              const next = [...prev];
              next[currentLineIndex] = currentFullText.slice(0, currentCharIndex + 1);
              return next;
            });
            setCurrentCharIndex(prev => prev + 1);
          }, 30 + Math.random() * 40);
          return () => clearTimeout(timeout);
        } else {
          const timeout = setTimeout(() => {
            setCurrentLineIndex(prev => prev + 1);
            setCurrentCharIndex(0);
          }, 400);
          return () => clearTimeout(timeout);
        }
      } else {
        // Switch to deleting mode after finishing the block
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setCurrentLineIndex(CODE_LINES.length - 1);
          setCurrentCharIndex(CODE_LINES[CODE_LINES.length - 1].text.length);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    } 
    // DELETING LOGIC
    else {
      if (currentLineIndex >= 0) {
        if (currentCharIndex > 0) {
          const timeout = setTimeout(() => {
            setVisibleLines(prev => {
              const next = [...prev];
              next[currentLineIndex] = next[currentLineIndex].slice(0, -1);
              return next;
            });
            setCurrentCharIndex(prev => prev - 1);
          }, 15); // Faster deletion
          return () => clearTimeout(timeout);
        } else {
          // Move to previous line
          setCurrentLineIndex(prev => prev - 1);
          if (currentLineIndex > 0) {
            setCurrentCharIndex(CODE_LINES[currentLineIndex - 1].text.length);
          } else {
            setIsDeleting(false);
            setCurrentLineIndex(0);
            setCurrentCharIndex(0);
          }
        }
      } else {
        setIsDeleting(false);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }
    }
  }, [currentLineIndex, currentCharIndex, isDeleting]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;
    setRotation(prev => ({
      x: prev.x - deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const renderLine = (text: string, index: number) => {
    if (!text) return null;
    const parts = text.split(/(\s+|['].*?[']|[{}]|[()<>])/g).filter(Boolean);
    return parts.map((part, i) => {
      let colorClass = "text-white";
      if (["import", "export", "default", "function", "return", "from"].includes(part)) colorClass = "text-purple-400";
      if (["React", "Motion"].includes(part)) colorClass = "text-blue-400";
      if (["SoftwareCompany"].includes(part)) colorClass = "text-yellow-400";
      if (part.startsWith("'") || part.startsWith('"') || part.includes("className")) colorClass = "text-green-400";
      if (part.startsWith("<h1") || part.startsWith("</h1") || part.startsWith("<div") || part.startsWith("</div")) colorClass = "text-blue-300";
      return <span key={i} className={colorClass}>{part}</span>;
    });
  };

  return (
    <div 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className={`relative w-full max-w-md mx-auto my-12 md:my-32 perspective-2000 group ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
    >
      <div 
        className="relative transition-transform duration-100 ease-out preserve-3d"
        style={{ 
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* --- LAPTOP LID (SCREEN) --- */}
        <div 
          className="relative mx-auto w-full aspect-[16/10] preserve-3d"
          style={{ transform: 'translateZ(0px) rotateX(-5deg)', transformOrigin: 'bottom center' }}
        >
          {/* Lid Front (Screen) */}
          <div className="absolute inset-0 bg-[#0a0a0a] rounded-[1.5rem] border-[10px] border-[#1a1a1a] shadow-2xl overflow-hidden z-10 translate-z-[2px]">
            <div className="absolute inset-0 bg-[#050505] flex flex-col font-mono text-[9px] md:text-xs">
              <div className="h-6 md:h-8 bg-[#111] border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-white/20 text-[8px] md:text-[10px] tracking-widest uppercase">animare.app — index.tsx</div>
                <div className="w-8" />
              </div>
              <div className="flex-1 p-4 md:p-6 overflow-hidden relative">
                <div className="space-y-1.5 opacity-80">
                  {visibleLines.map((line, idx) => (
                    <div key={idx} className="flex gap-3 min-h-[1.2em]">
                      <span className="text-white/10 w-3 md:w-5 select-none">{idx + 1}</span>
                      <div className="flex-1">
                        {renderLine(line, idx)}
                        {((!isDeleting && currentLineIndex === idx) || (isDeleting && currentLineIndex === idx)) && (
                          <span className="inline-block w-[1.5px] h-[1.1em] bg-red-500 ml-1 animate-pulse" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-red-500/10 blur-[100px] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-2000 { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .translate-z-10 { transform: translateZ(10px); }
        .translate-z-20 { transform: translateZ(20px); }
        .translate-z-\[-4px\] { transform: translateZ(-4px); }
        .translate-z-\[-10px\] { transform: translateZ(-10px); }
        .rotate-y-90 { transform: rotateY(90deg); }
        .rotate-x-90 { transform: rotateX(90deg); }
      `}</style>
    </div>
  );
}
