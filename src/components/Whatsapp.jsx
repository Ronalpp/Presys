import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const WhatsAppButton = ({
  phoneNumber = "8297661777",
  message = "¡Hola! Me gustaría obtener más información.",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          fixed bottom-4 right-4 z-50 
          bg-green-500 hover:bg-green-600 text-white
          transition-all duration-300 ease-in-out
          ${isHovered ? "shadow-lg scale-105" : "shadow-md scale-100"}
          flex items-center justify-center gap-2 px-4 py-3 rounded-full
        `}
        aria-label="Enviar mensaje por WhatsApp"
        data-tooltip-id="whatsapp-tooltip"
        data-tooltip-content="Chatea con nosotros en WhatsApp"
      >
        <FaWhatsapp className={`w-6 h-6 ${isHovered ? "animate-pulse" : ""}`} />
        <span className="font-bold text-sm sm:text-base hidden sm:inline">
          Envíanos un mensaje
        </span>
      </button>
      <Tooltip id="whatsapp-tooltip" place="left" />
    </>
  );
};

export default WhatsAppButton;
