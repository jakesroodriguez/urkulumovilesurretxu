import { motion } from "framer-motion";
import { Smartphone, ShieldCheck, Headphones } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Reparación de Pantallas y Baterías",
    description:
      "Reparamos tu móvil con piezas de alta calidad. Servicio rápido y garantizado para todas las marcas.",
  },
  {
    icon: ShieldCheck,
    title: "Fundas Especiales",
    description:
      "Amplio catálogo de fundas exclusivas para iPhone y Android. Protección y estilo para tu dispositivo.",
  },
  {
    icon: Headphones,
    title: "Accesorios y Gadgets",
    description:
      "Cargadores, auriculares, protectores de pantalla y mucho más. Todo lo que necesitas en un solo lugar.",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <span className="text-sm font-medium uppercase tracking-widest text-primary font-body">
          Nuestros servicios
        </span>
        <h2 className="mt-3 text-3xl text-foreground md:text-4xl">
          Telefono mugikorrak — Todo para tu móvil
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon size={28} />
            </div>
            <h3 className="mb-3 text-xl text-foreground">{service.title}</h3>
            <p className="leading-relaxed text-muted-foreground font-body">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
