import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { useLanguage, TranslationKey } from "@/context/LanguageContext";

const hours: { dayKey: TranslationKey; timeKey?: TranslationKey; time?: string }[] = [
  { dayKey: "day_weekday", time: "9:30 - 13:30 / 16:30 - 20:30" },
  { dayKey: "day_saturday", time: "10:00 - 14:00 / 16:00 - 20:00" },
  { dayKey: "day_sunday", timeKey: "time_closed" },
];

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

const InfoRow = ({ icon: Icon, label, children }: { icon: typeof MapPin; label: string; children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white"
      style={{ background: "var(--gradient-teal)" }}
    >
      <Icon size={20} />
    </div>
    <div className="flex-1">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground font-body">
        {label}
      </p>
      <div className="text-foreground font-body">{children}</div>
    </div>
  </div>
);

const LocationSection = () => {
  const open = isOpenNow();
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.35], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const leftX = useTransform(scrollYProgress, [0.05, 0.45], [-50, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0.05, 0.4], [0, 1]);

  const rightX = useTransform(scrollYProgress, [0.1, 0.5], [50, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);

  return (
    <section id="ubicacion" ref={sectionRef} className="bg-card py-24 md:py-32">
      <div className="container">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary font-body">
            {t("location_sub")}
          </span>
          <h2 className="mt-4 text-4xl text-foreground md:text-5xl">
            {t("location_title")}
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            style={{ x: leftX, opacity: leftOpacity }}
            className="flex flex-col gap-8"
          >
            <InfoRow icon={MapPin} label={t("location_dir")}>
              Labeaga Kalea, 27, BAJO 003
              <br />
              <span className="text-muted-foreground">20700 Urretxu, Gipuzkoa</span>
            </InfoRow>

            <InfoRow icon={Phone} label={t("location_phone")}>
              <a
                href="tel:+34631946812"
                className="text-primary transition-colors hover:text-primary/80"
              >
                631 94 68 12
              </a>
            </InfoRow>

            <InfoRow icon={Clock} label={t("location_hours")}>
              <div className="mb-3 flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    open
                      ? "bg-primary/15 text-primary"
                      : "bg-destructive/15 text-destructive"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      open ? "bg-primary animate-pulse" : "bg-destructive"
                    }`}
                  />
                  {open ? t("location_open") : t("location_closed")}
                </span>
              </div>
              <ul className="space-y-1.5 text-sm">
                {hours.map((h) => (
                  <li key={h.dayKey} className="flex justify-between gap-6 border-b border-border/50 pb-1.5 last:border-0">
                    <span className="text-muted-foreground">{t(h.dayKey)}</span>
                    <span className="font-medium text-foreground">
                      {h.timeKey ? t(h.timeKey) : h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoRow>

            {/* SEO Service Area Box */}
            <div className="mt-4 rounded-2xl border border-border bg-card/45 p-5 backdrop-blur-sm shadow-elegant">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-primary font-body">
                {t("location_service_area_title")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                {t("location_service_area_desc")}
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ x: rightX, opacity: rightOpacity }}
            className="overflow-hidden rounded-3xl border border-border shadow-elegant"
          >
            <iframe
              title="Urkulu Móviles en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.8!2d-2.3268!3d43.0872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd50a5e5e5e5e5e5%3A0x0!2sLabeaga%20Kalea%2C%2027%2C%2020700%20Urretxu%2C%20Gipuzkoa!5e0!3m2!1ses!2ses!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[400px] w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
