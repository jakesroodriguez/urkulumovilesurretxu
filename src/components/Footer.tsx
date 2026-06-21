import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Code2, Clock, ArrowUpRight, ArrowUp, Smartphone, Battery, Wrench } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.88a8.28 8.28 0 004.76 1.5V6.93a4.85 4.85 0 01-1-.24z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const repairOptions = [
    {
      id: "pantalla",
      name: "Pantalla",
      icon: Smartphone,
      time: "Listo en 1 hora",
      message: "Hola! Me gustaría pedir presupuesto para cambiar la pantalla de mi móvil.",
    },
    {
      id: "bateria",
      name: "Batería",
      icon: Battery,
      time: "Listo en 45 min",
      message: "Hola! Me gustaría pedir presupuesto para cambiar la batería de mi móvil.",
    },
    {
      id: "otros",
      name: "Otros",
      icon: Wrench,
      time: "Diagnóstico gratis",
      message: "Hola! Tengo un problema con mi móvil y me gustaría consultar una reparación.",
    },
  ];

  const [activeRepair, setActiveRepair] = useState(repairOptions[0]);

  const isOpenNow = () => {
    const now = new Date();
    const day = now.getDay();
    const h = now.getHours();
    const m = now.getMinutes();
    const t = h * 60 + m;
    if (day === 0) return false;
    if (day === 6) return (t >= 600 && t <= 840) || (t >= 960 && t <= 1200);
    return (t >= 570 && t <= 810) || (t >= 990 && t <= 1230);
  };
  const isOpen = isOpenNow();

  return (
    <footer
      id="contactar"
      className="relative overflow-hidden text-white"
      style={{ background: "var(--gradient-ocean)" }}
    >
      {/* Grid Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      {/* Animated Decorative glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: ["-50%", "-48%", "-50%"],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-40 left-1/4 h-80 w-[600px] rounded-full bg-primary/20 blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 15, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-40 right-0 h-80 w-[400px] rounded-full bg-primary-glow/10 blur-[100px]"
      />

      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand Info & Live Status */}
          <div className="flex flex-col items-start">
            <h3 className="font-heading text-3xl tracking-tight text-white">
              Urkulu <span className="italic text-primary-glow">Móviles</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60 font-body">
              Tu tienda de reparación y accesorios de móviles de confianza en Urretxu, Gipuzkoa. Calidad y rapidez garantizadas.
            </p>
            
            {/* Live Status Badge */}
            <div className="mt-4 flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase border backdrop-blur-md font-body ${
                  isOpen
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    : "bg-red-500/10 border-red-500/30 text-red-400"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-emerald-400 animate-pulse" : "bg-red-500"}`} />
                {isOpen ? "Abierto ahora" : "Cerrado ahora"}
              </span>
            </div>
            
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-glow font-body">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
              Soporte Profesional
            </span>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/40 font-body">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3 text-sm text-white/65 font-body">
              {[
                { label: "Servicios", href: "#servicios" },
                { label: "Ubicación", href: "#ubicacion" },
                { label: "Opiniones", href: "#opiniones" },
                { label: "Productos", href: "#novedades" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={12} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Interactive Repair Estimator */}
          <div>
            <h4 className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-white/40 font-body">
              Presupuesto Rápido
            </h4>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4.5 backdrop-blur-md">
              <div className="flex gap-1.5 mb-3.5">
                {repairOptions.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setActiveRepair(opt)}
                      className={`flex-1 flex flex-col items-center gap-1.5 py-2 px-1 rounded-xl border text-[10px] font-semibold transition-all duration-300 font-body ${
                        activeRepair.id === opt.id
                          ? "bg-white/15 border-primary-glow text-white shadow-[0_0_15px_rgba(var(--primary-glow),0.1)] scale-105"
                          : "bg-white/0 border-white/5 text-white/60 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon size={14} className={activeRepair.id === opt.id ? "text-primary-glow" : "text-white/60"} />
                      <span>{opt.name}</span>
                    </button>
                  );
                })}
              </div>
              <div className="rounded-xl bg-black/25 p-3 text-center border border-white/5">
                <p className="text-xs text-white/80 font-body mb-2.5 flex items-center justify-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
                  {activeRepair.time}
                </p>
                <a
                  href={`https://wa.me/34631946812?text=${encodeURIComponent(activeRepair.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] py-2 text-xs font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#1ebe5a] shadow-[0_4px_12px_rgba(37,211,102,0.2)]"
                >
                  <span>Pedir Presupuesto</span>
                  <ArrowUpRight size={12} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="flex flex-col items-start">
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/40 font-body">
              Contacto y Redes
            </h4>
            <ul className="mb-6 space-y-4 text-sm text-white/70 font-body">
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary-glow">
                  <Phone size={14} />
                </div>
                <a href="tel:+34631946812" className="hover:text-white hover:underline transition-all">
                  631 94 68 12
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary-glow">
                  <MapPin size={14} />
                </div>
                <a
                  href="https://maps.google.com/?q=Urkulu+Móviles+Labeaga+Kalea+27+Urretxu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-all leading-normal"
                >
                  Labeaga Kalea, 27, BAJO 003
                  <br />
                  20700 Urretxu, Gipuzkoa
                </a>
              </li>
            </ul>

            <a
              href="https://www.tiktok.com/@urkulu.moviles2_urretxu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-4.5 py-2.5 text-xs text-white/75 backdrop-blur-md transition-all duration-300 hover:border-[#ff0050]/40 hover:bg-[#ff0050]/10 hover:text-white font-body hover:shadow-[0_0_15px_rgba(255,0,80,0.15)]"
            >
              <TikTokIcon />
              <span>Síguenos en TikTok</span>
              <ArrowUpRight size={12} className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Designer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row text-center sm:text-left">
          <p className="text-xs text-white/40 font-body">
            © {currentYear} Urkulu Móviles. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            {/* Smooth Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-400 backdrop-blur-md transition-all duration-300 hover:border-primary-glow/30 hover:bg-white/10 hover:text-white hover:scale-105 active:scale-95"
              aria-label="Volver arriba"
            >
              <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>

            {/* Premium Designer Credit Card */}
            <a
              href="https://www.instagram.com/jakesroodriguez"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 px-5 py-2 text-zinc-400 backdrop-blur-md transition-all duration-500 hover:border-primary-glow/30 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] active:scale-95"
            >
              <div className="flex items-center justify-center rounded-xl bg-white/5 p-2 transition-all duration-300 group-hover:bg-white/15">
                <Code2
                  size={14}
                  className="transition-all duration-300 group-hover:rotate-[15deg] group-hover:scale-110 text-primary-glow"
                />
              </div>
              <div className="flex flex-col items-start text-left font-body">
                <span className="mb-0.5 text-[8px] font-semibold uppercase tracking-[0.25em] opacity-45">
                  Designed & Built by
                </span>
                <span className="text-xs font-bold tracking-wider text-white/80 transition-colors group-hover:text-white">
                  @jakesroodriguez
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
