import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Maps() {
  const contactInfo = [
    { icon: <FaPhoneAlt />, label: "Teléfono", value: "+1 (829) 766-1777" },
    {
      icon: <FaMapMarkerAlt />,
      label: "Dirección",
      value: "Plaza Nica, Santo Domingo, República Dominicana",
    },
    { icon: <FaEnvelope />, label: "Correo", value: "emailspresys@gmail.com" },
    {
      icon: <FaClock />,
      label: "Horario",
      value: "Lun - Dom: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="w-full py-10 px-4 md:px-8 xl:px-[5%] 2xl:px-[10%] ">
      <h1 className="text-5xl font-bold text-center text-blue-900 mb-12">
        Encuéntranos
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 bg-white rounded-2xl shadow-2xl overflow-hidden">
        <section className="w-full lg:w-3/5 h-[400px] lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1891.8923999989315!2d-69.7779495!3d18.4934045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf87da0ea58b87%3A0x8e8c1c2c080914a!2sPlaza%20Nica.!5e0!3m2!1ses!2sdo!4v1731156719587!5m2!1ses!2sdo"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Plaza Nica"
          ></iframe>
        </section>
        <section className="w-full lg:w-2/5 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Estamos ubicado en:
          </h2>
          <ul className="space-y-6">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center text-blue-800">
                  {item.icon}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-3xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <FaPhoneAlt className="mr-2" />
              Contactanos
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
