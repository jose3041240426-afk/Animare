"use client";

import Link from "next/link";
import { useState } from "react";

export default function BotonNeonPage() {
  const [activeTab, setActiveTab] = useState<"html" | "css">("html");
  const [bgColor, setBgColor] = useState("#a855f7"); // Primary neon color
  const [textColor, setTextColor] = useState("#a855f7");
  const [copied, setCopied] = useState(false);

  const htmlCode = `<button class="btn-neon">
  Botón Neón
</button>`;

  const getCssCode = () => `.btn-neon {
  position: relative;
  padding: 16px 32px;
  background: transparent;
  border: 2px solid ${bgColor};
  border-radius: 8px;
  color: ${textColor};
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;
}

.btn-neon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${bgColor};
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  z-index: -1;
}

.btn-neon:hover {
  color: white;
  border-color: ${bgColor};
}

.btn-neon:hover::before {
  transform: scaleX(1);
}

.btn-neon:active {
  transform: scale(0.95);
}

/* Efecto de brillo neón */
.btn-neon::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
  box-shadow: 0 0 20px ${bgColor}cc;
  pointer-events: none;
}

.btn-neon:hover::after {
  opacity: 1;
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
          .replace(/(#[a-fA-F0-9]{3,6})/g, '<span class="text-green-400">$1</span>')
          .replace(/(\d+px|\d+%|\d+s)/g, '<span class="text-orange-400">$1</span>')
          .replace(/(background|color|padding|border|border-radius|font-weight|font-size|text-transform|letter-spacing|transition|cursor|transform|box-shadow|z-index|position|overflow|top|left|width|height|content|transform-origin|inset|opacity|pointer-events)/g, '<span class="text-purple-400">$1</span>')
          .replace(/(hover|active|before|after)/g, '<span class="text-yellow-400">$1</span>');
      } else {
        formattedLine = line
          .replace(/(&lt;button|&lt;\/button&gt;)/g, '<span class="text-blue-400">$1</span>')
          .replace(/(class=)/g, '<span class="text-yellow-400">$1</span>')
          .replace(/("btn-neon")/g, '<span class="text-green-400">$1</span>');
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
        <div className="text-xs uppercase tracking-[0.3em] font-bold text-white/20">Recurso #02</div>
      </nav>

      <div className="container mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-light tracking-tight mb-4 text-[#a855f7]">Botón Neón</h1>
              <p className="text-white/40 font-light leading-relaxed">
                Un botón con efecto de llenado y resplandor neón exterior. Perfecto para llamadas a la acción vibrantes y modernas.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-3xl flex items-center justify-center relative overflow-hidden min-h-[300px] group">
              <style jsx>{`
                .btn-neon-preview {
                  position: relative;
                  padding: 16px 32px;
                  background: transparent;
                  border: 2px solid ${bgColor};
                  border-radius: 8px;
                  color: ${textColor};
                  font-weight: 500;
                  font-size: 14px;
                  text-transform: uppercase;
                  letter-spacing: 0.1em;
                  cursor: pointer;
                  overflow: hidden;
                  transition: all 0.3s ease;
                  z-index: 1;
                }
                .btn-neon-preview::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: ${bgColor};
                  transform: scaleX(0);
                  transform-origin: left;
                  transition: transform 0.3s ease;
                  z-index: -1;
                }
                .btn-neon-preview:hover {
                  color: white;
                }
                .btn-neon-preview:hover::before {
                  transform: scaleX(1);
                }
                .btn-neon-preview:active {
                  transform: scale(0.95);
                }
                .btn-neon-preview::after {
                  content: '';
                  position: absolute;
                  inset: 0;
                  border-radius: 8px;
                  opacity: 0;
                  transition: opacity 0.3s ease;
                  box-shadow: 0 0 20px ${bgColor};
                  pointer-events: none;
                }
                .btn-neon-preview:hover::after {
                  opacity: 1;
                }
              `}</style>
              <button className="btn-neon-preview">
                Botón Neón
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-8 p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
              <div className="flex flex-col gap-3 flex-1">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Color Neón</label>
                <div className="flex items-center gap-3">
                  <input type="color" value={bgColor} onChange={(e) => {setBgColor(e.target.value); setTextColor(e.target.value);}} className="w-12 h-12 bg-transparent border-2 border-white/10 rounded-xl cursor-pointer" />
                  <input type="text" value={bgColor} onChange={(e) => {setBgColor(e.target.value); setTextColor(e.target.value);}} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm font-mono flex-1" />
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
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
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
