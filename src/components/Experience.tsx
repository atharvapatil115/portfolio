import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Briefcase } from 'lucide-react';

interface TimelineEvent {
  title: string;
  organization: string;
  duration: string;
  description: string[];
  icon: React.ReactNode;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const timelineEvents: TimelineEvent[] = [
    {
      title: 'Training and Placement Cell Student Coordinator',
      organization: 'Training and Placement Cell Student Association, ADCET',
      duration: '02/2024 - Present',
      description: [
        'Communication',
        'Scheduling Campus Drives',
        'Assisting with Interviews'
      ],
      icon: <Briefcase className="h-6 w-6 text-white" />
    },
    {
      title: 'Co-Lead in GDGC (Google Developer Group on Campus) Team (AIML)',
      organization: 'GDGC Annasaheb Dange College Of Engineering and Technology Ashta',
      duration: '12/2024 - Present',
      description: [
        'Conducting Workshops',
        'Giving Hands-on Workshop for different technologies',
        'Building Project in Team'
      ],
      icon: <Users className="h-6 w-6 text-white" />
    }
  ];

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
    <section id="experience" className="py-20 bg-light-200 dark:bg-dark-100 relative">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Co-Curricular Endeavors
          </h2>
          <p className="text-dark-400 dark:text-light-400 max-w-2xl mx-auto">
            Experiences that have shaped my professional development beyond academic coursework.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-900"></div>

          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-12 flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className="md:w-1/2 p-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glassmorphism rounded-lg p-6 shadow-md"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">{event.title}</h3>
                  </div>
                  <div className="mb-3 text-dark-400 dark:text-light-400 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.duration}</span>
                  </div>
                  <p className="mb-4 font-medium">{event.organization}</p>
                  <ul className="list-disc list-inside text-dark-300 dark:text-light-300 space-y-1">
                    {event.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Center dot */}
              <div className="hidden md:block absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg z-10">
                  {event.icon}
                </div>
              </div>

              {/* Empty space for the opposite side */}
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;