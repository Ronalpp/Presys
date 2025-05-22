import { FaWater, FaSeedling, FaTree } from "react-icons/fa";

const courses = [
  {
    title: "Nivel básico",
    description: "Un curso básico diseñado para quienes están comenzando.",
    icon: FaWater,
    color: "from-orange-400 to-yellow-300",
  },
  {
    title: "Nivel intermedio",
    description:
      "Un curso de nivel intermedio para quienes ya dominan los conceptos básicos de la gramática inglesa.",
    icon: FaSeedling,
    color: "from-green-400 to-emerald-300",
  },
  {
    title: "Nivel avanzado",
    description:
      "Un curso avanzado para quienes desean perfeccionar su inglés.",
    icon: FaTree,
    color: "from-purple-400 to-blue-300",
  },
];

export default function Leves() {
  return (
    <div className="bg-white h-auto py-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-white transform rotate-45 scale-150 "></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-black text-center text-blue-900 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600">
            Cursos de Inglés
          </span>
        </h1>
        <p className="text-2xl text-center text-gray-700 mb-12">
          Inicia tu viaje en el idioma con nuestras rutas de aprendizaje innovadoras
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${course.color} rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2`}
              ></div>
              <div className="relative bg-white bg-opacity-90 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                <div className="p-8">
                  <course.icon className="w-16 h-16 mx-auto text-blue-900 mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 text-center">
                    {course.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
