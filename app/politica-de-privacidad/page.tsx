"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function PoliticaPrivacidadPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20">
      {/* Navigation Header */}
      <nav className="p-6 border-b border-white/5 flex justify-between items-center backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm uppercase tracking-widest">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Inicio
        </Link>
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-bold tracking-[0.2em] text-sm hover:opacity-50 transition-opacity">
          <span className="text-red-500">A</span>NIMARE
        </Link>
        <div className="w-20" />
      </nav>

      <div className="container mx-auto px-6 py-24 lg:py-32">
        <article className="max-w-3xl mx-auto space-y-12 animate-slide-up">
          <header className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight">
              Política de <span className="font-semibold italic text-red-500">Privacidad</span>
            </h1>
            <p className="text-white/40 text-sm uppercase tracking-widest">Última actualización: Mayo 2026</p>
          </header>

          <div className="prose prose-invert prose-red max-w-none space-y-8 text-white/70 font-light leading-relaxed">
            <p>
              En Animare (en adelante, “el sitio”), nos comprometemos a proteger la privacidad de los usuarios que visitan nuestra página web y utilizan nuestros servicios.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">1. Información que recopilamos</h2>
              <p>Actualmente, el sitio puede recopilar la siguiente información personal a través de formularios de contacto:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                <li>Nombre</li>
                <li>Correo electrónico</li>
                <li>Número de WhatsApp (opcional)</li>
                <li>Mensaje enviado por el usuario</li>
              </ul>
              <p>Esta información es proporcionada voluntariamente por el usuario al momento de contactarnos.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">2. Finalidad del uso de la información</h2>
              <p>La información recopilada se utiliza para:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                <li>Responder consultas o solicitudes de contacto</li>
                <li>Brindar información sobre nuestros servicios de desarrollo de software</li>
                <li>Dar seguimiento a posibles clientes</li>
                <li>Comunicación directa a través de correo electrónico o WhatsApp</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">3. Almacenamiento de la información</h2>
              <p>Los datos proporcionados pueden ser almacenados en:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                <li>Servicios de correo electrónico (como Gmail u otros proveedores)</li>
                <li>Bases de datos externas seguras (como Supabase)</li>
              </ul>
              <p>Asimismo, el sitio se encuentra alojado en servicios de terceros (como Vercel), los cuales pueden recopilar datos técnicos básicos como dirección IP, tipo de navegador y registros de acceso con fines de funcionamiento y seguridad.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">4. Compartición de datos</h2>
              <p>No vendemos, alquilamos ni compartimos información personal con terceros, salvo en los siguientes casos:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                <li>Cuando sea necesario para el funcionamiento del sitio (proveedores de hosting, bases de datos o correo)</li>
                <li>Cuando sea requerido por ley o autoridad competente</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">5. Cookies y tecnologías de seguimiento</h2>
              <p>Actualmente, el sitio no utiliza herramientas avanzadas de análisis como Google Analytics o píxeles publicitarios. Sin embargo, algunos servicios de hosting pueden utilizar cookies o tecnologías similares para fines técnicos y de seguridad.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">6. Seguridad de la información</h2>
              <p>Se implementan medidas razonables de seguridad para proteger la información personal. No obstante, ningún sistema es completamente seguro, por lo que no se puede garantizar la seguridad absoluta de los datos.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">7. Derechos del usuario</h2>
              <p>El usuario puede solicitar en cualquier momento:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                <li>Acceso a sus datos personales</li>
                <li>Corrección o actualización de su información</li>
                <li>Eliminación de sus datos</li>
              </ul>
              <p>Para ejercer estos derechos, puede contactarnos a través de los medios indicados en esta política.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">8. Uso por menores de edad</h2>
              <p>El sitio está dirigido principalmente a adultos y empresas. No obstante, no se restringe el acceso a menores de edad. En caso de que un menor proporcione información personal, se entiende que lo hace con autorización de sus padres o tutores.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">9. Cambios a esta política</h2>
              <p>Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta misma página con su respectiva fecha de actualización.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">10. Contacto</h2>
              <p>Si tienes dudas sobre esta Política de Privacidad o sobre el uso de tus datos, puedes contactarnos en:</p>
              <ul className="list-none space-y-4 pt-4">
                <li className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Correo principal</span>
                  <a href="mailto:contacto@animare.dev" className="text-white hover:text-red-500 transition-colors">contacto@animare.dev</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Correo adicional</span>
                  <a href="mailto:soporte@animare.dev" className="text-white hover:text-red-500 transition-colors">soporte@animare.dev</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/30">WhatsApp</span>
                  <a href="https://wa.me/526183321927" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">+52 618 332 1927</a>
                </li>
              </ul>
            </section>

            <div className="pt-12 border-t border-white/5 italic text-white/40 text-sm">
              Al utilizar este sitio, aceptas los términos de esta Política de Privacidad.
            </div>
          </div>
        </article>
      </div>

      <footer className="py-24 border-t border-white/5 flex items-center justify-center opacity-20">
        <span className="text-[10vw] font-bold tracking-tighter select-none">
          <span className="text-red-500">A</span>NIMARE
        </span>
      </footer>
    </main>
  );
}
