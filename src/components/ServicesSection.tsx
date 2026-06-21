import { motion } from "framer-motion";
import { Smartphone, ShieldCheck, Headphones } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Soporte Técnico Express",
    description:
      "Recupera el rendimiento de tu móvil. Cambiamos tu pantalla rota o batería gastada en menos de 1 hora, utilizando componentes de máxima calidad con garantía certificada.",
  },
  {
    icon: ShieldCheck,
    title: "Fundas de Autor y Estilo",
    description:
      "Viste tu dispositivo con personalidad y protección. Descubre nuestra cuidada selección de fundas exclusivas diseñadas para absorber impactos sin comprometer la estética.",
  },
  {
    icon: Headphones,
    title: "Accesorios y Gadgets Premium",
    description:
      "Equípate con accesorios de alta fidelidad. Desde protectores de hidrogel cortados a medida hasta cargadores inteligentes ultra-rápidos y auriculares de sonido envolvente.",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="relative py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary font-body">
          Nuestros servicios
        </span>
        <h2 className="mt-4 text-4xl text-foreground md:text-5xl">
          Telefono mugikorrak<br />
          <span className="italic text-muted-foreground">Todo para tu móvil</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
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
                {service.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground font-body">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
