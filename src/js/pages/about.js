import React from "react";

const About = () => {

    // agregar: download cv, certificates in grid, avatar and carousel skills
    return (
        <div className="min-h-screen bg-[#7F95D1] flex items-center">

            <div className="column-2 w-1/2">
                <div className="avatar-box flex justify-center">
                    <img 
                    src="https://picsum.photos/300" 
                    alt="avatar" 
                    className="rounded-full"/>
                </div>

            </div>

            <div className="column-2 w-1/2">
                
                <div className="about-text flex justify-center me-12">
                    <p>I'm a passionate Fullstack Developer with a love for creating effecive web solutions .
                        My journey into tech started with a deep curiosity about how websites and applications are built, which led me to immerse myself in learning everything from frontend design to backend functionality.
                    </p>
                </div>

               
            </div>
            
        </div>
    )
}

export default About;

