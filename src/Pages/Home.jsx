import React from "react";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const Home = ({ data }) => {
  return (
    <div className="animation-style">
      <HeroSection />
      <About />
      <Skills />
      <Projects data={data} />
      <Contact />
    </div>
  );
};

export default Home;
