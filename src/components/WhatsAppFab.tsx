import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Phone, ArrowUpRight } from "lucide-react";

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
      text: "¡Hola! 👋 Soy el asistente virtual de Urkulu Móviles. Pregúntame sobre el precio de auriculares o móviles, nuestro horario, la ubicación de la tienda o sobre cualquier reparación.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const whatsappUrl =
    "https://wa.me/34631946812?text=Hola%20Urkulu%20M%C3%B3viles%2C%20tengo%20una%20consulta...";

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    // Hide tooltip after 8 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const getBotResponse = (input: string): string => {
    const text = input.toLowerCase();

    if (text.includes("auricular") || text.includes("cascos") || text.includes("casco") || text.includes("altavoz") || text.includes("altavoces") || text.includes("auriculares")) {
      return "Disponemos de auriculares de alta fidelidad desde 29,99€ y modelos premium con cancelación de ruido por 149,99€. También tenemos altavoces bluetooth impermeables a partir de 45€. ¿Te gustaría ver fotos por WhatsApp?";
    }
    
    if (text.includes("precio") || text.includes("movil") || text.includes("moviles") || text.includes("móvil") || text.includes("móviles") || text.includes("telefono") || text.includes("teléfono") || text.includes("telefonos") || text.includes("teléfonos") || text.includes("iphone") || text.includes("samsung") || text.includes("comprar") || text.includes("vender")) {
      return "Tenemos smartphones libres garantizados desde 120€ en modelos básicos, y teléfonos de gama alta reacondicionados (como iPhone y Samsung Galaxy) a partir de 399€ con 1 año de garantía. ¿Buscas alguna marca en especial?";
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

    return "¡Entendido! Para darte una respuesta exacta sobre ese tema o enviarte presupuestos y fotos a medida, te recomiendo escribir directamente a nuestro equipo por WhatsApp haciendo clic en el botón verde de abajo.";
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
    { label: "⏱️ Horario y Dirección", text: "¿Cuál es vuestro horario y dónde está la tienda?" },
    { label: "🎧 Precio de Auriculares", text: "¿Qué precio tienen vuestros cascos y auriculares?" },
    { label: "📱 Precio de Móviles", text: "¿Qué precio tienen vuestros teléfonos móviles libres?" },
    { label: "🔧 ¿Cuánto tarda una reparación?", text: "¿Cuánto tardáis en reparar una pantalla o batería rota?" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="mb-4 flex flex-col h-[500px] w-[min(90vw,380px)] rounded-3xl border border-white/10 bg-ocean-deep/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-ocean-deep to-ocean-mid border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primary-glow">
                  <Sparkles size={18} className="animate-pulse" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-ocean-deep" />
                </div>
                <div className="text-left font-body">
                  <p className="text-sm font-bold text-white tracking-wide">Asistente AI</p>
                  <p className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1 uppercase tracking-wider">
                    <span>En línea</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors border border-white/5"
                aria-label="Cerrar chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col bg-black/10">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[82%] ${
                    msg.sender === "user" ? "self-end items-end" : "self-start items-start"
                  }`}
                >
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-xs leading-relaxed font-body ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-tr-none shadow-soft"
                        : "bg-white/5 text-white/90 border border-white/5 rounded-tl-none"
                    }`}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="self-start flex flex-col max-w-[80%] items-start">
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1 items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Pills */}
            <div className="p-3 bg-black/15 border-t border-white/5 flex flex-wrap gap-1.5 overflow-x-auto max-h-[110px]">
              {suggestions.map((sug, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(sug.text)}
                  className="rounded-full bg-white/5 border border-white/5 px-3 py-1.5 text-[10px] text-white/70 hover:bg-white/10 hover:text-white transition-all font-body tracking-wide"
                >
                  {sug.label}
                </button>
              ))}
            </div>

            {/* Input & Action Footer */}
            <div className="p-3 bg-black/20 border-t border-white/10 flex flex-col gap-2.5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe tu consulta aquí..."
                  className="flex-1 rounded-xl bg-white/5 border border-white/5 px-4 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-primary-glow transition-all font-body"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white hover:bg-primary/90 disabled:opacity-40 disabled:hover:bg-primary transition-all shrink-0 shadow-[0_4px_12px_rgba(var(--primary),0.2)]"
                >
                  <Send size={14} />
                </button>
              </form>

              {/* Escape hatch button to WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] py-2 text-xs font-bold text-white transition-all duration-300 hover:bg-[#1ebe5a] shadow-[0_4px_12px_rgba(37,211,102,0.2)]"
              >
                <Phone size={12} />
                <span>Hablar con un Humano</span>
                <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="flex items-center gap-3">
        {/* Helper Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="hidden md:flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2.5 text-xs font-semibold text-background shadow-[0_10px_30px_rgba(0,0,0,0.35)] font-body select-none"
            >
              <Sparkles size={12} className="text-primary-glow" />
              <span>¿Dudas? Chatea con la IA</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trigger Bubble */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-glow transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none"
          aria-label="Abrir asistente virtual"
        >
          {/* Pulsing ring animation */}
          {!isOpen && <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />}
          
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
