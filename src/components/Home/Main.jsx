import { useEffect } from "react";
import { motion } from "framer-motion";

const MotionSection = ({ children, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="py-20"
  >
    {children}
  </motion.section>
);

export default function Main() {
  return (
    <>
      <div className="w-full h-[50vh] md:h-[70vh]  lg:h-[80vh] sm:h-[80vh] bg-gray-100 flex flex-col justify-center items-center relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="
https://firebasestorage.googleapis.com/v0/b/pepe-cd754.appspot.com/o/2024-10-24%2018-29-16.mp4?alt=media&token=16e34619-97ae-479c-945c-3ff60f898e60"
            type="video/mp4"
          />
          Tu navegador no soporta el video.
        </video>

        <MotionSection>
          <div
            id="home"
            className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center md:pt-40"
          >
            <motion.h1
              className="text-4xl font-extrabold text-white md:text-6xl mb-6 "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Domina el inglés <br />
              abre puertas al mundo
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="/inscriptions"
                className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-500 transition duration-300 text-lg"
              >
                ¡Inscríbete ya!
              </a>
            </motion.div>
          </div>
        </MotionSection>
      </div>
    </>
  );
}
