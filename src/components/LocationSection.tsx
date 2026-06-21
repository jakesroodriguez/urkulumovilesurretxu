import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const hours = [
  { day: "Lunes - Viernes", time: "9:30 - 13:30 / 16:30 - 20:30" },
  { day: "Sábado", time: "10:00 - 14:00 / 16:00 - 20:00" },
  { day: "Domingo", time: "Cerrado" },
];

const isOpenNow = () => {
  const now = new Date();
  const day = now.getDay();
  const h = now.getHours();
  const m = now.getMinutes();
  const t = h * 60 + m;
  if (day === 0) return false;
  if (day === 6) return (t >= 600 && t <= 840) || (t >= 960 && t <= 1200);
  return (t >= 570 && t <= 810) || (t >= 990 && t <= 1230);
};

const InfoRow = ({ icon: Icon, label, children }: { icon: typeof MapPin; label: string; children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white"
      style={{ background: "var(--gradient-teal)" }}
    >
      <Icon size={20} />
    </div>
    <div className="flex-1">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground font-body">
        {label}
      </p>
      <div className="text-foreground font-body">{children}</div>
    </div>
  </div>
);

const LocationSection = () => {
  const open = isOpenNow();

  return (
    <section id="ubicacion" className="bg-card py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary font-body">
            Encuéntranos
          </span>
          <h2 className="mt-4 text-4xl text-foreground md:text-5xl">
            Nuestra tienda <span className="italic">en Urretxu</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <InfoRow icon={MapPin} label="Dirección">
              Labeaga Kalea, 27, BAJO 003
              <br />
              <span className="text-muted-foreground">20700 Urretxu, Gipuzkoa</span>
            </InfoRow>

            <InfoRow icon={Phone} label="Teléfono">
              <a
                href="tel:+34631946812"
                className="text-primary transition-colors hover:text-primary/80"
              >
                631 94 68 12
              </a>
            </InfoRow>

            <InfoRow icon={Clock} label="Horario">
              <div className="mb-3 flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    open
                      ? "bg-primary/15 text-primary"
                      : "bg-destructive/15 text-destructive"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      open ? "bg-primary animate-pulse" : "bg-destructive"
                    }`}
                  />
                  {open ? "Abierto ahora" : "Cerrado ahora"}
                </span>
              </div>
              <ul className="space-y-1.5 text-sm">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6 border-b border-border/50 pb-1.5 last:border-0">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-medium text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoRow>

            {/* SEO Service Area Box */}
            <div className="mt-4 rounded-2xl border border-border bg-card/45 p-5 backdrop-blur-sm shadow-elegant">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-primary font-body">
                Área de Servicio · Zerbitzu Eremua
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                Ofrecemos soporte técnico express en toda la comarca de <strong>Urola Garaia</strong> (Urretxu, Zumarraga, Legazpi). También atendemos consultas y realizamos reparaciones para clientes de todo el <strong>País Vasco (Euskadi / Euskal Herria)</strong>, incluyendo Gipuzkoa, Bizkaia y Álava.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-border shadow-elegant"
          >
            <iframe
              title="Urkulu Móviles en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.8!2d-2.3268!3d43.0872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd50a5e5e5e5e5e5%3A0x0!2sLabeaga%20Kalea%2C%2027%2C%2020700%20Urretxu%2C%20Gipuzkoa!5e0!3m2!1ses!2ses!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[400px] w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
