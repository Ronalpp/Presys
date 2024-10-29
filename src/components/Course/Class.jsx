import React from 'react';
import { motion } from 'framer-motion';

const FeatureItem = ({ text }) => (
  <motion.li
    className="flex items-start group"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className="text-blue-500 mr-4 text-2xl transition-transform duration-300 group-hover:scale-125">•</span>
    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{text}</span>
  </motion.li>
);

const ImageSection = ({ imageSrc, imageAlt }) => (
  <motion.div
    className="lg:w-1/2 flex justify-center"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative group">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="relative rounded-3xl shadow-xl transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  </motion.div>
);

const CourseFeatures = () => {
  const sections = [
    {
      title: "NUESTRO MODELO DE ENSEÑANZA",
      ventajas: [
        "Utilizamos software de aprendizaje interactivo diseñado para mejorar la experiencia educativa.",
        "Proveemos acceso a libros digitales actualizados para reforzar el contenido de las clases.",
        "Integramos herramientas como Kahoot para hacer que el aprendizaje sea dinámico y divertido.",
        "Ofrecemos clases prácticas enfocadas en mejorar las habilidades de escucha, habla, lectura y escritura.",
        "Nuestros materiales están adaptados para todos los niveles, desde principiante hasta avanzado."
      ],
      imageSrc: "https://imgs.search.brave.com/tnxavLt75tEsZp0U8tow8OxKREpPkAw3spYvPWP_2nQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg1/NzYwMzQ4L3Bob3Rv/L2xpdHRsZS1ib3kt/cG9ydHJhaXQtaW4t/dGhlLWRhcmstbWFr/aW5nLWhvcnJvci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/cW1nZjNKa0lIRTF2/VERoVktoVVk4S3NB/b1NJQlhXNmxaMmVo/cEVzanE3Yz0",
      imageAlt: "Aula con tecnología educativa"
    },
    {
      title: "BENEFICIOS DEL CURSO PRESYS",
      ventajas: [
        "Clases interactivas con tecnología moderna para optimizar el aprendizaje.",
        "Actividades diseñadas para mejorar la fluidez en situaciones reales.",
        "Evaluaciones continuas para medir el progreso de cada estudiante.",
        "Acceso a tutorías y materiales adicionales para apoyo fuera del aula.",
        "Certificación al finalizar el curso."
      ],
      imageSrc: "https://imgs.search.brave.com/tnxavLt75tEsZp0U8tow8OxKREpPkAw3spYvPWP_2nQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg1/NzYwMzQ4L3Bob3Rv/L2xpdHRsZS1ib3kt/cG9ydHJhaXQtaW4t/dGhlLWRhcmstbWFr/aW5nLWhvcnJvci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/cW1nZjNKa0lIRTF2/VERoVktoVVk4S3NB/b1NJQlhXNmxaMmVo/cEVzanE3Yz0",
      imageAlt: "Estudiantes participando en una clase interactiva"
    },
  ];

  return (
    <div className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-blue-100">
      <div className="absolute inset-0 bg-white opacity-30 transform -skew-y-12"></div>
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            <div className="lg:w-1/2">
              <motion.h2
                className="text-4xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {section.title}
              </motion.h2>
              <ul className="space-y-6">
                {section.ventajas.map((ventaja, vIndex) => (
                  <FeatureItem key={vIndex} text={ventaja} />
                ))}
              </ul>
            </div>
            <ImageSection imageSrc={section.imageSrc} imageAlt={section.imageAlt} />
          </div>
        </motion.div>
      ))}
      
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-indigo-200 to-transparent"></div>
    </div>
  );
};

export default CourseFeatures;