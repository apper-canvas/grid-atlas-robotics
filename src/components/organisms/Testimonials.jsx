import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/molecules/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Since implementing Atlas, we've achieved a remarkable 30% increase in production efficiency. The precision and adaptability have revolutionized our manufacturing processes, delivering ROI beyond our expectations.",
      author: "Sarah Chen",
      role: "VP Operations",
      company: "Axion Manufacturing",
      logo: "building"
    },
    {
      quote: "Atlas has been a game-changer for workplace safety. We've seen a 40% reduction in workplace injuries since deployment. The system's intelligent safety protocols have transformed our logistics operations.",
      author: "Michael Rodriguez",
      role: "Director Logistics", 
      company: "GlobalShip",
      logo: "truck"
    },
    {
      quote: "The adaptability of Atlas to our complex lab protocols has been extraordinary. It seamlessly integrates with our research workflows, maintaining the precision required for our scientific processes while improving efficiency.",
      author: "Dr. Amara Patel",
      role: "Lead Scientist",
      company: "BioAdvance Research",
      logo: "microscope"
    },
    {
      quote: "As a mid-size business, we needed accessible automation solutions. Atlas delivered beyond expectations - intuitive implementation, exceptional support, and measurable improvements in operational efficiency from day one.",
      author: "Jason Lee",
      role: "CEO",
      company: "Innovative Solutions Inc.",
      logo: "trending-up"
    }
  ];
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry{" "}
            <span className="gradient-text">Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Companies worldwide are transforming their operations with Atlas. 
            Here's what they have to say about their experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              logo={testimonial.logo}
              index={index}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm font-medium mb-8 uppercase tracking-wider">
            Trusted by 500+ companies worldwide
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex items-center justify-center">
              <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-medium">TechCorp</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-medium">IndustrialCo</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-medium">ManuTech</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-medium">RoboSys</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;