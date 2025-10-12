import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const navelem = useRef<HTMLAnchorElement>(null);
  const naveleme = useRef<HTMLAnchorElement>(null);
  const navelemen = useRef<HTMLAnchorElement>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const altNavRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [showAlt, setShowAlt] = useState(false);

  // animazione link iniziale
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power3.out" },
    });

    tl.fromTo(
      navelem.current,
      { opacity: 0, y: -50, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1 }
    )
      .fromTo(
        naveleme.current,
        { opacity: 0, y: -50, scale: 0.5 },
        { opacity: 1, y: 0, scale: 1 },
        "+=0.0001"
      )
      .fromTo(
        navelemen.current,
        { opacity: 0, y: -50, scale: 0.5 },
        { opacity: 1, y: 0, scale: 1 },
        "+=0.0001"
      );
  }, []);

  // gestione scroll -> mostra navbar secondaria
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowAlt(true);
      } else {
        setShowAlt(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // animazioni comparsa navbar secondaria
  useEffect(() => {
    if (showAlt) {
      gsap.to(navRef.current, { y: -100, opacity: 0, duration: 0.5 });
      gsap.to(altNavRef.current, { y: 0, opacity: 1, duration: 0.5 });
    } else {
      gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.5 });
      gsap.to(altNavRef.current, { y: -100, opacity: 0, duration: 0.5 });
    }
  }, [showAlt]);

  return (
    <>
      {/* NAVBAR PRINCIPALE */}
      <div
        ref={navRef}
        className="fixed z-20 top-0 left-0 w-full bg-opacity-50 p-4"
      >
        <nav className="absolute z-10 top-0 left-0 w-full bg-opacity-50 p-4">
          <div className="flex items-center h-30 justify-between w-full relative">
            <div className="group inline-flex flex-col items-start cursor-pointer">
              <div className="w-[140px] h-20 relative">
                <div className="absolute top-0 left-0 inline-flex items-center transition-all duration-500 ease-out group-hover:scale-80 origin-left">
                  <div className="group w-20 h-20 flex items-center justify-center border-2 border-white relative cursor-pointer">
                    <span className=" text-white text-5xl font-[Oswald] font-light tracking-widest transform transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-3">
                      F
                    </span>
                  </div>
                  <span className="ml-2 self-center opacity-0 translate-x-4 translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out delay-100 text-white text-5xl font-[Oswald] font-light tracking-widest">
                    INO
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-center mt-0 group-hover:mt-1 transition-all duration-300 ease-out delay-300">
                <span className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-600 ease-out delay-120 text-white text-1.5xl font-[Oswald] font-light tracking-[0.3em] z-20 relative whitespace-nowrap">
                  ARREDAMENTI
                </span>
              </div>
            </div>
            <div className="hidden md:flex space-x-12 left-1/2 transform -translate-x-1/2">
              <a
                href="/"
                ref={navelem}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                Home
              </a>
              <a
                ref={naveleme}
                href="/about"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                About
              </a>
              <a
                ref={navelemen}
                href="/contact"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                Contact
              </a>
            </div>

            {/* HAMBURGER MENU MOBILE */}
            <button
              className="md:hidden text-white pb-6.5"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* SIDE MENU MOBILE */}
            <div
              className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-90 transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 flex flex-col p-6 space-y-6`}
            >
              <a
                href="/"
                className="text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* NAVBAR SECONDARIA */}
      <div
        ref={altNavRef}
        className="fixed z-20 top-0 left-0 w-full bg-red-950 p-4 flex justify-center space-x-12 opacity-0 -translate-y-24"
      >
        <a href="/assistenza" className="text-white hover:text-gray-300">
          Assistenza Post Vendita
        </a>
        <a href="/montaggio" className="text-white hover:text-gray-300">
          Montaggio e Consegna
        </a>
      </div>
    </>
  );
};

export default Navbar;
