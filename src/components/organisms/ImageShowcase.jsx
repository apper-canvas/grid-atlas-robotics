import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const ImageShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: "all", label: "All Environments", icon: "Globe" },
    { id: "manufacturing", label: "Manufacturing", icon: "Factory" },
    { id: "warehouse", label: "Warehouse", icon: "Package" },
    { id: "research", label: "Research", icon: "FlaskConical" }
  ];

const imageGallery = [
    {
      id: 1,
      category: "manufacturing",
      title: "Precision Assembly Line",
      description: "Atlas performing complex assembly tasks with sub-millimeter precision",
      beforeTitle: "Traditional Manual Assembly",
      afterTitle: "Atlas Automated Assembly",
      beforeDesc: "Human workers handling delicate components with potential for errors",
      afterDesc: "Consistent precision with 99.9% accuracy and 24/7 operation",
      environment: "Automotive Manufacturing Plant",
      improvements: ["300% faster assembly", "99.5% fewer defects", "Zero workplace injuries"],
      src: "https://picsum.photos/800/600?random=1",
      srcSet: "https://picsum.photos/400/300?random=1 400w, https://picsum.photos/800/600?random=1 800w, https://picsum.photos/1200/900?random=1 1200w",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    },
    {
      id: 2,
      category: "manufacturing",
      title: "Quality Control Station",
      description: "Advanced visual inspection and quality assurance processes",
      beforeTitle: "Manual Quality Inspection",
      afterTitle: "AI-Powered Quality Control",
      beforeDesc: "Human inspectors checking parts with limited consistency",
      afterDesc: "Computer vision detecting microscopic defects instantly",
      environment: "Electronics Manufacturing Facility",
      improvements: ["500% faster inspection", "10x defect detection rate", "Consistent 24/7 operation"],
      src: "https://picsum.photos/800/600?random=2",
      srcSet: "https://picsum.photos/400/300?random=2 400w, https://picsum.photos/800/600?random=2 800w, https://picsum.photos/1200/900?random=2 1200w",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    },
    {
      id: 3,
      category: "warehouse",
      title: "Automated Inventory Management",
      description: "Intelligent sorting and organization of warehouse inventory",
      beforeTitle: "Manual Inventory Handling",
      afterTitle: "Robotic Inventory System",
      beforeDesc: "Workers manually sorting and organizing inventory items",
      afterDesc: "Automated sorting with real-time tracking and optimization",
      environment: "Distribution Center",
      improvements: ["400% faster sorting", "99.8% inventory accuracy", "Reduced labor costs by 60%"],
      src: "https://picsum.photos/800/600?random=3",
      srcSet: "https://picsum.photos/400/300?random=3 400w, https://picsum.photos/800/600?random=3 800w, https://picsum.photos/1200/900?random=3 1200w",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    },
    {
      id: 4,
      category: "warehouse",
      title: "Heavy Lifting Operations",
      description: "Safe handling of heavy materials and equipment",
      beforeTitle: "Manual Heavy Lifting",
      afterTitle: "Robotic Material Handling",
      beforeDesc: "Multiple workers and equipment needed for heavy items",
      afterDesc: "Single Atlas unit handling 50kg payloads safely",
      environment: "Industrial Warehouse",
      improvements: ["Zero lifting injuries", "50% faster material flow", "Reduced equipment needs"],
      src: "https://picsum.photos/800/600?random=4",
      srcSet: "https://picsum.photos/400/300?random=4 400w, https://picsum.photos/800/600?random=4 800w, https://picsum.photos/1200/900?random=4 1200w",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    },
    {
      id: 5,
      category: "research",
      title: "Laboratory Automation",
      description: "Precise handling of sensitive laboratory equipment and samples",
      beforeTitle: "Manual Lab Procedures",
      afterTitle: "Automated Research Assistant",
      beforeDesc: "Researchers handling delicate samples and equipment manually",
      afterDesc: "Robotic precision in sample handling and equipment operation",
      environment: "Biotech Research Lab",
      improvements: ["10x sample processing speed", "Zero contamination risk", "24/7 research capability"],
      src: "https://picsum.photos/800/600?random=5",
      srcSet: "https://picsum.photos/400/300?random=5 400w, https://picsum.photos/800/600?random=5 800w, https://picsum.photos/1200/900?random=5 1200w",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    },
    {
      id: 6,
      category: "research",
      title: "Hazardous Environment Testing",
      description: "Operating safely in dangerous conditions for human workers",
      beforeTitle: "Limited Human Access",
      afterTitle: "Safe Robotic Operation",
      beforeDesc: "Restricted access due to hazardous conditions",
      afterDesc: "Full operational capability in extreme environments",
      environment: "Chemical Research Facility",
      improvements: ["100% worker safety", "Continuous operation", "Access to restricted areas"],
      src: "https://picsum.photos/800/600?random=6",
      srcSet: "https://picsum.photos/400/300?random=6 400w, https://picsum.photos/800/600?random=6 800w, https://picsum.photos/1200/900?random=6 1200w",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    }
  ];

  const filteredImages = activeCategory === "all" 
    ? imageGallery 
    : imageGallery.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <section id="image-showcase" className="py-24 bg-gradient-to-br from-white via-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <ApperIcon name="Image" className="h-4 w-4" />
            Image Showcase
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Atlas in <span className="gradient-text">Action</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover how Atlas transforms industrial operations across manufacturing, 
            warehouse, and research environments with unprecedented versatility and precision.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow-sm border border-gray-200"
              }`}
            >
              <ApperIcon name={category.icon} size={18} />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Image Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredImages.map((image, index) => (
<motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 card-hover">
                  {/* Optimized Image with Lazy Loading */}
<div className="relative h-64 overflow-hidden">
                    <img
                      src={image.src}
                      srcSet={image.srcSet}
                      sizes={image.sizes}
                      alt={`${image.title} - ${image.description}`}
                      className="w-full h-full object-cover"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <ApperIcon name="Eye" size={20} />
                          <span className="text-sm font-medium">View Details</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm font-medium text-primary-600 capitalize">
                        {image.category}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {image.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{image.environment}</span>
                      <div className="flex items-center gap-1 text-primary-600">
                        <span className="text-sm font-medium">View More</span>
                        <ApperIcon name="ArrowRight" size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-gray-900">
                        {selectedImage.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{selectedImage.environment}</p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <ApperIcon name="X" size={20} />
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-8">
{/* High-Quality Image for Modal */}
                  <div className="mb-6">
                    <img
                      src={selectedImage.src}
                      srcSet={selectedImage.srcSet}
                      sizes="(max-width: 768px) 100vw, 800px"
                      alt={`${selectedImage.title} - Detailed view`}
                      className="w-full h-64 md:h-80 object-cover rounded-xl"
                      loading="eager"
                    />
                  </div>

                  {/* Before/After Comparison */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Before */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <h4 className="font-semibold text-gray-900">Before</h4>
                      </div>
                      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                        <h5 className="font-medium text-gray-900 mb-2">{selectedImage.beforeTitle}</h5>
                        <p className="text-gray-600 text-sm">{selectedImage.beforeDesc}</p>
                      </div>
                    </div>

                    {/* After */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <h4 className="font-semibold text-gray-900">After</h4>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                        <h5 className="font-medium text-gray-900 mb-2">{selectedImage.afterTitle}</h5>
                        <p className="text-gray-600 text-sm">{selectedImage.afterDesc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Improvements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Key Improvements</h4>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {selectedImage.improvements.map((improvement, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-4 text-center"
                        >
                          <ApperIcon name="TrendingUp" size={24} className="text-primary-600 mx-auto mb-2" />
                          <p className="text-sm font-medium text-gray-900">{improvement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center pt-4 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">
                      Ready to transform your operations with Atlas?
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => {
                        closeModal();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <ApperIcon name="Calendar" className="h-4 w-4 mr-2" />
                      Schedule a Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ImageShowcase;