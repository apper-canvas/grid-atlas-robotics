import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const TestimonialCard = ({ quote, author, role, company, logo, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-white via-gray-50 to-primary-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="mb-6">
          <ApperIcon name="Quote" className="h-8 w-8 text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
          <p className="text-gray-700 leading-relaxed text-lg font-medium">
            "{quote}"
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
            <ApperIcon name={logo} className="h-7 w-7 text-white" />
          </div>
          <div>
            <div className="font-bold text-gray-900 text-lg">{author}</div>
            <div className="text-primary-600 text-sm font-semibold">{role}</div>
            <div className="text-gray-600 text-sm font-medium">{company}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;