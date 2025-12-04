import { useState } from "react";

interface ChatbotProps {
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
}

export default function Chatbot({ isChatOpen, setIsChatOpen }: ChatbotProps) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Benvenuto! Come possiamo aiutarti?" }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    // aggiunge il messaggio utente
    setMessages((prev) => [...prev, { from: "user", text: input }]);

    setInput("");

    // messaggio automatico (placeholder)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Grazie per il tuo messaggio! Ti risponderemo presto." }
      ]);
    }, 600);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[360px] max-w-[85%] bg-white border-l-2 border-red-950 shadow-xl z-[9999]
      transform transition-transform duration-500 ease-in-out
      ${isChatOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-4 bg-red-950 text-white border-b border-red-900">
        <h3 className="text-lg font-bold tracking-wide">Assistenza Clienti</h3>

        <button
          onClick={() => setIsChatOpen(false)}
          className="text-white text-xl px-2 py-1 hover:bg-red-900 transition"
        >
          ✕
        </button>
      </div>

      {/* AREA MESSAGGI */}
      <div className="p-4 overflow-y-auto h-[calc(100%-140px)] text-gray-700 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 text-sm max-w-[80%] ${
              msg.from === "user"
                ? "ml-auto bg-gray-100 text-black border border-gray-300"
                : "mr-auto bg-red-50 text-red-900 border border-red-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="p-4 border-t border-gray-200 flex gap-2">
        <input
          type="text"
          placeholder="Scrivi un messaggio..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="w-full px-3 py-2 border border-gray-300 outline-none text-black focus:border-red-950 transition"
        />

        <button
          onClick={sendMessage}
          className="bg-red-950 text-white px-4 py-2 hover:bg-red-900 transition font-bold"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
