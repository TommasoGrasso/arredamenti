import { useState, useRef, useEffect } from "react";

interface ChatBoxProps {
  onClose: () => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ onClose }) => {
  const [closing, setClosing] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Benvenuto! Come possiamo aiutarti?" },
  ]);
  const [input, setInput] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
  setClosing(true);
  setTimeout(() => {
    onClose(); // rimuove realmente il componente
    setClosing(false);
  }, 350); // durata animazione di chiusura
};


const generateBotReply = (text: string) => {
  const msg = text.toLowerCase();

  // --- CATEGORIE INTENTI ---
  if (msg.includes("ciao") || msg.includes("salve") || msg.includes("buongiorno")) {
    return "Ciao! 😊 Come posso aiutarti?";
  }

  if (msg.includes("informazioni") || msg.includes("info")) {
    return "Certo! Dimmi pure di quali informazioni hai bisogno.";
  }

  if (msg.includes("prezzo") || msg.includes("costo") || msg.includes("quanto")) {
    return "Possiamo fornirti un preventivo personalizzato. Su quale prodotto o servizio ti interessa avere il prezzo?";
  }

  if (msg.includes("montaggio") || msg.includes("consegna")) {
    return "Effettuiamo consegna e montaggio con personale qualificato. Vuoi sapere tempi, costi o disponibilità?";
  }

  if (msg.includes("progettazione") || msg.includes("progetto")) {
    return "I nostri designer realizzano progetti d’arredo su misura. Vuoi parlarci del tuo spazio?";
  }

  if (msg.includes("appuntamento") || msg.includes("showroom") || msg.includes("visita")) {
    return "Possiamo fissare un appuntamento nel nostro showroom. Quale giorno preferisci?";
  }

  if (msg.includes("orari") || msg.includes("aperti")) {
    return "Siamo aperti dal lunedì al sabato. Vuoi conoscere gli orari esatti?";
  }

  if (msg.includes("assistenza") || msg.includes("aiuto") || msg.includes("problema")) {
    return "Siamo qui per aiutarti! Raccontami il problema e ti forniamo subito assistenza.";
  }

  if (msg.includes("contatti") || msg.includes("telefono") || msg.includes("numero")) {
    return "Vuoi essere ricontattato da un nostro consulente? Posso raccogliere i tuoi dati.";
  }

  // --- RISPOSTA GENERICA INTELLIGENTE ---
  return "Perfetto, dimmi qualcosa in più così posso aiutarti al meglio!";
};


const sendMessage = () => {
  if (!input.trim()) return;

  const userMessage = input;
  setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
  setInput("");

  setTimeout(() => {
    const reply = generateBotReply(userMessage);
    setMessages((prev) => [...prev, { from: "bot", text: reply }]);
  }, 700);
};


  useEffect(() => {
    const c = messagesContainerRef.current;
    if (!c) return;

    c.scrollTop = c.scrollHeight;

    requestAnimationFrame(() => {
      c.scrollTo({ top: c.scrollHeight, behavior: "smooth" });
    });
  }, [messages]);

  return (
<div
  className={`
    absolute
    z-50
    will-change-transform

    /* -------MOBILE + TABLET (fino a 1023px)------- */
    max-lg:top-[54%]
    max-lg:w-[90%]
    max-lg:h-[65%]
    max-lg:left-1/2
    max-lg:-translate-x-1/2
    max-lg:-translate-y-1/2

    /* -----DESKTOP (1024px e oltre)------- */
    lg:top-[15%]
    lg:right-10
    lg:w-[40%]
    lg:h-[75%]

    rounded-2xl
    shadow-xl
    flex flex-col

    ${closing ? "animate-softClose" : "animate-softPop"}
  `}
>

      {/* HEADER */}
      <div className="flex justify-between items-center p-4 bg-red-950 text-white rounded-t-xl">
        <h3 className="text-xl font-semibold tracking-wide">
          Assistenza Clienti
        </h3>
        <button
          onClick={handleClose}
          className="text-white hover:text-gray-300 text-2xl"
        >
          ✕
        </button>
      </div>

      {/* MESSAGGI */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50"
        ref={messagesContainerRef}
      >
        <div className="text-red-950 inline-flex flex-col items-start cursor-pointer scale-90 origin-left">
          <div className="w-[100px] h-14 relative">
            <div className="absolute top-0 left-0 inline-flex items-center transition-all scale-100 origin-left">
              <div className="w-14 h-14 flex items-center justify-center border-2 relative cursor-pointer">
                <span className="text-3xl font-[Oswald] font-light tracking-widest transform translate-x-4.5 translate-y-2">
                  F
                </span>
              </div>
              <span className="ml-1 mt-4.5 self-center text-3xl font-[Oswald] font-light tracking-widest">
                INO
              </span>
            </div>
          </div>

          <div className="w-full flex justify-center mt-0.5 transition-all">
            <span className="text-base font-[Oswald] font-light tracking-[0.2em] z-20 whitespace-nowrap">
              ARREDAMENTI
            </span>
          </div>
        </div>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`px-4 py-2 text-red-950 text-sm max-w-[80%] rounded-lg shadow-sm ${
              msg.from === "user"
                ? "ml-auto bg-white border border-gray-300"
                : "mr-auto bg-red-100 text-red-900 border border-red-300"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="p-3 bg-white border-t border-gray-300 flex gap-2 items-center">
        <input
          type="text"
          placeholder="Richiedi Informazioni..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="w-full text-red-950 p-3 rounded-lg border border-red-950 focus:outline-none focus:border-red-900"
        />

        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-red-950 text-white rounded-lg hover:bg-red-800 transition font-bold"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
