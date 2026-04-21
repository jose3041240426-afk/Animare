"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function TypewriterDetallePage() {
  const [activeTab, setActiveTab] = useState<"html" | "css" | "js">("html");
  const [accentColor, setAccentColor] = useState("#7bc5ff");
  const [typingText, setTypingText] = useState("animare.dev");
  const [showBackground, setShowBackground] = useState(true);
  const [useGradient, setUseGradient] = useState(true);
  const [alignment, setAlignment] = useState<"left" | "center" | "right">("center");
  const [copied, setCopied] = useState(false);

  const htmlCode = `<div class="container-wrapper">
  ${showBackground ? '<div class="glass-container">' : ''}
    <div class="typewriter-box">
      <span class="dynamic-text" id="typewriter-text"></span>
      <span class="cursor"></span>
    </div>
  ${showBackground ? '</div>' : ''}
</div>`;

  const getCssCode = () => `${showBackground ? `.glass-container {
  background: rgba(15, 25, 45, 0.55);
  backdrop-filter: blur(12px);
  border-radius: 3rem;
  padding: 3rem 4rem;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(80, 180, 255, 0.25);
  animation: gentle-glow 3s infinite alternate;
}` : ''}

.typewriter-box {
  display: flex;
  align-items: center;
  justify-content: ${alignment === 'left' ? 'flex-start' : alignment === 'right' ? 'flex-end' : 'center'};
  text-align: ${alignment};
  gap: 0.2rem;
}

.dynamic-text {
  font-size: 3.5rem;
  font-weight: 600;
  font-family: monospace;
  ${useGradient ? `background: linear-gradient(135deg, #e0f0ff, ${accentColor});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;` : `color: ${accentColor};`}
}

