import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import photo from '../assets/photo.jpg';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-light-200 to-light-300 dark:from-dark-100 dark:to-dark-200 z-0"></div>

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left column: Photo */}
          <motion.div
            variants={itemVariants}
            className="relative after-glow secondary-glow"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl transform rotate-3 transition-all hover:rotate-0 duration-500">
              <div className="relative pt-[125%]">
                <img
                  src={photo} // <- update this to the actual path
                  alt="Your Photo"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

            </div>
          </motion.div>

          {/* Right column: About me text */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
            >
              About Me
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-dark-300 dark:text-light-300 mb-4"
            >
              Computer Science student with hands-on experience in software development across frontend,
              backend, and GUI technologies. Proficient in Python and SQL, with a strong interest in
              machine learning.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-dark-300 dark:text-light-300 mb-4"
            >
              I'm eager to continuously apply my skills, learn, and contribute to impactful projects in a
              dynamic work environment.
            </motion.p>

            <motion.h3
              variants={itemVariants}
              className="text-xl font-semibold mt-8 mb-4"
            >
              Education
            </motion.h3>

            <motion.div
              variants={itemVariants}
              className="flex items-start mb-6"
            >
              <div className="mr-4 bg-primary-100 dark:bg-primary-900 p-2 rounded-lg">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium">B.Tech in Computer Science</h4>
                <p className="text-dark-400 dark:text-light-400">Annasaheb Dange College of Engineering and Technology, Ashta</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex mt-8 space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
              >
                Resume
              </motion.button>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 border border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-full font-medium hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;