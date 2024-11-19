import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import presys from "../assets/presys.png";

import {
  Home,
  Users,
  BookOpen,
  User,
  Menu,
  Phone,
  SquarePen,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Clases", href: "/course", icon: BookOpen },
    { name: "Nosotros", href: "/about", icon: Users },
    { name: "Conviértete en profesor", href: "/teacher", icon: User },
    { name: "¡Inscríbete ya!", href: "/inscriptions", icon: SquarePen },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-[3.75rem] font-bold fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrollY > 0 ? "bg-blue-900" : "bg-transparent"
      } text-white flex justify-between items-center lg:px-[2%]`}
    >
      <a href="/">
        <div className="h-full flex items-center gap-2 px-4">
          <img src={presys} className="w-12" />
          <h4 className={"font-black text-2xl uppercase "}>
            Practical English System
          </h4>
        </div>
      </a>

      <button
        onClick={toggleMenu}
        className={`h-full lg:hidden text-white px-4 ${isOpen ? "" : ""}`}
      >
        <Menu size={24} color={`${isOpen ? "#141519" : "#fff"}`} />
      </button>

      <div className="hidden lg:flex lg:items-center lg:gap-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className=" transition-all duration-200"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="hidden lg:block">
        <a
          href="/contact"
          className="bg-white text-[#141519] font-semibold py-2 px-4 rounded-full lg:ml-4"
        >
          Contactanos
        </a>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`w-[80%] bg-blue-900 flex flex-col gap-4 fixed font-semibold top-[3.75rem] right-0 p-4 z-50 xs:w-[50%] rounded-bl-3xl lg:hidden`}
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-4 hover:text-green-400bg-green-400 transition-all duration-200"
              >
                <item.icon size={24} />
                <span>{item.name}</span>
              </a>
            ))}
            <a
              href="/contact"
              className="bg-white text-[#141519] text-center font-semibold py-2 px-4 rounded-full lg:ml-4 flex justify-center items-center gap-2"
            >
              <Phone />
              Contactanos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
