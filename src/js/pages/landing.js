import React from "react";
import "../../styles/landing.css"

import About from "../components/about";
import Home from "../components/home";
import SkillsCarousel from "../components/skillsCarousel";
import Projects from "../components/projects";


const Landing = () => {
  return (
    <div className="landing min-h-screen">
      
      <Home />

      <About />

      <SkillsCarousel />

      <Projects />
    </div>
    
  );
};

export default Landing;