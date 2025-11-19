import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* COLONNA 1 — INFO AZIENDALI */}
        <div>
          <div className="inline-flex flex-col items-start cursor-pointer">
            <div className="w-[100px] h-14 relative">
              <div className="absolute top-0 left-0 inline-flex items-center transition-all scale-90 origin-left">
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
              <span className="text-base font-[Oswald] font-light tracking-[0.2em] z-20 relative whitespace-nowrap">
                ARREDAMENTI
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed opacity-90">
            VIA LECCE, 264
            <br />
            72027 SAN PIETRO VERNOTICO (BR), ITALIA
          </p>

          <p className="mt-4 text-sm opacity-90">
            Tel:{" "}
            <a href="tel:+390831676500" className="underline">
              0831 676500
            </a>
            <br />
            Email:{" "}
            <a href="mailto:info@finoarredamenti.it" className="underline">
              info@finoarredamenti.it
            </a>
          </p>
        </div>

        {/* COLONNA 2 — LINK UTILI */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Link utili</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <a href="/privacy" className="hover:opacity-100 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/cookie" className="hover:opacity-100 transition">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-100 transition">
                Impostazioni privacy e cookie
              </a>
            </li>
            <li>
              <a href="/contatti" className="hover:opacity-100 transition">
                Contatti
              </a>
            </li>
          </ul>
        </div>

        {/* COLONNA 3 — MAPPA / ORARI */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Orari di apertura</h3>
          <p className="text-sm opacity-90 leading-relaxed">
            Lun – Sab: 09:00 – 20:00
            <br />
            Domenica: Chiuso
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Dove siamo</h3>
          <a
            href="https://www.google.com/maps?q=VIA+LECCE+264+SAN+PIETRO+VERNOTICO"
            target="_blank"
            className="underline text-sm opacity-90 hover:opacity-100"
          >
            Apri su Google Maps
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 mt-10 py-6 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Fino Arredamenti di Fino Giovanni & C.
        S.n.c. — P.IVA 01497200749
      </div>
    </footer>
  );
};

export default Footer;
