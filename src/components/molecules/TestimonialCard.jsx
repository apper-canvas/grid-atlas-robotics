import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const TestimonialCard = ({ quote, author, company, logo, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="mb-6">
        <ApperIcon name="Quote" className="h-8 w-8 text-primary-400 mb-4" />
        <p className="text-gray-700 leading-relaxed text-lg">
          "{quote}"
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
          <ApperIcon name="User" className="h-6 w-6 text-gray-600" />
        </div>
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-primary-600 text-sm font-medium">{company}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;