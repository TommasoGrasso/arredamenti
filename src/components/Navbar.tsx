import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const navelem = useRef<HTMLAnchorElement>(null);
  const naveleme = useRef<HTMLAnchorElement>(null);
  const navelemen = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [bgState, setBgState] = useState<"transparent" | "red" | "white">(
    "transparent"
  );
  const [lockedBgState, setLockedBgState] = useState<
    null | "transparent" | "red" | "white"
  >(null);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOpen) {
      // Salva la posizione attuale
      const scrollY = window.scrollY;
      body.dataset.scrollY = String(scrollY);

      // Mantieni scrollbar visibile, blocca lo scroll
      html.classList.add("overflow-y-scroll");
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.width = "100%";
    } else {
      // Recupera la posizione salvata
      const scrollY = body.dataset.scrollY;

      html.classList.remove("overflow-y-scroll");
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";

      // Torna esattamente dov'era
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
      }
    }
  }, [isOpen]);

  // ANIMAZIONE INIZIALE
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power3.out" },
    });
    tl.fromTo(navelem.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0 })
      .fromTo(
        naveleme.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0 },
        "+=0.1"
      )
      .fromTo(
        navelemen.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0 },
        "+=0.1"
      );
  }, []);

  // CAMBIO SFONDO NAVBAR DURANTE LO SCROLL
  useEffect(() => {
    if (isOpen) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;
      const nearTop = current < 50;
      const scrollingDown = current > lastScrollY;

      if (nearTop) setBgState("transparent");
      else if (scrollingDown) setBgState("red");
      else setBgState("white");

      lastScrollY = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // ANIMAZIONE COLORE NAVBAR
  useEffect(() => {
    if (!navRef.current) return;

    const stateToApply = lockedBgState ?? bgState;

    const colors = {
      transparent: "rgba(255,255,255,0)",
      red: "#450a0a",
      white: "#ffffff",
    };

    const textColors = {
      transparent: "white",
      red: "white",
      white: "black",
    };

    gsap.to(navRef.current, {
      backgroundColor: colors[stateToApply],
      color: textColors[stateToApply],
      duration: 0.4,
    });
  }, [bgState, lockedBgState]);

  return (
    <div
      ref={navRef}
      className="fixed z-20 top-0 left-0 w-full p-4 flex justify-between items-center transition-colors"
      style={{
        backgroundColor: "rgba(255,255,255,0)",
        color: "white",
      }}
    >
      {bgState === "red" ? (
        // NAVBAR ROSSA (SCROLL)
        <div className="w-full flex justify-center space-x-12">
          <a href="/assistenza" className="text-white hover:text-gray-300">
            Assistenza
          </a>
          <a href="/montaggio" className="text-white hover:text-gray-300">
            Montaggio e Consegna
          </a>
        </div>
      ) : (
        <>
          {/* LOGO */}
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
              <span className="text-base font-[Oswald] font-light tracking-[0.2em] z-20 whitespace-nowrap">
                ARREDAMENTI
              </span>
            </div>
          </div>

          {/* LINK DESKTOP */}
          <div className="hidden md:flex space-x-12 left-1/2 transform -translate-x-1/2">
            <a
              href="/"
              ref={navelem}
              className="hover:text-red-950 transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              ref={naveleme}
              className="hover:text-red-950 transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              ref={navelemen}
              className="hover:text-red-950 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* PULSANTE MENU MOBILE */}
          <button
            className="md:hidden"
            onClick={() => {
              setLockedBgState(bgState); // congela il colore attuale!
              setIsOpen(true);
            }}
            aria-label="Apri menu mobile"
          >
            <Menu size={28} />
          </button>

          {/* OVERLAY (BLOCCA lo sfondo SENZA muoverlo) */}
          <div
            className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-30 transition-all duration-300
            ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => {
              setIsOpen(false);
              setLockedBgState(null); // sblocca colore!
            }}
          />

          {/* SIDEBAR MOBILE */}
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-red-950 z-40 shadow-2xl
            transform transition-all duration-500 ease-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* MINI LOGO IN ALTO A SINISTRA */}
            <div className="text-white absolute top-6 left-6 scale-95 origin-left">
              <div className="inline-flex flex-col items-start cursor-pointer">
                <div className="w-[70px] h-10 relative">
                  <div className="absolute top-0 left-0 inline-flex items-center transition-all">
                    <div className="w-10 h-10 flex items-center justify-center border-2 relative cursor-pointer">
                      <span className="text-2xl font-[Oswald] font-light tracking-widest translate-x-2 translate-y-1">
                        F
                      </span>
                    </div>
                    <span className="ml-1 mt-3 text-2xl font-[Oswald] font-light tracking-widest">
                      INO
                    </span>
                  </div>
                </div>
                <div className="w-full flex justify-center mt-2">
                  <span className="text-xs font-[Oswald] font-light tracking-[0.2em] whitespace-nowrap">
                    ARREDAMENTI
                  </span>
                </div>
              </div>
            </div>

            {/* CHIUDI */}
            <button
              onClick={() => {
                setIsOpen(false);
                setLockedBgState(null);
              }}
              className="absolute top-10 right-6 text-white hover:rotate-90 transition-all"
            >
              <X size={32} />
            </button>

            {/* MENU INTERNO */}
            <div className="h-full flex flex-col justify-center p-8 space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    group relative flex items-center p-4 text-white text-lg font-light
                    hover:pl-6 transition-all duration-300
                    ${
                      isOpen
                        ? `opacity-100 translate-y-0 delay-${75 * (i + 1)}`
                        : "opacity-0"
                    }
                  `}
                >
                  {item.label}

                  <div className="absolute left-0 top-0 h-full w-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
            {/* SOCIAL ICONS — BOTTOM FIXED */}
            <div className="flex absolute bottom-10 left-0 right-0 items-center justify-center gap-8">
              {/* FACEBOOK */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-red-900 text-white transition-all duration-300 group-hover:bg-white group-hover:text-red-900 group-hover:scale-110">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.785 4.659-4.785 1.325 0 2.464.098 2.796.142v3.24l-1.92.001c-1.505 0-1.797.716-1.797 1.765v2.316h3.588l-.467 3.622h-3.121V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </div>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-red-900 text-white transition-all duration-300 group-hover:bg-white group-hover:text-red-900 group-hover:scale-110">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/393XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-red-900 text-white transition-all duration-300 group-hover:bg-white group-hover:text-red-900 group-hover:scale-110">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.04 2C6.58 2 2.1 6.48 2.1 11.93c0 2.1.61 4.08 1.77 5.8L2 22l4.4-1.8c1.65.9 3.5 1.37 5.46 1.37h.01c5.46 0 9.94-4.48 9.94-9.93C21.8 6.48 17.5 2 12.04 2zm0 17.48h-.01c-1.74 0-3.43-.47-4.9-1.36l-.35-.21-2.61 1.08.88-2.54-.23-.39A8.41 8.41 0 013.9 11.94c0-4.48 3.65-8.13 8.14-8.13 4.48 0 8.13 3.65 8.13 8.13s-3.65 8.14-8.13 8.14zm4.53-5.64c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.23-.65.8-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2.01-1.25-.74-.66-1.24-1.48-1.39-1.73-.15-.26-.02-.4.11-.52.11-.11.25-.29.37-.43.12-.14.15-.23.23-.39.08-.17.04-.29-.02-.41-.06-.12-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.43h-.49c-.17 0-.43.06-.66.29-.23.23-.86.84-.86 2.07s.88 2.4 1 2.56c.12.17 1.74 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.18-.06-.09-.23-.15-.48-.27z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
