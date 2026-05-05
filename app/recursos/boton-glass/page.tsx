"use client";

import Link from "next/link";
import { useState } from "react";

export default function BotonGlassPage() {
  const [activeTab, setActiveTab] = useState<"html" | "css">("html");
  const [bgColor, setBgColor] = useState("#ffffff20"); // Transparent white for glass
  const [hoverColor, setHoverColor] = useState("#ffffff40"); // More opaque white for hover
  const [textColor, setTextColor] = useState("#ffffff");
  const [copied, setCopied] = useState(false);

  const htmlCode = `<button class="btn-glass">
  Botón Glass
</button>`;

  const getCssCode = () => `.btn-glass {
  padding: 16px 32px;
  background: ${bgColor};
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  color: ${textColor};
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-glass:hover {
  background: ${hoverColor};
  border-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.05);
  box-shadow: 0 25px 40px -12px rgba(0, 0, 0, 0.5);
}

.btn-glass:active {
  transform: scale(0.95);
}`;

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

  const renderCodeLines = (code: string) => {
    return code.split('\n').map((line, i) => {
      let formattedLine = line;
      if (activeTab === "css") {
        formattedLine = line
          .replace(/(#[a-fA-F0-9]{3,8}|rgba?\([^\)]+\))/g, '<span class="text-green-400">$1</span>')
          .replace(/(\d+px|\d+%|\d+s)/g, '<span class="text-orange-400">$1</span>')
          .replace(/(padding|background|backdrop-filter|border|border-radius|color|font-weight|font-size|text-transform|letter-spacing|cursor|transition|box-shadow|transform)/g, '<span class="text-purple-400">$1</span>')
          .replace(/(hover|active)/g, '<span class="text-yellow-400">$1</span>');
      } else {
        formattedLine = line
          .replace(/(&lt;button|&lt;\/button&gt;)/g, '<span class="text-blue-400">$1</span>')
          .replace(/(class=)/g, '<span class="text-yellow-400">$1</span>')
          .replace(/("btn-glass")/g, '<span class="text-green-400">$1</span>');
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
    <main className="min-h-screen bg-transparent text-white font-sans selection:bg-white/20">
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
        <div className="text-xs uppercase tracking-[0.3em] font-bold text-white/20">Recurso #03</div>
      </nav>

      <div className="container mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <div className="animate-slide-up">
              <h1 className="text-4xl font-light tracking-tight mb-4 text-white/90">Botón Glass</h1>
              <p className="text-white/40 font-light leading-relaxed">
                Efecto de cristal esmerilado sin distracciones. Utiliza backdrop-filter para un acabado premium sobre fondos complejos.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-3xl flex items-center justify-center relative overflow-hidden min-h-[400px] group animate-slide-up" style={{ animationDelay: '150ms' }}>
              {/* Círculos decorativos para el efecto glass */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
              
              <style jsx>{`
                .btn-glass-preview {
                  padding: 16px 32px;
                  background: ${bgColor};
                  backdrop-filter: blur(12px);
                  border: 1px solid rgba(255, 255, 255, 0.2);
                  border-radius: 16px;
                  color: ${textColor};
                  font-weight: 500;
                  font-size: 14px;
                  text-transform: uppercase;
                  letter-spacing: 0.1em;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  position: relative;
                  z-index: 10;
                }
                .btn-glass-preview:hover {
                  background: ${hoverColor};
                  border-color: rgba(255, 255, 255, 0.4);
                  transform: scale(1.05);
                  box-shadow: 0 25px 40px -12px rgba(0, 0, 0, 0.5);
                }
                .btn-glass-preview:active {
                  transform: scale(0.95);
                }
              `}</style>
              <button className="btn-glass-preview">
                Botón Glass
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex flex-wrap gap-8 p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
              <div className="flex flex-col gap-3 min-w-[120px]">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Fondo</label>
                <div className="flex items-center gap-3">
                  <input type="color" value={bgColor.slice(0, 7)} onChange={(e) => setBgColor(e.target.value + (bgColor.length > 7 ? bgColor.slice(7) : ''))} className="w-10 h-10 bg-transparent border-2 border-white/10 rounded-xl cursor-pointer" />
                  <span className="text-[10px] font-mono opacity-50">{bgColor}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 min-w-[120px]">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Hover</label>
                <div className="flex items-center gap-3">
                  <input type="color" value={hoverColor.slice(0, 7)} onChange={(e) => setHoverColor(e.target.value + (hoverColor.length > 7 ? hoverColor.slice(7) : ''))} className="w-10 h-10 bg-transparent border-2 border-white/10 rounded-xl cursor-pointer" />
                  <span className="text-[10px] font-mono opacity-50">{hoverColor}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 min-w-[120px]">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Texto</label>
                <div className="flex items-center gap-3">
                  <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-10 h-10 bg-transparent border-2 border-white/10 rounded-xl cursor-pointer" />
                  <span className="text-[10px] font-mono opacity-50">{textColor}</span>
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
                <pre className="text-sm leading-relaxed whitespace-pre font-mono">
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

