import { Phone } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.88a8.28 8.28 0 004.76 1.5V6.93a4.85 4.85 0 01-1-.24z" />
  </svg>
);

const Footer = () => (
  <footer id="contactar" className="border-t border-border bg-foreground py-12">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-xl text-primary-foreground">
            Urkulu Móviles
          </h3>
          <p className="mt-2 text-sm text-primary-foreground/60 font-body">
            Tu tienda de reparación y accesorios de móviles en Urretxu, Gipuzkoa.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80 font-body">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60 font-body">
            <li className="flex items-center gap-2">
              <Phone size={14} />
              <a href="tel:+34631946812" className="hover:text-primary-foreground">
                631 94 68 12
              </a>
            </li>
            <li>Labeaga Kalea, 27, BAJO 003</li>
            <li>20700 Urretxu, Gipuzkoa</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80 font-body">
            Síguenos
          </h4>
          <a
            href="https://www.tiktok.com/@urkulumoviles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground font-body"
          >
            <TikTokIcon />
            TikTok
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40 font-body">
        © {new Date().getFullYear()} Urkulu Móviles. Todos los derechos reservados. · Made by{" "}
        <a
          href="https://www.instagram.com/jakesroodriguez/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          @jakesroodriguez
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
