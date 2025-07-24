import React from "react";
import Hero from "@/components/organisms/Hero";
import Features from "@/components/organisms/Features";
import About from "@/components/organisms/About";
import Testimonials from "@/components/organisms/Testimonials";
import Contact from "@/components/organisms/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;