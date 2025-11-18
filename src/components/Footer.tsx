import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <div className="pt-50">
      <footer className="bg-red-950 text-white w-full py-14 flex flex-col items-center justify-center">
        {/* Contenuto principale */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-16 w-full max-w-5xl">
          {/* Contatti */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-3">Contatti</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center justify-center gap-3">
                <Phone size={18} /> +39 123 456 789
              </li>
              <li className="flex items-center justify-center gap-3">
                <Mail size={18} /> info@arredidesign.it
              </li>
              <li className="flex items-center justify-center gap-3">
                <MapPin size={18} /> Via Roma 25, Milano (MI)
              </li>
            </ul>
            {/* Social */}
            <div className="flex flex-col items-center text-center pt-10">
              <div className="flex gap-5">
                <Instagram
                  className="cursor-pointer hover:text-gray-300 transition"
                  size={24}
                />
                <Facebook
                  className="cursor-pointer hover:text-gray-300 transition"
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-10 pt-5 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} ArrediDesign • Tutti i diritti riservati
        </div>
      </footer>
    </div>
  );
};

export default Footer;
