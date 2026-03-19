import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import galleryAltavoces from "@/assets/gallery-altavoces.png";
import galleryMoviles from "@/assets/gallery-moviles.png";
import galleryRelojes from "@/assets/gallery-relojes.png";
import galleryCascos from "@/assets/gallery-cascos.png";

const items = [
  { title: "Altavoces", image: galleryAltavoces },
  { title: "Móviles", image: galleryMoviles },
  { title: "Relojes inteligentes", image: galleryRelojes },
  { title: "Cascos y auriculares", image: galleryCascos },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section id="novedades" className="bg-card py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary font-body">
              Productos
            </span>
            <h2 className="mt-3 text-3xl text-foreground md:text-4xl">
              Nuestros Productos Destacados
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-background"
                onClick={() => setSelected(i)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading text-lg text-foreground">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -right-3 -top-3 z-10 rounded-full bg-background p-2 text-foreground shadow-lg transition-colors hover:bg-muted"
              >
                <X size={20} />
              </button>
              <img
                src={items[selected].image}
                alt={items[selected].title}
                className="max-h-[85vh] rounded-xl object-contain"
              />
              <p className="mt-3 text-center font-heading text-lg text-background">
                {items[selected].title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
