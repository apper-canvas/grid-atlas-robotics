import React from "react";
import { motion } from "framer-motion";
import Logo from "@/components/atoms/Logo";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
const footerLinks = {
    "Product": [
      { label: "Features", href: "#features" },
      { label: "Specifications", href: "#about" },
      { label: "Safety & Compliance", href: "#features" },
      { label: "Integration Guide", href: "#features" },
      { label: "Case Studies", href: "#about" }
    ],
    "Company": [
      { label: "About Us", href: "#about" },
      { label: "Our Mission", href: "#about" },
      { label: "Careers", href: "#contact" },
      { label: "Press & Media", href: "#contact" },
      { label: "Investor Relations", href: "#contact" },
      { label: "Blog", href: "#contact" }
    ],
    "Support": [
      { label: "Documentation", href: "#contact" },
      { label: "Help Center", href: "#contact" },
      { label: "Contact Support", href: "#contact" },
      { label: "Training Programs", href: "#contact" },
      { label: "Community Forum", href: "#contact" },
      { label: "System Status", href: "#contact" }
    ]
  };

  const contactInfo = {
    email: "info@atlasrobotics.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, Tech Valley, CA 94000",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM PST"
  };

  const socialLinks = [
    { icon: "Twitter", href: "https://twitter.com/atlasrobotics", label: "Twitter" },
    { icon: "Linkedin", href: "https://linkedin.com/company/atlas-robotics", label: "LinkedIn" },
    { icon: "Youtube", href: "https://youtube.com/@atlasrobotics", label: "YouTube" },
    { icon: "Github", href: "https://github.com/atlas-robotics", label: "GitHub" },
    { icon: "Instagram", href: "https://instagram.com/atlasrobotics", label: "Instagram" }
  ];
  const scrollToSection = (href) => {
    if (href.startsWith("#")) {
      const sectionId = href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
<div className="grid lg:grid-cols-6 gap-8 lg:gap-12">
{/* Brand Section */}
            <div className="lg:col-span-2">
              <Logo className="mb-6" />
              <p className="text-gray-400 leading-relaxed mb-6">
                Atlas Robotics is pioneering the future of industrial automation with cutting-edge humanoid robotics technology. 
                Our advanced robotic solutions are engineered for precision, built for reliability, and designed to seamlessly 
                integrate into modern manufacturing environments.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Trusted by industry leaders worldwide, we're committed to advancing human-robot collaboration 
                and creating safer, more efficient workplaces through innovative robotics solutions.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <ApperIcon name={social.icon} className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                ))}
              </div>
            </div>

{/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-lg mb-6 text-white">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Information */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ApperIcon name="Mail" className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-primary-400 transition-colors duration-200">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ApperIcon name="Phone" className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-primary-400 transition-colors duration-200">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ApperIcon name="MapPin" className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Address</p>
                    <p className="text-white text-sm leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ApperIcon name="Clock" className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Business Hours</p>
                    <p className="text-white text-sm">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Global Offices</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-white mb-2">Headquarters</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    San Francisco, CA<br />
                    123 Innovation Drive<br />
                    Tech Valley, CA 94000
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">European Office</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Berlin, Germany<br />
                    Unter den Linden 1<br />
                    10117 Berlin
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Asia Pacific</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Tokyo, Japan<br />
                    1-1-1 Shibuya<br />
                    Shibuya City, Tokyo 150-0002
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400">
                Get the latest updates on Atlas developments and industry insights.
              </p>
            </div>
            
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary-500 transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-200 btn-hover">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
<div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-gray-400 text-sm">
                © 2024 Atlas Robotics. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Atlas Robotics is a trademark of Atlas Technologies Inc. Registered in the US and other countries.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 lg:gap-8 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Data Processing Agreement
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Accessibility
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;