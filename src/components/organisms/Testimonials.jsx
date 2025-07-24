import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/molecules/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Atlas has transformed our manufacturing line. The precision and reliability are unmatched. We've seen a 40% increase in production efficiency since implementation.",
      author: "Sarah Chen",
      company: "TechManufacturing Inc.",
      logo: "building"
    },
    {
      quote: "The integration was seamless, and the AI capabilities continue to impress us daily. Atlas learns and adapts to our specific processes better than any solution we've tried.",
      author: "Michael Rodriguez",
      company: "Precision Industries",
      logo: "factory"
    },
    {
      quote: "Safety was our primary concern, and Atlas exceeded all expectations. Our workers feel confident collaborating with the system, and zero incidents in 18 months speaks volumes.",
      author: "Emily Foster",
      company: "Advanced Robotics Corp",
      logo: "shield"
    },
    {
      quote: "The ROI has been exceptional. Atlas paid for itself within 8 months through increased efficiency and reduced operational costs. Best investment we've made in years.",
      author: "David Kim",
      company: "Future Factory Solutions",
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