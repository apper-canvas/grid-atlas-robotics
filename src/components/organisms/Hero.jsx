import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-32 w-32 bg-primary-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 h-48 w-48 bg-primary-300 rounded-full opacity-15 animation-delay-2000 animate-float"></div>
        <div className="absolute top-1/2 left-1/4 h-20 w-20 bg-orange-200 rounded-full opacity-25 animation-delay-4000 animate-float"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary-200 text-primary-700 font-medium text-sm shadow-sm"
          >
            <ApperIcon name="Zap" className="h-4 w-4" />
            Next-Generation Industrial Automation
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
          >
            Meet{" "}
            <span className="gradient-text">Atlas</span>
            <br />
            The Future of{" "}
            <span className="relative">
              Robotics
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Revolutionary humanoid robot engineered for industrial excellence. 
            <br className="hidden sm:block" />
            Transform your operations with unprecedented precision, adaptability, and intelligence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto"
            >
              <ApperIcon name="Calendar" className="h-5 w-5 mr-2" />
              Schedule Demo
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("features")}
              className="w-full sm:w-auto"
            >
              <ApperIcon name="Play" className="h-5 w-5 mr-2" />
              Watch Atlas in Action
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">99.9%</div>
              <div className="text-gray-600 mt-1">Uptime Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-gray-600 mt-1">Continuous Operation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">50%</div>
              <div className="text-gray-600 mt-1">Cost Reduction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
          onClick={() => scrollToSection("features")}
        >
          <span className="text-sm font-medium">Discover More</span>
          <ApperIcon name="ChevronDown" className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;