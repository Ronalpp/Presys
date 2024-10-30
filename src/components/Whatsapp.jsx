import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8297661777"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-gray-50 text-green-500 flex items-center justify-center px-4 py-2 rounded-full shadow-lg hover:bg-green-100 transition-colors duration-300 z-50"
    >
      <FaWhatsapp className="mr-2 w-7 h-8 " />
      <div className=" flex-row font-bold hidden md:block ">
        <p className="text-lg ">Envianos un mensaje</p>
      </div>
    </a>
  );
}
