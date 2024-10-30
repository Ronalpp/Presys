import { motion } from "framer-motion";
import { learningData } from "../../constants/db/Data";

export default function Info() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Enpoderate con nosotros
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Unlock your potential with our comprehensive language learning
            tools.
          </p>
        </motion.header>

        <div className="space-y-12">
          {learningData.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <a
                className="overflow-hidden shadow-lg rounded-3xl"
                href={`/${section.slug}`}
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0 relative h-64 md:h-auto md:w-1/3">
                    <img
                      className="absolute inset-0 w-full h-full object-cover"
                      src={section.image}
                      alt={section.title}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">
                        {section.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="mb-4">
                      <div className="flex items-center text-2xl font-bold text-gray-800">
                        {section.icon}
                        <span className="ml-2">{section.title}</span>
                      </div>
                      <p className="text-gray-600">{section.description}</p>
                    </div>
                    <div>
                      <ul className="mt-4 space-y-2">
                        {section.bulletPoints.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <button className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-500 transition duration-300 text-lg">
                        Learn about {section.title}
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
