import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage, TranslationKey } from "@/context/LanguageContext";

const testimonials: { name: string; textKey: TranslationKey; rating: number }[] = [
  {
    name: "Amaia L.",
    textKey: "testimonial_1",
    rating: 5,
  },
  {
    name: "Mikel G.",
    textKey: "testimonial_2",
    rating: 5,
  },
  {
    name: "Itziar S.",
    textKey: "testimonial_3",
    rating: 5,
  },
  {
    name: "Jon A.",
    textKey: "testimonial_4",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.35], [50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const carouselScale = useTransform(scrollYProgress, [0.05, 0.45], [0.95, 1]);
  const carouselOpacity = useTransform(scrollYProgress, [0.05, 0.4], [0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="opiniones" ref={sectionRef} className="py-24 md:py-32">
      <div className="container max-w-3xl text-center">
        <motion.div style={{ y: headerY, opacity: headerOpacity }}>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary font-body">
            {t("testimonials_sub")}
          </span>
          <h2 className="mb-14 mt-4 text-4xl text-foreground md:text-5xl">
            {t("testimonials_title")}
          </h2>
        </motion.div>

        <motion.div style={{ scale: carouselScale, opacity: carouselOpacity }} className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-soft md:p-14"
            >
              <Quote
                size={120}
                className="pointer-events-none absolute -left-4 -top-4 text-primary/5"
                strokeWidth={1}
              />
              <div className="relative">
                <div className="mb-5 flex justify-center gap-1">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mb-7 font-heading text-2xl leading-relaxed text-foreground md:text-3xl">
                  "{t(testimonials[current].textKey)}"
                </blockquote>
                <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground font-body">
                  — {testimonials[current].name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
