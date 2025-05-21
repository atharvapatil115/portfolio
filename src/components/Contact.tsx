import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Github, 
  Twitter 
} from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success?: boolean;
    message?: string;
  }>({
    submitted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    
    // Simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Your message has been sent successfully! I will get back to you soon.',
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

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
    <section id="contact" className="py-20 bg-light-200 dark:bg-dark-100 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-dark-400 dark:text-light-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me through the form below or connect with me on social media.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="glassmorphism rounded-xl p-8 relative after-glow primary-glow"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            {formStatus.submitted && formStatus.success ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-400 px-4 py-3 rounded-md mb-6"
              >
                {formStatus.message}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-dark-400 dark:text-light-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-light-300 dark:bg-dark-300 border-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-dark-400 dark:text-light-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-light-300 dark:bg-dark-300 border-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-dark-400 dark:text-light-400 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-light-300 dark:bg-dark-300 border-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                    placeholder="Hello, I'd like to connect regarding..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={containerVariants}>
            <motion.div
              variants={itemVariants}
              className="glassmorphism rounded-xl p-8 mb-8"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-lg mr-4">
                    <MapPin className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-dark-400 dark:text-light-400">Ashta, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-lg mr-4">
                    <Mail className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-dark-400 dark:text-light-400"><a href="patil.atharva115gmail.com">patil.atharva115@gmail.com</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-lg mr-4">
                    <Phone className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-dark-400 dark:text-light-400">+91 93223 92155</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="glassmorphism rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#0e76a8] text-white p-3 rounded-full hover:shadow-lg transition-all"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#333] dark:bg-[#222] text-white p-3 rounded-full hover:shadow-lg transition-all"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#1DA1F2] text-white p-3 rounded-full hover:shadow-lg transition-all"
                >
                  <Twitter size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;