import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "es" | "eu";

export const translations = {
  es: {
    // Header
    nav_servicios: "Servicios",
    nav_ubicacion: "Ubicación",
    nav_opiniones: "Opiniones",
    nav_productos: "Productos",
    contactar: "Contactar",
    
    // Hero
    hero_welcome: "Ongi etorri · Urretxu, Gipuzkoa",
    hero_title: "Servicio técnico experto",
    hero_title_highlight: "accesorios premium",
    hero_desc: "Reparaciones express de pantallas y baterías en tiempo récord con componentes de calidad certificada. Descubre nuestra colección de fundas exclusivas y accesorios de alta gama en el centro de Urretxu.",
    hero_cta_whatsapp: "Escribir por WhatsApp",
    hero_cta_services: "Ver servicios",
    hero_scroll: "Desplazarse hacia abajo",

    // Services
    services_sub: "Nuestros servicios",
    services_title: "Todo para tu móvil",
    service_1_title: "Soporte Técnico Express",
    service_1_desc: "Recupera el rendimiento de tu móvil. Cambiamos tu pantalla rota o batería gastada en menos de 1 hora, utilizando componentes de máxima calidad con garantía certificada.",
    service_2_title: "Fundas de Autor y Estilo",
    service_2_desc: "Viste tu dispositivo con personalidad y protección. Descubre nuestra cuidada selección de fundas exclusivas diseñadas para absorber impactos sin comprometer la estética.",
    service_3_title: "Accesorios y Gadgets Premium",
    service_3_desc: "Equípate con accesorios de alta fidelidad. Desde protectores de hidrogel cortados a medida hasta cargadores inteligentes ultra-rápidos y auriculares de sonido envolvente.",

    // Location
    location_sub: "Encuéntranos",
    location_title: "Nuestra tienda en Urretxu",
    location_dir: "Dirección",
    location_phone: "Teléfono",
    location_hours: "Horario",
    location_open: "Abierto ahora",
    location_closed: "Cerrado ahora",
    location_service_area_title: "Área de Servicio · Zerbitzu Eremua",
    location_service_area_desc: "Ofrecemos soporte técnico express en toda la comarca de Urola Garaia (Urretxu, Zumarraga, Legazpi). También atendemos consultas y realizamos reparaciones para clientes de todo el País Vasco (Euskadi / Euskal Herria), incluyendo Gipuzkoa, Bizkaia y Álava.",
    day_weekday: "Lunes - Viernes",
    day_saturday: "Sábado",
    day_sunday: "Domingo",
    time_closed: "Cerrado",

    // Testimonials
    testimonials_sub: "Opiniones · 5.0 ★",
    testimonials_title: "Lo que dicen nuestros clientes",
    testimonial_1: "Sin duda, el mejor servicio técnico de toda la zona. Tenía la pantalla de mi iPhone rota, me la cambiaron en apenas 45 minutos y el resultado es impecable. Un trato de diez.",
    testimonial_2: "Trato supercercano y profesional. Les llevé un móvil que no cargaba y lo solucionaron en el mismo día con total transparencia en el precio. Muy recomendables.",
    testimonial_3: "Tienen una selección de fundas preciosa y de una calidad brutal que no se encuentra en ningún otro lado. Además, me colocaron un protector de hidrogel a medida en cinco minutos.",
    testimonial_4: "Atención al cliente excepcional. Cambié la batería de mi dispositivo y vuelve a rendir como el primer día. Explicaciones claras, rapidez y máxima confianza.",

    // Gallery
    gallery_sub: "Productos",
    gallery_title: "Nuestros Productos Destacados",
    cat_speakers: "Altavoces",
    cat_phones: "Móviles",
    cat_watches: "Relojes inteligentes",
    cat_headphones: "Cascos y auriculares",

    // Footer
    footer_desc: "Tu tienda de reparación y accesorios de móviles de confianza en Urretxu, Gipuzkoa. Calidad y rapidez garantizadas.",
    footer_valora: "¿Nos has visitado? Valóranos",
    footer_thanks: "¡Gracias por tu valoración! ❤️",
    footer_review_google: "Dejar reseña en Google",
    footer_nav: "Navegación",
    footer_tiktok: "Síguenos en TikTok",
    footer_budget: "Presupuesto Rápido",
    footer_pedir_presupuesto: "Pedir Presupuesto",
    footer_faqs: "Preguntas Rápidas",
    footer_faq_1_q: "¿Cuánto tarda la reparación?",
    footer_faq_1_a: "La mayoría de pantallas y baterías se cambian en 1 hora. Otras reparaciones se diagnostican gratis en el día.",
    footer_faq_2_q: "¿Las reparaciones tienen garantía?",
    footer_faq_2_a: "Sí, ofrecemos 3 meses de garantía en todas nuestras reparaciones de pantalla y componentes.",
    footer_faq_3_q: "¿Necesito cita previa?",
    footer_faq_3_a: "No es necesario. Puedes pasarte por la tienda en nuestro horario comercial y te atenderemos al momento.",
    footer_call: "Llámanos",
    footer_visit: "Visítanos",
    footer_pay_methods: "Métodos de pago aceptados:",
    footer_pay_bizum: "Pago instantáneo y seguro a través de Bizum al número de la tienda.",
    footer_pay_tarjeta: "Aceptamos todas las tarjetas de débito/crédito, Apple Pay y Google Pay.",
    footer_pay_efectivo: "Puedes realizar tu pago en metálico directamente en nuestro local comercial.",
    footer_rights: "Urkulu Móviles. Todos los derechos reservados.",
    footer_back_to_top: "Volver arriba",
    footer_repair_pantalla: "Pantalla",
    footer_repair_pantalla_time: "Listo en 1 hora",
    footer_repair_pantalla_msg: "Hola! Me gustaría pedir presupuesto para cambiar la pantalla de mi móvil.",
    footer_repair_bateria: "Batería",
    footer_repair_bateria_time: "Listo en 45 min",
    footer_repair_bateria_msg: "Hola! Me gustaría pedir presupuesto para cambiar la batería de mi móvil.",
    footer_repair_otros: "Otros",
    footer_repair_otros_time: "Diagnóstico gratis",
    footer_repair_otros_msg: "Hola! Tengo un problema con mi móvil y me gustaría consultar una reparación.",

    // WhatsApp AI Chat
    chat_welcome: "¡Hola! 👋 Soy el asistente inteligente de Urkulu Móviles. \n\nPregúntame lo que quieras sobre:\n• 🔧 Reparación de pantalla y batería\n• 📱 Precios de iPhones, Samsung y otros móviles\n• 🎧 Cascos, altavoces y accesorios\n• ⏱️ Horario y dirección de la tienda",
    chat_placeholder: "Escribe tu consulta aquí...",
    chat_human: "Hablar con un Humano",
    chat_tooltip: "¿Dudas? Chatea con la IA",
    chat_sug_1: "⏱️ ¿Abrís hoy?",
    chat_sug_2: "🔧 Pantalla Móvil",
    chat_sug_3: "📱 Precio iPhone 13",
    chat_sug_4: "🎧 Precio Auriculares"
  },
  eu: {
    // Header
    nav_servicios: "Zerbitzuak",
    nav_ubicacion: "Kokapena",
    nav_opiniones: "Iritziak",
    nav_productos: "Produktuak",
    contactar: "Kontaktatu",

    // Hero
    hero_welcome: "Ongi etorri · Urretxu, Gipuzkoa",
    hero_title: "Urkulu",
    hero_title_highlight: "Móviles",
    hero_desc: "Zerbitzu tekniko aditua eta premium osagarriak",
    hero_cta_whatsapp: "Idatzi WhatsAppez",
    hero_cta_services: "Ikusi zerbitzuak",
    hero_scroll: "Mugitu behera",

    // Services
    services_sub: "Gure zerbitzuak",
    services_title: "Zure mugikorrerako dena",
    service_1_title: "Zerbitzu Tekniko Expressa",
    service_1_desc: "Berreskuratu zure mugikorraren errendimendua. Zure pantaila hautsia edo bateria gastatua ordubete baino gutxiagoan aldatzen dugu, kalitate goreneko osagaiak erabiliz berme ziurtatuarekin.",
    service_2_title: "Estilozko eta Egile-Zorroak",
    service_2_desc: "Jantzi zure gailua nortasun eta babesarekin. Ezagutu talkak xurgatzeko diseinatutako gure zorro esklusiboen aukeraketa zaindua, estetika arriskuan jarri gabe.",
    service_3_title: "Premium Osagarri eta Gadgetak",
    service_3_desc: "Hornitu zaitez fideltasun handiko osagarriekin. Neurrira moztutako hidrogel babesleetatik hasi eta ultra-bizkor kargagailu adimendunetara eta soinu inguruko aurikularretaraino.",

    // Location
    location_sub: "Aurki gaitzazu",
    location_title: "Gure denda Urretxun",
    location_dir: "Helbidea",
    location_phone: "Telefonoa",
    location_hours: "Ordutegia",
    location_open: "Zabalik orain",
    location_closed: "Itxita orain",
    location_service_area_title: "Zerbitzu Eremua · Área de Servicio",
    location_service_area_desc: "Zerbitzu tekniko express-a eskaintzen dugu Urola Garaia eskualde osoan (Urretxu, Zumarraga, Legazpi). Zerbitzua ematen diegu Euskal Herri osoko bezeroei ere, Gipuzkoa, Bizkaia eta Araba barne.",
    day_weekday: "Astelehena - Ostirala",
    day_saturday: "Larunbata",
    day_sunday: "Igandea",
    time_closed: "Itxita",

    // Testimonials
    testimonials_sub: "Iritziak · 5.0 ★",
    testimonials_title: "Gure bezeroek diotena",
    testimonial_1: "Zalantzarik gabe, inguruko zerbitzu tekniko onena. Nire iPhoneko pantaila hautsita zegoen, 45 minututan aldatu zidaten eta emaitza bikaina da. Tratu bikaina.",
    testimonial_2: "Tratu oso gertukoa eta profesionala. Karga ez zen mugikor bat eraman nien eta egun berean konpondu zuten prezio gardenarekin. Oso gomendagarria.",
    testimonial_3: "Beste inon aurkitzen ez den zorro aukeraketa ederra eta kalitate handikoa dute. Gainera, neurrira egindako hidrogel babeslea jarri zidaten bost minututan.",
    testimonial_4: "Bezeroaren arreta bikaina. Nire gailuko bateria aldatu nuen eta lehenengo egunean bezala dabil berriro. Azalpen argiak, azkartasuna eta konfiantza osoa.",

    // Gallery
    gallery_sub: "Produktuak",
    gallery_title: "Gure Produktu Nabarmenduak",
    cat_speakers: "Bozgorailuak",
    cat_phones: "Mugikorrak",
    cat_watches: "Erloju adimendunak",
    cat_headphones: "Kaskoak eta entzungailuak",

    // Footer
    footer_desc: "Zure telefonoa konpontzeko eta osagarrietarako denda fidagarria Urretxun, Gipuzkoan. Kalitatea eta azkartasuna bermaturik.",
    footer_valora: "Bisitatu gaituzu? Baloratu gaitzazu",
    footer_thanks: "Eskerrik asko zure balorazioagatik! ❤️",
    footer_review_google: "Utzi iritzia Googlen",
    footer_nav: "Nabigazioa",
    footer_tiktok: "Jarraitu gaitzazu TikTok-en",
    footer_budget: "Aurrekontu Azkarra",
    footer_pedir_presupuesto: "Eskatu Aurrekontua",
    footer_faqs: "Galdera Azkarrak",
    footer_faq_1_q: "Zenbat denbora behar da konpontzeko?",
    footer_faq_1_a: "Pantaila eta bateria gehienak ordubetean aldatzen dira. Gainerako konponketak doan diagnostikatzen dira egunean bertan.",
    footer_faq_2_q: "Konponketek bermerik al dute?",
    footer_faq_2_a: "Bai, 3 hilabeteko bermea eskaintzen dugu gure pantaila eta osagaien konponketa guztietan.",
    footer_faq_3_q: "Hitzordua behar al dut?",
    footer_faq_3_a: "Ez da beharrezkoa. Gure denda-ordutegian etor zaitezke eta unean bertan lagunduko dizugu.",
    footer_call: "Deitu iezaguzu",
    footer_visit: "Bisitatu gaituzu",
    footer_pay_methods: "Onartutako ordainketa moduak:",
    footer_pay_bizum: "Bizum bidezko ordainketa azkarra eta segurua dendako zenbakira.",
    footer_pay_tarjeta: "Zordunketa/kreditu txartel guztiak, Apple Pay eta Google Pay onartzen ditugu.",
    footer_pay_efectivo: "Ordainketa dirutan egin dezakezu zuzenean gure denda fisikoan.",
    footer_rights: "Urkulu Móviles. Eskubide guztiak erreserbatuta.",
    footer_back_to_top: "Mugitu gora",
    footer_repair_pantalla: "Pantaila",
    footer_repair_pantalla_time: "Ordubetean prest",
    footer_repair_pantalla_msg: "Kaixo! Nire mugikorraren pantaila aldatzeko aurrekontua eskatu nahi nuke.",
    footer_repair_bateria: "Bateria",
    footer_repair_bateria_time: "45 minututan prest",
    footer_repair_bateria_msg: "Kaixo! Nire mugikorraren bateria aldatzeko aurrekontua eskatu nahi nuke.",
    footer_repair_otros: "Beste batzuk",
    footer_repair_otros_time: "Doako diagnostikoa",
    footer_repair_otros_msg: "Kaixo! Arazo bat dut nire mugikorrarekin eta konponketa baten inguruan galdetu nahi nuke.",

    // WhatsApp AI Chat
    chat_welcome: "Kaixo! 👋 Urkulu Móviles laguntzaile adimentsua naiz. \n\nGalde diezadakezu nahi duzuna:\n• 🔧 Pantaila eta bateria konponketak\n• 📱 Mugikorren prezioak eta stocka\n• 🎧 Bozgorailuak, entzungailuak eta osagarriak\n• ⏱️ Denda non dagoen eta ordutegia",
    chat_placeholder: "Idatzi hemen zure galdera...",
    chat_human: "Hitz egin gizaki batekin",
    chat_tooltip: "Zalantzarik? Txateatu IArekin",
    chat_sug_1: "⏱️ Gaur ireki?",
    chat_sug_2: "🔧 Pantaila konpondu",
    chat_sug_3: "📱 iPhone 13 prezioa",
    chat_sug_4: "🎧 Entzungailuak"
  }
} as const;

export type TranslationKey = keyof typeof translations.es;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("urkulu_lang");
    if (saved === "es" || saved === "eu") return saved;
    // Default to Basque if user is in Urretxu or prefers Basque, but we'll default to 'es' as safe fallback
    return "es";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("urkulu_lang", lang);
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations["es"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
