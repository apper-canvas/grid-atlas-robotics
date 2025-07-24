import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const FeatureCard = ({ icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <div className="relative mb-6">
        <div className="h-16 w-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
          <ApperIcon name={icon} className="h-8 w-8 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>
      
      <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;