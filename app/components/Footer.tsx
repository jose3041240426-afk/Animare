"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-transparent pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
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
              {['Desarrollo Web', 'UI/UX Design', 'Apps Móviles', 'Consultoría'].map((service) => (
                <li key={service} className="text-sm font-light text-white/60">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-widest text-white/20 mb-8">Newsletter</h4>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-full px-6 py-4 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-black text-[10px] uppercase tracking-widest px-6 rounded-full hover:bg-white/90 transition-colors">
                Unirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            © 2026 Animare Software Company. Todos los derechos reservados.
          </p>
          <div className="flex gap-12">
            <Link href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Términos</Link>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[150px] -z-10" />
    </footer>
  );
}
