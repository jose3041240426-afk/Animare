import Hero from "./components/Hero";
import LaptopMockup from "./components/LaptopMockup";
import ScrollText from "./components/ScrollText";
import StarRepo from "./components/StarRepo";
import TechStack from "./components/TechStack";
import ExpandableCards from "./components/ExpandableCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Hero />
      <ScrollText />
      <div className="container mx-auto px-6 py-12 md:py-32 relative z-20">
        {/* ... existing grid code ... */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-32">
          <div className="animate-slide-up order-2 lg:order-1">
            <LaptopMockup />
          </div>
          
          <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-16 animate-slide-up order-1 lg:order-2" style={{ animationDelay: '200ms' }}>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
              Innovación <br />
              <span className="font-semibold italic text-red-500">Sin Límites</span>
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
              En Animare, no solo escribimos código. Construimos los cimientos de tu próximo gran éxito digital con una atención obsesiva al detalle y un diseño que respira.
            </p>
            <div className="space-y-6">
              {[
                { label: "Rendimiento", value: "Optimización extrema para una carga instantánea." },
                { label: "Diseño", value: "Estética minimalista y moderna tipo editorial." },
                { label: "Escalabilidad", value: "Arquitecturas robustas preparadas para el futuro." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <div>
                    <h4 className="text-white/80 font-medium mb-1">{item.label}</h4>
                    <p className="text-white/30 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ExpandableCards />
      <TechStack />
    </main>
  );
}
