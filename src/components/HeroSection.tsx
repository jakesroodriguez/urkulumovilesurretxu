import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Code2 } from "lucide-react";
import heroImg from "@/assets/hero-tienda.png";
import { useLanguage } from "@/context/LanguageContext";

const whatsappUrl =
  "https://wa.me/34631946812?text=Hola%20Urkulu%20M%C3%B3viles%2C%20me%20gustar%C3%ADa%20consultar%20sobre...";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const HeroSection = () => {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();

  const yText = useTransform(scrollYProgress, [0, 0.4], [0, -100]);
  const opacityText = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const scaleBg = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <motion.img
        style={{ scale: scaleBg }}
        src={heroImg}
        alt="Tienda Urkulu Móviles en Urretxu, Gipuzkoa"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      {/* Subtle vignette / glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--ocean-deep)/0.4)_100%)]" />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero-overlay)" }}
      />

      {/* Bottom fade-out gradient to blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 flex h-full flex-col items-center justify-center pb-8 md:pb-16 px-6 text-center text-white"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-white/80 backdrop-blur-md font-body"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
          {t("hero_welcome")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-heading text-6xl leading-[1.05] tracking-tight md:text-8xl lg:text-[6.5rem] font-bold"
        >
          {t("hero_title")}{" "}
          <span className="italic text-gradient">{t("hero_title_highlight")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-7 max-w-2xl text-base text-white/80 md:text-lg leading-relaxed font-body"
        >
          {t("hero_desc")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.03] hover:bg-[#1ebe5a] font-body"
          >
            <WhatsAppIcon />
            {t("hero_cta_whatsapp")}
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/10 font-body"
          >
            {t("hero_cta_services")}
          </a>
        </motion.div>
      </motion.div>

      {/* Designer Credit Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="https://www.instagram.com/jakesroodriguez"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 rounded-full border border-primary-glow/20 bg-white/5 px-4 py-2 text-white/80 backdrop-blur-md transition-all duration-500 shadow-[0_0_20px_hsl(var(--primary-glow)/0.35)] hover:border-primary-glow/50 hover:text-white hover:shadow-[0_0_25px_hsl(var(--primary-glow)/0.55)] hover:scale-[1.03] active:scale-95"
        >
          <div className="flex items-center justify-center rounded-full bg-white/10 p-1.5 transition-colors group-hover:bg-white/20">
            <Code2
              size={12}
              className="transition-all duration-300 group-hover:rotate-[15deg] group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col items-start text-left font-body">
            <span className="text-[8px] font-medium uppercase tracking-[0.2em] opacity-60 leading-none mb-0.5">
              Designed & Built by
            </span>
            <span className="text-xs font-bold tracking-wider leading-none">
              @jakesroodriguez
            </span>
          </div>
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-primary/70 transition-colors hover:text-primary"
        aria-label={t("hero_scroll")}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
