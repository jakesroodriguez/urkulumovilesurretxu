import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amaia L.",
    text: "Sin duda, el mejor servicio técnico de toda la zona. Tenía la pantalla de mi iPhone rota, me la cambiaron en apenas 45 minutos y el resultado es impecable. Un trato de diez.",
    rating: 5,
  },
  {
    name: "Mikel G.",
    text: "Trato supercercano y profesional. Les llevé un móvil que no cargaba y lo solucionaron en el mismo día con total transparencia en el precio. Muy recomendables.",
    rating: 5,
  },
  {
    name: "Itziar S.",
    text: "Tienen una selección de fundas preciosa y de una calidad brutal que no se encuentra en ningún otro lado. Además, me colocaron un protector de hidrogel a medida en cinco minutos.",
    rating: 5,
  },
  {
    name: "Jon A.",
    text: "Atención al cliente excepcional. Cambié la batería de mi dispositivo y vuelve a rendir como el primer día. Explicaciones claras, rapidez y máxima confianza.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="opiniones" className="py-24 md:py-32">
      <div className="container max-w-3xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary font-body">
          Opiniones · 5.0 ★
        </span>
        <h2 className="mb-14 mt-4 text-4xl text-foreground md:text-5xl">
          Lo que dicen <span className="italic">nuestros clientes</span>
        </h2>

        <div className="relative">
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
                  "{testimonials[current].text}"
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
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
