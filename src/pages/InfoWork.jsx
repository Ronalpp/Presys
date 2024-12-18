import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { features } from "../constants/db/work";

const HeroSection = ({ title, backgroundImage }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative h-[60vh] md:h-[80vh] overflow-hidden"
  >
    <motion.div
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 10 }}
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          {title}
        </h1>
      </motion.div>
    </div>
  </motion.section>
);

const ContentSection = ({ description }) => {
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
        {description}
      </motion.p>
      <motion.div
        initial={{ height: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Key Points:</h2>
      </motion.div>
    </motion.section>
  );
};

export default function InfoWork() {
  const { slug } = useParams();
  const [section, setSection] = useState(null);

  const foundSection = features.find((i) => i.slug === slug);

  useEffect(() => {
    setSection(foundSection);
  }, [slug]);

  console.log(section);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection title={section?.title} backgroundImage={section?.image} />
        <ContentSection description={section?.description} />
      </main>
    </div>
  );
}
