"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-transparent pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-8 col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-[0.3em] text-white">
              <span className="text-red-500">A</span>NIMARE
            </Link>
            <p className="text-white/40 font-light leading-relaxed max-w-xs">
              Transformando visiones técnicas en realidades digitales de alto impacto. 
              Software de vanguardia con estética editorial.
            </p>
            <div className="flex gap-6">
              {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-white/20 mb-8">Compañía</h4>
            <ul className="space-y-4">
              {['Inicio', 'Proyectos', 'Recursos', 'Contacto'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Inicio' ? '/' : `/${link.toLowerCase()}`} className="text-sm font-light text-white/60 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-white/20 mb-8">Servicios</h4>
            <ul className="space-y-4">
              {['Desarrollo Web', 'UI/UX Design', 'Apps Móviles', 'Puntos de Venta'].map((service) => (
                <li key={service} className="text-sm font-light text-white/60">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-8 col-span-2 lg:col-span-1">
            <h4 className="text-[10px] uppercase tracking-widest text-white/20 mb-8">Correo de Soporte</h4>
            <a 
              href="mailto:Soporte@animare.dev" 
              className="inline-block bg-white/[0.03] border border-white/10 rounded-full px-6 py-4 text-sm font-light text-white hover:border-white/30 hover:bg-white/[0.05] transition-all"
            >
              Soporte@animare.dev
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            © 2026 Animare Software Company. Todos los derechos reservados.
          </p>
          <div className="flex gap-12">
            <Link href="/politica-de-privacidad" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Términos</Link>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[150px] -z-10" />
    </footer>
  );
}
