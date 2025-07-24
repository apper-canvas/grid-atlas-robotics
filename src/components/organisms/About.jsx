import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Revolutionizing{" "}
                <span className="gradient-text">Industrial Automation</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Atlas represents a quantum leap in humanoid robotics, specifically engineered 
                for industrial applications. Our advanced AI-powered system combines human-like 
                dexterity with machine precision and reliability.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From automotive assembly lines to electronics manufacturing, Atlas adapts 
                to your specific needs while maintaining the highest safety standards and 
                operational efficiency.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-6 w-6 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mt-1">
                  <ApperIcon name="Check" className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adaptive Intelligence</h4>
                  <p className="text-gray-600">Learns and adapts to new tasks without reprogramming</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-6 w-6 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mt-1">
                  <ApperIcon name="Check" className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Zero-Downtime Design</h4>
                  <p className="text-gray-600">Predictive maintenance and modular components ensure continuous operation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-6 w-6 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mt-1">
                  <ApperIcon name="Check" className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Industry Compliance</h4>
                  <p className="text-gray-600">Meets all major industrial safety and quality certifications</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                <ApperIcon name="MessageCircle" className="h-5 w-5 mr-2" />
                Get Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("features")}
              >
                <ApperIcon name="FileText" className="h-5 w-5 mr-2" />
                Technical Specs
              </Button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl p-8 lg:p-12 shadow-2xl">
              {/* Robot Visualization */}
              <div className="text-center text-white space-y-8">
                <div className="flex justify-center">
                  <div className="relative">
                    <ApperIcon name="Bot" className="h-32 w-32 mx-auto animate-float" />
                    <div className="absolute -top-2 -right-2 h-6 w-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                      <ApperIcon name="Wifi" className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Atlas Unit Status</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="font-semibold">System Status</div>
                      <div className="text-green-200 flex items-center gap-1">
                        <ApperIcon name="CheckCircle" className="h-4 w-4" />
                        Operational
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="font-semibold">Battery</div>
                      <div className="text-green-200 flex items-center gap-1">
                        <ApperIcon name="Battery" className="h-4 w-4" />
                        98%
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="font-semibold">Temperature</div>
                      <div className="text-blue-200 flex items-center gap-1">
                        <ApperIcon name="Thermometer" className="h-4 w-4" />
                        Optimal
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="font-semibold">Network</div>
                      <div className="text-green-200 flex items-center gap-1">
                        <ApperIcon name="Wifi" className="h-4 w-4" />
                        Connected
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 h-16 w-16 bg-white/20 rounded-full animate-float animation-delay-2000"></div>
              <div className="absolute -bottom-4 -right-4 h-12 w-12 bg-white/15 rounded-full animate-float animation-delay-4000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;