import homepic from "../assets/imghome.webp";
import logo from "../assets/fino4.webp";
import couchL from "../assets/couchloop.mp4";
import bedV from "../assets/bedvideo5.mp4";
import arrV from "../assets/arredovideo.mp4";
import modifiche from "../assets/modifica.jpg";
import montaggio from "../assets/montaggi.webp";
import progettazione from "../assets/progettazione.jpg";
import assistenza from "../assets/assistenza.webp";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useRef, useEffect } from "react";

const Home: React.FC = () => {
  const [activeChatIndex, setActiveChatIndex] = useState<number | null>(null);

  const [messages, setMessages] = useState([
    { from: "bot", text: "Benvenuto! Come possiamo aiutarti?" },
  ]);
  const [input, setInput] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Grazie per il tuo messaggio! Ti risponderemo presto.",
        },
      ]);
    }, 600);
  };

  // scroll automatico
  useEffect(() => {
    const c = messagesContainerRef.current;
    if (!c) return;

    // Scroll immediato per assestare la posizione
    c.scrollTop = c.scrollHeight;

    // Leggero delay per eseguire uno scroll smooth fluido e preciso
    requestAnimationFrame(() => {
      c.scrollTo({
        top: c.scrollHeight,
        behavior: "smooth",
      });
    });
  }, [messages]);

  return (
    <div
      className="relative h-screen bg-cover bg-center lazyload--progressive lazyautosizes lazyloaded"
      style={{ backgroundImage: `url(${homepic})` }}
    >
      <Navbar />

      <h1 className="sr-only">Fino Arredamenti – Arredo su misura dal 1991</h1>
      <div className="absolute inset-0 bg-black opacity-45"></div>

      {/* HERO */}
      <div className="flex items-center gap-25 flex-col justify-center h-full relative z-10">
        <img
          src={logo}
          alt="Logo"
          className="lazyload--progressive lazyautosizes lazyloaded w-2/3 md:w-2/4 lg:w-2/5 h-auto brightness-0 invert"
        />
        <button className="relative px-6 py-2 font-semibold tracking-widest text-white overflow-hidden group">
          <span className="absolute left-0 top-0 h-full w-1/6 rounded-2xl bg-white/10 backdrop-blur-md transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-white/20" />
          <span className="relative z-10">SCOPRI I NOSTRI PRODOTTI</span>
        </button>
      </div>

      {/* TESTI INTRODUTTIVI */}
      <div>
        <div className="p-10 pb-2 flex items-center justify-center bg-white">
          <span className="w-2/3 font-bold text-black text-center block text-[6vw] sm:text-[5vw] md:text-[4vw] leading-tight">
            <span className="text-red-950 block text-left w-full whitespace-nowrap -ml-10 sm:ml-0">
              Fino Arredamenti
            </span>
            <span className="block text-right whitespace-nowrap">
              l’abito su misura per <br /> la tua
              <span className="text-red-950"> casa</span>.
            </span>
          </span>
        </div>
        <div className="flex justify-center font-extralight text-[4vw] sm:text-[3vw] md:text-[2.5vw] pb-9">
          Qualità e design dal 1991.
        </div>
      </div>

      {/* SEZIONI VIDEO */}
      <div className="relative">
        {[
          {
            src: couchL,
            title: "Area giorno",
            describtion:
              "Design e funzionalità per vivere ogni spazio al meglio.",
            overlay: "bg-black/30",
          },
          {
            src: bedV,
            title: "Area notte",
            describtion: "Comfort e stile per i tuoi momenti di riposo.",
            overlay: "bg-black/80",
          },
          {
            src: arrV,
            title: "Arredo",
            describtion: "Soluzioni d’arredo su misura per ogni ambiente.",
            overlay: "bg-black/60",
          },
        ].map((video, index, arr) => (
          <section
            key={index}
            className={`h-screen sticky top-0 overflow-hidden ${
              index !== arr.length - 1 ? "mb-[70vh]" : ""
            }`}
          >
            {/* VIDEO */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />

            {/* OVERLAY */}
            <div
              className={`absolute top-0 left-0 w-full h-full ${video.overlay}`}
            ></div>

            {/* CONTENUTO */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-8">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                {video.title}
              </h2>

              <p className="font-light md:text-xl opacity-90">
                {video.describtion}
              </p>

              {/* BOTTONI */}
              <div className="flex gap-4 pt-5 items-start">
                <button className="relative text-left px-6 py-2 font-semibold tracking-widest text-white overflow-hidden group">
                  <span className="absolute left-0 top-0 h-full w-1/3 bg-red-950 transition-all duration-500 ease-in-out group-hover:w-full" />
                  <span className="relative z-10 text-xs sm:text-sm md:text-base">
                    CATALOGO COMPLETO
                  </span>
                </button>

                <button
                  onClick={() => setActiveChatIndex(index)}
                  className="relative text-left px-6 py-2 font-semibold tracking-widest text-white overflow-hidden group"
                >
                  <span className="absolute left-0 top-0 h-full w-1/3 bg-red-950 transition-all duration-500 ease-in-out group-hover:w-full" />
                  <span className="relative z-10 text-xs sm:text-sm md:text-base">
                    RICHIEDI INFORMAZIONI
                  </span>
                </button>
              </div>

              {/* CHATBOX LOCALE ALLA SEZIONE */}
              {activeChatIndex === index && (
                <div
                  className="absolute top-[12%] right-0 h-[76%] w-[40%]
                  bg-white border-2 border-red-950 shadow-2xl 
                  p-6 text-black z-30 flex flex-col animate-[fadeIn_0.3s_ease]"
                >
                  {/* HEADER */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-red-950 tracking-wide">
                      Assistenza Clienti
                    </h3>
                    <button
                      onClick={() => setActiveChatIndex(null)}
                      className="text-gray-600 hover:text-red-950 transition text-2xl"
                    >
                      ✕
                    </button>
                  </div>

                  {/* AREA MESSAGGI */}
                  <div className="flex-1 border border-gray-300 p-4 overflow-y-auto space-y-3">
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`p-3 text-sm max-w-[80%] rounded ${
                          msg.from === "user"
                            ? "ml-auto bg-gray-100 text-black border border-gray-300"
                            : "mr-auto bg-red-50 text-red-900 border border-red-200"
                        }`}
                      >
                        {msg.text}
                      </div>
                    ))}
                    <div
                      className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50"
                      ref={messagesContainerRef}
                    ></div>
                  </div>

                  {/* INPUT */}
                  <div className="mt-5 border border-gray-300 flex items-center">
                    <input
                      type="text"
                      placeholder="Scrivi un messaggio..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                      className="w-full p-3 text-sm outline-none"
                    />

                    <button
                      onClick={sendMessage}
                      className="px-4 text-red-950 font-bold hover:text-red-700 text-xl"
                    >
                      ➤
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* SPAZIO PER SCROLL */}
        <div className="h-[100vh]" />
      </div>

      {/* BLOCCO TESTO + IMMAGINI */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between px-4 py-8 lg:px-0 lg:py-0">
        {/* SINISTRA */}
        <div className="w-full pt-10 lg:w-1/2 lg:pr-8 lg:mt-20 lg:sticky lg:top-20 lg:self-start mb-8">
          <div className="lg:pl-15 inline-flex flex-col items-start cursor-default">
            <div className="w-[140px] h-20 relative">
              <div className="absolute top-0 left-0 inline-flex items-center origin-left scale-80">
                <div className="w-20 h-20 border-2 border-black flex items-center justify-center">
                  <span className="text-black text-5xl font-[Oswald] font-light">
                    F
                  </span>
                </div>
                <span className="mt-6 text-black text-5xl font-[Oswald] font-light">
                  INO
                </span>
              </div>
            </div>

            <div className="w-full flex justify-center mt-1">
              <span className="text-black text-1.5xl font-[Oswald] font-light tracking-[0.3em] whitespace-nowrap">
                ARREDAMENTI
              </span>
            </div>
          </div>

          <p className="text-[clamp(16px,2.5vw,32px)] text-red-950 font-semibold pt-10">
            Sinonimo di stile, qualità e attenzione al cliente.
          </p>

          <p className="text-[clamp(14px,1.5vw,24px)] font-light pt-10">
            Designer esperti e servizi su misura trasformano ogni spazio in un
            progetto d'arredo esclusivo e curato in ogni dettaglio.
          </p>

          <div className="pt-10">
            <button className="relative px-6 py-2 font-semibold tracking-widest overflow-hidden group bg-white">
              <span className="absolute left-0 top-0 h-full w-1/4 bg-red-950 transition-all duration-500 ease-in-out group-hover:w-full" />
              <span className="relative z-10 text-white mix-blend-difference">
                CONTATTACI
              </span>
            </button>
          </div>
        </div>

        {/* DESTRA */}

        <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-1/2 items-center">
          {/* Montaggio */}
          <div className="relative w-full">
            <img src={montaggio} className="w-full shadow-md object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold uppercase mb-1">
                Consegna e montaggio
              </h3>
              <p className="text-white text-sm font-light">
                Consegna rapida e montaggio curato da personale qualificato.
              </p>
            </div>
          </div>

          {/* Modifiche */}
          <div className="relative w-full">
            <img src={modifiche} className="w-full shadow-md object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold uppercase mb-1">
                Modifiche su misura
              </h3>
              <p className="text-white text-sm font-light">
                Progetti personalizzati studiati intorno ai tuoi spazi.
              </p>
            </div>
          </div>

          {/* Assistenza */}
          <div className="relative w-full">
            <img src={assistenza} className="w-full shadow-md object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold uppercase mb-1">
                Assistenza post vendita
              </h3>
              <p className="text-white text-sm font-light">
                Sempre al tuo fianco, anche dopo l'acquisto.
              </p>
            </div>
          </div>

          {/* Progettazione */}
          <div className="relative w-full">
            <img
              src={progettazione}
              className="w-full shadow-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold uppercase mb-1">
                Progettazione
              </h3>
              <p className="text-white text-sm font-light">
                Soluzioni d'arredo personalizzate e armoniose.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