.cursor {
  display: inline-block;
  width: 0.12em;
  height: 1.2em;
  background: ${accentColor};
  margin-left: 0.15em;
  border-radius: 2px;
  box-shadow: 0 0 10px ${accentColor};
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

@keyframes gentle-glow {
  100% { 
    border-color: ${accentColor}80; 
    box-shadow: 0 25px 55px ${accentColor}33; 
  }
}`;

  const jsCode = `(function() {
  const TARGET = "${typingText}";
  const textSpan = document.getElementById("typewriter-text");
  let current = "";
  let index = 0;
  let isTyping = true;

  function loop() {
    if (isTyping) {
      if (index < TARGET.length) {
        current += TARGET[index++];
        if(textSpan) textSpan.textContent = current;
        setTimeout(loop, 120);
      } else {
        isTyping = false;
        setTimeout(loop, 1600);
      }
    } else {
      if (current.length > 0) {
        current = current.slice(0, -1);
        if(textSpan) textSpan.textContent = current;
        setTimeout(loop, 70);
      } else {
        isTyping = true;
        index = 0;
        setTimeout(loop, 500);
      }
    }
  }
  loop();
})();`;

  const handleCopy = () => {
    let codeToCopy = htmlCode;
    if (activeTab === "css") codeToCopy = getCssCode();
    if (activeTab === "js") codeToCopy = jsCode;
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderCodeLines = (code: string) => {
    return code.split('\n').map((line, i) => {
      let formattedLine = line;
      if (activeTab === "css") {
        formattedLine = line
          .replace(/(#[a-fA-F0-9]{3,8})/g, '<span class="text-blue-400">$1</span>')
          .replace(/(\d+px|\d+%|\d+s|rem|em)/g, '<span class="text-orange-400">$1</span>')
          .replace(/(background|padding|border|radius|box-shadow|animation|flex|align-items|justify-content|gap|font-size|font-weight|background-clip|color|text-align|text-shadow|width|height|margin|opacity)/g, '<span class="text-purple-400">$1</span>');
      } else if (activeTab === "html") {
        formattedLine = line
          .replace(/(&lt;div|&lt;span|&lt;\/div&gt;|&lt;\/span&gt;)/g, '<span class="text-blue-400">$1</span>')
          .replace(/(class=)/g, '<span class="text-yellow-400">$1</span>')
          .replace(/("[^"]*")/g, '<span class="text-green-400">$1</span>');
      } else {
        formattedLine = line
          .replace(/(const|let|function|if|else|setTimeout)/g, '<span class="text-purple-400">$1</span>')
          .replace(/("[^"]*")/g, '<span class="text-green-400">$1</span>')
          .replace(/(\d+)/g, '<span class="text-orange-400">$1</span>');
      }

      return (
        <div key={i} className="flex gap-6 hover:bg-white/5 transition-colors duration-150 rounded px-1 group">
          <span className="text-white/20 w-6 text-right select-none font-mono text-xs">{i + 1}</span>
          <span className="flex-1 font-mono text-sm whitespace-pre" dangerouslySetInnerHTML={{ __html: formattedLine || ' ' }} />
        </div>
      );
    });
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/20">
      <nav className="p-6 border-b border-white/5 flex justify-between items-center backdrop-blur-md sticky top-0 z-50">
        <Link href="/recursos" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm uppercase tracking-widest">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          Volver
        </Link>
        <div className="text-xs uppercase tracking-[0.3em] font-bold text-white/20">Recurso #05</div>
      </nav>

      <div className="container mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6 h-full">
            <div>
              <h1 className="text-4xl font-light tracking-tight mb-4">Typewriter Loop</h1>
              <p className="text-white/40 font-light leading-relaxed">
                Efecto de escritura dinámica con borrado automático y loop infinito. Utiliza un cursor personalizable y una estética de cristal translúcido (Glassmorphism).
              </p>
            </div>

            <div className="bg-[#080808] border border-white/10 rounded-[3rem] flex items-center justify-center relative overflow-hidden min-h-[400px] flex-1">
              <iframe
                key={`${typingText}-${showBackground}-${accentColor}-${useGradient}-${alignment}`}
                srcDoc={`
                  <!DOCTYPE html>
                  <html>
                    <head>
                      <style>
                        body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: #080808; overflow: hidden; }
                        ${getCssCode()}
                        @media (max-width: 600px) { .dynamic-text { font-size: 2.2rem; } .glass-container { padding: 1.5rem; border-radius: 2rem; } }
                      </style>
                    </head>
                    <body>
                      ${htmlCode}
                      <script>${jsCode}</script>
                    </body>
                  </html>
                `}
                className="w-full h-full border-0"
              />
            </div>

            <div className="flex gap-4 opacity-50">
              <div className="px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest">HTML5</div>
              <div className="px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest">CSS3</div>
              <div className="px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest">JavaScript</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 h-full">
            <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl space-y-6">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Texto del Efecto</label>
                <input 
                  type="text" 
                  value={typingText} 
                  onChange={(e) => setTypingText(e.target.value)} 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-white/30 transition-all w-full"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Color de Acento</label>
                  <div className="flex items-center gap-3">
                    <input type="color" value={accentColor} onChange={(e) => setAccentColor(e.target.value)} className="w-12 h-12 bg-transparent border-2 border-white/10 rounded-xl cursor-pointer" />
                    <input type="text" value={accentColor} onChange={(e) => setAccentColor(e.target.value)} className="bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-[10px] font-mono text-white/80 focus:outline-none w-20" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Alineación</label>
                  <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
                    {["left", "center", "right"].map((pos) => (
                      <button
                        key={pos}
                        onClick={() => setAlignment(pos as any)}
                        className={`flex-1 py-2 text-[10px] uppercase tracking-widest font-bold rounded-md transition-all ${alignment === pos ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
                      >
                        {pos === 'left' ? 'Izq' : pos === 'right' ? 'Der' : 'Cen'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Degradado</label>
                  <button 
                    onClick={() => setUseGradient(!useGradient)}
                    className={`w-full py-3 rounded-lg text-[10px] uppercase tracking-[0.2em] font-bold transition-all border ${useGradient ? 'bg-white text-black border-white' : 'bg-transparent text-white border-white/20 hover:border-white'}`}
                  >
                    {useGradient ? 'Activado' : 'Desactivado'}
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Fondo Glass</label>
                  <button 
                    onClick={() => setShowBackground(!showBackground)}
                    className={`w-full py-3 rounded-lg text-[10px] uppercase tracking-[0.2em] font-bold transition-all border ${showBackground ? 'bg-white text-black border-white' : 'bg-transparent text-white border-white/20 hover:border-white'}`}
                  >
                    {showBackground ? 'Activado' : 'Desactivado'}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex-1 flex flex-col">
              <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-6">
                  {["html", "css", "js"].map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab as any)} className={`text-xs uppercase tracking-widest px-3 py-1 rounded-lg transition-all ${activeTab === tab ? "text-white bg-white/10" : "text-white/30 hover:text-white"}`}>
                      {tab === "js" ? "script.js" : tab === "css" ? "style.css" : "index.html"}
                    </button>
                  ))}
                </div>
                <button onClick={handleCopy} className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-all">
                  {copied ? "Copiado!" : "Copiar"}
                </button>
              </div>

              <div className="p-4 overflow-y-auto flex-1 custom-scrollbar max-h-[400px]">
                {renderCodeLines(activeTab === "html" ? htmlCode : activeTab === "css" ? getCssCode() : jsCode)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
      `}</style>
    </main>
  );
}
