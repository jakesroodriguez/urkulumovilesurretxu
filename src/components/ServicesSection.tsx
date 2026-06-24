import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone, ShieldCheck, Headphones } from "lucide-react";
import { useLanguage, TranslationKey } from "@/context/LanguageContext";

const services: { icon: typeof Smartphone; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  {
    icon: Smartphone,
    titleKey: "service_1_title",
    descKey: "service_1_desc",
  },
  {
    icon: ShieldCheck,
    titleKey: "service_2_title",
    descKey: "service_2_desc",
  },
  {
    icon: Headphones,
    titleKey: "service_3_title",
    descKey: "service_3_desc",
  },
];

const ServicesSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.35], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const card1Y = useTransform(scrollYProgress, [0.05, 0.4], [80, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);

  const card2Y = useTransform(scrollYProgress, [0.1, 0.45], [80, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  const card3Y = useTransform(scrollYProgress, [0.15, 0.5], [80, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);

  const cardTransforms = [
    { y: card1Y, opacity: card1Opacity },
    { y: card2Y, opacity: card2Opacity },
    { y: card3Y, opacity: card3Opacity },
  ];

  return (
    <section id="servicios" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary font-body">
            {t("services_sub")}
          </span>
          <h2 className="mt-4 text-4xl text-foreground md:text-5xl">
            Telefono mugikorrak<br />
            <span className="italic text-muted-foreground">{t("services_title")}</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.titleKey}
              style={{
                y: cardTransforms[i].y,
                opacity: cardTransforms[i].opacity,
              }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
            >
              {/* Big number background */}
              <span className="pointer-events-none absolute -right-2 -top-6 font-heading text-[8rem] leading-none text-primary/5 transition-colors group-hover:text-primary/10">
                0{i + 1}
              </span>

              <div className="relative">
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white transition-transform duration-500 group-hover:scale-110"
                  style={{ background: "var(--gradient-teal)" }}
                >
                  <service.icon size={26} />
                </div>
                <h3 className="mb-3 text-xl leading-snug text-foreground">
                  {t(service.titleKey)}
                </h3>
                <p className="leading-relaxed text-muted-foreground font-body">
                  {t(service.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
