import React from "react";

export default function About() {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0c4da2]">QUIÉNES SOMOS</h2>
          <p className="text-gray-600">
            Academia de Lenguas de Santo Domingo es una institución dedicada a
            la enseñanza de idiomas.
          </p>
          <ul className="space-y-2">
            {["Inglés", "Francés", "Español", "Italiano"].map((language) => (
              <li
                key={language}
                className="flex items-center gap-2 text-gray-700"
              >
                <svg
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {language}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mt-4">
            Nuestro servicio personal, Profesores Nativos, la calidad con más de
            20 años de experiencia.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-red-500 rounded-full -z-10" />
          <img
            src="https://img.freepik.com/foto-gratis/turista-linda-haciendo-fotos_23-2147641172.jpg?semt=ais_hybrid"
            alt="Director"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
    </>
  );
}
