import { Phone, MapPin, Code2 } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.88a8.28 8.28 0 004.76 1.5V6.93a4.85 4.85 0 01-1-.24z" />
  </svg>
);

const Footer = () => (
  <footer
    id="contactar"
    className="relative overflow-hidden text-white"
    style={{ background: "var(--gradient-ocean)" }}
  >
    {/* Decorative glow */}
    <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

    <div className="container relative py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-2xl tracking-tight">
            Urkulu Móviles
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60 font-body">
            Tu tienda de reparación y accesorios de móviles en Urretxu, Gipuzkoa.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 font-body">
            Contacto
          </h4>
          <ul className="space-y-3 text-sm text-white/70 font-body">
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-primary-glow" />
              <a href="tel:+34631946812" className="hover:text-white transition-colors">
                631 94 68 12
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-1 text-primary-glow" />
              <span>
                Labeaga Kalea, 27, BAJO 003
                <br />
                20700 Urretxu, Gipuzkoa
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 font-body">
            Síguenos
          </h4>
          <a
            href="https://www.tiktok.com/@urkulu.moviles2_urretxu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10 hover:text-white font-body"
          >
            <TikTokIcon />
            TikTok
          </a>
        </div>
      </div>

      {/* Author button */}
      <div className="mt-14 flex justify-center border-t border-white/10 pt-8">
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
  </footer>
);

export default Footer;
