import { Coffee, Book, Users, Monitor } from "lucide-react";
import image5 from "../../assets/IMG-20250521-WA0005.jpg";
import image13 from "../../assets/IMG-20250521-WA0013.jpg";
import image15 from "../../assets/IMG-20250521-WA0015.jpg";
import image2 from "../../assets/IMG-20250521-WA0002.jpg";

export const courses = [
  {
    icon: <Coffee className="w-12 h-12" />,
    title: "Clases presenciales",
    description: "Clases online grupales y particulares con profesores expertos.",
    category: "interactive",
    color: "bg-purple-100 text-purple-600",
    hover: "hover:bg-purple-200",
    image:
      image5,
    slug: "clases-en-vivo",
    question: "¿Por qué elegir clases presenciales?",
    learnPoints: [
      "Interacción directa con profesores y compañeros para mejorar la práctica oral",
      "Adaptación del ritmo y enfoque a tus necesidades específicas",
      "Fomento de la disciplina y el compromiso en el aprendizaje"
    ],
    about: [
      "Las clases en vivo ofrecen una experiencia de aprendizaje dinámica y participativa, donde podrás interactuar directamente con profesores expertos y compañeros. Esto favorece la práctica oral y la resolución inmediata de dudas.",
      "Al participar en clases grupales o individuales, podrás adaptar el ritmo y enfoque a tus necesidades específicas, logrando un progreso rápido y efectivo en tus habilidades comunicativas y comprensión del idioma.",
      "Estas sesiones fomentan la disciplina y el compromiso, ayudándote a establecer una rutina constante de estudio y mejorando tu confianza para usar el idioma en situaciones reales."
    ]
  },
  {
    icon: <Book className="w-12 h-12" />,
    title: "Preparación para IELTS",
    description: "Consigue la puntuación que necesitas con clases online y presenciales.",
    category: "exam",
    color: "bg-blue-100 text-blue-600",
    hover: "hover:bg-blue-200",
    image: image13,
    slug: "preparacion-ielts",
    question: "¿Por qué prepararte para el IELTS?",
    learnPoints: [
      "Familiarización con el formato y tipos de preguntas del examen",
      "Desarrollo de estrategias para gestionar el tiempo durante la prueba",
      "Práctica con materiales y simulacros reales para aumentar la confianza"
    ],
    about: [
      "Este curso está diseñado para prepararte de forma integral para el examen IELTS, trabajando las cuatro habilidades evaluadas: lectura, escritura, escucha y expresión oral.",
      "Practicarás con materiales y simulacros reales que te ayudarán a familiarizarte con el formato del examen y a administrar mejor el tiempo durante la prueba, aumentando tus posibilidades de éxito.",
      "Con el apoyo de profesores especializados, recibirás retroalimentación personalizada para identificar y superar tus debilidades, fortaleciendo tus competencias lingüísticas y tu confianza para rendir el examen con seguridad."
    ]
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Tutoría personalizada",
    description: "Sesiones online uno a uno enfocadas en un plan personalizado.",
    category: "interactive",
    color: "bg-green-100 text-green-600",
    hover: "hover:bg-green-200",
    image: image15,
    slug: "tutoria-personalizada",
    question: "¿Por qué elegir tutoría personalizada?", 
    learnPoints: [
      "Atención individualizada para abordar tus necesidades y objetivos específicos",
      "Flexibilidad en horarios y contenidos para adaptarse a tu ritmo de aprendizaje",
      "Oportunidad de practicar conversación y recibir correcciones inmediatas"
    ],
    about: [
      "La tutoría personalizada te ofrece un acompañamiento exclusivo adaptado a tus objetivos, nivel y estilo de aprendizaje, asegurando que cada sesión se enfoque en tus áreas de mejora.",
      "Con la atención individual de un tutor, podrás practicar la conversación, resolver dudas específicas y recibir correcciones inmediatas que optimizan tu aprendizaje y confianza al hablar.",
      "Este formato flexible y centrado en ti fomenta un ambiente cómodo para experimentar con el idioma, mejorar la pronunciación y ampliar tu vocabulario de forma rápida y efectiva."
    ]
  },
  {
    icon: <Monitor className="w-12 h-12" />,
    title: "Cursos de autoestudio",
    description: "Aprende a tu propio ritmo con un curso online de autoaprendizaje.",
    category: "self-paced",
    color: "bg-yellow-100 text-yellow-600",
    hover: "hover:bg-yellow-200",
    image: image2,
    slug: "autoestudio",
    question: "¿Por qué elegir cursos de autoestudio?",
    learnPoints: [
      "Flexibilidad para aprender a tu propio ritmo y según tu disponibilidad",
      "Acceso a materiales interactivos y recursos multimedia para un aprendizaje dinámico",
      "Fomento de la autogestión y responsabilidad en el proceso de aprendizaje"
    ],
    about: [
      "Los cursos de autoestudio te permiten avanzar a tu ritmo, organizando tus tiempos y repasando los contenidos cuantas veces necesites para consolidar lo aprendido.",
      "Incluyen materiales interactivos, ejercicios prácticos y recursos multimedia que facilitan el aprendizaje autónomo, fomentando tu responsabilidad y motivación.",
      "Aprender de forma independiente fortalece tu disciplina y capacidad de autogestión, preparándote para usar el idioma con confianza en situaciones reales."
    ]
  },
];
