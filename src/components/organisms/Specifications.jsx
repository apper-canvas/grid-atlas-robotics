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

        {/* Details Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Atlas Robot <span className="gradient-text">Details</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive insights into Atlas capabilities, applications, and cutting-edge technology
            </p>
          </motion.div>

          {/* Applications Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Manufacturing Applications */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <ApperIcon name="Factory" size={32} className="text-primary-500 mr-4" />
                <h4 className="text-xl font-display font-bold text-gray-900">Manufacturing</h4>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-200 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Assembly Line Integration</h5>
                  <p className="text-gray-600 text-sm">
                    Atlas seamlessly integrates into existing production lines, handling complex assembly tasks with precision. Its advanced dexterity enables manipulation of delicate components while maintaining consistent quality standards.
                  </p>
                </div>
                <div className="border-l-4 border-primary-200 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Quality Control</h5>
                  <p className="text-gray-600 text-sm">
                    Equipped with high-resolution vision systems, Atlas performs automated inspection tasks, detecting defects with 99.7% accuracy. Real-time analysis capabilities ensure zero-defect manufacturing processes.
                  </p>
                </div>
                <div className="border-l-4 border-primary-200 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Hazardous Environment Operations</h5>
                  <p className="text-gray-600 text-sm">
                    Operating in extreme temperatures and contaminated environments, Atlas handles dangerous materials and processes, protecting human workers while maintaining operational efficiency.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Logistics Applications */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <ApperIcon name="Truck" size={32} className="text-primary-500 mr-4" />
                <h4 className="text-xl font-display font-bold text-gray-900">Logistics</h4>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-200 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Warehouse Automation</h5>
                  <p className="text-gray-600 text-sm">
                    Atlas revolutionizes warehouse operations with autonomous navigation through complex layouts. It efficiently picks, packs, and organizes inventory with 40% faster throughput than traditional systems.
                  </p>
                </div>
                <div className="border-l-4 border-primary-200 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Package Handling</h5>
                  <p className="text-gray-600 text-sm">
                    Advanced grip control and load balancing enable Atlas to handle packages from 0.1kg to 11kg with optimal force distribution, reducing damage rates by 85% compared to conventional handling.
                  </p>
                </div>
                <div className="border-l-4 border-primary-200 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Last-Mile Delivery</h5>
                  <p className="text-gray-600 text-sm">
                    Equipped with GPS precision and obstacle avoidance, Atlas navigates urban environments for autonomous delivery, climbing stairs and traversing uneven terrain to reach destinations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Research Applications */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <ApperIcon name="Microscope" size={32} className="text-primary-500 mr-4" />
                <h4 className="text-xl font-display font-bold text-gray-900">Research</h4>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-200 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Human-Robot Interaction</h5>
                  <p className="text-gray-600 text-sm">
                    Atlas serves as a platform for studying natural human-robot collaboration, featuring gesture recognition, voice interaction, and predictive behavior modeling for seamless workplace integration.
                  </p>
                </div>
                <div className="border-l-4 border-primary-200 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Mobility Research</h5>
                  <p className="text-gray-600 text-sm">
                    Advanced locomotion algorithms are tested and refined through Atlas, contributing to breakthroughs in bipedal walking, dynamic balance, and adaptive gait patterns for various terrains.
                  </p>
                </div>
                <div className="border-l-4 border-primary-200 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">AI Development</h5>
                  <p className="text-gray-600 text-sm">
                    As a testbed for artificial intelligence research, Atlas accelerates development in machine learning, computer vision, and autonomous decision-making in complex, real-world scenarios.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Deep-Dive Section */}
          <motion.div
            variants={containerVariants}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h4 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Technical Deep-Dive
              </h4>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Exploring the advanced technologies that power Atlas's exceptional capabilities
              </p>
            </motion.div>

            {/* AI & Machine Learning */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <ApperIcon name="Brain" size={36} className="text-blue-600 mr-4" />
                <h5 className="text-2xl font-display font-bold text-gray-900">
                  AI & Machine Learning
                </h5>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h6 className="font-semibold text-gray-900 mb-3">Neural Network Architecture</h6>
                  <p className="text-gray-700 mb-4">
                    Atlas employs a multi-layered neural network with over 50 million parameters, processing sensory data in real-time. The architecture combines convolutional layers for visual processing with recurrent networks for temporal reasoning, enabling complex decision-making in dynamic environments.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Processing Speed</span>
                      <span className="text-sm font-bold text-blue-600">120 GFLOPS</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-3">Adaptive Learning System</h6>
                  <p className="text-gray-700 mb-4">
                    The robot continuously improves its performance through reinforcement learning algorithms. Each interaction generates training data, refining motor control, path planning, and object recognition capabilities with 15% performance improvement per 1000 operational hours.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Learning Efficiency</span>
                      <span className="text-sm font-bold text-blue-600">98.5% Accuracy</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Advanced Mobility Systems */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <ApperIcon name="Zap" size={36} className="text-green-600 mr-4" />
                <h5 className="text-2xl font-display font-bold text-gray-900">
                  Advanced Mobility Systems
                </h5>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h6 className="font-semibold text-gray-900 mb-3">Dynamic Balance Control</h6>
                  <p className="text-gray-700 mb-4">
                    Atlas maintains stability through a sophisticated balance control system that processes data from 28 joint encoders and a 6-axis IMU at 1000Hz. The system predicts and corrects balance disturbances within 50ms, enabling operation on unstable surfaces.
                  </p>
                  <div className="flex space-x-4">
                    <div className="bg-white rounded-lg p-3 flex-1 text-center">
                      <div className="text-lg font-bold text-green-600">1000Hz</div>
                      <div className="text-xs text-gray-600">Control Frequency</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 flex-1 text-center">
                      <div className="text-lg font-bold text-green-600">50ms</div>
                      <div className="text-xs text-gray-600">Response Time</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-3">Adaptive Gait Patterns</h6>
                  <p className="text-gray-700 mb-4">
                    The mobility system features 12 pre-programmed gait patterns optimized for different terrains and speeds. Machine learning algorithms continuously adapt these patterns based on surface conditions, reducing energy consumption by up to 30% while maintaining stability.
                  </p>
                  <div className="flex space-x-4">
                    <div className="bg-white rounded-lg p-3 flex-1 text-center">
                      <div className="text-lg font-bold text-green-600">12</div>
                      <div className="text-xs text-gray-600">Gait Patterns</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 flex-1 text-center">
                      <div className="text-lg font-bold text-green-600">30%</div>
                      <div className="text-xs text-gray-600">Energy Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Safety & Human Interaction */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <ApperIcon name="Shield" size={36} className="text-orange-600 mr-4" />
                <h5 className="text-2xl font-display font-bold text-gray-900">
                  Safety & Human Interaction
                </h5>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h6 className="font-semibold text-gray-900 mb-3">Collision Avoidance System</h6>
                  <p className="text-gray-700 mb-4">
                    Multi-sensor fusion combines LiDAR, stereo vision, and proximity sensors to create a 360° safety bubble around Atlas. The system detects potential collisions up to 5 meters away and executes emergency stops within 0.2 seconds, ensuring safe human-robot coexistence.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600">5m</div>
                        <div className="text-xs text-gray-600">Detection Range</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600">0.2s</div>
                        <div className="text-xs text-gray-600">Emergency Stop</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-3">Compliant Interaction Control</h6>
                  <p className="text-gray-700 mb-4">
                    Force-torque sensors in all joints enable Atlas to modulate its interaction forces, providing gentle contact when working alongside humans. Variable impedance control adjusts stiffness based on task requirements, from precise manipulation to robust locomotion.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600">28</div>
                        <div className="text-xs text-gray-600">Force Sensors</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600">±0.1N</div>
                        <div className="text-xs text-gray-600">Force Precision</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Specifications;