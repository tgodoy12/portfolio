import React from "react";
import { Link } from "react-router-dom";
import "../../styles/about.css"



const About = () => {

    // agregar: download cv, certificates in grid, avatar and carousel skills
    return (
        <div className="min-h-1/2vh flex items-center py-12 bg-[#FBFBFF]">
           
            <div className="lg:flex lg:gap-0 gap-10 w-full">
               
                {/* Columna más pequeña */}
                <div className="avatar-box flex justify-center flex-[1] mx-10 mb-10 lg:mb-0">
                    <div className="w-60 h-60 rounded-full overflow-hidden"> {/* Ajuste del contenedor */}
                        <img 
                            src="https://picsum.photos/300" 
                            alt="avatar" 
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                
                {/* Columna más ancha */}
                <div className="about-text flex flex-wrap flex-[2] mx-12 lg:ms-0 lg:me-12 lg:items-center xl:pe-24">
                    <h3 className="mb-3 text-xl font-semibold">About Me</h3>
                    <p className="mb-5 sm:mb-0">I'm a passionate Fullstack Developer with a love for creating effective web solutions.
                        My journey into tech started with a deep curiosity about how websites and applications are built, 
                        which led me to immerse myself in learning everything from frontend design to backend functionality. <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae expedita voluptas dolore. Consequuntur beatae similique quibusdam officia, obcaecati veniam rem recusandae amet. Ea repudiandae aut earum facilis voluptatum omnis quas?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore cupiditate, incidunt impedit quisquam expedita, possimus ipsam iste eum recusandae delectus suscipit quaerat? Officia, possimus dicta! Recusandae deserunt magnam vero ipsum.
                    </p>

                    <div className="flex justify-start lg:mt-5 mt-5">
                        <Link
                        to="/"
                        className="duration-300 font-semibold text-[#000000] group text-base"
                        >
                        Download CV
                        <i className="fas fa-angle-right p-2 transition-transform duration-300 w-8 h-8 group-hover:translate-x-2 group-hover:bg-[#FF6978] rounded-full"></i>
                        </Link>
                    </div>
                
             

                </div>
                
            </div>

            
            
            
            

            
        </div>
    )
}

export default About;

