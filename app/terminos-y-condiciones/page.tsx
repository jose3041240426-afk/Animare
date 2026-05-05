"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TerminosCondicionesPage() {
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
              Términos y <span className="font-semibold italic text-red-500">Condiciones</span>
            </h1>
            <p className="text-white/40 text-sm uppercase tracking-widest">Última actualización: Mayo 2026</p>
          </header>

          <div className="prose prose-invert prose-red max-w-none space-y-8 text-white/70 font-light leading-relaxed">
            <p>
              Bienvenido a Animare (en adelante, “el titular”). Al acceder y utilizar este sitio web, aceptas los presentes Términos y Condiciones. Si no estás de acuerdo, te recomendamos no utilizar el sitio.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">1. Servicios ofrecidos</h2>
              <p>El titular ofrece, de manera enunciativa mas no limitativa:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                <li>Desarrollo de software a medida</li>
                <li>Creación de páginas web</li>
                <li>Venta de plantillas digitales</li>
                <li>Recursos de diseño gratuitos</li>
                <li>Servicios de mantenimiento y soporte</li>
                <li>Desarrollo de sistemas como puntos de venta</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">2. Uso del sitio</h2>
              <p>El usuario se compromete a utilizar el sitio de forma legal y adecuada, absteniéndose de:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                <li>Realizar actividades ilícitas</li>
                <li>Intentar vulnerar la seguridad del sitio</li>
                <li>Usar los servicios con fines fraudulentos</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">3. Pagos y contratación</h2>
              <p>Los servicios podrán ser contratados mediante:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                <li>Transferencia bancaria</li>
                <li>Plataformas de pago como Stripe u otros proveedores</li>
              </ul>
              <div className="bg-white/5 border-l-2 border-red-500 p-6 rounded-r-xl space-y-2">
                <p className="text-white font-medium">Para proyectos personalizados:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Se podrá requerir un anticipo antes de iniciar el trabajo</li>
                  <li>El saldo restante deberá ser cubierto en los términos acordados</li>
                </ul>
              </div>
              <p>El incumplimiento de pago podrá resultar en la suspensión o cancelación del servicio.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-normal text-white tracking-tight">4. Entrega de productos y servicios</h2>
              
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white/90">4.1 Plantillas digitales</h3>
                <ul className="list-disc pl-6 space-y-1 marker:text-red-500/50">
                  <li>Las plantillas serán entregadas mediante descarga directa una vez confirmado el pago</li>
                  <li>El acceso al contenido se habilitará automáticamente o mediante enlace</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white/90">4.2 Proyectos personalizados</h3>
                <p>La entrega podrá realizarse mediante:</p>
                <ul className="list-disc pl-6 space-y-1 marker:text-red-500/50">
                  <li>Publicación en línea (URL funcional)</li>
                  <li>Entrega directa al cliente</li>
                </ul>
                <p className="bg-red-500/10 text-red-400 p-4 rounded-lg border border-red-500/20 text-sm">
                  <strong>Importante:</strong> Por defecto, no se incluye la entrega del código fuente, salvo que se acuerde expresamente como servicio adicional con costo extra.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white/90">4.3 Soporte y mantenimiento</h3>
                <ul className="list-disc pl-6 space-y-1 marker:text-red-500/50">
                  <li>El soporte se brinda a través de correo electrónico y/o WhatsApp</li>
                  <li>Las condiciones específicas podrán variar según el servicio contratado</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">5. Política de reembolsos</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                <li>No se realizan reembolsos en productos digitales una vez entregados</li>
                <li>En servicios personalizados, el reembolso solo podrá considerarse si el trabajo no ha sido iniciado</li>
                <li>Una vez iniciado el proyecto, no se garantiza ningún tipo de reembolso total o parcial</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">6. Propiedad intelectual</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                <li>Todo el contenido, código, diseño y materiales desarrollados por el titular son propiedad del mismo, salvo acuerdo contrario</li>
                <li>El usuario no adquiere derechos sobre el código fuente, salvo que se haya contratado explícitamente</li>
                <li>Queda prohibida la reventa, distribución o modificación no autorizada de los productos digitales</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">7. Limitación de responsabilidad</h2>
              <p>El titular no será responsable por:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                <li>Errores, fallos o interrupciones en el software</li>
                <li>Pérdidas económicas derivadas del uso de los servicios</li>
                <li>Daños indirectos o consecuenciales</li>
                <li>Uso indebido de los productos por parte del cliente</li>
              </ul>
              <p className="italic">El usuario acepta que el uso de los servicios es bajo su propio riesgo.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">8. Disponibilidad del servicio</h2>
              <p>El titular no garantiza que el sitio o los servicios estén disponibles en todo momento ni libres de errores, aunque se procurará mantener su correcto funcionamiento.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">9. Modificaciones</h2>
              <p>El titular se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán publicadas en el sitio.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">10. Legislación aplicable</h2>
              <p>Estos términos se regirán conforme a las leyes aplicables en México, sin perjuicio de la aplicación de normativas internacionales cuando corresponda.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-white tracking-tight">11. Contacto</h2>
              <ul className="list-none space-y-4 pt-4">
                <li className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Correo de contacto</span>
                  <a href="mailto:contacto@animare.dev" className="text-white hover:text-red-500 transition-colors">contacto@animare.dev</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Soporte técnico</span>
                  <a href="mailto:soporte@animare.dev" className="text-white hover:text-red-500 transition-colors">soporte@animare.dev</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/30">WhatsApp</span>
                  <a href="https://wa.me/526183321927" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">+52 618 332 1927</a>
                </li>
              </ul>
            </section>

            <div className="pt-12 border-t border-white/5 italic text-white/40 text-sm">
              Al utilizar este sitio, aceptas estos Términos y Condiciones.
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
