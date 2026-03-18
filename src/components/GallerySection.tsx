import { motion } from "framer-motion";

const items = [
  {
    title: "Fundas iPhone exclusivas",
    description: "Nuevos diseños de temporada",
    placeholder: "Foto de fundas de iPhone exclusivas con diseños únicos",
  },
  {
    title: "Reparación express",
    description: "Pantallas en 30 minutos",
    placeholder: "Técnico reparando una pantalla de móvil",
  },
  {
    title: "Accesorios premium",
    description: "AirPods, cargadores y más",
    placeholder: "Exposición de accesorios de móvil premium",
  },
  {
    title: "Protectores de cristal",
    description: "Instalación gratuita",
    placeholder: "Instalación de protector de pantalla de cristal templado",
  },
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
          Novedades
        </span>
        <h2 className="mt-3 text-3xl text-foreground md:text-4xl">
          Lo último en la tienda
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
            {/* Placeholder image area */}
            <div className="flex aspect-square items-center justify-center bg-muted p-6 text-center">
              <p className="text-sm text-muted-foreground font-body">
                📷 {item.placeholder}
              </p>
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground font-body">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
