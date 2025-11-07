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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

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

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (!navRef.current) return;

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
      backgroundColor: colors[bgState],
      color: textColors[bgState],
      duration: 0.4,
    });
  }, [bgState]);

  return (
    <div
      ref={navRef}
      className="fixed z-20 top-0 left-0 w-full p-4 flex justify-between items-center transition-colors"
      style={{
        backgroundColor: "rgba(255,255,255,0)", // inizialmente trasparente
        color: "white", // testo iniziale bianco → evita flash nero
      }}
    >
      {bgState === "red" ? (
        // Navbar rossa: solo i due link centrati
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
              <span className="text-base font-[Oswald] font-light tracking-[0.2em] z-20 relative whitespace-nowrap">
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

          {/* MENU MOBILE */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={0} /> : <Menu size={28} />}
          </button>

          {/* SIDE MENU */}
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 z-30 ${
              isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-red-950 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-all duration-500 ease-out shadow-2xl z-40`}
          >
            {/* Pulsante chiudi */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-6 text-white transition-all duration-300 hover:rotate-90 hover:scale-120"
              aria-label="Chiudi menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Items */}
            <div className="h-full flex flex-col justify-center p-8 space-y-2">
              <a
                href="/"
                className={`group relative flex items-center text-white text-lg font-medium p-4 rounded-lg transition-all duration-300 hover:pl-6 ${
                  isOpen
                    ? "opacity-100 translate-y-0 delay-75"
                    : "opacity-0 translate-y-4"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex-1 transition-all font-light duration-300 group-hover:tracking-wide">
                  Home
                </span>
                <div className="absolute left-0 top-0 h-full w-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/about"
                className={`group relative flex items-center text-white text-lg font-light p-4 rounded-lg transition-all duration-300 hover:pl-6 ${
                  isOpen
                    ? "opacity-100 translate-y-0 delay-150"
                    : "opacity-0 translate-y-4"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex-1 transition-all duration-300 group-hover:tracking-wide">
                  About
                </span>
                <div className="absolute left-0 top-0 h-full w-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/contact"
                className={`group relative flex items-center text-white text-lg font-light p-4 rounded-lg transition-all duration-300 hover:pl-6 ${
                  isOpen
                    ? "opacity-100 translate-y-0 delay-225"
                    : "opacity-0 translate-y-4"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex-1 transition-all duration-300 group-hover:tracking-wide">
                  Contact
                </span>
                <div className="absolute left-0 top-0 h-full w-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <div className="flex absolute bottom-8 left-0 right-0 items-center justify-center gap-6">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="Facebook"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-950 text-white transition-all duration-300 group-hover:bg-white group-hover:text-red-950 group-hover:scale-110">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="Instagram"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-950 text-white transition-all duration-300 group-hover:bg-white group-hover:text-red-950 group-hover:scale-110">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@example.com"
                  className="group relative"
                  aria-label="Email"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-950 text-white transition-all duration-300 group-hover:bg-white group-hover:text-red-950 group-hover:scale-110">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
