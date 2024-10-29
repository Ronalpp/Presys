import React from "react";
import { AirVent, Tv, FileVideo, Wifi } from "lucide-react";

export default function FacilitiesShowcase() {
  const facilities = [
    {
      icon: <AirVent className="w-16 h-16" />,
      title: "Aire Acondicionado",
      description: "Todos nuestras aulas cuentan con aire acondicionado.",
    },
    {
      icon: <Tv className="w-16 h-16" />,
      title: "Televisión",
      description: "Todas nuestras aulas cuentan con televisión e internet.",
    },
    {
      icon: <FileVideo className="w-16 h-16" />,
      title: "Archivos Multimedias",
      description: "Contamos con videos, audios, y software para mejorar la experiencia de aprendizaje.",
    },
    {
      icon: <Wifi className="w-16 h-16" />,
      title: "Internet",
      description: "Todas nuestras aulas cuentan con internet.",
    },
  ];

  return (
    <div className="bg-white text-blue-900 px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Contamos con:
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {facilities.map((facility, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-white bg-opacity-50 rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-3"></div>
              <div className="relative bg-white bg-opacity-75 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl p-8">
             
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 text-blue-600 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {facility.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-50"></div>
    </div>
  );
}