import React from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

const MadeByHumans = () => {
  const philosophyItems = [
    {
      icon: 'Heart',
      title: 'Human-Centered Design',
      description: 'Every Atlas robot is designed with human needs, safety, and collaboration at its core.'
    },
    {
      icon: 'Users',
      title: 'Collaborative Intelligence',
      description: 'Our robots enhance human capabilities rather than replace them, creating powerful partnerships.'
    },
    {
      icon: 'Shield',
      title: 'Ethical Development',
      description: 'We prioritize responsible AI development with transparency, safety, and human oversight.'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation with Purpose',
      description: 'Technology should serve humanity, solving real problems and improving quality of life.'
    }
  ];

  const values = [
    {
      icon: 'Target',
      title: 'Purpose-Driven',
      description: 'Building technology that makes meaningful impact on human lives and society.'
    },
    {
      icon: 'HandHeart',
      title: 'Human First',
      description: 'Keeping human wellbeing and dignity at the center of everything we create.'
    },
    {
      icon: 'Zap',
      title: 'Responsible Innovation',
      description: 'Advancing robotics with careful consideration of ethical implications and safety.'
    },
    {
      icon: 'Globe',
      title: 'Inclusive Future',
      description: 'Creating technology that benefits everyone, regardless of background or ability.'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      background: 'Former MIT researcher with 15 years in human-robot interaction',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Ethics & Safety',
      background: 'Philosophy PhD specializing in AI ethics and responsible technology',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Aisha Patel',
      role: 'Lead Design Engineer',
      background: 'Industrial designer focused on human-centered robotics interfaces',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="made-by-humans" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <ApperIcon name="Heart" size={20} className="text-primary" />
            <span className="text-primary font-medium">Made By Humans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Technology with a
            <span className="gradient-text block">Human Heart</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Atlas Robotics, we believe the future isn't about robots replacing humans—it's about 
            humans and robots working together to solve the world's greatest challenges.
          </p>
        </motion.div>

        {/* Philosophy Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {philosophyItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ApperIcon name={item.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Our Story Begins with You
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded by a team of engineers, ethicists, and designers who shared a common vision: 
                technology should amplify human potential, not diminish it. We saw a future where 
                robots could handle dangerous, repetitive, or physically demanding tasks, freeing 
                humans to focus on creativity, problem-solving, and meaningful connections.
              </p>
              <p>
                Every Atlas robot is built with this philosophy in mind. They're not just machines—
                they're partners designed to understand, adapt to, and collaborate with their human 
                teammates in ways that feel natural and intuitive.
              </p>
              <p>
                From construction sites to healthcare facilities, our robots work alongside humans, 
                learning from them and enhancing their capabilities while maintaining the human 
                judgment, empathy, and creativity that no machine can replace.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
              alt="Human and robot collaboration"
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <ApperIcon name="Users" size={20} className="text-primary" />
                <span className="text-sm font-medium text-gray-900">Human + Robot</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Better Together</p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make, from research and development 
              to deployment and support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <ApperIcon name={value.icon} size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Meet the Humans Behind Atlas
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team brings together expertise from robotics, AI, ethics, design, 
              and human psychology to create technology that truly serves humanity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <ApperIcon name="Heart" size={16} className="text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.background}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Responsible AI Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="Shield" size={32} className="text-primary" />
            </div>
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Our Commitment to Responsible AI
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We believe that with great technological power comes great responsibility. Our robots 
              are built with multiple layers of safety, ethical oversight, and human control. 
              Transparency, accountability, and human welfare guide every line of code we write.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <ApperIcon name="Eye" size={16} className="text-primary" />
                <span className="text-sm font-medium text-gray-700">Transparent AI</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <ApperIcon name="Lock" size={16} className="text-primary" />
                <span className="text-sm font-medium text-gray-700">Privacy Protected</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <ApperIcon name="Users" size={16} className="text-primary" />
                <span className="text-sm font-medium text-gray-700">Human Oversight</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <ApperIcon name="CheckCircle" size={16} className="text-primary" />
                <span className="text-sm font-medium text-gray-700">Safety First</span>
              </div>
            </div>
            <Button variant="primary" size="lg" className="btn-hover">
              Learn About Our Ethics Framework
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MadeByHumans;