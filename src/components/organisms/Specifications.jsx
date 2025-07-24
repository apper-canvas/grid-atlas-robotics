import React from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Specifications = () => {
  const performanceMetrics = [
    { label: 'Walking Speed', value: '1.5 m/s', percentage: 75, icon: 'Zap' },
    { label: 'Running Speed', value: '3.3 m/s', percentage: 90, icon: 'Wind' },
    { label: 'Payload Capacity', value: '11 kg', percentage: 85, icon: 'Package' },
    { label: 'Battery Life', value: '1.5 hours', percentage: 60, icon: 'Battery' },
  ];

  const physicalSpecs = [
    { label: 'Height', value: '1.5 m', icon: 'Ruler' },
    { label: 'Weight', value: '89 kg', icon: 'Weight' },
    { label: 'Degrees of Freedom', value: '28', icon: 'RotateCcw' },
    { label: 'Operating Temperature', value: '-20°C to +45°C', icon: 'Thermometer' },
  ];

  const powerSpecs = [
    { label: 'Battery Type', value: 'Lithium-ion', icon: 'Zap' },
    { label: 'Battery Capacity', value: '3.5 kWh', icon: 'Battery' },
    { label: 'Charging Time', value: '4 hours', icon: 'Clock' },
    { label: 'Power Consumption', value: '2.3 kW', icon: 'Power' },
  ];

  const capabilities = [
    { 
      category: 'Mobility',
      items: [
        { name: 'Walking on uneven terrain', level: 95 },
        { name: 'Climbing stairs', level: 90 },
        { name: 'Jumping obstacles', level: 85 },
        { name: 'Balance recovery', level: 98 },
      ]
    },
    {
      category: 'Navigation',
      items: [
        { name: 'Autonomous pathfinding', level: 92 },
        { name: 'Obstacle avoidance', level: 96 },
        { name: 'SLAM mapping', level: 88 },
        { name: 'GPS accuracy', level: 85 },
      ]
    },
    {
      category: 'Manipulation',
      items: [
        { name: 'Object grasping', level: 90 },
        { name: 'Fine motor control', level: 75 },
        { name: 'Force feedback', level: 88 },
        { name: 'Tool operation', level: 82 },
      ]
    }
  ];

  const sensorSpecs = [
    { name: 'Stereo Vision Cameras', specs: '2 × 1920×1200 @ 30fps', icon: 'Camera' },
    { name: 'Depth Camera', specs: 'Intel RealSense D435i', icon: 'ScanLine' },
    { name: 'LiDAR', specs: 'Velodyne VLP-16, 360° coverage', icon: 'Radar' },
    { name: 'IMU', specs: '6-axis gyroscope/accelerometer', icon: 'Compass' },
    { name: 'Force Torque Sensors', specs: '4 × wrist/ankle mounted', icon: 'Gauge' },
    { name: 'Joint Encoders', specs: '28 × high-resolution optical', icon: 'Settings' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="specifications" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Technical <span className="gradient-text">Specifications</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive technical details and performance metrics for the Atlas humanoid robot
          </motion.p>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
            Performance Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <ApperIcon name={metric.icon} size={24} className="text-primary-500" />
                  <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">{metric.label}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className="text-sm text-gray-500 mt-1">{metric.percentage}% of max capability</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Physical Specifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
            Physical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {physicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <ApperIcon name={spec.icon} size={32} className="text-primary-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">{spec.label}</h4>
                <p className="text-2xl font-bold text-primary-600">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Power & Energy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
            Power & Energy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {powerSpecs.map((spec, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <ApperIcon name={spec.icon} size={24} className="text-primary-500 mr-3" />
                  <h4 className="font-semibold text-gray-900">{spec.label}</h4>
                </div>
                <p className="text-xl font-bold text-gray-900">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Operational Capabilities */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
            Operational Capabilities
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                        <span className="text-sm font-bold text-primary-600">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (itemIndex * 0.1) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sensor Specifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
            Sensor Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sensorSpecs.map((sensor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <ApperIcon name={sensor.icon} size={24} className="text-primary-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{sensor.name}</h4>
                    <p className="text-sm text-gray-600">{sensor.specs}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Environmental Specifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
            Environmental & Certifications
          </h3>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={itemVariants} className="text-center">
                <ApperIcon name="Shield" size={32} className="text-primary-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">IP Rating</h4>
                <p className="text-gray-600">IP54 (Dust & Water Resistant)</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <ApperIcon name="Thermometer" size={32} className="text-primary-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Temperature Range</h4>
                <p className="text-gray-600">-20°C to +45°C</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <ApperIcon name="Award" size={32} className="text-primary-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Safety Standards</h4>
                <p className="text-gray-600">ISO 10218, IEC 61508</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <ApperIcon name="Zap" size={32} className="text-primary-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">EMC Compliance</h4>
                <p className="text-gray-600">FCC Part 15, CE Mark</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Specifications;