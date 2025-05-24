import { BarChart, ClipboardCheck, Book, Globe } from "lucide-react";
import image17 from  "../../assets/IMG-20250521-WA0017.jpg";
import image8 from "../../assets/IMG-20250521-WA0008.jpg";
import image20 from "../../assets/IMG-20250521-WA0020.jpg";
import image18 from "../../assets/IMG-20250521-WA0018.jpg";

export const features = [
  {
    id: 1,
    icon: <BarChart className="w-10 h-10" />,
    title: "Comprende tu nivel de inglés",
    description:
      "Conoce más sobre los diferentes niveles del MCER y lo que los estudiantes pueden hacer en cada uno.",
    color: "bg-blue-100 text-blue-600",
    image: image17,
        slug: "live-cl",
    question: "¿Qué es el MCER?",
    about: [
      "El Marco Común Europeo de Referencia para las Lenguas (MCER) es un sistema estandarizado utilizado para medir la competencia lingüística en Europa y más allá.",
      "Proporciona una forma clara y coherente de describir las habilidades lingüísticas, facilitando que los estudiantes comprendan su nivel y establezcan metas de mejora.",
      "El MCER se divide en seis niveles: A1, A2, B1, B2, C1 y C2, siendo A1 el más bajo y C2 el más alto.",
      "Conocer tu nivel según el MCER te permite elegir materiales y cursos adecuados para tu progreso, optimizando tu aprendizaje.",
      "Además, muchas instituciones educativas y empresas reconocen el MCER como referencia internacional, lo que facilita la validación de tus conocimientos en distintos contextos."
    ],
  },
  {
    id: 2,
    icon: <ClipboardCheck className="w-10 h-10" />,
    title: "Prueba de inglés",
    description:
      "Obtén una indicación de tu dominio del inglés para ayudarte a elegir materiales de aprendizaje en el nivel adecuado.",
    color: "bg-green-100 text-green-600",
    image: image8,
    slug: "online",
    question: "¿Qué es la prueba de inglés?",
    about: [
      "La prueba de inglés es una forma rápida y sencilla de evaluar tus habilidades lingüísticas y determinar tu nivel MCER.",
      "Normalmente consiste en preguntas de opción múltiple que cubren gramática, vocabulario, comprensión lectora y auditiva.",
      "Los resultados te ayudarán a identificar tus fortalezas y debilidades, permitiéndote enfocarte en las áreas que necesitas mejorar.",
      "Realizar pruebas periódicas te permite medir tu avance y ajustar tu plan de estudio para alcanzar tus objetivos de manera más eficiente.",
      "Además, estas pruebas pueden aumentar tu confianza al mostrarte de manera tangible tu progreso en el idioma."
    ],
  },
  {
    id: 3,
    icon: <Book className="w-10 h-10" />,
    title: "Horarios flexibles",
    description:
      "Recibe un plan de estudio personalizado según tu nivel actual y tus objetivos de aprendizaje.",
    color: "bg-purple-100 text-purple-600",
    image: image20,
        slug: "live",
    question: "¿Ofrecen horarios flexibles para estudiar?",
    about: [
      "Sí, ofrecemos horarios flexibles para adaptarnos a tus necesidades. Puedes elegir el horario y la frecuencia de tus clases según tu disponibilidad.",
      "Nuestra plataforma te permite reservar clases cuando te convenga, asegurando que puedas incorporar el aprendizaje del inglés en tu vida ocupada.",
      "Ya sea que prefieras sesiones por la mañana, tarde o noche, tenemos opciones disponibles para ajustarnos a tu horario.",
      "La flexibilidad en los horarios te ayuda a mantener la constancia y el compromiso con tu aprendizaje, sin sacrificar otras actividades importantes.",
      "Además, puedes reprogramar tus clases fácilmente en caso de imprevistos, para que nunca pierdas una oportunidad de aprender."
    ],
   
  },
  {
    id: 4,
    icon: <Globe className="w-10 h-10" />,
    title: "Practica con profesores altamente capacitados y profesionales",
    description:
      "Participa en conversaciones reales con hablantes de inglés de todo el mundo.",
    color: "bg-yellow-100 text-yellow-600",
    image: image18,
    slug: "native",
    question: "¿Con quién practicaré y cómo mejorará eso mi inglés en situaciones reales?",
    about: [
      "Practicarás con profesores altamente calificados y profesionales que son hablantes nativos o tienen un dominio casi nativo del inglés.",
      "Nuestros profesores provienen de diversos orígenes y culturas, brindándote una experiencia de aprendizaje enriquecedora que va más allá de las habilidades lingüísticas.",
      "Participar en conversaciones reales con hablantes nativos te ayudará a mejorar tu fluidez, pronunciación y comprensión de expresiones idiomáticas.",
      "Las sesiones prácticas te permitirán ganar confianza para comunicarte en situaciones cotidianas, laborales o académicas.",
      "Además, recibirás retroalimentación personalizada para corregir errores y perfeccionar tu uso del idioma en contextos reales."
    ]
  },
];
