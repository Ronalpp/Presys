import React from "react";
import kid from "../../assets/kid.png";
import adulto from "../../assets/adulto.png";
import mujer from "../../assets/mujer.png";

const edades = [
  {
    title: "Niños",
    image: kid,
    color: "from-blue-400 to-cyan-300",
    shape: "rounded-tl-[80px] rounded-br-[80px]",
  },
  {
    title: "Adolescentes",
    image: mujer,
    color: "from-pink-400 to-purple-300",
    shape: "rounded-[80px] rounded-bl-[80px]",
  },
  {
    title: "Adultos",
    image: adulto,
    color: "from-indigo-400 to-blue-300",
    shape: "rounded-tr-[80px] rounded-bl-[80px]",
  },
];

const EdadCard = ({ edad }) => {
  return (
    <div
      className={`relative overflow-hidden ${edad.shape} shadow-lg transition-all duration-500 hover:shadow-2xl group`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${edad.color} opacity-75 transition-opacity duration-500 group-hover:opacity-90`}
      />
      <img
        src={edad.image}
        alt={edad.title}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h2 className="text-4xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {edad.title}
        </h2>
        <p className="text-white text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          Descubre actividades adaptadas para {edad.title.toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default function AgeGroupsShowcase() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
          Edades
        </h1>
        <p className="text-2xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Nuestros programas están cuidadosamente adaptados para cada etapa de
          la vida, asegurando un aprendizaje óptimo y personalizado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {edades.map((edad) => (
            <EdadCard key={edad.title} edad={edad} />
          ))}
        </div>
      </div>
    </section>
  );
}
