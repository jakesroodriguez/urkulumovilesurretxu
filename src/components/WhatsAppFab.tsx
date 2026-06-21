import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Phone, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
}

const WhatsAppFab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "¡Hola! 👋 Soy el asistente inteligente de Urkulu Móviles. \n\nPregúntame lo que quieras sobre:\n• 🔧 Reparación de pantalla y batería\n• 📱 Precios de iPhones, Samsung y otros móviles\n• 🎧 Cascos, altavoces y accesorios\n• ⏱️ Horario y dirección de la tienda",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [unreadCount, setUnreadCount] = useState(1);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const whatsappUrl =
    "https://wa.me/34631946812?text=Hola%20Urkulu%20M%C3%B3viles%2C%20tengo%20una%20consulta...";

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    // Hide tooltip after 9 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  const getBotResponse = (input: string): string => {
    const text = input.toLowerCase();

    // Helper functions for dynamic details
    const getTodayDayName = (dayNumber: number): string => {
      const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
      return days[dayNumber];
    };

    // 1. Dynamic Schedule matching ("hoy", "mañana", specific days)
    if (text.includes("horario") || text.includes("hora") || text.includes("abierto") || text.includes("abre") || text.includes("cierra") || text.includes("abren") || text.includes("sábado") || text.includes("domingo") || text.includes("hoy") || text.includes("mañana")) {
      const now = new Date();
      const todayDay = now.getDay();

      if (text.includes("mañana")) {
        const tomorrowDay = (todayDay + 1) % 7;
        const tomorrowName = getTodayDayName(tomorrowDay);
        if (tomorrowDay === 0) {
          return `Mañana ${tomorrowName} cerramos por descanso semanal. Volveremos a abrir el lunes a las 9:30.`;
        }
        if (tomorrowDay === 6) {
          return `Mañana sábado abrimos de 10:00 a 14:00 y por la tarde de 16:00 a 20:00. ¡Te esperamos!`;
        }
        return `Mañana ${tomorrowName} abrimos en nuestro horario habitual: de 9:30 a 13:30 y de 16:30 a 20:30.`;
      }

      if (text.includes("hoy") || text.includes("abrís") || text.includes("abris") || text.includes("abren") || text.includes("hora")) {
        const todayName = getTodayDayName(todayDay);
        if (todayDay === 0) {
          return `Hoy ${todayName} la tienda está cerrada por descanso. Mañana lunes abriremos a las 9:30.`;
        }
        if (todayDay === 6) {
          return `Hoy sábado estamos abiertos de 10:00 a 14:00 y de 16:00 a 20:00. ¡Pásate cuando quieras!`;
        }
        return `Hoy ${todayName} abrimos de 9:30 a 13:30 por la mañana y de 16:30 a 20:30 por la tarde. ¿Tienes pensado venir hoy?`;
      }
    }

    // Generic screen repair price (user asks without specifying a phone model)
    if (text.includes("pantalla") && (text.includes("cuesta") || text.includes("cuánto") || text.includes("cuanto") || text.includes("precio") || text.includes("reparar") || text.includes("cambiar")) && !text.match(/(iphone|samsung|xiaomi|redmi|huawei|pixel)/i)) {
      return "El precio de reparar la pantalla depende mucho del modelo. Las reparaciones básicas en modelos sencillos van desde los **20€ a 40€**, mientras que en pantallas AMOLED o modelos recientes el costo varía. \n\nDime qué modelo de móvil tienes (ej. *iPhone 11*, *Samsung A54*) y te daré el precio exacto al instante.";
    }

    // 2. Specific Repair and Model Cost Estimation (e.g. "pantalla iphone 11")
    const isRepairQuery = text.includes("repara") || text.includes("pantalla") || text.includes("bateria") || text.includes("batería") || text.includes("arreglo") || text.includes("arreglar") || text.includes("cambiar") || text.includes("cambio") || text.includes("costo") || text.includes("cuesta") || text.includes("precio");
    
    // Model extraction regex (matches brand name + optional series + optional model number, e.g. "iphone 11", "iphone 13 pro", "samsung s23", "redmi note 12")
    const phoneModelRegex = /(iphone|samsung|xiaomi|redmi|huawei|pixel)\s*(?:galaxy|note)?\s*([0-9a-zA-Z\s+]{2,12})/i;
    const modelMatch = input.match(phoneModelRegex);

    if (isRepairQuery && modelMatch) {
      const brand = modelMatch[1].toLowerCase();
      const modelDetail = modelMatch[2].trim();
      const fullModelName = `${brand.charAt(0).toUpperCase() + brand.slice(1)} ${modelDetail}`;

      let screenPrice = 79;
      let batteryPrice = 39;

      if (brand === "iphone") {
        const num = parseInt(modelDetail);
        if (num >= 14) {
          screenPrice = 189;
          batteryPrice = 79;
        } else if (num >= 12) {
          screenPrice = 129;
          batteryPrice = 59;
        } else if (num >= 10 || modelDetail.toLowerCase().includes("x") || modelDetail.toLowerCase().includes("xr") || modelDetail.toLowerCase().includes("xs")) {
          screenPrice = 89;
          batteryPrice = 49;
        } else {
          screenPrice = 69;
          batteryPrice = 39;
        }
      } else if (brand === "samsung") {
        if (modelDetail.toLowerCase().startsWith("s")) {
          screenPrice = 149;
          batteryPrice = 59;
        } else {
          screenPrice = 89;
          batteryPrice = 45;
        }
      }

      if (text.includes("bateria") || text.includes("batería")) {
        return `Para el **${fullModelName}**, cambiar la batería te costaría aproximadamente **${batteryPrice}€** (incluyendo repuesto nuevo, mano de obra y 3 meses de garantía). Se hace en unos 45 minutos. ¿Te gustaría reservar una cita?`;
      }
      
      return `Para el **${fullModelName}**, cambiar la pantalla rota te costaría aproximadamente **${screenPrice}€** (incluyendo el repuesto de calidad premium, mano de obra y 3 meses de garantía). La reparación se realiza en 1 hora. ¿Quieres reservar cita?`;
    }

    // 3. Specific Phone buying price query (e.g. "cuánto vale el iphone 13")
    if ((text.includes("precio") || text.includes("vale") || text.includes("cuesta") || text.includes("comprar") || text.includes("cuanto") || text.includes("cuánto")) && modelMatch) {
      const brand = modelMatch[1].toLowerCase();
      const modelDetail = modelMatch[2].trim();
      const fullModelName = `${brand.charAt(0).toUpperCase() + brand.slice(1)} ${modelDetail}`;

      let priceEstimate = 350;

      if (brand === "iphone") {
        const num = parseInt(modelDetail);
        if (num >= 15) {
          priceEstimate = 790;
        } else if (num === 14) {
          priceEstimate = 620;
        } else if (num === 13) {
          priceEstimate = 490;
        } else if (num === 12) {
          priceEstimate = 380;
        } else if (num === 11) {
          priceEstimate = 299;
        } else {
          priceEstimate = 199;
        }
      } else if (brand === "samsung") {
        const num = parseInt(modelDetail.replace(/\D/g, ""));
        if (num >= 24) {
          priceEstimate = 790;
        } else if (num === 23) {
          priceEstimate = 590;
        } else if (num === 22) {
          priceEstimate = 450;
        } else if (num === 21) {
          priceEstimate = 320;
        } else {
          priceEstimate = 220;
        }
      }

      return `El **${fullModelName}** reacondicionado en estado excelente (batería revisada al 100%, libre y con 1 año de garantía) lo tenemos actualmente a partir de **${priceEstimate}€**. ¿Te gustaría consultar si nos queda stock en algún color o capacidad en concreto?`;
    }

    // 4. Default categories fallbacks
    if (text.includes("auricular") || text.includes("cascos") || text.includes("casco") || text.includes("altavoz") || text.includes("altavoces") || text.includes("auriculares")) {
      return "Disponemos de auriculares de alta fidelidad desde 29,99€ y modelos premium con cancelación de ruido por 149,99€. También tenemos altavoces bluetooth impermeables a partir de 45€. ¿Te gustaría ver fotos de los modelos por WhatsApp?";
    }
    
    if (text.includes("precio") || text.includes("movil") || text.includes("moviles") || text.includes("móvil") || text.includes("móviles") || text.includes("telefono") || text.includes("teléfono") || text.includes("telefonos") || text.includes("teléfonos") || text.includes("comprar") || text.includes("vender")) {
      return "Tenemos smartphones libres garantizados desde 120€ en modelos básicos, y teléfonos de gama alta reacondicionados (como iPhone y Samsung Galaxy) a partir de 399€ con 1 año de garantía. ¿Buscas alguna marca o presupuesto en especial?";
    }

    if (text.includes("repara") || text.includes("pantalla") || text.includes("bateria") || text.includes("batería") || text.includes("tarda") || text.includes("arreglo") || text.includes("arreglar") || text.includes("tiempo") || text.includes("avería") || text.includes("roto") || text.includes("rota")) {
      return "Reparamos pantallas en 1 hora y baterías en 45 minutos. Los diagnósticos de otras averías son totalmente gratuitos en el mismo día. Dime qué modelo tienes y te damos presupuesto sin compromiso.";
    }

    if (text.includes("horario") || text.includes("hora") || text.includes("abierto") || text.includes("abre") || text.includes("cierra") || text.includes("horarios") || text.includes("sábado") || text.includes("domingo")) {
      return "Nuestro horario comercial es de Lunes a Viernes de 9:30 a 13:30 y de 16:30 a 20:30, y Sábados de 10:00 a 14:00 y de 16:00 a 20:00. Los domingos cerramos por descanso.";
    }

    if (text.includes("donde") || text.includes("dónde") || text.includes("ubicacion") || text.includes("ubicación") || text.includes("dirección") || text.includes("direccion") || text.includes("tienda") || text.includes("urretxu") || text.includes("llegar") || text.includes("calle") || text.includes("mapa")) {
      return "Estamos ubicados en Labeaga Kalea, 27, BAJO 003, 20700 Urretxu, Gipuzkoa. Tienes un mapa interactivo y el enlace directo a Google Maps justo arriba en el pie de página.";
    }

    if (text.includes("contacto") || text.includes("telefono") || text.includes("teléfono") || text.includes("número") || text.includes("numero") || text.includes("whatsapp") || text.includes("llamar") || text.includes("hablar")) {
      return "Puedes llamarnos al 631 94 68 12. Si prefieres hablar directamente con una persona, haz clic en el botón '🟢 Hablar con un Humano' de este chat.";
    }

    if (text.includes("hola") || text.includes("buenas") || text.includes("saludos") || text.includes("buenos días") || text.includes("buenas tardes")) {
      return "¡Hola! Buenas. Soy el asistente virtual de la tienda. ¿En qué te puedo ayudar hoy? Pregúntame sobre reparaciones, precios de fundas y móviles, u horarios.";
    }

    if (text.includes("gracias") || text.includes("ok") || text.includes("vale") || text.includes("perfecto") || text.includes("gracias!")) {
      return "¡A ti! Si tienes cualquier otra duda, estaré encantado de resolverla. Si no, ¡que tengas un excelente día!";
    }

    return "¡Entendido! Para darte una respuesta exacta sobre ese tema o enviarte presupuestos y fotos a medida de la tienda, te recomiendo escribir directamente a nuestro equipo por WhatsApp haciendo clic en el botón de abajo.";
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: text,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setShowTooltip(false);

    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = getBotResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botResponse,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1200);
  };

  const suggestions = [
    { label: "⏱️ ¿Abrís hoy?", text: "¿A qué hora abrís hoy?" },
    { label: "🔧 Pantalla Móvil", text: "¿Cuánto cuesta reparar la pantalla de un móvil?" },
    { label: "📱 Precio iPhone 13", text: "¿Qué precio tiene el iPhone 13?" },
    { label: "🎧 Precio Auriculares", text: "¿Qué precio tienen vuestros auriculares?" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 35, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="mb-4 flex flex-col h-[520px] w-[min(90vw,380px)] rounded-[2.5rem] border border-white/10 bg-ocean-deep/90 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden"
            style={{
              boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.1), 0 25px 60px -15px rgba(0,0,0,0.6)"
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 bg-gradient-to-r from-ocean-deep/80 to-ocean-mid/80 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primary-glow shadow-inner">
                  <Sparkles size={20} className="animate-pulse" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-ocean-deep animate-pulse" />
                </div>
                <div className="text-left font-body">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white tracking-wide">Asistente AI</span>
                    <span className="inline-flex items-center gap-0.5 rounded-md bg-primary-glow/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-glow border border-primary-glow/20">
                      V2.0
                    </span>
                  </div>
                  <p className="text-[10px] font-semibold text-white/50 tracking-wider flex items-center gap-1 mt-0.5">
                    <span>Soporte Técnico Interactivo</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/75 hover:bg-white/10 hover:text-white transition-all border border-white/5 hover:scale-105 active:scale-95"
                aria-label="Cerrar chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4.5 flex flex-col bg-black/15 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[85%] ${
                    msg.sender === "user" ? "self-end items-end animate-slide-in-right" : "self-start items-start animate-slide-in-left"
                  }`}
                >
                  <div
                    className={`rounded-2xl px-4 py-3 text-xs leading-relaxed font-body shadow-sm ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-primary to-primary-glow text-white rounded-tr-none"
                        : "bg-white/5 border border-white/10 text-white/90 rounded-tl-none backdrop-blur-md"
                    }`}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="self-start flex flex-col max-w-[80%] items-start animate-fade-in">
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none px-4 py-3.5 flex gap-1 items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Pills */}
            <div className="p-3.5 bg-black/20 border-t border-white/5 flex flex-wrap gap-2 overflow-x-auto max-h-[115px]">
              {suggestions.map((sug, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(sug.text)}
                  className="rounded-full bg-white/5 border border-white/5 hover:border-primary-glow/40 hover:bg-primary/10 px-3 py-1.5 text-[10px] text-white/70 hover:text-white transition-all font-body font-semibold tracking-wide"
                >
                  {sug.label}
                </button>
              ))}
            </div>

            {/* Input & Action Footer */}
            <div className="p-4 bg-gradient-to-t from-ocean-deep/90 to-ocean-deep/50 border-t border-white/10 flex flex-col gap-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex gap-2.5"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe tu consulta aquí..."
                  className="flex-1 rounded-xl bg-white/5 border border-white/5 px-4.5 py-2.5 text-xs text-white placeholder-white/35 focus:outline-none focus:border-primary-glow focus:bg-white/10 transition-all font-body shadow-inner"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary-glow text-white hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 disabled:from-primary disabled:to-primary transition-all shrink-0 shadow-[0_4px_12px_rgba(var(--primary),0.3)]"
                >
                  <Send size={14} />
                </button>
              </form>

              {/* Escape hatch button to WhatsApp */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -1.5, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-[#1ebe5a] shadow-[0_4px_15px_rgba(37,211,102,0.3)]"
              >
                <Phone size={12} />
                <span>Hablar con un Humano</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button Group */}
      <div className="flex items-center gap-3.5">
        {/* Helper Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className="hidden md:flex items-center gap-2 rounded-full bg-foreground px-4.5 py-3 text-xs font-semibold text-background shadow-[0_10px_35px_rgba(0,0,0,0.4)] font-body select-none border border-white/5"
            >
              <Zap size={12} className="text-primary-glow animate-pulse" />
              <span>¿Dudas? Chatea con la IA</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trigger Bubble Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
            setUnreadCount(0); // Clear unread badge on click
          }}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-primary-glow text-white shadow-glow transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none"
          aria-label="Abrir asistente virtual"
        >
          {/* Animated pulsing glow ring */}
          {!isOpen && (
            <span className="absolute inset-0 animate-ping rounded-full bg-primary-glow/40 opacity-70" />
          )}

          {/* Unread notification badge */}
          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-ocean-deep shadow-md animate-bounce">
              {unreadCount}
            </span>
          )}
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-center"
              >
                <MessageSquare size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppFab;
