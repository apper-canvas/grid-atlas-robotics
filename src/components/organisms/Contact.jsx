import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/molecules/ContactForm";
import ApperIcon from "@/components/ApperIcon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri 9am-6pm EST"
    },
    {
      icon: "Mail",
      title: "Email",
      value: "hello@atlasrobotics.com",
      description: "24/7 support response"
    },
    {
      icon: "MapPin",
      title: "Location",
      value: "San Francisco, CA",
      description: "Headquarters & R&D Center"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your{" "}
            <span className="gradient-text">Operations?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Schedule a personalized demo and discover how Atlas can revolutionize 
            your industrial processes. Our experts are ready to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
          >
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Get Your Custom Quote
              </h3>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours 
                with a personalized proposal for your specific needs.
              </p>
            </div>
            
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-white">
              <h3 className="font-display text-2xl font-bold mb-6">
                Let's Connect
              </h3>
              <p className="text-primary-100 mb-8 leading-relaxed">
                Ready to see Atlas in action? Our team of robotics experts is 
                standing by to provide personalized demonstrations and answer 
                all your questions.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <ApperIcon name={info.icon} className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{info.title}</h4>
                      <p className="text-primary-100 font-medium">{info.value}</p>
                      <p className="text-primary-200 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="font-display text-xl font-bold text-gray-900 mb-6">
                Why Choose Atlas?
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average ROI Timeline</span>
                  <span className="font-bold gradient-text">8 months</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Production Efficiency Increase</span>
                  <span className="font-bold gradient-text">40%+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">System Uptime</span>
                  <span className="font-bold gradient-text">99.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Safety Incidents</span>
                  <span className="font-bold text-green-600">Zero</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;