import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const FeatureCard = ({ icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-10%" }}
      className="text-center group cursor-pointer"
      whileHover={{ y: -8 }}
    >
      <div className="relative mb-6">
        <motion.div 
          className="h-16 w-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-glow-lg transition-all duration-500"
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -5, 5, -5, 0],
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="h-8 w-8 text-white"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <ApperIcon name={icon} className="h-8 w-8 text-white" />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110"></div>
        
        {/* Floating particles effect */}
        <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-200"></div>
        <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-300"></div>
      </div>
      
      <motion.h3 
        className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default FeatureCard;