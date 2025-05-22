import { Pencil, MessageSquare, Book } from "lucide-react";
import image11 from "../../assets/IMG-20250521-WA0011.jpg";
import image12 from "../../assets/IMG-20250521-WA0012.jpg";
import image21 from "../../assets/IMG-20250521-WA0021.jpg";

export const learningData = [
  {
    id: 1,
    title: "Habilidades",
    description:
      "Mejora tus habilidades de lectura, escritura, escucha y conversación para desenvolverte en situaciones reales. Practica con audios, videos y ejercicios interactivos que te ayudarán a desarrollar tu comprensión y fluidez de manera efectiva.",
    image: image11,
    icon: <MessageSquare className="w-6 h-6" />,
    bulletPoints: [
      "Audio y video para practicar tus habilidades de escucha y habla",
      "Ejercicios interactivos para ayudarte a recordar nuevo vocabulario",
      "Textos que mejoran tu comprensión lectora en contextos reales",
    ],
    slug: "skills",
    subTitle: "¿Qué son las skills?",
    question: "¿Qué habilidades obtendré?",
    about: [
      "Con este módulo obtendrás la habilidad de participar en conversaciones espontáneas con fluidez y naturalidad, adaptándote a distintos registros y contextos sociales.",
      "Desarrollarás la capacidad de comprender audios y videos de hablantes nativos, distinguiendo acentos y matices, lo que te permitirá seguir películas, conferencias y entrevistas sin dificultad.",
      "Mejorarás tu expresión escrita y comprensión lectora, redactando correos, informes y documentos con claridad, así como interpretando textos complejos en contextos profesionales y académicos."
    ],
    learnPoints: [
      "Comunicación espontánea en distintos registros y situaciones reales",
      "Comprensión de acentos y matices en audios y videos nativos",
      "Expresión escrita clara para correos, informes y documentos profesionales"
    ],
  },
  {
    id: 2,
    title: "Gramatica",
    description:
      "Revisa y practica tu gramática para mejorar tu nivel de inglés y aumentar tu confianza al comunicarte.",
    image: image12,
    icon: <Pencil className="w-6 h-6" />,
    bulletPoints: [
      "Explicaciones claras y simples para ayudarte a repasar diferentes temas gramaticales",
      "Ejercicios online para comprobar tu comprensión de la gramática",
      "Referencia gramatical para practicar más a fondo y resolver dudas",
    ],
    slug: "grammar",
    question: "¿Qué conocimientos de gramática adquiriré?",
    about: [
      "Con este módulo dominarás la construcción de oraciones complejas, usando correctamente tiempos verbales, voz pasiva y estructuras condicionales para expresar ideas con precisión.",
      "Adquirirás la habilidad de seleccionar preposiciones y conectores adecuados, logrando coherencia y cohesión en tus textos escritos y discursos orales.",
      "Refinarás tu conocimiento gramatical para evitar errores comunes, incrementando tu credibilidad y confianza al redactar correos, presentar informes y participar en debates."
    ],
    learnPoints: [
      "Construcción de oraciones complejas con tiempos verbales y estructuras avanzadas",
      "Uso preciso de preposiciones y conectores para coherencia textual",
      "Reducción de errores gramaticales en comunicación escrita y oral"
    ],
  },
  {
    id: 3,
    title: "Vocabulario",
    description:
      "Aprende nuevas palabras y frases para mejorar tu nivel de inglés y comunicarte con mayor eficacia.",
    image:
  image21,
    icon: <Book className="w-6 h-6" />,
    bulletPoints: [
      "Actividades online para aprender el significado, pronunciación y escritura de nuevas palabras",
      "Vocabulario en una gran variedad de temas y contextos",
      "Referencia de vocabulario con definiciones y ejemplos",
    ],
    slug: "vocabulary",
    question: "¿Qué tipo de vocabulario aprenderé?",
    about: [
      "Con este módulo ampliarás tu repertorio de palabras y expresiones especializadas en áreas como negocios, tecnología, salud y viajes, mejorando tu versatilidad comunicativa.",
      "Desarrollarás fluidez al incorporar phrasal verbs y colocaciones frecuentes, lo que te ayudará a sonar más natural y seguro en el habla cotidiana y profesional.",
      "Potenciarás tu capacidad para entender y producir textos complejos, enriqueciendo tus conversaciones y escritos con vocabulario preciso y contextualizado."
    ],
    learnPoints: [
      "Repertorio de vocabulario especializado por temáticas relevantes",
      "Uso natural de phrasal verbs y colocaciones comunes",
      "Expresión más rica y precisa en conversaciones y textos escritos"
    ],
  },
];
