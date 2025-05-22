import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { learningData } from "../constants/db/Data";
import { motion } from "framer-motion";
import { Book, MessageSquare, Pencil } from "lucide-react";

const iconMap = {
  Skills: MessageSquare,
  Grammar: Pencil,
  Vocabulary: Book,
};

const HeroSection = ({ title, backgroundImage, icon: Icon }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative h-[30vh] md:h-[80vh] overflow-hidden"
  >
    <motion.div
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 10 }}
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center"
      >
        {Icon}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          {title}
        </h1>
      </motion.div>
    </div>
  </motion.section>
);

const LearnPoint = ({ text, index }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex items-start mb-6"
  >
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-4">
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
    </div>
    <p className="text-lg text-gray-700">{text}</p>
  </motion.li>
);

const ContentSection = ({ about, learnPoints, question  }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <motion.p
        className="text-xl text-gray-700 mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-800 ">{question}</h2>
        {about}
      </motion.p>
      <div>
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Puntos Clave:</h2>
        <ul className="space-y-4">
          {learnPoints.map((point, index) => (
            <LearnPoint key={index} text={point} index={index} />
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default function InfoDetails() {
  const { slug } = useParams();
  const [section, setSection] = useState(null);

  useEffect(() => {
    const foundSection = learningData.find((i) => i.slug === slug);
    setSection(foundSection);
  }, [slug]);

  if (!section) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-700 p-8 rounded-lg"
        >
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection
          title={section.title}
          backgroundImage={section.image}
          icon={iconMap[section.title]}
        />
        <ContentSection
          about={section.about}
          learnPoints={section.learnPoints}
          question={section.question}
        />
      </main>
    </div>
  );
}
