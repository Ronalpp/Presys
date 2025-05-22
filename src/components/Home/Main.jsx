import { motion } from "framer-motion";
import image14 from "../../assets/IMG-20250521-WA0014.jpg";

const MotionSection = ({ children, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="py-10 sm:py-16 md:py-20"
  >
    {children}
  </motion.section>
);

export default function Main() {
  return (
    <>
      <div className="w-full h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center  overflow-hidden relative">
       <img src={image14} alt="image14" className="w-full h-full object-cover object-center absolute top-0 left-0" />
        <div className="w-full h-full bg-black/60 absolute top-0 left-0"></div>

        <MotionSection>
          <div
            id="home"
            className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-16 text-center"
          >
            <motion.h1
              className="text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Domina el inglés, <br className="hidden xs:block" />
              abre puertas al mundo
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="/inscriptions"
                className="bg-blue-600 text-white font-bold py-3 px-6 sm:px-8 rounded-full hover:bg-blue-500 transition duration-300 text-base sm:text-lg"
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
