import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "@/components/molecules/FeatureCard";

const Features = () => {
  const features = [
    {
      icon: "Zap",
      title: "Advanced AI Processing",
      description: "Powered by next-generation neural networks for real-time decision making and adaptive learning in complex industrial environments."
    },
    {
      icon: "Shield",
      title: "Enterprise-Grade Safety",
      description: "Built-in safety protocols and fail-safes ensure secure operation around human workers with certified industrial compliance."
    },
    {
      icon: "Wrench",
      title: "Precision Manufacturing",
      description: "Sub-millimeter accuracy in assembly tasks with advanced force feedback and quality control integration."
    },
    {
      icon: "Battery",
      title: "Extended Operation",
      description: "24-hour continuous operation capability with hot-swappable power systems and predictive maintenance alerts."
    },
    {
      icon: "Wifi",
      title: "IoT Integration",
      description: "Seamless connectivity with existing factory systems, real-time monitoring, and cloud-based analytics platform."
    },
    {
      icon: "Users",
      title: "Human Collaboration",
      description: "Designed for safe human-robot collaboration with intuitive interfaces and natural interaction capabilities."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Engineered for{" "}
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Atlas combines cutting-edge robotics with industrial-grade reliability, 
            delivering unprecedented capabilities for modern manufacturing environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Technical Specs Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-gray-50 to-primary-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Atlas delivers industrial-grade performance with precision engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">1.8m</div>
              <div className="text-gray-600">Height</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">125kg</div>
              <div className="text-gray-600">Weight</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50kg</div>
              <div className="text-gray-600">Payload</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">±0.1mm</div>
              <div className="text-gray-600">Precision</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;