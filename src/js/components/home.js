import React from "react";
import { Link } from "react-router-dom";

import "../../styles/landing.css"
import "../../styles/App.css"
import Button from "./button";


const Home = () => {
    return (
        <div className="isolate min-h-screen px-6 pt-14 lg:px-8 bg-[--color-darkest]">
        

        {/* Sección principal */}
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <div className="flex flex-col items-center text-center">
            <div className="principal-text">
              <p className="text-xl text-[--color-text] text-start">Hey there! I'm</p>
              <h1 className="mt-6 text-6xl font-bold text-[--color-text] text-start"><span className="text-[--color-mint]">TRILCE</span> GODOY</h1>
          
              
              <p className="mt-5 text-sm text-[#FFFCF9] text-start">
                I'm a <span className="text-[--color-pink]">Fullstack Developer</span> focused on building clean, efficient, <br />
                and scalable web applications.
              </p>

              {/* Botones social y see my work */}
              <div className="mt-10 flex justify-between">
              
              <div className="social-icons content-center flex gap-5">
                <a href="https://www.linkedin.com/in/trilce-godoy/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-10 h-10
                    flex items-center justify-center
                    border border-[--color-mint] rounded-md 
                    hover:bg-[--color-mint]"
                    icon={<i className="fab fa-linkedin fa-lg" style={{ color: "#FFFCF9" }}></i>}
                   
                  />
                </a>

                <a href="https://github.com/tgodoy12" target="_blank" rel="noopener noreferrer">
                  <Button className="w-10 h-10 
                  flex items-center justify-center
                  border border-[--color-mint] rounded-md 
                  hover:bg-[--color-mint]"
                  icon={<i className="fab fa-github fa-lg" style={{ color: "#FFFCF9" }}></i>}
            
                  />
                  
                </a>

                <Link to="/contact">
                  <Button className="w-10 h-10 
                  flex items-center justify-center
                  border border-[--color-mint] rounded-md 
                  hover:bg-[--color-mint]"
                  icon={<i className="fas fa-envelope fa-lg" style={{ color: "#FFFCF9" }}></i>}
                  />
                </Link>
               
              </div>
              
              <div className="see-my-work-button me-5">
                <Link
                  to="/projects"
                  className="duration-300 font-semibold text-[#FFFCF9] group text-base"
                >
                  See my work{" "}
                  <i className="fas fa-angle-right p-2 transition-transform duration-300 w-8 h-8 group-hover:translate-x-2 group-hover:bg-[--color-mint] rounded-full"></i>
                </Link>
              </div>

              
            </div>
            
            </div>
            
             
            
          </div>
        </div>

      </div>
    )
}

export default Home;