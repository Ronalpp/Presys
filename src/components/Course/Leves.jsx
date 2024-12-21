import React from "react";
import { FaWater, FaSeedling, FaTree } from "react-icons/fa";

const courses = [
  {
    title: "Basic level",
    description: "A basic course designed for those who are beginning.",
    icon: FaWater,
    color: "from-orange-400 to-yellow-300",
  },
  {
    title: "Intermediate level",
    description:
      "An intermediate level course for those who have already mastered the basic concepts of English grammar.",
    icon: FaSeedling,
    color: "from-green-400 to-emerald-300",
  },
  {
    title: "Advanced level",
    description:
      "An advanced course for those who want to perfect their English.",
    icon: FaTree,
    color: "from-purple-400 to-indigo-300",
  },
];

export default function Leves() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-white transform rotate-45 scale-150 "></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-black text-center text-blue-900 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            English Courses
          </span>
        </h1>
        <p className="text-2xl text-center text-gray-700 mb-12">
          Embark on your language journey with our innovative learning paths
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${course.color} rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2`}
              ></div>
              <div className="relative bg-white bg-opacity-90 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                <div className="p-8">
                  <course.icon className="w-16 h-16 mx-auto text-blue-900 mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 text-center">
                    {course.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/inscriptions">
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Start Your Journey Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
