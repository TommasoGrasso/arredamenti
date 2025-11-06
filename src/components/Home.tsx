import homepic from "../assets/imghome.webp";
import logo from "../assets/fino4.webp";
import couchL from "../assets/couchloop.mp4";
import bedV from "../assets/bedvideo5.mp4";
import arrV from "../assets/arredovideo.mp4";
import modifiche from "../assets/modifica.jpg";
import montaggio from "../assets/montaggi.webp";
import progettazione from "../assets/progettazione.jpg";
import assistenza from "../assets/assistenza.webp";
import NavbarTry from "./NavbarTry";

const Home: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center lazyload--progressive lazyautosizes lazyloaded"
      style={{ backgroundImage: `url(${homepic})` }}
    >
      <NavbarTry />

      <div className="absolute inset-0 bg-black opacity-45"></div>
      <div className="flex items-center gap-25 flex-col justify-center h-full">
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
      <div>
        <div className="p-10 pb-2 flex items-center justify-center bg-white">
          <span className="w-2/3 font-bold text-black text-center block text-[4vw] leading-tight">
            <span className="text-red-950 block text-left w-full">
              Fino Arredamenti
            </span>
            <span className="block text-right">
              l’abito su misura per <p></p> la tua
              <span className="text-red-950"> casa</span>.
            </span>
          </span>
        </div>
        <div className="flex justify-center font-extralight text-[2.5vw] pb-9">
          Qualità e design dal 1991.
        </div>
      </div>
      {/* SEZIONI VIDEO CON EFFETTO SCROLL OVERLAY */}
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
            title: "Completamenti",
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
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
            <div
              className={`absolute top-0 left-0 w-full h-full ${video.overlay}`}
            ></div>
            <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                {video.title}
              </h1>
              <p className="font-light md:text-xl opacity-90">
                {video.describtion}
              </p>
              <div className="flex gap-4 pt-5">
                <button className="relative px-6 py-2 font-semibold tracking-widest text-white overflow-hidden group">
                  <span className="absolute left-0 top-0 h-full w-1/6 bg-red-950 backdrop-blur-md transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-red-950" />
                  <span className="relative z-10">CATALOGO COMPLETO</span>
                </button>
                <button className="relative px-6 py-2 font-semibold tracking-widest text-white overflow-hidden group">
                  <span className="absolute left-0 top-0 h-full w-1/6 bg-red-950 backdrop-blur-md transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-red-95 0" />
                  <span className="relative z-10">RICHIEDI INFORMAZIONI</span>
                </button>
              </div>
            </div>
          </section>
        ))}
        <div className="h-[100vh]"></div>
      </div>
      <div className="flex items-start justify-between">
        {/* SINISTRA - TESTO FISSO */}
        <div className="w-1/2 pr-8 mt-20 sticky top-20 h-fit self-start">
          <div className="pl-15 inline-flex flex-col items-start cursor-default">
            <div className="w-[140px] h-20 relative">
              <div className="absolute top-0 left-0 inline-flex items-center origin-left scale-80">
                <div className="w-20 h-20 flex items-center justify-center border-2 border-black relative">
                  <span className="text-black text-5xl font-[Oswald] font-light tracking-widest transform translate-x-6 translate-y-3">
                    F
                  </span>
                </div>
                <span className="mt-6 self-center opacity-100 translate-x-0 text-black text-5xl font-[Oswald] font-light tracking-widest">
                  INO
                </span>
              </div>
            </div>
            <div className="w-full flex justify-center mt-1 transition-all duration-300 ease-out delay-300">
              <span className="opacity-100 translate-y-0 text-black text-1.5xl font-[Oswald] font-light tracking-[0.3em] z-20 relative whitespace-nowrap">
                ARREDAMENTI
              </span>
            </div>
          </div>

          <p className="text-[clamp(16px,2.5vw,32px)] text-red-950 font-semibold pt-10 w-2/3 pl-15">
            Sinonimo di stile, qualità e attenzione al cliente.
          </p>
          <p className="text-[clamp(14px,1.5vw,24px)] font-light pt-10 w-2/3 pl-15">
            Designer esperti e servizi su misura trasformano ogni spazio in un
            progetto d’arredo esclusivo e curato in ogni dettaglio.
          </p>
          <div className="pt-10 pl-15">
            <button className="relative px-6 py-2 font-semibold tracking-widest overflow-hidden group bg-white">
              <span className="absolute left-0 top-0 h-full w-1/4 bg-red-950 transition-all duration-500 ease-in-out group-hover:w-full" />
              <span className="relative z-10 text-white mix-blend-difference">
                CONTATTACI
              </span>
            </button>
          </div>
        </div>

        {/* DESTRA - IMMAGINI SCORREVOLI */}
        <div className="flex flex-col gap-10 sm:gap-15 lg:gap-20 w-full lg:w-1/2 items-center">
          <div className="relative w-full">
            <img
              src={montaggio}
              alt="Montaggio"
              className="w-full h-auto shadow-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold uppercase mb-1 sm:mb-2">
                Consegna e montaggio
              </h3>
              <p className="text-white text-xs sm:text-sm lg:text-base font-light">
                Consegna rapida e montaggio curato esclusivamente da personale
                qualificato, per un servizio preciso e senza pensieri.
              </p>
            </div>
          </div>

          <div className="relative w-full">
            <img
              src={modifiche}
              alt="Modifiche"
              className="w-full h-auto shadow-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold uppercase mb-1 sm:mb-2">
                Modifiche su misura
              </h3>
              <p className="text-white text-xs sm:text-sm lg:text-base font-light">
                Progettiamo ambienti unici, studiati intorno a te e agli spazi
                in cui vivi. Design su misura, senza compromessi.
              </p>
            </div>
          </div>

          <div className="relative w-full">
            <img
              src={assistenza}
              alt="Assistenza"
              className="w-full h-auto shadow-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold uppercase mb-1 sm:mb-2">
                Assistenza post vendita
              </h3>
              <p className="text-white text-xs sm:text-sm lg:text-base font-light">
                Sempre al tuo fianco, anche dopo l'acquisto. Assistenza
                qualificata e supporto dedicato in ogni fase.
              </p>
            </div>
          </div>

          <div className="relative w-full">
            <img
              src={progettazione}
              alt="Progettazione"
              className="w-full h-auto shadow-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold uppercase mb-1 sm:mb-2">
                Progettazione
              </h3>
              <p className="text-white text-xs sm:text-sm lg:text-base font-light">
                Soluzioni d'arredo personalizzate, studiate per armonizzare
                design, comfort e spazi della tua casa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
