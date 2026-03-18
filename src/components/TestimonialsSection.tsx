import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Amaia L.",
    text: "La mejor tienda de móviles de Urretxu. Reparación rápida y a buen precio.",
    rating: 5,
  },
  {
    name: "Mikel G.",
    text: "Excelente servicio y personal muy amable. Me repararon la pantalla en el mismo día.",
    rating: 5,
  },
  {
    name: "Itziar S.",
    text: "Tienen fundas de iPhone preciosas que no encuentras en ningún otro sitio. ¡Totalmente recomendable!",
    rating: 5,
  },
  {
    name: "Jon A.",
    text: "Muy profesionales. Me cambiaron la batería y el móvil funciona como nuevo. Volveré seguro.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="opiniones" className="py-20 md:py-28">
      <div className="container max-w-3xl text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-primary font-body">
          Opiniones · 5.0 ★
        </span>
        <h2 className="mt-3 mb-12 text-3xl text-foreground md:text-4xl">
          Lo que dicen nuestros clientes
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border bg-card p-8 md:p-12"
            >
              <div className="mb-4 flex justify-center gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mb-6 text-xl leading-relaxed text-foreground md:text-2xl">
                "{testimonials[current].text}"
              </blockquote>
              <p className="font-medium text-muted-foreground font-body">
                — {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
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
                    i === current ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
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
