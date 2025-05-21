import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDownCircle, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Load the video dynamically to ensure it's handled properly
    if (videoRef.current) {
      videoRef.current.src = "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-source-code-on-a-screen-33624-large.mp4";
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Auto-play prevented:", e));
    }
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <video 
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="video-bg"
      >
        <source type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay to darken video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 dark:from-black/70 dark:to-black/90 z-0"></div>
      
      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative after-glow primary-glow"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 font-display">
            Atharva Patil
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-light-100 font-medium mb-8 h-16"
        >
          <TypeAnimation
            sequence={[
              'Computer Science Student',
              1500,
              'Python Developer',
              1500,
              'Machine Learning Enthusiast',
              1500,
              'Frontend Developer',
              1500,
              'GUI Application Developer',
              1500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400"
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-light-200 max-w-2xl mb-8"
        >
          Passionate about applying software development skills across frontend, 
          backend, and emerging technologies to create impactful solutions.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex space-x-4 mb-12"
        >
          <motion.a
            href="https://github.com/atharvapatil115" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white text-dark-100 px-6 py-3 rounded-full font-medium transition-transform hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/atharvapatil115/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-transform hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </motion.a>
        </motion.div>
        
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.2,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
          className="text-light-100 absolute bottom-8"
        >
          <ArrowDownCircle size={36} className="animate-pulse" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;