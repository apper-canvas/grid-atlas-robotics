import React from "react";
import { motion } from "framer-motion";
import Logo from "@/components/atoms/Logo";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const footerLinks = {
    "Product": [
      { label: "Features", href: "#features" },
      { label: "Specifications", href: "#about" },
      { label: "Safety", href: "#features" },
      { label: "Integration", href: "#features" }
    ],
    "Company": [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#contact" },
      { label: "Press", href: "#contact" },
      { label: "Blog", href: "#contact" }
    ],
    "Support": [
      { label: "Documentation", href: "#contact" },
      { label: "Help Center", href: "#contact" },
      { label: "Contact Support", href: "#contact" },
      { label: "Training", href: "#contact" }
    ]
  };

  const socialLinks = [
    { icon: "Twitter", href: "#", label: "Twitter" },
    { icon: "Linkedin", href: "#", label: "LinkedIn" },
    { icon: "Youtube", href: "#", label: "YouTube" },
    { icon: "Github", href: "#", label: "GitHub" }
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
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Logo className="mb-6" />
              <p className="text-gray-400 leading-relaxed mb-6">
                Revolutionizing industrial automation with advanced humanoid robotics. 
                Built for precision, reliability, and the future of manufacturing.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <ApperIcon name={social.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-lg mb-6">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Atlas Robotics. All rights reserved.
            </p>
            
            <div className="flex gap-8 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;