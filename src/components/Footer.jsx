import React from "react";
import {
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Logo from "../assets/presys.png";

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "/" },
    { icon: Linkedin, href: "/" },
    { icon: Twitter, href: "/" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: "+1 (829) 766-1777",
      href: "tel:+8297661777",
    },
    {
      icon: Mail,
      text: "emailspresys@gmail.com",
      href: "mailto:emailspresys@gmail.com",
    },
    {
      icon: MapPin,
      text: "Av. Hipódromo, Santo Domingo Este",
      href: "https://maps.app.goo.gl/1eXqqNr2ZxEoHd7V8",
    },
  ];
  1;

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
              <img src={Logo} alt="Presys Logo" className="w-16" />
            </a>
            <h1 className="text-4xl font-black uppercase text-white">Presys</h1>
            <p className="text-gray-300 text-center">
              Somos un centro educativo comprometido con la excelencia en la
              enseñanza del ingles.
            </p>
          </div>
          {/* Social Media Section */}
          <div className="flex items-center">
            <ul className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    className="block transition-colors hover:text-white"
                    aria-label={`Visit our ${social.icon.name}`}
                  >
                    <social.icon className="h-7 w-7 text-gray-300 transition-colors hover:text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Contacto</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="flex items-center gap-2 text-ls text-gray-300 transition-colors hover:text-white"
                  >
                    <info.icon className="h-5 w-5" />
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Navegación
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-ls text-gray-300 transition-colors hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-ls text-gray-300">
          © {new Date().getFullYear()} Presys. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
