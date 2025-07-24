import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Button from "@/components/atoms/Button";
import FormField from "@/components/molecules/FormField";
import ApperIcon from "@/components/ApperIcon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Thank you! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", company: "", message: "" });
      setErrors({});
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
          placeholder="John Doe"
        />
        
        <FormField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          placeholder="john@company.com"
        />
      </div>

      <FormField
        label="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        error={errors.company}
        required
        placeholder="Your Company Name"
      />

      <FormField
        label="Message"
        name="message"
        type="textarea"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
        placeholder="Tell us about your industrial automation needs..."
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <ApperIcon name="Loader2" className="h-5 w-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <ApperIcon name="Send" className="h-5 w-5 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </motion.form>
  );
};

export default ContactForm;