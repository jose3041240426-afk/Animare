"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function BotonDetallePage() {
  const [activeTab, setActiveTab] = useState<"html" | "css">("html");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [copied, setCopied] = useState(false);

  // CSS dinámico que se actualiza con los colores
  const getCssCode = () => `.btn-elegant {
  padding: 12px 32px;
  background-color: ${bgColor};
  color: ${textColor};
  border-radius: 9999px;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn-elegant:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px ${bgColor}4d;
}

.btn-elegant:active {
  transform: scale(0.9) rotate(3deg);
}`;

  const htmlCode = `<button class="btn-elegant">
  boton
</button>`;

  const handleCopy = () => {
    const codeToCopy = activeTab === "html" ? htmlCode : getCssCode();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = codeToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
    }
  };

  // Función para obtener líneas de código con sintaxis resaltada
  const renderCodeLines = (code: string) => {
    return code.split('\n').map((line, i) => {
      // Resaltado de sintaxis básico para CSS
      let formattedLine = line;
      if (activeTab === "css") {
        formattedLine = line
          .replace(/(#[a-fA-F0-9]{3,6})/g, '<span class="text-green-400">$1</span>')
          .replace(/(\d+px|\d+%|\d+s)/g, '<span class="text-orange-400">$1</span>')
          .replace(/(background-color|color|padding|border-radius|font-weight|font-size|text-transform|letter-spacing|transition|cursor|border|box-shadow|transform)/g, '<span class="text-purple-400">$1</span>')
          .replace(/(hover|active)/g, '<span class="text-yellow-400">$1</span>');
      } else {
        formattedLine = line
          .replace(/(&lt;button|&lt;\/button&gt;)/g, '<span class="text-blue-400">$1</span>')
          .replace(/(class=)/g, '<span class="text-yellow-400">$1</span>')
          .replace(/("btn-elegant")/g, '<span class="text-green-400">$1</span>');
      }

      return (
        <div key={i} className="flex gap-6 hover:bg-white/5 transition-colors duration-150 rounded px-1 group">
          <span className="text-white/20 w-6 text-right select-none font-mono text-xs">{i + 1}</span>
          <span
            className="flex-1 font-mono"
            dangerouslySetInnerHTML={{ __html: formattedLine || ' ' }}
          />
        </div>
      );
    });
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20">
      {/* Header Navigation */}
      <nav className="p-6 border-b border-white/5 flex justify-between items-center backdrop-blur-md sticky top-0 z-50">
        <Link href="/recursos" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm uppercase tracking-widest">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Volver
        </Link>
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-bold tracking-[0.2em] text-sm hover:opacity-50 transition-opacity">
          <span className="text-red-500">A</span>NIMARE
        </Link>
        <div className="text-xs uppercase tracking-[0.3em] font-bold text-white/20">Recurso #01</div>
      </nav>

      <div className="container mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Preview Area */}
          <div className="flex flex-col gap-6 h-full">
            <div>
              <h1 className="text-4xl font-light tracking-tight mb-4">Botón Elegante</h1>
              <p className="text-white/40 font-light leading-relaxed">
                Un botón minimalista diseñado para interfaces premium. Incluye efectos de escala en hover y una pequeña deformación orgánica al hacer clic.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-3xl flex items-center justify-center relative overflow-hidden group min-h-[280px] flex-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

              <button
                style={{ backgroundColor: bgColor, color: textColor }}
                className="
                  px-10 py-4
                  rounded-full font-medium 
                  text-lg uppercase tracking-[0.2em]
                  transition-all duration-300
                  hover:scale-110 
                  active:scale-90 active:rotate-3
                  cursor-pointer
                  relative z-10
                "
              >
                boton
              </button>
            </div>

            <div className="flex gap-4 opacity-50">
              <div className="px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest">HTML5</div>
              <div className="px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest">CSS3</div>
              <div className="px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest">Animated</div>
            </div>
          </div>

          {/* Right: Code Editor Area */}
          <div className="flex flex-col gap-4 h-full">
            {/* Customization Controls */}
            <div className="flex flex-wrap gap-8 p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
              <div className="flex flex-col gap-3 flex-1">
                <label className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-2">
                  Fondo del Botón
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-12 h-12 bg-transparent border-2 border-white/10 rounded-xl cursor-pointer hover:border-white/30 transition-all duration-300"
                  />
                  <input
                    type="text"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm font-mono text-white/80 focus:outline-none focus:border-white/30 transition-all duration-300 flex-1"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <label className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-2">
                  Color del Texto
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-12 h-12 bg-transparent border-2 border-white/10 rounded-xl cursor-pointer hover:border-white/30 transition-all duration-300"
                  />
                  <input
                    type="text"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm font-mono text-white/80 focus:outline-none focus:border-white/30 transition-all duration-300 flex-1"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Editor Header */}
              <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-6">
                  <button
                    onClick={() => setActiveTab("html")}
                    className={`text-xs uppercase tracking-widest transition-all duration-300 px-3 py-1 rounded-lg ${activeTab === "html"
                      ? "text-white bg-white/10"
                      : "text-white/30 hover:text-white/60 hover:bg-white/5"
                      }`}
                  >
                    index.html
                  </button>
                  <button
                    onClick={() => setActiveTab("css")}
                    className={`text-xs uppercase tracking-widest transition-all duration-300 px-3 py-1 rounded-lg ${activeTab === "css"
                      ? "text-white bg-white/10"
                      : "text-white/30 hover:text-white/60 hover:bg-white/5"
                      }`}
                  >
                    style.css
                    {activeTab === "css" && bgColor !== "#ffffff" && (
                      <span className="ml-2 text-[8px] text-green-400 animate-pulse">● Live</span>
                    )}
                  </button>
                </div>
                <button
                  onClick={handleCopy}
                  className="group relative flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-all duration-300 px-3 py-1 rounded-lg hover:bg-white/5"
                >
                  <svg className={`w-3 h-3 transition-all duration-300 ${copied ? 'scale-110' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {copied ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    )}
                  </svg>
                  {copied ? "¡Copiado!" : "Copiar código"}
                </button>
              </div>

              {/* Code Content - Improved Scrollbar */}
              <div className="relative">
                <style jsx>{`
                  .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.05);
                  }
                  
                  .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                  }
                  
                  .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                    margin: 12px 0;
                  }
                  
                  .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 100%);
                    border-radius: 10px;
                    transition: all 0.3s ease;
                  }
                  
                  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.4) 100%);
                    box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
                  }
                  
                  .custom-scrollbar::-webkit-scrollbar-corner {
                    background: transparent;
                  }
                  
                  .custom-scrollbar {
                    scroll-behavior: smooth;
                  }
                `}</style>

                <div className="p-4 overflow-y-auto max-h-[320px] custom-scrollbar">
                  <pre className="text-sm leading-relaxed whitespace-pre">
                    <code>
                      {activeTab === "html" ? (
                        renderCodeLines(htmlCode)
                      ) : (
                        renderCodeLines(getCssCode())
                      )}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Live preview indicator */}
            <div className="flex items-center justify-between text-[10px] text-white/20 uppercase tracking-widest mt-2 px-2">
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${activeTab === "css" ? 'bg-green-400 animate-pulse' : 'bg-white/20'}`} />
                <span>CSS en vivo</span>
              </div>
              <span>Desplázate para ver más</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}