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
            Assistenza Post Vendita
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
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* SIDE MENU */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-90 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 flex flex-col p-6 space-y-6`}
          >
            <a href="/" className="text-white" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a
              href="/about"
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="/contact"
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
