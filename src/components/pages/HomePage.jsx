import React from "react";
import Hero from "@/components/organisms/Hero";
import HumanoidShowcase from "@/components/organisms/HumanoidShowcase";
import ImageShowcase from "@/components/organisms/ImageShowcase";
import Features from "@/components/organisms/Features";
import Specifications from "@/components/organisms/Specifications";
import About from "@/components/organisms/About";
import Testimonials from "@/components/organisms/Testimonials";
import NewsletterSignup from "@/components/organisms/NewsletterSignup";
import Contact from "@/components/organisms/Contact";

const HomePage = () => {
return (
<>
      <Hero />
      <HumanoidShowcase />
      <ImageShowcase />
      <Features />
      <Specifications />
      <About />
      <Testimonials />
      <NewsletterSignup />
      <Contact />
    </>
  );
};

export default HomePage;