import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-14 text-center md:text-left">
        {/* COLONNA 1 — LOGO + INFO */}
        <div>
          {/* LOGO FINO */}
          <div className="inline-flex flex-col items-start cursor-pointer pb-4">
            <div className="w-[100px] h-14 relative">
              <div className="absolute top-0 left-0 inline-flex items-center scale-90 origin-left">
                <div className="w-14 h-14 flex items-center justify-center border-2 border-white relative">
                  <span className="text-3xl font-[Oswald] font-light tracking-widest translate-x-4 translate-y-2">
                    F
                  </span>
                </div>
                <span className="ml-1 mt-4 text-3xl font-[Oswald] font-light tracking-widest">
                  INO
                </span>
              </div>
            </div>
            <span className="text-base font-[Oswald] font-light tracking-[0.2em]">
              ARREDAMENTI
            </span>
          </div>

          {/* INFO AZIENDA */}
          <p className="text-sm leading-relaxed font-extralight opacity-90 pt-3">
            VIA LECCE, 264
            <br />
            72027 SAN PIETRO VERNOTICO (BR), ITALIA
          </p>

          <p className="mt-4 text-sm font-light opacity-90">
            Tel:
            <a href="tel:+390831676500" className="pl-2 underline">
              0831 676500
            </a>
            <br />
            Email:
            <a href="mailto:info@finoarredamenti.it" className="pl-2 underline">
              info@finoarredamenti.it
            </a>
          </p>
        </div>

        {/* COLONNA 2 — LINK UTILI */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Link utili</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <a
                href="/privacy"
                className="hover:opacity-100 hover:underline font-light transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/cookie"
                className="hover:opacity-100 hover:underline font-light transition"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:opacity-100 hover:underline font-light transition"
              >
                Impostazioni privacy e cookie
              </a>
            </li>
            <li>
              <a
                href="/contatti"
                className="hover:opacity-100 hover:underline font-light transition"
              >
                Contatti
              </a>
            </li>
          </ul>
        </div>

        {/* COLONNA 3 — ORARI + MAPPA */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Orari di apertura</h3>
          <p className="text-sm opacity-90 leading-relaxed">
            Lun – Sab: 09:00 – 20:00
            <br />
            Domenica: Chiuso
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4">Dove siamo</h3>
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
      <div className="border-t border-white/20 mt-6 py-6 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Fino Arredamenti di Fino Giovanni & C.
        S.n.c. — P.IVA 01497200749
      </div>
    </footer>
  );
};

export default Footer;
