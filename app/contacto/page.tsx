"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function ContactoPage() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
    emailjs.init("6XAxEDfaVyne0Llde");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const templateParams = {
      from_name: formState.name,
      user_name: formState.name, // Variación común
      name: formState.name,      // Otra variación
      from_email: formState.email,
      reply_to: formState.email, 
      user_email: formState.email, 
      message: formState.message,
      to_name: "Animare Team",
    };

    try {
      await emailjs.send(
        "service_3xcpbwv",
        "template_pwltasy",
        templateParams,
        "6XAxEDfaVyne0Llde"
      );
      
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setIsSubmitting(false);
      setError("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-6 md:p-8 z-50 flex items-center justify-between backdrop-blur-sm bg-black/10">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold tracking-[0.3em] text-white hover:opacity-50 transition-opacity">
            <span className="text-red-500">A</span>NIMARE
          </Link>
        </div>

        <nav className="hidden lg:flex gap-12 text-sm uppercase tracking-[0.2em] font-light text-white/70 flex-grow justify-center -ml-16">
          <Link href="/" className="relative group hover:text-white transition-colors duration-500">
            inicio
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
          </Link>
          <Link href="/recursos" className="relative group hover:text-white transition-colors duration-500">
            recursos
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
          </Link>
          <Link href="/proyectos" className="relative group hover:text-white transition-colors duration-500">
            proyectos
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
          </Link>
          <Link href="/contacto" className="relative group text-white transition-colors duration-500">
            contacto
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transition-all duration-500" />
          </Link>
        </nav>

        <div className="lg:hidden">
          <label className="burger" htmlFor="burger">
            <input type="checkbox" id="burger" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
            <span></span><span></span><span></span>
          </label>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col gap-8 text-center">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white transition-colors">inicio</Link>
          <Link href="/recursos" onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white transition-colors">recursos</Link>
          <Link href="/proyectos" onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white transition-colors">proyectos</Link>
          <Link href="/contacto" onClick={() => setMenuOpen(false)} className="text-2xl uppercase tracking-[0.3em] font-light text-white transition-colors">contacto</Link>
        </nav>
      </div>

      <div className="container mx-auto px-6 py-32 lg:py-48 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Column: Info */}
          <div className="space-y-12 animate-slide-up">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                HABLEMOS DE TU <br />
                <span className="font-light italic text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">PROYECTO</span>
              </h1>
              <p className="text-white/40 text-xl font-light leading-relaxed max-w-lg">
                ¿Tienes una visión? Nosotros tenemos la ingeniería. Estamos listos para transformar tus ideas en realidades digitales de alto impacto.
              </p>
            </div>

            {/* Desktop Contact Cards (Hidden on mobile) */}
            <div className="hidden lg:flex flex-col gap-6 w-full max-w-md">
              <div className="group flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Escríbenos</p>
                  <p className="text-lg font-light">contacto@animare.dev</p>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.605 6.006L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.635 0 12.032-5.396 12.035-12.032a11.76 11.76 0 00-3.417-8.481z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">WhatsApp</p>
                  <p className="text-lg font-light">+52 618 332 1927</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-0 bg-red-500/5 blur-[100px] -z-10 rounded-full" />
            
            <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
              {submitted ? (
                <div className="py-20 text-center space-y-6 animate-fade-in">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-8">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold">¡Mensaje Enviado!</h3>
                  <p className="text-white/40">Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-2 group">
                      <label className="text-[10px] uppercase tracking-widest text-white/20 group-focus-within:text-red-500 transition-colors">Nombre Completo</label>
                      <input 
                        required
                        type="text" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        placeholder="Juan Pérez"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-red-500/50 transition-all"
                      />
                    </div>

                    <div className="space-y-2 group">
                      <label className="text-[10px] uppercase tracking-widest text-white/20 group-focus-within:text-red-500 transition-colors">Correo Electrónico</label>
                      <input 
                        required
                        type="email" 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        placeholder="juan@ejemplo.com"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-red-500/50 transition-all"
                      />
                    </div>

                    <div className="space-y-2 group">
                      <label className="text-[10px] uppercase tracking-widest text-white/20 group-focus-within:text-red-500 transition-colors">Tu Mensaje</label>
                      <textarea 
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        placeholder="Cuéntanos sobre tu idea..."
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-red-500/50 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-500 text-xs font-light animate-pulse">{error}</p>
                  )}

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-red-600 hover:bg-red-500 disabled:bg-red-900 disabled:cursor-not-allowed text-white rounded-2xl font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Enviar Propuesta
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Mobile Contact Cards (Hidden on PC) */}
            <div className="lg:hidden mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-widest text-white/30 mb-0.5">Escríbenos</p>
                  <p className="text-sm font-light">contacto@animare.dev</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.605 6.006L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.635 0 12.032-5.396 12.035-12.032a11.76 11.76 0 00-3.417-8.481z" /></svg>
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-widest text-white/30 mb-0.5">WhatsApp</p>
                  <p className="text-sm font-light">+52 618 332 1927</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-12 border-t border-white/5 flex flex-col items-center gap-4 opacity-20 relative z-10">
        <span className="text-[5vw] font-bold tracking-tighter select-none"><span className="text-red-500">A</span>NIMARE.CONTACTO</span>
      </footer>

      <style jsx global>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
