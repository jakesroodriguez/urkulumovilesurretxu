## Objetivo

Llevar la landing de Urkulu Móviles a un nivel premium con paleta Ocean Deep, hero rediseñado con imagen full-bleed + texto centrado + CTAs WhatsApp, secciones más cuidadas y nuevo botón de autor (glassmorphism) en el footer.

## 1. Sistema de diseño (src/index.css + tailwind.config.ts)

Paleta Ocean Deep aplicada como tokens HSL:
- `--background`: off-white cálido se mantiene en secciones claras
- `--foreground`: navy profundo `#0c2340`
- `--primary`: teal `#2d8a9e` (CTAs)
- `--primary-glow`: `#5cbdb9` (acentos/glow)
- `--ocean-deep`: `#0c2340` (hero/footer)
- `--ocean-mid`: `#1a4a6e`
- Gradientes nuevos: `--gradient-ocean` (deep → mid), `--gradient-hero-overlay` (navy 80% → 30%)
- Sombras: `--shadow-elegant`, `--shadow-glow` (teal)
- Transiciones: `--transition-smooth` (cubic-bezier)

Tipografía: mantiene DM Serif Display (headings) + DM Sans (body).

## 2. Hero rediseñado (HeroSection.tsx)

Estructura solicitada por el usuario:
```text
┌─────────────────────────────────────┐
│   [Imagen tienda full-bleed]        │
│   [Overlay navy gradient]           │
│                                     │
│         Ongi etorri · Urretxu       │
│      Expertos en reparación         │  ← H1 centrado, serif grande
│         de móviles                  │
│      subtítulo elegante             │
│                                     │
│      [WhatsApp]  [Presupuesto]      │  ← CTAs centrados, debajo
│                                     │
│             ↓ scroll                │
└─────────────────────────────────────┘
```

- `min-h-screen`, imagen como `background` con `object-cover`
- Overlay con `--gradient-hero-overlay` para legibilidad
- Texto blanco centrado verticalmente (medio), CTAs más abajo
- Botón WhatsApp en verde WhatsApp + botón outline glassmorphism
- Indicador de scroll animado
- Animaciones de entrada escalonadas con framer-motion

## 3. Mejoras en el resto de secciones

- **Header**: glass effect (`backdrop-blur-xl`, borde sutil), logo + nombre más refinados, link activo subrayado animado.
- **ServicesSection**: cards con borde fino, hover con elevación + glow teal sutil, iconos en círculo con gradiente ocean, número decorativo (01, 02, 03) en serif grande de fondo.
- **GallerySection**: grid con aspect-ratio consistente, overlay oscuro + título emergiendo en hover, esquinas redondeadas mayores, transición suave.
- **TestimonialsSection**: card destacada con comilla serif grande de fondo, estrellas en teal.
- **LocationSection**: badge "Abierto/Cerrado" más pulido, iconos en círculos con gradiente, mapa con borde y sombra elegante.
- **WhatsAppFab**: pulso suave + tooltip "Escríbenos" al hover.

## 4. Footer rediseñado (Footer.tsx)

- Fondo `--ocean-deep` con sutil patrón/gradiente
- 3 columnas mejor jerarquizadas, separador con gradiente
- **Nuevo botón de autor**: implementación del snippet glassmorphism del usuario, usando lucide `Code2` en lugar de Material Symbols (no requiere fuente externa), con todas las clases (bg-white/5, backdrop-blur-md, hover glow, rotate del icono en hover, etc.)
- Reemplaza el "Made by @jakesroodriguez" actual

## 5. Detalles técnicos

- Todo via tokens semánticos, sin colores hardcoded
- Mobile-first: hero text scale `text-4xl md:text-6xl lg:text-7xl`
- Accesibilidad: contraste AA en overlay, focus states visibles
- Sin tocar lógica de negocio (horario, WhatsApp number, TikTok link, etc.)

## Archivos a modificar

- `src/index.css` — tokens Ocean Deep + gradientes/sombras
- `tailwind.config.ts` — extender colores ocean
- `src/components/HeroSection.tsx` — rediseño full-bleed centrado
- `src/components/Header.tsx` — refinamiento glass
- `src/components/ServicesSection.tsx` — cards premium
- `src/components/GallerySection.tsx` — hover overlay
- `src/components/TestimonialsSection.tsx` — quote decorativa
- `src/components/LocationSection.tsx` — pulido visual
- `src/components/WhatsAppFab.tsx` — pulse + tooltip
- `src/components/Footer.tsx` — nuevo botón autor glassmorphism