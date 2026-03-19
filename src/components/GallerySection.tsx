import { motion } from "framer-motion";
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

const GallerySection = () => (
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
            className="group overflow-hidden rounded-2xl border border-border bg-background"
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
);

export default GallerySection;
