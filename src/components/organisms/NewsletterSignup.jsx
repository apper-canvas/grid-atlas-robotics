import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import ApperIcon from "@/components/ApperIcon";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError("Email address is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Successfully subscribed! Welcome to Atlas updates.");
      setEmail("");
      setError("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-primary-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-primary-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-primary-100/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-8 shadow-glow"
          >
            <ApperIcon name="Mail" className="h-8 w-8 text-white" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6"
          >
            Stay Ahead of the{" "}
            <span className="gradient-text">Automation Revolution</span>
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4 mb-12"
          >
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Join thousands of industry leaders who trust Atlas for the latest insights 
              in humanoid robotics and industrial automation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                  <ApperIcon name="Zap" className="h-4 w-4 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Product Updates</h3>
                  <p className="text-sm text-gray-600">Get notified about new Atlas features, capabilities, and software releases.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                  <ApperIcon name="TrendingUp" className="h-4 w-4 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Industry Insights</h3>
                  <p className="text-sm text-gray-600">Expert analysis on automation trends, market developments, and best practices.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                  <ApperIcon name="Users" className="h-4 w-4 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Exclusive Access</h3>
                  <p className="text-sm text-gray-600">Early access to case studies, webinars, and Atlas community events.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {error && (
                  <p className="text-red-500 text-sm mt-2 text-left">{error}</p>
                )}
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSubmitting}
                className="sm:w-auto w-full"
              >
                {isSubmitting ? (
                  <>
                    <ApperIcon name="Loader2" className="h-5 w-5 mr-2 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <ApperIcon name="Send" className="h-5 w-5 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;