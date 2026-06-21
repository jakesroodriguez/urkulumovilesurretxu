import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Code2, Clock, ArrowUpRight, ArrowUp, Smartphone, Battery, Wrench, ChevronDown } from "lucide-react";

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

  const faqs = [
    {
      q: "¿Cuánto tarda la reparación?",
      a: "La mayoría de pantallas y baterías se cambian en 1 hora. Otras reparaciones se diagnostican gratis en el día.",
    },
    {
      q: "¿Las reparaciones tienen garantía?",
      a: "Sí, ofrecemos 3 meses de garantía en todas nuestras reparaciones de pantalla y componentes.",
    },
    {
      q: "¿Necesito cita previa?",
      a: "No es necesario. Puedes pasarte por la tienda en nuestro horario comercial y te atenderemos al momento.",
    },
  ];

  const [activeRepair, setActiveRepair] = useState(repairOptions[0]);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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

      {/* Floating Neon Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-primary-glow/20 pointer-events-none"
          style={{
            width: i % 2 === 0 ? 6 : 4,
            height: i % 2 === 0 ? 6 : 4,
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -35, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1,
          }}
        />
      ))}

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

          {/* Column 2: Navigation Links & Social */}
          <div className="flex flex-col justify-between h-full">
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
                  <motion.a
                    key={link.href}
                    href={link.href}
                    whileHover={{ x: 4, textShadow: "0 0 8px rgba(255,255,255,0.3)" }}
                    className="group flex items-center gap-1 transition-all duration-300 hover:text-white w-fit"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.a>
                ))}
              </nav>
            </div>

            <motion.a
              href="https://www.tiktok.com/@urkulu.moviles2_urretxu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-8 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-4.5 py-2.5 text-xs text-white/75 backdrop-blur-md transition-all duration-300 hover:border-[#ff0050]/40 hover:bg-[#ff0050]/10 hover:text-white font-body hover:shadow-[0_0_15px_rgba(255,0,80,0.15)] w-fit"
            >
              <TikTokIcon />
              <span>Síguenos en TikTok</span>
              <ArrowUpRight size={12} className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
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
                <motion.a
                  href={`https://wa.me/34631946812?text=${encodeURIComponent(activeRepair.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group/btn w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] py-2 text-xs font-bold text-white transition-all duration-300 hover:bg-[#1ebe5a] shadow-[0_4px_12px_rgba(37,211,102,0.2)]"
                >
                  <span>Pedir Presupuesto</span>
                  <ArrowUpRight size={12} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Column 4: Interactive FAQs */}
          <div>
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/40 font-body">
              Preguntas Rápidas
            </h4>
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isExpanded = expandedFaq === index;
                return (
                  <div key={index} className="rounded-xl border border-white/5 bg-white/5 overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-white/10">
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : index)}
                      className="w-full flex items-center justify-between text-left text-[11px] font-semibold text-white/80 hover:text-white transition-colors p-3 font-body gap-2"
                    >
                      <span>{faq.q}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-primary-glow shrink-0"
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-3 pb-3 pt-0 text-[11px] text-white/50 leading-relaxed font-body border-t border-white/5 bg-black/10">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact info bar */}
        <div className="mt-16 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-4.5 backdrop-blur-md sm:grid-cols-2 text-sm text-white/70 font-body">
          <motion.div whileHover={{ y: -2 }} className="flex items-center gap-3.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary-glow">
              <Phone size={14} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">Llámanos</p>
              <a href="tel:+34631946812" className="hover:text-white hover:underline transition-all font-semibold">
                631 94 68 12
              </a>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} className="flex items-start gap-3.5">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary-glow">
              <MapPin size={14} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">Visítanos</p>
              <a
                href="https://maps.google.com/?q=Urkulu+Móviles+Labeaga+Kalea+27+Urretxu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all font-semibold"
              >
                Labeaga Kalea, 27, BAJO 003, 20700 Urretxu, Gipuzkoa
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar: Copyright & Designer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row text-center sm:text-left">
          <p className="text-xs text-white/40 font-body">
            © {currentYear} Urkulu Móviles. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            {/* Smooth Back to Top Button */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-400 backdrop-blur-md transition-all duration-300 hover:border-primary-glow/30 hover:bg-white/10 hover:text-white"
              aria-label="Volver arriba"
            >
              <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </motion.button>

            {/* Original Designer Credit Card */}
            <a
              href="https://www.instagram.com/jakesroodriguez"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-zinc-400 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
            >
              <div className="flex items-center justify-center rounded-full bg-white/10 p-2 transition-colors group-hover:bg-white/20">
                <Code2
                  size={14}
                  className="transition-all duration-300 group-hover:rotate-[15deg] group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col items-start text-left font-body">
                <span className="mb-0.5 text-[9px] font-medium uppercase tracking-[0.2em] opacity-60">
                  Designed & Built by
                </span>
                <span className="text-sm font-bold tracking-wider">
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
