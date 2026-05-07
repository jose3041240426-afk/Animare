"use client";

export default function GlassBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mesh Gradients - RED THEME */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-red-950/30 blur-[150px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-red-900/20 blur-[150px]" />
      <div className="absolute top-[20%] right-[-5%] w-[45%] h-[45%] rounded-full bg-red-800/10 blur-[120px]" />
      
      {/* Glassy Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
    </div>
  );
}
