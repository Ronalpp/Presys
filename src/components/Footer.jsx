import React from "react";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/presys.png";

export default function Footer() {
  const socialLinks = [{ icon: Instagram, href: "/", name: "Instagram" }];

  const contactInfo = [
    {
      icon: Phone,
      text: "+1 (829) 766-1777",
      href: "tel:+18297661777",
    },
    {
      icon: Mail,
      text: "presys2023@gmail.com",
      href: "mailto:emailspresys@gmail.com",
    },
    {
      icon: MapPin,
      text: "Av. Hipódromo, Santo Domingo Este",
      href: "https://maps.app.goo.gl/1eXqqNr2ZxEoHd7V8",
    },
  ];

  const navLinks = [
    { text: "Inicio", href: "/" },
    { text: "Clases", href: "/course" },
    { text: "Nosotros", href: "/about" },
    { text: "Conviertete en profesor", href: "/teacher" },
    { text: "¡Inscríbete ya!", href: "/" },
  ];

  return (
    <footer className="bg-blue-900 p-10 font-bold tracking-wide">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-3">
            <a href="/" className="inline-block">
              <img src={logo} alt="Presys Logo" className="w-16 h-16" />
            </a>
            <h1 className="text-4xl font-black uppercase text-white">Presys</h1>
            <p className="text-gray-300 text-center">
              Somos un centro educativo comprometido con la excelencia en la
              enseñanza del inglés.
            </p>
          </div>

          <div className="flex flex-col  w-full">
            <h4 className="mb-6 text-lg font-semibold items-start text-white">
              Síguenos en:
            </h4>
            <div className="flex flex-row justify-center items-center space-x-4 mb-6">
              <a
                href="https://www.instagram.com/practicalenglishsystem/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-20 transition-all duration-300 hover:bg-opacity-100 hover:scale-110"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="h-7 w-7 text-white group-hover:text-blue-900 transition-colors duration-300" />
              </a>
            </div>
            <div className="flex items-center justify-center text-center max-w-xs">
              <p className="text-gray-300 text-xs">
                Recibe noticias y participa en encuestas para nuestra comunidad.
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Contacto</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="flex items-center gap-2 text-ls text-gray-300 transition-colors hover:text-white group"
                  >
                    <info.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                    <span className="group-hover:underline">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Navegación
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-ls text-gray-300 transition-colors hover:text-white hover:underline"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-ls text-gray-300 text-center">
          © {new Date().getFullYear()} Presys. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
