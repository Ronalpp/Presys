import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Coffee, Book, Users, Monitor } from 'lucide-react';

export default function Component() {
  const [filter, setFilter] = useState('all');

  const courses = [
    {
      icon: <Coffee className="w-12 h-12" />,
      title: "Live classes",
      description: "Group and one-to-one online classes with expert teachers.",
      category: 'interactive',
      color: 'bg-purple-100 text-purple-600',
      hover: 'hover:bg-purple-200',
    },
    {
      icon: <Book className="w-12 h-12" />,
      title: "IELTS preparation",
      description: "Get the score you need with private and group online classes.",
      category: 'exam',
      color: 'bg-blue-100 text-blue-600',
      hover: 'hover:bg-blue-200',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Personal tutoring",
      description: "One-to-one online sessions focused on a personal plan.",
      category: 'interactive',
      color: 'bg-green-100 text-green-600',
      hover: 'hover:bg-green-200',
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Self-study courses",
      description: "Learn at your own pace with a self-study online course.",
      category: 'self-paced',
      color: 'bg-yellow-100 text-yellow-600',
      hover: 'hover:bg-yellow-200',
    }
  ];

  // Solo se filtra por 'all'
  const filteredCourses = courses; // Mantiene todos los cursos

  return (
    <div className="bg-white w-auto p-8 font-sans">
      <motion.h2 
        className="text-5xl font-bold text-center mb-12 text-indigo-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Discover Our Popular Online Courses
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filteredCourses.map((course, index) => (
          <motion.div
            key={index}
            className={`${course.color} ${course.hover} rounded-xl p-6 flex flex-col items-center text-center shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2`}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <motion.div
              className="mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {course.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold mb-3">{course.title}</h3>
            <p className="mb-4">{course.description}</p>
            <motion.button
              className="mt-auto bg-white text-indigo-600 px-4 py-2 rounded-full font-semibold flex items-center transition-all duration-300 ease-in-out hover:bg-indigo-600 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More <ChevronRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
