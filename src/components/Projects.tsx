import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import GCS from "../assets/GCS.png";

interface Project {
  title: string;
  duration: string;
  description: string;
  technologies: string[];
  imageSrc?: string;
  category: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const projects: Project[] = [
    {
      title: 'Ground Control Station GUI for MAVProxy',
      duration: '07/2024 - Present',
      description: 'Currently developing a custom Python-based GUI to interface with MAVProxy for drone control and monitoring. The project focuses on integrating the MAVProxy backend to handle real-time commands, telemetry, and data visualization.',
      technologies: ['Python', 'GUI Development', 'MAVProxy', 'Drone Simulation'],
      imageSrc: GCS,
      category: 'Current'
    },
    {
      title: 'Voice Assistant based on TTS',
      duration: '04/2025 - Present',
      description: 'Building a modular voice assistant using Python with Text-to-Speech capabilities. Implemented core features such as real-time date/time retrieval, sending messages, system shutdown, and launching web browsers via voice commands. Integrated DevOps practices by setting up GitHub Actions for automated testing and continuous integration, ensuring reliable builds and structured development flow.',
      technologies: ['Python', 'Text-to-Speech (TTS)', 'GitHub Actions', 'DevOps', 'CI/CD'],
      imageSrc: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      category: 'Current'
    },
    {
      title: 'Sales and Inventory Tracker (GUI App)',
      duration: '01/2024 - 03/2025',
      description: 'Developed a Tkinter application for a restaurant to manage products, stock levels, pricing, and sales reports with basic data analysis.',
      technologies: ['Python', 'Tkinter', 'Database', 'GUI Development'],
      imageSrc: 'https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg',
      category: 'Past'
    },
    {
      title: 'Face Recognition-Based Attendance System',
      duration: '07/2024 - 09/2024',
      description: 'Developed a Python-based system using OpenCV, Facial recognition, Tkinter, and CSV to recognize faces and mark attendance with a login and registration feature.',
      technologies: ['Python', 'OpenCV', 'Facial Recognition', 'Tkinter', 'CSV'],
      imageSrc: 'https://images.pexels.com/photos/5752251/pexels-photo-5752251.jpeg',
      category: 'Past'
    },
    {
      title: 'Website Scraper in Java',
      duration: '05/2023 - 06/2023',
      description: 'Java-based website scraper that efficiently extracts data from web pages using Jsoup. Ideal for gathering information, automating data collection, and integrating with other Java applications.',
      technologies: ['Java', 'Jsoup', 'Web Scraping'],
      imageSrc: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
      category: 'Past'
    }
  ];

  const categories = ['All', 'Current', 'Past'];
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
    <section id="projects" className="py-20 bg-light-100 dark:bg-dark-200 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Personal Projects
          </h2>
          <p className="text-dark-400 dark:text-light-400 max-w-2xl mx-auto">
            A showcase of projects I've developed, highlighting my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-light-300 dark:bg-dark-300 rounded-full p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-dark-400 dark:text-light-400 hover:bg-light-400 dark:hover:bg-dark-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glassmorphism rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              {project.imageSrc && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.imageSrc} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-dark-100 dark:text-light-100">{project.title}</h3>
                  <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded">
                    {project.duration}
                  </span>
                </div>
                <p className="text-dark-300 dark:text-light-300 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-light-300 dark:bg-dark-300 text-dark-400 dark:text-light-400 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm"
                >
                  <span>View Details</span>
                  <ArrowRight size={16} className="ml-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-dark-400 dark:text-light-400 mb-6">
            Additionally working on 4 industry sponsored projects which are under NDA
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium rounded-full hover:bg-primary-100 dark:hover:bg-primary-800/30 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowUpRight size={18} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;