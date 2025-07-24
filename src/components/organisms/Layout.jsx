import React from "react";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;