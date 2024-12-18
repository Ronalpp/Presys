import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { features } from "../../constants/db/work";

export default function Work() {
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
                <a href={`/work/${feature.slug}`} className="flex items-center">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </a>
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
          <a href="/inscriptions">
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
          </a>
        </motion.div>
      </div>
    </main>
  );
}
