import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
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
      <section id="novedades" className="bg-card py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary font-body">
              Productos
            </span>
            <h2 className="mt-4 text-4xl text-foreground md:text-5xl">
              Nuestros Productos <span className="italic">Destacados</span>
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <motion.button
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setSelected(i)}
                className="group relative overflow-hidden rounded-3xl border border-border bg-background text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                    <Maximize2 size={14} />
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading text-lg text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                </div>
              </motion.button>
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
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ocean-deep/90 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -right-3 -top-3 z-10 rounded-full bg-white p-2 text-foreground shadow-lg transition-colors hover:bg-muted"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>
              <img
                src={items[selected].image}
                alt={items[selected].title}
                className="max-h-[85vh] rounded-2xl object-contain shadow-elegant"
              />
              <p className="mt-4 text-center font-heading text-xl text-white">
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
