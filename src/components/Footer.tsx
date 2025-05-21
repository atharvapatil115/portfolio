import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-100 dark:bg-dark-200 py-8 border-t border-light-300 dark:border-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-dark-300 dark:text-light-300 text-center md:text-left">
              © {currentYear} Atharva Patil. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center mt-4 md:mt-0"
          >
            <p className="text-dark-300 dark:text-light-300 flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;