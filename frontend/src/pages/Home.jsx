import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />   
      <BackToTop />
      <Footer />

    </div>
  );
}

export default Home;
