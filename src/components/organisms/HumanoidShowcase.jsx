import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const HumanoidShowcase = () => {
  const capabilities = [
    {
      icon: "Zap",
      title: "Advanced Mobility",
      description: "Dynamic walking, climbing, and navigating complex environments with human-like agility."
    },
    {
      icon: "Hand",
      title: "Precision Handling",
      description: "Dexterous manipulation of tools and objects with sub-millimeter accuracy."
    },
    {
      icon: "Brain",
      title: "AI Integration",
      description: "Real-time decision making and adaptive learning for complex industrial tasks."
    },
    {
      icon: "Shield",
      title: "Safety Systems",
      description: "Advanced sensors and failsafes ensure safe human-robot collaboration."
    }
  ];

  const specifications = [
    { label: "Height", value: "1.5m" },
    { label: "Weight", value: "89kg" },
    { label: "Payload", value: "11kg" },
    { label: "Battery Life", value: "8 hours" },
    { label: "Operating Temp", value: "-20°C to 45°C" },
    { label: "Degrees of Freedom", value: "28" }
  ];

  return (
    <section id="showcase" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 h-24 w-24 bg-primary-200 rounded-full opacity-15 animate-float"></div>
        <div className="absolute bottom-1/3 left-10 h-32 w-32 bg-orange-200 rounded-full opacity-10 animation-delay-2000 animate-float"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary-200 text-primary-700 font-medium text-sm shadow-sm mb-6"
          >
            <ApperIcon name="Bot" className="h-4 w-4" />
            Humanoid Showcase
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Meet <span className="gradient-text">Atlas</span> in Action
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experience the next evolution in humanoid robotics. Atlas combines cutting-edge AI with 
            human-like mobility to revolutionize industrial operations.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Robot Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-primary-600/10 rounded-3xl"></div>
              
              {/* Robot placeholder with tech aesthetic */}
              <div className="relative z-10 aspect-[3/4] bg-gradient-to-b from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <ApperIcon name="Bot" size={120} className="text-primary-400 mx-auto animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-2 bg-primary-500 rounded-full w-24 mx-auto animate-pulse"></div>
                    <div className="h-2 bg-primary-400 rounded-full w-16 mx-auto animate-pulse animation-delay-1000"></div>
                    <div className="h-2 bg-primary-300 rounded-full w-20 mx-auto animate-pulse animation-delay-2000"></div>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">Atlas Humanoid Robot</p>
                </div>
              </div>

              {/* Tech overlay elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border border-primary-500/30 rounded-full flex items-center justify-center">
                <ApperIcon name="Activity" size={20} className="text-primary-400" />
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-primary-500/30 rounded-lg flex items-center justify-center">
                <ApperIcon name="Cpu" size={16} className="text-primary-400" />
              </div>
            </div>

            {/* Floating status indicators */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Active</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200"
            >
              <div className="flex items-center gap-2">
                <ApperIcon name="Zap" size={14} className="text-primary-500" />
                <span className="text-sm font-medium text-gray-700">89% Power</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Capabilities & Specs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Key Capabilities */}
            <div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Key Capabilities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ApperIcon name={capability.icon} size={18} className="text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{capability.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{capability.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="grid grid-cols-2 gap-6">
                  {specifications.map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold gradient-text mb-1">{spec.value}</div>
                      <div className="text-sm text-gray-600">{spec.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidShowcase;