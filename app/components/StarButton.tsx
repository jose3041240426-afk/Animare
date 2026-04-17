"use client";

import { useEffect, useState } from "react";

export default function StarButton() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/jose3041240426-afk/Animare")
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count) setStars(data.stargazers_count);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="group relative inline-block mt-10">
      <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
      
      <a
        href="https://github.com/jose3041240426-afk/Animare"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
      >
        <svg 
          height="18" 
          viewBox="0 0 16 16" 
          width="18" 
          className="fill-white"
        >
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 01-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 010 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
        
        <span className="text-sm font-light tracking-wide">Star on GitHub</span>

        <div className="h-4 w-[1px] bg-white/20" />

        <div className="flex items-center gap-1 text-white/70">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="w-3 h-3 text-yellow-500 fill-yellow-500"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span className="font-mono text-xs">{stars !== null ? stars : '0'}</span>
        </div>
      </a>
    </div>
  );
}
