import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  ClipboardCheck,
  ArrowRight,
  Book,
  Globe,
} from "lucide-react";

export default function Work() {
  const features = [
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Understand your English level",
      description:
        "Learn more about the different CEFR levels and what learners at each level can do.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <ClipboardCheck className="w-10 h-10" />,
      title: "Free online English test",
      description:
        "Get an indication of your English proficiency to help you choose learning materials at the right level.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Book className="w-10 h-10" />,
      title: "Personalized learning path",
      description:
        "Receive a customized study plan based on your current level and learning goals.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Practice with native speakers",
      description:
        "Engage in real conversations with English speakers from around the world.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Elevate Your English Skills
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Embark on a journey to English fluency with our comprehensive tools
          and resources.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.color} rounded-3xl shadow-lg p-6 transform transition duration-500 hover:scale-105 reveal-left`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h2 className="text-2xl font-bold ml-4">{feature.title}</h2>
              </div>
              <p className="text-gray-800 mb-4">{feature.description}</p>
              <motion.button
                className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                whileHover={{ x: 5 }}
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to start your English journey?
          </h2>
          <p className="text-xl mb-8">
            Take our free assessment test and get a personalized learning plan
            today!
          </p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-bold shadow-lg transition duration-300 hover:bg-blue-100"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Assessment
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}
