import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const hours = [
  { day: "Lunes - Viernes", time: "10:00 - 13:30 / 16:30 - 20:00" },
  { day: "Sábado", time: "10:00 - 13:30" },
  { day: "Domingo", time: "Cerrado" },
];

const isOpenNow = () => {
  const now = new Date();
  const day = now.getDay(); // 0=Sun
  const h = now.getHours();
  const m = now.getMinutes();
  const t = h * 60 + m;
  if (day === 0) return false;
  if (day === 6) return t >= 600 && t <= 810;
  return (t >= 600 && t <= 810) || (t >= 990 && t <= 1200);
};

const LocationSection = () => {
  const open = isOpenNow();

  return (
    <section id="ubicacion" className="bg-card py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary font-body">
            Encuéntranos
          </span>
          <h2 className="mt-3 text-3xl text-foreground md:text-4xl">
            Nuestra tienda en Urretxu
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin size={22} />
              </div>
              <div>
                <p className="font-medium text-foreground font-body">Dirección</p>
                <p className="text-muted-foreground font-body">
                  Labeaga Kalea, 27, BAJO 003
                  <br />
                  20700 Urretxu, Gipuzkoa
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-medium text-foreground font-body">Teléfono</p>
                <a
                  href="tel:+34631946812"
                  className="text-primary underline-offset-2 hover:underline font-body"
                >
                  631 94 68 12
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock size={22} />
              </div>
              <div>
                <p className="mb-1 font-medium text-foreground font-body">
                  Horario{" "}
                  <span
                    className={`ml-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      open
                        ? "bg-primary/15 text-primary"
                        : "bg-destructive/15 text-destructive"
                    }`}
                  >
                    {open ? "Abierto ahora" : "Cerrado ahora"}
                  </span>
                </p>
                <ul className="space-y-1 text-muted-foreground font-body">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6 text-sm">
                      <span>{h.day}</span>
                      <span className="font-medium text-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <iframe
              title="Urkulu Móviles en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.8!2d-2.3268!3d43.0872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd50a5e5e5e5e5e5%3A0x0!2sLabeaga%20Kalea%2C%2027%2C%2020700%20Urretxu%2C%20Gipuzkoa!5e0!3m2!1ses!2ses!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[350px] w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
