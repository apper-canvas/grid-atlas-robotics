import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const TestimonialCard = ({ quote, author, role, company, logo, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-5%" }}
      whileHover={{ 
        y: -6,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="bg-gradient-to-br from-white via-gray-50 to-primary-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-500 group relative overflow-hidden cursor-pointer"
    >
      {/* Gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 blur-sm"></div>
      
      <div className="relative z-10">
        <div className="mb-6">
          <motion.div
            className="mb-4"
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, 0],
            }}
            transition={{ duration: 0.5 }}
          >
            <ApperIcon name="Quote" className="h-8 w-8 text-primary-500" />
          </motion.div>
          <motion.p 
            className="text-gray-700 leading-relaxed text-lg font-medium group-hover:text-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.01 }}
          >
            "{quote}"
          </motion.p>
        </div>
        
        <div className="flex items-center gap-4">
          <motion.div 
            className="h-14 w-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
            }}
          >
            <ApperIcon name={logo} className="h-7 w-7 text-white" />
          </motion.div>
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="font-bold text-gray-900 text-lg group-hover:text-primary-700 transition-colors duration-300">{author}</div>
            <div className="text-primary-600 text-sm font-semibold group-hover:text-primary-700 transition-colors duration-300">{role}</div>
            <div className="text-gray-600 text-sm font-medium group-hover:text-gray-700 transition-colors duration-300">{company}</div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle corner decorations */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-primary-300 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-300 delay-100"></div>
      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-primary-400 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-300 delay-200"></div>
    </motion.div>
  );
};

export default TestimonialCard;