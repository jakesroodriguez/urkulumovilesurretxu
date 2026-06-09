import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-urkulu.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Opiniones", href: "#opiniones" },
    { label: "Productos", href: "#novedades" },
  ];

  return (
    <>
      {/* Floating "Dynamic Island" navigation */}
      <header
        className={`fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-700 ease-out ${
          scrolled ? "top-3 md:top-4" : "top-5 md:top-6"
        }`}
      >
        <div
          className={`relative flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-2 py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-700 ease-out md:gap-1 md:px-3 ${
            scrolled ? "md:py-2" : "md:py-2.5"
          }`}
          style={{
            boxShadow:
              "inset 0 1px 0 0 rgba(255,255,255,0.15), inset 0 -1px 0 0 rgba(255,255,255,0.05), 0 20px 50px -15px rgba(0,0,0,0.5)",
          }}
        >
          {/* Liquid glass highlight */}
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute -top-1/2 left-1/4 h-full w-1/2 rounded-full bg-white/10 blur-2xl" />
          </span>

          {/* Logo + brand */}
          <a
            href="#"
            className="relative flex items-center gap-2 rounded-full bg-white/5 py-1.5 pl-2 pr-3 transition-colors hover:bg-white/10"
          >
            <img src={logo} alt="Urkulu Móviles" className="h-7 w-7 rounded-full" />
            <span className="hidden font-heading text-sm tracking-tight text-white sm:inline">
              Urkulu
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="relative hidden items-center md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative rounded-full px-3.5 py-2 text-[13px] font-medium text-white/75 transition-all duration-300 hover:bg-white/10 hover:text-white font-body"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA pill */}
          <a
            href="#contactar"
            className="relative ml-1 hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-ocean-deep transition-all duration-300 hover:scale-[1.03] hover:bg-white/90 md:inline-flex font-body"
          >
            Contactar
          </a>

          {/* Mobile toggle */}
          <button
            className="relative ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/15 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div
            className="absolute left-1/2 top-full mt-3 w-[min(92vw,360px)] -translate-x-1/2 rounded-3xl border border-white/15 bg-black/50 p-3 shadow-2xl backdrop-blur-2xl backdrop-saturate-150 md:hidden animate-fade-in"
            style={{
              boxShadow:
                "inset 0 1px 0 0 rgba(255,255,255,0.15), 0 20px 50px -15px rgba(0,0,0,0.5)",
            }}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white font-body"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contactar"
                onClick={() => setMobileOpen(false)}
                className="mt-1 rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-ocean-deep transition-colors hover:bg-white/90 font-body"
              >
                Contactar
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
