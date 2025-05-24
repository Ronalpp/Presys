import back from "../../assets/back.jpg"

export default function About() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 relative">
          <span className="text-blue-500 font-semibold text-lg md:text-xl">Conócenos</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mt-2 tracking-tight">
            Practical English System
            <span className="text-blue-500">   (Presys)</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              En PRESYS de inglés, nos dedicamos a brindar una educación de calidad adaptada a las necesidades de cada
              estudiante. Con un enfoque comunicativo y dinámico, ayudamos a niños, jóvenes y adultos a desarrollar su
              confianza y habilidades en el idioma inglés.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Nuestro compromiso es crear un ambiente motivador, donde aprender sea una experiencia práctica, útil y
              enriquecedora. ¡Aprender inglés con nosotros es abrir la puerta a nuevas oportunidades!
            </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "+3.5", label: "Años de experiencia", icon: "⏱️" },
                { value: "+200", label: "Estudiantes", icon: "👨‍🎓" },
                { value: "+200", label: "Reseñas positivas", icon: "⭐" },
                { value: "+15", label: "Profesores", icon: "👨‍🏫" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center justify-center text-center"
                >
                  <div className="text-3xl mb-1">{item.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{item.value}</h3>
                  <p className="text-sm text-gray-600 mt-1 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 transform hover:scale-[1.01] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent z-10"></div>
              <img
                src={back}
                alt="Estudiantes aprendiendo inglés en PRESYS"
                className="w-full h-[350px] md:h-[400px] object-cover transform scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20">
                <p className="text-white font-medium text-lg">Creando experiencias de aprendizaje significativas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
