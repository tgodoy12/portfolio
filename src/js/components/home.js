import React from "react";
import { Link } from "react-router-dom";

import "../../styles/landing.css"
import PolygonTop from "./polygonTop";
import PolygonBottom from "./polygonBottom";

const Home = () => {
    return (
        <div className="isolate min-h-screen px-6 pt-14 lg:px-8 bg-[#000000]">
        <PolygonTop />

        {/* Sección principal */}
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <div className="flex flex-col items-center text-center">
            <div className="principal-text">
              <p className="text-xl text-[#FFFCF9] text-start">Hey there! I'm</p>
              <h1 className="mt-6 text-6xl font-bold text-[#FFFCF9] text-start">Trilce Godoy</h1>
          
              
              <p className="mt-5 text-sm text-[#FFFCF9] text-start">
                I'm a Fullstack Developer focused on building clean, efficient, <br />
                and scalable web applications.
              </p>

              {/* Botones social y see my work */}
              <div className="mt-10 flex justify-between">
              
              <div className="social-icons content-center flex gap-5">
                <a href="https://www.linkedin.com/in/trilce-godoy/" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-[#FF6978] hover:scale-125 rounded-full">
                    <i className="fab fa-linkedin fa-lg" style={{ color: "#FFFCF9" }}></i>
                  </div>
                </a>

                <a href="https://github.com/tgodoy12" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-[#FF6978] hover:scale-125 rounded-full">
                    <i className="fab fa-github fa-lg" style={{ color: "#FFFCF9" }}></i>
                  </div>
                </a>

                <Link to="/contact">
                  <div className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-[#FF6978] hover:scale-125 rounded-full">
                    <i className="fas fa-envelope fa-lg" style={{ color: "#FFFCF9" }}></i>
                  </div>
                </Link>
               
              </div>
              
              <div className="see-my-work-button me-5">
                <Link
                  to="/projects"
                  className="duration-300 font-semibold text-[#FFFCF9] group text-base"
                >
                  See my work{" "}
                  <i className="fas fa-angle-right p-2 transition-transform duration-300 w-8 h-8 group-hover:translate-x-2 group-hover:bg-[#FF6978] rounded-full"></i>
                </Link>
              </div>

              
            </div>
            
            </div>
            
             
            
          </div>
        </div>

        <PolygonBottom />
      </div>
    )
}

export default Home;