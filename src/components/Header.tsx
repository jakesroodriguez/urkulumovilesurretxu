import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-urkulu.png";
import { useLanguage, TranslationKey } from "@/context/LanguageContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isExtended, setIsExtended] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks: { label: string; href: string; key: TranslationKey }[] = [
    { label: "Servicios", href: "#servicios", key: "nav_servicios" },
    { label: "Ubicación", href: "#ubicacion", key: "nav_ubicacion" },
    { label: "Opiniones", href: "#opiniones", key: "nav_opiniones" },
    { label: "Productos", href: "#novedades", key: "nav_productos" },
  ];

  return (
    <>
      <header
        className={`fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-700 ease-out ${
          scrolled ? "top-3 md:top-4" : "top-5 md:top-6"
        }`}
      >
        <motion.div
          layout
          className={`relative flex items-center justify-between gap-4 rounded-full border border-white/15 bg-black/45 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 ${
            scrolled ? "py-2.5 px-4" : "py-3 px-5"
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
          <motion.a
            layout
            href="#"
            className="relative flex items-center gap-2 rounded-full shrink-0"
          >
            <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
              <img 
                src={logo} 
                alt="Urkulu Móviles" 
                className="absolute w-14 h-14 max-w-none rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] object-cover" 
              />
            </div>
            <AnimatePresence mode="popLayout">
              {isExtended && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-heading text-sm font-bold tracking-tight text-white overflow-hidden whitespace-nowrap hidden sm:inline ml-3.5 mr-2"
                >
                  Urkulu
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>

          {/* Desktop nav */}
          <AnimatePresence>
            {isExtended && (
              <motion.nav
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                className="relative hidden items-center md:flex overflow-hidden whitespace-nowrap"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative rounded-full px-3.5 py-2 text-[13px] font-medium text-white/75 transition-all duration-300 hover:bg-white/10 hover:text-white font-body"
                  >
                    {t(link.key)}
                  </a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>

          <motion.div layout className="flex items-center gap-1.5 shrink-0">
            {/* CTA pill */}
            <AnimatePresence>
              {isExtended && (
                <motion.a
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  href="#contactar"
                  className="relative ml-1 hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-ocean-deep transition-all duration-300 hover:scale-[1.03] hover:bg-white/90 md:inline-flex font-body overflow-hidden whitespace-nowrap"
                >
                  {t("contactar")}
                </motion.a>
              )}
            </AnimatePresence>

            {/* Language Picker */}
            <motion.div layout className="flex items-center gap-0.5 rounded-full bg-white/5 border border-white/10 p-0.5">
              <button
                onClick={() => setLanguage("es")}
                className={`rounded-full px-2 py-1 text-[10px] font-extrabold tracking-wider transition-all duration-300 ${
                  language === "es"
                    ? "bg-gradient-to-r from-primary to-primary-glow text-white shadow-md scale-105"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage("eu")}
                className={`rounded-full px-2 py-1 text-[10px] font-extrabold tracking-wider transition-all duration-300 ${
                  language === "eu"
                    ? "bg-gradient-to-r from-primary to-primary-glow text-white shadow-md scale-105"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                EU
              </button>
            </motion.div>

            {/* Mobile toggle */}
            <AnimatePresence>
              {isExtended && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="relative ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/15 md:hidden"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Menú"
                >
                  {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.button>
              )}
            </AnimatePresence>

            {/* Expand/Collapse Arrow */}
            <motion.button
              layout
              onClick={() => {
                setIsExtended(!isExtended);
                if (isExtended) {
                  setMobileOpen(false);
                }
              }}
              className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-glow text-white shadow-md transition-all hover:scale-105 active:scale-95"
              aria-label={isExtended ? "Contraer menú" : "Expandir menú"}
            >
              <motion.div
                animate={{ rotate: isExtended ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight size={18} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Mobile dropdown */}
        {mobileOpen && isExtended && (
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
                  {t(link.key)}
                </a>
              ))}
              <a
                href="#contactar"
                onClick={() => setMobileOpen(false)}
                className="mt-1 rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-ocean-deep transition-colors hover:bg-white/90 font-body"
              >
                {t("contactar")}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
