"use client";

import Link from "next/link";
import { useState } from "react";

export default function BotonSlidePage() {
  const [activeTab, setActiveTab ] = useState<"html" | "css">("html");
  const [color1, setColor1] = useState("#3b82f6");
  const [color2, setColor2] = useState("#06b6d4");
  const [copied, setCopied] = useState(false);

  const htmlCode = `<button class="btn-slide">
  <span class="btn-slide-text">Explorar</span>
  <svg class="btn-slide-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</button>`;

  const getCssCode = () => `.btn-slide {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  background: #18181b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
}

.btn-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, ${color1}, ${color2});
  transition: width 0.5s ease;
  z-index: -1;
}

.btn-slide:hover::before {
  width: 100%;
}

.btn-slide-text {
  transition: transform 0.3s ease;
}

.btn-slide-icon {
  transition: transform 0.3s ease;
}

.btn-slide:hover .btn-slide-text {
  transform: translateX(-2px);
}

.btn-slide:hover .btn-slide-icon {
  transform: translateX(4px);
}

.btn-slide:active {
  transform: scale(0.97);
}`;

  const handleCopy = () => {
    const codeToCopy = activeTab === "html" ? htmlCode : getCssCode();
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderCodeLines = (code: string) => {
    return code.split('\n').map((line, i) => {
      let formattedLine = line;
      if (activeTab === "css") {
        formattedLine = line
          .replace(/(#[a-fA-F0-9]{3,6}|linear-gradient\([^\)]+\))/g, '<span class="text-green-400">$1</span>')
          .replace(/(\d+px|\d+%|\d+s|0%|100%)/g, '<span class="text-orange-400">$1</span>')
          .replace(/(position|display|align-items|gap|padding|background|border|border-radius|color|font-weight|font-size|text-transform|letter-spacing|cursor|overflow|z-index|content|top|left|width|height|transition|transform|linear-gradient)/g, '<span class="text-purple-400">$1</span>')
          .replace(/(hover|active|before|btn-slide-text|btn-slide-icon)/g, '<span class="text-yellow-400">$1</span>');
      } else {
        formattedLine = line
          .replace(/(&lt;button|&lt;\/button&gt;|&lt;span|&lt;\/span&gt;|&lt;svg|&lt;\/svg&gt;|&lt;path)/g, '<span class="text-blue-400">$1</span>')
          .replace(/(class=|width=|height=|viewBox=|fill=|stroke=|stroke-width=|d=)/g, '<span class="text-yellow-400">$1</span>')
          .replace(/("btn-slide"|"btn-slide-text"|"btn-slide-icon"|"[^"]+")/g, '<span class="text-green-400">$1</span>');
      }

      return (
        <div key={i} className="flex gap-6 hover:bg-white/5 transition-colors duration-150 rounded px-1 group">
          <span className="text-white/20 w-6 text-right select-none font-mono text-xs">{i + 1}</span>
          <span className="flex-1 font-mono" dangerouslySetInnerHTML={{ __html: formattedLine || ' ' }} />
        </div>
      );
    });
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20">
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
        <div className="text-xs uppercase tracking-[0.3em] font-bold text-white/20">Recurso #04</div>
      </nav>

      <div className="container mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-light tracking-tight mb-4 text-[#3b82f6]">Botón Slide</h1>
              <p className="text-white/40 font-light leading-relaxed">
                Interacción de desplazamiento lateral con degradado. Al pasar el ratón, el texto y el icono se desplazan armónicamente mientras el fondo se llena.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-3xl flex items-center justify-center relative overflow-hidden min-h-[300px] group">
              <style jsx>{`
                .btn-slide-preview {
                  position: relative;
                  display: flex;
                  align-items: center;
                  gap: 8px;
                  padding: 16px 32px;
                  background: #18181b;
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  border-radius: 9999px;
                  color: white;
                  font-weight: 500;
                  font-size: 14px;
                  text-transform: uppercase;
                  letter-spacing: 0.1em;
                  cursor: pointer;
                  overflow: hidden;
                  z-index: 1;
                  transition: all 0.3s ease;
                }
                .btn-slide-preview::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 0%;
                  height: 100%;
                  background: linear-gradient(90deg, ${color1}, ${color2});
                  transition: width 0.5s ease;
                  z-index: -1;
                }
                .btn-slide-preview:hover::before {
                  width: 100%;
                }
                .btn-slide-text-preview, .btn-slide-icon-preview {
                  transition: transform 0.3s ease;
                }
                .btn-slide-preview:hover .btn-slide-text-preview {
                  transform: translateX(-2px);
                }
                .btn-slide-preview:hover .btn-slide-icon-preview {
                  transform: translateX(4px);
                }
                .btn-slide-preview:active {
                  transform: scale(0.97);
                }
              `}</style>
              <button className="btn-slide-preview">
                <span className="btn-slide-text-preview">Explorar</span>
                <svg className="btn-slide-icon-preview" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-8 p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
              <div className="flex flex-col gap-3 flex-1">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Color 1 (Degradado)</label>
                <div className="flex items-center gap-3">
                  <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="w-12 h-12 bg-transparent border-2 border-white/10 rounded-xl cursor-pointer" />
                  <span className="text-xs font-mono">{color1}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Color 2 (Degradado)</label>
                <div className="flex items-center gap-3">
                  <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="w-12 h-12 bg-transparent border-2 border-white/10 rounded-xl cursor-pointer" />
                  <span className="text-xs font-mono">{color2}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
              <div className="bg-white/5 px-6 py-4 flex justify-between items-center border-b border-white/5">
                <div className="flex gap-4">
                  <button onClick={() => setActiveTab("html")} className={`text-xs uppercase tracking-widest px-3 py-1 rounded-lg ${activeTab === "html" ? "text-white bg-white/10" : "text-white/30"}`}>index.html</button>
                  <button onClick={() => setActiveTab("css")} className={`text-xs uppercase tracking-widest px-3 py-1 rounded-lg ${activeTab === "css" ? "text-white bg-white/10" : "text-white/30"}`}>style.css</button>
                </div>
                <button onClick={handleCopy} className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-2">
                  {copied ? "¡Copiado!" : "Copiar"}
                </button>
              </div>
              <div className="p-6 overflow-y-auto max-h-[400px]">
                <pre className="text-sm leading-relaxed whitespace-pre">
                  <code>{activeTab === "html" ? renderCodeLines(htmlCode) : renderCodeLines(getCssCode())}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
