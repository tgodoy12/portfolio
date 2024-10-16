import React from "react";
// import PolygonTop from "./polygonTop";
import ProjectCard from "./projectCard";


const Projects = () => {

    return (
        <div className=" min-h-screen bg-[#000000] flex flex-col justify-center mx-auto px-24 sm:px-32 lg:px-36 xl:px-72">
            
            <div className="title text-3xl mb-24">
                Projects
            </div>

            <div class="
                grid grid-cols-1 gap-4
                justify-items-center
                md:grid-cols-2 
                xl:grid-cols-3">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>



        </div>
    )
}

export default Projects;