import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  GitBranch, 
  Laptop, 
  Braces, 
  Server, 
  Globe, 
  Eye 
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const skills: Skill[] = [
    { name: 'Python', level: 90, category: 'Languages', icon: <Code size={24} /> },
    { name: 'SQL', level: 75, category: 'Data', icon: <Database size={24} /> },
    { name: 'Java', level: 70, category: 'Languages', icon: <Code size={24} /> },
    { name: 'Machine Learning', level: 80, category: 'AI', icon: <Braces size={24} /> },
    { name: 'Web Development', level: 70, category: 'Web', icon: <Globe size={24} /> },
    { name: 'Computer Networking', level: 75, category: 'Infrastructure', icon: <Server size={24} /> },
    { name: 'Git & Github', level: 85, category: 'Tools', icon: <GitBranch size={24} /> },
    { name: 'Tkinter', level: 80, category: 'GUI', icon: <Laptop size={24} /> },
    { name: 'OpenCV', level: 75, category: 'Libraries', icon: <Eye size={24} /> },
    { name: 'PySide6', level: 65, category: 'GUI', icon: <Laptop size={24} /> },
    { name: 'TextToSpeech', level: 75, category: 'AI', icon: <Braces size={24} /> },
    { name: 'Drone Simulation', level: 70, category: 'Specialized', icon: <Code size={24} /> },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      } 
    },
  };

  return (
    <section id="skills" className="py-20 bg-light-100 dark:bg-dark-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-light-200 to-light-100 dark:from-dark-100 dark:to-dark-200"></div>
      
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
          <p className="text-dark-400 dark:text-light-400 max-w-2xl mx-auto">
            A comprehensive collection of technologies, frameworks, and tools I've mastered through academic study and project work.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map(category => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">{category}</h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="mr-2 text-primary-500">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-dark-400 dark:text-light-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-light-300 dark:bg-dark-300 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;