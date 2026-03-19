import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-tienda.png";

const HeroSection = () => {
  const whatsappUrl =
    "https://wa.me/34631946812?text=Hola%20Urkulu%20M%C3%B3viles%2C%20me%20gustar%C3%ADa%20consultar%20sobre...";

  return (
    <section className="relative overflow-hidden bg-card">
      <div className="container grid min-h-[85vh] items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary font-body">
            Ongi etorri · Urretxu, Gipuzkoa
          </span>
          <h1 className="text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            Expertos en reparación de móviles en Urretxu
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground font-body">
            Tu tienda de confianza para fundas exclusivas, accesorios y servicio
            técnico profesional.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button size="lg" asChild>
              <a href="#contactar">Pedir Presupuesto</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={heroImg}
              alt="Reparación de móviles en Urkulu Móviles, Urretxu"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl bg-primary/10" />
          <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-accent" />
        </motion.div>
      </div>
    </section>
  );
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default HeroSection;
